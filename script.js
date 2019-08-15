    // Managing specific function filter
    // Display specific function filter for KILL
    function displaymorekill() {
        var kill = document.getElementById("kill");
        var annoy = document.getElementById("specificannoy");
        var text = document.getElementById("specifickill");

        //uncheck all specific functions that could be checked previously
        document.getElementById("specificannoy1").checked = false;
        document.getElementById("specificannoy2").checked = false;
        document.getElementById("specificannoy3").checked = false;

        // If the checkbox is checked, display specific function filter
        if (kill.checked == true) {
            text.style.display = "block";
            annoy.style.display = "none";
        }
        else {
            text.style.display = "none";
        }
    }
    // Display specific function filter for ANNOY
    function displaymoreannoy() {
        var annoy = document.getElementById("annoy");
        var kill = document.getElementById("specifickill")
        var text = document.getElementById("specificannoy");

        //uncheck all specific functions that could be checked previously
        document.getElementById("specifickill1").checked = false;
        document.getElementById("specifickill2").checked = false;

        // If the checkbox is checked, display specific function filter
        if (annoy.checked == true) {
            text.style.display = "block";
            kill.style.display = "none";
        }
        else {
            text.style.display = "none";
        }
    }
    // Hide specific function filter for HEAL or PROTECT
    function clearspecific() {
        var heal = document.getElementById("heal");
        var protect = document.getElementById("protect");
        var kill = document.getElementById("specifickill");
        var annoy = document.getElementById("specificannoy");

        //unchecking all specific function
        document.getElementById("specificannoy1").checked = false;
        document.getElementById("specificannoy2").checked = false;
        document.getElementById("specificannoy3").checked = false;
        document.getElementById("specifickill1").checked = false;
        document.getElementById("specifickill2").checked = false;

        //hiding specific function filters
        if (heal.checked == true || protect.checked == true) {
            kill.style.display = "none";
            annoy.style.display = "none";
        }
    }



    /*//checkbox group validation


    var $checkboxgroup = $("input:checkbox[id^='option-']"); // name is not always helpful ;)

    $checkboxgroup.prop('required', true);
    if($checkboxgroup.is(":checked")){
      $checkboxgroup.prop('required', false);
    }*/



    // definining main groups 
    var healers = gods.filter((w) => w.preffunction[0] == 'heal' || w.preffunction[1] == 'heal');
    var protecters = gods.filter((w) => w.preffunction[0] == 'protect' || w.preffunction[1] == 'protect');
    var killers = gods.filter((w) => w.preffunction[0] == 'kill' || w.preffunction[1] == 'kill');
    var annoyers = gods.filter((w) => w.preffunction[0] == 'annoy' || w.preffunction[1] == 'annoy');
    
    //generic main group rule for search
    // var chosenFunction = gods.filter((w) => w.preffunction[0] == {preffered} || w.preffunction[1] == {preffered});

    //loop that logs name of each annoyer
    for (i = 0; i < annoyers.length; i++) {
        console.log(annoyers[i]);
        console.log(annoyers[i].name);
    }



    // choosing randomly if more than one god fulfills the criteria
    //var randomGod = chosenFunction[Math.floor(Math.random() * healers.length)];
    //console.log(randomGod);
    