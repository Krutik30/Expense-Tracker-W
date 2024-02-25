import { addDays, isValid } from "date-fns";

export function fyyyymmdd(input?: any, change?: number) {
    if (!input) {
        const today: string = fyyyymmdd(new Date());
        // console.log({today});
        return today;
    } else if (change) {
        if (!isValidDate(input)) return "Is not valid date";
        const result: string = fyyyymmdd(addDays(new Date(input), change));
        return result;
    }

    let result;
    switch (typeof input) {
        case "number":
            result = addDays(new Date(), input);
            break;
        default:
            if (!isValidDate(input)) return "Is not valid date";
            result = new Date(input);
    }
    // console.log({input, result});

    result = result.toLocaleString('en-US', { timeZone: "Asia/Kolkata" }).split(',')[0].split('/');
    return `${result[2]}-${result[0].padStart(2, "0")}-${result[1].padStart(2, "0")}`;
}


function isValidDate(d: any) {
    // console.log(d,isValid(d))
    return isValid(new Date(d) || d)
}
