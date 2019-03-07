// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You are lost in a forest",
            choices: [
                {
                    text: "Follow the sound of water",
                    nextLevel: "water",
                },

                {
                    text: "Walk around for a while",
                    nextLevel: "deepWood",
                },
            ]
        },

        water: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You saw a large river! There's some shinny objects in the river",
            choices: [
                {
                    text: "Walk near it",
                    nextLevel: "underWater",
                }
            ]
        },
        underWater: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "A fish jump out of the river and drag you into the water",
            choices: [
                {
                    text: "Struggle to free yourself",
                    nextLevel: "death",
                },
                {
                    text: "See what the fish is going to do to you",
                    nextLevel: "palace",
                }
            ]
        },
        palace: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You entered a palace. The fish king want you to marry on of his children",
            choices: [
                {
                    text: "I refused",
                    nextLevel: "death",
                },
                {
                    text: "I agree",
                    nextLevel: "wealth",
                }
            ]
        },
        wealth: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You marry on of the King's children and became the wealthiest person in the world",
            choices: [
                {
                    text: "restart",
                    nextLevel: "start"
                }
            ]
        },
        deepWood: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You realized that you are in a huge forest and you don't know how to get out. Suddently, you heard some sound",
            choices: [
                {
                    text: "Go toward it",
                    nextLevel: "aGirl",
                },
                {
                    text: "Run away from it",
                    nextLevel: "death",
                }
            ]
        },
        
        aGirl: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You saw a little girl fainted on the ground",
            choices: [
                {
                    text: "Help her",
                    nextLevel: "companion",
                },
                {
                    text: "Leave her alone",
                    nextLevel: "death",
                }
            ]
        },
        companion: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "She woke up and saw you save her. The little girl want to give you something in return",
            choices: [
                {
                    text: "I want money",
                    nextLevel: "death",
                },
                {
                    text: "I don't want anything",
                    nextLevel: "happiness",
                }
            ]
        },
        happy: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "She saw that you are a good person and sent you home. You became the happiest person in the world",
            choices: [
                {
                    text: "Restart",
                    nextLevel: "start",
                },
 
            ]
        },
        death: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "A huge monster appeared out of nowhere",
            choices: [
                {
                    text: "The monster see you and eat you",
                    nextLevel: "after",
                }
            ]
        },
        after: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You are a soul now but you saw your body reforming and it move to where you first woke up at. Then \"you\" opened your eyes",
            choices: [
                {
                    text: "Game Over",
                }
            ]
        },


    }
};
