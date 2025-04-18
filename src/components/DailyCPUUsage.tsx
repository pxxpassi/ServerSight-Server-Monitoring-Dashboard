"use client";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useEffect, useState} from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface CPUUsageData {
  time: string;
  usage: number;
}

const mockCPUUsageData: CPUUsageData[] = [
  {time: "00:00", usage: 40},
  {time: "03:00", usage: 30},
  {time: "06:00", usage: 20},
  {time: "09:00", usage: 57},
  {time: "12:00", usage: 60},
  {time: "15:00", usage: 80},
  {time: "18:00", usage: 40},
  {time: "21:00", usage: 70},
];

const CustomTooltip = ({active, payload}: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border rounded p-2 shadow-md">
        <p className="text-sm font-semibold">{payload[0].payload.time}</p>
        <p className="text-xs">Usage: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export const DailyCPUUsage = () => {
  const [cpuUsageData, setCPUUsageData] = useState(mockCPUUsageData);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // TODO: Fetch real data from an API endpoint.
    // fetchCPUUsageData().then(data => setCPUUsageData(data));
  }, []);

  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Daily CPU Usage</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {isClient ? (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={cpuUsageData} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="time" style={{fontSize: '0.75rem'}}/>
              <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} style={{fontSize: '0.75rem'}}/>
              <Tooltip content={<CustomTooltip/>}/>
              <Bar dataKey="usage" fill="hsl(var(--primary))"/>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          "Loading..."
        )}
      </CardContent>
    </Card>
  );
};
