import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell } from "lucide-react"

const CheckupReminders = () => {
  const upcomingCheckups = [
    { date: "2023-06-15", type: "Prenatal Checkup", time: "10:00 AM" },
    { date: "2023-07-01", type: "Ultrasound", time: "2:30 PM" },
    { date: "2023-07-20", type: "Glucose Test", time: "9:00 AM" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Upcoming Checkups</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {upcomingCheckups.map((checkup, index) => (
              <li key={index} className="flex items-center justify-between p-4 bg-accent rounded-lg">
                <div>
                  <p className="font-semibold text-lg">{checkup.type}</p>
                  <p className="text-muted-foreground">
                    {checkup.date} at {checkup.time}
                  </p>
                </div>
                <Bell size={24} className="text-primary" />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Checkup History</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>First Trimester Screening</span>
              <span className="text-muted-foreground">2023-04-10</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Anatomy Scan</span>
              <span className="text-muted-foreground">2023-05-15</span>
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recommended Tests</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Gestational Diabetes Screening</li>
            <li>Group B Strep Test</li>
            <li>Non-Invasive Prenatal Testing (NIPT)</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default CheckupReminders

