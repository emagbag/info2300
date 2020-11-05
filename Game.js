module.exports = class Game{
    constructor(){
        this.cardAll = ["ACE", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING"];
        this.cardSuit = ["SPADE", "CLUB", "HEART", "DIAMOND"];
        this.nComputer = Math.floor(Math.random() * this.cardAll.length);
        this.suit = Math.floor(Math.random() * this.cardSuit.length);
        this.isNumberDone = false;
        this.prompt = "This is a guessing game. I am thinking of a card. Can you guess it? Let's start with the number." ;
        this.isDone = false;
    }
    guessNumber(sInput){
        let sOutput = [];
        this.prompt = "";
        sInput = sInput.toUpperCase();
        if (!this.cardAll.includes(sInput)) {
            sOutput.push("Input entered is not part of the choices. Please use this as a reference." + this.cardAll.join(', '));
        }

        else if (this.cardAll[this.nComputer] == sInput){
                
            sOutput.push("Nice! Now guess the suit.");
            this.isNumberDone = true;
        }
        else{
            this.prompt = "Nice Try. Try again.";
        }
        // sOutput.push(this.cardAll[this.nComputer]);
        return sOutput;
    }
    guessSuit(sInput){
        let sOutput = [];
        this.prompt = "";
        sInput = sInput.toUpperCase();
        if (!this.cardSuit.includes(sInput)) {
            sOutput.push("Input entered is not part of the choices. Please use this as a reference." + this.cardSuit.join(', '));
        }

        else if (this.cardSuit[this.suit] == sInput){
            sOutput.push(this.giveCongratulations());
        }
        else{
            this.prompt = "Nice Try. Try again.";
        }
        return sOutput;
    }
    givePrompt(){
        return this.prompt;
    }
    checkNumber() {
        return this.isNumberDone;
    }
    checkStatus() {
        return this.isDone;
    }
    giveCongratulations(){
        return "Well Done! The card was " + this.cardAll[this.nComputer] + " of " + this.cardSuit[this.suit];
    }
}