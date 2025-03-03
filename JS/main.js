function wrina(Le_Type) {
  let tt = "";

  for (let i = 0; i < data.length; i++) {
    const { name: leNom, type: leType, image: leImg, audio: leAudio } = data[i];

    if (Le_Type.toLowerCase() === leType.toLowerCase()) {
      tt += `
        <div class="containerImg" onclick="sma3('${leAudio}')">
          <img class="mesImage" src="${leImg}">
          <p>${leNom}</p>
        </div>
      `;
    }
  }
  document.getElementById("afficher").innerHTML = tt;
  document.getElementById("footer").innerHTML = `<footer>
  <br><br>
    <p>
      © Copyright 2024 - TASNIM MEZGUELDI
    </p>
  </footer>`;
}

function sma3(sawt) {
  const audio = new Audio(sawt);
  audio.play();
}
