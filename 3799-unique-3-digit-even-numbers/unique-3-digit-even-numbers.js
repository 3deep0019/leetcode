/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
    const freq = Array(10).fill(0);

    for (const digit of digits) {
        freq[digit]++;
    }

    let answer = 0;

    for (let first = 1; first <= 9; first++) {
        for (let second = 0; second <= 9; second++) {
            for (let third = 0; third <= 8; third += 2) {
                if (freq[first] === 0 || freq[second] === 0 || freq[third] === 0) {
                    continue;
                }

                if (first === second && second === third && freq[first] < 3) {
                    continue;
                }

                if (first === second && freq[first] < 2) {
                    continue;
                }

                if (first === third && freq[first] < 2) {
                    continue;
                }

                if (second === third && freq[second] < 2) {
                    continue;
                }

                answer++;
            }
        }
    }

    return answer;
};