import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const vaccineSchedule = [
  { age: "2 months", vaccines: ["DTaP", "IPV", "Hib", "PCV13", "RV"] },
  { age: "4 months", vaccines: ["DTaP", "IPV", "Hib", "PCV13", "RV"] },
  { age: "6 months", vaccines: ["DTaP", "IPV", "Hib", "PCV13", "RV", "Influenza"] },
  { age: "12 months", vaccines: ["MMR", "Varicella", "Hep A"] },
  { age: "15 months", vaccines: ["DTaP", "Hib", "PCV13"] },
  { age: "18 months", vaccines: ["Hep A"] },
]

const milestones = [
  { age: "2 months", milestone: "Smiles at people" },
  { age: "4 months", milestone: "Babbles and copies sounds" },
  { age: "6 months", milestone: "Rolls over in both directions" },
  { age: "9 months", milestone: "May be afraid of strangers" },
  { age: "1 year", milestone: "Responds to simple requests" },
  { age: "18 months", milestone: "Walks alone and pulls toys while walking" },
]

const BabyHealth: React.FC = () => {
  const [growthData, setGrowthData] = useState<{ age: number; height: number; weight: number }[]>([])
  const [babyBirthDate, setBabyBirthDate] = useState<Date | null>(null)

  const handleGrowthSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const age = Number(formData.get("age"))
    const height = Number(formData.get("height"))
    const weight = Number(formData.get("weight"))
    if (age && height && weight) {
      setGrowthData([...growthData, { age, height, weight }])
    }
  }

  const handleBirthDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(event.target.value)
    setBabyBirthDate(date)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Baby Health Tracker</h1>

      <Card>
        <CardHeader>
          <CardTitle>Baby's Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="birth-date">Enter baby's birth date:</Label>
          <Input id="birth-date" type="date" onChange={handleBirthDateChange} className="mt-2" />
        </CardContent>
      </Card>

      <Tabs defaultValue="growth">
        <TabsList>
          <TabsTrigger value="growth">Growth Chart</TabsTrigger>
          <TabsTrigger value="vaccines">Vaccination Schedule</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
        </TabsList>

        <TabsContent value="growth">
          <Card>
            <CardHeader>
              <CardTitle>Growth Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleGrowthSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="age">Age (in months):</Label>
                  <Input id="age" name="age" type="number" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="height">Height (in cm):</Label>
                  <Input id="height" name="height" type="number" step="0.1" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="weight">Weight (in kg):</Label>
                  <Input id="weight" name="weight" type="number" step="0.1" required className="mt-2" />
                </div>
                <Button type="submit">Add Growth Data</Button>
              </form>
              <div className="h-[300px] mt-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={growthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="age" label={{ value: "Age (months)", position: "insideBottom", offset: -5 }} />
                    <YAxis yAxisId="left" label={{ value: "Height (cm)", angle: -90, position: "insideLeft" }} />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      label={{ value: "Weight (kg)", angle: 90, position: "insideRight" }}
                    />
                    <Tooltip />
                    <Line yAxisId="left" type="monotone" dataKey="height" stroke="#8884d8" name="Height" />
                    <Line yAxisId="right" type="monotone" dataKey="weight" stroke="#82ca9d" name="Weight" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vaccines">
          <Card>
            <CardHeader>
              <CardTitle>Vaccination Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {vaccineSchedule.map((schedule, index) => (
                  <div key={index} className="p-4 bg-muted rounded-lg">
                    <h3 className="font-bold">{schedule.age}</h3>
                    <ul className="list-disc list-inside">
                      {schedule.vaccines.map((vaccine, vIndex) => (
                        <li key={vIndex}>{vaccine}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="milestones">
          <Card>
            <CardHeader>
              <CardTitle>Developmental Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={`milestone-${index}`}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor={`milestone-${index}`}>
                      <span className="font-bold">{milestone.age}:</span> {milestone.milestone}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default BabyHealth

