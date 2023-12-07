CREATE TABLE Utilisateur (
    Pseudonyme TEXT PRIMARY KEY,
    passHash TEXT
);

-- Table Partie
CREATE TABLE Partie (
    Id INT PRIMARY KEY,
    dateHeure DATE,
    score INT,
    pseudonyme TEXT,
    Difficulte INT,
    FOREIGN KEY (pseudonyme) REFERENCES Utilisateur(Pseudonyme)
);

-- Table Fait
CREATE TABLE Fait (
    Id INT PRIMARY KEY,
    ideeReçu TEXT,
    reponse TEXT,
    pathImage TEXT
    veracite VARCHAR2(4)
);

-- Table Apparait
CREATE TABLE Apparait (
    idPartie INT,
    idFait INT,
    reponseUtil VARCHAR2(4),
    PRIMARY KEY (idPartie, idFait),
    FOREIGN KEY (idPartie) REFERENCES Partie(Id),
    FOREIGN KEY (idFait) REFERENCES Fait(Id)
);

CREATE TABLE Fait (
    Id TEXT PRIMARY KEY,
    bgColor1 VARCHAR2(6),
    bgColor2 VARCHAR2(6),
    fgColor VARCHAR2(6),
    highlightColor VARCHAR2(6)
);

 

