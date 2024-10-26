var currentCount = 0;
var trueCount = 0;
const ace = "Ace";
const jack = "Jack";
const queen = "Queen";
const king = "King";
const cards = [
  [ace, "spades"],
  [2, "spades"],
  [3, "spades"],
  [4, "spades"],
  [5, "spades"],
  [6, "spades"],
  [7, "spades"],
  [8, "spades"],
  [9, "spades"],
  [10, "spades"],
  [jack, "spades"],
  [queen, "spades"],
  [king, "spades"],
  [ace, "clubs"],
  [2, "clubs"],
  [3, "clubs"],
  [4, "clubs"],
  [5, "clubs"],
  [6, "clubs"],
  [7, "clubs"],
  [8, "clubs"],
  [9, "clubs"],
  [10, "clubs"],
  [jack, "clubs"],
  [queen, "clubs"],
  [king, "clubs"],
  [ace, "diamonds"],
  [2, "diamonds"],
  [3, "diamonds"],
  [4, "diamonds"],
  [5, "diamonds"],
  [6, "diamonds"],
  [7, "diamonds"],
  [8, "diamonds"],
  [9, "diamonds"],
  [10, "diamonds"],
  [jack, "diamonds"],
  [queen, "diamonds"],
  [king, "diamonds"],
  [ace, "hearts"],
  [2, "hearts"],
  [3, "hearts"],
  [4, "hearts"],
  [5, "hearts"],
  [6, "hearts"],
  [7, "hearts"],
  [8, "hearts"],
  [9, "hearts"],
  [10, "hearts"],
  [jack, "hearts"],
  [queen, "hearts"],
  [king, "hearts"],
];

var dealerHand = [];
var playerBet1 = [];
var playerBet2 = [];
var playerBet3 = [];
var playerBet4 = [];
var currentBet = 1;
var numOfHands = 1;
var hand1 = [];
var hand2 = [];
var hand3 = [];
var hand4 = [];
var currentHand = 1;
var numOfSplits = 1;

var numchip05 = 0;
var numchip1 = 0;
var numchip5 = 0;
var numchip10 = 0;
var numchip20 = 0;
var numchip25 = 0;
var numchip50 = 0;
var numchip100 = 0;
var numchip250 = 0;
var numchip500 = 0;
var numchip1000 = 0;
var numchip2000 = 0;
var numchip5000 = 0;

var wlammount = 0;
var ammount = 0;
var wlTotal = 0;

var win = Boolean;
var tie = Boolean;
var blackJack = Boolean;

const hitOn17 = localStorage.getItem("hitOn17");
const splitAces = localStorage.getItem("splitAces");
const doubleAfterSplitting = localStorage.getItem("doubleAfterSplitting");
const reSplitAces = localStorage.getItem("reSplitAces");
const strategyCard = localStorage.getItem("strategyCard");
const surrender = localStorage.getItem("surrender");
const maxSplits = parseInt(localStorage.getItem("maxSplits"));
var bankroll = parseInt(localStorage.getItem("bankroll"));
const penetration = parseFloat(localStorage.getItem("penetration"));
const decks = parseInt(localStorage.getItem("decks"));
var all = Array.from({ length: decks }, () => cards).flat();
const fullShoe = Array.from({ length: decks }, () => cards).flat();
var errors = [];

const chip05 = 0.5;
const chip1 = 1;
const chip5 = 5;
const chip10 = 10;
const chip20 = 20;
const chip25 = 25;
const chip50 = 50;
const chip100 = 100;
const chip250 = 250;
const chip500 = 500;
const chip1000 = 1000;
const chip2000 = 2000;
const chip5000 = 5000;
var originalChipsUsed = [];

function showChips(percentOfBankroll, numOfChips) {
  var numchip = bankroll * (percentOfBankroll / numOfChips);
  if (numchip < 5) {
    numchip1 = numOfChips;
    originalChipsUsed.push({ value: chip1, count: numOfChips });
    for (i = 0; i < numOfChips; i++) {
      var src = document.getElementById("chips1");
      var img = document.createElement("img");
      img.src = `../img/Chips/$1chip.png`;
      src.appendChild(img);
    }
  } else if (numchip < 10) {
    numchip5 = numOfChips;
    originalChipsUsed.push({ value: chip5, count: numOfChips });
    for (i = 0; i < numOfChips; i++) {
      var src = document.getElementById("chips5");
      var img = document.createElement("img");
      img.src = `../img/Chips/$5chip.png`;
      src.appendChild(img);
    }
  } else if (numchip < 20) {
    numchip10 = numOfChips;
    originalChipsUsed.push({ value: chip10, count: numOfChips });
    for (i = 0; i < numOfChips; i++) {
      var src = document.getElementById("chips10");
      var img = document.createElement("img");
      img.src = `../img/Chips/$10chip.png`;
      src.appendChild(img);
    }
  } else if (numchip < 25) {
    numchip20 = numOfChips;
    originalChipsUsed.push({ value: chip20, count: numOfChips });
    for (i = 0; i < numOfChips; i++) {
      var src = document.getElementById("chips20");
      var img = document.createElement("img");
      img.src = `../img/Chips/$20chip.png`;
      src.appendChild(img);
    }
  } else if (numchip < 50) {
    numchip25 = numOfChips;
    originalChipsUsed.push({ value: chip25, count: numOfChips });
    for (i = 0; i < numOfChips; i++) {
      var src = document.getElementById("chips25");
      var img = document.createElement("img");
      img.src = `../img/Chips/$25chip.png`;
      src.appendChild(img);
    }
  } else if (numchip < 100) {
    numchip50 = numOfChips;
    originalChipsUsed.push({ value: chip50, count: numOfChips });
    for (i = 0; i < numOfChips; i++) {
      var src = document.getElementById("chips50");
      var img = document.createElement("img");
      img.src = `../img/Chips/$50chip.png`;
      src.appendChild(img);
    }
  } else if (numchip < 250) {
    numchip100 = numOfChips;
    originalChipsUsed.push({ value: chip100, count: numOfChips });
    for (i = 0; i < numOfChips; i++) {
      var src = document.getElementById("chips100");
      var img = document.createElement("img");
      img.src = `../img/Chips/$100chip.png`;
      src.appendChild(img);
    }
  } else if (numchip < 500) {
    numchip250 = numOfChips;
    originalChipsUsed.push({ value: chip250, count: numOfChips });
    for (i = 0; i < numOfChips; i++) {
      var src = document.getElementById("chips250");
      var img = document.createElement("img");
      img.src = `../img/Chips/$250chip.png`;
      src.appendChild(img);
    }
  } else if (numchip < 1000) {
    numchip500 = numOfChips;
    originalChipsUsed.push({ value: chip500, count: numOfChips });
    for (i = 0; i < numOfChips; i++) {
      var src = document.getElementById("chips500");
      var img = document.createElement("img");
      img.src = `../img/Chips/$500chip.png`;
      src.appendChild(img);
    }
  } else if (numchip < 2000) {
    numchip1000 = numOfChips;
    originalChipsUsed.push({ value: chip1000, count: numOfChips });
    for (i = 0; i < numOfChips; i++) {
      var src = document.getElementById("chips1000");
      var img = document.createElement("img");
      img.src = `../img/Chips/$1000chip.png`;
      src.appendChild(img);
    }
  } else if (numchip < 5000) {
    numchip2000 = numOfChips;
    originalChipsUsed.push({ value: chip2000, count: numOfChips });
    for (i = 0; i < numOfChips; i++) {
      var src = document.getElementById("chips2000");
      var img = document.createElement("img");
      img.src = `../img/Chips/$2000chip.png`;
      src.appendChild(img);
    }
  } else {
    numchip5000 = numOfChips;
    originalChipsUsed.push({ value: chip5000, count: numOfChips });
    for (i = 0; i < numOfChips; i++) {
      var src = document.getElementById("chips5000");
      var img = document.createElement("img");
      img.src = `../img/Chips/$5000chip.png`;
      src.appendChild(img);
    }
  }
}

showChips(0.63, 10);
showChips(0.252, 20);
showChips(0.095, 30);
showChips(0.0252, 40);
for (chip of originalChipsUsed) {
  document.getElementById(`chips${chip.value}`).style = "display:block";
}

bankroll -=
  chip1 * numchip1 +
  chip5 * numchip5 +
  chip10 * numchip10 +
  chip20 * numchip20 +
  chip25 * numchip25 +
  chip50 * numchip50 +
  chip100 * numchip100 +
  chip250 * numchip250 +
  chip500 * numchip500 +
  chip1000 * numchip1000 +
  chip2000 * numchip2000 +
  chip5000 * numchip5000;

for (chip of originalChipsUsed)
  while (bankroll >= chip.value) {
    var src = document.getElementById(`chips${chip.value}`);
    var img = document.createElement("img");
    img.src = `../img/Chips/$${chip.value}chip.png`;
    src.appendChild(img);
    bankroll -= chip.value;
    switch (chip.value) {
      case 0.5:
        numchip05++;
        break;
      case 1:
        numchip1++;
        break;
      case 5:
        numchip5++;
        break;
      case 10:
        numchip10++;
        break;
      case 20:
        numchip20++;
        break;
      case 25:
        numchip25++;
        break;
      case 50:
        numchip50++;
        break;
      case 100:
        numchip100++;
        break;
      case 250:
        numchip250++;
        break;
      case 500:
        numchip500++;
        break;
      case 1000:
        numchip1000++;
        break;
      case 2000:
        numchip2000++;
        break;
      case 5000:
        numchip5000++;
        break;
    }
  }

originalChipsUsed.sort((a, b) => a.value - b.value);
chipsUsed = [];
for (i = 0; originalChipsUsed.length > i; i++) {
  chipsUsed.push(originalChipsUsed[i]);
}

function syncChipsUsedAndNumOfChips() {
  chipsUsed.sort((a, b) => a.value - b.value);
  if (chipsUsed.findIndex((element) => element.value === 0.5) != -1) {
    chipsUsed[chipsUsed.findIndex((element) => element.value === 0.5)].count = numchip05;
  }
  if (chipsUsed.findIndex((element) => element.value === 1) != -1) {
    chipsUsed[chipsUsed.findIndex((element) => element.value === 1)].count = numchip1;
  }
  if (chipsUsed.findIndex((element) => element.value === 5) != -1) {
    chipsUsed[chipsUsed.findIndex((element) => element.value === 5)].count = numchip5;
  }
  if (chipsUsed.findIndex((element) => element.value === 10) != -1) {
    chipsUsed[chipsUsed.findIndex((element) => element.value === 10)].count = numchip10;
  }
  if (chipsUsed.findIndex((element) => element.value === 20) != -1) {
    chipsUsed[chipsUsed.findIndex((element) => element.value === 20)].count = numchip20;
  }
  if (chipsUsed.findIndex((element) => element.value === 25) != -1) {
    chipsUsed[chipsUsed.findIndex((element) => element.value === 25)].count = numchip25;
  }
  if (chipsUsed.findIndex((element) => element.value === 50) != -1) {
    chipsUsed[chipsUsed.findIndex((element) => element.value === 50)].count = numchip50;
  }
  if (chipsUsed.findIndex((element) => element.value === 100) != -1) {
    chipsUsed[chipsUsed.findIndex((element) => element.value === 100)].count = numchip100;
  }
  if (chipsUsed.findIndex((element) => element.value === 250) != -1) {
    chipsUsed[chipsUsed.findIndex((element) => element.value === 250)].count = numchip250;
  }
  if (chipsUsed.findIndex((element) => element.value === 500) != -1) {
    chipsUsed[chipsUsed.findIndex((element) => element.value === 500)].count = numchip500;
  }
  if (chipsUsed.findIndex((element) => element.value === 1000) != -1) {
    chipsUsed[chipsUsed.findIndex((element) => element.value === 1000)].count = numchip1000;
  }
  if (chipsUsed.findIndex((element) => element.value === 2000) != -1) {
    chipsUsed[chipsUsed.findIndex((element) => element.value === 2000)].count = numchip2000;
  }
  if (chipsUsed.findIndex((element) => element.value === 5000) != -1) {
    chipsUsed[chipsUsed.findIndex((element) => element.value === 5000)].count = numchip5000;
  }

  for (chip of chipsUsed) {
    if (chip.count > 0) {
      document.getElementById(`chips${chip.value}`).style = "display:block";
    } else {
      document.getElementById(`chips${chip.value}`).style = "display:none";
    }
  }
}

