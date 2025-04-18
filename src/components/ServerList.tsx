"use client";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useEffect, useState} from "react";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

interface ServerInfo {
  name: string;
  status: string;
  cpuUsage: number;
  ramUsage: number;
  networkTraffic: number;
  ipAddress: string;
  provider: string;
  createdAt: string;
}

const mockServerData: ServerInfo[] = [
  {name: "Server A", status: "Active", cpuUsage: 60, ramUsage: 70, networkTraffic: 150, ipAddress: "192.168.1.100", provider: "AWS", createdAt: "2024-01-01"},
  {name: "Server B", status: "Inactive", cpuUsage: 30, ramUsage: 40, networkTraffic: 80, ipAddress: "192.168.1.101", provider: "GCP", createdAt: "2024-01-05"},
  {name: "Server C", status: "Active", cpuUsage: 80, ramUsage: 90, networkTraffic: 200, ipAddress: "192.168.1.102", provider: "Azure", createdAt: "2024-01-10"},
];

export const ServerList = () => {
  const [serverData, setServerData] = useState(mockServerData);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // TODO: Fetch real data from an API endpoint.
    // fetchServerData().then(data => setServerData(data));
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Server List</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {isClient ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>CPU Usage</TableHead>
                <TableHead>RAM Usage</TableHead>
                <TableHead>Network Traffic (Mbps)</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead>Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {serverData.map((server) => (
                <TableRow key={server.name}>
                  <TableCell>{server.name}</TableCell>
                  <TableCell>{server.status}</TableCell>
                  <TableCell>{server.cpuUsage}%</TableCell>
                  <TableCell>{server.ramUsage}%</TableCell>
                  <TableCell>{server.networkTraffic}</TableCell>
                  <TableCell>{server.ipAddress}</TableCell>
                  <TableCell>{server.provider}</TableCell>
                  <TableCell>{server.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          "Loading..."
        )}
      </CardContent>
    </Card>
  );
};

