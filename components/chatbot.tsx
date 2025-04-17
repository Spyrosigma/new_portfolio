"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircleIcon, XIcon, SendIcon } from "lucide-react"
import { io, type Socket } from "socket.io-client"

type Message = {
  text: string
  isBot: boolean
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [userId, setUserId] = useState<string | null>(null)
  const [socket, setSocket] = useState<Socket | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize Socket.IO with additional options
    const socketInstance = io("https://wild-kristi-spyrosigma-81e0cee1.koyeb.app/", {
      transports: ["websocket"],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      timeout: 10000,
    })

    socketInstance.on("connect", () => {
      console.log("Connected to server")
    })

    socketInstance.on("connect_error", (error) => {
      console.error("Connection error:", error)
    })

    socketInstance.on("set_user_id", (data) => {
      setUserId(data.user_id)
      console.log("Received user ID:", data.user_id)
      socketInstance.emit("join", { user_id: data.user_id })
    })

    socketInstance.on("bot_response", (message) => {
      addMessage(message.data, true)
    })

    setSocket(socketInstance)

    // Cleanup on unmount
    return () => {
      socketInstance.disconnect()
    }
  }, [])

  useEffect(() => {
    // Scroll to bottom when messages change
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const addMessage = (text: string, isBot: boolean) => {
    setMessages((prev) => [...prev, { text, isBot }])
  }

  const handleSendMessage = () => {
    if (inputValue.trim() && userId && socket) {
      addMessage(inputValue, false)
      socket.emit("user_message", { data: inputValue, user_id: userId })
      setInputValue("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chatbot Icon */}
      {!isOpen && (
      <Button onClick={() => setIsOpen(true)} className="fixed bottom-5 right-5 rounded-full h-14 w-14 p-0 shadow-lg z-[9999]">
        <MessageCircleIcon className="h-6 w-6" />
      </Button>
      )}

      {/* Chatbot Container */}
      {isOpen && (
      <Card className="fixed bottom-5 right-5 sm:w-[350px] h-[450px] shadow-lg flex flex-col z-[9999]">
        <CardHeader className="p-3 border-b flex flex-row items-center justify-between">
        <h3 className="font-medium">SpyroSigma</h3>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
          <XIcon className="h-4 w-4" />
        </Button>
        </CardHeader>
        <CardContent className="flex-grow overflow-y-auto p-3 space-y-3">
        {messages.length === 0 ? (
          <div className="text-center text-muted-foreground h-full flex items-center justify-center">
          <p>How can I help you today?</p>
          </div>
        ) : (
          messages.map((message, index) => (
          <div
            key={index}
            className={`max-w-[80%] p-3 rounded-lg ${
            message.isBot ? "bg-muted self-start" : "bg-primary text-primary-foreground self-end ml-auto"
            }`}
          >
            {message.text}
          </div>
          ))
        )}
        <div ref={messagesEndRef} />
        </CardContent>
        <CardFooter className="p-3 border-t">
        <div className="flex w-full gap-2">
          <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          className="flex-grow"
          />
          <Button size="icon" onClick={handleSendMessage}>
          <SendIcon className="h-4 w-4" />
          </Button>
        </div>
        </CardFooter>
      </Card>
      )}
    </>
  )
}
