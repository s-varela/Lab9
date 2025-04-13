function init()}
  var button = document.getElementbyId('entrybutton');
  
  function showMeText(){
    var textbox = document.getElementbyId('entryinput');
    document.getElementbyId('textoutput').innerHTML = textbox.value;
    alert("Sayleht Varela: " + textbox.value);
}
  button.addEventListener('click', showMeText);
   
}
   
  window.addEventListener('load', init);