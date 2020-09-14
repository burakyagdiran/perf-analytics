(function () {
  const endpoint = "localhost:8080/projects/"; // this script not woriking with localhost url
  const hostName = window.location.hostname;

  function sendSyncRumData(rumData) {
    fetch(`${endpoint}${hostName}`, {
      method: "PATCH",
      body: rumData,
      keepalive: true,
    });
  }
  function sendRumData() {
    let rumData = {};
    const performanceEntries = performance.getEntries();

    performanceEntries.forEach((data) => {
      const perfData =
        data.entryType === "navigation"
          ? data
          : {
              responseStart: 0,
              startTime: 0,
              duration: 0,
              domComplete: 0,
            };
      const fcpData =
        data.name === "first-contentful-paint"
          ? data
          : {
              startTime: 0,
            };
      const newRumData = {
        pathName: window.location.pathname,
        createDate: new Date(),
        ttfb: perfData.responseStart - perfData.startTime,
        fcp: fcpData.startTime,
        windowLoad: perfData.duration,
        domLoad: perfData.domComplete - perfData.startTime,
      };
      rumData = { ...newRumData };
    });

    sendSyncRumData(rumData);
    if (
      !("sendBeacon" in navigator) ||
      !navigator.sendBeacon(endpoint, rumData)
    ) {
      sendSyncRumData(rumData);
    }
  }
  function reporter(immediately = false) {
    if (immediately) {
      sendRumData();
    } else {
      window.removeEventListener("unload", sendRumData);
      window.addEventListener("unload", sendRumData, false);
    }
  }
  reporter();
})();
