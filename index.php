<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="icon" href="./images/btn-accueil-act.svg" />
    
    <title>Portfolio : Florian VALLET</title>

    <link href="./css/style.css" rel="stylesheet">
</head>
<body>

<!--Background-->   
    <div id="lightsOff" class="lightOff">
        <label id="turnOn">Turn on the light !</label>
        <img id="arrow" src="./images/btn-accueil-scroll.svg">
    </div>
    <img id="mountains" src="./images/mountains2.svg" alt="mountains">
    <div id="sun"><img id="sunImg" src="./images/sun.svg" alt="sun"></div>

<!--Barre de navigation-->
    <section id="navBarSec">
        <div id="btn-container">
            <a href="#accueilSec" class="btn-navBar" id="btn-accueil">
                <img id="imgAccueil" src="./images/btn-accueil-act.svg" alt="bouton-accueil-act">
            </a>
            <a href="#formationSec" class="btn-navBar" id="btn-formation">
                <img id="imgFormation" src="./images/btn-formation-des.svg" alt="bouton-formation-des">
            </a>
            <a href="#experiencesSec" class="btn-navBar" id="btn-experiences">
                <img id="imgExperience" src="./images/btn-experiences-des.svg" alt="bouton-experiences-des">
            </a>
            <a href="#realisationSec" class="btn-navBar" id="btn-realisations">
                <img id="imgRealisation" src="./images/btn-realisations-des.svg" alt="bouton-realisations-des">
            </a>
            <a href="#contactSec" class="btn-navBar" id="btn-contact">
                <img id="imgContact" src="./images/btn-contact-des.svg" alt="bouton-contact-des">
            </a>
        </div>
        
    </section>
<!--Section de la page d'accueil-->
    <section id="accueilSec" class="pageSections">
        <div id="accueil-text-pres">
            <label>
                <span>Bonjour,</span>
                <span>je</span>
                <span>suis</span>
                <span>Florian</span>
                <span class="spanMauve purpleGlow">VALLET</span>
                <br>
                <span>Je</span>
                <span>suis</span>
                <span>développeur</span>
                <span>web</span>
                <span>full-stack</span>   
            </label>
        </div>

    </section>
<!--Section de la page des formations-->
    <section id="formationSec" class="pageSections">
        <h1 class="glow">FORMATIONS</h1>
        <div id="panesForm">
            <div id="paneBac" class="paneFormation">
                <h2><span class="spanMauve purpleGlow">Bac</span>calauréat <span class="spanMauve purpleGlow">Pro</span>fessionnel</h2>
                <label>Étude et définition de produits industriels </label>
                <label>2013 - 2015 <span class="spanMauve purpleGlow">Saint-Étienne</span></label>
                <label>Lycée Etienne Mimard </label>
            </div>
            <div id="paneBts" class="paneFormation">
                <h2><span class="spanMauve purpleGlow">B</span>revet de <span class="spanMauve purpleGlow">T</span>echnicien <span class="spanMauve purpleGlow">S</span>upérieur</h2>
                <label>Systèmes Numériques option Informatique et réseaux<br>Mention <span class="spanMauve">Très Bien</span></label>
                <label>2019 - 2021 <span class="spanMauve purpleGlow">Saint-Étienne</span></label>
                <label>IRUP - Formations supérieurs par alternances </label>    
            </div>
            <div id="paneLicence" class="paneFormation">
                <h2><span class="spanMauve purpleGlow">Licence Pro</span>fessionnelle</h2>
                <label>Animateur des Technologies de l'Information et de l'Internet</label>
                <label>2021 - 2022 <span class="spanMauve purpleGlow">Saint-Étienne</span></label>
                <label>Institut universitaire de technologie</label>
            </div>
        </div>  
    </section>
