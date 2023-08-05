import {PersonType} from "./07-destructuring";


let person :PersonType

beforeEach(()=>{
    person = {
        name: "Dimych",
        age: 36,
        lessons: [{title: "1"}, {title: "2"}],
        address: {street: {title: "Liberty"}}
    }
})






test.skip("test 07", () => {
        let person = {
            name: "Dimych",
            age: 36,
            lessons: [{title: "1"}, {title: "2"}],
            address: {street: {title: "Liberty"}}
        }

        // const a = person.age
        // const l = person.lessons

        const {age: a, lessons:l} = person
        const {title} = person.address.street


        expect(a).toBe(36)
        expect(l.length).toBe(2)
        expect(title).toBe("Liberty")



    }
)