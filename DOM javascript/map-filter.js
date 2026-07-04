 let users = [
        { name: "ali", age: 17 },
        { name: "arman", age: 20 },
        { name: "ubaid", age: 19 },
        { name: "qasim", age: 16 },
    ];

    let adults = users.filter(function(user) {
        return user.age > 18;
    });

    console.log(adults);

    let NEW   =  [
        { name: "ali", age: 17, email: "ayazshk61@gmail.com" },
        { name: "arman", age: 20, email: "arman123@gmail.com"},
        { name: "ubaid", age: 19, email: "ubaid126@gmail.com" },
        { name: "qasim", age: 16, email: " qasim 190@gmail.com" },
    ]
    let email = NEW.map(function(hi){
        return  hi.email
    })
    console.log(email);

    let ali = [ 3, 9, 12]
    ali.forEach(function(i){
        console.log(i *2);
    })
    