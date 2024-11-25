function onSignIn(response) {
  const credential = response.credential;

  // Decode the JWT to get user profile info
  const userInfo = parseJwt(credential);
  console.log("User ID: " + userInfo.sub);
  console.log("Full Name: " + userInfo.name);
  console.log("Image URL: " + userInfo.picture);
  console.log("Email: " + userInfo.email); // Requires 'email' scope
}

// Helper function to decode the JWT
function parseJwt(token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
}
function handleSignOut() {
  // Disable auto-sign-in
  google.accounts.id.disableAutoSelect();
  alert("You have been logged out!");
  // Optionally, reload the page or redirect the user after logout
  window.location.reload(); // Or redirect to another page
}
