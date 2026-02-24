/**
 * Logging Utility for TechHubbix
 * Provides consistent logging across the application
 * Includes different log levels: INFO, WARN, ERROR, DEBUG
 */

const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
};

// Set the current log level (adjust in production if needed)
const CURRENT_LOG_LEVEL = process.env.NODE_ENV === 'production' ? LOG_LEVELS.WARN : LOG_LEVELS.DEBUG;

/**
 * Log Info Messages
 * @param {string} message - The message to log
 * @param {any} data - Optional data to log
 */
export const logInfo = (message, data = null) => {
  if (CURRENT_LOG_LEVEL <= LOG_LEVELS.INFO) {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`, data || '');
  }
};

/**
 * Log Warning Messages
 * @param {string} message - The message to log
 * @param {any} data - Optional data to log
 */
export const logWarn = (message, data = null) => {
  if (CURRENT_LOG_LEVEL <= LOG_LEVELS.WARN) {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`, data || '');
  }
};

/**
 * Log Error Messages
 * @param {string} message - The message to log
 * @param {any} error - Optional error object to log
 */
export const logError = (message, error = null) => {
  if (CURRENT_LOG_LEVEL <= LOG_LEVELS.ERROR) {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error || '');
  }
};

/**
 * Log Debug Messages
 * @param {string} message - The message to log
 * @param {any} data - Optional data to log
 */
export const logDebug = (message, data = null) => {
  if (CURRENT_LOG_LEVEL <= LOG_LEVELS.DEBUG) {
    console.debug(`[DEBUG] ${new Date().toISOString()} - ${message}`, data || '');
  }
};

/**
 * Track page navigation
 * @param {string} pageName - The name of the page being navigated to
 */
export const trackPageView = (pageName) => {
  logInfo(`User navigated to: ${pageName}`);
};

export default {
  logInfo,
  logWarn,
  logError,
  logDebug,
  trackPageView,
};
