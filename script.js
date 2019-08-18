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
    var mobility = document.getElementById("mobility");
    var kill = document.getElementById("specifickill");
    var annoy = document.getElementById("specificannoy");

    //unchecking all specific function
    document.getElementById("specificannoy1").checked = false;
    document.getElementById("specificannoy2").checked = false;
    document.getElementById("specificannoy3").checked = false;
    document.getElementById("specifickill1").checked = false;
    document.getElementById("specifickill2").checked = false;

    //hiding specific function filters
    if (heal.checked == true || protect.checked == true || mobility.checked) {
        kill.style.display = "none";
        annoy.style.display = "none";
    }
}

//clear all input fields
function clearAllCheckboxes() {
    $("#filter :input").prop("checked", false);
}


function tickAllBoxes() {
    var target = event.target;
    var name = $(target).prop('name');
    $(`input[name='${name}']`).prop("checked", true);
};




// choosing randomly if more than one god fulfills the criteria
//var randomGod = chosenFunction[Math.floor(Math.random() * healers.length)];


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
    if (!$('#heal').is(':checked') && !$('#protect').is(':checked') && !$('#kill').is(':checked') && !$('#annoy').is(':checked') && !$('#mobility').is(':checked')) {
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
        if ($('#kill').is(':checked') && !$('#specifickill1').is(':checked') && !$('#specifickill2').is(':checked') && !$('#specifickill3').is(':checked')) {
            alert('Choose how you want to kill your enemies');
            return;
        }

    }
    else if ($('#annoy').is(':checked')) {
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


    //--------it works!

    //generic main group rule for search
    // 1. filter by main function 
    var filterByFunc = gods.filter((g) => g.preffunction[0] == chosenFunction[0] || g.preffunction[1] == chosenFunction[0]);

    // 2. filter by pantheon 
    var filterByPantheon = filterByFunc.filter((g) => g.pantheon == chosenPantheon[0] || g.pantheon == chosenPantheon[1] || g.pantheon == chosenPantheon[2] || g.pantheon == chosenPantheon[3] || g.pantheon == chosenPantheon[4]);

    //3. filter by class
    var filterByClass = filterByPantheon.filter((g) => g.smiteclass == chosenClass[0] || g.smiteclass == chosenClass[1] || g.smiteclass == chosenClass[2] || g.smiteclass == chosenClass[3] || g.smiteclass == chosenClass[4]);

    // 4. filter by specific function
    if (chosenSpecFunc.length > 0) {
        var filterBySpecFunc = filterByClass.filter((g) => g.subfunction == chosenSpecFunc[0] || g.subfunction == chosenSpecFunc[1] || g.subfunction == chosenSpecFunc[2]);
    }
    else {
        var filterBySpecFunc = filterByClass;
    }
    console.log(filterByFunc);
    console.log(filterByPantheon);
    console.log(filterByClass);
    console.log(filterBySpecFunc);

    if (filterBySpecFunc.length === 1) {
        //only one god left
        var chosenGod = filterBySpecFunc[0];
    }
    else {
        //more than one god left as possible result 
        var chosenGod = filterBySpecFunc[Math.floor(Math.random() * filterBySpecFunc.length)];
    }



    function returnGodInfo() {
        try {
            //adding godicon value - based on transformed obj.name
            function addImage() {
                //remove spaces and single quotes from name
                var noSpacesName = chosenGod.name.replace(/\s/g, "").replace(/'/, "");
                //add godicon key and its value
                Object.defineProperty(chosenGod, 'godicon', {
                    value: `gods/T_${noSpacesName}_Default_Icon.png`,
                    writable: false
                });
            }
            //trigger the function
            addImage();

            $('#result').html(`
            
                            <sub>Available ${filterBySpecFunc.length} god(s). <a href="#" onclick="lookForGod()">Reroll?</a></sub> 
                            <h2>${chosenGod.name}</h2>
                            
                            <img src="${chosenGod.godicon}" class="godicon">
                            
                            <li class="parameters">
                            <ul>${chosenGod.pantheon}</ul>
                            <ul>${chosenGod.smiteclass}</ul>
                            <ul>${chosenGod.attacktype}</ul>
                            </li>
                            
                            
                            <p class="youchose">Because you chose: ${chosenPantheon} <BR> ${chosenClass} <BR> ${chosenFunction} <BR> ${chosenSpecFunc}</p>
                            <p class="note">Note: <BR>
                            {note}</p>
                            
                            <h3>Enjoy!</h3>
                            `);



            $("#result")[0].scrollIntoView();
        }
        catch (err) {
            $('#result').html(`God fulfilling criteria not found. <BR> Broaden your search by choosing more filters.`)
        }

    }


    returnGodInfo();

}








//scroll to view needs fixing 
//tickallboxes needs rewriting
//style for 320px and 600px width needed
