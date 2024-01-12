// URL validation.
// Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
// followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
// Print a message indicating if the input matches the conditions or not.

const validateURL = (url) => {
  const urlPattern = /^(http:\/\/|https:\/\/)[\w\d-]+(\.[\w\d-]+)+$/;

  if (urlPattern.test(url)) {
    console.log(`"${url}" is a valid URL.`);
  } else {
    console.log(`"${url}" is not a valid URL.`);
  }
};

// Examples
validateURL('http://www.example.com');
validateURL('https://subdomain.example.org');
validateURL('ftp://invalid-url');
