"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

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

export const description = "A horizontal bar chart"

const chartData = [
  { month: "Janeiro", aparelhos: 186 },
  { month: "Feveiro", aparelhos: 305 },
  { month: "Março", aparelhos: 237 },
  { month: "Abril", aparelhos: 73 },
  { month: "Maio", aparelhos: 209 },
  { month: "Junho", aparelhos: 214 },
]

const chartConfig = {
  aparelhos: {
    label: "aparelhos",
    color: "var(--chart-1)",
  },
}

export function ChartBarHorizontal() {
  return (
    <Card className="w-[400px] h-[400px] text-white bg-black">
      <CardHeader>
        <CardTitle>Aparelhos retirados mensais</CardTitle>
        <CardDescription>Janeiro - Junho 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey="aparelhos" hide />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="aparelhos" fill="#0257bf" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Aparelhos totais retirados por mês <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Margem de erro de 5%
        </div>
      </CardFooter>
    </Card>
  )
}
