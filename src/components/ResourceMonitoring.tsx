"use client";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart";
import {useEffect, useState} from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ResourceUsageData {
  time: string;
  cpu: number;
  ram: number;
  disk: number;
  app: number;
}

const mockResourceUsageData: ResourceUsageData[] = [
  {time: "00:00", cpu: 40, ram: 30, disk: 20, app: 10},
  {time: "01:00", cpu: 50, ram: 40, disk: 30, app: 20},
  {time: "02:00", cpu: 60, ram: 50, disk: 40, app: 30},
  {time: "03:00", cpu: 70, ram: 60, disk: 50, app: 40},
  {time: "04:00", cpu: 80, ram: 70, disk: 60, app: 50},
  {time: "05:00", cpu: 90, ram: 80, disk: 70, app: 60},
];

const chartConfig = {
  cpu: {label: "CPU Usage", color: "hsl(var(--chart-1))"},
  ram: {label: "RAM Usage", color: "hsl(var(--chart-2))"},
  disk: {label: "Disk Usage", color: "hsl(var(--chart-3))"},
  app: {label: "App Usage", color: "hsl(var(--chart-4))"},
};

export const ResourceMonitoring = () => {
  const [resourceUsageData, setResourceUsageData] = useState(mockResourceUsageData);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // TODO: Fetch real data from an API endpoint.
    // fetchResourceUsageData().then(data => setResourceUsageData(data));
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Monitoring</CardTitle>
      </CardHeader>
      <CardContent>
        {isClient ? (
          <ChartContainer config={chartConfig} className="h-[200px]">
            <AreaChart data={resourceUsageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="cpu" stroke={chartConfig.cpu.color} fill={chartConfig.cpu.color} />
              <Area type="monotone" dataKey="ram" stroke={chartConfig.ram.color} fill={chartConfig.ram.color} />
              <Area type="monotone" dataKey="disk" stroke={chartConfig.disk.color} fill={chartConfig.disk.color} />
              <Area type="monotone" dataKey="app" stroke={chartConfig.app.color} fill={chartConfig.app.color} />
            </AreaChart>
            <ChartLegend>
              <ChartLegendContent />
            </ChartLegend>
          </ChartContainer>
        ) : (
          "Loading..."
        )}
      </CardContent>
    </Card>
  );
};
