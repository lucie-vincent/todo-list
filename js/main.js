// interface Document : représente page web chargée dans navigateur
// voir DOM - arbre du DOM
// la méthode Document querySelector() renvoie le 1er Element qui correspond
// au sélécteur spécifié (ici #btn)
const addBtn = document.querySelector("#btn");
const taskCard = document.querySelector(".todoCard");
const taskContainer = document.querySelector("#todoCards");

function addTask() {
    // la méthode cloneNode() renvoie une copie du noeud sur lequel 
    // elle a été appelée 
    // true : les enfants du noeud doivent aussi être copié /
    // false : seul le noeud spécifié doit l'être
    const newTask = taskCard.cloneNode(true)    //clone la todoCard (taskCard)
    
    // on assigne à la copie de la card le textarea
    const newTextArea = newTask.querySelector(".task")
    
    // on assigne le text de la nouvelle card en "New Task"
    newTextArea.value = "New Task";

    // on ajoute la nouvelle task créée en tant qu'enfant du taskContainer
    // qui est le #todoCards (le contenant des cards)
    // !! on ajoute la nouvelle carte dans le DOM
    taskContainer.appendChild(newTask)
}

// EventTarget = interface DOM implémentée par des objets qui peuvent 
// recevoir des évènements 
// la méthode addEventListener() de EvenTarget attache une fonction à appeler
// à chaque fois que l'évènement spécifié est envoyé à la cible
// syntaxe : addEventListener(type, listener)
// type = chaine qui représente le type d'évenement
// listener = objet qui recevera un évènement lsq évènement spécifié se 
// produit => ici, argument est une function 
addBtn.addEventListener('click', addTask);


