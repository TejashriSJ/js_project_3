function string1(stringFormat) {

    let formatedString1 = stringFormat.replace('$', '');
    let formatedString2 = formatedString1.replaceAll(',', '');

    let result = (formatedString2 * 1);
    if (result) {
        return result;
    } else {
        return 0;
    }
}
module.exports = string1;