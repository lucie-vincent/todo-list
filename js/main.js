// interface Document : représente page web chargée dans navigateur
// voir DOM - arbre du DOM
// la méthode Document querySelector() renvoie le 1er Element qui correspond
// au sélécteur spécifié (ici #btn)
const addBtn = document.querySelector("#btn");
const taskCard = document.querySelector(".todoCard");
const taskContainer = document.querySelector("#todoCards");
// const delBtn = document.querySelector(".delBtn");

function addTask() {
    // la méthode cloneNode() renvoie une copie du noeud sur lequel 
    // elle a été appelée 
    // true : les enfants du noeud doivent aussi être copié /
    // false : seul le noeud spécifié doit l'être
    //clone la todoCard (taskCard)
    const newTask = taskCard.cloneNode(true);    
    
    // on ajoute le bouton dans la fct ajout de card pour faire fonctionner
    // les boutons de suppressions dans les nvlles cards
    // const newDelBtn = newTask.querySelector(".delBtn");
    // console.log(newDelBtn);

    // on récupère la nouvelle textarea 
    // puis on assigne le text de la nouvelle card en "New Task"
    const newTextArea = newTask.querySelector("textarea.task");
    newTextArea.value = "New Task";

    // on ajoute écouteur d'événement sur le nouveau bouton de la nouvelle
    // tache
    //newDelBtndelBtn.addEventListener('click', function() {
        //deleteTask(newTask)
    //});

    // on ajoute la nouvelle task créée en tant qu'enfant du taskContainer
    // !! on ajoute la nouvelle carte dans le DOM parce le taskContainer fait déjà partie du DOM
    taskContainer.appendChild(newTask);
}


// function deleteTask(task) {
//     task.remove();  // methode qui retire élément du DOM
// }

// // EventTarget = interface DOM implémentée par des objets qui peuvent 
// // recevoir des évènements 
// // la méthode addEventListener() de EvenTarget attache une fonction à appeler
// // à chaque fois que l'évènement spécifié est envoyé à la cible
// // syntaxe : addEventListener(type, listener)
// // type = chaine qui représente le type d'évenement
// // listener = objet qui recevera un évènement lsq évènement spécifié se 
// // produit => ici, argument est une function 
addBtn.addEventListener('click', addTask);
// delBtn.addEventListener('click', deleteTask);


