function getIndexToIns(arr, num) {
	let sortedArr = arr.sort((a,b) => a-b)
	let indexAns = sortedArr.findIndex(t => t > num)
	if (indexAns === -1) {
		return arr.length
	} else {
		return indexAns;
	}

}

console.log(getIndexToIns([2, 5, 10], 15))