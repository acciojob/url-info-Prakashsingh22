//your JS code here. If required.
    window.onload = function() {
      // Step 1: Get the current URL using the location object
      const currentURL = window.location.href;

      // Step 2: Use the length property to count the number of characters
      const urlLength = currentURL.length;

      // Step 3: Display the result in the required format
      alert("The length of the URL is: " + urlLength);
    };