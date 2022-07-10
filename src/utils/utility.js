export const inDollar = (inRs) => {
  const am = Number((inRs * 79.29).toFixed(2));
  return '$' + am.toLocaleString();
}

export const inPercentage = (number) => {
  const n = number > 0 ? number : -1 * number;

  return (n / 100).toFixed(2) + '%';
}