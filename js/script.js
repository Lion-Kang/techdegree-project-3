function buildColorDropdown(theme) {
    var colors = null
    var descriptions = null

    if (theme == "js puns"){
        colors = ["cornflowerblue", "darkslategrey", "gold"]
        descriptions = ["Cornflower Blue (JS Puns shirt only)", "Dark Slate Grey (JS Puns shirt only)", "Gold (JS Puns shirt only)"]
    } else if (theme == "heart js"){
        colors = ["tomato", "steelblue", "dimgrey"]
        descriptions = ["Tomato (I &#9829; JS shirt only)", "Steel Blue (I &#9829; JS shirt only)", "Dim Grey (I &#9829; JS shirt only)"]
    } else {
        console.log("I don't know this theme:", theme)
    }

    // do stuff with colors
    var dropdownOptions = "";

    for (var i = 0; i < colors.length; i++){
        dropdownOptions += "<option value=" + colors[i] + ">" + descriptions[i] + "</option>\n"
    }

    return "<select id='color'>" + dropdownOptions + "</select>"
}

// Select first input field on page load
$("#name").focus();

// Hide "Your Job Role" text input
$("#other-title").hide();

// if "other" is selected, show text input box
$("#title").change(function(){
    if($("#title option:selected").val() == "other"){
        $("#other-title").show();
    } else {
        $("#other-title").hide();
    }
});

// Hide "Select Theme" option from drop menu
$("#design").children().first().hide();

// Prepend instruction to beginning of 'color' select tag
$("#color").prepend("<option>Please select a T-Shirt Theme</option>");

// Set default select value to new prepended option
$("#color").val('Please select a T-Shirt Theme');

// show colors for only "Theme - JS Puns"
$("#design").change(function(){
    var theme = $("#design option:selected").val();
    var colorDropdown = buildColorDropdown(theme);
    $("#color").replaceWith(colorDropdown);

    
}); 

// ----------------------- UNDERSTAND BELOW THIS LINE ----------------------------------

var totalActivityCost = 0;
$(".activities").append("<p id='total-activity-cost'>Total: $0","</p>");
// console.log("total activity cost =", totalActivityCost);

function updateActivityBoxesWhenChecked(checkboxChanged) {
    let checkedDateAndTime = $(checkboxChanged).attr('data-day-and-time');
    let $allActivitiesWithSameDateAndTime = $(".activities input[data-day-and-time='"+ checkedDateAndTime + "']");
    $allActivitiesWithSameDateAndTime.prop("disabled", true);
    $(checkboxChanged).prop("disabled", false);
}

$(".activities input").change(function(){
    let changedCheckbox = this; 
    if ($(changedCheckbox).is(":checked")) {
        dataCost = $(changedCheckbox).attr('data-cost');
        dataCost = parseInt(dataCost);
        totalActivityCost += dataCost;
        $("#total-activity-cost").text("Total: $" + totalActivityCost);

        updateActivityBoxesWhenChecked(changedCheckbox);
    } else {
        let uncheckedDateAndTime = $(changedCheckbox).attr('data-day-and-time');
        let $allActivitiesWithSameDateAndTime = $(".activities input[data-day-and-time='"+ uncheckedDateAndTime + "']");
        $allActivitiesWithSameDateAndTime.prop("disabled", false);

        dataCost = $(changedCheckbox).attr('data-cost');
        dataCost = parseInt(dataCost);
        totalActivityCost -= dataCost;
        $("#total-activity-cost").text("Total: $" + totalActivityCost);
    }
});