function checkVotingEligibility(age) {
    if (age >= 18) {
        return "You are eligible to vote!";
    } else {
        return "Sorry, you are not eligible to vote yet.";
    }
}

document.getElementById("checkButton").addEventListener("click", function () {
    let ageInput = document.getElementById("age").value;
    let result = checkVotingEligibility(parseInt(ageInput));
    document.getElementById("result").textContent = result;
});
