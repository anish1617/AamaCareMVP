import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

interface Notification {
  id: number
  message: string
  type: "info" | "success" | "warning" | "error"
}

interface NotificationContextType {
  notifications: Notification[]
  addNotification: (message: string, type: Notification["type"]) => void
  removeNotification: (id: number) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export const useNotifications = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error("useNotifications must be used within a NotificationProvider")
  }
  return context
}

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = (message: string, type: Notification["type"]) => {
    const id = Date.now()
    setNotifications((prev) => [...prev, { id, message, type }])
  }

  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }

  useEffect(() => {
    if (notifications.length > 0) {
      const timer = setTimeout(() => {
        removeNotification(notifications[0].id)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [notifications, removeNotification]) // Added removeNotification to dependencies

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  )
}

