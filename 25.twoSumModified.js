const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let remaining = target - nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            if (remaining === nums[j]) return [i, j];
        }

    }
    return false;
}

console.log(twoSum([3, 2, 5, 4, 9], 6));
target = 6;

// [3, 2, 4]

// 3 + 2 = 5
// 3 + 4 = 7
// 2 + 4 = 6