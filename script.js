// window.addEventListener("load", () => {
class Animal {
    constructor(name, description, categories, image) {
      this.name = name;
      this.description = description;
      this.categories = categories;
      this.image = image;
    }
}
let animals = [
  new Animal ("Lion", "Le roi de la savanne, voir même des animaux.", "1", 
    "https://proxymedia.woopic.com/api/v1/images/331%2Fle-roi-lion%7CLEROILIONXXW0089180_BAN1_2424_NEWTV_HD.jpg?format=512x&saveas=webp&saveasquality=70"),
  new Animal ("Aigle", "Notre grand et beau aigle yoral, concurrent direct du roi Lyon et ennemi de stuart little.", "2", 
    "https://www.monde-animal.fr/wp-content/uploads/2020/04/fiche-animale-monde-animal-aigle-royal-1.jpg"),
  new Animal ("Poisson-Clown", "Némo le Poisson-clown de Pixar.", "3", 
    "https://upload.wikimedia.org/wikipedia/commons/3/36/NemoAdvertisingIdahoAquarium.JPG")
  ] 
// console.log(animals);

displayAnimals(animals);
// Fonction pour afficher la liste des animaux
function displayAnimals(animals) {
  // Itération sur chaque animal dans le tableau
  for (let animal of animals) {
    // Récupération de l'élément HTML avec l'id "animal"
    let animalDiv = document.getElementById("animal");
    // Ajout de classes CSS pour le style de l'élément
    animalDiv.classList.add("container", "col-3", "img-fluid", "img-thumbnail");
    // Création d'une nouvelle div pour contenir les informations textuelles de l'animal
    let textDiv = document.createElement("div");
    textDiv.classList.add("d-flex", "row");
    // Création d'un élément image pour afficher la photo de l'animal
    let animalImage = document.createElement("img");
    animalImage.setAttribute("src", animal.image); // Définition de la source de l'image
    animalImage.setAttribute("alt", animal.name); // Définition du texte alternatif de l'image
    animalImage.className = "img-fluid"; // Ajout de la classe CSS pour rendre l'image réactive
    animalImage.setAttribute("height", "300px"); // Définition de la hauteur de l'image
    animalImage.setAttribute("width", "400px"); // Définition de la largeur de l'image
    // Création d'un élément h3 pour afficher le nom de l'animal
    let animalName = document.createElement("h3");
    animalName.textContent = animal.name; // Définition du texte du nom de l'animal
    // Création d'un élément h4 pour afficher la description de l'animal
    let animalDescription = document.createElement("h4");
    animalDescription.textContent = animal.description; // Définition du texte de la description de l'animal
    // Création d'un élément h5 pour afficher la catégorie de l'animal
    let animalCategories = document.createElement("h5");
    // Vérification de la catégorie de l'animal et affichage du type correspondant
    if (animal.categories === "1") {
      animalCategories.innerText = "Type : Terrestre";
    } else if (animal.categories === "2") {
      animalCategories.innerText = "Type : Volatile";
    } else if (animal.categories === "3") {
      animalCategories.innerText = "Type : Aquatique";
    } else {
      animalCategories.innerText = "Catégorie inconnue."; // Valeur par défaut si aucune catégorie ne correspond
    }
    // Ajout de l'image de l'animal à l'élément principal
    animalDiv.appendChild(animalImage);
    // Ajout de la div contenant les informations textuelles à l'élément principal
    animalDiv.appendChild(textDiv); 
    // Ajout des informations textuelles à la div dédiée
    textDiv.appendChild(animalName);
    textDiv.appendChild(animalDescription);
    textDiv.appendChild(animalCategories);
  }
}

  function filterAnimal() {
     let animalDiv = document.getElementById("animal");
      animalDiv.classList.add("container", "col-3", "img-fluid", "img-thumbnail")      
    animalDiv.innerHTML = "";
     const valueAnimal = document.getElementById("animalFilter");
     if (valueAnimal.value == "select") {
      animalDiv.innerHTML = "";
    } else {
      if (valueAnimal.value === "all") {
        displayAnimals(animals);
      } else {
        if (valueAnimal.value === "1" || valueAnimal.value === "terrestre") {
          const filterAnimal = animals.filter((terreste) => {
            return terreste.categories === "1";
          });
          displayAnimals(filterAnimal)
        } else {
          if (valueAnimal.value === "2" || valueAnimal.value === "volatile") {
            const filterAnimal = animals.filter((volatile) => {
              return volatile.categories === "2";
            });
            displayAnimals(filterAnimal)
          } else {
            if (valueAnimal.value === "3" || valueAnimal.value === "aquatique") {
            const filterAnimal = animals.filter((aquatique) => {
              return aquatique.categories === "3";
            });
            displayAnimals(filterAnimal)
            }
          }
        }
      }
    }
  }
  animalFilter.addEventListener('change', filterAnimal);
  // let categoryName = ["terrestre", "volatile", "aquatique"];
  
  let form = document.getElementById("addAnimalForm");
  
  //Event listener
  form.addEventListener('submit', function(event) {
    // Event.target represente l'element sur lequel a été déclenché l'événement
    //console.log(event.target);
    
    //Je pars du principe que le formulaire est valide
    let valid = true;
    // Empêche l'envoi du formulaire
    event.preventDefault();
  
    //Recupération des champs
    const name = document.getElementById('animalName');
    const description = document.getElementById('animalDescription');
    const categories = document.getElementById('animalCategories');
    const image = document.getElementById('animalImage');
    
    //Validation / erreurs
    

    //Validation name
    if (name.value === "") {
      //Ajouter du texte dans l'erreur du champ
      document.getElementById("nameError").innerText = "Name manquant";
      //A chaque erreur, le formulaire devient invalide
      valid = false;
    } else {
      //Il n'y pas ou l'erreur a été corrigée
      document.getElementById("nameError").innerText = "";
    }
    //Validation description
    if (description.value === "") {
      //Ajouter du texte dans l'erreur du champ
      document.getElementById("descriptionError").innerText = "Description manquante";
      //A chaque erreur, le formulaire devient invalide
      valid = false;
    } else {
      //Il n'y pas ou l'erreur a été corrigée
      document.getElementById("descriptionError").innerText = "";
    }
    // Validation image
    if (image.value === "") {
      //Ajouter du texte dans l'erreur du champ
      document.getElementById("imageError").innerText = "Image manquante";
      //A chaque erreur, le formulaire devient invalide
      valid = false;
    } else {
      //Il n'y pas ou l'erreur a été corrigée
      document.getElementById("imageError").innerText = "";
    }
    // Fin de validation
    //Validation catégories
    // Liste des catégories valides
    let validCategories = ["1", "2", "3", "terrestre", "volatile", "aquatique","Terrestre", "Volatile", "Aquatique"];
      
    // Validation du champ category
    if (categories.value === "") {
      document.getElementById("categoriesError").innerText = "Catégorie manquante.";
      valid = false;
    } else {
      if (!validCategories.includes(categories.value)) {
        valid = false;
        document.getElementById("categoriesError").innerText = "Catégorie inconnue. Veuillez entrer 1 (Terrestre), 2 (Volatile) ou 3 (Aquatique).";
      }
       else {
      // Normaliser les catégories textuelles vers numériques
      if (categories.value === "terrestre" || categories.value === "Terrestre") {
        categories.value = "1";
      } 
      if (categories.value === "volatile" || categories.value === "Volatile") {
        categories.value = "2";
      } 
      if (categories.value === "aquatique" || categories.value === "Aquatique") {
        categories.value = "3";
      }
      document.getElementById("categoriesError").innerText = "";
    }
    }
    
    // si il n'y a pas d'erreur
    if (valid) {
      //Créer une voiture avec les champs du formulaire
      let addAnimal = new Animal(
        name.value, 
        description.value, 
        categories.value, 
        image.value
      );
      //Ajouter mes données
      console.log(addAnimal);
      animals.push(addAnimal);
      //Mettre a jour l'affichage des données
      // displayAnimals(animals);
      filterAnimal()
      document.getElementById("addAnimalForm").reset();
    }
  });
//})