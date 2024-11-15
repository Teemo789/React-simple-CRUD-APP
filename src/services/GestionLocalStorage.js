import Livre from '../models/livre.js';

class GestionLocalStorage {
  static getLivres() {
    const livres = JSON.parse(localStorage.getItem('livres')) || [];
    return livres.map(livre => new Livre(livre.id, livre.titre, livre.auteur));
  }

  static saveLivres(livres) {
    localStorage.setItem('livres', JSON.stringify(livres));
  }

  static ajouterLivre(livre) {
    const livres = this.getLivres();
    livres.push(livre);
    this.saveLivres(livres);
  }

  static supprimerLivre(id) {
    const livres = this.getLivres();
    const nouveauxLivres = livres.filter(livre => livre.id !== id);
    this.saveLivres(nouveauxLivres);
  }

  static modifierLivre(livreModifie) {
    const livres = this.getLivres();
    const index = livres.findIndex(livre => livre.id === livreModifie.id);
    if (index !== -1) {
      livres[index] = livreModifie;
      this.saveLivres(livres);
    }
  }
}

export default GestionLocalStorage;