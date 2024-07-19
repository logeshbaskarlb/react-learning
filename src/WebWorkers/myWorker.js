self.onmessage = function(e) {
    const { data } = e;
    // Perform some computation or background task
    const result = data + 1; // Example task
    self.postMessage(result);
  };