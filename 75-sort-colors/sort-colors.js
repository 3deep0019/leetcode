/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const n = nums.length
    let front = 0;
    for(let i =0; i<n;i++){
        if(nums[i] == 0){
            [nums[i],nums[front]] = [nums[front], nums[i]];
            front++;
        }
    }

    let i = front, back = n-1;
    while(i<=back){
        if(nums[i]==2){
            [nums[i],nums[back]] = [nums[back], nums[i]];
            back--;
        }
        else{
            i++;
        }
    }
    return nums
};