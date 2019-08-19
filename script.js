// Managing display of specific function filter
// Display specific function filter for KILL function
function displayMoreKill() {
    var kill = document.getElementById("kill");
    var annoy = document.getElementById("specificannoy");
    var text = document.getElementById("specifickill");

    //uncheck all specific functions that could be checked previously
    document.getElementById("specificannoy1").checked = false;
    document.getElementById("specificannoy2").checked = false;
    document.getElementById("specificannoy3").checked = false;

    // If KILL functon is selected, display specific function filter
    // Collapse other specific function filter
    if (kill.checked == true) {
        text.style.display = "block";
        annoy.style.display = "none";
    }
    else {
        text.style.display = "none";
    }
}
// Display specific function filter for ANNOY function
function displayMoreAnnoy() {
    var annoy = document.getElementById("annoy");
    var kill = document.getElementById("specifickill")
    var text = document.getElementById("specificannoy");

    //uncheck all specific functions that could be checked previously
    document.getElementById("specifickill1").checked = false;
    document.getElementById("specifickill2").checked = false;
    document.getElementById("specifickill3").checked = false;

    // If ANNOY function is checked, display its specific function filter
    // Collapse other specific function filter
    if (annoy.checked == true) {
        text.style.display = "block";
        kill.style.display = "none";
    }
    else {
        text.style.display = "none";
    }
}
// Hide specific function filter for HEAL, PROTECT or MOBILITY 
function clearSpecific() {
    var heal = document.getElementById("heal");
    var protect = document.getElementById("protect");
    var mobility = document.getElementById("mobility");
    var kill = document.getElementById("specifickill");
    var annoy = document.getElementById("specificannoy");

    // Uncheck all specific function that may be checked
    document.getElementById("specificannoy1").checked = false;
    document.getElementById("specificannoy2").checked = false;
    document.getElementById("specificannoy3").checked = false;
    document.getElementById("specifickill1").checked = false;
    document.getElementById("specifickill2").checked = false;

    // Hide specific function filters
    if (heal.checked || protect.checked || mobility.checked) {
        kill.style.display = "none";
        annoy.style.display = "none";
    }
}

// Clear all selection on the entire page
function clearAllCheckboxes() {
    var kill = document.getElementById("specifickill");
    var annoy = document.getElementById("specificannoy");
    
    $("#filter :input").prop("checked", false);
    kill.style.display = "none";
    annoy.style.display = "none";
}

// Select all boxes in the filter
// Available for pantheon filter and class filter
function tickAllBoxes() {
    var target = event.target;
    var name = $(target).prop('name');
    $(`input[name='${name}']`).prop("checked", true);
}

//var chosenPantheon;
//var chosenClass;
//var chosenFunction;
//var chosenSpecFunc;

