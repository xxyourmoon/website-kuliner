fetch("./data/index.json")
  .then((response) => response.json())
  .then((json) => {
    let array = [];
    json.kuliner.forEach((result) => {
      return array.push(result.toko);
    });
    for (let i = 0; i <= array.length; i++) {
      //console.log(i);
      document.getElementById(`nama-toki${i}`).innerHTML = array[i];
    }
    for (let i = 0; i <= array.length; i++) {
      //console.log(i);
      document.getElementById(`nama-toko${i}`).innerHTML = array[i];
    }
  });
//JGN SAMPE LUPA FATIH
//   const nodeList = document.querySelectorAll(".example");
// let array = ["test1", "test2", "test3", "test4", "test5"];
// for (let i = 0; i < nodeList.length; i++) {
//   nodeList[i].style.backgroundColor = "red";
//   nodeList[i].innerHTML = array[i];
// }
