/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let count = 0;
    let temp = num
    for(let i=0;i<num+1;i++){
        if(temp == 0){
            return count;
            break
        }
        if(temp % 2 == 0){
            temp = Math.floor(temp/2);
        }else{
            temp-=1;
        }
        count++;
    }
};