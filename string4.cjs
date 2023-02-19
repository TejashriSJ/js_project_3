
function string4(nameObject){
    if(!nameObject || typeof nameObject !== 'object'){
        return '';
    }
    else{

        let nameValues=[];
        for(let name in nameObject){
            nameValues.push(nameObject[name].toLowerCase());
        }

        let titleCapital = '';
        for (let index =0; index< nameValues.length ; index++){
            let capitalizedName=''
            capitalizedName += nameValues[index].charAt(0).toUpperCase()
            capitalizedName += nameValues[index].substring(1);
            titleCapital += capitalizedName;
            titleCapital += ' ';

        }
        return titleCapital;   
    } 
}
module.exports = string4;