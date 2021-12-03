// 1
function truncateString(str, num) {
	if (str.length > num) {
		return str.slice(0, num) + "...";
	} else {
		return str;
	}
}

truncateString("A a A green and yellow basket", 8);

// 2
function findElement(arr, func) {
	return arr.find(item => func(item));
}


findElement([1, 2, 3, 4], num => num % 2 === 0);

// 3
function booWho(bool) {
	return typeof(bool) == "boolean";
}

booWho(null);

// 4
function titleCase(str) {
	str = str.toLowerCase().split(' ');
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i][0].toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
}

titleCase("I'm a little tea pot");

// 5
let dog = {
	name: "pasha",
	numLegs: 4,
};

// 6
let dog2 = {
	name: "Spot",
	numLegs: 4
};
console.log(dog2.name)
console.log(dog2.numLegs)

// 7
let dog3 = {
	name: "Spot",
	numLegs: 4,
	sayLegs: function() {return `This dog has ${dog.numLegs} legs.`}
};

dog3.sayLegs();

// 8
let dog4 = {
	name: "Spot",
	numLegs: 4,
	sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog4.sayLegs();

// 9
// function Dog() {
// 	this.name = 'pasha';
// 	this.color = 'yellow';
// 	this.numLegs = 2;
// }

// 10
function Dog() {
	this.name = "Rupert";
	this.color = "brown";
	this.numLegs = 4;
}

let hound = new Dog();

// 11
function Dog1(name, color) {
	this.name = name;
	this.color = color;
	this.numLegs = 4;
}

let terrier = new Dog1('terrier', 'blue')

// 12
function House(numBedrooms) {
	this.numBedrooms = numBedrooms;
}
let myHouse = new House(4);

console.log(myHouse instanceof House);

// 13
function Bird(name) {
	this.name = name;
	this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (let property in canary) {
	if(canary.hasOwnProperty(property)) {
		ownProps.push(property);
	}
}

// 14
function frankenSplice (arr1, arr2, n) {
	let newArr = [...arr2];
	newArr.splice(n,0,...arr1)
	return newArr
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))

// 15
function bouncer(arr) {
	let newArr = []
	for(let i = 0; i < arr.length; i++) {
		if (arr[i]) {
			newArr.push(arr[i])
		}
	}
	return newArr
}

bouncer([7, "ate", "", false, 9]);

// 16

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

//17
function mutation(arr) {
	let test = arr[1].toLowerCase();
	let target = arr[0].toLowerCase();
	for (let i = 0; i < test.length; i++) {
		if (target.indexOf(test[i]) < 0) return false;
	}
	return true;
}
console.log(mutation(["hello", "hello"]))

//18
function chunkArrayInGroups(arr, size) {
	let newArr = [];
	while (arr.length > 0) {
	  newArr.push(arr.splice(0, size));
	}
	return newArr;
  }
  
chunkArrayInGroups(["a", "b", "c", "d"], 2);



