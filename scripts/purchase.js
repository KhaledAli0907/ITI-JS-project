
let sub = document.getElementById("sub")

function luhn (input) {
    /* check cridet card number if it's valid or not
    @input: cridet card number
    */
    let notAllowed = '- '
    let cridetNumber = input.split('').filter((num) => notAllowed.indexOf(num) < 0)

    return cridetNumber
}

sub.addEventListener("click", (e) => {
    let number = document.getElementById("num").value
    console.log(luhn(number));
})

