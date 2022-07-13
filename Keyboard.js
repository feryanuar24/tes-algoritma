// angka 1 - 9 = 1 2 3 4 5 6 7 8 9 = 9 bilangan
var angka_1_sampai_9 = 9;

// angka 10 - 19 = 1 0 1 1 1 2 1 3 1 4 1 5 1 6 1 7 1 8 1 9 = 20 bilangan
// angka 10 - 99 = (10 - 19) + (20 - 29) + (30 - 39) + (40 - 49) + (50 - 59) + (60 - 69) + (70 - 79) + (80 - 89) + (90 - 99)
var angka_10_sampai_99 = 180;

// angka 100 - 109 = 1 0 0 1 0 1 1 0 2 1 0 3 1 0 4 1 0 5 1 0 6 1 0 7 1 0 8 1 0 9 = 30 bilangan
// angka 100 - 199 = (100 - 109) + (110 - 119) + (120 - 129) + ... + (180 - 189) + (190 - 199)
var angka_100_sampai_199 = 300;
var angka_200_sampai_299 = 300;
var angka_300_sampai_399 = 300;

var angka_1_sampai_399 =
  angka_1_sampai_9 +
  angka_10_sampai_99 +
  angka_100_sampai_199 +
  angka_200_sampai_299 +
  angka_300_sampai_399;
console.log("Suku ke: " + angka_1_sampai_399 + " adalah 699->9");

// bilangan setelah 399
// 4 0 0 4 0 1 4 0 2 4 0 3 4 0 4 0 5 4 0 6 4
var karakter_1111 = angka_1_sampai_399 + 22;

// output
console.log(
  "Angka yang diketik Dito di karakter ke: " + karakter_1111 + " adalah 4"
);
