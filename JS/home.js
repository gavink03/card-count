if (localStorage.getItem("hitOn17") == null) {
  localStorage.setItem("hitOn17", false);
}

if (localStorage.getItem("doubleAfterSplitting") == null) {
  localStorage.setItem("doubleAfterSplitting", true);
}
if (localStorage.getItem("reSplitAces") == null) {
  localStorage.setItem("reSplitAces", false);
}
if (localStorage.getItem("surrender") == null) {
  localStorage.setItem("surrender", false);
}
if (localStorage.getItem("strategyCard") == null) {
  localStorage.setItem("strategyCard", false);
}
if (localStorage.getItem("decks") == null) {
  localStorage.setItem("decks", 6);
}
if (localStorage.getItem("penetration") == null) {
  localStorage.setItem("penetration", ".75");
}
if (localStorage.getItem("bankroll") == null) {
  localStorage.setItem("bankroll", 2000);
}
if (localStorage.getItem("maxSplits") == null) {
  localStorage.setItem("maxSplits", 3);
}

document.getElementById("maxSplits3").addEventListener("input", function () {
  localStorage.removeItem("maxSplits");
  localStorage.setItem("maxSplits", 3);
  console.log(localStorage.getItem("maxSplits"));
});
document.getElementById("maxSplits2").addEventListener("input", function () {
  localStorage.removeItem("maxSplits");
  localStorage.setItem("maxSplits", 2);
  console.log(localStorage.getItem("maxSplits"));
});
document.getElementById("maxSplits1").addEventListener("input", function () {
  localStorage.removeItem("maxSplits");
  localStorage.setItem("maxSplits", 1);
  console.log(localStorage.getItem("maxSplits"));
});

function changeOptions(option) {
  var optionCheck = localStorage.getItem(option);
  if (optionCheck == "true") {
    localStorage.removeItem(option);
    localStorage.setItem(option, false);
  } else if (optionCheck == "false") {
    localStorage.removeItem(option);
    localStorage.setItem(option, true);
  }
  console.log(option + ": " + localStorage.getItem(option));
}

document.getElementById("decks").addEventListener("input", function () {
  localStorage.removeItem("decks");
  decks = parseInt(this.value);
  localStorage.setItem("decks", decks);
  console.log("decks: " + localStorage.getItem("decks"));
});

document.getElementById("penetration").addEventListener("input", function () {
  localStorage.removeItem("penetration");
  penetration = parseFloat(this.value);
  localStorage.setItem("penetration", penetration);
  console.log("penetration: " + localStorage.getItem("penetration"));
});

document.getElementById("bankroll").addEventListener("input", function () {
  localStorage.removeItem("bankroll");
  bankroll = parseInt(this.value);
  localStorage.setItem("bankroll", bankroll);
  console.log("bankroll: " + localStorage.getItem("bankroll"));
});

document.getElementById("hitOn17").addEventListener("change", function () {
  changeOptions("hitOn17");
});

document
  .getElementById("doubleAfterSplitting")
  .addEventListener("change", function () {
    changeOptions("doubleAfterSplitting");
  });

document.getElementById("reSplitAces").addEventListener("change", function () {
  changeOptions("reSplitAces");
});

document.getElementById("surrender").addEventListener("change", function () {
  changeOptions("surrender");
});

document.getElementById("strategyCard").addEventListener("change", function () {
  changeOptions("strategyCard");
});

function openOptions() {
  document.getElementById("optionsPanel").style.display = "block";
  document.getElementById("decksP").style = "display: block;";
  document.getElementById("penetrationP").style = "display: block;";
  document.getElementById("decks").value = localStorage.getItem("decks");
  document.getElementById("penetration").value =
    localStorage.getItem("penetration");
  document
    .getElementById("bankroll")
    .setAttribute("value", localStorage.getItem("bankroll"));

  if (localStorage.getItem("hitOn17") == "true") {
    document.getElementById("hitOn17CheckBox").checked = true;
  } else {
    document.getElementById("hitOn17CheckBox").checked = false;
  }

  if (localStorage.getItem("doubleAfterSplitting") == "true") {
    document.getElementById("doubleAfterSplittingCheckBox").checked = true;
  } else {
    document.getElementById("doubleAfterSplittingCheckBox").checked = false;
  }

  if (localStorage.getItem("reSplitAces") == "true") {
    document.getElementById("reSplitAcesCheckBox").checked = true;
  } else {
    document.getElementById("reSplitAcesCheckBox").checked = false;
  }

  if (localStorage.getItem("strategyCard") == "true") {
    document.getElementById("strategyCardCheckBox").checked = true;
  } else {
    document.getElementById("strategyCardCheckBox").checked = false;
  }

  if (localStorage.getItem("surrender") == "true") {
    document.getElementById("SurrenderCheckBox").checked = true;
  } else {
    document.getElementById("SurrenderCheckBox").checked = false;
  }

  document.getElementById(
    `maxSplits${localStorage.getItem("maxSplits")}`
  ).checked = true;
}

function closeOptions() {
  document.getElementById("optionsPanel").style.display = "none";
  return;
}

document
  .getElementById("countingBasics")
  .addEventListener("click", function () {
    document.getElementById("countingBasicsScreen").style.display = "block";
  });
document
  .getElementById("closeCountingBasics")
  .addEventListener("click", function () {
    document.getElementById("countingBasicsScreen").style.display = "none";
  });

document.getElementById("gameRules").addEventListener("click", function () {
  openOptions();
});

document.getElementById("closeOptions").addEventListener("click", function () {
  closeOptions();
});
