// ==== FILTER PROJECT ====
const filter = document.getElementById("categoryFilter");
const projects = document.querySelectorAll(".project-card");

filter.addEventListener("change", () => {
  const value = filter.value;

  projects.forEach((proj) => {
    if (value === "all" || proj.dataset.category === value) {
      proj.style.display = "block";
    } else {
      proj.style.display = "none";
    }
  });
});
