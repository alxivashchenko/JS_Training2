let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
        console.log(money);
        console.log(time);
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseExpenses() {
    let i = 0;
    while (i < 2) {
        let a = prompt("Введите обяз статью расходов ", ''),
            b = prompt("Во сколько это обойдется?", '');
        console.log(a);
        console.log(b);
    
        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
    
        }
        i++;
    } 
}
    chooseExpenses();




appData.moneyPerDay = (appData.budget / 30).toFixed();



console.log(appData.moneyPerMonth);
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}

console.log(appData);

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();



