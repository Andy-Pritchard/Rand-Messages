const generateRandomNumber = (num) => {
    //Gets a number from 0 - num - 1
    return Math.floor(Math.random() * num)
}

console.log(generateRandomNumber(4));

const starSigns = {
    sign: ["Aries", "Gemini", "Tarus", "Leo"],
    advice: ["don’t forget to look after your own well-being in your quest for success.", "when you’re having a tough time just remember how strong you really are.", "never stop being yourself no matter what people say.", "you’ve got a generous soul but be careful about those with bad intentions."],
}

//Store output in a personalised message
let personalStarSign = [];

//Iterate through object
for (let prop in starSigns) {
    let optionIdx = generateRandomNumber(starSigns[prop].length);

    //use the objects properties to customise the message being added to personalStarSign
    switch (prop) {
        case 'sign':
            personalStarSign.push(`Your star sign is ${starSigns[prop][optionIdx]}`);
            break
        case 'advice':
            personalStarSign.push(`Your star sign advice is ${starSigns[prop][optionIdx]}`);
    }
}

//format personalStarSign array
const format = (array) => {
    const formatted = array.join('\n');
    console.log(formatted);
}

format(personalStarSign);
