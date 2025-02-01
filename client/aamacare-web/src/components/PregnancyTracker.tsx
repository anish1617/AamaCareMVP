import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const PregnancyTracker = () => {
  const weeksPregnant = 28
  const totalWeeks = 40
  const progress = (weeksPregnant / totalWeeks) * 100

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Pregnancy Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={progress} className="w-full h-6" />
          <p className="mt-4 text-center text-xl text-muted-foreground">
            {weeksPregnant} weeks out of {totalWeeks}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>This Week's Development</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Your baby is now the size of an eggplant! They're developing rapidly, with lungs maturing and eyes beginning
            to open.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Tips for This Week</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Stay hydrated</li>
            <li>Practice prenatal yoga</li>
            <li>Start planning your nursery</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default PregnancyTracker

