<html><body>
<?php
$niveau = isset($_GET['Facile']) ? 'Facile' : (isset($_GET['Moyen']) ? 'Moyen' : (isset($_GET['Difficile']) ? 'Difficile' : ''));


if ($niveau == "Facile") {
    $tableau = '<table border="1">
    <tr>
        <th>Classement</th>
        <th>Pseudo</th>
        <th>Score</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Fetnmax</td>
        <td>100</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Feror</td>
        <td>85</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Elliossore</td>
        <td>74</td>
    </tr>
</table>';
echo $tableau; 

} elseif ($niveau == "Moyen") {
    $tableau = '<table border="1">
    <tr>
        <th>Classement</th>
        <th>Pseudo</th>
        <th>Score</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Fetnmax</td>
        <td>100</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Feror</td>
        <td>85</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Elliossore</td>
        <td>74</td>
    </tr>
</table>';

// Afficher le tableau dans la page HTML
echo $tableau;
    
} elseif ($niveau == "Difficile") {
    $tableau = '<table border="1">
    <tr>
        <th>Classement</th>
        <th>Pseudo</th>
        <th>Score</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Fetnmax</td>
        <td>100</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Feror</td>
        <td>85</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Elliossore</td>
        <td>74</td>
    </tr>
</table>';

// Afficher le tableau dans la page HTML
echo $tableau;
}
?>
</body></html>