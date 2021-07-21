window.onload = () => {
    let button = document.querySelector("#cal_button");

    // Function for calculating
    button.addEventListener("click", computeResult);
};

function computeResult(e) {

// get user input number from the website

    const number_Slide = document.getElementById("slideNumber").value;

    const number_Image = document.getElementById("imageNumber").value;

    const number_Video = document.getElementById('videoNumber').value;

    const number_Simulation = document.getElementById('simulationNumber').value;

// Calculat

    const totalTime = ((parseFloat(number_Slide) / 30) * 14 + number_Image * 2 + number_Video * 5 + number_Simulation * 5 + 1).toFixed(0);

// Show Results

   if (isNaN(totalTime)){
        document.getElementById("totalDevTime").innerHTML = "Please enter 0-500 for each item";
    } else {
        document.getElementById("totalDevTime").innerHTML = "<strong>" + totalTime + " Days</strong>";
    }

}

