let darkMode = false;

function changeDarkMode() {
    if(darkMode) {
        // light mode
        darkMode = false;
        document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty("--background", "#efe7e5");
        document.getElementById("dark-light-mode").innerHTML = "Mode sombre";
    }else {
        // dark mode
        darkMode = true;
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--background-color", "black");
        document.getElementById("dark-light-mode").innerHTML = "Mode claire";
    }
    
   
    if(darkMode) {
        // light mode
        darkMode = true;
        document.documentElement.style.setProperty("--text-color", "#fff0ec");
        document.documentElement.style.setProperty("--background", "#efe7e5");
        document.getElementById("dark-light-mode").innerHTML = "Mode claire";
    }else {
        // dark mode
        darkMode = false;
        document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty("--background-color", "#efe7e5");
        document.getElementById("dark-light-mode").innerHTML = "Mode sombre";
    }
    
}