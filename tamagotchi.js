const tamagotchi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 4,
    getStatus: function () {
        let eaty = "";
        if (this.meal < 3) {
            eaty += "Я голоден";
        }else {
            eaty += "Я не голоден";
        }
        let sleepy = "";
        if (this.energy < 3) {
            sleepy += "Я хочу спать";
        }else {
            sleepy += "Я не хочу спать";
        }
        let moody = "";
        if (this.mood < 3) {
            moody += "Мне скучно";
        }else if (this.mood == 2) {
            moody += "Поиграй со мной";
        }
        else {
            moody += "Мне весело";
        }
        if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
            console.log (`${this.name} умер :(`);
        }
        console.log(`Имя: ${this.name}, Еда: ${eaty} (${this.meal}), Энергия: ${sleepy} (${this.energy}), Настроение: ${moody} (${this.mood}).`);
    },
    setName: function (secname) {
        return this.name = secname;
    },
    eat: function () {
        if (this.meal < 5) {
            this.meal++;
        }
        this.mood--;
    },
    sleep: function () {
        if (this.energy < 5) {
            this.energy++;
        }
        this.meal--;
    },
    play: function () {
        if (this.mood < 5) {
            this.mood++;
        }
        this.energy--;
    }
};
tamagotchi.setName('Jamic');
tamagotchi.eat();
tamagotchi.sleep();
tamagotchi.play();
tamagotchi.getStatus();
