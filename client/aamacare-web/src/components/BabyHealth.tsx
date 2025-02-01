import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Baby, Ruler, Weight, Syringe } from "lucide-react"

const BabyHealth: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Baby Health</h2>
        <Button>Log New Data</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Age</CardTitle>
            <Baby className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3 months</div>
            <p className="text-xs text-muted-foreground mt-2">Born on February 15, 2023</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weight</CardTitle>
            <Weight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.8 kg</div>
            <p className="text-xs text-muted-foreground mt-2">50th percentile</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Height</CardTitle>
            <Ruler className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">61 cm</div>
            <p className="text-xs text-muted-foreground mt-2">75th percentile</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Vaccination</CardTitle>
            <Syringe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">June 15</div>
            <p className="text-xs text-muted-foreground mt-2">4-month checkup</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="growth">
        <TabsList>
          <TabsTrigger value="growth">Growth Chart</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="feeding">Feeding</TabsTrigger>
        </TabsList>
        <TabsContent value="growth">
          <Card>
            <CardHeader>
              <CardTitle>Growth Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] bg-muted rounded-md"></div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="milestones">
          <Card>
            <CardHeader>
              <CardTitle>Developmental Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" checked readOnly />
                  <span>Smiles at people</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" checked readOnly />
                  <span>Can briefly calm themselves</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Tries to look at parent</span>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Coos, makes gurgling sounds</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="feeding">
          <Card>
            <CardHeader>
              <CardTitle>Feeding Log</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>8:00 AM</span>
                  <span>120 ml formula</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>11:30 AM</span>
                  <span>100 ml formula</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>3:00 PM</span>
                  <span>130 ml formula</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default BabyHealth

