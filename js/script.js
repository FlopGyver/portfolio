$(function() {

    //Compteur de stats de cafés (boisson officiel du développeur depuis 1950) et nuits blanches
    let wn = 3;
    let coffee = 257;

    $("#stats").html("<img src='./images/coffee.svg' alt='coffee-cup'><label>"+coffee+" </label><img src='./images/moon.svg' alt='moon'><label> "+wn+"</label>");
    setInterval( function() { 
        ++coffee;$("#stats").html("<img src='./images/coffee.svg' alt='coffee-cup'><label>"+coffee+" </label><img src='./images/moon.svg' alt='moon'><label> "+wn+"</label>");
    }, 10*60*1000 );
    
    setInterval( function() { 
        ++wn;$("#stats").html("<img src='./images/coffee.svg' alt='coffee-cup'><label>"+coffee+" </label><img src='./images/moon.svg' alt='moon'><label> "+wn+"</label>");
    }, 10*60*100000 );

    //Animation du background lors de la selection dans le menu inférieur
    $("#btn-accueil").click(function(){
        $("#sun").animate({left: "5%", top: "25%"}, 800);
        
        $("#imgAccueil").attr("src","./images/btn-accueil-act.svg")
        $("#imgFormation").attr("src","./images/btn-formation-des.svg")
        $("#imgExperience").attr("src","./images/btn-experiences-des.svg")
        $("#imgRealisation").attr("src","./images/btn-realisations-des.svg")
        $("#imgContact").attr("src","./images/btn-contact-des.svg");
        
        $("#imgAccueil").css("transform", "scale(1.3)");
        $("#imgFormation").css("transform", "scale(1)");
        $("#imgExperience").css("transform", "scale(1)");
        $("#imgRealisation").css("transform", "scale(1)");
        $("#imgContact").css("transform", "scale(1)");
    })
    $("#btn-formation").click(function(){
        $("#sun").animate({left: "115%", top: "10%"}, 800);

        $("#imgAccueil").attr("src","./images/btn-accueil-des.svg")
        $("#imgFormation").attr("src","./images/btn-formation-act.svg")
        $("#imgExperience").attr("src","./images/btn-experiences-des.svg")
        $("#imgRealisation").attr("src","./images/btn-realisations-des.svg")
        $("#imgContact").attr("src","./images/btn-contact-des.svg")

        $("#imgAccueil").css("transform", "scale(1)");
        $("#imgFormation").css("transform", "scale(1.3)");
        $("#imgExperience").css("transform", "scale(1)");
        $("#imgRealisation").css("transform", "scale(1)");
        $("#imgContact").css("transform", "scale(1)");
    })
    $("#btn-experiences").click(function(){
        $("#sun").animate({left: "235%", top: "5%"},800);

        $("#imgAccueil").attr("src","./images/btn-accueil-des.svg")
        $("#imgFormation").attr("src","./images/btn-formation-des.svg")
        $("#imgExperience").attr("src","./images/btn-experiences-act.svg")
        $("#imgRealisation").attr("src","./images/btn-realisations-des.svg")
        $("#imgContact").attr("src","./images/btn-contact-des.svg")

        $("#imgAccueil").css("transform", "scale(1)");
        $("#imgFormation").css("transform", "scale(1)");
        $("#imgExperience").css("transform", "scale(1.3)");
        $("#imgRealisation").css("transform", "scale(1)");
        $("#imgContact").css("transform", "scale(1)");
    })
    $("#btn-realisations").click(function(){
        $("#sun").animate({left: "360%", top: "10%"}, 800);

        $("#imgAccueil").attr("src","./images/btn-accueil-des.svg")
        $("#imgFormation").attr("src","./images/btn-formation-des.svg")
        $("#imgExperience").attr("src","./images/btn-experiences-des.svg")
        $("#imgRealisation").attr("src","./images/btn-realisations-act.svg")
        $("#imgContact").attr("src","./images/btn-contact-des.svg")

        $("#imgAccueil").css("transform", "scale(1)");
        $("#imgFormation").css("transform", "scale(1)");
        $("#imgExperience").css("transform", "scale(1)");
        $("#imgRealisation").css("transform", "scale(1.3)");
        $("#imgContact").css("transform", "scale(1)");
    })
    $("#btn-contact").click(function(){
        $("#sun").animate({left: "465%", top: "25%"}, 800);

        $("#imgAccueil").attr("src","./images/btn-accueil-des.svg")
        $("#imgFormation").attr("src","./images/btn-formation-des.svg")
        $("#imgExperience").attr("src","./images/btn-experiences-des.svg")
        $("#imgRealisation").attr("src","./images/btn-realisations-des.svg")
        $("#imgContact").attr("src","./images/btn-contact-act.svg")

        $("#imgAccueil").css("transform", "scale(1)");
        $("#imgFormation").css("transform", "scale(1)");
        $("#imgExperience").css("transform", "scale(1)");
        $("#imgRealisation").css("transform", "scale(1)");
        $("#imgContact").css("transform", "scale(1.3)");
    })


    //Selection dans la section de l'Accueil

    $("#btnQsj").click(function(){
//        $("#scrollAcc").animate({scrollTop:0}, '500', 'swing');
        $("#scrollAcc").animate({scrollTop: $("#qsj").offset().top}, '500', 'swing');

        $("#btnQsj").css("transform", "scale(1.3)");
        $("#btnComp").css("transform", "scale(1)");
        $("#btnPass").css("transform", "scale(1)");

        $("#btnQsj").css("background-color", "rgba(0, 0, 0, 0.8)");
        $("#btnComp").css("background-color", "rgba(0, 0, 0, 0.4)");
        $("#btnPass").css("background-color", "rgba(0, 0, 0, 0.4)");
    })
    $("#btnComp").click(function(){
//        $("#scrollAcc").animate({scrollTop: 575,behavior: 'smooth'}, '500', 'swing');
        $("#scrollAcc").animate({scrollTop: $("#competences").offset().top}, '500', 'swing');

        $("#btnQsj").css("transform", "scale(1)");
        $("#btnComp").css("transform", "scale(1.3)");
        $("#btnPass").css("transform", "scale(1)");

        $("#btnQsj").css("background-color", "rgba(0, 0, 0, 0.4)");
        $("#btnComp").css("background-color", "rgba(0, 0, 0, 0.8)");
        $("#btnPass").css("background-color", "rgba(0, 0, 0, 0.4)");
        $("#progressInnerBar1").css("width", "75%");
        $("#progressInnerBar2").css("width", "60%");
        $("#progressInnerBar3").css("width", "55%");
        $("#progressInnerBar4").css("width", "80%");
        $("#progressInnerBar5").css("width", "65%");
        $("#progressInnerBar6").css("width", "75%");
    })
    $("#btnPass").click(function(){
//        $("#scrollAcc").animate({scrollTop:1400}, '500', 'swing');
        $("#scrollAcc").animate({scrollTop: $("#passions").offset().top}, '500', 'swing');

        
        $("#btnQsj").css("transform", "scale(1)");
        $("#btnComp").css("transform", "scale(1)");
        $("#btnPass").css("transform", "scale(1.3)");

        $("#btnQsj").css("background-color", "rgba(0, 0, 0, 0.4)");
        $("#btnComp").css("background-color", "rgba(0, 0, 0, 0.4)");
        $("#btnPass").css("background-color", "rgba(0, 0, 0, 0.8)");
    })

    $("#pictoAmbitieux").click(function(){
        $("#labelPicto1").css("opacity", "1");
    })
    $("#pictoCurieux").click(function(){
        $("#labelPicto2").css("opacity", "1");
    })
    $("#pictoPolyvalent").click(function(){
        $("#labelPicto3").css("opacity", "1");
    })
    $("#pictoCreatif").click(function(){
        $("#labelPicto4").css("opacity", "1");
    })
    


    //Ouverture panneaux expériences 

    //Dessinateur etudes
    let displayDe = true;
    $("#paneDe").click(function(){
        

        if(displayDe){
            $("#blurBack").css("display", "initial");
            $("#infoDe").css("display", "grid");
            displayDe = false;
        }
        else {
            $("#blurBack").css("display", "none");
            $("#infoDe").css("display", "none");
            displayDe=true;
        }
    })

    $("#btnCrossDe").click(function(){

        if(displayDe){
            $("#blurBack").css("display", "initial");
            $("#infoDe").css("display", "grid");
            displayDe = false;
        }
        else {
            $("#blurBack").css("display", "none");
            $("#infoDe").css("display", "none");
            displayDe=true;
        }
        
    })

    //Interimaire
    let displayInter = true;
    $("#paneInter").click(function(){
        

        if(displayInter){
            $("#blurBack").css("display", "initial");
            $("#infoInter").css("display", "grid");
            displayInter = false;
        }
        else {
            $("#blurBack").css("display", "none");
            $("#infoInter").css("display", "none");
            displayInter=true;
        }
    })

    $("#btnCrossInter").click(function(){

        if(displayInter){
            $("#blurBack").css("display", "initial");
            $("#infoInter").css("display", "grid");
            displayInter = false;
        }
        else {
            $("#blurBack").css("display", "none");
            $("#infoInter").css("display", "none");
            displayInter=true;
        }
        
    })

    //Technicien informatique
    let displayTi = true;
    $("#paneTi").click(function(){
        

        if(displayTi){
            $("#blurBack").css("display", "initial");
            $("#infoTi").css("display", "grid");
            displayTi = false;
        }
        else {
            $("#blurBack").css("display", "none");
            $("#infoTi").css("display", "none");
            displayTi=true;
        }
    })

    $("#btnCrossTi").click(function(){

        if(displayTi){
            $("#blurBack").css("display", "initial");
            $("#infoTi").css("display", "grid");
            displayTi = false;
        }
        else {
            $("#blurBack").css("display", "none");
            $("#infoTi").css("display", "none");
            displayTi=true;
        }
        
    })

    //Développeur
    let displayDev = true;
    $("#paneDev").click(function(){
        

        if(displayDev){
            $("#blurBack").css("display", "initial");
            $("#infoDev").css("display", "grid");
            displayDev = false;
        }
        else {
            $("#blurBack").css("display", "none");
            $("#infoDev").css("display", "none");
            displayDev=true;
        }
    })

    $("#btnCrossDev").click(function(){

        if(displayDev){
            $("#blurBack").css("display", "initial");
            $("#infoDev").css("display", "grid");
            displayDev = false;
        }
        else {
            $("#blurBack").css("display", "none");
            $("#infoDev").css("display", "none");
            displayDev=true;
        }
        
    })

    //Light switch

    $("#lightSwitch").click(function() {
        if ($(".spanMauve")[0]){
            $(".spanMauve").addClass("off");
            $(".spanMauve").removeClass("spanMauve");
            $(".glow").addClass("off");
            $(".glow").removeClass("glow");
            $("#lightsOff").addClass("lightOff");
            $("#lightsOff").removeClass("lightOn");
            $("#lightSwitch").addClass("switchOff");
            $("#lightSwitch").removeClass("switchOn");
            $("#turnOn").addClass("turnOn");
            $("#turnOn").removeClass("turnOff");
            $("#arrow").addClass("turnOn");
            $("#arrow").removeClass("turnOff");
            $("#lightSwitch").animate({left: "46.5vw", top: "50vh"}, 800);
        } else {
            $(".off").addClass("spanMauve");
            $(".off").removeClass("off");
            $(".off").addClass("glow");
            $(".off").removeClass("off");
            $("#lightsOff").addClass("lightOn");
            $("#lightsOff").removeClass("lightOff");
            $("#lightSwitch").addClass("switchOn");
            $("#lightSwitch").removeClass("switchOff");
            $("#turnOn").addClass("turnOff");
            $("#turnOn").removeClass("turnOn");
            $("#arrow").addClass("turnOff");
            $("#arrow").removeClass("turnOn");
            $("#lightSwitch").animate({left: "90vw", top: "1vh"}, 800);
        }
        
      });
      $("#lightSwitch").click();
      $("#imgAccueil").click();
      $("#lightSwitch").click(function(){
          $("#qsj").css("margin-top", "0");
          $("#btnQsj").css("left", "6em");
          $("#btnComp").css("left", "6em");
          $("#btnPass").css("left", "6em");
      })

      $("#progressBar1").pr

})