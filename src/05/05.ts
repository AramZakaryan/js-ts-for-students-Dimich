type PersonType = {
    name: string
    age: number
    stack?: String[]
    firstName?: String
    lastName?: String

}
type PeopleType = PersonType[]

const people: PeopleType = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Aleksandr Petrov", age: 24},
    {name: "Dmitri Sidorov", age: 18}
]

type DevelopersType = DeveloperType[]

type DeveloperType = {
    stack: string[]
    firstName: string
    lastName: string
}

export let developers: DevelopersType = people.map(
    person => ({
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: person.name.split(" ")[0],
        lastName: person.name.split(" ")[1],
    }))


const creatGreetMessages = (people: PeopleType) =>
    people.map(person =>
        `Hello ${person.name.split(" ")[0]}!`
    )


export let messages:string[] = creatGreetMessages(people)





