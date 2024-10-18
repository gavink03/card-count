var curentCount = 0;
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
  /*  [ace, "clubs"],
  [2, "clubs"],
  [3, "clubs"],
  [4, "clubs"],
  [5, "clubs"],
  [6, "clubs"],
  [7, "clubs"],
  [8, "clubs"],
  [9, "clubs"],*/
  [10, "clubs"],
  [jack, "clubs"],
  [queen, "clubs"],
  [king, "clubs"],
  /*  [ace, "diamonds"],
  [2, "diamonds"],
  [3, "diamonds"],
  [4, "diamonds"],
  [5, "diamonds"],
  [6, "diamonds"],
  [7, "diamonds"],
  [8, "diamonds"],
  [9, "diamonds"],*/
  [10, "diamonds"],
  [jack, "diamonds"],
  [queen, "diamonds"],
  [king, "diamonds"],
  /*  [ace, "hearts"],
    [2, "hearts"],
  [3, "hearts"],
  [4, "hearts"],
  [5, "hearts"],
  [6, "hearts"],
  [7, "hearts"],
  [8, "hearts"],
  [9, "hearts"],*/
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
var numOfHands = 1;
var hand1 = [];
var hand2 = [];
var hand3 = [];
var hand4 = [];
var currentHand = 1;
var numOfSplits = 1;
var handID = "hand1";

const $5chip = 5;
const $25chip = 25;
const $100chip = 100;
const $500chip = 500;

var num$5chip = 20;
var num$25chip = 12;
var num$100chip = 6;
var num$500chip = 2;

var win = Boolean;
var tie = Boolean;

var decks = document.getElementById(decks);
all = cards;

function count() {
  var chosenCard = generate();
  if ([ace, 10, jack, queen, king].includes(chosenCard[0])) {
    curentCount--;
    return chosenCard;
  } else if ([2, 3, 4, 5, 6].includes(chosenCard[0])) {
    curentCount++;
    return chosenCard;
  } else {
    return chosenCard;
  }
}

function generate() {
  var randomIndex = Math.floor(Math.random() * all.length);
  var randomCard = all.splice(randomIndex, 1)[0];
  return randomCard;
}

function dealDealer() {
  const dealerDelt = [count(), count()];
  dealerHand = dealerDelt;
  var img = document.createElement("img");
  img.src = "Cards/" + dealerHand[0] + ".png";
  var src = document.getElementById("dealerHand");
  src.appendChild(img);
  var img2 = document.createElement("img");
  img2.src = "Cards/" + dealerHand[1] + ".png";
  src.appendChild(img2);
  return dealerDelt;
}

function dealPlayer() {
  const playerDelt = [count(), count()];
  hand1 = playerDelt;
  var img = document.createElement("img");
  img.src = "Cards/" + playerDelt[0] + ".png";
  var src = document.getElementById("hand1");
  src.appendChild(img);
  var img2 = document.createElement("img");
  img2.src = "Cards/" + playerDelt[1] + ".png";
  src.appendChild(img2);
  return playerDelt;
}

function hit(hand, handID) {
  let hitCard = count();
  hand.push(hitCard);
  var img = document.createElement("img");
  img.src = "Cards/" + hitCard + ".png";
  var src = document.getElementById(handID);
  src.appendChild(img);

  return hitCard;
}

function calculatePlayerHand(hand) {
  let total = 0;
  let numAces = 0;

  for (let card of hand) {
    if (card[0] === ace) {
      numAces++;
    } else if (["10", jack, queen, king].includes(card[0])) {
      total += 10;
    } else {
      total += parseInt(card[0]);
    }
  }

  while (numAces > 0 && total + 11 > 21) {
    total += 1;
    numAces--;
  }

  return total + numAces * 11;
}

function calculateDealerHand() {
  let total = 0;
  let numAces = 0;

  for (let card of dealerHand) {
    if (card[0] === ace) {
      numAces++;
    } else if (["10", jack, queen, king].includes(card[0])) {
      total += 10;
    } else {
      total += parseInt(card[0]);
    }
  }

  while (numAces > 0 && total + 11 > 21) {
    total += 1;
    numAces--;
  }

  return total + numAces * 11;
}

