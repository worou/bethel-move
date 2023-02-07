export default class Town {
    // 1. Typage des propiétés d'une annonce.
    id: number;
    code: string;
    longLabel: string;
    shortLabel: string;
    departementId: number;
    active: boolean;
     
    // 2. Définition des valeurs par défaut des propriétés d'une annonce.
    constructor(
        id: number,
        code: string,
        longLabel: string,
        shortLabel: string,
        departementId: number,
        active: boolean
    ) {
     // 3. Initialisation des propiétés d'un pokémons.
     this.id = id;
     this.code = code;
     this.longLabel = longLabel;
     this.shortLabel = shortLabel;
     this.departementId = departementId;
     this.active = active;
    
    }
   }