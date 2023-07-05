export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number
}

export type HouseType = {
    id?: number
    builtAt: number
    repaired: boolean
    address: AddressType
}

type AddressType = {
    number?: number
    street: StreetType
}

type StreetType = {
    title: string
}

export type GovernmentBuildingType = {
    type: "HOSPITAL" | "FIRE-STATION" //string
    budget: number
    staffCount: Number
    address: AddressType
}