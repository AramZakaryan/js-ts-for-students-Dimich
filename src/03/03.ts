import {CityType, GovernmentBuildingType, HouseType} from "../02/02";

export const addMoneyToBudget = (govBuild:GovernmentBuildingType, num:number) => {
    govBuild.budget+=num
}

export const repairHouse = (house:HouseType) =>{
house.repaired = true
}

export const toFireStaff = (govBuiding:GovernmentBuildingType, num:number) => {
    govBuiding.staffCount -= num
}


export const toHireStaff = (govBuiding:GovernmentBuildingType, num:number) => {
    govBuiding.staffCount += num
}

export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizens. Hello to all of you, all of ${city.citizensNumber} citizens`
}