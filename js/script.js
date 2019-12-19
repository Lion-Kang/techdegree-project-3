function buildColorDropdown(theme) {
    // cornflowerblue - Cornflower Blue (JS Puns shirt only
    // darkslategrey - Dark Slate Grey (JS Puns shirt only)
    // gold - Gold (JS Puns shirt only)
    // tomato - Tomato (I &#9829; JS shirt only
    // steelblue - Steel Blue (I &#9829; JS shirt only)
    // dimgrey - Dim Grey (I &#9829; JS shirt only)
    var colors = null;

    if (theme == "js puns"){
        colors = ["cornflowerblue", "darkslategrey", "gold"]
    } else if (theme == "heart js"){
        colors = ["tomato", "steelblue", "dimgrey"]
    } else {
        console.log("I don't know this theme:", theme)
    }

    // do stuff with colors
    var dropdownOptions = "";

    for (var i = 0; i < colors.length; i++){
        dropdownOptions += "<option value=" + colors[i] + ">" + colors[i] + "</option>\n"
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