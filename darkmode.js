let darkmode = localStorage.getItem("dark-mode");
const darktoggle = document.getElementById("dark-toggle");
const body_element = document.body;

const enableDarkmode = () => {
  body_element.classList.add("dark-mode");
  localStorage.setItem("dark-mode", "active");
};

const disableDarkmode = () => {
  body_element.classList.remove("dark-mode");
  localStorage.setItem("dark-mode", null);
};

if (darktoggle) {
  if (darkmode === "active") {
    enableDarkmode();
  }

  darktoggle.addEventListener("click", () => {
    const isDark = body_element.classList.contains("dark-mode");
    if (isDark) {
      disableDarkmode();
    } else {
      enableDarkmode();
    }
  });
} else {
  console.error("Dark Mode Toggle Button not found!");
}
