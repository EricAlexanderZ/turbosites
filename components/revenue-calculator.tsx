"use client";

import { useState } from "react";

const PERIODS = ["Daily", "Weekly", "Monthly", "Annually"] as const;
type Period = (typeof PERIODS)[number];

const DAY_MULTIPLIERS: Record<Period, number> = {
  Daily: 1,
  Weekly: 7,
  Monthly: 30,
  Annually: 365,
};

function SliderRow({
  icon,
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  display: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium text-gray-300">
          {icon}
          {label}
        </span>
        <span className="text-sm font-bold text-[#0151fc]">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1 rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#0151fc] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(1,81,252,0.2)] [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#0151fc] [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:cursor-pointer"
        style={{
          background: `linear-gradient(to right, #0151fc 0%, #0151fc ${pct}%, #132050 ${pct}%, #132050 100%)`,
        }}
      />
    </div>
  );
}

export function RevenueCalculator() {
  const [visitors, setVisitors] = useState(50);
  const [convRate, setConvRate] = useState(3);
  const [avgValue, setAvgValue] = useState(300);
  const [period, setPeriod] = useState<Period>("Monthly");

  const dailyCustomers = visitors * (convRate / 100);
  const dailyRevenue = dailyCustomers * avgValue;
  const displayRevenue = dailyRevenue * DAY_MULTIPLIERS[period];
  const displayCustomers = Math.round(dailyCustomers * DAY_MULTIPLIERS[period]);

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);

  const periodLabel =
    period === "Daily"
      ? "Per Day"
      : period === "Weekly"
        ? "Per Week"
        : period === "Monthly"
          ? "Per Month"
          : "Per Year";

  return (
    <section id="calculator" className="bg-[#000d2b] py-16 sm:py-24 px-6">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0d1f50] bg-[#050d28] px-4 py-2 text-sm font-medium text-[#0151fc] mb-6">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            Revenue Loss Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            How Much Revenue Are You{" "}
            <span className="text-[#0151fc]">Losing Without a Website?</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Adjust the sliders to see exactly what's slipping through your fingers every month.
          </p>
        </div>

        <div className="rounded-2xl border border-[#132050] bg-[#060d24] p-5 sm:p-8 space-y-8">
          <SliderRow
            icon={
              <svg className="h-4 w-4 text-[#0151fc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
            label="Potential Daily Visitors"
            value={visitors}
            min={1}
            max={500}
            step={1}
            onChange={setVisitors}
            display={visitors.toLocaleString()}
          />

          <SliderRow
            icon={
              <svg className="h-4 w-4 text-[#0151fc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            }
            label="Visitors That Become Customers"
            value={convRate}
            min={1}
            max={100}
            step={1}
            onChange={setConvRate}
            display={`${convRate}%`}
          />

          <SliderRow
            icon={
              <svg className="h-4 w-4 text-[#0151fc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            }
            label="Average Service / Order Value"
            value={avgValue}
            min={30}
            max={5000}
            step={10}
            onChange={setAvgValue}
            display={`$${avgValue.toLocaleString()}`}
          />

          {/* Period toggle */}
          <div className="flex gap-1 rounded-full bg-[#000d2b] p-1">
            {PERIODS.map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`flex-1 rounded-full px-2 py-2 text-xs font-semibold transition-all sm:px-3 sm:text-sm ${
                  period === p
                    ? "bg-[#0151fc] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Result */}
          <div className="rounded-xl border border-[#0d1f50] bg-[#050d28] p-6 text-center">
            <p className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-3">
              <svg className="h-4 w-4 text-[#0151fc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                <polyline points="17 18 23 18 23 12" />
              </svg>
              Estimated Revenue Missed {periodLabel}
            </p>
            <p className="text-4xl font-black text-[#0151fc] mb-3 sm:text-5xl">{fmt(displayRevenue)}</p>
            <p className="text-sm text-gray-500">
              That's {displayCustomers} potential customer{displayCustomers !== 1 ? "s" : ""}{" "}
              {periodLabel.toLowerCase()} going to your competitors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
