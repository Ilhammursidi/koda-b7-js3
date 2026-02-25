function diKembalikan(totalUang,uangKembali) {
    let kembalian =totalUang - uangKembali;
    let nominal = [50000, 10000, 5000, 2000, 1000];
    for (let i = 0; i < nominal.length; i++) {
        while (kembalian >= nominal[i]) {
            console.log(nominal[i]);
            kembalian -= nominal[i];
        }
    }
}

diKembalikan(50000,38000);

