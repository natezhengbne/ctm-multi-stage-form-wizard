import { isBoolean, isEmpty, isNil, isNull, isNumber, isUndefined } from "lodash";

export function isBlank(value: string | number | [] | {} | boolean | undefined | null): boolean {
    if (isUndefined(value) || isNull(value) || isNil(value)) {
      return true;
    }
  
    if (isNumber(value) || isBoolean(value)) {
      return false;
    }
  
    return isEmpty(value);
  }