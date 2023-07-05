import {GovernmentBuildingType, HouseType} from "../02/02";

export const getStreetTitlesOfGovernementBuildings = (govBuidings:GovernmentBuildingType[])=> {
    return govBuidings.map(govBuiding=>govBuiding.address.street.title)
}

export const getStreetTitlesOfHouses = (houses:HouseType[])=> {
    return houses.map(house=>house.address.street.title)
}