"use client";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useEffect, useState} from "react";

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

export const AlertSummary = () => {
  const [alertCounts, setAlertCounts] = useState(mockAlertCounts);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // TODO: Fetch real data from an API endpoint.
    // fetchAlertCounts().then(data => setAlertCounts(data));
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Alert Summary</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex justify-between">
          <span>Critical:</span>
          <span>{isClient ? alertCounts.critical : "Loading..."}</span>
        </div>
        <div className="flex justify-between">
          <span>Medium:</span>
          <span>{isClient ? alertCounts.medium : "Loading..."}</span>
        </div>
        <div className="flex justify-between">
          <span>Low:</span>
          <span>{isClient ? alertCounts.low : "Loading..."}</span>
        </div>
      </CardContent>
    </Card>
  );
};
