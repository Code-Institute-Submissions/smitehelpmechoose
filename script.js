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

//clear all input fields
function clearAllCheckboxes() {
    $("#filter :input").prop("checked", false);
}


// choosing randomly if more than one god fulfills the criteria
//var randomGod = chosenFunction[Math.floor(Math.random() * healers.length)];
//console.log(randomGod);

var chosenPantheon;
var chosenClass;
var chosenFunction;
var chosenSpecFunc;

//MAIN FUNCTION triggered by submit button
function lookForGod( /*pantheon, smiteclass, preffunction, specificfunction*/ ) {


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


    // var for storing specific function
    var chosenSpecFunc = [];

    if ($('#kill').is(':checked')) {
        //create array for specific function for KILL
        var specfunc = document.getElementsByName('specifickill');

        for (i = 0; i < specfunc.length; i++) {
            if (specfunc[i].checked) {
                chosenSpecFunc.push(specfunc[i].value)
            }
        }
        // display warning if no specific function
        if ($('#kill').is(':checked') && !$('#specifickill1').is(':checked') && !$('#specifickill2').is(':checked')) {
            alert('Choose how you want to kill your enemies');
            return;
        }

    }
    else if($('#annoy').is(':checked')) {
        //create array for specific function for ANNOY

        var specfunc = document.getElementsByName('specificannoy');

        for (i = 0; i < specfunc.length; i++) {
            if (specfunc[i].checked) {
                chosenSpecFunc.push(specfunc[i].value)
            }
        }
        // display warning if no specific function
        if ($('#annoy').is(':checked') && !$('#specificannoy1').is(':checked') && !$('#specificannoy2').is(':checked') && !$('#specificannoy3').is(':checked')) {
            alert('Choose how you want to annoy people');
            return;
        }
    }






    //var yourFunction = gods.filter((g) => g.preffunction == chosenFunction[0]);


    /*// definining main groups 
        var healers = gods.filter((w) => w.preffunction[0] == 'heal' || w.preffunction[1] == 'heal');
        var protecters = gods.filter((w) => w.preffunction[0] == 'protect' || w.preffunction[1] == 'protect');
        var killers = gods.filter((w) => w.preffunction[0] == 'kill' || w.preffunction[1] == 'kill');
        var annoyers = gods.filter((w) => w.preffunction[0] == 'annoy' || w.preffunction[1] == 'annoy');
*/

    //--------it works!

    //generic main group rule for search
    // 1. filter by main function 
    var filterByFunc = gods.filter((g) => g.preffunction[0] == chosenFunction[0] || g.preffunction[1] == chosenFunction[0]);


    //var filterByFuncArray = [];

    /*   //loop that logs each god object filtered (I will need it at the very end)
       for (i = 0; i < filterByFunc.length; i++) {
           console.log(filterByFunc[i]);
           console.log(filterByFunc[i].attacktype);
           //filterByFuncArray.push(filterByFunc[i]);
       }
    */

    //console.log(typeof filterByFuncArray);
    //var filterByClass = filterByFunc.filter((g) => g.smiteclass == chosenClass[0] || g.smiteclass == chosenClass[1]);

    // 2. filter by pantheon 
    var filterByPantheon = filterByFunc.filter((g) => g.pantheon == chosenPantheon[0] || g.pantheon == chosenPantheon[1] || g.pantheon == chosenPantheon[2] || g.pantheon == chosenPantheon[3] || g.pantheon == chosenPantheon[4]);

    //3. filter by class
    var filterByClass = filterByPantheon.filter((g) => g.smiteclass == chosenClass[0] || g.smiteclass == chosenClass[1] || g.smiteclass == chosenClass[2] || g.smiteclass == chosenClass[3] || g.smiteclass== chosenClass[4]);

    // 4. filter by specific function
if (chosenSpecFunc.length > 0) {
    var filterBySpecFunc = filterByClass.filter((g) => g.subfunction == chosenSpecFunc[0] || g.subfunction == chosenSpecFunc[1] || g.subfunction == chosenSpecFunc[2]);
} else {
    var filterBySpecFunc = filterByClass;
}
    console.log(filterByFunc);
    console.log(filterByPantheon);
    console.log(filterByClass);
    console.log(filterBySpecFunc);
    
    if (filterBySpecFunc.length === 1) {
        //only one god left
        var chosenGod = filterBySpecFunc[0];
    } else {
        //more than one god left as possible result 
        var chosenGod = filterBySpecFunc[Math.floor(Math.random() * filterBySpecFunc.length)];
    }
    
    console.log(chosenGod);

}






// add rules for when none pantheon/class are checked
