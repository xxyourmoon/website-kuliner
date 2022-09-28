fetch("./data/index.json")
  .then((response) => response.json())
  .then((json) => {
    let array = [];
    let arrayAlamat = [];
    let arrayImage = [];
    let arrayJamBuka = [];
    let arrayNoTelp = [];
    let dataRekomendasi = [];
    let dataMakanan = [];
    let dataMinuman = [];
    let arrayMaps = [];
    json.kuliner.forEach((result) => {
      let arrayRekomendasi = [];
      let arrayMakanan = [];
      let arrayMinuman = [];
      array.push(result.toko);
      arrayAlamat.push(result.lokasi);
      arrayImage.push(result.gambar[0]);
      arrayJamBuka.push(result.jamBuka);
      arrayNoTelp.push(result.noTelpn);
      arrayMaps.push(result.iframe);
      if (result.harga.rekomendasi[0] === "-") {
        arrayRekomendasi.push("Tidak DiKetahui");
      } else {
        for (let x = 0; x < result.harga.rekomendasi.length; x++) {
          arrayRekomendasi.push(result.harga.rekomendasi[x]);
          if (x != result.harga.rekomendasi.length - 1) {
            arrayRekomendasi.push("<br>");
          }
        }
      }
      if (result.harga.makanan[0] === "-") {
        arrayMakanan.push("Tidak DiKetahui");
      } else {
        for (let x = 0; x < result.harga.makanan.length; x++) {
          arrayMakanan.push(result.harga.makanan[x]);
          if (x != result.harga.makanan.length - 1) {
            arrayMakanan.push("<br>");
          }
        }
      }
      if (result.harga.minuman[0] === "-") {
        arrayMinuman.push("Tidak DiKetahui");
      } else {
        for (let x = 0; x < result.harga.minuman.length; x++) {
          arrayMinuman.push(result.harga.minuman[x]);
          if (x != result.harga.minuman.length - 1) {
            arrayMinuman.push("<br>");
          }
        }
      }
      dataRekomendasi.push(arrayRekomendasi);
      dataMakanan.push(arrayMakanan);
      dataMinuman.push(arrayMinuman);
    });
    let namaToko = document.querySelectorAll("#nama-toko");
    let namaTokoPopupCard = document.querySelectorAll("#nama-toko-popupcard");
    let alamatPopupCard = document.querySelectorAll("#alamat-popupcard");
    let imagePopupCard = document.querySelectorAll("#image-popupcard");
    let jambukaPopupCard = document.querySelectorAll("#jambuka-popupcard");
    let noTelpPopupCard = document.querySelectorAll("#notelp-popupcard");
    let rekomendasiPopupCard = document.querySelectorAll(
      "#rekomendasi-popupcard",
    );
    let makananPopupCard = document.querySelectorAll("#makanan-popupcard");
    let minumanPopupCard = document.querySelectorAll("#minuman-popupcard");
    let mapsPopupCard = document.querySelectorAll("#maps-popupcard");
    for (let i = 0; i < array.length; i++) {
      namaToko[i].innerHTML = array[i];
    }
    for (let i = 0; i < array.length; i++) {
      namaTokoPopupCard[i].innerHTML = array[i];
      alamatPopupCard[i].innerHTML = arrayAlamat[i];
      imagePopupCard[i].src = arrayImage[i];
      jambukaPopupCard[i].innerHTML = `${arrayJamBuka[i]} WIB`;
      noTelpPopupCard[i].innerHTML = arrayNoTelp[i];
      rekomendasiPopupCard[i].innerHTML = dataRekomendasi[i].join("");
      makananPopupCard[i].innerHTML = dataMakanan[i].join("");
      minumanPopupCard[i].innerHTML = dataMinuman[i].join("");
      mapsPopupCard[i].src = arrayMaps[i];
    }
  });
//JGN SAMPE LUPA FATIH
//   const nodeList = document.querySelectorAll(".example");
// let array = ["test1", "test2", "test3", "test4", "test5"];
// for (let i = 0; i < nodeList.length; i++) {
//   nodeList[i].style.backgroundColor = "red";
//   nodeList[i].innerHTML = array[i];
// }
