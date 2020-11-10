$(document).ready(function () {

  const getButton = $(".get-request");
  const postButton = $(".post-request");
  const tableau = $(".table");


  getButton.click(function(){
    $.get("http://localhost:3000/products").done(data => {
      data.forEach(element => {
        
        const nomProduit = JSON.stringify(element["name"]);
        const categorieProduit = JSON.stringify(element["categorie"]);
        const prixProduit = JSON.stringify(element["prix"]);

        let newLine = "<tr scope='row' class = 'productRow'><td>" + nomProduit + "</td><td>" + categorieProduit + "</td><td>" + prixProduit + "</td></tr>";   

        tableau.append(newLine);
      });
    });
  });

  postButton.click(function(){
    $.post("http://localhost:3000/products", data => {
        console.log(data);
      });
    });
});