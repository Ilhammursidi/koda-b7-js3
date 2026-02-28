let totalUang = 50000;
let totalBeli = 24000;
let kembalian = totalUang - totalBeli;
let nominal = [50000, 10000, 5000, 2000, 1000];

if (kembalian < 0) {
  console.log("Uang tidak cukup");
} else {
  console.log("Kembalian: " + kembalian);
}

for (let i = 0; i < nominal.length; i++) {
  let jumlahLembar = Math.floor(kembalian / nominal[i]);
  if (jumlahLembar > 0) {
    console.log(nominal[i] + " " + jumlahLembar + " lembar");
    kembalian -= nominal[i] * jumlahLembar;
  }
}
