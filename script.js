let money,
    time;
money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "",
    income: [],
    savings: false
};

let unswer1 = prompt("Введите обязательную статью расходов в этом месяце"),
    unswer2 = prompt("Во сколько обойдется?"),
    unswer3 = prompt("Введите обязательную статью расходов в этом месяце"),
    unswer4 = prompt("Во сколько обойдется?");

appData.expenses[unswer1] = unswer2;
appData.expenses[unswer3] = unswer4;

console.log("статья расходов - " + unswer1 + " составляет - " + appData.expenses[unswer1]);
console.log("статья расходов - " + unswer3 + " составляет - " + appData.expenses[unswer3]);

alert("Ваш бюджет на 1 день - " + appData.budjet / 30);