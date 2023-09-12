function grade(score) {
  if (score >= 80 && score <= 100) {
    console.log("You got A");
  } else if (score >= 70 && score < 80) {
    console.log("You got B");
  } else if (score >= 60 && score < 70) {
    console.log("You got C");
  } else if (score >= 50 && score < 60) {
    console.log("You got D");
  } else if (score < 50) {
    console.log("You got F");
  } else {
    console.log("error");
  }
}
grade(100);
