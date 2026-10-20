const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

const globalStore = globalThis as typeof globalThis & {
  __contactHits?: Map<string, number[]>;
};
const hits = (globalStore.__contactHits ??= new Map<string, number[]>());

export function allowRequest(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS);

  if (recent.length >= MAX_ATTEMPTS) {
    hits.set(key, recent);
    return false;
  }

  recent.push(now);
  hits.set(key, recent);

  if (hits.size > 1000) {
    for (const [k, times] of hits) {
      if (times.every((time) => now - time >= WINDOW_MS)) hits.delete(k);
    }
  }

  return true;
}