function incrumentUp() {
  syncChipsUsedAndNumOfChips();

  for (let i = 0; i < chipsUsed.length - 1; i++) {
    let currentChip = chipsUsed[i];
    let nextChip = chipsUsed[i + 1];
    if (originalChipsUsed.includes(currentChip) == false) {
      for (chip of chipsUsed) {
        var numOfNewChips = (currentChip.value * currentChip.count) / chip.value;
        if (numOfNewChips >= 1 && chip != currentChip && chip.value > currentChip.value) {
          var numOfChipsToGive = 1 / currentChip.value;
          for (i2 = 0; i2 < chip.value; i2 += currentChip.value) {
            currentChip.count--;
            var src = document.getElementById(`chips${currentChip.value}`);
            src.removeChild(src.lastChild);
            numOfChipsToGive--;
          }
          var src = document.getElementById(`chips${chip.value}`);
          var img = document.createElement("img");
          img.src = `../img/Chips/$${chip.value}chip.png`;
          src.appendChild(img);
          chip.count++;
        }
      }
      for (chip of originalChipsUsed) {
        if (currentChip.count * currentChip.value == chip.value) {
          while (chip.value / currentChip.value > 0) {
            currentChip.count--;
            var src = document.getElementById(`chips${currentChip.value}`);
            src.removeChild(src.lastChild);
          }
          var src = document.getElementById(`chip${chip.value}`);
          var img = document.createElement("img");
          img.src = `../img/Chips/$${chip.value}chip.png`;
          src.appendChild(img);
        }
      }
    }

    while (currentChip.count > (nextChip.count + 1) * 2 && currentChip.original != false && nextChip.original != false) {
      if (nextChip.value % currentChip.value == 0) {
        const findNextChip = chipsUsed.find((element) => element.value === nextChip.value);
        if (findNextChip) {
          findNextChip.count++;
        }
        const findCurrentChip = chipsUsed.find((element) => element.value === currentChip.value);
        if (findCurrentChip) {
          findCurrentChip.count -= nextChip.value / currentChip.value;
        }
        var src = document.getElementById(`chips${nextChip.value}`);
        var img = document.createElement("img");
        img.src = `../img/Chips/$${nextChip.value}chip.png`;
        src.appendChild(img);
        for (i2 = 1; i2 <= nextChip.value / currentChip.value; i2++) {
          var src = document.getElementById(`chips${currentChip.value}`);
          src.removeChild(src.lastChild);
        }
      }
    }
    switch (currentChip.value) {
      case 0.5:
        numchip05 = currentChip.count;
        break;
      case 1:
        numchip1 = currentChip.count;
        break;
      case 5:
        numchip5 = currentChip.count;
        break;
      case 10:
        numchip10 = currentChip.count;
        break;
      case 20:
        numchip20 = currentChip.count;
        break;
      case 25:
        numchip25 = currentChip.count;
        break;
      case 50:
        numchip50 = currentChip.count;
        break;
      case 100:
        numchip100 = currentChip.count;
        break;
      case 250:
        numchip250 = currentChip.count;
        break;
      case 500:
        numchip500 = currentChip.count;
        break;
      case 1000:
        numchip1000 = currentChip.count;
        break;
      case 2000:
        numchip2000 = currentChip.count;
        break;
      case 5000:
        numchip5000 = currentChip.count;
        break;
    }
    switch (nextChip.value) {
      case 0.5:
        numchip05 = nextChip.count;
        break;
      case 1:
        numchip1 = nextChip.count;
        break;
      case 5:
        numchip5 = nextChip.count;
        break;
      case 10:
        numchip10 = nextChip.count;
        break;
      case 20:
        numchip20 = nextChip.count;
        break;
      case 25:
        numchip25 = nextChip.count;
        break;
      case 50:
        numchip50 = nextChip.count;
        break;
      case 100:
        numchip100 = nextChip.count;
        break;
      case 250:
        numchip250 = nextChip.count;
        break;
      case 500:
        numchip500 = nextChip.count;
        break;
      case 1000:
        numchip1000 = nextChip.count;
        break;
      case 2000:
        numchip2000 = nextChip.count;
        break;
      case 5000:
        numchip5000 = nextChip.count;
        break;
    }
  }
}

function checkChips() {
  syncChipsUsedAndNumOfChips();

  for (let i = 0; i < chipsUsed.length - 1; i++) {
    let currentChip = chipsUsed[i];
    let nextChip = chipsUsed[i + 1];

    while (currentChip.count < nextChip.count && currentChip.original != false && nextChip.original != false) {
      if (nextChip.value % currentChip.value == 0) {
        const findNextChip = chipsUsed.find((element) => element.value === nextChip.value);
        if (findNextChip) {
          findNextChip.count--;
        }
        const findCurrentChip = chipsUsed.find((element) => element.value === currentChip.value);
        if (findCurrentChip) {
          findCurrentChip.count += nextChip.value / currentChip.value;
        }
        var src = document.getElementById(`chips${nextChip.value}`);
        src.removeChild(src.lastChild);
        for (i2 = 1; i2 <= nextChip.value / currentChip.value; i2++) {
          var src = document.getElementById(`chips${currentChip.value}`);
          var img = document.createElement("img");
          img.src = `../img/Chips/$${currentChip.value}chip.png`;
          src.appendChild(img);
        }
      }
    }

    switch (currentChip.value) {
      case 0.5:
        numchip05 = currentChip.count;
        break;
      case 1:
        numchip1 = currentChip.count;
        break;
      case 5:
        numchip5 = currentChip.count;
        break;
      case 10:
        numchip10 = currentChip.count;
        break;
      case 20:
        numchip20 = currentChip.count;
        break;
      case 25:
        numchip25 = currentChip.count;
        break;
      case 50:
        numchip50 = currentChip.count;
        break;
      case 100:
        numchip100 = currentChip.count;
        break;
      case 250:
        numchip250 = currentChip.count;
        break;
      case 500:
        numchip500 = currentChip.count;
        break;
      case 1000:
        numchip1000 = currentChip.count;
        break;
      case 2000:
        numchip2000 = currentChip.count;
        break;
      case 5000:
        numchip5000 = currentChip.count;
        break;
    }
    switch (nextChip.value) {
      case 0.5:
        numchip05 = nextChip.count;
        break;
      case 1:
        numchip1 = nextChip.count;
        break;
      case 5:
        numchip5 = nextChip.count;
        break;
      case 10:
        numchip10 = nextChip.count;
        break;
      case 20:
        numchip20 = nextChip.count;
        break;
      case 25:
        numchip25 = nextChip.count;
        break;
      case 50:
        numchip50 = nextChip.count;
        break;
      case 100:
        numchip100 = nextChip.count;
        break;
      case 250:
        numchip250 = nextChip.count;
        break;
      case 500:
        numchip500 = nextChip.count;
        break;
      case 1000:
        numchip1000 = nextChip.count;
        break;
      case 2000:
        numchip2000 = nextChip.count;
        break;
      case 5000:
        numchip5000 = nextChip.count;
        break;
    }
  }
}

document.getElementById("progressBarDecks").style = `background: repeating-linear-gradient(to bottom, black, black 3px, transparent 0px, transparent ${100 / decks}%);`;
function showDecks() {
  document.getElementById("myBar").style = `height: ${(all.length / fullShoe.length) * 100}%`;
}

const cells = document.querySelectorAll("td");

cells.forEach((cell) => {
  if (cell.innerText === "R" && surrender == "false") {
    cell.innerHTML = "H";
  }
  if (cell.className == "rs") {
    if (surrender == "false") {
      cell.innerHTML = "S";
    }
  } else if (cell.className == "yn") {
    if (doubleAfterSplitting == "true") {
      cell.innerHTML = "Y";
      cell.classList.replace("yn", "yes");
    } else {
      cell.innerHTML = "N";
      cell.classList.replace("yn", "no");
    }
  }

  if (cell.innerText == "H") {
    cell.style = "background-color: rgb(60, 190, 145)";
  } else if (cell.innerText == "S") {
    cell.style = "background-color: rgb(250, 100, 90)";
  } else if (cell.innerText == "D") {
    cell.style = "background-color: rgb(225, 220, 25)";
  } else if (cell.innerText == "R") {
    cell.style = "background-color: rgb(70, 200, 245)";
  } else if (cell.innerText == "Y") {
    cell.style = "background-color: rgb(60, 190, 145)";
  } else if (cell.innerText == "N") {
    cell.style = "background-color: rgb(250, 100, 90)";
  }
});

function count() {
  var chosenCard = generate();
  showDecks();
  decksLeft = Math.round(all.length / 52);
  trueCount = Math.round(currentCount / decksLeft);
  return chosenCard;
}

function generate() {
  var randomIndex = Math.floor(Math.random() * all.length);
  var randomCard = all.splice(randomIndex, 1)[0];
  return randomCard;
}

function dealDealer() {
  const dealerDelt = [count(), count()];
  dealerHand = dealerDelt;
  if ([ace, 10, jack, queen, king].includes(dealerDelt[0][0])) {
    currentCount--;
  } else if ([2, 3, 4, 5, 6].includes(dealerDelt[0][0])) {
    currentCount++;
  }
  var img = document.createElement("img");
  img.src = "../img/Cards/" + dealerHand[0] + ".png";
  var src = document.getElementById("dealerHand");
  src.appendChild(img);
  var img2 = document.createElement("img");
  img2.src = "/img/back.jpeg";
  src.appendChild(img2);
  console.log(dealerDelt);
  document.getElementById("hit").style = "display: inline-block;";
  document.getElementById("stand").style = "display: inline-block;";
  document.getElementById("split").style = "display: inline-block;";
  document.getElementById("double").style = "display: inline-block;";
  if (surrender == "true") {
    document.getElementById("surrender").style = "display: inline-block;";
  }
  document.getElementById("deal").style = "display: none;";
  return dealerDelt;
}

function dealPlayer() {
  const playerDelt = [count(), count()];
  hand1 = playerDelt;
  if ([ace, 10, jack, queen, king].includes(playerDelt[0][0])) {
    currentCount--;
  } else if ([2, 3, 4, 5, 6].includes(playerDelt[0][0])) {
    currentCount++;
  }
  if ([ace, 10, jack, queen, king].includes(playerDelt[1][0])) {
    currentCount--;
  } else if ([2, 3, 4, 5, 6].includes(playerDelt[1][0])) {
    currentCount++;
  }
  var img = document.createElement("img");
  img.src = "../img/Cards/" + playerDelt[0] + ".png";
  var src = document.getElementById("hand1");
  src.appendChild(img);
  var img2 = document.createElement("img");
  img2.src = "../img/Cards/" + playerDelt[1] + ".png";
  src.appendChild(img2);

  if (calculatePlayerHand(hand1) == 21) {
    stand(hand1);
  }

  if (splittable(hand1) && numOfHands <= 3) {
    document.getElementById("split").style.display = "inline-block";
  } else {
    document.getElementById("split").style.display = "none";
  }

  return playerDelt;
}

function hit(hand, handID) {
  if (calculatePlayerHand(hand) < 21) {
    let hitCard = count();
    if ([ace, 10, jack, queen, king].includes(hitCard[0])) {
      currentCount--;
    } else if ([2, 3, 4, 5, 6].includes(hitCard[0])) {
      currentCount++;
    }
    hand.push(hitCard);
    var img = document.createElement("img");
    img.src = "../img/Cards/" + hitCard + ".png";
    var src = document.getElementById(handID);
    src.appendChild(img);
  }
  if (calculatePlayerHand(hand) >= 21) {
    stand(hand);
  }
}

function checkSoftHand(hand) {
  let total = 0;
  var numOfAces = 0;
  soft = false;
  for (let card of hand) {
    if (card[0] === ace) {
      numOfAces++;
    } else if (["10", jack, queen, king].includes(card[0])) {
      total += 10;
    } else {
      total += parseInt(card[0]);
    }
  }
  while (numOfAces > 0) {
    if (total + 11 > 21) {
      total += 1;
      soft = false;
    } else {
      total += 11;
      soft = true;
    }
    numOfAces--;
  }
  return soft;
}

