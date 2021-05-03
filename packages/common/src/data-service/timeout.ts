export const DEFAULT_TIMEOUT_MS = 5000;

export function timeout(promise: Promise<Response>, ms = DEFAULT_TIMEOUT_MS): Promise<Response> {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error("Request timeout"));
      }, ms);
  
      promise
        .then((value) => {
          clearTimeout(timer);
          resolve(value);
        })
        .catch((reason) => {
          clearTimeout(timer);
          reject(reason);
        });
    });
  }
  