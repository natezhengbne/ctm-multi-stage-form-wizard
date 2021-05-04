import {isBlank} from "./value-utils";

describe("value utils test", ()=>{
    test("isBlank", ()=>{
        expect(isBlank("")).toEqual(true);
        expect(isBlank([])).toEqual(true);
        expect(isBlank(undefined)).toEqual(true);
        expect(isBlank(null)).toEqual(true);

        expect(isBlank(false)).toEqual(false);
        expect(isBlank(0)).toEqual(false);
    });
});