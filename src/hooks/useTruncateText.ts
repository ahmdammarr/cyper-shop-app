export const useTruncateText = (
  text: string,
  limit: number
) =>
  text.length > limit
    ? `${text.split('').slice(0, limit).join('')}...`
    : text;
