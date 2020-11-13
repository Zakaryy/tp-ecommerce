$(document).ready(function () {

  const getButton = $(".get-request");
  const postButton = $(".post-request");
  const deleteButton = $(".delete-request");
  const tableau = $(".table");
  const select = $("#select-delete");

  const formulaireNomProduit = $("#Nom-produit");
  const formulaireCategorieProduit = $("#Categorie");
  const formulairePrixProduit = $("#Prix");


  getButton.click(function(){
    $.get("http://localhost:3000/products").done(data => {
      
    let elementListe = [];  
      data.forEach(element => {
        
        const nomProduit = JSON.stringify(element["name"]);
        const categorieProduit = JSON.stringify(element["categorie"]);
        const prixProduit = JSON.stringify(element["prix"]);
        const identifiant = element["id"];

        console.log(identifiant);

        let newLine = "<tr scope='row' class = 'productRow'><td>" + nomProduit + "</td><td>" + categorieProduit + "</td><td>" + prixProduit + "</td></tr>";   
        tableau.append(newLine);

        //ajouter a la liste deroulante    
        let option = document.createElement("option");
        option.setAttribute("value", identifiant);
        option.innerHTML =  nomProduit;
        select.append(option);
      });
    });
  });

  postButton.click(function(){
    $.ajax({
      url: "http://localhost:3000/products",
      method: "POST",
      dataType: "json",
      data: JSON.stringify({name: formulaireNomProduit.val(), categorie: formulaireCategorieProduit.val(), prix: formulairePrixProduit.val()})
    })
  })
  
  deleteButton.click(function(){
    $.ajax({
      url: "http://localhost:3000/products",
      method: "DELETE" 
    })
    console.log(select);
  })
});