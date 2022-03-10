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
                <span id="spanMauve">VALLET</span>
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
        <h1>FORMATIONS</h1>
    </section>
<!--Section de la page des experiences-->
    <section id="experiencesSec" class="pageSections">
        <h1>ÉXPERIENCES</h1>
    </section>
<!--Section de la page des realisations-->
    <section id="realisationSec" class="pageSections">
        <h1>RÉALISATIONS</h1>
    </section>
<!--Section de la page de contact-->
    <section id="contactSec" class="pageSections">
        <h1>CONTACT</h1>
        <div id="formulaire">
            <form id="form" method="get" action="send.php">
                <input class="formInput" id="nomPrenom" name="nomPrenom">
                <input class="formInput" id="mail" name="mail">
                <input class="formInput" id="tel" name="tel">
                <input class="formInput" id="message" name="message">
            </form>
        </div>
    </section>
    
    <section id="footerSec">
        <div id="mentionLeg">
            <label>| © <?php echo date("Y");?> Florian Vallet |</label>
            <label>| Tous droits réservés | <a class="glow">Mentions légales</a> |</label>
        </div>
        <div id="stats"></div>
    </section>
    <script src="./js/jquery-3.6.0.min.js"></script>
    <script src="./js/script.js"></script>
</body>
</html>