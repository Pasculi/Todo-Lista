class SuperHero{
    constructor(name, age, strong, lifes){
        this.name = name;
        this.age = age;
        this.strong = !strong ? 10 : strong;
        this.lifes = !lifes ? 100 : lifes;
    }
    salvar(){
        this.strong +=10;
        this.lifes+=10;
        console.log(`Mi nombre es ${this.name} tengo ${this.age} años y he salvado una vida, por lo que mi fuerza es de ${this.strong} y mis vidas aumentaron en ${this.lifes}`);
    }
}

const super1 = new SuperHero('Batman', 45, 200, 70); //verificar 
super1.salvar();

class Acqua extends SuperHero{
    constructor(acquaSkills){        
        super('Aquaman', 278, 500, 100);
    }
    greetAcqua(){
        super.salvar();
    }
}


const acquaHero = new Acqua('Nadar estilo delfin');

acquaHero.greetAcqua();