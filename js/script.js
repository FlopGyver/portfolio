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

})