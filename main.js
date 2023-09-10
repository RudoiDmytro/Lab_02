//1 завдання-------------------------------------------------
function calculateA(x, y) {
    var numerator = Math.sqrt(Math.abs(x - 1)) - Math.sqrt(Math.abs(y));
    var denominator = 1 + Math.pow(x, 2) / 2 + Math.pow(y, 2) / 4;
    return numerator / denominator;
}
var xInput1 = document.getElementById("xInput1");
var yInput1 = document.getElementById("yInput1");
var calculateButton1 = document.getElementById("calculateButton1");
var resultElement1 = document.getElementById("result1");
if (calculateButton1 && xInput1 && yInput1 && resultElement1) {
    calculateButton1.addEventListener("click", function () {
        var x = parseFloat(xInput1.value);
        var y = parseFloat(yInput1.value);
        if (!isNaN(x) && !isNaN(y)) {
            var result = calculateA(x, y);
            resultElement1.textContent = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: a = ".concat(result);
        }
        else {
            resultElement1.textContent =
                "Некоректні вхідні дані. x і y повинні бути числами.";
        }
    });
}
//2 завдання-------------------------------------------------
// Функція для обчислення значення функції в залежності від x
function calculateY(x) {
    if (x < 0) {
        return Math.pow(x, 3) - 1.5;
    }
    else if (x >= Math.PI / 2) {
        return Math.pow(x, 2) + 2 * x;
    }
    else {
        return Math.cos(x) + 0.2;
    }
}
// Отримуємо посилання на HTML-елементи
var xInput2 = document.getElementById("xInput2");
var resultElement2 = document.getElementById("result2");
// Отримуємо кнопку та додаємо обробник подій для обчислення та виведення значення y
var calculateButton2 = document.getElementById("calculateButton2");
if (calculateButton2 && resultElement2) {
    calculateButton2.addEventListener("click", function () {
        var x = parseFloat(xInput2.value);
        if (!isNaN(x)) {
            var y = calculateY(x);
            resultElement2.textContent = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: y = ".concat(y.toFixed(2));
        }
        else {
            resultElement2.textContent = "Некоректне значення x. Введіть число.";
        }
    });
}
//3 завдання-------------------------------------------------
// Отримуємо посилання на HTML-елементи
var xInput3 = document.getElementById("xInput3");
var yInput3 = document.getElementById("yInput3");
var resultElement3 = document.getElementById("result3");
// Отримуємо кнопку та додаємо обробник подій для визначення, у яке коло потрапляє точка
var determineButton3 = document.getElementById("determineButton3");
if (determineButton3 && resultElement3) {
    determineButton3.addEventListener("click", function () {
        var x = parseFloat(xInput3.value);
        var y = parseFloat(yInput3.value);
        if (!isNaN(x) && !isNaN(y)) {
            var k = 0;
            var distanceToCenter = Math.pow(x, 2) + Math.pow(y, 2);
            if (distanceToCenter <= 4) {
                k = 1;
            }
            else if (distanceToCenter <= 16) {
                k = 2;
            }
            resultElement3.textContent = "\u0422\u043E\u0447\u043A\u0430 \u043F\u043E\u0442\u0440\u0430\u043F\u043B\u044F\u0454 \u0443 \u043A\u043E\u043B\u043E ".concat(k);
        }
        else {
            resultElement3.textContent =
                "Некоректні координати точки. Введіть числа.";
        }
    });
}
//4 завдання-------------------------------------------------
// Отримуємо посилання на HTML-елементи
var nInput4 = document.getElementById("nInput4");
var resultElement4 = document.getElementById("result4");
// Отримуємо кнопку та додаємо обробник подій для введення кількості чисел та сумування
var sumButton4 = document.getElementById("sumButton4");
if (sumButton4 && resultElement4) {
    sumButton4.addEventListener("click", function () {
        var n = parseInt(nInput4.value);
        if (!isNaN(n) && n > 0) {
            var s = 0;
            for (var i = 0; i < n; i++) {
                var inputValue = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E #".concat(i + 1, ":"));
                if (inputValue !== null) {
                    var a = parseFloat(inputValue);
                    if (!isNaN(a)) {
                        s += a;
                    }
                    else {
                        alert("Некоректне введення числа. Введіть число ще раз.");
                        i--; // Повторити введення для цього числа
                    }
                }
                else {
                    alert("Введення скасовано. Введіть число ще раз.");
                    i--; // Повторити введення для цього числа
                }
            }
            resultElement4.textContent = "\u0421\u0443\u043C\u0430 \u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B: ".concat(s);
        }
        else {
            alert("Кількість чисел повинна бути додатнім числом.");
        }
    });
}
//5 завдання-------------------------------------------------
// Отримуємо посилання на HTML-елементи
var nInput5 = document.getElementById("nInput5");
var resultElement5 = document.getElementById("result5");
// Отримуємо кнопку та додаємо обробник подій для введення кількості чисел та обчислення суми та добутку
var calculateButton5 = document.getElementById("calculateButton5");
if (calculateButton5 && resultElement5) {
    calculateButton5.addEventListener("click", function () {
        var n = parseInt(nInput5.value);
        if (!isNaN(n) && n > 0) {
            var s = 0;
            var p = 1;
            for (var i = 1; i <= n; i++) {
                var inputText = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E #".concat(i, ":"));
                if (inputText !== null) {
                    var a = parseFloat(inputText);
                    if (!isNaN(a) && a > 0) {
                        s += a;
                        p *= a;
                    }
                }
                else {
                    alert("Введення скасовано. Введіть число ще раз.");
                    i--; // Повторити введення для цього числа
                }
            }
            resultElement5.textContent = "\u0421\u0443\u043C\u0430 \u043F\u043E\u0437\u0438\u0442\u0438\u0432\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B: s = ".concat(s, ", \u0414\u043E\u0431\u0443\u0442\u043E\u043A \u043F\u043E\u0437\u0438\u0442\u0438\u0432\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B: p = ").concat(p);
        }
        else {
            resultElement5.textContent =
                "Кількість чисел повинна бути додатнім числом.";
        }
    });
}
//6 завдання-------------------------------------------------
// Отримуємо посилання на HTML-елементи
var xInput6 = document.getElementById("xInput6");
var resultElement6 = document.getElementById("result6");
// Отримуємо кнопку та додаємо обробник подій для введення x та обчислення суми
var calculateButton6 = document.getElementById("calculateButton6");
if (calculateButton6 && resultElement6) {
    calculateButton6.addEventListener("click", function () {
        var x = parseFloat(xInput6.value);
        if (!isNaN(x) && x > 0 && x <= 4) {
            var S = 0;
            var xs = x;
            var n = 7;
            for (var i = 1; i <= n; i++) {
                S += xs;
                xs *= x;
            }
            resultElement6.textContent = "\u0421\u0443\u043C\u0430 \u0447\u043B\u0435\u043D\u0456\u0432 \u0440\u044F\u0434\u0443: S = ".concat(S);
        }
        else {
            resultElement6.textContent =
                "Некоректне значення x. Введіть число в межах (0, 4].";
        }
    });
}
//7 завдання-------------------------------------------------
// Отримуємо посилання на HTML-елементи
var xInput7 = document.getElementById("xInput7");
var resultElement7 = document.getElementById("result7");
// Отримуємо кнопку та додаємо обробник подій для введення x та обчислення часткової суми
var calculateButton7 = document.getElementById("calculateButton7");
if (calculateButton7 && resultElement7) {
    calculateButton7.addEventListener("click", function () {
        var x = parseFloat(xInput7.value);
        var epsilon = 1e-4; // Точність ε = 10^-4
        if (!isNaN(x) && x > Math.PI / 3 && x <= Math.PI) {
            var S = 0;
            var k = 1;
            while (Math.abs(Math.cos(k * x) / k) > epsilon) {
                S += Math.cos(k * x) / k;
                k++;
            }
            resultElement7.textContent = "\u0427\u0430\u0441\u0442\u043A\u043E\u0432\u0430 \u0441\u0443\u043C\u0430: S = ".concat(S.toFixed(4), ", \u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0456\u0442\u0435\u0440\u0430\u0446\u0456\u0439: ").concat(k - 1);
        }
        else {
            resultElement7.textContent =
                "Некоректне значення x. Введіть x в межах (π/3, π].";
        }
    });
}
//8 завдання-------------------------------------------------
// Отримуємо посилання на HTML-елементи
var nInput8 = document.getElementById("nInput8");
var resultElement8 = document.getElementById("result8");
// Отримуємо кнопку та додаємо обробник подій для введення кількості чисел та обчислення суми та середнього арифметичного
var calculateButton8 = document.getElementById("calculateButton8");
if (calculateButton8 && resultElement8) {
    calculateButton8.addEventListener("click", function () {
        var n = parseInt(nInput8.value);
        if (!isNaN(n) && n > 0) {
            var sum = 0;
            var count = 0;
            for (var i = 0; i < n; i++) {
                var inputText = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E #".concat(i + 1, ":"));
                if (inputText !== null) {
                    var num = parseFloat(inputText);
                    if (!isNaN(num)) {
                        if (num < 0) {
                            sum += num;
                            count++;
                        }
                    }
                    else {
                        alert("Некоректне введення числа. Введіть число ще раз.");
                        i--; // Повторити введення для цього числа
                    }
                }
                else {
                    alert("Введення скасовано. Введіть число ще раз.");
                    i--; // Повторити введення для цього числа
                }
            }
            var average = 0;
            if (count > 0) {
                average = sum / count;
            }
            resultElement8.textContent = "\u0421\u0443\u043C\u0430 \u0432\u0456\u0434'\u0454\u043C\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B: ".concat(sum, ", \u0421\u0435\u0440\u0435\u0434\u043D\u0454 \u0430\u0440\u0438\u0444\u043C\u0435\u0442\u0438\u0447\u043D\u0435 \u0432\u0456\u0434'\u0454\u043C\u043D\u0438\u0445 \u0447\u0438\u0441\u0435\u043B: ").concat(average.toFixed(2));
        }
        else {
            resultElement8.textContent =
                "Кількість чисел повинна бути додатнім числом.";
        }
    });
}
