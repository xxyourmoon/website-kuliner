fetch("./test.json")
   .then((response) => response.json())
   .then(
      (json) =>
         (document.getElementById("ini-id-mahal").innerHTML = json.test.budi),
   );
