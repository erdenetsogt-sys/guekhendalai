"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, } from "@/components/ui/chart";
const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
];
const chartConfig = {
    desktop: {
        label: "Desktop",
        // color: "hsl(var(--chart-1))",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
};
export function PriceGraph() {
    return (_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Area Chart - Stacked" }), _jsx(CardDescription, { children: "Showing total visitors for the last 6 months" })] }), _jsx(CardContent, { children: _jsx(ChartContainer, { config: chartConfig, children: _jsxs(AreaChart, { accessibilityLayer: true, data: chartData, margin: {
                            left: 12,
                            right: 12,
                        }, children: [_jsx(CartesianGrid, { vertical: false }), _jsx(XAxis, { dataKey: "month", tickLine: false, axisLine: false, tickMargin: 8, tickFormatter: (value) => value.slice(0, 3) }), _jsx(ChartTooltip, { cursor: false, content: _jsx(ChartTooltipContent, { indicator: "dot" }) }), _jsx(Area, { dataKey: "mobile", type: "natural", fill: "var(--color-mobile)", fillOpacity: 0.4, stroke: "var(--color-mobile)", stackId: "a" }), _jsx(Area, { dataKey: "desktop", type: "natural", fill: "var(--color-desktop)", fillOpacity: 0.4, stroke: "var(--color-desktop)", stackId: "a" })] }) }) }), _jsx(CardFooter, { children: _jsx("div", { className: "flex w-full items-start gap-2 text-sm", children: _jsxs("div", { className: "grid gap-2", children: [_jsxs("div", { className: "flex items-center gap-2 font-medium leading-none", children: ["Trending up by 5.2% this month ", _jsx(TrendingUp, { className: "h-4 w-4" })] }), _jsx("div", { className: "flex items-center gap-2 leading-none text-muted-foreground", children: "January - June 2024" })] }) }) })] }));
}
