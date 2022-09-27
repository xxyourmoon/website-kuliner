// function getImage() {
//   return fetch("./data/index.json")
//     .then((response) => response.json())
//     .then((json) => {
//         let gambarMakanan = json.kuliner.map((e) => {
//             if (e.gambar[0] === undefined) {
//                 return 'None'
//             } else {
//                 return e.gambar[0]
//             }
//         })
//         return gambarMakanan
//     });
// }

// function runProgram() {
//     getImage()
//         .then((e) => {
            
//         })
// }

// runProgram()

//   let namaToko = json.kuliner.map((e) => {
//     // ngelepas object dari array kuliner
//     return e.toko; // mengembalikan nilai object yang sudah di keluarkan dengan property toko
//   });
//   console.log(namaToko);

// UNTUK OUTPUT BISA DI LIHAT DI CONSOLE GUGEL


$.ajax({
    url: "./data/index.json",
    success: results => {
        const dataKuliner = results.kuliner;
        let cards = ''
        dataKuliner.forEach((e) => {
            cards += `<li>
                        <figure>
                            <img src="${e.gambar[0]}"/>
                            <figcaption>
                                <h3>${e.toko}</h3>
                            </figcaption>
                        </figure>
                    </li>`;
        });
        $('ul.grid-makananMantab').html(cards)
    },
    error: (e) => {
        console.log(e)
    }
})