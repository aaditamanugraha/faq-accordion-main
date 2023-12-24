let test = "Hello World!";

const faqCard = document.getElementsByClassName("faq-card");

for (let i = 0; i < faqCard.length; i++) {
  faqCard[i].addEventListener("click", () => {
    console.log("Berhasil");
  });
}
