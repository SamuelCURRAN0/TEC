class CartesDeSavoir extends HTMLElement 
{
    // ATTRIBUTS
    _pathImage; // Chemin de l'image
    _titre; // Titre en gras de la carte 
    _description; // Description associée à la carte
    _lien; // Lien web vers la source de l'information
    _veracite; // Véracité de l'information
    _choixCorrection; // Choix de l'utilisateur

    // CONSTRUCTEUR
    constructor(pathImage, titre, description, lien, veracite, choixCorrection) 
    {
        super();
        this._pathImage = pathImage;
        this._titre = titre;
        this._description = description;
        this._lien = lien;
        this._veracite = veracite;
        this._choixCorrection = choixCorrection;

    }
    // ENCAPSULATION
    get _pathImage() {
        return this._pathImage;
    }

    set _pathImage(value) {
        this._pathImage = value;
    }

    get _titre() {
        return this._titre;
    }
    
    set _titre(value) {
        this._titre = value;
    }
    
    get _description() {
        return this._description;
    }
    
    set _description(value) {
        this._description = value;
    }
    
    get _lien() {
        return this._lien;
    }
    
    set _lien(value) {
        this._lien = value;
    }

    get _veracite() {
        return this._veracite;
    }

    set _veracite(value) {
        this._veracite = value;
    }

    get _choixCorrection() {
        return this._choixCorrection;
    }

    set _choixCorrection(value) {
        this._choixCorrection = value;
    }

    // METHODES

    afficher(){
        // Création des éléments
        let image = document.createElement("img");
        let titre = document.createElement("h3");
        let description = document.createElement("p");
        let lien = document.createElement("a");
        let veracite = document.createElement("p");
        let choixCorrection = document.createElement("p");

        // Ajout des classes
        image.classList.add("image");
        titre.classList.add("titre");
        description.classList.add("description");
        lien.classList.add("lien");
        veracite.classList.add("veracite");
        choixCorrection.classList.add("choix");

        // Ajout des attributs
        image.setAttribute("src", this._pathImage);
        lien.setAttribute("href", this._lien);

        // Ajout des éléments au DOM
        this.appendChild(image);
        this.appendChild(titre);
        this.appendChild(description);
        this.appendChild(lien);
        this.appendChild(veracite);
        this.appendChild(choixCorrection);

        // Ajout du texte aux éléments
        titre.textContent = this._titre;
        description.textContent = this._description;

        if (this._veracite == true) {
            veracite.textContent = "VRAI";
        } else {
            veracite.textContent = "FAUX";
        }

        if (this._choixCorrection == true) {
            choixCorrection.textContent = "✅";
        } else {
            choixCorrection.textContent = "❌";
        }

        // Ajout de l'événement
        this.addEventListener('click', () => {
            window.location.href = this._lien;
        });

        // Ajout de la carte au DOM
        //document.getElementById("cartes").appendChild(this);
    }

} window.customElements.define("carte-savoir", CartesDeSavoir);