function calculatePlayerHand(hand) {
  let total = 0;
  var numOfAces = 0;
  for (let card of hand) {
    if (card[0] === ace) {
      numOfAces++;
    } else if (["10", jack, queen, king].includes(card[0])) {
      total += 10;
    } else {
      total += parseInt(card[0]);
    }
  }
  while (numOfAces > 0) {
    if (total + 11 > 21) {
      total += 1;
    } else {
      total += 11;
    }
    numOfAces--;
  }

  return total;
}

function calculateDealerHand() {
  let total = 0;
  var numOfAces = 0;
  for (let card of dealerHand) {
    if (card[0] === ace) {
      numOfAces++;
    } else if (["10", jack, queen, king].includes(card[0])) {
      total += 10;
    } else {
      total += parseInt(card[0]);
    }
    while (numOfAces > 0) {
      if (total + 11 > 21) {
        total += 1;
      } else {
        total += 11;
      }
      numOfAces--;
    }
  }

  return total;
}

function stand() {
  if (hitOn17 == "true") {
    hitValue = 17;
  } else if (hitOn17 == "false") {
    hitValue = 16;
  }
  if (currentHand == numOfHands) {
    var src = document.getElementById("dealerHand");
    src.removeChild(src.lastChild);
    var img2 = document.createElement("img");
    img2.src = "../img/Cards/" + dealerHand[1] + ".png";
    src.appendChild(img2);
    for (index = 0; numOfHands > index; index++) {
      if (index == 0) {
        handIndex = hand1;
        betIndex = playerBet1;
        betID = "chipsBet1";
      } else if (index == 1) {
        handIndex = hand2;
        betIndex = playerBet2;
        betID = "chipsBet2";
      } else if (index == 2) {
        handIndex = hand3;
        betIndex = playerBet3;
        betID = "chipsBet3";
      } else if (index == 3) {
        handIndex = hand4;
        betIndex = playerBet4;
        betID = "chipsBet4";
      }
      dealerHandValue = calculateDealerHand();
      playerHandValue = calculatePlayerHand(handIndex);
      while (dealerHandValue <= hitValue && playerHandValue < 22) {
        var dealerNew = count();
        if ([ace, 10, jack, queen, king].includes(dealerNew[0])) {
          currentCount--;
        } else if ([2, 3, 4, 5, 6].includes(dealerNew[0])) {
          currentCount++;
        }
        dealerHand.push(dealerNew);
        var img = document.createElement("img");
        img.src = "../img/Cards/" + dealerNew + ".png";
        var src = document.getElementById("dealerHand");
        src.appendChild(img);
        dealerHandValue = calculateDealerHand();
      }
      if (playerHandValue == 21 && handIndex.length == 2 && index == 0 && numOfHands == 1 && (dealerHandValue != 21 || dealerHand.length > 2)) {
        pay3to1(playerBet1, "chipsBet1");
        blackJack = true;
      } else if ((handIndex == hand2 && playerHandValue > 21) || (handIndex == hand3 && playerHandValue > 21) || (handIndex == hand4 && playerHandValue > 21)) {
        win = false;
        tie = false;
        blackJack = false;
      } else if (dealerHandValue > playerHandValue && dealerHandValue <= 21) {
        win = false;
        tie = false;
        blackJack = false;
      } else if (dealerHandValue < playerHandValue && dealerHandValue <= 21 && playerHandValue <= 21) {
        win = true;
        tie = false;
        blackJack = false;
      } else if (dealerHandValue > 21 && playerHandValue <= 21) {
        win = true;
        tie = false;
        blackJack = false;
      } else if (playerHandValue > 21 && dealerHandValue <= 21) {
        win = false;
        tie = false;
        blackJack = false;
      } else if (dealerHandValue == playerHandValue) {
        tie = true;
        win = false;
        blackJack = false;
      }

      payOut(betIndex, betID);
      console.log("Dealer total:", dealerHandValue);
      console.log("Player total:", playerHandValue);
    }
    incrumentUp();
    checkChips();
    document.getElementById("hit").style = "display: none;";
    document.getElementById("stand").style = "display: none;";
    document.getElementById("split").style = "display: none;";
    document.getElementById("double").style = "display: none;";
    document.getElementById("surrender").style = "display: none;";
    setTimeout(() => {
      displayWLScreen();
    }, 700);
    if (all.length <= fullShoe.length * (1 - penetration)) {
      all = Array.from({ length: decks }, () => cards).flat();
      currentCount = 0;
      showDecks();
    }
  } else {
    switch (currentHand) {
      case 1:
        if (splittable(hand2) && numOfHands <= 3) {
          document.getElementById("split").style.display = "inline-block";
        } else {
          document.getElementById("split").style.display = "none";
        }
        break;
      case 2:
        if (splittable(hand3) && numOfHands <= 3) {
          document.getElementById("split").style.display = "inline-block";
        } else {
          document.getElementById("split").style.display = "none";
        }
        break;
    }

    currentHand++;
    currentBet++;

    switch (currentHand) {
      case 2:
        if (calculatePlayerHand(hand2) == 21) {
          stand(hand2);
        }
        break;
      case 3:
        if (calculatePlayerHand(hand3) == 21) {
          stand(hand3);
        }
        break;
      case 4:
        if (calculatePlayerHand(hand4) == 21) {
          stand(hand4);
        }
        break;
    }

    highlightHand();
  }
  return;
}

function payOut(betIndex, betID) {
  if (blackJack == true) {
  } else if (tie == true) {
    for (let i = 0; i < betIndex.length; i++) {
      var src = document.getElementById(`chips${betIndex[i]}`);
      var img = document.createElement("img");
      img.src = `../img/Chips/$${betIndex[i]}chip.png`;
      src.append(img);
      switch (betIndex[i]) {
        case 0.5:
          numchip05++;
          break;
        case 1:
          numchip1++;
          break;
        case 5:
          numchip5++;
          break;
        case 10:
          numchip10++;
          break;
        case 20:
          numchip20++;
          break;
        case 25:
          numchip25++;
          break;
        case 50:
          numchip50++;
          break;
        case 100:
          numchip100++;
          break;
        case 250:
          numchip250++;
          break;
        case 500:
          numchip500++;
          break;
        case 1000:
          numchip1000++;
          break;
        case 2000:
          numchip2000++;
          break;
        case 5000:
          numchip5000++;
          break;
      }
    }
    for (let i = 0; i < betIndex.length; i++) {
      var src = document.getElementById(betID);
      src.removeChild(src.lastChild);
    }
    console.log("tie");
  } else if (win == true) {
    for (let i = 0; i < betIndex.length; i++) {
      var src = document.getElementById(`chips${betIndex[i]}`);
      var img = document.createElement("img");
      img.src = `../img/Chips/$${betIndex[i]}chip.png`;
      src.append(img);
      var src = document.getElementById(`chips${betIndex[i]}`);
      var img = document.createElement("img");
      img.src = `../img/Chips/$${betIndex[i]}chip.png`;
      src.append(img);
      switch (betIndex[i]) {
        case 0.5:
          numchip05 += 2;
          wlammount += 0.5;
          break;
        case 1:
          numchip1 += 2;
          wlammount += 1;
          break;
        case 5:
          numchip5 += 2;
          wlammount += 5;
          break;
        case 10:
          numchip10 += 2;
          wlammount += 10;
          break;
        case 20:
          numchip20 += 2;
          wlammount += 20;
          break;
        case 25:
          numchip25 += 2;
          wlammount += 25;
          break;
        case 50:
          numchip50 += 2;
          wlammount += 50;
          break;
        case 100:
          numchip100 += 2;
          wlammount += 100;
          break;
        case 250:
          numchip250 += 2;
          wlammount += 250;
          break;
        case 500:
          numchip500 += 2;
          wlammount += 500;
          break;
        case 1000:
          numchip1000 += 2;
          wlammount += 1000;
          break;
        case 2000:
          numchip2000 += 2;
          wlammount += 2000;
          break;
        case 5000:
          numchip5000 += 2;
          wlammount += 5000;
          break;
      }
    }
    for (let i = 0; i < betIndex.length; i++) {
      var src = document.getElementById(betID);
      src.removeChild(src.lastChild);
    }
    console.log("win");
  } else if (win == false) {
    for (let i = 0; i < betIndex.length; i++) {
      var src = document.getElementById(betID);
      src.removeChild(src.lastChild);
      wlammount -= betIndex[i];
    }
    console.log("loss");
  } else {
    console.log("error");
  }
  console.log(wlammount);
  wlTotal += wlammount;
}

