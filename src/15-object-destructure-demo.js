// Declared an object
let rohitRef = {
  id: 1,
  username: "rohit",
  password: "@#@#",
  email: "rohit@gmail.com",
  mobile: "2323232",
  address: {},
  city: "mumbai",
  state: "MH",
  songList: [],
  movieList: [],
};

// Access the object member
let username1 = rohitRef.username;
let password1 = rohitRef.password;
let email1 = rohitRef.email;
let mobile1 = rohitRef.mobile;
console.log(username1, password1, email1, mobile1);

// destructure concept
let { username, email, mobile, password } = rohitRef; // rohitRef is objec, that is getting destructured!!!
console.log(username, password, email, mobile);