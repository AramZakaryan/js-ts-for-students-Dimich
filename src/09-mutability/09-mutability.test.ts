import exp from "constants";

type UserType = {
    name:string
    age: number
}

const increaseAge = (user:UserType) => {
    user.age++
}

test.skip("big test", ()=>{

    let gago: UserType = {
        name: "Gago Surenyan",
        age: 56
    }

    increaseAge(gago)

    expect(gago.age).toBe(57)

    let seroj: UserType = gago

    seroj.age=60

    console.log(gago.age)

    expect(gago.age).toBe(60)



})
