// Object Singleton Method
// exp : create a tinder app

// const tinderUser = new Object() //this is singleton object
const tinderUser = {} //this is not singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sohan Kumar Singh" // output: { id: '123abc', name: 'Sohan Kumar Singh', isLoggedIn: false }
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "hp@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rishi",
            lastname: "kant"
        }
    }
}

console.log(regularUser.fullname.userfullname);//output: { userfullname: { firstname: 'Rishi', lastname: 'kant' } }
console.log(regularUser.email)

//combining object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3   = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);// output { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' } h.w. MDN Assign



// using spred method
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);


const user = [
    {
        id: "1",
        email: "s@gmail.com"
    },
    {
        id: "1",
        email: "s@gmail.com"
    },
    {
        id: "1",
        email: "s@gmail.com"
    },
    {
        id: "1",
        email: "s@gmail.com"
    }
]

user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))



