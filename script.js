    function showSidebar() {
      document.querySelector('.sidebar').classList.add('show');
    }

    function hideSidebar() {
      document.querySelector('.sidebar').classList.remove('show');
    }
   // Function to handle the search
function searchContent() {
  const input = document.querySelector(".input").value.toLowerCase().trim();

  // Define pages and their keywords
  const pages = {
    "home": "index.html",
    "python": "python.html",
    "java": "java.html",
    "javascript": "javascript.html",
    "js": "javascript.html",
    "c++": "cpp.html",
    "cpp": "cpp.html",
    "html": "html.html",
    "css": "css.html",
    "quiz": "startquiz.html",
    "about": "about.html",
    "contact": "index.html"
  };

  if (pages[input]) {
    // Redirect to the matched page
    window.location.href = pages[input];
  } else {
    // If not found, show a friendly alert
    alert("No matching page found. Please try: Python, Java, HTML, CSS, etc.");
  }
}

// Attach search function to button
document.querySelector(".button").addEventListener("click", searchContent);

// Also allow pressing Enter key inside the input
document.querySelector(".input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    searchContent();
  }
});
