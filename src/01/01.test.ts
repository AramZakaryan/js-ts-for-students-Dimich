import {mult, splitIntoWords, sum} from "./01";

let a: number
let b: number
let c: number

beforeEach(()=>{
        a=1
        b=2
        c=3
})

test("sum should be correct.",
    () => {

        // Data

        // Action
        const res1 = sum(a, b)
        const res2 = sum(b, c)

        // Result
        expect(res1).toBe(3)
        expect(res2).toBe(5)
    })

test("mult should be correct.",
    () => {

        // Data
        // const a = 1
        // const b = 2
        // const c = 3

        // Action
        const res1 = mult(a, b)
        const res2 = mult(b, c)

        // Result
        expect(res1).toBe(2)
        expect(res2).toBe(6)
    })

test("word should be split correctly",
    () => {
        const sent1 = "Hello my friends."
        const sent2 = "TS - the best programming language."

        const res1 = splitIntoWords(sent1)
        const res2 = splitIntoWords(sent2)

        expect(res1.length).toBe(3)
        expect(res1[0]).toBe("hello")
        expect(res1[1]).toBe("my")
        expect(res1[2]).toBe("friends.")

        expect(res2.length).toBe(6)
        expect(res2[0]).toBe("ts")
        expect(res2[1]).toBe("-")
        expect(res2[2]).toBe("the")
        expect(res2[3]).toBe("best")
        expect(res2[4]).toBe("programming")
        expect(res2[5]).toBe("language.")

    })