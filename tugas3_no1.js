const prompt = require('prompt-sync')({sigint: true});

const x = prompt('Masukkan Bilangan Genap: ');

if (x < 0) {
    console.log('Tidak bisa input bilangan negatif');
} else if ((x % 2) == 1) {
    console.log('Tidak bisa input bilangan ganjil');
} else if ((x % 2) == 0) {
    console.log(Math.sqrt(x));
} else {
    console.log('Input Tidak Valid');
}