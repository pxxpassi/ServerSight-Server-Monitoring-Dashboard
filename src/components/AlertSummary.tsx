"use client";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useEffect, useState} from "react";
import {Cell, Pie, PieChart, ResponsiveContainer} from "recharts";

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

const COLORS = ["hsl(var(--destructive))", "hsl(var(--chart-4))", "hsl(var(--chart-2))"];

export const AlertSummary = () => {
  const [alertCounts, setAlertCounts] = useState(mockAlertCounts);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // TODO: Fetch real data from an API endpoint.
    // fetchAlertCounts().then(data => setAlertCounts(data));
  }, []);

  const data = [
    {name: "Critical", value: alertCounts.critical},
    {name: "Medium", value: alertCounts.medium},
    {name: "Low", value: alertCounts.low},
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Alert Summary</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        {isClient ? (
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        ) : (
          "Loading..."
        )}
      </CardContent>
    </Card>
  );
};
