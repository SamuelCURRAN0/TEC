class CartesDeSavoir extends HTMLElement 
{
    // ATTRIBUTS
    _pathImage; // Chemin de l'image
    _titre; // Titre en gras de la carte 
    _description; // Description associée à la carte
    _lien; // Lien web vers la source de l'information

    // CONSTRUCTEUR
    constructor(pathImage, titre, description, lien) 
    {
        this._pathImage = pathImage;
        this._titre = titre;
        this._description = description;
        this._lien = lien; 

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

}