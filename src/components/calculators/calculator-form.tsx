"use client";

import { useState } from "react";

import type { CalculatorField } from "@/lib/calculators/types";
import { formatNumber } from "@/lib/utils/format-number";

interface CalculatorFormProps {
  fields: CalculatorField[];
  values: Record<string, number>;
  onChange: (id: string, value: number) => void;
}

export function CalculatorForm({
  fields,
  values,
  onChange,
}: CalculatorFormProps) {
  return (
    <div className="space-y-6">
      {fields.map((field) => {
        const value = values[field.id] ?? field.defaultValue;

        return (
          <CalculatorFieldControl
            key={field.id}
            field={field}
            value={value}
            onChange={(nextValue) => onChange(field.id, nextValue)}
          />
        );
      })}
    </div>
  );
}

interface CalculatorFieldControlProps {
  field: CalculatorField;
  value: number;
  onChange: (value: number) => void;
}

function CalculatorFieldControl({
  field,
  value,
  onChange,
}: CalculatorFieldControlProps) {
  const [inputValue, setInputValue] = useState(String(value));

  const handleNumberChange = (rawValue: string) => {
    setInputValue(rawValue);

    if (rawValue === "") {
      return;
    }

    const parsed = Number(rawValue);

    if (!Number.isFinite(parsed)) {
      return;
    }

    const clamped = Math.min(
      field.max,
      Math.max(field.min, parsed),
    );

    onChange(clamped);
  };

  const handleSliderChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const nextValue = Number(event.target.value);

    setInputValue(String(nextValue));
    onChange(nextValue);
  };


  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <label
            htmlFor={`calculator-${field.id}`}
            className="text-sm font-semibold text-slate-900"
          >
            {field.label}
          </label>

          {field.description && (
            <p className="mt-1 text-xs text-slate-500">
              {field.description}
            </p>
          )}
        </div>

        <div className="flex items-center">
          {field.prefix && (
            <span className="rounded-l-lg border border-r-0 border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-600">
              {field.prefix}
            </span>
          )}

          <input
            id={`calculator-${field.id}`}
            type="number"
            value={inputValue}
            min={field.min}
            max={field.max}
            step={field.step}
            onChange={(event) =>
              handleNumberChange(event.target.value)
            }
            onBlur={() => {
              setInputValue(String(value));
            }}
            className={`w-32 border border-slate-200 bg-white px-3 py-2 text-right text-sm font-semibold text-slate-900 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100 ${
              field.prefix ? "" : "rounded-lg"
            } ${field.suffix ? "" : "rounded-lg"}`}
            aria-label={field.label}
          />

          {field.suffix && (
            <span className="rounded-r-lg border border-l-0 border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-600">
              {field.suffix}
            </span>
          )}
        </div>
      </div>

      <input
        id={`calculator-${field.id}-slider`}
        type="range"
        min={field.min}
        max={field.max}
        step={field.step}
        value={value}
        onChange={handleSliderChange}
        className="h-2 w-full cursor-pointer accent-green-600"
        aria-label={`${field.label} slider`}
      />

      <div className="flex justify-between text-xs text-slate-400">
        <span>
          {field.prefix}
          {formatNumber(field.min)}
          {field.suffix}
        </span>

        <span>
          {field.prefix}
          {formatNumber(field.max)}
          {field.suffix}
        </span>
      </div>
    </div>
  );
}
