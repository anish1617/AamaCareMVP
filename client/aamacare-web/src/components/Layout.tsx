import type React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useTheme } from "@/components/theme-provider"
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
import { Moon, Sun, Laptop, Menu, Home, Baby, Heart, Users, Bell, User } from "lucide-react"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { setTheme, theme } = useTheme()
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const sidebarItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: Baby, label: "Pregnancy Tracker", path: "/pregnancy" },
    { icon: Heart, label: "Baby Health", path: "/baby-health" },
    { icon: Users, label: "Community", path: "/community" },
    { icon: Bell, label: "Notifications", path: "/notifications" },
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarCollapsed ? "w-16" : "w-64"
        } transition-all duration-300 ease-in-out bg-card text-card-foreground p-4 border-r border-border`}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-xl font-bold ${sidebarCollapsed ? "hidden" : "block"}`}>AamaCare</h1>
          <Button variant="ghost" size="icon" onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
            <Menu className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </div>
        <nav>
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="flex items-center p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <item.icon className="w-6 h-6" />
                  <span className={`ml-3 ${sidebarCollapsed ? "hidden" : "block"}`}>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation */}
        <header className="bg-background border-b border-border p-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  {theme === "dark" ? (
                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                  ) : theme === "light" ? (
                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                  ) : (
                    <Laptop className="h-[1.2rem] w-[1.2rem]" />
                  )}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun className="mr-2 h-4 w-4" />
                  <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon className="mr-2 h-4 w-4" />
                  <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  <Laptop className="mr-2 h-4 w-4" />
                  <span>System</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatars/01.png" alt="@username" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">username</p>
                    <p className="text-xs leading-none text-muted-foreground">user@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell className="mr-2 h-4 w-4" />
                  <span>Notifications</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
          <div className="container mx-auto px-6 py-8">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default Layout

