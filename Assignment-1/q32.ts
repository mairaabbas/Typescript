// question no 32

const current_users: Array<string> = [
    "ali",
    "waseem",
    "ahmad",
    "abbas",
    "bilal",
  ];
  const new_users: Array<string> = [
    "AHMED",
    "haroon",
    "zain",
    "abbas",
    "hameeza",
  ];
  
  new_users.map((name: string) => {
    if (current_users.includes(name.toLowerCase())) {
      console.log("username", name, "already in use. Please rename yourself");
    } else {
      console.log("username", name, "is available");
    }
  });