const users = [
    { username: "alice123", age: 25, email: "alice@example.com", active: true },
    { username: "bob", age: 35, email: "bob@example.com", active: true },
    { username: "charlie", age: 17, email: "charlie@example.com", active: false }
  ];

  const isValidUser = user => {
     if(!user.active) return false;     

     if(user.age < 18) return true
  } 

  