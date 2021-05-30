let list = [
    "Delhi",
    "Kolkata",
    "Chennai",
    "Mumbai",
    "Hyderabad",
    "Banglore",
    "Pune",
  ];

  console.log(list);
  
  // Accessing the Array Member
  let city1 = list[0];
  let city2 = list[1];
  let city3 = list[2];
  let city4 = list[3];
  console.log(city1, city2, city3, city4);
  
  // Destructuring the arrays;
  let [c1, c2, c3, c4] = list;
  console.log(c1, c2, c3, c4);
  
  // lil complex :: You know the position;
  let [, , , , d1] = list;
  console.log(d1);