"use strict";

// the function that runs every single thing that happens on page load
async function onPageLoad() {
  const followers = await retrieveTodaysFollowers();

  displayFollowers(followers);
}

// retrieve the followers data from the "server"
async function retrieveTodaysFollowers() {
  try {
    const response = await fetch("./data.json");

    if (!response.ok) {
      throw new Error("We couldn't retrieve the data via fetch request");
    }

    const data = await response.json();

    return data.todaysFollowers;
  } catch {
    console.error(error.message);
  }
}

// append every single follower item into the DOM
function displayFollowers(followers) {
  function fillCloneWithData($clone, followerData) {
    // retrieve elements to fill with follower data
    const $title = $clone.querySelector(".overview-title");
    const $total = $clone.querySelector(".total");
    const $totalPercentageValue = $clone.querySelector(
      ".total-percentage-value",
    );

    // fill element with follower data
    $title.textContent = followerData.title;
    $total.textContent = followerData.value;
    $totalPercentageValue.textContent = followerData.percentage;

    // append clone element to container
    document.querySelector(".todays-overview-container").appendChild($clone);
  }

  // retrieve template tag
  const $template = document.querySelector("#today-card-template");

  // for every single follower item
  // create a new template clone and fill it with data
  // also, after updating the template clone, append it to the container
  for (let i = 0; i < followers.length; i++) {
    const $clone = document.importNode($template.content, true).children[0];
    const follower = followers[i];

    fillCloneWithData($clone, follower);
  }
}

// put things into motion
onPageLoad();
