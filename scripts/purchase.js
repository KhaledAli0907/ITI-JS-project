let sub = document.getElementById("sub");

function luhn(input) {
  /* check cridet card number if it's valid or not
    @input: cridet card number
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
  //     // check if it's visa card
  //     if (cridetNumber[0] == 4 && (len == 13 || len == 16)) {
  //       return [true, "Visa"];
  //     }
  //     // check if it's Amirecan express card
  //     else if (
  //       len == 15 &&
  //       Number(cridetNumber[0]) == 3 &&
  //       (cridetNumber[1] == 4 || cridetNumber[1] == 7)
  //     )
  //       return [true, "American Express"];
  //     // check if it's masterCard
  //     else if (
  //       len === 16 &&
  //       Number(cridetNumber[0]) === 5 &&
  //       (Number(cridetNumber[1]) === 1 ||
  //         Number(cridetNumber[1]) === 2 ||
  //         Number(cridetNumber[1]) === 3 ||
  //         Number(cridetNumber[1]) === 4 ||
  //         Number(cridetNumber[1]) === 5)
  //     ) {
  //       return [true, "Master Card"];
  //     } else {
  //       return [false, "invalid"];
  //     }
  //   }
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

sub.addEventListener("click", (e) => {
  e.preventDefault();
  let number = document.getElementById("num").value;
  if (luhn(number)) {
    console.log("valid");
  } else {
    console.log("invalid"); 
  }
  //   let [bool, cardName] = luhn(number);
  //   if (bool) {
  //     console.log(`card name is: ${cardName}`);
  //   } else {
  //     console.log(`card num is ${cardName}`);
  //   }
});