function payHalf(playerBet, playerBetID) {
  var totalChipValue = 0;
  for (let chip of playerBet) {
    totalChipValue += chip;
  }
  var halfTotalChipValue = totalChipValue / 2;
  wlammount -= halfTotalChipValue;
  while (halfTotalChipValue >= 0.5) {
    chipsUsed.sort((a, b) => b.value - a.value);
    for (chip of chipsUsed) {
      if (halfTotalChipValue - chip.value >= 0) {
        while (halfTotalChipValue - chip.value >= 0) {
          var src = document.getElementById(`chips${chip.value}`);
          var img = document.createElement("img");
          img.src = `../img/Chips/$${chip.value}chip.png`;
          src.appendChild(img);
          halfTotalChipValue -= chip.value;
          switch (chip.value) {
            case 0.5:
              numchip05++;
              break;
            case 1:
              numchip1++;
              break;
            case 5:
              numchip5++;
              break;
            case 10:
              numchip10++;
              break;
            case 20:
              numchip20++;
              break;
            case 25:
              numchip25++;
              break;
            case 50:
              numchip50++;
              break;
            case 100:
              numchip100++;
              break;
            case 250:
              numchip250++;
              break;
            case 500:
              numchip500++;
              break;
            case 1000:
              numchip1000++;
              break;
            case 2000:
              numchip2000++;
              break;
            case 5000:
              numchip5000++;
              break;
          }
        }
      }
    }

    if (halfTotalChipValue < 1 && halfTotalChipValue >= 0.5) {
      numchip05++;
      chipsUsed.push({ value: chip05, count: numchip05, original: false });
      halfTotalChipValue -= 0.5;
      var src = document.getElementById("chips0.5");
      var img = document.createElement("img");
      img.src = `../img/Chips/$0.5chip.png`;
      src.appendChild(img);
    } else if (halfTotalChipValue < 5 && halfTotalChipValue > 1) {
      numchip1++;
      chipsUsed.push({ value: chip1, count: numchip1, original: false });
      halfTotalChipValue -= 1;
      var src = document.getElementById("chips1");
      var img = document.createElement("img");
      img.src = `../img/Chips/$1chip.png`;
      src.appendChild(img);
    } else if (halfTotalChipValue < 10 && halfTotalChipValue > 1) {
      numchip5++;
      chipsUsed.push({ value: chip5, count: numchip5, original: false });
      halfTotalChipValue -= 5;
      var src = document.getElementById("chips5");
      var img = document.createElement("img");
      img.src = `../img/Chips/$5chip.png`;
      src.appendChild(img);
    } else if (halfTotalChipValue < 20 && halfTotalChipValue > 1) {
      numchip10++;
      chipsUsed.push({ value: chip10, count: numchip10, original: false });
      halfTotalChipValue -= 10;
      var src = document.getElementById("chips10");
      var img = document.createElement("img");
      img.src = `../img/Chips/$10chip.png`;
      src.appendChild(img);
    } else if (halfTotalChipValue < 25 && halfTotalChipValue > 1) {
      numchip20++;
      chipsUsed.push({ value: chip20, count: numchip20, original: false });
      halfTotalChipValue -= 20;
      var src = document.getElementById("chips20");
      var img = document.createElement("img");
      img.src = `../img/Chips/$20chip.png`;
      src.appendChild(img);
    } else if (halfTotalChipValue < 50 && halfTotalChipValue > 1) {
      numchip25++;
      chipsUsed.push({ value: chip25, count: numchip25, original: false });
      halfTotalChipValue -= 25;
      var src = document.getElementById("chips25");
      var img = document.createElement("img");
      img.src = `../img/Chips/$25chip.png`;
      src.appendChild(img);
    } else if (halfTotalChipValue < 100 && halfTotalChipValue > 1) {
      numchip50++;
      chipsUsed.push({ value: chip50, count: numchip50, original: false });
      halfTotalChipValue -= 50;
      var src = document.getElementById("chips50");
      var img = document.createElement("img");
      img.src = `../img/Chips/$50chip.png`;
      src.appendChild(img);
    } else if (halfTotalChipValue < 250 && halfTotalChipValue > 1) {
      numchip100++;
      chipsUsed.push({ value: chip100, count: numchip100, original: false });
      halfTotalChipValue -= 100;
      var src = document.getElementById("chips100");
      var img = document.createElement("img");
      img.src = `../img/Chips/$100chip.png`;
      src.appendChild(img);
    } else if (halfTotalChipValue < 500 && halfTotalChipValue > 1) {
      numchip250++;
      chipsUsed.push({ value: chip250, count: numchip250, original: false });
      halfTotalChipValue -= 250;
      var src = document.getElementById("chips250");
      var img = document.createElement("img");
      img.src = `../img/Chips/$250chip.png`;
      src.appendChild(img);
    } else if (halfTotalChipValue < 1000 && halfTotalChipValue > 1) {
      numchip500++;
      chipsUsed.push({ value: chip500, count: numchip500, original: false });
      halfTotalChipValue -= 500;
      var src = document.getElementById("chips500");
      var img = document.createElement("img");
      img.src = `../img/Chips/$500chip.png`;
      src.appendChild(img);
    } else if (halfTotalChipValue < 2000 && halfTotalChipValue > 1) {
      numchip1000++;
      chipsUsed.push({ value: chip1000, count: numchip1000, original: false });
      halfTotalChipValue -= 1000;
      var src = document.getElementById("chips1000");
      var img = document.createElement("img");
      img.src = `../img/Chips/$1000chip.png`;
      src.appendChild(img);
    } else if (halfTotalChipValue < 5000 && halfTotalChipValue > 1) {
      numchip2000++;
      chipsUsed.push({ value: chip2000, count: numchip2000, original: false });
      halfTotalChipValue -= 2000;
      var src = document.getElementById("chips2000");
      var img = document.createElement("img");
      img.src = `../img/Chips/$2000chip.png`;
      src.appendChild(img);
    } else if (halfTotalChipValue > 1) {
      numchip5000++;
      chipsUsed.push({ value: chip5000, count: numchip5000, original: false });
      halfTotalChipValue -= 5000;
      var src = document.getElementById("chips5000");
      var img = document.createElement("img");
      img.src = `../img/Chips/$5000chip.png`;
      src.appendChild(img);
    }
  }

  for (i = 0; playerBet.length > i; i++) {
    var src = document.getElementById(playerBetID);
    src.removeChild(src.lastChild);
    switch (playerBetID[i]) {
      case 0.5:
        numchip05--;
        break;
      case 1:
        numchip1--;
        break;
      case 5:
        numchip5--;
        break;
      case 10:
        numchip10--;
        break;
      case 20:
        numchip20--;
        break;
      case 25:
        numchip25--;
        break;
      case 50:
        numchip50--;
        break;
      case 100:
        numchip100--;
        break;
      case 250:
        numchip250--;
        break;
      case 500:
        numchip500--;
        break;
      case 1000:
        numchip1000--;
        break;
      case 2000:
        numchip2000--;
        break;
      case 5000:
        numchip5000--;
        break;
    }
  }

  switch (currentHand) {
    case 1:
      playerBet1 = [];
      stand(hand1);
      break;
    case 2:
      playerBet2 = [];
      stand(hand2);
      break;
    case 3:
      playerBet3 = [];
      stand(hand3);
      break;
    case 4:
      playerBet4 = [];
      stand(hand4);
      break;
  }

  if (numOfHands == currentHand - 1) {
    document.getElementById("hit").style = "display: none;";
    document.getElementById("stand").style = "display: none;";
    document.getElementById("split").style = "display: none;";
    document.getElementById("double").style = "display: none;";
    document.getElementById("surrender").style = "display: none;";
    setTimeout(() => {
      displayWLScreen();
    }, 700);
  }

  switch (currentHand) {
    case 2:
      if (calculatePlayerHand(hand2) == 21) {
        stand(hand2);
      }
      break;
    case 3:
      if (calculatePlayerHand(hand3) == 21) {
        stand(hand3);
      }
      break;
    case 4:
      if (calculatePlayerHand(hand4) == 21) {
        stand(hand4);
      }
      break;
  }

  highlightHand();
}

function pay3to1(playerBet, playerBetID) {
  var totalChipValue = 0;
  for (let chip of playerBet) {
    totalChipValue += chip;
  }
  var thirdTotalChipValue = totalChipValue * 0.5;
  wlammount += thirdTotalChipValue;
  while (thirdTotalChipValue >= 0.5) {
    chipsUsed.sort((a, b) => b.value - a.value);
    for (chip of chipsUsed) {
      if (thirdTotalChipValue - chip.value >= 0) {
        while (thirdTotalChipValue - chip.value >= 0) {
          var src = document.getElementById(`chips${chip.value}`);
          var img = document.createElement("img");
          img.src = `../img/Chips/$${chip.value}chip.png`;
          src.appendChild(img);
          thirdTotalChipValue -= chip.value;
          switch (chip.value) {
            case 0.5:
              numchip05++;
              break;
            case 1:
              numchip1++;
              break;
            case 5:
              numchip5++;
              break;
            case 10:
              numchip10++;
              break;
            case 20:
              numchip20++;
              break;
            case 25:
              numchip25++;
              break;
            case 50:
              numchip50++;
              break;
            case 100:
              numchip100++;
              break;
            case 250:
              numchip250++;
              break;
            case 500:
              numchip500++;
              break;
            case 1000:
              numchip1000++;
              break;
            case 2000:
              numchip2000++;
              break;
            case 5000:
              numchip5000++;
              break;
          }
        }
      }
    }

    if (thirdTotalChipValue < 1 && thirdTotalChipValue >= 0.5) {
      numchip05++;
      chipsUsed.push({ value: chip05, count: numchip05, original: false });
      thirdTotalChipValue -= 0.5;
      var src = document.getElementById("chips0.5");
      var img = document.createElement("img");
      img.src = `../img/Chips/$0.5chip.png`;
      src.appendChild(img);
    } else if (thirdTotalChipValue < 5 && thirdTotalChipValue > 1) {
      numchip1++;
      chipsUsed.push({ value: chip1, count: numchip1, original: false });
      thirdTotalChipValue -= 1;
      var src = document.getElementById("chips1");
      var img = document.createElement("img");
      img.src = `../img/Chips/$1chip.png`;
      src.appendChild(img);
    } else if (thirdTotalChipValue < 10 && thirdTotalChipValue > 1) {
      numchip5++;
      chipsUsed.push({ value: chip5, count: numchip5, original: false });
      thirdTotalChipValue -= 5;
      var src = document.getElementById("chips5");
      var img = document.createElement("img");
      img.src = `../img/Chips/$5chip.png`;
      src.appendChild(img);
    } else if (thirdTotalChipValue < 20 && thirdTotalChipValue > 1) {
      numchip10++;
      chipsUsed.push({ value: chip10, count: numchip10, original: false });
      thirdTotalChipValue -= 10;
      var src = document.getElementById("chips10");
      var img = document.createElement("img");
      img.src = `../img/Chips/$10chip.png`;
      src.appendChild(img);
    } else if (thirdTotalChipValue < 25 && thirdTotalChipValue > 1) {
      numchip20++;
      chipsUsed.push({ value: chip20, count: numchip20, original: false });
      thirdTotalChipValue -= 20;
      var src = document.getElementById("chips20");
      var img = document.createElement("img");
      img.src = `../img/Chips/$20chip.png`;
      src.appendChild(img);
    } else if (thirdTotalChipValue < 50 && thirdTotalChipValue > 1) {
      numchip25++;
      chipsUsed.push({ value: chip25, count: numchip25, original: false });
      thirdTotalChipValue -= 25;
      var src = document.getElementById("chips25");
      var img = document.createElement("img");
      img.src = `../img/Chips/$25chip.png`;
      src.appendChild(img);
    } else if (thirdTotalChipValue < 100 && thirdTotalChipValue > 1) {
      numchip50++;
      chipsUsed.push({ value: chip50, count: numchip50, original: false });
      thirdTotalChipValue -= 50;
      var src = document.getElementById("chips50");
      var img = document.createElement("img");
      img.src = `../img/Chips/$50chip.png`;
      src.appendChild(img);
    } else if (thirdTotalChipValue < 250 && thirdTotalChipValue > 1) {
      numchip100++;
      chipsUsed.push({ value: chip100, count: numchip100, original: false });
      thirdTotalChipValue -= 100;
      var src = document.getElementById("chips100");
      var img = document.createElement("img");
      img.src = `../img/Chips/$100chip.png`;
      src.appendChild(img);
    } else if (thirdTotalChipValue < 500 && thirdTotalChipValue > 1) {
      numchip250++;
      chipsUsed.push({ value: chip250, count: numchip250, original: false });
      thirdTotalChipValue -= 250;
      var src = document.getElementById("chips250");
      var img = document.createElement("img");
      img.src = `../img/Chips/$250chip.png`;
      src.appendChild(img);
    } else if (thirdTotalChipValue < 1000 && thirdTotalChipValue > 1) {
      numchip500++;
      chipsUsed.push({ value: chip500, count: numchip500, original: false });
      thirdTotalChipValue -= 500;
      var src = document.getElementById("chips500");
      var img = document.createElement("img");
      img.src = `../img/Chips/$500chip.png`;
      src.appendChild(img);
    } else if (thirdTotalChipValue < 2000 && thirdTotalChipValue > 1) {
      numchip1000++;
      chipsUsed.push({ value: chip1000, count: numchip1000, original: false });
      thirdTotalChipValue -= 1000;
      var src = document.getElementById("chips1000");
      var img = document.createElement("img");
      img.src = `../img/Chips/$1000chip.png`;
      src.appendChild(img);
    } else if (thirdTotalChipValue < 5000 && thirdTotalChipValue > 1) {
      numchip2000++;
      chipsUsed.push({ value: chip2000, count: numchip2000, original: false });
      thirdTotalChipValue -= 2000;
      var src = document.getElementById("chips2000");
      var img = document.createElement("img");
      img.src = `../img/Chips/$2000chip.png`;
      src.appendChild(img);
    } else if (thirdTotalChipValue > 1) {
      numchip5000++;
      chipsUsed.push({ value: chip5000, count: numchip5000, original: false });
      thirdTotalChipValue -= 5000;
      var src = document.getElementById("chips5000");
      var img = document.createElement("img");
      img.src = `../img/Chips/$5000chip.png`;
      src.appendChild(img);
    }
  }

  for (i = 0; playerBet.length > i; i++) {
    var src = document.getElementById(playerBetID);
    src.removeChild(src.lastChild);
    switch (playerBetID[i]) {
      case 0.5:
        numchip05--;
        break;
      case 1:
        numchip1--;
        break;
      case 5:
        numchip5--;
        break;
      case 10:
        numchip10--;
        break;
      case 20:
        numchip20--;
        break;
      case 25:
        numchip25--;
        break;
      case 50:
        numchip50--;
        break;
      case 100:
        numchip100--;
        break;
      case 250:
        numchip250--;
        break;
      case 500:
        numchip500--;
        break;
      case 1000:
        numchip1000--;
        break;
      case 2000:
        numchip2000--;
        break;
      case 5000:
        numchip5000--;
        break;
    }
  }

  if (numOfHands == index + 1) {
    document.getElementById("hit").style = "display: none;";
    document.getElementById("stand").style = "display: none;";
    document.getElementById("split").style = "display: none;";
    document.getElementById("double").style = "display: none;";
    document.getElementById("surrender").style = "display: none;";
    setTimeout(() => {
      displayWLScreen();
    }, 700);
  }

  currentHand++;
  currentBet++;

  switch (currentHand) {
    case 2:
      if (calculatePlayerHand(hand2) == 21) {
        stand(hand2);
      }
      break;
    case 3:
      if (calculatePlayerHand(hand3) == 21) {
        stand(hand3);
      }
      break;
    case 4:
      if (calculatePlayerHand(hand4) == 21) {
        stand(hand4);
      }
      break;
  }

  highlightHand();
}

