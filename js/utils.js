export const setIcon = (value, $imageElement) => {
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
};

export const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("We couldn't retrieve the data via fetch request");
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};

export const fillContainerWithData = (
  $container,
  $template,
  data,
  updateTemplateCloneCallback,
) => {
  for (let i = 0; i < data.length; i++) {
    const $clone = document.importNode($template.content, true).children[0];
    const item = data[i];
    const $updatedClone = updateTemplateCloneCallback($clone, item);

    $container.appendChild($updatedClone);
  }
};
