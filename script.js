function showSection(id) {
  // Hide all sections
  document.querySelectorAll("section").forEach(section => {
    section.classList.remove("active");
  });

  // Show selected section
  document.getElementById(id).classList.add("active");
}

function toggleAnswer(id) {
  const answer = document.getElementById(id);
  answer.classList.toggle("hidden");
}

function submitExam() {
  let score = 0;

  const q1 = document.getElementById("q1").value.trim();
  const q2 = document.getElementById("q2").value.trim().toLowerCase();

  if (q1 === "4") score++;
  if (q2 === "earth") score++;

  document.getElementById("result").innerText =
    "Your score: " + score + "/2";
}
function showSection(sectionId) {
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    section.style.display = "none";
  });

  document.getElementById(sectionId).style.display = "block";
}