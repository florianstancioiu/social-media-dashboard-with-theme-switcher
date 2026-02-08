export function setTheCorrectIcon(value, $imageElement) {
  switch (value) {
    case "facebook":
      $imageElement.setAttribute("src", "./images/icon-facebook.svg");
      break;
    case "instagram":
      $imageElement.setAttribute("src", "./images/icon-instagram.svg");
      break;
    case "twitter":
      $imageElement.setAttribute("src", "./images/icon-twitter.svg");
      break;
    case "youtube":
      $imageElement.setAttribute("src", "./images/icon-youtube.svg");
      break;
  }
}
