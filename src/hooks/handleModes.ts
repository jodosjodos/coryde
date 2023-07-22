



const handleDarkModeToggle = (event:any) => {
  if (event.target.checked) {
    document.documentElement.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    document.documentElement.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
};
