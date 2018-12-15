var arr = [43, 23, 57, 54, 60, 41, 10, 60, 23, 47, 60, 12, 59];


function showArrAndMaxValue(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log("Образец под номером " + (i + 1) + " - результат - " + arr[i]);
  }
  console.log("Всего проведено исследований: " + arr.length);

  var max = maxArrValue(arr);
  console.log("Наилучший результат: " + max);
}

function showAllMaxValues(arr) {
  var newArr = [];

  var max = maxArrValue(arr);
  for (var i = 0; i < arr.length; i++) {
    if (max === arr[i]) {
      newArr.push(i + 1);
    }
  }
  console.log("Образцы с наилучшими результатами под номерами: [" + newArr + "]");
}

showArrAndMaxValue(arr);
showAllMaxValues(arr);

var automobile = {
  brand: "mercedes",
  year: "2018",
  mileage: "1429",
  color: "черного",
  isMotorStarted: false,
  isMoving: false,
  isContainerFull: false,

  fullFuelContainer: function () {
    this.isContainerFull = true;
  },

  startMotor: function () {
    if (this.isContainerFull) {
      this.isMotorStarted = true;
    } else {
      console.log("Проще завести, когда есть топливо");
    }
  },

  stopMotor: function () {
    this.isMotorStarted = false;
  },

  startMoving: function () {
    if (this.isMotorStarted) {
      this.isMoving = true;
      console.log("Машина " + this.brand + " марки " + this.color + " цвета поехала!")
    }
    else {
      console.log("Включите вначале зажигание");
    }
  },

  stopMoving: function () {
    if (!this.isMotorStarted) {
      console.log("Зажигание и так выключено");
    } else {
      this.isMoving = false;
      console.log("Машинка остановилась");
    }
  }
};

automobile.fullFuelContainer();
automobile.startMotor();
automobile.startMoving();
automobile.stopMoving();

var performance = {
  anna: 29,
  misha: 35,
  evgen: 99,
  stepan: 1,
  elena: 99
};

function showHighestPerformance(obj) {
  var max = 0;
  var names = [];

  for (var key in obj) {
    if (obj[key] > max) {
      max = obj[key];
    }
  }

  for (key in obj) {
    if (obj[key] === max) {
      names.push(key);
    }
  }
  return names;
}

console.log(showHighestPerformance(performance));

function randomizeArrayPositions(arr) {
  var newArr = [];
  var rand;
  var arrLength = arr.length;

  for (var i = 0; i < arrLength; i++) {
    rand = Math.round(Math.random() * (arr.length - 1));
    newArr.push(arr.splice(rand, 1)[0]);
  }
  console.log(newArr);
}

randomizeArrayPositions([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function calculateSumOfArray(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(calculateSumOfArray(arr));

function maxArrValue(arr) {
  var max = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function showAllSubArr(arr) {
  var newArr = [];
  var arrLength = arr.length;
  var subArrLength = 1;

  while (subArrLength <= arrLength) {
    for (var j = 0; j <= arrLength - subArrLength; j++) {
      newArr.push(arr.slice(j, subArrLength + j));
    }
    subArrLength++;
  }
  return newArr;
}

console.log(showAllSubArr([1, 2, 3, 4, 5, 6]));

function checkMaxSubArrSum(arr) {
  var arrOfSum = [];
  var newArr = showAllSubArr(arr);
  var newArrLength = newArr.length;
  console.log(newArr);

  for (var i = 0; i < newArrLength; i++) {
    arrOfSum.push(calculateSumOfArray(newArr[i]));
  }
  console.log(arrOfSum);

  return maxArrValue(arrOfSum);
}

console.log(checkMaxSubArrSum([1, -2, 3, 4, -9, 6]));

function checkPalinrom(str) {
  var newStr = str.toLowerCase().split(' ').join('');
  var isPalindrome = true;

  for (var i = 0; i < newStr.length / 2; i++) {
    if(newStr[i] !== newStr[newStr.length - i - 1]) {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
}

console.log(checkPalinrom("no melon no lemon"));