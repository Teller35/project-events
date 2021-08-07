const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    window.location.hostname === "[::1]" ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener("load", () => {
      const serviceUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        checkValidServiceWorker(serviceUrl, config);
        navigator.serviceWorker.ready.then(() => {
          console.log("Brought to you by cache-first by service-worker");
        });
      } else {
        registerValidSW(serviceUrl, config);
      }
    });
  }
}

function registerValidSW(serviceUrl, config) {
  navigator.serviceWorker
    .register(serviceUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installService = registration.installing;
        if (installService == null) {
          return;
        }
        installService.onstatechange = () => {
          if (installService.state === "installed") {
            if (navigator.serviceWorker.controller) {
              console.log("New content uploaded");
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              console.log("Content is cached");
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.log("Error registering service worker: ", error);
    });
}

function checkValidServiceWorker(serviceUrl, config) {
  fetch(serviceUrl, {
    headers: { "Service-Worker": "script" },
  })
    .then((response) => {
      const contentType = response.headers.get("content-type");
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf("javascript") === -1)
      ) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        registerValidSW(serviceUrl, config);
      }
    })
    .catch(() => {
      console.log("No internet connection");
    });
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
}
