const prompt = require('prompt-sync')();

// UC1
const IS_ABSENT = 0; // Constant value to represent presence

// Generate a random number (0 or 1)
let empCheck = Math.floor(Math.random() * 10) % 2;

if (empCheck === IS_ABSENT) {
    console.log("Employee is Absent");
} else {
    console.log("Employee is Present");
}

// UC2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// UC3
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

// UC4
const NUM_OF_WORKING_DAYS = 20;
// UC5
const MAX_HRS_IN_MONTH = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;

// UC6: Array and 7 Maps
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
}

console.log(empDailyWageMap);
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage
}

console.log("UC7A Emp Wage Map totalHrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

// Array Helper Functions
// UC-7A: Calculate total wage using Array forEach traversal or reduce method
let totalEmpWage = 0;
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC-7A Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Employee Wage: " + totalEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC-7A Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

// UC 7B Show the Day along with Daily Wage using Array map helper function

let dailyCntr = 0;
function mapDayWithWage(dailywage) {
    dailyCntr++;
    return dailyCntr + "=" + dailywage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);

console.log("UC7B Daily Wage Map");

console.log(mapDayWithWageArr);

// UC 7C - Show Days when Full time wage of 160 were earned

function fulltimewage(dailywage) {
    return dailywage.includes("160");
}

let fullDayWageArr = mapDayWithWageArr.filter(fulltimewage);

console.log("UC7C Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

// UC 7D - Find the first occurrence when Full Time Wage was earned using find function

function findFulltimeWage(dailywage) {
    return dailywage.includes("160");
}

console.log("UC 7D First time Fulltime wage was earned on Day: "+ mapDayWithWageArr.find(findFulltimeWage));

// UC 7E Check if Every Element of Full Time Wage is truely holding Full time wage
function isAllFulltimeWage(dailywage) {
    return dailywage.includes ("160");
}

console.log("UC 7E Check All Element have Full Time Wage: "+
fullDayWageArr.every(isAllFulltimeWage));

// UC 7F Check if there is any Part Time Wage
function isAnyPartTimeWage (dailywage) {
    return dailywage.includes ("80");
}

console.log("UC 7F Check If Any Part Time Wage: "+
mapDayWithWageArr.some(isAnyPartTimeWage));

// UC 7G - Find the number of days the Employee Worked
function totalDaysWorked (numOfDays, dailywage) {
    if (dailywage > 0) return numOfDays+1;
    return numOfDays;
}

console.log("UC 7G- Number of Days Emp Worked: " + empDailyWageArr.reduce(totalDaysWorked, 0));