// Select all question-answer elements
const articleQA = document.querySelectorAll(".jsQA");

// Select all answer elements
const ansElem = document.querySelectorAll(".jsAns");

// Loop through each question-answer pair
articleQA.forEach((question, index) => {
  question.addEventListener("click", () => {
    // Check if the question is already active
    if (question.classList.contains("active")) {
      // If active, remove the 'active' class and collapse the answer
      question.classList.remove("active");
      ansElem[index].style.maxHeight = null;
    } 
    else {
      // Close all other open answers
      articleQA.forEach((item, i) => {
        if (item !== question) {
          item.classList.remove("active");
          ansElem[i].style.maxHeight = null;
        }
      });
      // If not active, add the 'active' class and expand the answer
      question.classList.add("active");
      ansElem[index].style.maxHeight = ansElem[index].scrollHeight + "px";
    }
  });
});
