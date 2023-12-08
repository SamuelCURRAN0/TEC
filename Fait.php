<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fait</title>
</head>
<body>
    <h1>FAIT</h1>
<?php

header('Content-Type: application/json; charset=utf-8');
// Connexion à la bdd
$bdd= "ebackes_bd"; // Base de données
$host= "lakartxela.iutbayonne.univ-pau.fr";
$user= "ebackes_bd"; // Utilisateur
$pass= "ebackes_bd"; // mp
$nomtable= "Fait"; /* Connection bdd */

$link=mysqli_connect($host,$user,$pass,$bdd) or die( "Impossible de se connecter à la base de données");

// Afficher le contenu de la bdd
$query = "SELECT * FROM $nomtable";

$resultats = mysqli_query($link, $query);
mysqli_close($link);

while ($donnees = mysqli_fetch_assoc($resultats))
{
    $idee = $donnees['ideeRecue'];
    $veracite = $donnees['veracite'];
    $reponse = $donnees['reponse'];
    $source = $donnees['source'];
    $pathImg = $donnees['pathImage'];

    echo "<p>idée reçue : $idee</p>";
    echo "<p>veracite : $veracite</p>";
    echo "<p>reponse : $reponse</p>";
    echo "<p>source : $source</p>";
    echo "<img src='$pathImg' alt='image' width='200' height='200'>";
}
   
?>
</body>
</html>