
function string5(arrayOfStrings){
    if(!arrayOfStrings || ! Array.isArray(arrayOfStrings)){
        return '';
    }
    else{
        let completeString = arrayOfStrings.join(' ');
        return completeString;
    }

}

module.exports = string5;