function stand(hand) {
  while (
    calculateDealerHand() < 17 &&
    calculateDealerHand() <= calculatePlayerHand(hand) &&
    calculatePlayerHand(hand) < 22
  ) {
    var dealerNew = count();
    dealerHand.push(dealerNew);
    var img = document.createElement("img");
    img.src = "Cards/" + dealerNew + ".png";
    var src = document.getElementById("dealerHand");
    src.appendChild(img);
  }

  if (
    calculateDealerHand() > calculatePlayerHand(hand) &&
    calculateDealerHand() <= 21 &&
    calculatePlayerHand(hand) <= 21
  ) {
    win = false;
    tie = false;
  } else if (
    calculateDealerHand() < calculatePlayerHand(hand) &&
    calculateDealerHand() <= 21 &&
    calculatePlayerHand(hand) <= 21
  ) {
    win = true;
    tie = false;
  } else if (calculateDealerHand() > 21 && calculatePlayerHand(hand) <= 21) {
    win = true;
    tie = false;
  } else if (calculatePlayerHand(hand) > 21 && calculateDealerHand() <= 21) {
    win = false;
    tie = false;
  } else if (calculateDealerHand() == calculatePlayerHand(hand)) {
    tie = true;
  }
  payOut();
  currentHand++;
  hilightHand();
  return;
}

function chipCount() {
  var src = document.getElementById("");
  for (let i = 0; i < num$5chip; i++) {
    var src = document.getElementById("5chips");
    var img = document.createElement("img");
    img.src = "$5chip.jpeg";
    src.appendChild(img);
  }
  for (let i = 0; i < num$25chip; i++) {
    var src = document.getElementById("25chips");
    var img = document.createElement("img");
    img.src = "$25chip.jpeg";
    src.appendChild(img);
  }
  for (let i = 0; i < num$100chip; i++) {
    var src = document.getElementById("100chips");
    var img = document.createElement("img");
    img.src = "$100chip.jpeg";
    src.appendChild(img);
  }
  for (let i = 0; i < num$500chip; i++) {
    var src = document.getElementById("500chips");
    var img = document.createElement("img");
    img.src = "$500chip.jpeg";
    src.appendChild(img);
  }
}

function payOut() {
  if (tie == true) {
    for (let i = 0; i < chipsvar(currentHand).length; i++) {
      switch (chipsvar(currentHand)[i]) {
        case 5:
          var src = document.getElementById("5chips");
          var img = document.createElement("img");
          img.src = "$5chip.jpeg";
          src.append(img);
          num$5chip++;
          break;
        case 25:
          var src = document.getElementById("25chips");
          var img = document.createElement("img");
          img.src = "$25chip.jpeg";
          src.append(img);
          num$25chip++;
          break;
        case 100:
          var src = document.getElementById("100chips");
          var img = document.createElement("img");
          img.src = "$100chip.jpeg";
          src.append(img);
          num$100chip++;
          break;
        case 500:
          var src = document.getElementById("500chips");
          var img = document.createElement("img");
          img.src = "$500chip.jpeg";
          src.append(img);
          num$500chip++;
          break;
        default:
          console.log("Invalid ID.");
          return;
      }
    }
    for (let i = 0; i < chipsvar(currentHand).length; i++) {
      var src = document.getElementById(chipsid(currentHand));
      src.removeChild(src.lastChild);
    }
    console.log("tie");
  } else if (win == true) {
    for (let i = 0; i < chipsvar(currentHand).length; i++) {
      switch (chipsvar(currentHand)[i]) {
        case 5:
          var src = document.getElementById("5chips");
          var img = document.createElement("img");
          img.src = "$5chip.jpeg";
          src.append(img);
          var src = document.getElementById("5chips");
          var img = document.createElement("img");
          img.src = "$5chip.jpeg";
          src.append(img);
          num$5chip += 2;
          break;
        case 25:
          var src = document.getElementById("25chips");
          var img = document.createElement("img");
          img.src = "$25chip.jpeg";
          src.append(img);
          var src = document.getElementById("25chips");
          var img = document.createElement("img");
          img.src = "$25chip.jpeg";
          src.append(img);
          num$25chip += 2;
          break;
        case 100:
          var src = document.getElementById("100chips");
          var img = document.createElement("img");
          img.src = "$100chip.jpeg";
          src.append(img);
          var src = document.getElementById("100chips");
          var img = document.createElement("img");
          img.src = "$100chip.jpeg";
          src.append(img);
          num$100chip += 2;
          break;
        case 500:
          var src = document.getElementById("500chips");
          var img = document.createElement("img");
          img.src = "$500chip.jpeg";
          src.append(img);
          var src = document.getElementById("500chips");
          var img = document.createElement("img");
          img.src = "$500chip.jpeg";
          src.append(img);
          num$500chip += 2;
          break;
        default:
          console.log("Invalid ID.");
          return;
      }
    }
    for (let i = 0; i < chipsvar(currentHand).length; i++) {
      var src = document.getElementById(chipsid(currentHand));
      src.removeChild(src.lastChild);
    }
    console.log("win");
  } else if (win == false) {
    for (let i = 0; i < chipsvar(currentHand).length; i++) {
      var src = document.getElementById(chipsid(currentHand));
      src.removeChild(src.lastChild);
    }
    console.log("loss");
  } else {
    console.log("error");
  }
}

