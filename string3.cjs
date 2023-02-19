
function string3(date){
    if(!date || typeof date !== 'string'){
        return '';
    }
    else{
        let arrayOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September','October', 'November', 'December'];
        let monthInNumber = Number(date.split('/')[1]);
        return arrayOfMonths[monthInNumber-1];
        
    } 
}
module.exports = string3;