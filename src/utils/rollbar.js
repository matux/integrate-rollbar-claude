import { useRollbar } from '@rollbar/react';

// Hook to use Rollbar in functional components
export const useRollbarLogger = () => {
  const rollbar = useRollbar();
  
  return {
    // Log info messages
    info: (message, metadata) => {
      rollbar.info(message, metadata);
    },
    
    // Log warning messages
    warning: (message, metadata) => {
      rollbar.warning(message, metadata);
    },
    
    // Log error messages
    error: (message, metadata) => {
      rollbar.error(message, metadata);
    },
    
    // Log critical errors
    critical: (message, metadata) => {
      rollbar.critical(message, metadata);
    },
    
    // Log debug messages
    debug: (message, metadata) => {
      rollbar.debug(message, metadata);
    }
  };
};

// Export a simple object for non-component usage
export const RollbarLogger = {
  // Will only work inside Provider context
  logInfo: (message, metadata) => {
    const rollbar = window._rollbarInstance;
    if (rollbar) {
      rollbar.info(message, metadata);
    }
  },
  
  logWarning: (message, metadata) => {
    const rollbar = window._rollbarInstance;
    if (rollbar) {
      rollbar.warning(message, metadata);
    }
  },
  
  logError: (message, metadata) => {
    const rollbar = window._rollbarInstance;
    if (rollbar) {
      rollbar.error(message, metadata);
    }
  },
  
  logCritical: (message, metadata) => {
    const rollbar = window._rollbarInstance;
    if (rollbar) {
      rollbar.critical(message, metadata);
    }
  }
};