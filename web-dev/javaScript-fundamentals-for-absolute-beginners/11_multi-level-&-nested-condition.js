// Multi Level Condition

// Grade Calculate

const mark = 45;

if (mark >= 80) {
  console.log("A+");
} else if (mark >= 70) {
  console.log("A");
} else if (mark >= 60) {
  console.log("A-");
} else if (mark >= 50) {
  console.log("B");
} else if (mark >= 40) {
  console.log("C");
} else if (mark >= 33) {
  console.log("D");
} else {
  console.log("F");
}

// Nested Condition

if (mark >= 80) {
  console.log("A+");
} else {
  if (mark >= 70) {
    console.log("A");
  } else {
    if (mark >= 60) {
      console.log("A-");
    } else {
      if (mark >= 50) {
        console.log("B");
      } else {
        if (mark >= 40) {
          console.log("C");
        } else {
          if (mark >= 33) {
            console.log("D");
          } else {
            console.log("F");
          }
        }
      }
    }
  }
}