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
  linearGradient,
  defs,
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
  {time: "Jul", traffic: 110},
  {time: "Aug", traffic: 130},
  {time: "Sep", traffic: 160},
  {time: "Oct", traffic: 140},
  {time: "Nov", traffic: 170},
  {time: "Dec", traffic: 190},
];

const chartConfig = {
  traffic: {label: "Incoming Traffic (Mbps)", color: "hsl(var(--primary))"},
};

// Custom tooltip to display traffic volume with units
const CustomTooltip = ({active, payload}: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border rounded p-2 shadow-md">
        <p className="text-sm font-semibold">{payload[0].payload.time}</p>
        <p className="text-xs">Traffic: {payload[0].value} Mbps</p>
      </div>
    );
  }
  return null;
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
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={networkTrafficData} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <defs>
                <linearGradient id="trafficGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartConfig.traffic.color} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={chartConfig.traffic.color} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="time" tick={{fontSize: 12}}/>
              <YAxis tick={{fontSize: 12}}/>
              <Tooltip content={<CustomTooltip/>}/>
              <Area
                type="monotone"
                dataKey="traffic"
                stroke={chartConfig.traffic.color}
                fill="url(#trafficGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          "Loading..."
        )}
      </CardContent>
    </Card>
  );
};
