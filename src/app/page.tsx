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
    <div className="flex justify-center">
      <div className="container max-w-7xl p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AlertSummary />
          <ResourceMonitoring />
          <NetworkTrafficGraph />
          <DailyCPUUsage/>
          <div className="md:col-span-2">
            <ServerList />
          </div>
        </div>
      </div>
    </div>
  );
}
