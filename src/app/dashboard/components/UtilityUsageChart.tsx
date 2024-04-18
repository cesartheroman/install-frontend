import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import BarChart from "@/app/components/charts/BarChart";
import { User } from "@/app/interfaces";

const UtilityUsageChart = ({ userData }: { userData: User }) => (
  <Card className="lg:col-span-2" x-chunk="dashboard-01-chunk-4">
    <CardHeader className="flex flex-row items-center">
      <div className="grid gap-2">
        <CardTitle>Utility Usage by Appliance{userData.zip}</CardTitle>
        <CardDescription>Recent utility usage.</CardDescription>
      </div>
    </CardHeader>
    <CardContent>
      <BarChart />
    </CardContent>
  </Card>
);

export default UtilityUsageChart;
