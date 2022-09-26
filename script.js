// fetch("./data/index.json")
//   .then((response) => response.json())
//   .then((json) => {
//     let namaToko = json.kuliner.map((e) => {
//       // ngelepas object dari array kuliner
//       return e.toko; // mengembalikan nilai object yang sudah di keluarkan dengan property toko
//     });
//     // namaToko.forEach(element => {
      
//     //   console.log(element);
//     // });
//   });
fetch("./data/index.json")
  .then((response) => response.json())
  .then((json) => {
    console.table(json.kuliner)
  });
