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
  {time: "00:00", traffic: 100},
  {time: "01:00", traffic: 120},
  {time: "02:00", traffic: 150},
  {time: "03:00", traffic: 130},
  {time: "04:00", traffic: 160},
  {time: "05:00", traffic: 180},
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
