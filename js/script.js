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
$("#design").children().first().remove();

// Prepend instruction to beginning of 'color' select tag
$("#color").prepend("<option>Please select a T-Shirt Theme</option>");

// Set default select value to new prepended option
$("#color").val('Please select a T-Shirt Theme');

// show colors for only "Theme - JS Puns"
$("#design").change(function(){
    if($("#design option:selected").val() == "js puns"){
        $("#colors-js-puns").show();
    } else {
        $("#colors-js-puns").hide();
    }
}); 