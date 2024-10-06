const experience = 6;
const age = 28;
const knowsProgramming = true;
const hasDegree = false;

if (experience > 3 && age < 30) {
  // console.log("Interview scheduled");
} else {
  // console.log("Candidate rejected");
}

if (experience > 4 || knowsProgramming == true) {
  // console.log("Shortlisted for fast track interview");
} else {
  // console.log("Proceed with standard interview");
}

if (experience > 4 || knowsProgramming == true || hasDegree == true) {
  // console.log("High priority Candidate");
} else {
  // console.log("Regular candidate");
}

if (experience > 4 && age < 30 && hasDegree == true && knowsProgramming == true) {
  // console.log("Candidate meets all criteria");
} else {
  // console.log("Candidate does not meet all criteria");
}

// complex condition

if ((experience > 5 && knowsProgramming == true) || hasDegree == true) {
  console.log("Highly qualified candidate");
}