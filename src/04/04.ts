import {CityType, GovernmentBuildingType} from "../02/02";

export const demolishHousesOnTheStreet = (city: CityType, streetTitle: string) => {
    city.houses = city.houses.filter(el => el.address.street.title !== streetTitle)
}

export function getBuildingWithStaffCountGreaterThan(bds:Array<GovernmentBuildingType>, num:number) {
    return bds.filter(el=>el.staffCount>500)
}