
function learnJS(lang, callback) {
    console.log("I study " + lang);
    callback();
}

// learnJS("JS", function() {
//     console.log("I've finished 3td lesson!")
// })

function done() {
    console.log("I've finished 3td lesson!")
}

learnJS("JS", done);



