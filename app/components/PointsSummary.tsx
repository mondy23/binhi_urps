import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Gift, ArrowDownCircle, Timer, CheckCircle } from "lucide-react"

export function PointsSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* Released Points */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Total Released</CardTitle>
          <Gift className="h-6 w-6 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">120,000</div>
          <p className="text-sm text-muted-foreground">+5% from last month</p>
        </CardContent>
      </Card>

      {/* Redeemed Points */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Total Redeemed</CardTitle>
          <ArrowDownCircle className="h-6 w-6 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">80,500</div>
          <p className="text-sm text-muted-foreground">+3% from last month</p>
        </CardContent>
      </Card>

      {/* Expired Points */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Total Expired</CardTitle>
          <Timer className="h-6 w-6 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">5,200</div>
          <p className="text-sm text-muted-foreground">-2% from last month</p>
        </CardContent>
      </Card>

      {/* Active Points */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Total Active</CardTitle>
          <CheckCircle className="h-6 w-6 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">34,300</div>
          <p className="text-sm text-muted-foreground">stable</p>
        </CardContent>
      </Card>
    </div>
  )
}
