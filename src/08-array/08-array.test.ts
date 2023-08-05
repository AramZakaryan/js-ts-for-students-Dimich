import {myFamilyObjProps} from "./08-array";

let myFamilyObj:myFamilyObjProps


beforeEach(()=>{
    myFamilyObj = {
        "101": {id: 101, name: "Emma"},
        "323": {id: 323, name: "Liam"},
        "100": {id: 100, name: "Olivia"},
        "401": {id: 401, name: "Noah"},
        "201": {id: 201, name: "Ava"}
    };

})

test("A new element should be added", ()=>{

    myFamilyObj["323"].name="Lianna"

    expect(myFamilyObj["323"].name).toBe("Lianna")
    expect(myFamilyObj["323"]).toEqual({id: 323, name: "Lianna"})

})

test("An element has been deleted", ()=>{

    delete myFamilyObj["401"]

    expect(myFamilyObj["401"]).toBeUndefined()



})