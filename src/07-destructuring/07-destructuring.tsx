import React from "react";

export type PersonType ={
    name: string
    age: number
    lessons: {title: string}[]
    address: {street: {title: string}}
}


type PropsType = {
    title?: string
    person: PersonType
}




export const gago = {
    name: "Garegin",
    age: 65,
    lessons: [{title: "1"}, {title: "2"}],
    address: {street: {title: "Sebastia"}}
}

export const PersonComponent: React.FC<PropsType> = (props) => {

    const {title} = props
    const {name} = props.person

    return (
        <div>
            <h3>{title}</h3>
            <hr/>
            <h3>{props.person?.name}</h3>


        </div>
    )
}