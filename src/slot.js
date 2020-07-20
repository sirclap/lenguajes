export class SlothMachine {
    constructor() {
        this.coins = 0;
        this.probability = 0.7;
        this.reels = [false, false, false];
    }
    
    spinReels() {        
        this.reels = this.reels.map(() => Math.random() < this.probability);
    }
    
    win() {
        return this.reels.every(value =>value === true);
    }

    play() {
        this.coins++;
        console.log('Added 1 coin');
        this.spinReels();

        if (this.win()) {            
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);            
            this.coins = 0;
        } else {
            console.log("Good luck next time!!");
        }
    }
}