function double(hand) {
  function chipsvarD(hand) {
    switch (hand) {
      case hand1:
        return playerBet1;
      case hand2:
        return playerBet2;
      case hand3:
        return playerBet3;
      case hand4:
        return playerBet4;
    }
  }
  if (doubleAfterSplitting == "false" && numOfSplits > 1) {
  } else {
    for (i = 0; i < chipsvarD(hand).length; i++) {
      ammount += chipsvarD(hand)[i];
      document.getElementById("bet").innerHTML = ammount;
      var src = document.getElementById(`chipsBet${currentHand}`);
      var img = document.createElement("img");
      img.src = `../img/Chips/$${chipsvarD(hand)[i]}chip.png`;
      src.append(img);
      switch (chipsvarD(hand)[i]) {
        case 0.5:
          numchip05--;
          break;
        case 1:
          numchip1--;
          break;
        case 5:
          numchip5--;
          break;
        case 10:
          numchip10--;
          break;
        case 20:
          numchip20--;
          break;
        case 25:
          numchip25--;
          break;
        case 50:
          numchip50--;
          break;
        case 100:
          numchip100--;
          break;
        case 250:
          numchip250--;
          break;
        case 500:
          numchip500--;
          break;
        case 1000:
          numchip1000--;
          break;
        case 2000:
          numchip2000--;
          break;
        case 5000:
          numchip5000--;
          break;
      }
      var src = document.getElementById(`chips${chipsvarD(hand)[i]}`);
      src.removeChild(src.lastChild);
    }
    for (i = 0; i < chipsvarD(hand).length; i++) {
      chipsvarD(hand).push(chipsvarD(hand)[i]);
      i++;
    }

    console.log(chipsvarD(hand));
    switch (currentHand) {
      case 1:
        hit(hand1, "hand1");
        if (calculatePlayerHand(hand1) < 21) {
          stand(hand1);
        }
        break;
      case 2:
        hit(hand2, "hand2");
        if (calculatePlayerHand(hand2) < 21) {
          stand(hand2);
        }
        break;
      case 3:
        hit(hand3, "hand3");
        if (calculatePlayerHand(hand3) < 21) {
          stand(hand3);
        }
        break;
      case 4:
        hit(hand4, "hand4");
        if (calculatePlayerHand(hand4) < 21) {
          stand(hand4);
        }
    }
    switch (currentHand) {
      case 2:
        if (splittable(hand2) && numOfHands <= 3) {
          document.getElementById("split").style.display = "inline-block";
        } else {
          document.getElementById("split").style.display = "none";
        }
        break;
      case 3:
        if (splittable(hand3) && numOfHands <= 3) {
          document.getElementById("split").style.display = "inline-block";
        } else {
          document.getElementById("split").style.display = "none";
        }
        break;
    }
  }
}

function split(hand, shand, handID, handID2) {
  var src = document.getElementById(handID2);
  var img = document.createElement("img");
  img.src = "../img/Cards/" + hand[1] + ".png";
  src.appendChild(img);

  var src = document.getElementById(handID);
  src.removeChild(src.lastChild);

  shand = [hand[1]];
  hand = [hand[0]];

  hand.push(count());
  shand.push(count());

  if ([ace, 10, jack, queen, king].includes(hand[1][0])) {
    currentCount--;
  } else if ([2, 3, 4, 5, 6].includes(hand[1][0])) {
    currentCount++;
  }
  if ([ace, 10, jack, queen, king].includes(shand[1][0])) {
    currentCount--;
  } else if ([2, 3, 4, 5, 6].includes(shand[1][0])) {
    currentCount++;
  }

  var img = document.createElement("img");
  img.src = "../img/Cards/" + hand[1] + ".png";
  var src = document.getElementById(handID);
  src.appendChild(img);

  var img = document.createElement("img");
  img.src = "../img/Cards/" + shand[1] + ".png";
  var src = document.getElementById(handID2);
  src.appendChild(img);

  if (handID == "hand1" && numOfSplits == 1) {
    hand1 = hand;
    hand2 = shand;
    numOfHands++;
    numOfSplits++;
    if (splittable(hand1) && numOfHands <= 3) {
      document.getElementById("split").style.display = "inline-block";
    } else {
      document.getElementById("split").style.display = "none";
    }
    document.getElementById("hb2").style = "display: inline-block;";
  } else if (handID == "hand1" && numOfSplits == 2) {
    hand1 = hand;
    hand3 = shand;
    numOfHands++;
    numOfSplits++;
    if (splittable(hand1) && numOfHands <= 3) {
      document.getElementById("split").style.display = "inline-block";
    } else {
      document.getElementById("split").style.display = "none";
    }
    document.getElementById("hb3").style = "display: inline-block;";
  } else if (handID == "hand1" && numOfSplits == 3) {
    hand1 = hand;
    hand4 = shand;
    numOfHands++;
    numOfSplits++;
    if (splittable(hand1) && numOfHands <= 3) {
      document.getElementById("split").style.display = "inline-block";
    } else {
      document.getElementById("split").style.display = "none";
    }
    document.getElementById("hb4").style = "display: inline-block;";
  }
  if (handID == "hand2" && numOfSplits == 2) {
    hand2 = hand;
    hand3 = shand;
    numOfHands++;
    numOfSplits++;
    if (splittable(hand2) && numOfHands <= 3) {
      document.getElementById("split").style.display = "inline-block";
    } else {
      document.getElementById("split").style.display = "none";
    }
    document.getElementById("hb3").style = "display: inline-block;";
  } else if (handID == "hand2" && numOfSplits == 3) {
    hand2 = hand;
    hand4 = shand;
    numOfHands++;
    numOfSplits++;
    if (splittable(hand2) && numOfHands <= 3) {
      document.getElementById("split").style.display = "inline-block";
    } else {
      document.getElementById("split").style.display = "none";
    }
    document.getElementById("hb4").style = "display: inline-block;";
  }
  if (handID == "hand3" && numOfSplits == 3) {
    hand3 = hand;
    hand4 = shand;
    numOfHands++;
    numOfSplits++;
    if (splittable(hand3) && numOfHands <= 3) {
      document.getElementById("split").style.display = "inline-block";
    } else {
      document.getElementById("split").style.display = "none";
    }
    document.getElementById("hb4").style = "display: inline-block;";
  }

  for (i = 0; i < chipsvar(currentBet).length; i++) {
    switch (chipsvar(currentBet)[i]) {
      case 0.5:
        removeChips("chips0.5", numchip05, numOfHands);
        break;
      case 1:
        removeChips("chips1", numchip1, numOfHands);
        break;
      case 5:
        removeChips("chips5", numchip5, numOfHands);
        break;
      case 10:
        removeChips("chips10", numchip10, numOfHands);
        break;
      case 20:
        removeChips("chips20", numchip20, numOfHands);
        break;
      case 25:
        removeChips("chips25", numchip25, numOfHands);
        break;
      case 50:
        removeChips("chips50", numchip50, numOfHands);
        break;
      case 100:
        removeChips("chips100", numchip100, numOfHands);
        break;
      case 250:
        removeChips("chips250", numchip250, numOfHands);
        break;
      case 500:
        removeChips("chips500", numchip500, numOfHands);
        break;
      case 1000:
        removeChips("chips1000", numchip1000, numOfHands);
        break;
      case 2000:
        removeChips("chips2000", numchip2000, numOfHands);
        break;
      case 5000:
        removeChips("chips5000", numchip5000, numOfHands);
        break;
    }
  }

  switch (currentHand) {
    case 1:
      if (calculatePlayerHand(hand1) == 21) {
        stand(hand1);
      }
      break;
    case 2:
      if (calculatePlayerHand(hand2) == 21) {
        stand(hand2);
      }
      break;
    case 3:
      if (calculatePlayerHand(hand3) == 21) {
        stand(hand3);
      }
      break;
    case 4:
      if (calculatePlayerHand(hand4) == 21) {
        stand(hand4);
      }
      break;
  }

  highlightHand();
}

function findBestMove(hand) {
  var bestMove = "";
  let playerHandValue = calculatePlayerHand(hand);
  let dealerCard = dealerHand[0][0];
  document.getElementById("countInput").value = trueCount;

  if (dealerCard == "Jack" || dealerCard == "Queen" || dealerCard == "King") {
    dealerCard = 10;
  } else if (dealerCard == "Ace") {
    dealerCard == 11;
  }

  deviations(trueCount);

  if (checkSoftHand(hand) == false) {
    if (playerHandValue == 16) {
      if (dealerCard == 9 && trueCount >= 5) {
        return "Stand";
      } else if (dealerCard == 10 && trueCount >= 0) {
        return "Stand";
      }
    } else if (playerHandValue == 15) {
      if (surrender == false) {
        if (dealerCard == 10 && trueCount >= 4) {
          return "Stand";
        }
      }
    } else if (playerHandValue == 13) {
      if (dealerCard == 2 && trueCount >= -1) {
        return "Stand";
      } else if (dealerCard == 3 && trueCount >= -2) {
        return "Stand";
      }
    } else if (playerHandValue == 12) {
      if (dealerCard == 2 && trueCount >= 4) {
        return "Stand";
      } else if (dealerCard == 3 && trueCount >= 2) {
        return "Stand";
      } else if (dealerCard == 4 && trueCount >= 0) {
        return "Stand";
      } else if (dealerCard == 5 && trueCount >= -1) {
        return "Stand";
      } else if (dealerCard == 6 && trueCount >= -1) {
        return "Stand";
      }
    } else if (playerHandValue == 11 && dealerCard == 11 && trueCount >= 1) {
      bestMove = "DAS";
    } else if (playerHandValue == 10) {
      if (dealerCard == 10 && trueCount >= 4) {
        bestMove = "DAS";
      } else if (dealerCard == 11 && trueCount >= 4) {
        bestMove = "DAS";
      }
    } else if (playerHandValue == 9) {
      if (dealerCard == 2 && trueCount >= 1) {
        bestMove = "DAS";
      } else if (dealerCard == 7 && trueCount >= 4) {
        bestMove = "DAS";
      }
    } else if (playerHandValue == 14 && dealerCard == 10 && trueCount >= 3) {
      bestMove = "Surrender";
    } else if (playerHandValue == 15) {
      if (dealerCard == 10 && trueCount >= 0) {
        bestMove = "Surrender";
      } else if ((dealerCard == 9 || dealerCard == 11) && trueCount >= 2) {
        bestMove = "Surrender";
      }
    } else if (splittable(hand) && playerHandValue == 20) {
      if ((dealerCard == 5 || dealerCard == 6) && trueCount >= 5) {
        return "Split";
      }
    }
  }

  if (bestMove == "DAS") {
    if (doubleAfterSplitting == "true" || (doubleAfterSplitting == "false" && numOfHands == 1)) {
      return "Double";
    }
  }
  if (surrender == "true" && bestMove == "Surrender") {
    return "Surrender";
  }

  if (splittable(hand)) {
    if (hand[0][0] == 2 || hand[0][0] == 3) {
      if (dealerCard <= 3) {
        bestMove = "DAS";
      }
      if (dealerCard <= 7) {
        return "Split";
      }
    } else if (hand[0][0] == 4) {
      if (dealerCard == 5 || dealerCard == 6) {
        bestMove = "DAS";
      }
    } else if (hand[0][0] == 6) {
      if (dealerCard == 2) {
        bestMove = "DAS";
      } else if (dealerCard <= 6) {
        return "Split";
      }
    } else if (hand[0][0] == 7) {
      if (dealerCard <= 7) {
        return "Split";
      }
    } else if (hand[0][0] == 8) {
      return "Split";
    } else if (hand[0][0] == 9) {
      if (dealerCard <= 6 || dealerCard == 8 || dealerCard == 9) {
        return "Split";
      }
    } else if (hand[0][0] == "Ace") {
      return "Split";
    }
  }

  if (bestMove == "DAS") {
    if (doubleAfterSplitting == "true" || (doubleAfterSplitting == "false" && numOfHands == 1)) {
      return "Double";
    }
  }

  if (checkSoftHand(hand) == true) {
    if (playerHandValue <= 12) {
      return "Hit";
    } else if (playerHandValue <= 14) {
      if (dealerCard == 5 || dealerCard == 6) {
        bestMove = "Double";
      } else {
        return "Hit";
      }
    } else if (playerHandValue <= 16) {
      if (dealerCard >= 4 && dealerCard <= 6) {
        bestMove = "Double";
      } else {
        return "Hit";
      }
    } else if (playerHandValue == 17) {
      if (dealerCard >= 3 && dealerCard <= 6) {
        bestMove = "Double";
      } else {
        return "Hit";
      }
    } else if (playerHandValue == 18) {
      if (dealerCard <= 6) {
        bestMove = "Double Stand";
      } else if (dealerCard <= 8) {
        return "Stand";
      } else {
        return "Hit";
      }
    } else if (playerHandValue == 19) {
      if (dealerCard == 6) {
        bestMove = "Double Stand";
      } else {
        return "Stand";
      }
    } else if (playerHandValue >= 20) {
      return "Stand";
    }

    if (bestMove == "Double" || bestMove == "Double Stand") {
      if (doubleAfterSplitting == "false" && numOfHands > 1) {
        if (bestMove == "Double") {
          return "Hit";
        } else if (bestMove == "Double Stand") {
          return "Stand";
        }
      } else {
        return "Double";
      }
    }
  } else {
    if (playerHandValue <= 8) {
      return "Hit";
    } else if (playerHandValue == 9) {
      if (dealerCard >= 3 && dealerCard <= 6) {
        bestMove = "Double";
      } else {
        return "Hit";
      }
    } else if (playerHandValue == 10) {
      if (dealerCard <= 9) {
        bestMove = "Double";
      } else {
        return "Hit";
      }
    } else if (playerHandValue == 11) {
      bestMove = "Double";
    } else if (playerHandValue == 12) {
      if (dealerCard >= 4 && dealerCard <= 6) {
        return "Stand";
      } else {
        return "Hit";
      }
    } else if (playerHandValue == 13 || playerHandValue == 14) {
      if (dealerCard <= 6) {
        return "Stand";
      } else {
        return "Hit";
      }
    } else if (playerHandValue == 15) {
      if (dealerCard <= 6) {
        return "Stand";
      } else if (dealerCard == 10) {
        bestMove = "Surrender";
      } else {
        return "Hit";
      }
    } else if (playerHandValue == 16) {
      if (dealerCard <= 6) {
        return "Stand";
      } else if (dealerCard <= 8) {
        return "Hit";
      } else {
        bestMove = "Surrender";
      }
    } else if (playerHandValue >= 17) {
      return "Stand";
    }
  }

  if (bestMove == "Surrender" && surrender == "false") {
    return "Hit";
  }
  if (bestMove == "Double") {
    if (doubleAfterSplitting == "false" && numOfHands > 1) {
      return "Hit";
    } else {
      bestMove = "Double";
    }
  }
  return bestMove;
}

