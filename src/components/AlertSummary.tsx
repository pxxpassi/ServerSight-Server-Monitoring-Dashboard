"use client";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useEffect, useState} from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
} from "recharts";

interface AlertCounts {
  critical: number;
  medium: number;
  low: number;
}

const mockAlertCounts: AlertCounts = {
  critical: 5,
  medium: 10,
  low: 25,
};

const COLORS = ["hsl(var(--chart-2))", "hsl(var(--destructive))", "hsl(var(--chart-4))"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomTooltip = ({active, payload}: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border rounded p-2 shadow-md">
        <p className="text-sm font-semibold">{payload[0].name}</p>
        <p className="text-xs">Value: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export const AlertSummary = () => {
  const [alertCounts, setAlertCounts] = useState(mockAlertCounts);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // TODO: Fetch real data from an API endpoint.
    // fetchAlertCounts().then(data => setAlertCounts(data));
  }, []);

  const data = [
    {name: "Clear", value: alertCounts.low},
    {name: "Critical", value: alertCounts.critical},
    {name: "Trouble", value: alertCounts.medium},
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Alert Summary</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        {isClient ? (
          <>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip/>}/>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center mt-4">
              {data.map((entry, index) => (
                <div key={`legend-${index}`} className="flex items-center mr-4">
                  <div
                    className="w-3 h-3 rounded-full mr-1"
                    style={{backgroundColor: COLORS[index % COLORS.length]}}
                  />
                  <span className="text-sm">{entry.name}</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          "Loading..."
        )}
      </CardContent>
    </Card>
  );
};
