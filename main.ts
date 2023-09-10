//1 завдання-------------------------------------------------
function calculateA(x: number, y: number): number {
  const numerator = Math.sqrt(Math.abs(x - 1)) - Math.sqrt(Math.abs(y));
  const denominator = 1 + x ** 2 / 2 + y ** 2 / 4;
  return numerator / denominator;
}

const xInput1 = document.getElementById("xInput1") as HTMLInputElement;
const yInput1 = document.getElementById("yInput1") as HTMLInputElement;
const calculateButton1 = document.getElementById("calculateButton1");
const resultElement1 = document.getElementById("result1");

if (calculateButton1 && xInput1 && yInput1 && resultElement1) {
  calculateButton1.addEventListener("click", () => {
    const x = parseFloat(xInput1.value);
    const y = parseFloat(yInput1.value);

    if (!isNaN(x) && !isNaN(y)) {
      const result = calculateA(x, y);
      resultElement1.textContent = `Результат: a = ${result}`;
    } else {
      resultElement1.textContent =
        "Некоректні вхідні дані. x і y повинні бути числами.";
    }
  });
}

//2 завдання-------------------------------------------------

// Функція для обчислення значення функції в залежності від x
function calculateY(x: number): number {
  if (x < 0) {
    return Math.pow(x, 3) - 1.5;
  } else if (x >= Math.PI / 2) {
    return Math.pow(x, 2) + 2 * x;
  } else {
    return Math.cos(x) + 0.2;
  }
}

// Отримуємо посилання на HTML-елементи
const xInput2 = document.getElementById("xInput2") as HTMLInputElement;
const resultElement2 = document.getElementById("result2");

// Отримуємо кнопку та додаємо обробник подій для обчислення та виведення значення y
const calculateButton2 = document.getElementById("calculateButton2");
if (calculateButton2 && resultElement2) {
  calculateButton2.addEventListener("click", () => {
    const x = parseFloat(xInput2.value);

    if (!isNaN(x)) {
      const y = calculateY(x);
      resultElement2.textContent = `Результат: y = ${y.toFixed(2)}`;
    } else {
      resultElement2.textContent = "Некоректне значення x. Введіть число.";
    }
  });
}

//3 завдання-------------------------------------------------

// Отримуємо посилання на HTML-елементи
const xInput3 = document.getElementById("xInput3") as HTMLInputElement;
const yInput3 = document.getElementById("yInput3") as HTMLInputElement;
const resultElement3 = document.getElementById("result3");

// Отримуємо кнопку та додаємо обробник подій для визначення, у яке коло потрапляє точка
const determineButton3 = document.getElementById("determineButton3");
if (determineButton3 && resultElement3) {
  determineButton3.addEventListener("click", () => {
    const x = parseFloat(xInput3.value);
    const y = parseFloat(yInput3.value);

    if (!isNaN(x) && !isNaN(y)) {
      let k = 0;

      const distanceToCenter = x ** 2 + y ** 2;

      if (distanceToCenter <= 4) {
        k = 1;
      } else if (distanceToCenter <= 16) {
        k = 2;
      }

      resultElement3.textContent = `Точка потрапляє у коло ${k}`;
    } else {
      resultElement3.textContent =
        "Некоректні координати точки. Введіть числа.";
    }
  });
}

//4 завдання-------------------------------------------------

// Отримуємо посилання на HTML-елементи
const nInput4 = document.getElementById("nInput4") as HTMLInputElement;
const resultElement4 = document.getElementById("result4");

// Отримуємо кнопку та додаємо обробник подій для введення кількості чисел та сумування
const sumButton4 = document.getElementById("sumButton4");
if (sumButton4 && resultElement4) {
  sumButton4.addEventListener("click", () => {
    const n = parseInt(nInput4.value);

    if (!isNaN(n) && n > 0) {
      let s = 0;

      for (let i = 0; i < n; i++) {
        const inputValue = prompt(`Введіть число #${i + 1}:`);

        if (inputValue !== null) {
          const a = parseFloat(inputValue);

          if (!isNaN(a)) {
            s += a;
          } else {
            alert("Некоректне введення числа. Введіть число ще раз.");
            i--; // Повторити введення для цього числа
          }
        } else {
          alert("Введення скасовано. Введіть число ще раз.");
          i--; // Повторити введення для цього числа
        }
      }

      resultElement4.textContent = `Сума введених чисел: ${s}`;
    } else {
      alert("Кількість чисел повинна бути додатнім числом.");
    }
  });
}

//5 завдання-------------------------------------------------

// Отримуємо посилання на HTML-елементи
const nInput5 = document.getElementById("nInput5") as HTMLInputElement;
const resultElement5 = document.getElementById("result5");

