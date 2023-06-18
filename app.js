const notesDiv = document.querySelector("#notes");
const scrn = document.querySelector(".screen");
let a0 = "",
  a1,
  a2;
let note = ["Do", "Re", "mi", "fa", "sol", "la", "si"];
let color = ["brown", "lightblue", "yellow", "green", "skyblue", "magenta"];
color.forEach((cl) => {
  note.forEach((n, i) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";
    const noteContent = document.createElement("span");
    const bracknote = document.createElement("div");
    bracknote.className = "black-note";
    const brackNoteConatiner = document.createElement("div");
    brackNoteConatiner.className = "bnc";
    // brackNoteConatiner.appendChild(bracknote);
    if (i != 3 && i != 0) {
      notesDiv.appendChild(brackNoteConatiner);
      noteDiv.classList.add("margin-note");
    }
    noteContent.style.backgroundColor = cl;
    noteContent.className = "noteContent";
    noteContent.innerText = n;
    noteDiv.appendChild(noteContent);
    notesDiv.appendChild(noteDiv);
  });
});

let playNotes = notesDiv.querySelectorAll("div");
console.log(playNotes.length);
playNotes.forEach((pnote, i) => {
  pnote.onclick = () => {
    console.log(i);
    const audio = new Audio(`/sounds/${i % 12}.wav`);
    // audio = `/sound/${i}.mp3`;
    audio.play();
  };

  pnote.onmouseenter = () => {
    playNote(`/sounds/s${i % 12}.wav`, pnote);
  };
  pnote.onmouseleave = () => {
    scrn.innerText = "";
    pnote.classList.remove("playing");
  };
});

document.addEventListener("keydown", (e) => {
  let Nts = [
    "q",
    "1",
    "w",
    "2",
    "e",
    "r",
    "3",
    "t",
    "4",
    "y",
    "5",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
  ];
  Nts.forEach((K, ki) => {
    if (K == e.key) {
      const Nt = notesDiv.querySelectorAll("div")[ki];
      playNote(`/sounds/s${ki}.wav`, Nt);
    } else {
    }
  });
});
document.addEventListener("keyup", (e) => {
  let Nts = [
    "q",
    "1",
    "w",
    "2",
    "e",
    "r",
    "3",
    "t",
    "4",
    "y",
    "5",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
  ];
  Nts.forEach((K, ki) => {
    if (K == e.key) {
      const Nt = notesDiv.querySelectorAll("div")[ki];
      PouseNote(`/sounds/s${ki}.wav`, Nt);
    } else {
    }
  });
});

const playNote = (n, pnote) => {
  if (a0 !== "") {
    const audio1 = new Audio(a0);
    // audio = `/sound/${i}.mp3`;
    audio1.pause();
    a0 = a1;
    a2 = a1;
    a2 = n1;
  }

  const audio = new Audio(n);
  // audio = `/sound/${i}.mp3`;
  audio.play();
  pnote.classList.add("playing");
  scrn.innerText = `playing.......
  💓🎷🎵🎼🎶🎷🎸🎻🎺📯 => ${pnote.innerText}
  `;
};
const PouseNote = (n, pnote) => {
  const audio = new Audio(n);
  // audio = `/sound/${i}.mp3`;
  audio.pause();
  pnote.classList.remove("playing");
  scrn.innerText = `playing.......
  💓🎷🎵🎼🎶🎷🎸🎻🎺📯 => ${pnote.innerText}
  `;
};
