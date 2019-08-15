    // Managing specific function filter
    // Display specific function filter for KILL
    function displayMoreKill() {
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
    function displayMoreAnnoy() {
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
    function clearSpecific() {
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

    // choosing randomly if more than one god fulfills the criteria
    //var randomGod = chosenFunction[Math.floor(Math.random() * healers.length)];
    //console.log(randomGod);

    var chosenPantheon
    var chosenClass
    var chosenFunction
    var chosenSpecificFunc


    function lookForGod(pantheon, smiteclass, preffunction, specificfunction) {


        // creating array with chosen pantheon
        var chosenPantheon = [];

        if ($('.pantheon1').is(':checked')) {
            chosenPantheon.push($('.pantheon1').val());
        }
        if ($('.pantheon2').is(':checked')) {
            chosenPantheon.push($('.pantheon2').val());
        }
        if ($('.pantheon3').is(':checked')) {
            chosenPantheon.push($('.pantheon3').val());
        }
        if ($('.pantheon4').is(':checked')) {
            chosenPantheon.push($('.pantheon4').val());
        }
        if ($('.pantheon5').is(':checked')) {
            chosenPantheon.push($('.pantheon5').val());
        }

        // creating array with chosen class
        var chosenClass = [];

        if ($('.smiteclass1').is(':checked')) {
            chosenClass.push($('.smiteclass1').val());
        }
        if ($('.smiteclass2').is(':checked')) {
            chosenClass.push($('.smiteclass2').val());
        }
        if ($('.smiteclass3').is(':checked')) {
            chosenClass.push($('.smiteclass3').val());
        }
        if ($('.smiteclass4').is(':checked')) {
            chosenClass.push($('.smiteclass4').val());
        }
        if ($('.smiteclass5').is(':checked')) {
            chosenClass.push($('.smiteclass5').val());
        }

        // creating array with chosen function
        var chosenFunction = [];

        var func = document.getElementsByName('function');

        for (i = 0; i < func.length; i++) {
            if (func[i].checked) {
                chosenFunction.push(func[i].value)
            }
        }
        // display warning if no function checked
        if (!$('#heal').is(':checked') && !$('#protect').is(':checked') && !$('#kill').is(':checked') && !$('#annoy').is(':checked')) {
            alert('You have to tell me what you want to do!');
            return;
        }

        //create array for specific function for KILL

        var specificFunctionK = [];

        var specfunc = document.getElementsByName('specifickill');

        for (i = 0; i < specfunc.length; i++) {
            if (specfunc[i].checked) {
                specificFunctionK.push(specfunc[i].value)
            }
        }
        // display warning if no specific function
        if ($('#kill').is(':checked') && !$('#specifickill1').is(':checked') && !$('#specifickill2').is(':checked')) {
            alert('Choose how you want to kill your enemies');
            return;
        }


        //create array for specific function for ANNOY

        var specificFunctionA = [];

        var specfunc = document.getElementsByName('specificannoy');

        for (i = 0; i < specfunc.length; i++) {
            if (specfunc[i].checked) {
                specificFunctionA.push(specfunc[i].value)
            }
        }
        // display warning if no specific function
        if ($('#annoy').is(':checked') && !$('#specificannoy1').is(':checked') && !$('#specificannoy2').is(':checked') && !$('#specificannoy3').is(':checked')) {
            alert('Choose how you want to annoy people');
            return;
        }

        var yourFunction = gods.filter((g) => g.preffunction == chosenFunction[0]);






        /*// definining main groups 
        var healers = gods.filter((w) => w.preffunction[0] == 'heal' || w.preffunction[1] == 'heal');
        var protecters = gods.filter((w) => w.preffunction[0] == 'protect' || w.preffunction[1] == 'protect');
        var killers = gods.filter((w) => w.preffunction[0] == 'kill' || w.preffunction[1] == 'kill');
        var annoyers = gods.filter((w) => w.preffunction[0] == 'annoy' || w.preffunction[1] == 'annoy');
*/

        //--------it works!

        //generic main group rule for search
        var dontHaveANameYet = gods.filter((w) => w.preffunction[0] == chosenFunction[0] || w.preffunction[1] == chosenFunction[0]);

        //loop that logs name of each annoyer
        for (i = 0; i < dontHaveANameYet.length; i++) {
            console.log(dontHaveANameYet[i]);
            console.log(dontHaveANameYet[i].attacktype);
        }

        //log everything to the console for testing
        console.log(chosenPantheon);
        console.log(chosenClass);
        console.log(chosenFunction);
        console.log(specificFunctionK);
        console.log(specificFunctionA);
    }




    // add rules for when none pantheon/class are checked
    