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
      <CardDescription>See your electric cost by KwH</CardDescription>
    </CardHeader>
    <CardContent className="grid gap-8">
      <div className="text-2xl font-flex items-center gap-4">$231.89</div>
      <p className="text-xs text-muted-foreground">+20.1% from last month</p>
    </CardContent>
  </Card>
);

export default CostComparisonTool;
