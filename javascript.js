function removeExtraSpaces() {
    var originalText = document.getElementById('originalText').value;
    var cleanedText = originalText.replace(/\s+/g, ' ');
    document.getElementById('cleanedText').value = cleanedText;
  }




  function checkAllPassed() {
    // Get all the grade elements
    var grades = document.getElementsByClassName("grade");
    
    // Iterate over each grade element
    for (var i = 0; i < grades.length; i++) {
      var grade = parseInt(grades[i].value); // Parse grade as an integer
      
      // Check if grade is less than 50 (failing grade)
      if (isNaN(grade) || grade < 50) {
        alert("Some students have not passed.");
        return;
      }
    }
    
    alert("All students have passed!");
  }




      // JavaScript code
      var array = [1, 2, 3, 4, 5]; // Initial array

      function displayArray() {
        var arrayList = document.getElementById("arrayList");
        arrayList.innerHTML = ""; // Clear previous list
  
        // Loop through the array and create list items
        array.forEach(function(element) {
          var listItem = document.createElement("li");
          listItem.innerText = element;
          arrayList.appendChild(listItem);
        });
      }
  
      function addElement() {
        var elementInput = document.getElementById("elementInput");
        var newElement = elementInput.value;
  
        if (newElement !== "") {
          array.push(newElement);
          elementInput.value = ""; // Clear input field
          displayArray(); // Update the displayed array
        }
      }
  
      // Initial display of the array
      displayArray();





          // Original array
    const originalArray = [1, 2, 3, 4, 5];

    // Empty array to store the copied elements
    const copiedArray = [];

    // Copy the elements using forEach()
    originalArray.forEach(function(element) {
      copiedArray.push(element);
    });

    // Display the original array
    const originalArrayElement = document.getElementById("originalArray");
    originalArray.forEach(function(element) {
      const li = document.createElement("li");
      li.innerText = element;
      originalArrayElement.appendChild(li);
    });

    // Display the copied array
    const copiedArrayElement = document.getElementById("copiedArray");
    copiedArray.forEach(function(element) {
      const li = document.createElement("li");
      li.innerText = element;
      copiedArrayElement.appendChild(li);
    });






    function sortString() {
        var input = document.getElementById("inputString").value;
        var sortedString = input.split('').sort().reverse().join('');
        document.getElementById("result").innerHTML = "Sorted String: " + sortedString;
      }