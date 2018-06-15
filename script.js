class Screen {

    constructor() {
        this.data = messages;
        this.singleMessageData = [];
        this.setup();
    }


    setup() {
        // sentenceBlock.textContent = ;
        // analysisBlock.textContent = ;
        Screen.getDataFromJson();
        Screen.displayLeftSide(this.data);
        Screen.displayRightSide(this.data);
    };

    // get a random sentence and its analysis
    static getDataFromJson() {
        const keys = Object.keys(messages);
        // console.log("keys", keys);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const randomValue = messages[randomKey];
        this.singleMessageData = [randomKey, randomValue];
    }

    static displayLeftSide() {
        const number = document.querySelector("#sentence #number");
        const sentence = document.querySelector("#sentence #text");
        number.innerHTML = this.singleMessageData[0];
        number.innerHTML = this.singleMessageData[1].text.original;
    }

    static displayRightSide() {
        console.log(this.singleMessageData[1]);
        Screen.loopThroughJson(this.singleMessageData[1], "");
    }

    static loopThroughJson(obj, temp) {
        for (const property in obj) {
            if (obj.hasOwnProperty(property)) {
                if (typeof obj[property] === "object") {
                    Screen.loopThroughJson(obj[property], temp + '.' + property);
                } else {
                    console.log("temp", temp, "typeof", obj[property]);
                    let paragraph = document.createElement("p");
                    paragraph.textContent = `${temp}: ${obj[property]}`;
                    let block = document.querySelector("#analysis");
                    block.appendChild(paragraph);
                }
            }
        }
    }

}


document.body.addEventListener("click", () => {
    let screen = new Screen();
});

