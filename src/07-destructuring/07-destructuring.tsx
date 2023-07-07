import React from "react";

export type PersonType = {
    name: string
    age: number
    lessons: { title: string }[]
    address: { street: { title: string } }
}


type PropsType = {
    title?: string
    person: PersonType
    food?: string[]
    car?: {model:string, year:number}
}
export const gago = {
    name: "Garegin",
    age: 65,
    lessons: [{title: "1"}, {title: "2"}],
    address: {street: {title: "Sebastia"}}
}
export const gagoFood = ["apple", "meet"]
export const gagoCar = {model:"Toyota", year:2015}
export const PersonComponent: React.FC<PropsType> =
    ({title, person: {name}, ...otherProps}) => {
        return (
            <div>
                <h3>{title}</h3>
                <hr/>
                <h3>{name}</h3>
                <hr/>
                <h3>{otherProps.car?.model} {otherProps.car?.year}</h3>
                <hr/>
                <h3>{otherProps.food?.map(el=><span>{el} </span>)}</h3>
            </div>
        )
    }