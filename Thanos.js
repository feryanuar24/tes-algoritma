// Hari ke-1: ada 1 penduduk
// Hari ke-2: ada 3 penduduk = (1 * 3) -> Dr Strange muncul
// Hari ke-3: ada 1 penduduk = (3 / 2) -> Thanos muncul
// Hari ke-4: ada 3 penduduk = (1 * 3) -> Dr Strange muncul
// Hari ke-5: ada 9 penduduk = (3 * 3) -> Dr Strange muncul
// Hari ke-6: ada 4 penduduk = (9 / 2) -> Thanos muncul

// Beda hari ke-1 dengan hari ke-2 = 3
// Beda hari ke-3 dengan hari ke-6 = 4.5 -> 4 (Dibulatkan ke bawah)

// Diketahui
var soal = 50;
var kelipatan = 3;
var bedaKelipatan = 4.5;

// Jawab
var totalKelipatan = soal / kelipatan;
var hari_48 = bedaKelipatan ** Math.floor(totalKelipatan);
var hari_50 = Math.floor(hari_48) * 3 ** 2;

// Output
console.log(Math.floor(hari_48));
