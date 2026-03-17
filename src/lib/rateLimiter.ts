type RateLimitRecord = {
  count: number;
  lastRequest: number;
};

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 min
const MAX_REQUESTS = 5;

const ipStore = new Map<string, RateLimitRecord>();

export function rateLimit(ip: string) {
  const now = Date.now();

  const record = ipStore.get(ip);

  if (!record) {
    ipStore.set(ip, { count: 1, lastRequest: now });
    return true;
  }

  if (now - record.lastRequest > RATE_LIMIT_WINDOW) {
    ipStore.set(ip, { count: 1, lastRequest: now });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count += 1;
  return true;
}