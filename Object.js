console.log("hello,world");
 let  person = {
    name:"ali",
    father:"waseem",
    age : 17,
    email: "ayazshk61@gamil.com",
    skils: ["html" , "css", "js"],
    contact:{
        phone: ["03171310655", "03118692067"],
        whatsapp: "03171310655",
    },

    
}

console.log(person.contact.phone[0]);
console.log(`My name is ${person.name}  Im ${person.age} year old  My skills is  ${person.skils}  My contact is ${person.contact.phone[0]}`);

let card = {
    user:{
        name:"ali",
        id: 1,
    },
    item:[
        {name: "laptop", price: 35000, qtn:1},
        {name: "keyboard", price: 2000, qtn:2},
        {name: "mouse", price: 1200, qtn:3},

    ],
    discount: 5000,

    totalpricecalculate:function(){
        let sum = 0;
        this.item.forEach(function(p){
            sum +=p.price * p.qtn;
        } );
        console.log(sum - this.discount);
    }
}


let school = {
    name:"aptech",
    address:"hyd",
    class:[
        {
            classname: "101",
            teacher: "sirshahdab",
            students:[
                {
                    name: "ali",
                    marks: 88,
                },
                {
                    name: "arman",
                    marks: 70,
                    conguratulation: function(){
                        console.log("conguratulation arman");
                    }
                }
            ]

        }
    ]
}
school.class[0] .students[1] .conguratulation() 

