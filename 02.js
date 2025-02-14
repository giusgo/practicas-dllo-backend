// Punto 4
function fibo(n) {
    const nums = [0, 1];

    while (n > nums.length - 1) {
        nums.push(nums[nums.length - 1] + nums[nums.length - 2]);
    }

    return nums[n];
}

// Punto 6
function most_repeated(list) {
    let most_ocurrence = 0;
    let selected;

    for (let i = 0; i < list.length; i++) {
        let appearances = 0;
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] === list[j]) {
                appearances++;
            }
        }
        if (appearances > most_ocurrence) {
            most_ocurrence = appearances;
            selected = list[i];
        }
    }

    return selected;
}

// Punto 7
function sort(list) {
    return list.slice().sort((a, b) => a - b);
}

// Punto 7 variable
function bubblesort(list) {
    for (let i = 0; i < list.length; i++) {
        let swap = false;

        for (let j = i + 1; j < list.length; j++) {
            let temp = list[i];
            list[i] = list[j]
            list[j] = temp;

            // swap
            swap = true;
        }

        if (swap) i = 0;
    }
}

// Punto 8
function n_biggest(list, n) {
    let desc = [...new Set(list)];
    desc.sort((a, b) => b - a);

    if (n <= list.length)
        return desc[n - 1];
    else
        return null;
}

// Punto 9
function max_prod(list) {
    let max = -99;

    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            let prod = list[i] * list[j];
            if (prod > max) {
                max = prod;
            }
        }
    }

    return max;
}

// Punto 10
function binary_search(list, n) {
    let left = 0, right = list.length - 1;

    while (left <= right) {
        let middle = Math.floor((right + left) / 2);

        if (list[middle] === n) { return n }
        
        if (n < list[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }

    return null

}

// Test
console.log("Fibo: " + fibo(10));
console.log("Most repeated: " + most_repeated([1, 1, 2, 3, 4, 4, 1, 4, 4]));
console.log("Sort: " + sort([1, 1, 2, 3, 4, 4, 1, 4, 4]))
console.log("Bubble sort: " + sort([1, 1, 2, 3, 4, 4, 1, 2, 4]))
console.log("Biggest: " + n_biggest([1, 1, 2, 3, 4, 4, 1, 2, 4], 5))
console.log("Max product: " + max_prod([1, 1, 2, 3, 4, 4, 1, 2, 4]))

const sortedList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 8;
const result = binary_search(sortedList, target);

console.log(result);