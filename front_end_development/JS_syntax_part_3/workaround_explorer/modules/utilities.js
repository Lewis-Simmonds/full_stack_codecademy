export const formatNumber = num => {
    let numString = String(Math.floor(num));
    for (let i = numString.length - 3; i > 0; i -= 3) {
        numString = numString.slice(0, i) + ',' + numString.slice(i);
    };
    return numString;
}