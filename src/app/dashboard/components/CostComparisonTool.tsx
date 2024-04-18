import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

const CostComparisonTool = () => (
  <Card x-chunk="dashboard-01-chunk-5">
    <CardHeader>
      <CardTitle>Cost Comparison Tool</CardTitle>
      <CardDescription>See your Energy Breakdown!</CardDescription>
    </CardHeader>
    <CardContent className="grid gap-8">
      <div className="text-lg font-flex items-center gap-4">
        <p className="text-md font-flex items-center gap-4">
          Energy Breakdown by Cost
        </p>
        $85 / month average
        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
      </div>
    </CardContent>
    <CardContent className="grid gap-8">
      <div className="text-lg font-flex items-center gap-4">
        <p className="text-md font-flex items-center gap-4">
          Energy Breakdown by Savings
        </p>
        $10 / month average
        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
      </div>
    </CardContent>
    <CardContent className="grid gap-8">
      <p className="text-xs text-muted-foreground">
        Discover Other Savings via Grid Interactive Programs
      </p>
    </CardContent>
  </Card>
);

export default CostComparisonTool;