function double() {
  for (i = 0; i < chipsvar(currentHand).length; i++) {
    var chipVariableName = "num$" + chipsvar(currentHand)[i] + "chip";
    if (window[chipVariableName] > 0) {
      switch (chipsvar(currentHand)[i]) {
        case 5:
          var src = document.getElementById(chipsid(currentHand));
          var img = document.createElement("img");
          img.src = "$5chip.jpeg";
          src.append(img);
          num$5chip--;
          var src = document.getElementById("5chips");
          src.removeChild(src.lastChild);
          break;
        case 25:
          var src = document.getElementById(chipsid(currentHand));
          var img = document.createElement("img");
          img.src = "$25chip.jpeg";
          src.append(img);
          num$25chip--;
          var src = document.getElementById("25chips");
          src.removeChild(src.lastChild);
          break;
        case 100:
          var src = document.getElementById(chipsid(currentHand));
          var img = document.createElement("img");
          img.src = "$100chip.jpeg";
          src.append(img);
          num$100chip--;
          var src = document.getElementById("100chips");
          src.removeChild(src.lastChild);
          break;
        case 500:
          var src = document.getElementById(chipsid(currentHand));
          var img = document.createElement("img");
          img.src = "$500chip.jpeg";
          src.append(img);
          num$500chip--;
          var src = document.getElementById("500chips");
          src.removeChild(src.lastChild);
          break;
      }
    }
  }
  if (chipsvar(currentHand) == playerBet1) {
    playerBet1 = [...playerBet1, ...playerBet1];
  } else if (chipsvar(currentHand) == playerBet2) {
    playerBet2 = [...playerBet2, ...playerBet2];
  } else if (chipsvar(currentHand) == playerBet3) {
    playerBet3 = [...playerBet3, ...playerBet3];
  } else if (chipsvar(currentHand) == playerBet4) {
    playerBet4 = [...playerBet4, ...playerBet4];
  }

  console.log(chipsvar(currentHand));
  switch (currentHand) {
    case 1:
      hit(hand1, "hand1");
      stand(hand1);
      console.log("Player total:", calculatePlayerHand(hand1));
      break;
    case 2:
      hit(hand2, "hand2");
      stand(hand2);
      console.log("Player total:", calculatePlayerHand(hand2));
      break;
    case 3:
      hit(hand3, "hand3");
      stand(hand3);
      console.log("Player total:", calculatePlayerHand(hand3));
      break;
    case 4:
      hit(hand4, "hand4");
      stand(hand4);
      console.log("Player total:", calculatePlayerHand(hand4));
  }
  console.log("Dealer total:", calculateDealerHand());
}

