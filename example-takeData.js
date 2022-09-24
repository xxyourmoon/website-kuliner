fetch("./data/index.json")
  .then((response) => response.json())
  .then((json) => {
    let namaToko = json.kuliner.map((e) => {
      // ngelepas object dari array kuliner
      return e.toko; // mengembalikan nilai object yang sudah di keluarkan dengan property toko
    });
    console.log(namaToko);
  });

// UNTUK OUTPUT BISA DI LIHAT DI CONSOLE GUGEL
