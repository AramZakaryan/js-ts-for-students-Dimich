import React from "react";

export const MyArrComp: React.FC = () => {
    return (
        <div>MyArrComp</div>
    )
}


export const gago = {
    name: "Gago",
    age: 56,
    address: {
        city: {
            title: "Yerevan"
        }
    }

}

const a = "address"
const c = "city"
const t = "title"


// console.log(gago.address.city.title)
// console.log(gago["address"]["city"]["title"])
console.log(gago[a][c][t])

let myArr = [
    "Emma",
    "Liam",
    "Olivia",
    "Noah",
    "Ava"
];

// console.log(myArr.map(el => el.toUpperCase()))
// console.log(myArr["map"](el => el.toUpperCase()))

const m = "map"
// console.log(myArr[m]((el => el.toUpperCase())))


let myFamilyArr = [
    {id: 101, name: "Emma"},
    {id: 323, name: "Liam"},
    {id: 100, name: "Olivia"},
    {id: 401, name: "Noah"},
    {id: 201, name: "Ava"}
];

export type myFamilyObjProps = {
    [key:string]:{id: number, name: string}
};

let myFamilyObj:myFamilyObjProps = {
    "101": {id: 101, name: "Emma"},
    "323": {id: 323, name: "Liam"},
    "100": {id: 100, name: "Olivia"},
    "401": {id: 401, name: "Noah"},
    "201": {id: 201, name: "Ava"}
};

const newMember = {id: 801, name: "Garnik"}

myFamilyObj[newMember.id]=newMember

delete myFamilyObj["100"]


// console.log(
//     myFamilyObj
// )
















