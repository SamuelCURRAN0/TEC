-- Table Partie
CREATE TABLE Partie (
    Id INT PRIMARY KEY,
    dateHeure DATE,
    score INT,
    pseudonyme TEXT,
    Difficulte INT
);

-- Table Fait
CREATE TABLE Fait (
    Id INT PRIMARY KEY,
    ideeReçu TEXT,
    reponse TEXT,
    pathImage TEXT,
    veracite VARCHAR(4)
);

-- Table Apparait
CREATE TABLE Apparait (
    idPartie INT,
    idFait INT,
    reponseUtil VARCHAR(5),
    PRIMARY KEY (idPartie, idFait),
    FOREIGN KEY (idPartie) REFERENCES Partie(Id),
    FOREIGN KEY (idFait) REFERENCES Fait(Id)
);

CREATE TABLE Theme (
    nom VARCHAR(50) PRIMARY KEY,
    bgColor1 VARCHAR(6),
    bgColor2 VARCHAR(6),
    fgColor VARCHAR(6),
    highlightColor VARCHAR(6)
);

 

