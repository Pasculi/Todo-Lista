//En esta tarea diseñarás un juego de cartas coleccionables al estilo de 
//Hearthstone, Yu-Gi-Oh !, o Magic: The Gathering. Si no estás familiarizado con este tipo de juegos, no te preocupes, 
//te explicaremos lo que necesitas saber sobre ellos.


/* Los efectos requerirán un "objetivo" cuando se juegan. 
Aumentan o disminuyen el poder o la resistencia de la "Unidad" a la que apuntan. Del mismo modo, las "Unidades" pueden atacar a otras "Unidades",
 cuando lo hacen disminuyen la "resistencia" del objetivo por el "poder" del atacante. */

class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        
    }
}