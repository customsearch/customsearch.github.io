// Select
function d$(Selector){
    return document.querySelector(Selector);
}

// Select many
function d$$(Sel){
    return [...document.querySelectorAll(Sel)];
}

// Copilot
function copilot_ask(){
    var Input = d$("#Input").value.trim();
    window.location = `https://copilot.microsoft.com?q=${Input}`;
}

// Google
function google_search(){
    var Input = d$("#Input").value.trim();
    window.location = `https://www.google.com/search?q=${Input}`;
}

// Cam Dict
function camdict_search(){
    var Input = d$("#Input").value.trim();
    window.location = `https://dictionary.cambridge.org/dictionary/english/${Input}`;
}

// Italian Verbs
function itaverbs_search(){
    var Input = d$("#Input").value.trim();
    window.location = `https://www.italian-verbs.com/italian-verbs/conjugation.php?parola=${Input}`;
}

// Word Ref
function wordref_search(){
    var Input = d$("#Input").value.trim();
    window.location = `https://www.wordreference.com/iten/${Input}`;
}

// Main
function main(){
    var Input          = location.search.replace("?q=","");
    d$("#Input").value = decodeURIComponent(Input);

    d$("#Copilot-Btn") .addEventListener("click", copilot_ask);
    d$("#Google-Btn")  .addEventListener("click", google_search);

    d$("#Camdict-Btn") .addEventListener("click", camdict_search);
    d$("#Itaverbs-Btn").addEventListener("click", itaverbs_search);
    d$("#Wordref-Btn") .addEventListener("click", wordref_search);
}

window.onload = main;
// EOF
