function personalBMI(name, age, weight, height) {
    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi(weight, height),
        status: status(bmi(weight, height)),
    };

    function bmi(weight, height) {
        return Math.round((weight / Math.pow(height / 100, 2)));
    }

    function status(BMI) {
        if (BMI < 18.5) {
            return "underweight";
        } else if (BMI > 18.5 && BMI < 25) {
            return "normal"
        } else if (BMI >= 25 && BMI < 30) {
            return "overweight";
        } else if (BMI >= 30) {
            return "obese"
        }
    }

    if (person.status === "obese") {
        person.recommendation = "admission required"
    }

    return person;
}

personalBMI('Peter', 29, 75, 182);
personalBMI('Honey Boo Boo', 9, 57, 137);