//MAIN FUNCTION triggered by submit button
function lookForGod( /*pantheon, smiteclass, preffunction, specificfunction*/ ) {


    // creating an array with chosen pantheon
    var chosenPantheon = [];

    // Chinese pantheon
    if ($('.pantheon1').is(':checked')) {
        chosenPantheon.push($('.pantheon1').val());
    }
    // Egyptian pantheon
    if ($('.pantheon2').is(':checked')) {
        chosenPantheon.push($('.pantheon2').val());
    }
    // Greek pantheon
    if ($('.pantheon3').is(':checked')) {
        chosenPantheon.push($('.pantheon3').val());
    }
    // Norse pantheon
    if ($('.pantheon4').is(':checked')) {
        chosenPantheon.push($('.pantheon4').val());
    }
    // Roman pantheon
    if ($('.pantheon5').is(':checked')) {
        chosenPantheon.push($('.pantheon5').val());
    }

    // creating an array with chosen class
    var chosenClass = [];

    // Guardian
    if ($('.smiteclass1').is(':checked')) {
        chosenClass.push($('.smiteclass1').val());
    }
    // Warrior
    if ($('.smiteclass2').is(':checked')) {
        chosenClass.push($('.smiteclass2').val());
    }
    // Hunter
    if ($('.smiteclass3').is(':checked')) {
        chosenClass.push($('.smiteclass3').val());
    }
    // Assassin
    if ($('.smiteclass4').is(':checked')) {
        chosenClass.push($('.smiteclass4').val());
    }
    // Mage
    if ($('.smiteclass5').is(':checked')) {
        chosenClass.push($('.smiteclass5').val());
    }

    // Create array with chosen function
    var chosenFunction = [];

    var func = document.getElementsByName('function');

    for (i = 0; i < func.length; i++) {
        if (func[i].checked) {
            chosenFunction.push(func[i].value);
        }
    }
    // Display warning if no function checked
    // One of the values must be checked for the script to run
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
        // Display warning if KILL is checked but no specific function
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
        // Display warning if ANNOY is checked but no specific function
        if ($('#annoy').is(':checked') && !$('#specificannoy1').is(':checked') && !$('#specificannoy2').is(':checked') && !$('#specificannoy3').is(':checked')) {
            alert('Choose how you want to annoy people');
            return;
        }
    }


    //--------it works! :)

    //Rules for filtering the result
    // variable gods is specified in gods.js
    // 1. Filter by main function 
    // preffunction1 and preffunction 2 are two possible keys for god object
    var filterByFunc = gods.filter((g) => g.preffunction1 == chosenFunction[0] || g.preffunction2 == chosenFunction[0]);

    // 2. filter by pantheon 
    var filterByPantheon = filterByFunc.filter((g) => g.pantheon == chosenPantheon[0] || g.pantheon == chosenPantheon[1] || g.pantheon == chosenPantheon[2] || g.pantheon == chosenPantheon[3] || g.pantheon == chosenPantheon[4]);

    //3. filter by class
    var filterByClass = filterByPantheon.filter((g) => g.smiteclass == chosenClass[0] || g.smiteclass == chosenClass[1] || g.smiteclass == chosenClass[2] || g.smiteclass == chosenClass[3] || g.smiteclass == chosenClass[4]);

    // 4. filter by specific function
    if (chosenSpecFunc.length > 0) {
        var filterBySpecFunc = filterByClass.filter((g) => g.subfunction1 == chosenSpecFunc[0] || g.subfunction1 == chosenSpecFunc[1] || g.subfunction1 == chosenSpecFunc[2] || g.subfunction2 == chosenSpecFunc[0] || g.subfunction2 == chosenSpecFunc[1] || g.subfunction2 == chosenSpecFunc[2]);
    }
    else {
        // if no specific function was available
        var filterBySpecFunc = filterByClass;
    }

    if (filterBySpecFunc.length === 1) {
        // only one god as a result
        var chosenGod = filterBySpecFunc[0];
    }
    else {
        // More than one god left as possible result 
        var chosenGod = filterBySpecFunc[Math.floor(Math.random() * filterBySpecFunc.length)];
    }

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

    //add link to official gamepedia god's page
    function linkToWiki() {
        var underscoreName = chosenGod.name.replace(/\s/g, "_").replace(/'/, "%27");
        //add link to the page
        Object.defineProperty(chosenGod, 'wikipage', {
            value: `https://smite.gamepedia.com/${underscoreName}`,
            writable: false
        });
    }

    var displayChosen = chosenPantheon + " | " + chosenClass + " | " + chosenFunction + " | " + chosenSpecFunc;

    function returnGodInfo() {
        try {
            //trigger the function adding the image
            addImage();
            //trigger the function adding link to gamepedia
            linkToWiki();

            $('#result').html(`
                            <p style="text-align: center; color: white; font-size: 0.8em">Available ${filterBySpecFunc.length} god(s). Click the button above to reroll</p> 
                            <div class="result"> 
                            <h2>${chosenGod.name}</h2>
                            
                            <img src="${chosenGod.godicon}" class="godicon">
                            
                            <p class="parameters">
                            ${chosenGod.pantheon} &#8226; ${chosenGod.smiteclass} &#8226; ${chosenGod.attacktype}
                            <br>
                            <a href="${chosenGod.wikipage}#Abilities" target="_blank">Read more about this god's abilities on gamepedia</a>
                            
                            <p class="youchose">Because you chose following values: ${displayChosen}</p>
                            <p class="note">{note}</p>
                            
                            <h3 style="text-align: center;">Enjoy!</h3>
                            </div>
                            `);
            $("#result")[0].scrollIntoView();
        }
        catch (err) {
            $('#result').html(`God fulfilling criteria not found. <BR> Broaden your search by choosing more filters.`)
        }
    }
    returnGodInfo();
}
