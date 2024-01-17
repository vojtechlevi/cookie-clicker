// STATS
let CPS = 0;
let clickCount = 0;
let cookieCount = 0;

// STORE
let autoClickerCount = 0;
let autoClickerCost = 10;
let autoClickerRate = 1;

function clickCookie() {
  cookieCount++;
  clickCount++;
  updateCookieCount();
  updateClickCount();
}

function buyAutoClicker() {
  if (cookieCount >= autoClickerCost) {
    cookieCount -= autoClickerCost;
    autoClickerCount++;
    CPS += autoClickerRate;
    autoClickerCost = Math.ceil(autoClickerCost * 1.2); // Increase cost for the next auto-clicker
    updateCookieCount();
    updateAutoClickerCount();
    updateAutoClickerCost();
    startAutoClickers();
    updateCPS();
  } else {
    alert("Not enough cookies to buy an auto-clicker!");
  }
}

let autoClickerInterval; // Define a variable to store the interval ID
function startAutoClickers() {
  // Check if the interval is already running
  if (!autoClickerInterval) {
    autoClickerInterval = setInterval(function () {
      cookieCount += autoClickerCount * autoClickerRate;
      updateCookieCount();
    }, 1000);
  }
}

let grandmaCount = 0;
let grandmaCost = 50;
let grandmaRate = 5; // Cookies per second per Grandma

function buyGrandma() {
  if (cookieCount >= grandmaCost) {
    cookieCount -= grandmaCost;
    grandmaCount++;
    CPS += grandmaRate;
    grandmaCost = Math.ceil(grandmaCost * 1.2);
    updateCookieCount();
    updateGrandmaCount();
    updateGrandmaCost();
    startGrandmas();
    updateCPS();
  } else {
    alert("Not enough cookies to buy a Grandma!");
  }
}

let grandmaInterval;

function startGrandmas() {
  if (!grandmaInterval) {
    grandmaInterval = setInterval(function () {
      cookieCount += grandmaCount * grandmaRate;
      updateCookieCount();
    }, 1000);
  }
}

// STATS
function updateClickCount() {
  document.getElementById("clicksCount").innerText = clickCount;
}

function updateCPS() {
  document.getElementById("cpsCount").innerText = parseFloat(CPS).toFixed(1);
}

function updateCookieCount() {
  document.getElementById("cookieCount").innerText =
    parseFloat(cookieCount).toFixed(0);

  let pricetag = document.querySelectorAll(".pricetag");

  pricetag.forEach((element) => {
    if (cookieCount >= element.innerText) {
      element.style.color = "green";
    } else {
      element.style.color = "red";
    }
  });
}

// STORE

function updateAutoClickerCount() {
  document.getElementById("autoClickerCount").innerText = autoClickerCount;
}

function updateAutoClickerCost() {
  document.getElementById("autoClickerCost").innerText = autoClickerCost;
}

function updateGrandmaCount() {
  document.getElementById("grandmaCount").innerText = grandmaCount;
}

function updateGrandmaCost() {
  document.getElementById("grandmaCost").innerText = grandmaCost;
}
// Initialize the game
updateCookieCount();
updateAutoClickerCount();
updateAutoClickerCost();
updateGrandmaCount();
updateGrandmaCost();
