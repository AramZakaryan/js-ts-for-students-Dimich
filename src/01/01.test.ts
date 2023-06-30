import {sum} from "./01";

test("sum should be correct.",
    () => {
        // Data
        const a = 1
        const b = 2
        const c = 3

        // Action
        const res = sum(a,b)

        // Result
        expect(res).toBe(3)
    })