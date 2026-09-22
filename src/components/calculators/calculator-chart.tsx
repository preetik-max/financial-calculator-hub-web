"use client";

import {
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type {
  CalculatorLineData,
  CalculatorPieData,
} from "@/lib/calculators/types";
import {
  formatCompactCurrency,
  formatCurrency,
} from "@/lib/utils/format-currency";

interface CalculatorChartProps {
  title: string;
  description?: string;
  type: "pie" | "line";
  pieData?: CalculatorPieData[];
  lineData?: CalculatorLineData[];
}

export function CalculatorChart({
  title,
  description,
  type,
  pieData = [],
  lineData = [],
}: CalculatorChartProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-950">
          {title}
        </h3>

        {description && (
          <p className="mt-1 text-sm leading-6 text-slate-500">
            {description}
          </p>
        )}
      </div>

      {type === "pie" ? (
        <PieChartContent data={pieData} />
      ) : (
        <LineChartContent data={lineData} />
      )}
    </section>
  );
}

function PieChartContent({
  data,
}: {
  data: CalculatorPieData[];
}) {
  return (
    <div className="grid items-center gap-6 md:grid-cols-2">
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={105}
              paddingAngle={3}
            >
              {data.map((item) => (
                <Cell
                  key={item.name}
                  fill={item.color}
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) =>
                formatCurrency(Number(value))
              }
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-4">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />

              <span className="text-sm font-medium text-slate-600">
                {item.name}
              </span>
            </div>

            <span className="text-sm font-bold text-slate-950">
              {formatCurrency(item.value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LineChartContent({
  data,
}: {
  data: CalculatorLineData[];
}) {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="label"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            tickFormatter={(value) =>
              formatCompactCurrency(Number(value))
            }
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            width={70}
          />

          <Tooltip
            formatter={(value) =>
              formatCurrency(Number(value))
            }
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#16a34a"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
