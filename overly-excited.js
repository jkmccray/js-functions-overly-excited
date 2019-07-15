// ------ Practice: Stacking Words ------
// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        buildMeUp = buildMeUp + " " + sentence[i]
        // Print buildMeUp to the console
        console.log(buildMeUp)
    }

}

addExcitement(sentence)

// ------ Practice: Some words are more exciting than others ------
function addExcitement1 (theWordArray) {
    let buildMeUp = ""

    for (let i = 1; i <= theWordArray.length; i++) {
        /*
            If the current value of `i` divided by 3 has no
            remainder, add an exclamation point to the end of
            the word and then concatenate it to `buildMeUp`.
      
            Otherwise, just concatenate the word itself.
         */
        buildMeUp = buildMeUp + " " + sentence[i-1]

        if (i % 3 === 0) {
          buildMeUp = buildMeUp + "!"
        }

        // Print buildMeUp to the console
        console.log(buildMeUp)
    }

}

addExcitement1(sentence)


function addExcitement2 (theWordArray) {
  let buildMeUp = ""

  for (let i = 0; i < theWordArray.length; i++) {
      /*
          If the current value of `i` divided by 3 has no
          remainder, add an exclamation point to the end of
          the word and then concatenate it to `buildMeUp`.
    
          Otherwise, just concatenate the word itself.
       */

      if (i % 3 === 0 && i > 0) {
        buildMeUp = buildMeUp + "! " + sentence[i]
      } else if (i+1 === theWordArray.length && (i+1) % 3 === 0) {
        buildMeUp = buildMeUp + " " + sentence[i] + "!"
      } else {
      buildMeUp = buildMeUp + " " + sentence[i]
      }

      // Print buildMeUp to the console
      console.log(buildMeUp)
  }

}

addExcitement2(sentence)

// ------ Practice: Function Arguments ------
function addExcitement3 (theWordArray, punctuate) {
  let buildMeUp = ""

  for (let i = 1; i <= theWordArray.length; i++) {
      buildMeUp = buildMeUp + " " + sentence[i-1]

      if (i % 3 === 0) {
        buildMeUp = buildMeUp + punctuate
      }

      console.log(buildMeUp)
  }

}

addExcitement3(sentence, "?")

// ------ Challenge: Multiple Punctuation ------
function addExcitement4 (theWordArray, punctuate, howMany) {
  let buildMeUp = ""

  for (let i = 1; i <= theWordArray.length; i++) {
      
      buildMeUp = buildMeUp + " " + sentence[i-1]

      if (i % 3 === 0) {
        buildMeUp = buildMeUp + punctuate.repeat(howMany)
      }

      console.log(buildMeUp)
  }

}

addExcitement4(sentence, "*", 4)

// ------ Challenge: Arrow Functions ------
let addExcitement5 = (theWordArray, punctuate, howMany) => {
  let buildMeUp = ""

  for (let i = 1; i <= theWordArray.length; i++) {
      buildMeUp = buildMeUp + " " + sentence[i-1]

      if (i % 3 === 0) {
        buildMeUp = buildMeUp + punctuate.repeat(howMany)
      }

      console.log(buildMeUp)
  }

}

addExcitement5(sentence, "^", 4)