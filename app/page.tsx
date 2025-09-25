"use client";

import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PointsSummary } from "./components/PointsSummary";
import { ReleasedRedeemedChart } from "./components/ReleasedRedeemedChart";


export default function Page() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      <PointsSummary />
      <div className="pt-6">
      <ReleasedRedeemedChart />
      </div>
      
    </div>
  );
}
