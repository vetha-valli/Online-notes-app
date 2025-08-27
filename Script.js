function saveNote() {
  let input = document.getElementById("noteInput").value;
  if (input.trim() === "") {
    alert("Please type something!");
    return;
  }

  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(input);
  localStorage.setItem("notes", JSON.stringify(notes));
  document.getElementById("noteInput").value = "";
  displayNotes();
}

function displayNotes() {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  let list = document.getElementById("notesList");
  list.innerHTML = "";

  notes.forEach((note, index) => {
    let li = document.createElement("li");
    li.textContent = note;

    let shareBtn = document.createElement("button");
    shareBtn.textContent = "Share";
    shareBtn.onclick = () => {
      navigator.clipboard.writeText(note);
      alert("Note copied to clipboard!");
    };

    li.appendChild(shareBtn);
    list.appendChild(li);
  });
}

function clearNotes() {
  localStorage.removeItem("notes");
  displayNotes();
}

window.onload = displayNotes;
