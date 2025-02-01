import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const weeklyData = [
  { week: 1, description: "Your baby is the size of a poppy seed." },
  { week: 4, description: "Your baby is the size of a raspberry." },
  { week: 8, description: "Your baby is the size of a kidney bean." },
  { week: 12, description: "Your baby is the size of a lime." },
  { week: 16, description: "Your baby is the size of an avocado." },
  { week: 20, description: "Your baby is the size of a banana." },
  { week: 24, description: "Your baby is the size of an ear of corn." },
  { week: 28, description: "Your baby is the size of an eggplant." },
  { week: 32, description: "Your baby is the size of a squash." },
  { week: 36, description: "Your baby is the size of a honeydew melon." },
  { week: 40, description: "Your baby is the size of a watermelon." },
]

const PregnancyTracker: React.FC = () => {
  const [dueDate, setDueDate] = useState<Date | null>(null)
  const [weight, setWeight] = useState<number[]>([])
  const [currentWeek, setCurrentWeek] = useState(1)

  const handleDueDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(event.target.value)
    setDueDate(date)
    const today = new Date()
    const weeksDiff = Math.floor((today.getTime() - date.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 40
    setCurrentWeek(weeksDiff > 0 && weeksDiff <= 40 ? weeksDiff : 1)
  }

  const handleWeightSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newWeight = Number(formData.get("weight"))
    if (newWeight) {
      setWeight([...weight, newWeight])
    }
  }

  const weightData = weight.map((w, index) => ({
    week: index + 1,
    weight: w,
  }))

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Pregnancy Tracker</h1>

      <Card>
        <CardHeader>
          <CardTitle>Due Date Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="due-date">Enter your due date:</Label>
          <Input id="due-date" type="date" onChange={handleDueDateChange} className="mt-2" />
          {dueDate && <p className="mt-4">You are currently in week {currentWeek} of your pregnancy.</p>}
        </CardContent>
      </Card>

      <Tabs defaultValue="weekly-guide">
        <TabsList>
          <TabsTrigger value="weekly-guide">Weekly Guide</TabsTrigger>
          <TabsTrigger value="symptom-tracker">Symptom Tracker</TabsTrigger>
          <TabsTrigger value="weight-tracker">Weight Tracker</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly-guide">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Pregnancy Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyData.map((data) => (
                  <div
                    key={data.week}
                    className={`p-4 rounded-lg ${currentWeek === data.week ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                  >
                    <h3 className="font-bold">Week {data.week}</h3>
                    <p>{data.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="symptom-tracker">
          <Card>
            <CardHeader>
              <CardTitle>Symptom Tracker</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Nausea", "Fatigue", "Cravings", "Mood Swings", "Backache"].map((symptom) => (
                  <div key={symptom} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={symptom}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor={symptom}>{symptom}</label>
                  </div>
                ))}
                <Button>Save Symptoms</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weight-tracker">
          <Card>
            <CardHeader>
              <CardTitle>Weight Tracker</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleWeightSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="weight">Enter your weight (in kg):</Label>
                  <Input id="weight" name="weight" type="number" step="0.1" required className="mt-2" />
                </div>
                <Button type="submit">Add Weight</Button>
              </form>
              <div className="h-[300px] mt-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weightData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="weight" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default PregnancyTracker