function split(hand, shand, handID, handID2) {
  //spliting hand 2 then standing hand 2 doesnt work

  var src = document.getElementById(handID2);
  var img = document.createElement("img");
  img.src = "Cards/" + hand[1] + ".png";
  src.appendChild(img);

  var src = document.getElementById(handID);
  src.removeChild(src.lastChild);

  shand = [hand[1]];
  hand = [hand[0]];

  hand.push(count());
  shand.push(count());

  var img = document.createElement("img");
  img.src = "Cards/" + hand[1] + ".png";
  var src = document.getElementById(handID);
  src.appendChild(img);

  var img = document.createElement("img");
  img.src = "Cards/" + shand[1] + ".png";
  var src = document.getElementById(handID2);
  src.appendChild(img);

  if (handID == "hand1" && numOfSplits == 1) {
    hand1 = hand;
    hand2 = shand;
  } else if (handID == "hand1" && numOfSplits == 2) {
    hand1 = hand;
    hand3 = shand;
  } else if (handID == "hand1" && numOfSplits == 3) {
    hand1 = hand;
    hand4 = shand;
  }
  if (handID == "hand2" && numOfSplits == 2) {
    hand2 = hand;
    hand3 = shand;
  } else if (handID == "hand2" && numOfSplits == 3) {
    hand2 = hand;
    hand4 = shand;
  }
  if (handID == "hand3" && numOfSplits == 3) {
    hand3 = hand;
    hand4 = shand;
  }

  numOfHands++;
  numOfSplits++;

  for (i = 0; i < playerBet1; i++) {
    switch (playerBet1[i]) {
      case 5:
        removeChips("5chips", num$5chip, numOfHands);
    }
  }
  hilightHand();
}

function splitable(hand) {
  var card1Value = hand[0][0];
  var card2Value = hand[1][0];
  switch (card1Value) {
    case "10":
    case "Jack":
    case "Queen":
    case "King":
      card1Value = 10;
    default:
      card1Value = parseInt(card1Value);
  }
  switch (card2Value) {
    case "10":
    case "Jack":
    case "Queen":
    case "King":
      card2Value = 10;
    default:
      card2Value = parseInt(card2Value);
  }
  if (card1Value === card2Value) {
    return true;
  }
}

chipCount();

var ammount = 0;
function removeChips(id, numChips, currentHand) {
  var src = document.getElementById(id);

  if (numChips > 0) {
    src.removeChild(src.lastChild);
    switch (id) {
      case "5chips":
        num$5chip--;
        chipsvar(currentHand).push(5);
        var src = document.getElementById(chipsid(currentHand));
        var img = document.createElement("img");
        img.src = "$5chip.jpeg";
        src.appendChild(img);
        break;
      case "25chips":
        num$25chip--;
        chipsvar(currentHand).push(25);
        var src = document.getElementById(chipsid(currentHand));
        var img = document.createElement("img");
        img.src = "$25chip.jpeg";
        src.appendChild(img);
        break;
      case "100chips":
        num$100chip--;
        chipsvar(currentHand).push(100);
        var src = document.getElementById(chipsid(currentHand));
        var img = document.createElement("img");
        img.src = "$100chip.jpeg";
        src.appendChild(img);
        break;
      case "500chips":
        num$500chip--;
        chipsvar(currentHand).push(500);
        var src = document.getElementById(chipsid(currentHand));
        var img = document.createElement("img");
        img.src = "$500chip.jpeg";
        src.appendChild(img);
        break;
    }
  } else {
    console.log("No chips left to remove.");
  }
  ammount += playerBet1[playerBet1.length - 1];
  console.log(ammount);
  console.log(playerBet1);

  document.getElementById("bet").innerHTML = ammount;
}