<!--Section de la page des experiences-->
    <section id="experiencesSec" class="pageSections">
        <h1 class="glow">ÉXPERIENCES</h1>
        <div id="panesExp">
            <div id="paneDe" class="paneExperience">
                <h2 class="nomPoste">Dessinateur <span class="spanMauve purpleGlow">d'études</span></h2>
                <label class="dateExp">Novembre 2015 à Août 2016</label>
                <label class="lieuExp"><span class="spanMauve purpleGlow">Hexadrone</span> Saint-Didier-en-Velay, France</label>
                <!--label class="descriExp"></label-->
            </div>
            <div id="paneInter" class="paneExperience">
                <h2 class="nomPoste"><span class="spanMauve purpleGlow">Interimaire</span></h2>
                <label class="dateExp">Septembre 2016 à Septembre 2018</label>
                <label class="lieuExp"><span class="spanMauve purpleGlow" style="font-size: 0.8em;">MVPE, Burlet, Meuble Bariole, Meuble Fuvel, CallWin, Laurent Automobile</span> Loire/Haute-Loire</label>
                <!--label class="descriExp">Ouvrier polyvalent, Téléopérateur, Chauffeur/Livreur</label-->
            </div>
            <div id="paneTi" class="paneExperience">
                <h2 class="nomPoste">Technicien <span class="spanMauve purpleGlow">Informatique</span></h2>
                <label class="dateExp">Novembre 2019 à Juillet 2021</label>
                <label class="lieuExp">Institut Supérieur des Techniques de la Performance (<span class="spanMauve purpleGlow">ISTP</span>) Saint-Étienne, France</label>
                <!--label class="descriExp">Réalisé en apprentissage dans le cadre du BTS Système Numériques en alternance.</label-->
            </div>
            <div id="paneDev" class="paneExperience">
                <h2 class="nomPoste">Développeur <span class="spanMauve purpleGlow">full-stack</span></h2>
                <label class="dateExp">Depuis Août 2021</label>
                <label class="lieuExp">Institut Supérieur des Techniques de la Performance (<span class="spanMauve purpleGlow">ISTP</span>) Saint-Étienne, France</label>
                <!--label class="descriExp"></label-->
            </div>

            
            <div id="blurBack">
                <div id="infoDe" class="infosPane">
                    <img class="btnCrossPane" id="btnCrossDe" src="./images/btn-cross.svg">
                </div>
                <div id="infoInter" class="infosPane">
                    <img class="btnCrossPane" id="btnCrossInter" src="./images/btn-cross.svg">
                </div>
                <div id="infoTi" class="infosPane">
                    <img class="btnCrossPane" id="btnCrossTi" src="./images/btn-cross.svg">
                </div>
                <div id="infoDev" class="infosPane">
                    <img class="btnCrossPane" id="btnCrossDev" src="./images/btn-cross.svg">
                </div>
            </div>
        </div>
    </section>
<!--Section de la page des realisations-->
    <section id="realisationSec" class="pageSections">
        <h1 class="glow">RÉALISATIONS</h1>
    </section>
<!--Section de la page de contact-->
    <section id="contactSec" class="pageSections">
        <h1 class="glow">CONTACT</h1>
        <div id="textContactSec">
            <label>Une question ou envie de travailler ensemble ?</label><br><br>
            <label>Vous pouvez me contacter par mail à</label><br><br>
            <label class="spanMauve purpleGlow"><a class="link" href="mailto:florian.vallet@outlook.com" style="text-decoration: none; color: inherit;">florian.vallet@outlook.com</a></label><br><br>
            <label>ou directement via le formulaire.</label>
        </div>

        <div id="formulaire">
            <form id="form" method="get" action="send.php">
                <input placeholder="Nom & Prénom" type="text" class="formInput" id="nomPrenom" name="nomPrenom" required>
                <input placeholder="Email" type="email" class="formInput demiInput" id="mail" name="mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required>
                <input placeholder="Téléphone" type="tel" class="formInput demiInput" id="tel" name="tel" pattern="[0-9]{10}" maxlength="10" required>
                <textarea placeholder="Message..." type="text" class="formInput" id="message" name="message" required></textarea>
                <button id="formButton"><img src="./images/btn-send.svg"></button>
            </form>
        </div>
    </section>
    
    <section id="footerSec">
        <div id="mentionLeg">
            <label>| © <?php echo date("Y");?> Florian Vallet |</label>
            <label>| Tous droits réservés | <a class="glow" href="./mentions-legales.html" style="text-decoration: none;">Mentions légales</a> |</label>
        </div>
        <div id="stats"></div>
    </section>

    <button type="checkbox" id="lightSwitch" class="switchOff"></button>

    <script src="./js/jquery-3.6.0.min.js"></script>
    <script src="./js/script.js"></script>
</body>
</html>