function deviations(trueCount) {
  function setElements(className, innerHTML, backgroundColor, highlight) {
    let elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
      elements[i].innerHTML = innerHTML;
      if (highlight == "y") {
        elements[i].style = `background-Color: ${backgroundColor}; color: #312e2b`;
      } else {
        elements[i].style = `background-Color: ${backgroundColor}`;
      }
    }
  }
  if (trueCount >= -2) {
    setElements("stand-2", "S", "rgb(250, 100, 90)");
  } else {
    setElements("stand-2", "H", "rgb(60, 190, 145)", "y");
  }

  if (trueCount >= -1) {
    setElements("stand-1", "S", "rgb(250, 100, 90)");
  } else {
    setElements("stand-1", "H", "rgb(60, 190, 145)", "y");
  }

  if (trueCount >= 0) {
    if (surrender == "true") {
      setElements("surrender0", "R", "rgb(70, 200, 245)");
    }
    setElements("stand0", "S", "rgb(250, 100, 90)");
  } else {
    if (surrender == "true") {
      setElements("surrender0", "H", "rgb(60, 190, 145)", "y");
    } else {
      setElements("surrender0", "H", "rgb(60, 190, 145)");
    }
    setElements("stand0", "H", "rgb(60, 190, 145)", "y");
  }

  if (trueCount >= 1) {
    setElements("double1", "D", "rgb(225, 220, 25)", "y");
  } else {
    setElements("double1", "H", "rgb(60, 190, 145)");
  }

  if (trueCount >= 2) {
    if (surrender == "true") {
      setElements("surrender2", "R", "rgb(70, 200, 245)", "y");
    }
    setElements("stand2", "S", "rgb(250, 100, 90)", "y");
  } else {
    setElements("surrender2", "H", "rgb(60, 190, 145)");
    setElements("stand2", "H", "rgb(60, 190, 145)");
  }

  if (trueCount >= 3) {
    if (surrender == "true") {
      setElements("surrender3", "R", "rgb(70, 200, 245)", "y");
    }
  } else {
    setElements("surrender3", "H", "rgb(60, 190, 145)");
  }

  if (trueCount >= 4) {
    if (surrender == "false") {
      setElements("stand4S", "S", "rgb(250, 100, 90)", "y");
    }
    setElements("stand4", "S", "rgb(250, 100, 90)", "y");
    setElements("double4", "D", "rgb(225, 220, 25)", "y");
  } else {
    if (surrender == "false") {
      setElements("stand4S", "H", "rgb(60, 190, 145)");
    }
    setElements("stand4", "H", "rgb(60, 190, 145)");
    setElements("double4", "H", "rgb(60, 190, 145)");
  }

  if (trueCount >= 5) {
    setElements("stand5", "S", "rgb(250, 100, 90)", "y");
    setElements("split5", "Y", "rgb(60, 190, 145)", "y");
  } else {
    if (surrender == "true") {
      setElements("stand5", "R", "rgb(70, 200, 245)");
    } else {
      setElements("stand5", "H", "rgb(60, 190, 145)");
    }
    setElements("split5", "N", "rgb(250, 100, 90)");
  }
}

document.getElementById("countInput").addEventListener("input", function () {
  deviations(document.getElementById("countInput").value);
});

/*function bestMoveTest() {
  for (i = 8; i < 18; i++) {
    for (i2 = 2; i2 < 12; i2++) {
      console.log(i + " " + i2 + " " + findBestMove(i, i2));
    }
  }
}*/

function showBestMove(move) {
  currentMove = move;
  document.getElementById("bestMoveScreen").style.display = "block";
  document.getElementById("bestMoveText").innerHTML = currentMove + " is not the best move";
  document.getElementById("goAgainstBestMove").innerHTML = currentMove + " anyways";

  document.getElementById("goAgainstBestMove").addEventListener("click", function () {
    if (document.getElementById("bestMoveScreen").style.display == "block") {
      if (currentMove == "Hit") {
        if (currentHand == 1) {
          hit(hand1, "hand1");
        } else if (currentHand == 2) {
          hit(hand2, "hand2");
        } else if (currentHand == 3) {
          hit(hand3, "hand3");
        } else if (currentHand == 4) {
          hit(hand4, "hand4");
        }
      } else if (currentMove == "Stand") {
        switch (currentHand) {
          case 1:
            stand(playerBet1);
            break;
          case 2:
            stand(playerBet2);
            break;
          case 3:
            stand(playerBet3);
            break;
          case 4:
            stand(playerBet4);
        }
      } else if (currentMove == "Double") {
        switch (currentHand) {
          case 1:
            double(hand1);
            break;
          case 2:
            double(hand2);
            break;
          case 3:
            double(hand3);
            break;
          case 4:
            double(hand4);
        }
      } else if (currentMove == "Surrender") {
        switch (currentHand) {
          case 1:
            payHalf(playerBet1, "chipsBet1");
            break;
          case 2:
            payHalf(playerBet2, "chipsBet2");
            break;
          case 3:
            payHalf(playerBet3, "chipsBet3");
            break;
          case 4:
            payHalf(playerBet4, "chipsBet4");
            break;
        }
        if (currentHand == numOfHands) {
          incrumentUp();
          checkChips;
        }
      } else if (currentMove == "Split") {
        switch (numOfHands) {
          case 1:
            if (splittable(hand1) == true && currentHand == 1) {
              split(hand1, hand2, "hand1", "hand2");
            }
            break;
          case 2:
            if (splittable(hand1) == true && currentHand == 1) {
              split(hand1, hand3, "hand1", "hand3");
            }
            break;
          case 3:
            if (splittable(hand1) == true && currentHand == 1) {
              split(hand1, hand4, "hand1", "hand4");
            } else if (splittable(hand2) == true && currentHand == 2) {
              split(hand2, hand4, "hand2", "hand4");
            } else if (splittable(hand3) == true && currentHand == 3) {
              split(hand3, hand4, "hand3", "hand4");
            }
        }
      }

      document.getElementById("bestMoveScreen").style.display = "none";
    }
  });

  document.getElementById("cancleMove").addEventListener("click", function () {
    document.getElementById("bestMoveScreen").style.display = "none";
  });
}

function splittable(hand) {
  if (maxSplits + 1 <= numOfSplits) {
    return false;
  } else if (hand.length > 2) {
    return false;
  } else {
    var card1Value = hand[0][0];
    var card2Value = hand[1][0];
    switch (card1Value) {
      case "10":
      case "Jack":
      case "Queen":
      case "King":
        card1Value = 10;
        break;
      case "Ace":
        card1Value = 11;
        break;
      default:
        card1Value = parseInt(card1Value);
    }
    switch (card2Value) {
      case "10":
      case "Jack":
      case "Queen":
      case "King":
        card2Value = 10;
        break;
      case "Ace":
        card2Value = 11;
        break;
      default:
        card2Value = parseInt(card2Value);
    }
    var ballance =
      numchip05 * 0.5 +
      numchip1 * 1 +
      numchip5 * 5 +
      numchip10 * 10 +
      numchip20 * 20 +
      numchip25 * 25 +
      numchip50 * 50 +
      numchip100 * 100 +
      numchip250 * 250 +
      numchip500 * 500 +
      numchip1000 * 1000 +
      numchip2000 * 2000 +
      numchip5000 * 5000;
    var bet1Total = 0;
    var bet2Total = 0;
    var bet3Total = 0;
    var bet4Total = 0;

    switch (currentHand) {
      case 1:
        for (chip of playerBet1) {
          bet1Total += chip;
        }
        if (bet1Total > ballance) {
          return false;
        }
        break;
      case 2:
        for (chip of playerBet2) {
          bet2Total += chip;
        }
        if (bet2Total > ballance) {
          return false;
        }
        break;
      case 3:
        for (chip of playerBet3) {
          bet3Total += chip;
        }
        if (bet3Total > ballance) {
          return false;
        }
        break;
      case 4:
        for (chip of playerBet4) {
          bet4Total += chip;
        }
        if (bet4Total > ballance) {
          return false;
        }
        break;
    }

    if (reSplitAces == "false" && card1Value == 11 && numOfSplits > 1) {
      return false;
    } else {
      if (splitAces == "false") {
        if (card1Value === card2Value && card1Value != 11) {
          return true;
        }
      } else if (card1Value === card2Value) {
        return true;
      }
    }
  }
}

