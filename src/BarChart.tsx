import React from "react";

var colors = ["#236997", "#52aaeb", "#a75e07", "#f4a22d", "#f95b3a"];

interface BarChartProps {
  values: number[];
}

export function BarChart({ values }: BarChartProps) {
  const width = 240;
  const height = 135;
  return (
    <svg version="1.1" viewBox={`0 0 ${width} ${height}`}>
      <rect x={0} y={0} width={width} height={height} fill="#fbf4d5" />
      {values.map((d, i) => (
        <rect key={i} x={60 + 24 * i} y={115 - (d * 95) / 36} width={24} height={(d * 95) / 36} fill={colors[i]} />
      ))}
    </svg>
  );
}
