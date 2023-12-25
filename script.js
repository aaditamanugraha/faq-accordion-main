document.addEventListener("DOMContentLoaded", function () {
  const faqCard = document.querySelectorAll(".faq-card");

  faqCard.forEach(function (item) {
    const question = item.querySelector(".question");
    const answer = item.querySelector(".answer");
    const icon = item.querySelector(".icon");

    question.addEventListener("click", function () {
      question.classList.toggle("active");

      if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.src = "./assets/images/icon-plus.svg";
        icon.style.transform = 'rotate(0deg)';
        icon.style.transition = "0.3s ease";
      } else {
        answer.style.display = "block";
        icon.src = "./assets/images/icon-minus.svg";
        icon.style.transform = 'rotate(180deg)';
        icon.style.transition = "0.3s ease";
      }
    });
  });
});
