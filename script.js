document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".faq-question");
  
    questions.forEach((question) => {
      question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.style.display === "block";
        answer.style.display = isOpen ? "none" : "block";
      });
    });
  });
  