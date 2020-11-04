$( document ).ready(function() {
    console.log( "ready!" );
});


let phonemes = ["ee", "ea", "a", "e", "i", "o", "u", "oo", "ay", "a-e", "i-e", "o-e", "u-e", "ff", "sh", "ti", "ci"]

$("#start").click(function(){
    $("#graphemeToGuess").html(phonemes[Math.floor(Math.random() * phonemes.length)]);
});