export function cn(...inputs: (string | undefined | boolean | null)[]) {
  return inputs.filter(Boolean).join(' ');
}
