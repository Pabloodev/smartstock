"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/ui/components/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/ui/components/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/ui/components/select"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", Retiradas: 222, Troca: 150 },
  { date: "2024-04-02", Retiradas: 97, Troca: 180 },
  { date: "2024-04-03", Retiradas: 167, Troca: 120 },
  { date: "2024-04-04", Retiradas: 242, Troca: 260 },
  { date: "2024-04-05", Retiradas: 373, Troca: 290 },
  { date: "2024-04-06", Retiradas: 301, Troca: 340 },
  { date: "2024-04-07", Retiradas: 245, Troca: 180 },
  { date: "2024-04-08", Retiradas: 409, Troca: 320 },
  { date: "2024-04-09", Retiradas: 59, Troca: 110 },
  { date: "2024-04-10", Retiradas: 261, Troca: 190 },
  { date: "2024-04-11", Retiradas: 327, Troca: 350 },
  { date: "2024-04-12", Retiradas: 292, Troca: 210 },
  { date: "2024-04-13", Retiradas: 342, Troca: 380 },
  { date: "2024-04-14", Retiradas: 137, Troca: 220 },
  { date: "2024-04-15", Retiradas: 120, Troca: 170 },
  { date: "2024-04-16", Retiradas: 138, Troca: 190 },
  { date: "2024-04-17", Retiradas: 446, Troca: 360 },
  { date: "2024-04-18", Retiradas: 364, Troca: 410 },
  { date: "2024-04-19", Retiradas: 243, Troca: 180 },
  { date: "2024-04-20", Retiradas: 89, Troca: 150 },
  { date: "2024-04-21", Retiradas: 137, Troca: 200 },
  { date: "2024-04-22", Retiradas: 224, Troca: 170 },
  { date: "2024-04-23", Retiradas: 138, Troca: 230 },
  { date: "2024-04-24", Retiradas: 387, Troca: 290 },
  { date: "2024-04-25", Retiradas: 215, Troca: 250 },
  { date: "2024-04-26", Retiradas: 75, Troca: 130 },
  { date: "2024-04-27", Retiradas: 383, Troca: 420 },
  { date: "2024-04-28", Retiradas: 122, Troca: 180 },
  { date: "2024-04-29", Retiradas: 315, Troca: 240 },
  { date: "2024-04-30", Retiradas: 454, Troca: 380 },
  { date: "2024-05-01", Retiradas: 165, Troca: 220 },
  { date: "2024-05-02", Retiradas: 293, Troca: 310 },
  { date: "2024-05-03", Retiradas: 247, Troca: 190 },
  { date: "2024-05-04", Retiradas: 385, Troca: 420 },
  { date: "2024-05-05", Retiradas: 481, Troca: 390 },
  { date: "2024-05-06", Retiradas: 498, Troca: 520 },
  { date: "2024-05-07", Retiradas: 388, Troca: 300 },
  { date: "2024-05-08", Retiradas: 149, Troca: 210 },
  { date: "2024-05-09", Retiradas: 227, Troca: 180 },
  { date: "2024-05-10", Retiradas: 293, Troca: 330 },
  { date: "2024-05-11", Retiradas: 335, Troca: 270 },
  { date: "2024-05-12", Retiradas: 197, Troca: 240 },
  { date: "2024-05-13", Retiradas: 197, Troca: 160 },
  { date: "2024-05-14", Retiradas: 448, Troca: 490 },
  { date: "2024-05-15", Retiradas: 473, Troca: 380 },
  { date: "2024-05-16", Retiradas: 338, Troca: 400 },
  { date: "2024-05-17", Retiradas: 499, Troca: 420 },
  { date: "2024-05-18", Retiradas: 315, Troca: 350 },
  { date: "2024-05-19", Retiradas: 235, Troca: 180 },
  { date: "2024-05-20", Retiradas: 177, Troca: 230 },
  { date: "2024-05-21", Retiradas: 82, Troca: 140 },
  { date: "2024-05-22", Retiradas: 81, Troca: 120 },
  { date: "2024-05-23", Retiradas: 252, Troca: 290 },
  { date: "2024-05-24", Retiradas: 294, Troca: 220 },
  { date: "2024-05-25", Retiradas: 201, Troca: 250 },
  { date: "2024-05-26", Retiradas: 213, Troca: 170 },
  { date: "2024-05-27", Retiradas: 420, Troca: 460 },
  { date: "2024-05-28", Retiradas: 233, Troca: 190 },
  { date: "2024-05-29", Retiradas: 78, Troca: 130 },
  { date: "2024-05-30", Retiradas: 340, Troca: 280 },
  { date: "2024-05-31", Retiradas: 178, Troca: 230 },
  { date: "2024-06-01", Retiradas: 178, Troca: 200 },
  { date: "2024-06-02", Retiradas: 470, Troca: 410 },
  { date: "2024-06-03", Retiradas: 103, Troca: 160 },
  { date: "2024-06-04", Retiradas: 439, Troca: 380 },
  { date: "2024-06-05", Retiradas: 88, Troca: 140 },
  { date: "2024-06-06", Retiradas: 294, Troca: 250 },
  { date: "2024-06-07", Retiradas: 323, Troca: 370 },
  { date: "2024-06-08", Retiradas: 385, Troca: 320 },
  { date: "2024-06-09", Retiradas: 438, Troca: 480 },
  { date: "2024-06-10", Retiradas: 155, Troca: 200 },
  { date: "2024-06-11", Retiradas: 92, Troca: 150 },
  { date: "2024-06-12", Retiradas: 492, Troca: 420 },
  { date: "2024-06-13", Retiradas: 81, Troca: 130 },
  { date: "2024-06-14", Retiradas: 426, Troca: 380 },
  { date: "2024-06-15", Retiradas: 307, Troca: 350 },
  { date: "2024-06-16", Retiradas: 371, Troca: 310 },
  { date: "2024-06-17", Retiradas: 475, Troca: 520 },
  { date: "2024-06-18", Retiradas: 107, Troca: 170 },
  { date: "2024-06-19", Retiradas: 341, Troca: 290 },
  { date: "2024-06-20", Retiradas: 408, Troca: 450 },
  { date: "2024-06-21", Retiradas: 169, Troca: 210 },
  { date: "2024-06-22", Retiradas: 317, Troca: 270 },
  { date: "2024-06-23", Retiradas: 480, Troca: 530 },
  { date: "2024-06-24", Retiradas: 132, Troca: 180 },
  { date: "2024-06-25", Retiradas: 141, Troca: 190 },
  { date: "2024-06-26", Retiradas: 434, Troca: 380 },
  { date: "2024-06-27", Retiradas: 448, Troca: 490 },
  { date: "2024-06-28", Retiradas: 149, Troca: 200 },
  { date: "2024-06-29", Retiradas: 103, Troca: 160 },
  { date: "2024-06-30", Retiradas: 446, Troca: 400 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Retiradas: {
    label: "Retiradas",
    color: "var(--chart-1)",
  },
  Troca: {
    label: "Troca",
    color: "var(--chart-2)",
  },
}

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="pt-0 w-[600px] text-white bg-black">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Aparelhos retirados por OS</CardTitle>
          <CardDescription>
            Dados dos assuntos mais retirados
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillRetiradas" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Retiradas)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Retiradas)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillTroca" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Troca)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Troca)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="Troca"
              type="natural"
              fill="url(#fillTroca)"
              stroke="var(--color-Troca)"
              stackId="a"
            />
            <Area
              dataKey="Retiradas"
              type="natural"
              fill="url(#fillRetiradas)"
              stroke="var(--color-Retiradas)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
