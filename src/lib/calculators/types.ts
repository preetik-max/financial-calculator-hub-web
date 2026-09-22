export type CalculatorFieldType = "currency" | "percentage" | "number";

export interface CalculatorField {
  id: string;
  label: string;
  type: CalculatorFieldType;

  min: number;
  max: number;
  step: number;
  defaultValue: number;

  prefix?: string;
  suffix?: string;

  description?: string;
}

export interface CalculatorFieldValue {
  id: string;
  value: number;
}

export interface CalculatorResultItem {
  label: string;
  value: number;
  type?: "currency" | "number" | "percentage";
  highlighted?: boolean;
}

export interface CalculatorPieData {
  name: string;
  value: number;
  color: string;
}

export interface CalculatorLineData {
  label: string;
  value: number;
}

export interface CalculatorDefinition {
  slug: string;
  name: string;
  shortName?: string;
  description: string;
  category: string;

  fields: CalculatorField[];

  results: CalculatorResultItem[];

  explanation: string;
  formula?: string;

  faq: {
    question: string;
    answer: string;
  }[];
}
