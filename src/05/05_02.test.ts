import {CityType} from "../02/02";
import {getStreetTitlesOfGovernementBuildings, getStreetTitlesOfHouses} from "./05_02";

let city3: CityType

beforeEach(() => {
    city3 = {
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

test("List of Government Building Street Titles", () => {
   let govBuildingsStreets:string[]= getStreetTitlesOfGovernementBuildings(city3.governmentBuildings)

    expect(govBuildingsStreets.length).toBe(2)
    expect(govBuildingsStreets[0]).toBe("Central Str")
    expect(govBuildingsStreets[1]).toBe("South Str")

})

test("List of Government Building Street Titles", () => {

    let HousesStreets:string[]= getStreetTitlesOfHouses(city3.houses)

    expect(HousesStreets.length).toBe(3)
    expect(HousesStreets[0]).toBe("White Street")
    expect(HousesStreets[1]).toBe("Happy Street")
    expect(HousesStreets[2]).toBe("Happy Street")

})