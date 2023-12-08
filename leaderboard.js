class leaderboard extends HTMLElement 
{
    constructor() {
        super();
    
        // Attache une fonction au clic de chaque bouton
        this.onclick = this.handleButtonClick;
      }
    
      // Fonction pour gérer le clic sur un bouton
      handleButtonClick(event) {
        // Réinitialise le style de tous les boutons
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
          button.style.backgroundColor = ''; // Réinitialise la couleur de fond
        });
    
        // Change la couleur de fond du bouton cliqué
        const clickedButton = event.target;
        clickedButton.style.backgroundColor = 'darkblue';
    
        // Efface les tableaux précédents et affiche le tableau
        this.displayLeaderboard();
      }
    
      // Fonction pour afficher le tableau
      displayLeaderboard() {
        // Supprime les tableaux précédents
        const existingTables = document.querySelectorAll('table');
        existingTables.forEach(table => table.remove());
    
        // Crée et affiche le tableau
        const leaderboardTable = document.createElement('table');
        // Ajoute ici les lignes, colonnes ou tout autre contenu pour votre tableau
    
        // Ajoute le tableau à la page
        this.appendChild(leaderboardTable);
      }
    }
    
    // Enregistre la classe Leaderboard en tant qu'élément personnalisé
    customElements.define('leaderboard-element', Leaderboard);