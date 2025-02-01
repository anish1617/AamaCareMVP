import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

const PregnancyTracker: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Pregnancy Tracker</h2>

      <Card>
        <CardHeader>
          <CardTitle>Your Pregnancy Journey</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Week 24</span>
              <span>40 weeks</span>
            </div>
            <Progress value={60} />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">You are 60% through your pregnancy!</p>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Week 24 Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Your baby is now the size of a corn on the cob! Key developments this week:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Baby's face is almost fully formed</li>
                <li>The inner ear is developing</li>
                <li>Taste buds are forming on the tongue</li>
                <li>Fingerprints and footprints are now in place</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="symptoms">
          <Card>
            <CardHeader>
              <CardTitle>Common Symptoms</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li>Backaches</li>
                <li>Stretch marks</li>
                <li>Braxton Hicks contractions</li>
                <li>Increased appetite</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="nutrition">
          <Card>
            <CardHeader>
              <CardTitle>Nutrition Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li>Increase your calcium intake</li>
                <li>Eat more iron-rich foods</li>
                <li>Stay hydrated</li>
                <li>Consider adding a prenatal vitamin</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default PregnancyTracker

