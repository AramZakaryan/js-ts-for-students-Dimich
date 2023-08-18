import React from "react";

export const AnkapComp = () => {
    return (
        <div>
            MutabilityComp
        </div>
    )
}


let matsak = {
    name: "Mnatsakan",
    age: 30
}

let vagho = matsak

vagho.age = 40

// console.log(matsak.age)

let jogh = [
    {name: "Mnatsakan", age: 30},
    {name: "Sergey", age: 25}
]

let txeq = jogh

txeq[0].age=50

// console.log(jogh[0].age)

let tiv1 = 50
let tiv2 = tiv1

tiv2 ++

// console.log(tiv1)
// console.log(tiv2)


let babo = {
    name: "Babken",
    age: 33,
    address : {
        street: "Liberte",
        apt: 43
    }
}

let ourAddress = babo.address

let nata = {
    name: "Natasha",
    age: 27,
    address : ourAddress
}

nata.address.apt=98

// console.log(babo.address.apt)
//
// console.log(nata.address.apt)


let obj1 = {
    name: "name1",
    age: "age1"
}

let obj2 = obj1

console.log(obj1===obj2)


