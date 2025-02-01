import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { useNotifications } from "@/context/NotificationContext"
import { X } from "lucide-react"

const Notifications: React.FC = () => {
  const { notifications, removeNotification } = useNotifications()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Notifications</h1>
      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          {notifications.length === 0 ? (
            <p>No new notifications</p>
          ) : (
            <ul className="space-y-2">
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className={`p-4 rounded-lg flex justify-between items-center ${
                    notification.type === "info"
                      ? "bg-blue-100 text-blue-800"
                      : notification.type === "success"
                        ? "bg-green-100 text-green-800"
                        : notification.type === "warning"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                  }`}
                >
                  <span>{notification.message}</span>
                  <button
                    onClick={() => removeNotification(notification.id)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default Notifications

