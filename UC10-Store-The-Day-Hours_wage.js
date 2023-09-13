console.log("Welcome to Employee Table");
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const MAX_HRS_IN_MONTH=160;

let empHrs=0;
let empWage=0;
let totalEmpHrs=0;

let empCheck=Math.floor(Math.random()*10)%3;

//Uc-1 Check Employee is Present Or Absent
console.log("UC-1");
let IS_ABSENT=0;
if(empCheck==IS_ABSENT){
    console.log("Employee is Absent");
}else{
    console.log("Employee is Present");
}

//UC2- Switch Case
console.log("UC-2");
switch(empCheck){
    case IS_PART_TIME :
        empHrs=PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs=FULL_TIME_HOURS;
        break;
    default:
        empHrs=0;
}
empWage=empHrs*WAGE_PER_HOUR;
console.log("Emp Wage : "+empWage);

//UC-3 Function
console.log("UC-3");
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME :
            return PART_TIME_HOURS;
           
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;

        default:
            return 0;
    }
}
empHrs=getWorkingHours(empCheck);
empWage=empHrs * WAGE_PER_HOUR;
console.log("Hours : "+empHrs +" Emp Wage : "+empWage);

//UC-4 forLoop
console.log("UC-4");

function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME :
            return PART_TIME_HOURS;
           
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;

        default:
            return 0;
    }
}

const NUM_OF_WORKING_DAYS=20;
for(let day=0;day<NUM_OF_WORKING_DAYS;day++){
    empCheck=Math.floor(Math.random()*10)%3;
    totalEmpHrs=totalEmpHrs + getWorkingHours(empCheck);
}
empWage=totalEmpHrs * WAGE_PER_HOUR;
console.log("Hours : "+empHrs +" Emp Wage : "+empWage);

//UC-5 Calculate wages till a condition of total working hours 160 or max day of 20 is reached for month
console.log("UC-5");

totalEmpHrs=0;
let totalWorkingDays=0;
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    empCheck=Math.floor(Math.random()*10)%3;
    totalEmpHrs=totalEmpHrs+getWorkingHours(empCheck);
}
empWage=totalEmpHrs*WAGE_PER_HOUR;
console.log("Total Days : "+totalWorkingDays +" \t Total hrs : "+totalEmpHrs+" \t Emp Wage : "+empWage);

//UC-6
console.log("UC-6");
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

totalEmpHrs = 0;
totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs = totalEmpHrs + empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

empWage = calcDailyWage(totalEmpHrs);
console.log(empDailyWageArr);
console.log("Total Days : " + totalWorkingDays + " \t Total Hrs : " + totalEmpHrs + " \t Emp Wage : " + empWage);

// UC-7F Check if there is any part time wage
console.log("UC-7F")
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("Check If Any PartTime Wage : " + mapDayWithWageArr.some(isAnyPartTimeWage));

//UC-7G Find the number of days the employee worked
console.log("UC-7G")
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0)
        return numOfDays + 1;
    return numOfDays;
}
console.log("Number of days Emp Worked : " + empDailyWageArr.reduce(totalDaysWorked, 0));

// UC-8 Store the day and the daily wage long with the total wage
console.log("UC-8")
totalEmpHrs = 0;
totalWorkingDays = 0;
let empDailyWageArray = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);
}
console.log(empDailyWageMap);
console.log("Emp Wage Map totalHrs : " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

// UC-9 Use the Daily Wage Map and Daily Hour Map perform following operations using Arrow Functions
console.log("UC-9")

const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("Emp Wage with Arrow : " + " \t Total Hours: " + totalHours + " \t Total Wages : " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value, key, map) => {
    if (value == 8) {
        fullWorkingDays.push(key);
    }
    else if (value == 4) {
        partWorkingDays.push(key);
    }
    else {
        nonWorkingDays.push(key);
    }
});
console.log("Full Working Days : " + fullWorkingDays);
console.log("Part Working Days : " + partWorkingDays);
console.log("Non Working Days  : " + nonWorkingDays);

//UC-10 Ability to store the Day, Hours Worked and Wage Earned in a single object.
console.log("UC-10")
totalEmpHrs = 0;
totalWorkingDays = 0;
let empDailyHrsAndWageArr = new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push(
        {
            dayNum: totalWorkingDays,
            dailyHours: empHrs,
            dailyWage: calcDailyWage(empHrs),
            toString() {
                return '\n Day' + this.dayNum + "=> Working Hours is " + this.dailyHours +
                    ' And Wage Earned = ' + this.dailyWage
            },
        });
}

console.log("Showing  Daily Hours Worked and Wage Earned : " + empDailyHrsAndWageArr);