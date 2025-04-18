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

interface NetworkTrafficData {
  time: string;
  traffic: number;
}

const mockNetworkTrafficData: NetworkTrafficData[] = [
  {time: "Jan", traffic: 100},
  {time: "Feb", traffic: 120},
  {time: "Mar", traffic: 150},
  {time: "Apr", traffic: 130},
  {time: "May", traffic: 160},
  {time: "Jun", traffic: 180},
  {time: "Jul", traffic: 100},
  {time: "Aug", traffic: 120},
  {time: "Sep", traffic: 150},
  {time: "Oct", traffic: 130},
  {time: "Nov", traffic: 160},
  {time: "Dec", traffic: 180},
];

const chartConfig = {
  traffic: {label: "Incoming Traffic (Mbps)", color: "hsl(var(--primary))"},
};

export const NetworkTrafficGraph = () => {
  const [networkTrafficData, setNetworkTrafficData] = useState(mockNetworkTrafficData);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // TODO: Fetch real data from an API endpoint.
    // fetchNetworkTrafficData().then(data => setNetworkTrafficData(data));
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Network Traffic</CardTitle>
      </CardHeader>
      <CardContent>
        {isClient ? (
          <ChartContainer config={chartConfig} className="h-[200px]">
            <AreaChart data={networkTrafficData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="traffic" stroke={chartConfig.traffic.color} fill={chartConfig.traffic.color} />
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

