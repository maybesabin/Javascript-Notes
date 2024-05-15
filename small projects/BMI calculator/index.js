calculate = () => {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("result");

    let bmi = (weight / (height*height));
    result.style.color = "white";
    result.style.fontSize = "26px";

    let feedback;
    if (bmi <= 16.0) {
        feedback = "Severely Under Weight";
    } else if (bmi <= 18.4) {
        feedback = "Under Weight";
    } else if (bmi <= 24.9) {
        feedback = "Normal";
    } else if (bmi <= 30.0) {
        feedback = "Overweight";
    } else {
        feedback = "Severely Obese";
    }

    result.innerHTML = bmi.toFixed(2) + " (" + feedback + ")";
}