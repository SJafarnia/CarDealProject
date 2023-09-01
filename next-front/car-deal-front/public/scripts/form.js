let prevBtn = document.getElementById("prevBtn") || null;
let nextBtn = document.getElementById("nextBtn") || null;
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("step") || null;
    x.length ? x[n].style.display = "block" : null;
    //... and fix the Previous/Next buttons:
    if (n == 0 && prevBtn) {
        prevBtn.style.display = "none";
    } else {
        prevBtn ? prevBtn.style.display = "inline" : null;
    }
    if (n == (x.length - 1) && nextBtn) {
        nextBtn.innerHTML = "Submit";
        nextBtn.setAttribute('data-final', true);
    } else {
        nextBtn ?
            nextBtn.innerHTML = "Next" : null;
        return
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("step");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    if (n == 0 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    // if you have reached the end of the form...
    currentTab = currentTab + n;
    console.log(currentTab)
    console.log(x.length)
    if (currentTab >= x.length) {
        // ... the form gets submitted:
        // document.getElementById("signUpForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("step");
    nextBtn ? y = x[currentTab].getElementsByTagName("input") : y = true;
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y && y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("stepIndicator")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("stepIndicator");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}


prevBtn ? prevBtn.addEventListener("click", () => { nextPrev(-1) }) : null;
nextBtn ? nextBtn.addEventListener("click", () => { nextPrev(1) }) : null;