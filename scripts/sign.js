
// function hash(pass = "") {
//   /**
//    * hash - fucntion generate the same number everytime we put the same text
//    *
//    * @pass - the passsword text we want to hash
//    * Return: the generated value
//    */
//   let val = 0;
//   // iterate through password
//   for (let i = 0; i < pass.length; i++) {
//     // get the ascii code for this char
//     const asci = pass.charCodeAt(i);
//     // make calculation
//     val = (val << 4) - val + asci;
//     val |= 0; // like math.floor
//   }

//   return val;
// }

let data = "";

async function login(uname, pass) {
  /**
   * login - fucntion to handle the login request
   *
   * @username - the input username
   * @password - the input password
   * Return: nothing
   */

  let arr = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: `${uname}`,
      password: `${pass}`,
      // expiresInMins: 60, // optional
    }),
  }).then((res) => res.json());
  return arr;
}

//uname: "kminchelle"
//pass: "0lelplR"
document.getElementById("login").addEventListener("click",async (e) => {
  let uname = document.getElementById("name").value;
  let pass = document.getElementById("pass").value;
  data = await login(uname, pass);
  console.log(data);
});
