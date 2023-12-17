// Write a function called decode(message_file) that reads an encoded message from a .txt file and returns the decoded version as a string.
// Here's an example of what the message_file .txt file will look like:
// 3 love
// 6 computers
// 2 dogs
// 4 cats
// 1 I
// 5 you

// Each word is associated with a number. If you order the numbers and arrange them into a pyramid, it would look like this:
// 2 3
// 4 5 6

// The last word in each line (1, 3 and 6) correspond to words that are part of the message. Ignore all the other words:
// 1: I
// 3: love
// 6: computer

// In this case, your function will return the string "I love computers"
// MY ANSWER: 
const fs = require('fs');

function decode(message_file) {
    const fileContentsArray = fs.readFileSync(message_file).toString().split(/\r\n|\r|\n/);

    // PART 1: Sort the array by the number at the front of each entry, returning only the word
    let finalArray = [];
    const objSortArr = fileContentsArray.map(item => {
        const [num, string] = item.split(" "); // array decomposition
        return ({ num, string });
    }).sort(function (a, b) {
        return a.num - b.num;
    })
    console.log(objSortArr);


    objSortArr.forEach(item => {
        finalArray.push(item.string);
    })
    console.log("At the end of part 1: ", finalArray);

    // PART 2: Build the pyramid from finalArray, returning only the last word in each row
    let i = 0;
    let wordsInLine = 0;
    let decodedMessage = "";

    while (i < finalArray.length) {
        let currentWords = [finalArray[i]];

        while (currentWords.length <= wordsInLine) {
            i++;
            currentWords.push(finalArray[i]);

        }
        decodedMessage = decodedMessage + currentWords[wordsInLine] + " ";
        console.log(currentWords);
        wordsInLine++;
        currentWords = [];
        i++;
    }

    console.log("END: ", decodedMessage.trim());
    return decodedMessage.trim();
}
