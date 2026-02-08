"use strict";

import { setIcon, fetchData, fillContainerWithData } from "./utils.js";

(async function () {
  const data = await fetchData("./data.json");
  const $container = document.querySelector(".followers-container");
  const $template = document.querySelector("#followers-card-template");

  fillContainerWithData(
    $container,
    $template,
    data.followers,
    ($clone, followerData) => {
      // retrieve elements to fill with follower data
      const $gradient = $clone.querySelector(".gradient");
      const $socialNetworkIcon = $clone.querySelector(".social-network-icon");
      const $socialUserHandle = $clone.querySelector(".social-user-handle");
      const $totalFollowers = $clone.querySelector(".total-followers");
      const $totalFollowersText = $clone.querySelector(".total-followers-text");
      const $todaysOrder = $clone.querySelector(".todays-asc");
      const $todaysFollowersContainer = $clone.querySelector(
        ".todays-followers-container",
      );
      const $todaysTotalFollowers = $clone.querySelector(
        ".todays-total-followers",
      );

      // fill element with follower data
      $gradient.style.background = followerData.gradient;
      setIcon(followerData.socialNetwork, $socialNetworkIcon);
      $socialUserHandle.textContent = followerData.socialHandle;
      $totalFollowers.textContent = followerData.totalFollowers;
      $totalFollowersText.textContent = followerData.title;
      $todaysFollowersContainer.style.color =
        followerData.todaysFollowersOrder === "ASC"
          ? "var(--color-green)"
          : "var(--color-red)";
      $todaysOrder.setAttribute(
        "src",
        followerData.todaysFollowersOrder === "ASC"
          ? "./images/icon-up.svg"
          : "./images/icon-down.svg",
      );
      $todaysTotalFollowers.textContent = followerData.todaysFollowers;

      return $clone;
    },
  );
})();
