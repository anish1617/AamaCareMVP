import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const BabyHealth = () => {
  const growthData = [
    { month: 1, weight: 7.5, height: 20 },
    { month: 2, weight: 9.5, height: 22 },
    { month: 3, weight: 11, height: 24 },
    { month: 4, weight: 13, height: 25 },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Growth Chart</CardTitle>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Line yAxisId="left" type="monotone" dataKey="weight" stroke="hsl(var(--primary))" name="Weight (lbs)" />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="height"
                stroke="hsl(var(--secondary))"
                name="Height (inches)"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Latest Measurements</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Weight</span>
              <span className="font-semibold">13 lbs</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Height</span>
              <span className="font-semibold">25 inches</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Head Circumference</span>
              <span className="font-semibold">16 inches</span>
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Vaccinations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>DTaP (4 months)</li>
            <li>Hib (4 months)</li>
            <li>IPV (4 months)</li>
            <li>PCV13 (4 months)</li>
            <li>Rotavirus (4 months)</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default BabyHealth

