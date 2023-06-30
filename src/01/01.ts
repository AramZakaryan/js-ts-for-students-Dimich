import exp from "constants";

const sentence = "Hello my friends."

export const splitIntoWords = (sentence: string) => {
    return sentence.toLowerCase().split(" ")

}

export const mult = (a: number, b: number) => {
    return a * b
}

export const sum = (a: number, b: number) => {

    return a +b
}