function removeChips(id, numChips, currentBet) {
  var src = document.getElementById(id);

  if (numChips > 0) {
    src.removeChild(src.lastChild);
    switch (id) {
      case "chips0.5":
        numchip05--;
        chipsvar(currentBet).push(0.5);
        var src = document.getElementById(chipsid(currentBet));
        var img = document.createElement("img");
        img.src = `../img/Chips/$0.5chip.png`;
        src.appendChild(img);
        break;
      case "chips1":
        numchip1--;
        chipsvar(currentBet).push(chip1);
        var src = document.getElementById(chipsid(currentBet));
        var img = document.createElement("img");
        img.src = `../img/Chips/$${chip1}chip.png`;
        src.appendChild(img);
        break;
      case "chips5":
        numchip5--;
        chipsvar(currentBet).push(5);
        var src = document.getElementById(chipsid(currentBet));
        var img = document.createElement("img");
        img.src = `../img/Chips/$5chip.png`;
        src.appendChild(img);
        break;
      case "chips10":
        numchip10--;
        chipsvar(currentBet).push(10);
        var src = document.getElementById(chipsid(currentBet));
        var img = document.createElement("img");
        img.src = `../img/Chips/$10chip.png`;
        src.appendChild(img);
        break;
      case "chips20":
        numchip20--;
        chipsvar(currentBet).push(20);
        var src = document.getElementById(chipsid(currentBet));
        var img = document.createElement("img");
        img.src = `../img/Chips/$20chip.png`;
        src.appendChild(img);
        break;
      case "chips25":
        numchip25--;
        chipsvar(currentBet).push(25);
        var src = document.getElementById(chipsid(currentBet));
        var img = document.createElement("img");
        img.src = `../img/Chips/$25chip.png`;
        src.appendChild(img);
        break;
      case "chips50":
        numchip50--;
        chipsvar(currentBet).push(50);
        var src = document.getElementById(chipsid(currentBet));
        var img = document.createElement("img");
        img.src = `../img/Chips/$50chip.png`;
        src.appendChild(img);
        break;
      case "chips100":
        numchip100--;
        chipsvar(currentBet).push(100);
        var src = document.getElementById(chipsid(currentBet));
        var img = document.createElement("img");
        img.src = `../img/Chips/$100chip.png`;
        src.appendChild(img);
        break;
      case "chips250":
        numchip250--;
        chipsvar(currentBet).push(250);
        var src = document.getElementById(chipsid(currentBet));
        var img = document.createElement("img");
        img.src = `../img/Chips/$250chip.png`;
        src.appendChild(img);
        break;
      case "chips500":
        numchip500--;
        chipsvar(currentBet).push(500);
        var src = document.getElementById(chipsid(currentBet));
        var img = document.createElement("img");
        img.src = `../img/Chips/$500chip.png`;
        src.appendChild(img);
        break;
      case "chips1000":
        numchip1000--;
        chipsvar(currentBet).push(1000);
        var src = document.getElementById(chipsid(currentBet));
        var img = document.createElement("img");
        img.src = `../img/Chips/$1000chip.png`;
        src.appendChild(img);
        break;
      case "chips2000":
        numchip2000--;
        chipsvar(currentBet).push(2000);
        var src = document.getElementById(chipsid(currentBet));
        var img = document.createElement("img");
        img.src = `../img/Chips/$2000chip.png`;
        src.appendChild(img);
        break;
      case "chips5000":
        numchip5000--;
        chipsvar(currentBet).push(5000);
        var src = document.getElementById(chipsid(currentBet));
        var img = document.createElement("img");
        img.src = `../img/Chips/$5000chip.png`;
        src.appendChild(img);
        break;
    }
  } else {
    console.log("No chips left to remove.");
  }

  document.getElementById("bet").innerHTML = ammount;
}

function chipsid(currentBet) {
  switch (currentBet) {
    case 1:
      return "chipsBet1";
    case 2:
      return "chipsBet2";
    case 3:
      return "chipsBet3";
    case 4:
      return "chipsBet4";
  }
}

function chipsvar(currentBet) {
  switch (currentBet) {
    case 1:
      return playerBet1;
    case 2:
      return playerBet2;
    case 3:
      return playerBet3;
    case 4:
      return playerBet4;
  }
}

function highlightHand() {
  document.getElementById("hand1").style = "outline: none ";
  document.getElementById("hand2").style = "outline: none";
  document.getElementById("hand3").style = "outline: none";
  document.getElementById("hand4").style = "outline: none";
  if (numOfHands > 1 && currentHand <= numOfHands) {
    switch (currentHand) {
      case 1:
        return (document.getElementById("hand1").style = "outline: solid white");
      case 2:
        if (splittable(hand2) && numOfHands <= 3) {
          document.getElementById("split").style.display = "inline-block";
        } else {
          document.getElementById("split").style.display = "none";
        }
        return (document.getElementById("hand2").style = "outline: solid white");
      case 3:
        if (splittable(hand3) && numOfHands <= 3) {
          document.getElementById("split").style.display = "inline-block";
        } else {
          document.getElementById("split").style.display = "none";
        }
        return (document.getElementById("hand3").style = "outline: solid white");
      case 4:
        return (document.getElementById("hand4").style = "outline: solid white");
    }
  }
}

function clearTable() {
  dealerHand = [];
  playerBet1 = [];
  playerBet2 = [];
  playerBet3 = [];
  playerBet4 = [];
  currentBet = 1;
  numOfHands = 1;
  ammount = 0;
  wlammount = 0;
  hand1 = [];
  hand2 = [];
  hand3 = [];
  hand4 = [];
  currentHand = 1;
  numOfSplits = 1;
  handID = "hand1";

  function clearCards(cardsToDelete) {
    let src = document.getElementById(cardsToDelete);
    let child = src.lastElementChild;
    while (child) {
      src.removeChild(child);
      child = src.lastElementChild;
    }
  }
  clearCards("dealerHand");
  clearCards("hand1");
  clearCards("hand2");
  clearCards("hand3");
  clearCards("hand4");

  document.getElementById("bet").innerHTML = "";
  document.getElementById("hit").style = "display: none;";
  document.getElementById("stand").style = "display: none;";
  document.getElementById("split").style = "display: none;";
  document.getElementById("double").style = "display: none;";
  document.getElementById("surrender").style = "display: none;";
  document.getElementById("deal").style = "display: inline-block;";
  document.getElementById("hb2").style = "display: none;";
  document.getElementById("hb3").style = "display: none;";
  document.getElementById("hb4").style = "display: none;";
}

document.getElementById("deal").addEventListener("click", function () {
  if (playerBet1.length != 0) {
    dealDealer();
    dealPlayer(hand1);
    if (calculatePlayerHand(hand1) != 21 && calculateDealerHand() == 21) {
      stand(hand1);
    }
  }
});
document.getElementById("hit").addEventListener("click", function () {
  if (currentHand == 1) {
    if (findBestMove(hand1) == "Hit") {
      hit(hand1, "hand1");
    } else {
      showBestMove("Hit");
      errors.push({
        move: "Hit",
        best: findBestMove(hand1),
        playersHand: calculatePlayerHand(hand1),
        dealersCard: dealerHand[0][0],
        soft: checkSoftHand(hand1),
        splittable: splittable(hand1),
        card: hand1[0][0],
        trueCount: trueCount,
      });
    }
  } else if (currentHand == 2) {
    if (findBestMove(hand2) == "Hit") {
      hit(hand2, "hand2");
    } else {
      showBestMove("Hit");
      errors.push({
        move: "Hit",
        best: findBestMove(hand2),
        playersHand: calculatePlayerHand(hand2),
        dealersCard: dealerHand[0][0],
        soft: checkSoftHand(hand2),
        splittable: splittable(hand2),
        card: hand2[0][0],
        trueCount: trueCount,
      });
    }
  } else if (currentHand == 3) {
    if (findBestMove(hand3) == "Hit") {
      hit(hand3, "hand3");
    } else {
      showBestMove("Hit");
      errors.push({
        move: "Hit",
        best: findBestMove(hand3),
        playersHand: calculatePlayerHand(hand3),
        dealersCard: dealerHand[0][0],
        soft: checkSoftHand(hand3),
        splittable: splittable(hand3),
        card: hand3[0][0],
        trueCount: trueCount,
      });
    }
  } else if (currentHand == 4) {
    if (findBestMove(hand4) == "Hit") {
      hit(hand4, "hand4");
    } else {
      showBestMove("Hit");
      errors.push({
        move: "Hit",
        best: findBestMove(hand4),
        playersHand: calculatePlayerHand(hand4),
        dealersCard: dealerHand[0][0],
        soft: checkSoftHand(hand4),
        splittable: splittable(hand4),
        card: hand4[0][0],
        trueCount: trueCount,
      });
    }
  }

  document.getElementById("count").innerHTML = trueCount;
});
document.getElementById("stand").addEventListener("click", function () {
  switch (currentHand) {
    case 1:
      if (findBestMove(hand1) == "Stand") {
        stand(playerBet1);
      } else {
        showBestMove("Stand");
        errors.push({
          move: "Stand",
          best: findBestMove(hand1),
          playersHand: calculatePlayerHand(hand1),
          dealersCard: dealerHand[0][0],
          soft: checkSoftHand(hand1),
          splittable: splittable(hand1),
          card: hand1[0][0],
          trueCount: trueCount,
        });
      }
      break;
    case 2:
      if (findBestMove(hand2) == "Stand") {
        stand(playerBet2);
      } else {
        showBestMove("Stand");
        errors.push({
          move: "Stand",
          best: findBestMove(hand2),
          playersHand: calculatePlayerHand(hand2),
          dealersCard: dealerHand[0][0],
          soft: checkSoftHand(hand2),
          splittable: splittable(hand2),
          card: hand2[0][0],
          trueCount: trueCount,
        });
      }
      break;
    case 3:
      if (findBestMove(hand3) == "Stand") {
        stand(playerBet3);
      } else {
        showBestMove("Stand");
        errors.push({
          move: "Stand",
          best: findBestMove(hand3),
          playersHand: calculatePlayerHand(hand3),
          dealersCard: dealerHand[0][0],
          soft: checkSoftHand(hand3),
          splittable: splittable(hand3),
          card: hand3[0][0],
          trueCount: trueCount,
        });
      }
      break;
    case 4:
      if (findBestMove(hand4) == "Stand") {
        stand(playerBet4);
      } else {
        showBestMove("Stand");
        errors.push({
          move: "Stand",
          best: findBestMove(hand4),
          playersHand: calculatePlayerHand(hand4),
          dealersCard: dealerHand[0][0],
          soft: checkSoftHand(hand4),
          splittable: splittable(hand4),
          card: hand4[0][0],
          trueCount: trueCount,
        });
      }
  }
});

function displayWLScreen() {
  if ([ace, 10, jack, queen, king].includes(dealerHand[1][0])) {
    currentCount--;
  } else if ([2, 3, 4, 5, 6].includes(dealerHand[1][0])) {
    currentCount++;
  }
  for (i = 0; i < numOfHands; i++) {}
  if (wlammount == 0) {
    document.getElementById("WLScreen").style.color = "white";
    document.getElementById("WLText").innerHTML = "Even";
    document.getElementById("WLAmount").innerHTML = "+-$0";
  } else if (wlammount > 0) {
    document.getElementById("WLScreen").style.color = "green";
    document.getElementById("WLText").innerHTML = "win";
    document.getElementById("WLAmount").innerHTML = `+$${wlammount}`;
  } else {
    document.getElementById("WLScreen").style.color = "red";
    document.getElementById("WLText").innerHTML = "Loss";
    document.getElementById("WLAmount").innerHTML = `-$${Math.abs(wlammount)}`;
  }
  document.getElementById("WLScreen").style.display = "block";
}

document.getElementById("WLScreen").addEventListener("click", function () {
  document.getElementById("WLScreen").style.display = "none";
  clearTable();
});

