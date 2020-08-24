var eingabe = { Eingabetext: "Beispieltext" };
var gartenzauntext = '';
var settings;

function setup() {
  createCanvas(700,300);
  settings = QuickSettings.create(20, 20, "Gartenzaunverfahren");
  settings.setWidth(width-30);
  settings.bindText("Eingabetext", "Beispieltext", eingabe);
  settings.addTextArea("Gartenzauntext", gartenzauntext);
  settings.addButton("Text verschluesseln", function() { textVerschluesseln(); });	
}

function textVerschluesseln() {
    gartenzauntext = '';
  
    //Ihr Loesungscode
  
  settings.setValue("Gartenzauntext", gartenzauntext);
}