// Отримуємо кнопку та додаємо обробник подій для введення кількості чисел та обчислення суми та добутку
const calculateButton5 = document.getElementById("calculateButton5");
if (calculateButton5 && resultElement5) {
  calculateButton5.addEventListener("click", () => {
    const n = parseInt(nInput5.value);

    if (!isNaN(n) && n > 0) {
      let s = 0;
      let p = 1;

      for (let i = 1; i <= n; i++) {
        const inputText = prompt(`Введіть число #${i}:`);

        if (inputText !== null) {
          const a = parseFloat(inputText);

          if (!isNaN(a) && a > 0) {
            s += a;
            p *= a;
          }
        } else {
          alert("Введення скасовано. Введіть число ще раз.");
          i--; // Повторити введення для цього числа
        }
      }

      resultElement5.textContent = `Сума позитивних чисел: s = ${s}, Добуток позитивних чисел: p = ${p}`;
    } else {
      resultElement5.textContent =
        "Кількість чисел повинна бути додатнім числом.";
    }
  });
}

//6 завдання-------------------------------------------------

// Отримуємо посилання на HTML-елементи
const xInput6 = document.getElementById("xInput6") as HTMLInputElement;
const resultElement6 = document.getElementById("result6");

// Отримуємо кнопку та додаємо обробник подій для введення x та обчислення суми
const calculateButton6 = document.getElementById("calculateButton6");
if (calculateButton6 && resultElement6) {
  calculateButton6.addEventListener("click", () => {
    const x = parseFloat(xInput6.value);

    if (!isNaN(x) && x > 0 && x <= 4) {
      let S = 0;
      let xs = x;
      const n = 7;

      for (let i = 1; i <= n; i++) {
        S += xs;
        xs *= x;
      }

      resultElement6.textContent = `Сума членів ряду: S = ${S}`;
    } else {
      resultElement6.textContent =
        "Некоректне значення x. Введіть число в межах (0, 4].";
    }
  });
}

//7 завдання-------------------------------------------------

// Отримуємо посилання на HTML-елементи
const xInput7 = document.getElementById("xInput7") as HTMLInputElement;
const resultElement7 = document.getElementById("result7");

// Отримуємо кнопку та додаємо обробник подій для введення x та обчислення часткової суми
const calculateButton7 = document.getElementById("calculateButton7");
if (calculateButton7 && resultElement7) {
  calculateButton7.addEventListener("click", () => {
    const x = parseFloat(xInput7.value);
    const epsilon = 1e-4; // Точність ε = 10^-4

    if (!isNaN(x) && x > Math.PI / 3 && x <= Math.PI) {
      let S = 0;
      let k = 1;

      while (Math.abs(Math.cos(k * x) / k) > epsilon) {
        S += Math.cos(k * x) / k;
        k++;
      }

      resultElement7.textContent = `Часткова сума: S = ${S.toFixed(
        4
      )}, Кількість ітерацій: ${k - 1}`;
    } else {
      resultElement7.textContent =
        "Некоректне значення x. Введіть x в межах (π/3, π].";
    }
  });
}

//8 завдання-------------------------------------------------

// Отримуємо посилання на HTML-елементи
const nInput8 = document.getElementById("nInput8") as HTMLInputElement;
const resultElement8 = document.getElementById("result8");

// Отримуємо кнопку та додаємо обробник подій для введення кількості чисел та обчислення суми та середнього арифметичного
const calculateButton8 = document.getElementById("calculateButton8");
if (calculateButton8 && resultElement8) {
  calculateButton8.addEventListener("click", () => {
    const n = parseInt(nInput8.value);

    if (!isNaN(n) && n > 0) {
      let sum = 0;
      let count = 0;

      for (let i = 0; i < n; i++) {
        const inputText = prompt(`Введіть число #${i + 1}:`);

        if (inputText !== null) {
          const num = parseFloat(inputText);

          if (!isNaN(num)) {
            if (num < 0) {
              sum += num;
              count++;
            }
          } else {
            alert("Некоректне введення числа. Введіть число ще раз.");
            i--; // Повторити введення для цього числа
          }
        } else {
          alert("Введення скасовано. Введіть число ще раз.");
          i--; // Повторити введення для цього числа
        }
      }

      let average = 0;
      if (count > 0) {
        average = sum / count;
      }

      resultElement8.textContent = `Сума від'ємних чисел: ${sum}, Середнє арифметичне від'ємних чисел: ${average.toFixed(
        2
      )}`;
    } else {
      resultElement8.textContent =
        "Кількість чисел повинна бути додатнім числом.";
    }
  });
}
