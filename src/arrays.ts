/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newNum = [];
    if (numbers.length !== 0) {
        newNum[0] = numbers[0];
        newNum[1] = numbers[numbers.length - 1];
    }
    return newNum;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const numStr = numbers.map((word: string): number => +word);
    const numStrFixed = numStr.map((num: number): number =>
        isNaN(num) === true ? 0 : num
    );
    return numStrFixed;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const remDollar = amounts.map((price: string): number =>
        price[0] === "$" ? +price.substring(1) : +price
    );
    const remDollarFixed = remDollar.map((num: number): number =>
        isNaN(num) === true ? 0 : num
    );
    return remDollarFixed;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const remQuest = messages.filter(
        (mess: string): boolean => mess[mess.length - 1] !== "?"
    );
    const toShout = remQuest.map((mess: string): string =>
        mess[mess.length - 1] === "!" ? mess.toUpperCase() : mess
    );
    return toShout;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const redColors = colors.filter(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    if (redColors.length === colors.length) {
        return true;
    } else {
        return false;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currTotal: number, num: number) => currTotal + num,
        0
    );
    let partSum: string = addends.join("+");
    const beginStr = sum.toString();
    const midStr = beginStr + "=";
    if (addends.length === 0) {
        partSum = "0";
    }
    const finalStr = midStr + partSum;
    return finalStr;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const hasNegatives = values.some((val: number): boolean => val < 0);
    const negativeAt = values.findIndex((val: number): boolean => val < 0);
    let sum = 0;

    if (hasNegatives === false) {
        sum = values.reduce((currTot: number, num: number) => currTot + num, 0);
        const numCopy = [...values, sum];
        return numCopy;
    } else {
        const anotherCopy = [...values];
        const secondCopy = [...values];
        secondCopy.length = negativeAt;
        sum = secondCopy.reduce(
            (currTot: number, num: number) => currTot + num,
            0
        );
        anotherCopy.splice(negativeAt + 1, 0, sum);
        return anotherCopy;
    }
}
