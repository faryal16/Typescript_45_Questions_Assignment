// Q# 28 Stages of Life: Write an if-else chain,
// that determines a person’s stage of life.
// variable define
var age_stage = 16;
//• If the person is less than 2 years old, print a message that the person is a baby.
if (age_stage < 2) {
    console.log("you are a Baby!!");
}
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age_stage >= 2 && age_stage < 4) {
    console.log("Now you are a Toddler!!");
}
// If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age_stage >= 4 && age_stage < 13) {
    console.log("you are being a KId now!!");
}
// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age_stage >= 13 && age_stage < 20) {
    console.log("you are being young, you are teenager ..");
}
// If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age_stage >= 20 && age_stage < 65) {
    console.log("you are an adult!!");
}
// If the person is age 65 or older, print a message that the person is an elder.
else {
    console.log("You are an elder");
}
