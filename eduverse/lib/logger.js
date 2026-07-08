const LOG_LEVELS = { debug: 0, info: 1, warn: 2, error: 3 };
const LEVEL = LOG_LEVELS[process.env.NEXT_PUBLIC_LOG_LEVEL] ?? 1;

function log(level, context, message, data) {
  if (LOG_LEVELS[level] < LEVEL) return;
  const entry = { level, context, message, timestamp: new Date().toISOString() };
  if (data) entry.data = data;
  switch (level) {
    case 'error': console.error(JSON.stringify(entry)); break;
    case 'warn': console.warn(JSON.stringify(entry)); break;
    default: console.log(JSON.stringify(entry));
  }
}

export const logger = {
  debug: (ctx, msg, data) => log('debug', ctx, msg, data),
  info: (ctx, msg, data) => log('info', ctx, msg, data),
  warn: (ctx, msg, data) => log('warn', ctx, msg, data),
  error: (ctx, msg, data) => log('error', ctx, msg, data),
};
