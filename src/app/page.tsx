"use client";

import {AlertSummary} from "@/components/AlertSummary";
import {NetworkTrafficGraph} from "@/components/NetworkTrafficGraph";
import {ResourceMonitoring} from "@/components/ResourceMonitoring";
import {ServerList} from "@/components/ServerList";
import {useEffect, useState} from "react";
import {DailyCPUUsage} from "@/components/DailyCPUUsage";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="p-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <AlertSummary />
      <ResourceMonitoring />
      <NetworkTrafficGraph />
        <DailyCPUUsage/>
      <div className="md:col-span-2 lg:col-span-3">
        <ServerList />
      </div>
    </div>
    </div>
  );
}
