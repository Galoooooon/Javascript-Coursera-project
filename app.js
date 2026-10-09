
function upDate(previewPic) {
  console.log("upDate triggered");
  console.log("alt:", previewPic.alt);
  console.log("src:", previewPic.src);

  const display = document.getElementById("image");
  display.innerHTML = previewPic.alt;
  display.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  console.log("unDo triggered");

  const display = document.getElementById("image");
  display.style.backgroundImage = "url('')";
  display.innerHTML = "Hover over an image below to display here.";
}
