import { Clerk } from "@clerk/clerk-js";
const stripe = Stripe(
  "pk_test_51OzJi3P4m0D4zmKZUpkUDXPcSYrrEgKOVJIxK6vBn69VqrgeWJSGaMI4jvQHqWwoToPEWFyGEkzlrCDjaUte9Hme00yGvpxy3O"
);

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const clerk = new Clerk(clerkPubKey);
await clerk.load();

if (
  window.location.href == "https://card-count.com/" ||
  window.location.href == "https://card-count.com/index.html"
) {
  if (clerk.user) {
    console.log(clerk.user);

    document
      .getElementById("logIn")
      .setAttribute("src", `${clerk.user.imageUrl}`);
  } else {
    const membershipElements = document.getElementsByClassName("membership");

    for (const element of membershipElements) {
      element.style.display = "block";
    }
  }

  document.getElementById("logIn").addEventListener("click", () => {
    if (clerk.user) {
      window.location.href = "https://accounts.card-count.com/user";
    } else {
      window.location.href = "https://accounts.card-count.com/sign-in";
    }
  });

  function ProtectedPage() {
    if (!clerk.user.publicMetadata?.paid) {
      console.log("Access denied. Please complete your payment.");
    } else {
      console.log("Welcome to the protected page!");
    }
  }

  document.getElementById("play").addEventListener("click", ProtectedPage);
  document.getElementById("learn").addEventListener("click", ProtectedPage);
} else if (
  window.location.href == "https://card-count.com/stripe/public/checkout.html"
) {
}
