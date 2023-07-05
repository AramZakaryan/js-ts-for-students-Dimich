import {CityType} from "./02";

let city: CityType

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
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
                    {street: {
                        title: "Central Str"
                        }

                }

            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address:
                    {street: {
                            title: "South Str"
                        }

                    }

            }
        ],
        citizensNumber: 1000000
    }
})

test.skip("test city should contain 3 houses",
    () => {
        const res1 = city.houses.length

        expect(res1).toBe(3)

        expect(city.houses[0].builtAt).toBe(2012)
        expect(city.houses[0].repaired).toBe(false)
        expect(city.houses[0].address.number).toBe(100)
        expect(city.houses[0].address.street.title).toBe("White Street")

        expect(city.houses[1].builtAt).toBe(2000)
        expect(city.houses[1].repaired).toBe(false)
        expect(city.houses[1].address.number).toBe(100)
        expect(city.houses[1].address.street.title).toBe("Happy Street")

        expect(city.houses[2].builtAt).toBe(2020)
        expect(city.houses[2].repaired).toBe(false)
        expect(city.houses[2].address.number).toBe(101)
        expect(city.houses[2].address.street.title).toBe("Happy Street")
    })

test.skip("test city should contain hospital and fire station",
    () => {
        const res2 = city.governmentBuildings.length

        expect(res2).toBe(2)

        expect(city.governmentBuildings[0].type).toBe("HOSPITAL")
        expect(city.governmentBuildings[0].budget).toBe(200000)
        expect(city.governmentBuildings[0].staffCount).toBe(200)
        expect(city.governmentBuildings[0].address.street.title).toBe("Central Str")

        expect(city.governmentBuildings[1].type).toBe("FIRE-STATION")
        expect(city.governmentBuildings[1].budget).toBe(500000)
        expect(city.governmentBuildings[1].staffCount).toBe(1000)
        expect(city.governmentBuildings[1].address.street.title).toBe("South Str")

    })

