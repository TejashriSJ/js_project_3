function string2(ipAddress){
        let ipNumbers = ipAddress.split('.');
        let result=[];
        for (let index =0 ; index< ipNumbers.length ; index++){
           
            if(! Number(ipNumbers[index])){
                return [];

            }
            else{
                result.push(Number(ipNumbers[index]));
            }
        }
        if (result.length === 4){
            return result;
        }
        else{
            return [];
        }
}
module.exports = string2;