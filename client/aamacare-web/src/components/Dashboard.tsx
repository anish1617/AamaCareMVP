import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Progress } from "./ui/progress"
import { Baby, Calendar, Heart, Users, TrendingUp, Weight, Apple } from "lucide-react"

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Welcome back, Sarah!</h1>
        <Button>Add New Entry</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pregnancy Progress</CardTitle>
            <Baby className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Week 24</div>
            <Progress value={57} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">16 weeks to go</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Checkup</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">May 15, 2023</div>
            <p className="text-xs text-muted-foreground mt-2">Dr. Emily Johnson</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Baby's Health</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Excellent</div>
            <p className="text-xs text-muted-foreground mt-2">Last updated: 2 days ago</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Community</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5 New Posts</div>
            <p className="text-xs text-muted-foreground mt-2">In your followed topics</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Weight Tracker</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">68 kg</p>
                <p className="text-xs text-muted-foreground">Current Weight</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">+0.5 kg</p>
                <p className="text-xs text-muted-foreground">This Week</p>
              </div>
            </div>
            <div className="mt-4 h-[200px] bg-muted rounded-md"></div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Apple className="mr-2 h-4 w-4 text-green-500" />
                <span>Take prenatal vitamins</span>
              </li>
              <li className="flex items-center">
                <Weight className="mr-2 h-4 w-4 text-blue-500" />
                <span>Log today's weight</span>
              </li>
              <li className="flex items-center">
                <TrendingUp className="mr-2 h-4 w-4 text-orange-500" />
                <span>Track baby's movements</span>
              </li>
              <li className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-purple-500" />
                <span>Schedule next checkup</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard

