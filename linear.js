i// Initialize sum to 0
let sum = 0;

// Loop through first set and add elements to sum if they are not present in second set
for (let i = 0; i < set1.length; i++) {
  if (!set2.includes(set1[i])) {
    sum += set1[i];
  }
}

// Loop through second set and add elements to sum if they are not present in first set
for (let i = 0; i < set2.length; i++) {
  if (!set1.includes(set2[i])) {
    sum += set2[i];
  }
}

// Print the sum of distinct elements
console.log(sum);


// solution using has table
function sumOfDistinctElements(set1, set2) {
    // Create a hash table to store the elements and their counts
    const elements = {};
  
    // Insert all the elements from both sets with their counts
    for (const elem of set1) {
      elements[elem] = (elements[elem] || 0) + 1;
    }
    for (const elem of set2) {
      elements[elem] = (elements[elem] || 0) + 1;
    }
  
    // Sum all the elements with count equal to 1
    let sum = 0;
    for (const elem in elements) {
      if (elements[elem] === 1) {
        sum += parseInt(elem, 10);
      }
    }
  
    return sum;
  }
  
