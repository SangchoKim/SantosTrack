"use strict";

class Coach {
    constructor() {
        this.crews = [];
    }

    eatFoot() {
        console.log("Coach is eating");
        this.notifyCrew("I already ate");
    }

    runaway() {
        console.log("Coach is running away");
        this.notifyCrew("I already ran away");
    }

    upgradeCutie() {
        console.log("Coach enhanced cutie");
        this.notifyCrew("I already enhanced cutie");
    }

    subscribe(crew) {
        this.crews.push(crew);
    }

    notifyCrew(msg) {
        this.crews.forEach((crew) => crew.update(msg));
    }
}

class Santos {
    update(msg) {
        console.log(`Santos reply: ${msg}`);
    }
}

class Shelley {
    update(msg) {
        console.log(`Shelley reply: ${msg}`);
    }
}

class Amy {
    update(msg) {
        console.log(`Amy reply: ${msg}`);
    }
}

const coach = new Coach();
const santos = new Santos();
const shelley = new Shelley();
const amy = new Amy();

coach.subscribe(santos);
coach.subscribe(shelley);
coach.subscribe(amy);

console.log(coach.runaway());
// Coach is running away
// Santos reply: I already ran away
// Shelley reply: I already ran away
// Amy reply: I already ran away

console.log(coach.upgradeCutie());
// Coach enhanced cutie
// Santos reply: I already enhanced cutie
// Shelley reply: I already enhanced cutie
// Amy reply: I already enhanced cutie
