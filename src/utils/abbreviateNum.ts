/**
 * convert long number to abbreviate number (ex: 500K)
 * @param value 
 */
const abbreviateNum = function (num: number) {
    if (num === null) { return null; }
    if (num === 0) { return '0'; }
    var b: string[] = num.toPrecision(2).split("e"),
        k: number = b.length === 1 ? 0 : Math.floor(Math.min(parseFloat(b[1].slice(1)), 14) / 3),
        c: number = parseFloat(k < 1 ? num.toFixed(1) : (num / Math.pow(10, k * 3)).toFixed(1)),
        d: number = c < 0 ? c : Math.abs(c == null ? 0 : c),
        e: string = d + ['', 'K', 'M', 'B', 'T'][k];
    return e;
}

export default abbreviateNum;