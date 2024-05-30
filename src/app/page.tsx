import { SpeedInsights } from "@vercel/speed-insights/next"
import {Component} from "@/components/component/component";

export default function Page() {
  return (
    <>
        <SpeedInsights/>
        <Component/>
    </>
  )
      ;
}