function chipsid(currentHand) {
  switch (currentHand) {
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

function chipsvar(currentHand) {
  switch (currentHand) {
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

function hilightHand() {
  document.getElementById("hand1").style = "outline: none ";
  document.getElementById("hand2").style = "outline: none";
  document.getElementById("hand3").style = "outline: none";
  document.getElementById("hand4").style = "outline: none";
  if (numOfHands > 1) {
    switch (currentHand) {
      case 1:
        return (document.getElementById("hand1").style =
          "outline: solid white");
      case 2:
        return (document.getElementById("hand2").style =
          "outline: solid white");
      case 3:
        return (document.getElementById("hand3").style =
          "outline: solid white");
      case 4:
        return (document.getElementById("hand4").style =
          "outline: solid white");
    }
  }
}

function clearTable() {
  dealerHand = [];
  playerBet1 = [];
  playerBet2 = [];
  playerBet3 = [];
  playerBet4 = [];
  numOfHands = 1;
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
}

document.getElementById("decks").addEventListener("input", function () {
  decks = parseInt(this.value);
  all = Array.from({ length: decks }, () => cards).flat();
});
document.getElementById("deal").addEventListener("click", function () {
  if (playerBet1.length != 0) {
    dealDealer();
    dealPlayer(hand1);
  }
});
document.getElementById("hit").addEventListener("click", function () {
  if (currentHand == 1) {
    hit(hand1, "hand1");
  } else if (currentHand == 2) {
    hit(hand2, "hand2");
  } else if (currentHand == 3) {
    hit(hand3, "hand3");
  } else if (currentHand == 4) {
    hit(hand4, "hand4");
  }

  document.getElementById("count").innerHTML = curentCount;
});
document.getElementById("stand").addEventListener("click", function () {
  switch (currentHand) {
    case 1:
      stand(hand1);
      console.log("Player total:", calculatePlayerHand(hand1));
      break;
    case 2:
      stand(hand2);
      console.log("Player total:", calculatePlayerHand(hand2));
      break;
    case 3:
      stand(hand3);
      console.log("Player total:", calculatePlayerHand(hand3));
      break;
    case 4:
      stand(hand4);
      console.log("Player total:", calculatePlayerHand(hand4));
  }
  console.log("Dealer total:", calculateDealerHand());
});
document.getElementById("hand1").addEventListener("click", function () {
  handID = "hand1";
});
document.getElementById("hand2").addEventListener("click", function () {
  handID = "hand2";
});
document.getElementById("hand3").addEventListener("click", function () {
  handID = "hand3";
});
document.getElementById("hand4").addEventListener("click", function () {
  handID = "hand4";
});
document.getElementById("double").addEventListener("click", function () {
  double();
});
document.getElementById("split").addEventListener("click", function () {
  switch (numOfHands) {
    case 1:
      if (splitable(hand1) == true && currentHand == 1) {
        split(hand1, hand2, "hand1", "hand2");
      }
      break;
    case 2:
      if (splitable(hand1) == true && currentHand == 1) {
        split(hand1, hand3, "hand1", "hand3");
      } else if (splitable(hand2) == true && currentHand == 2) {
        split(hand2, hand3, "hand2", "hand3");
      }
      break;
    case 3:
      if (splitable(hand1) == true && currentHand == 1) {
        split(hand1, hand4, "hand1", "hand4");
      } else if (splitable(hand2) == true && currentHand == 2) {
        split(hand2, hand4, "hand2", "hand4");
      } else if (splitable(hand3) == true && currentHand == 3) {
        split(hand3, hand4, "hand3", "hand4");
      }
  }
});
document.getElementById("clear").addEventListener("click", function () {
  clearTable();
});

document.getElementById("5chips").addEventListener("click", function () {
  if (hand1.length == 0) {
    removeChips("5chips", num$5chip, currentHand);
  }
});
document.getElementById("25chips").addEventListener("click", function () {
  if (hand1.length == 0) {
    removeChips("25chips", num$25chip, currentHand);
  }
});
document.getElementById("100chips").addEventListener("click", function () {
  if (hand1.length == 0) {
    removeChips("100chips", num$100chip, currentHand);
  }
});
document.getElementById("500chips").addEventListener("click", function () {
  if (hand1.length == 0) {
    removeChips("500chips", num$500chip, currentHand);
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
