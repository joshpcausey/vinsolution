// In the programming language of your choice, write a program that parses a
// sentence and replaces each word with the following: first letter, number of
// distinct characters between first and last character, and last letter.  For example,
// Smooth would become S3h. Words are separated by spaces or non-alphabetic characters
// and these separators should be maintained in their original form and location in
// the answer.

function formatString(input) {
  const splitInput = splitString(input);
  for (let i = 0; i < splitInput.length; i++) {
    if (splitInput[i].length > 2) {
      splitInput[i] = formatSubstring(splitInput[i]);
    }
  }
  return splitInput.join("");
}

function formatSubstring(input) {
  let letters = {};
  for (var i = 1; i < input.length - 1; i++) {
    letters[input[i]] = input[i];
  }
  return `${input[0]}${Object.keys(letters).length}${input[input.length - 1]}`;
}

function splitString(input) {
  let output = [];
  let start = 0;
  let length = 0;
  let inAWord = false;
  for (let i = 0; i < input.length; i++) {
    if (/[a-zA-Z]/.test(input[i])) {
      if (!inAWord) {
        inAWord = true;
        start = i;
        length = 1;
      } else if (i === input.length - 1) {
        output.push(input.slice(start));
      } else {
        length += 1;
      }
    } else {
      if (inAWord) {
        output.push(input.slice(start, i));
        output.push(input[i]);
        inAWord = false;
      } else {
        output.push(input[i]);
      }
    }
  }
  return output;
}
