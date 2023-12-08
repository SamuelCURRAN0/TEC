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
        this.afficher();

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
        let divcontainerCarte = document.createElement("div");
        divcontainerCarte.className = "carte";
        this.appendChild(divcontainerCarte);

            let image = document.createElement("img");
            image.setAttribute("src", this._pathImage);
            divcontainerCarte.appendChild(image);

            let divcontainerTexte = document.createElement("div");
            divcontainerTexte.className = "texte";
            divcontainerCarte.appendChild(divcontainerTexte);

                let containerTitre = document.createElement("div");
                containerTitre.className = "containerTitre";
                divcontainerTexte.appendChild(containerTitre);
                    let titre = document.createElement("h2");
                    titre.textContent = this._titre;
                    containerTitre.appendChild(titre);
                
                    let choixCorrection = document.createElement("h3");
                    choixCorrection.className = "choixCorrection";
                    containerTitre.appendChild(choixCorrection);
                    if (this._choixCorrection == true) {
                        choixCorrection.textContent = "✅";
                    } else {
                        choixCorrection.textContent = "❌";
                    }

                let veracite = document.createElement("h3");
                veracite.className = "veracite";
                if (this._veracite == true) {
                    veracite.textContent = "VRAI";
                } else {
                    veracite.textContent = "FAUX";
                }
                divcontainerTexte.appendChild(veracite);

                let description = document.createElement("p");
                description.textContent = this._description;
                divcontainerTexte.appendChild(description);
        
        // Ajout de l'événement
        this.addEventListener('click', () => {
            window.location.href = this._lien;
        });
    }

} window.customElements.define("carte-savoir", CartesDeSavoir);