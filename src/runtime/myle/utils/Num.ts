export function CssValue({
  value,
  defaultUnit = "px",
  minValue,
  maxValue,
}: {
  value: string | number;
  defaultUnit?: string;
  minValue?: number;
  maxValue?: number;
}) {
  let val = 0;
  let unit = defaultUnit;
  if (typeof value === "number") val = value;
  else {
    const s = value.match(/[A-Z-a-z]*$/);
    unit = s?.[0] || unit;

    const v = Number(value.match(/^[0-9.]*/)?.[0]);
    val = isNaN(v) ? 0 : v;
  }

  if (typeof minValue === "number" && val < minValue) val = minValue;
  if (typeof maxValue === "number" && val > maxValue) val = maxValue;

  return { value: val, unit, valueUnit: `${val}${unit}` };
}

export default { CssValue };
