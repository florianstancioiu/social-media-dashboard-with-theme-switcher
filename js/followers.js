"use strict";

async function onPageLoad() {
  const followers = await retrieveFollowers();

  displayFollowers(followers);
}

async function retrieveFollowers() {
  try {
    const response = await fetch("./data.json");

    if (!response.ok) {
      throw new Error("We couldn't retrieve the data via fetch request");
    }

    const data = await response.json();

    return data.followers;
  } catch {
    console.error(error.message);
  }
}

function displayFollowers(followers) {
  function fillCloneWithData($clone, followerData) {
    // retrieve elements to fill with follower data
    const $gradient = $clone.querySelector(".gradient");
    const $socialNetworkIcon = $clone.querySelector(".social-network-icon");
    const $socialUserHandle = $clone.querySelector(".social-user-handle");
    const $totalFollowers = $clone.querySelector(".total-followers");
    const $todaysTotalFollowers = $clone.querySelector(
      ".todays-total-followers",
    );

    // fill element with follower data
    $gradient.style = {
      backgroundColor: followerData.gradient,
    };

    $socialUserHandle.textContent = followerData.socialHandle;
    $totalFollowers.textContent = followerData.totalFollowers;

    // append clone element to container
    document.querySelector(".followers-container").appendChild($clone);
  }

  // retrieve template tag
  const $template = document.querySelector("#followers-card-template");

  // for every single follower item
  // create a new template clone and fill it with data
  // also, after updating the template clone, append it to the container
  for (let i = 0; i < followers.length; i++) {
    const $clone = document.importNode($template.content, true).children[0];
    const follower = followers[i];

    fillCloneWithData($clone, follower);
  }
}

onPageLoad();