document.getElementById("double").addEventListener("click", function () {
  switch (currentHand) {
    case 1:
      if (findBestMove(hand1) == "Double") {
        double(hand1);
      } else {
        showBestMove("Double");
        errors.push({
          move: "Double",
          best: findBestMove(hand1),
          playersHand: calculatePlayerHand(hand1),
          dealersCard: dealerHand[0][0],
          soft: checkSoftHand(hand1),
          splittable: splittable(hand1),
          card: hand1[0][0],
          trueCount: trueCount,
        });
      }
      break;
    case 2:
      if (findBestMove(hand2) == "Double") {
        double(hand2);
      } else {
        showBestMove("Double");
        errors.push({
          move: "Double",
          best: findBestMove(hand2),
          playersHand: calculatePlayerHand(hand2),
          dealersCard: dealerHand[0][0],
          soft: checkSoftHand(hand2),
          splittable: splittable(hand2),
          card: hand2[0][0],
          trueCount: trueCount,
        });
      }
      break;
    case 3:
      if (findBestMove(hand3) == "Double") {
        double(hand3);
      } else {
        showBestMove("Double");
        errors.push({
          move: "Double",
          best: findBestMove(hand3),
          playersHand: calculatePlayerHand(hand3),
          dealersCard: dealerHand[0][0],
          soft: checkSoftHand(hand3),
          splittable: splittable(hand3),
          card: hand3[0][0],
          trueCount: trueCount,
        });
      }
      break;
    case 4:
      if (findBestMove(hand4) == "Double") {
        double(hand4);
      } else {
        showBestMove("Double");
        errors.push({
          move: "Double",
          best: findBestMove(hand4),
          playersHand: calculatePlayerHand(hand4),
          dealersCard: dealerHand[0][0],
          soft: checkSoftHand(hand4),
          splittable: splittable(hand4),
          card: hand4[0][0],
          trueCount: trueCount,
        });
      }
      break;
  }
});

document.getElementById("split").addEventListener("click", function () {
  document.getElementById("split").style = "display: none;";
  switch (numOfHands) {
    case 1:
      if (splittable(hand1) == true && currentHand == 1) {
        if (findBestMove(hand1) == "Split") {
          split(hand1, hand2, "hand1", "hand2");
        } else {
          showBestMove("Split");
          errors.push({
            move: "Split",
            best: findBestMove(hand1),
            playersHand: calculatePlayerHand(hand1),
            dealersCard: dealerHand[0][0],
            splittable: true,
            card: hand1[0][0],
            trueCount: trueCount,
          });
        }
      }
      break;
    case 2:
      if (splittable(hand1) == true && currentHand == 1) {
        if (findBestMove(hand1) == "Split") {
          split(hand1, hand3, "hand1", "hand3");
        } else {
          showBestMove("Split");
          errors.push({
            move: "Split",
            best: findBestMove(hand1),
            playersHand: calculatePlayerHand(hand1),
            dealersCard: dealerHand[0][0],
            splittable: true,
            card: hand1[0][0],
            trueCount: trueCount,
          });
        }
      } else if (splittable(hand2) == true && currentHand == 2) {
        if (findBestMove(hand2) == "Split") {
          split(hand2, hand3, "hand2", "hand3");
        } else {
          showBestMove("Split");
          errors.push({
            move: "Split",
            best: findBestMove(hand2),
            playersHand: calculatePlayerHand(hand2),
            dealersCard: dealerHand[0][0],
            splittable: true,
            card: hand2[0][0],
            trueCount: trueCount,
          });
        }
      }
      break;
    case 3:
      if (splittable(hand1) == true && currentHand == 1) {
        if (findBestMove(hand1) == "Split") {
          split(hand1, hand4, "hand1", "hand4");
        } else {
          showBestMove("Split");
          errors.push({
            move: "Split",
            best: findBestMove(hand1),
            playersHand: calculatePlayerHand(hand1),
            dealersCard: dealerHand[0][0],
            splittable: true,
            card: hand1[0][0],
            trueCount: trueCount,
          });
        }
      } else if (splittable(hand2) == true && currentHand == 2) {
        if (findBestMove(hand1) == "Split") {
          split(hand2, hand4, "hand2", "hand4");
        } else {
          showBestMove("Split");
          errors.push({
            move: "Split",
            best: findBestMove(hand2),
            playersHand: calculatePlayerHand(hand2),
            dealersCard: dealerHand[0][0],
            splittable: true,
            card: hand2[0][0],
            trueCount: trueCount,
          });
        }
      } else if (splittable(hand3) == true && currentHand == 3) {
        if (findBestMove(hand1) == "Split") {
          split(hand3, hand4, "hand3", "hand4");
        } else {
          showBestMove("Split");
          errors.push({
            move: "Split",
            best: findBestMove(hand3),
            playersHand: calculatePlayerHand(hand3),
            dealersCard: dealerHand[0][0],
            splittable: true,
            card: hand3[0][0],
            trueCount: trueCount,
          });
        }
      }
  }
});

document.getElementById("surrender").addEventListener("click", function () {
  switch (currentHand) {
    case 1:
      if (findBestMove(hand1) == "Surrender") {
        payHalf(playerBet1, "chipsBet1");
      } else {
        showBestMove("Surrender");
        errors.push({
          move: "Surrender",
          best: findBestMove(hand1),
          playersHand: calculatePlayerHand(hand1),
          dealersCard: dealerHand[0][0],
          soft: checkSoftHand(hand1),
          splittable: splittable(hand1),
          card: hand1[0][0],
          trueCount: trueCount,
        });
      }
      break;
    case 2:
      if (findBestMove(hand2) == "Surrender") {
        payHalf(playerBet2, "chipsBet2");
      } else {
        showBestMove("Surrender");
        errors.push({
          move: "Surrender",
          best: findBestMove(hand2),
          playersHand: calculatePlayerHand(hand2),
          dealersCard: dealerHand[0][0],
          soft: checkSoftHand(hand2),
          splittable: splittable(hand2),
          card: hand2[0][0],
          trueCount: trueCount,
        });
      }
      break;
    case 3:
      if (findBestMove(hand3) == "Surrender") {
        payHalf(playerBet3, "chipsBet3");
      } else {
        showBestMove("Surrender");
        errors.push({
          move: "Surrender",
          best: findBestMove(hand3),
          playersHand: calculatePlayerHand(hand3),
          dealersCard: dealerHand[0][0],
          soft: checkSoftHand(hand3),
          splittable: splittable(hand3),
          card: hand3[0][0],
          trueCount: trueCount,
        });
      }
      break;
    case 4:
      if (findBestMove(hand4) == "Surrender") {
        payHalf(playerBet4, "chipsBet4");
      } else {
        showBestMove("Surrender");
        errors.push({
          move: "Surrender",
          best: findBestMove(hand4),
          playersHand: calculatePlayerHand(hand4),
          dealersCard: dealerHand[0][0],
          soft: checkSoftHand(hand4),
          splittable: splittable(hand4),
          card: hand4[0][0],
          trueCount: trueCount,
        });
      }
      break;
  }
  if (currentHand == numOfHands) {
    incrumentUp();
    checkChips;
  }
});

document.getElementById("chips0.5").addEventListener("click", function () {
  if (hand1.length == 0) {
    ammount += 0.5;
    removeChips("chips0.5", numchip05, currentHand);
  }
  checkChips();
});
document.getElementById("chips1").addEventListener("click", function () {
  if (hand1.length == 0) {
    ammount += chip1;
    removeChips("chips1", numchip1, currentHand);
  }
  checkChips();
});
document.getElementById("chips5").addEventListener("click", function () {
  if (hand1.length == 0) {
    ammount += 5;
    removeChips("chips5", numchip5, currentHand);
  }
  checkChips();
});
document.getElementById("chips10").addEventListener("click", function () {
  if (hand1.length == 0) {
    ammount += 10;
    removeChips("chips10", numchip10, currentHand);
  }
  checkChips();
});
document.getElementById("chips20").addEventListener("click", function () {
  if (hand1.length == 0) {
    ammount += 20;
    removeChips("chips20", numchip20, currentHand);
  }
  checkChips();
});
document.getElementById("chips25").addEventListener("click", function () {
  if (hand1.length == 0) {
    ammount += 25;
    removeChips("chips25", numchip25, currentHand);
  }
  checkChips();
});
document.getElementById("chips50").addEventListener("click", function () {
  if (hand1.length == 0) {
    ammount += 50;
    removeChips("chips50", numchip50, currentHand);
  }
  checkChips();
});
document.getElementById("chips100").addEventListener("click", function () {
  if (hand1.length == 0) {
    ammount += 100;
    removeChips("chips100", numchip100, currentHand);
  }
  checkChips();
});
document.getElementById("chips250").addEventListener("click", function () {
  if (hand1.length == 0) {
    ammount += 250;
    removeChips("chips250", numchip250, currentHand);
  }
  checkChips();
});
document.getElementById("chips500").addEventListener("click", function () {
  if (hand1.length == 0) {
    ammount += 500;
    removeChips("chips500", numchip500, currentHand);
  }
  checkChips();
});
document.getElementById("chips1000").addEventListener("click", function () {
  if (hand1.length == 0) {
    ammount += 1000;
    removeChips("chips1000", numchip1000, currentHand);
  }
  checkChips();
});
document.getElementById("chips2000").addEventListener("click", function () {
  if (hand1.length == 0) {
    ammount += 2000;
    removeChips("chips2000", numchip2000, currentHand);
  }
  checkChips();
});
document.getElementById("chips5000").addEventListener("click", function () {
  if (hand1.length == 0) {
    ammount += 5000;
    removeChips("chips5000", numchip5000, currentHand);
  }
  checkChips();
});

document.getElementById("endGame").addEventListener("click", function () {
  if (errors.length > 0) {
    for (error of errors) {
      var wrongMove = "";
      var correctMove = "";
      if (error.move == "Stand") {
        wrongMove = "stood";
      } else if (error.move == "Double") {
        wrongMove = "doubled";
      } else if (error.move == "Surrender") {
        wrongMove = "surrenderd";
      } else {
        wrongMove = error.move.toLowerCase();
      }

      if (error.best == "Hit") {
        correctMove = "hitting";
      } else if (error.best == "Stand") {
        correctMove = "standing";
      } else if (error.best == "Split") {
        correctMove = "spliting";
      } else if (error.best == "Double") {
        correctMove = "doubling";
      } else if (error.best == "Surrender") {
        correctMove = "surrendering";
      }

      const newParagraph = document.createElement("p");

      if (error.splittable == true) {
        var paragraphContent = document.createTextNode(
          `you ${wrongMove} on a pair of ${error.card.toString().toLowerCase()}s vs dealers ${error.dealersCard} instead of ${correctMove}on a count of ${error.trueCount}`
        );
      } else if (error.soft == false) {
        var paragraphContent = document.createTextNode(`you ${wrongMove} on a ${error.playersHand} vs dealers ${error.dealersCard} instead of ${correctMove}on a count of ${error.trueCount}`);
      } else {
        var paragraphContent = document.createTextNode(`you ${wrongMove} on a soft ${error.playersHand} vs dealers ${error.dealersCard} instead of ${correctMove}on a count of ${error.trueCount}`);
      }
      newParagraph.appendChild(paragraphContent);
      const errorsDiv = document.getElementById("errors");
      errorsDiv.appendChild(newParagraph);
    }
  } else {
    document.getElementById("errors").innerHTML = "No Errors";
  }
  document.getElementById("endGameScreen").style.display = "block";
  if (wlTotal == 0) {
    document.getElementById("wlTotal").style.color = "white";
    document.getElementById("wlTotal").innerHTML = "+-$0";
  } else if (wlTotal > 0) {
    document.getElementById("wlTotal").style.color = "green";
    document.getElementById("wlTotal").innerHTML = `Total Profit: +$${wlTotal}`;
  } else {
    document.getElementById("wlTotal").style.color = "red";
    document.getElementById("wlTotal").innerHTML = `Total Losses: -$${Math.abs(wlTotal)}`;
  }
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.getElementById("span").addEventListener("click", function () {
  openNav();
});

function openbasicStrategyCard() {
  if (document.getElementById("basicStrategyCardTable").style.fontSize == "19px") {
    document.getElementById("basicStrategyCardTable").style = "font-size: 1px;width: 50px; height: 168px";
    document.getElementById("countInput").style = "display: none;";
    document.getElementById("endGameDiv").style = "right: 50px;";
  } else {
    document.getElementById("basicStrategyCardTable").style = "font-size: 19px;width: auto;height: 96% ";
    document.getElementById("countInput").style = "display: inline-block;";
    document.getElementById("endGameDiv").style = "right: 350px;";
  }
}

if (localStorage.getItem("strategyCard") == "true") {
  document.getElementById("basicStrategyCardTable").addEventListener("click", function () {
    if (!event.target.closest("#countInput")) {
      openbasicStrategyCard();
    }
  });
} else {
  document.getElementById("basicStrategyCardTable").style.display = "none";
}
