import {developers, messages} from "./05";

test.skip("Person should become Developer", () => {

    expect(developers).toMatchObject(
        [
            {
                stack: ["css", "html", "js", "tdd", "react"],
                firstName: "Andrew",
                lastName: "Ivanov"
            },
            {
                stack: ["css", "html", "js", "tdd", "react"],
                firstName: "Aleksandr",
                lastName: "Petrov"
            },
            {
                stack: ["css", "html", "js", "tdd", "react"],
                firstName: "Dmitri",
                lastName: "Sidorov"
            }
        ]
    )

})

test.skip("Say hello to everyone", ()=>{

    expect (messages.length).toBe(3)

    expect(messages).toMatchObject([
        "Hello Andrew!",
        "Hello Aleksandr!",
        "Hello Dmitri!"
    ])
})


