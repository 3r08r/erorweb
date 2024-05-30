import { SpeedInsights } from "@vercel/speed-insights/next"
import {Component} from "@/components/component/component";

export default function Page() {
  return (
    <div>
        <SpeedInsights />
      <Component />
    </div>
  );
}