import {CityType} from "../02/02";
import {demolishHousesOnTheStreet, getBuildingWithStaffCountGreaterThan} from "./04";


let city2: CityType

beforeEach(() => {
    city2 = {
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
                id: 3,
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


test.skip("Houses should be destroyed", () => {

    expect(city2.houses.length).toBe(3)

    demolishHousesOnTheStreet(city2, "Happy Street")

    expect(city2.houses.length).toBe(1)

})

test.skip("Buildings with correct staff count.", () => {

    expect(city2.governmentBuildings.length).toBe(2)


    const govBuildCorrect = getBuildingWithStaffCountGreaterThan(city2.governmentBuildings, 500)

    expect(govBuildCorrect.length).toBe(1)
    expect(govBuildCorrect[0].type).toBe("FIRE-STATION")
})

