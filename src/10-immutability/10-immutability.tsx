import React from "react";

export const AnkapComp10 = () => {
    return (
        <div>
            ImmutabilityComp
        </div>
    )
}


type userType = {
    name: string
    age: number
    address: {
        street: string
        apt: number
    }
}

let user: userType = {
    name: "Babken",
    age: 33,
    address: {
        street: "Liberte",
        apt: 43
    }
}

type programmerType = userType & {
    laptop: string
}

let programmer: programmerType = {
    name: "Babken",
    age: 33,
    address: {
        street: "Liberte",
        apt: 43
    },
    laptop: "MacBook"
}

type programmerWithBooksType = programmerType & {
    books: string[]
}

let myObj: programmerWithBooksType = {
    name: "Gago",
    age: 33,
    address: {
        street: "Liberte",
        apt: 43
    },
    laptop: "MacBook",
    books: ["javaScript", "css", "react", "redux"]
}

const replaceBook = (person: programmerWithBooksType, oldBook: string, newBook: string) => ({
    ...person, books: person.books.map(el=>el===oldBook?el=newBook:el)
})

// console.log(replaceBook(programmerWithBooks, "css", "CSS").books[1])
// console.log(programmerWithBooks.books[1])

const removeBook = (person: programmerWithBooksType, bookToBeRemoved: string) => ({
    ...person, books: person.books.filter(el=>el!==bookToBeRemoved)
})

// console.log(removeBook(programmerWithBooks, "react").books)

console.log(JSON.parse(JSON.stringify(myObj)))



