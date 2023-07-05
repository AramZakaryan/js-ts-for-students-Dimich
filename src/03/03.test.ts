import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";
import {CityType} from "../02/02";

let city1: CityType

beforeEach(() => {
    city1 = {
        title: "New York",
        houses: [
            {
                id: 1,
                builtAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White Street"
                    }
                }
            },
            {
                id: 2,
                builtAt: 2000,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy Street"
                    }
                }
            },
            {
                id:3,
                builtAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy Street"
                    }
                }
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address:
                    {
                        street: {
                            title: "Central Str"
                        }

                    }

            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address:
                    {
                        street: {
                            title: "South Str"
                        }

                    }

            }
        ],
        citizensNumber: 1000000
    }
})

test.skip("The Budget Should Be Changed",
    () => {

        expect(city1.governmentBuildings[0].budget).toBe(200000)
        expect(city1.governmentBuildings[1].budget).toBe(500000)

        addMoneyToBudget(city1.governmentBuildings[0], 100000)
        addMoneyToBudget(city1.governmentBuildings[1], -100000)

        expect(city1.governmentBuildings[0].budget).toBe(300000)
        expect(city1.governmentBuildings[1].budget).toBe(400000)

    })

test.skip ("The should be repaired", ()=> {

    expect(city1.houses[1].repaired).toBeFalsy()
    expect(city1.houses[1].repaired).toBe(false)

    repairHouse(city1.houses[1])

    expect(city1.houses[1].repaired).toBeTruthy()
    expect(city1.houses[1].repaired).toBeTruthy()

})

test.skip ("Staff should be fired", ()=>{
    expect(city1.governmentBuildings[0].staffCount).toBe(200)
    toFireStaff(city1.governmentBuildings[0], 20)
    expect(city1.governmentBuildings[0].staffCount).toBe(180)
})


test.skip ("Staff should be hired", ()=>{
    expect(city1.governmentBuildings[0].staffCount).toBe(200)
    toHireStaff(city1.governmentBuildings[0], 20)
    expect(city1.governmentBuildings[0].staffCount).toBe(220)
})

test.skip ("Say hello to New York citizens", () => {
    const res = createMessage(city1)

    expect(res).toBe("Hello New York citizens. Hello to all of you, all of 1000000 citizens")



})