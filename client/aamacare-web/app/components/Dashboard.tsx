import { useState } from "react"
import { Bell, Calendar, ChevronLeft, ChevronRight, Heart, MessageCircle, User } from "lucide-react"
import PregnancyTracker from "./PregnancyTracker"
import CheckupReminders from "./CheckupReminders"
import BabyHealth from "./BabyHealth"
import Community from "./Community"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("pregnancy")
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const renderContent = () => {
    switch (activeTab) {
      case "pregnancy":
        return <PregnancyTracker />
      case "checkups":
        return <CheckupReminders />
      case "babyHealth":
        return <BabyHealth />
      case "community":
        return <Community />
      default:
        return <PregnancyTracker />
    }
  }

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`bg-card text-card-foreground transition-all duration-300 ease-in-out border-r border-border ${isSidebarCollapsed ? "w-16" : "w-64"}`}
      >
        <div className="p-4 flex justify-between items-center">
          {!isSidebarCollapsed && <h1 className="text-2xl font-bold">MomCare</h1>}
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            {isSidebarCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
        <nav className="mt-4">
          <ul className="space-y-1">
            {[
              { id: "pregnancy", icon: Heart, label: "Pregnancy" },
              { id: "checkups", icon: Calendar, label: "Checkups" },
              { id: "babyHealth", icon: User, label: "Baby Health" },
              { id: "community", icon: MessageCircle, label: "Community" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center w-full p-3 transition-colors hover:bg-accent hover:text-accent-foreground rounded-md ${
                    activeTab === item.id ? "bg-primary text-primary-foreground" : "text-foreground"
                  }`}
                >
                  <item.icon className={`${isSidebarCollapsed ? "mr-0" : "mr-3"}`} size={20} />
                  {!isSidebarCollapsed && <span>{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navigation bar */}
        <header className="bg-card text-card-foreground shadow-sm z-10">
          <div className="flex items-center justify-between px-4 py-2">
            <h2 className="text-xl font-semibold">
              {activeTab === "pregnancy" && "Pregnancy Tracker"}
              {activeTab === "checkups" && "Checkup Reminders"}
              {activeTab === "babyHealth" && "Baby Health"}
              {activeTab === "community" && "Community"}
            </h2>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">shadcn</p>
                      <p className="text-xs leading-none text-muted-foreground">m@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
          <div className="container mx-auto py-8">{renderContent()}</div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard

