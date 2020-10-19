/*This function parses the amount_str returned by ./parse-input-services*/

export function parseAmount(str) {

    if (!str) {
        str = 'this string'
    }
    const arr = str.split(' ');

    const getDecimal = (a, b) => a / b;

    if (arr[0] === "") {
        return {
            unit: null,
            num: null
        }
    }
    let num = 0;
    let unit = '';

    arr.forEach(val => {


        if (val.match(/\d.\d|\d/g)) {
            if (val.split('').length > 2) {
                let valArr = val.split('')
                let newVal = getDecimal(valArr[0], valArr[2])
                num += newVal
            } else {
                num += Number(val)
            }

        } else if (!Number(val)) {
            unit = val
        }


    })

    return { num, unit }
}