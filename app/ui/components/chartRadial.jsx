"use client"

import { TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/ui/components/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/ui/components/chart"

export const description = "A radial chart with stacked sections"

const chartData = [{ month: "january", zte: 1260, intelbras: 570, cianet: 170 }]

const chartConfig = {
  zte: {
    label: "zte",
    color: "var(--chart-1)",
  },
  intelbras: {
    label: "intelbras",
    color: "var(--chart-2)",
  },
  cianet: {
    label: "cianet",
    color: "var(--chart-3)",
  },
}

export default function ChartRadial() {
  const totalVisitors = chartData[0].zte + chartData[0].intelbras

  return (
    <Card className="flex flex-col w-[400px] h-[400px] text-white bg-black">
      <CardHeader className="items-center pb-0">
        <CardTitle>Aparelhos retirados em 6 meses</CardTitle>
        <CardDescription>Janeiro - Junho 2026</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-blue-500 text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-white"
                        >
                          Aparelhos
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="zte"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-zte)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="intelbras"
              fill="var(--color-intelbras)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="cianet"
              fill="var(--color-cianet)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
            
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Aparelhos com baixa de estoque <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  )
}
