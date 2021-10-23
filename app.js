if ("serviceWorker" in navigator) {
  console.log("Found serviceWorker");
  navigator.serviceWorker.register("/sw.js").then((reg) => {
    console.log("Service Worker Registered", reg);
  });
} else {
  console.log("Not Found serviceWorker");
}
