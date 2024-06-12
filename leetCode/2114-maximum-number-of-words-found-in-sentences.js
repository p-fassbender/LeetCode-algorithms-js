/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.
*/

var mostWordsFound = function (sentences) {
    let max = 0;
    sentences.forEach(sentence => {
        let words = 0;
        for (let i = 0; i < sentence.length; i++) {
            if (sentence[i] === ' ') {
                words++
            }
        }
        if (words + 1 > max) {
            max = words + 1
        }
    });
    // console.log(max)
    return max;
};

mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]); // 6
mostWordsFound(["please wait", "continue to fight", "continue to win"]);
