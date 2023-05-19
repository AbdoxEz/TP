document.write("<img src='ewa.png' alt='logo'><br><h1>LOGO EWA</h1>")
document.write("<img src='ewa.png' alt='logo'><br><h1>LOGO EWA</h1>") 

var aujourdhui = new Date();
var jour = aujourdhui.getDate();
var mois = aujourdhui.getMonth() + 1;
var annee = aujourdhui.getFullYear();

var date_formattee = "On est le " + jour + "/" + mois + "/" + annee + ".";
document.write(date_formattee);
