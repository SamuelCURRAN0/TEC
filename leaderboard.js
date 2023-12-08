class leaderboard extends HTMLElement 
{
     // ATTRIBUTS
    _isClicked = false;

    // CONSTRUCTEUR
    constructor() {
        super();
        this.createButton();
        this.addEventListener('click', this.handleClick.bind(this));
    }

    // ENCAPSULATION
    get isClicked() {
        return this._isClicked;
    }

    set isClicked(value) {
        this._isClicked = value;
        this.updateButtonStyle();
    }

    // METHODES
    createButton() {
        let button = document.createElement('button');
        button.textContent = 'Bouton Non Cliqué';
        this.appendChild(button);
    }

    handleClick() {
        // Désactive les autres boutons
        const allButtons = document.querySelectorAll('leaderboard');
        allButtons.forEach(button => {
            if (button !== this) {
                button.isClicked = false;
            }
        });

        // Efface les tableaux et affiche le scient
        this.clearTables();
        this.displayScientificData();

        // Marque le bouton comme cliqué
        this.isClicked = true;
    }

    updateButtonStyle() {
        const button = this.querySelector('button');
        if (this.isClicked) {
            // Style lorsque le bouton est cliqué
            button.style.backgroundColor = '#336699'; // Changez la couleur selon vos besoins
        } else {
            // Style lorsque le bouton n'est pas cliqué
            button.style.backgroundColor = '#6699CC'; // Changez la couleur selon vos besoins
        }
    }

    clearTables() {
        // Code pour effacer les tableaux
        // Ajoutez votre logique ici
    }

    displayScientificData() {
        // Code pour afficher les données scientifiques
        // Ajoutez votre logique ici
    }
}window.customElements.define('leaderboard', leaderboard);