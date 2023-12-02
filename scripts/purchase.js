// select inputs
let sub = document.getElementById("sub");
let numInput = document.getElementById("num");
let cardIcon = document.getElementById("cardIcon");
let cvv = document.getElementById("cvv");
let successDiv = document.getElementById("success");

// obj with icons locations
let imagesDict = {
  Visa: "../assets/visaIcon.png",
  MasterCard: "../assets/mastercardIcon.png",
};

// hide divs
successDiv.style.display = "none";
cardIcon.style.display = "none";

function luhn(input) {
  /* check cridet card number if it's valid or not
    @input: cridet card number
    Return: true if valid false otherwise
    */

  // replace not allowed chars and put numbeer into array
  let notAllowed = "-";
  let cridetNumber = input
    .split("")
    .filter((num) => notAllowed.indexOf(num) < 0);

  console.log(cridetNumber);

  let len = cridetNumber.length;

  // reverse array
  let revCridet = cridetNumber.reverse();

  // get the first nums and other nums
  let firstNums = [];
  let otherNums = [];

  for (let i = 0; i < revCridet.length; i++) {
    if (i % 2 == 0) firstNums.push(Number(revCridet[i]));
    else
      otherNums.push(
        Math.floor((Number(revCridet[i]) * 2) / 10) +
          Number((revCridet[i] * 2) % 10)
      );
  }

  // get the sum of numbers
  let firstSum = firstNums.reduce((p, c) => (p += c));
  let otherSum = otherNums.reduce((p, c) => (p += c));
  let totalSum = firstSum + otherSum;

  //   // if if this a valid card number
  //   if (totalSum % 10 == 0) {
  //
  //   // if the checksum % 10 isn't equal 0 return false
  //   else {
  //     return [false, "inavalid"];
  //   }
  if (totalSum % 10 == 0) {
    return true;
  } else {
    return false;
  }
}

function cardName(cardNum) {
  /* check card number and return it's vendor name
    @cardNun: cridet Card number
    Return: Card's vendor name
     */
  let notAllowed = "-";
  let cridetNumber = cardNum
    .split("")
    .filter((num) => notAllowed.indexOf(num) < 0);

  len = cridetNumber.length;

  // check if it's visa card
  if (cridetNumber[0] == 4 && (len == 13 || len == 16)) {
    return "Visa";
  }
  // check if it's Amirecan express card
  // else if (
  //   len == 15 &&
  //   Number(cridetNumber[0]) == 3 &&
  //   (cridetNumber[1] == 4 || cridetNumber[1] == 7)
  // )
  //   return [true, "American Express"];
  // check if it's masterCard
  else if (
    len === 16 &&
    Number(cridetNumber[0]) === 5 &&
    (Number(cridetNumber[1]) === 1 ||
      Number(cridetNumber[1]) === 2 ||
      Number(cridetNumber[1]) === 3 ||
      Number(cridetNumber[1]) === 4 ||
      Number(cridetNumber[1]) === 5)
  ) {
    return "MasterCard";
  } else {
    return "Invalid";
  }
}

sub.addEventListener("click", (e) => {
  e.preventDefault();
  let number = document.getElementById("num").value;
  // user put valid info
  if (luhn(number)) {
    // make the purchase
    successDiv.innerText = "Succesfull Purchase, order on your way (':";
    successDiv.style.backgroundColor = "aquamarine";
    successDiv.style.display = "block";
  }
});

// add event lisnter in numinput
numInput.addEventListener("keydown", (e) => {
  let number = document.getElementById("num").value;

  // make sure user only put numbers
  if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 8 && !e.ctrlKey) {
    e.preventDefault();
  }
  // if it's a valid input
  if (luhn(number)) {
    // display the corsponding icon
    if (cardName(number) == "Visa") {
      cardIcon.src = imagesDict["Visa"];
    } else if (cardName(number) == "MasterCard") {
      cardIcon.src = imagesDict["MasterCard"];
    }
  } else {
    cardIcon.alt = "Please enter visa or masterCard";
  }
  // display icon beside inline with input field
  cardIcon.style.display = "inline";
});

cvv.addEventListener("keydown", (e) => {
  // make sure user enter only 3 numbers in cvv field
  let input = document.getElementById("cvv").value;
  if (
    (input.length >= 3 || e.keyCode < 48 || e.keyCode > 57) &&
    e.keyCode != 8
  ) {
    e.preventDefault();
  }
});
