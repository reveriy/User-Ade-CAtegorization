function categorizeAge(age) {
    if (age < 5) {
      return "Toddler";
    } else if (age <= 12) {
      return "Child";
    } else if (age <= 19) {
      return "Teenager";
    } else if (age <= 35) {
      return "Young Adult";
    } else if (age <= 60) {
      return "Middle-Aged";
    } else {
      return "Senior";
    }
  }
  
  let userAge = parseInt(prompt("Enter your age:"));
  let ageCategory = categorizeAge(userAge);
  alert(userAge);
  alert(`You are a ${ageCategory}.`);
  