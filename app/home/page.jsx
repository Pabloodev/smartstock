import ChartRadial from "./../ui/components/chartRadial"
import { ChartBarHorizontal } from "../ui/components/chartHorizontal"
import { ChartAreaInteractive } from "../ui/components/chartArea"

export default function Page() {
  return (
    <div>

      <h1 className="mb-10 text-3xl">Dashboards Gerais</h1>

      <div className="flex items-center gap-10 flex-wrap">
      <ChartRadial />
        <ChartBarHorizontal />
        <ChartAreaInteractive />
      </div>

    </div>

  )
}