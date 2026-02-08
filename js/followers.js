"use strict";

import {
  setTheCorrectIcon,
  fetchData,
  fillContainerWithData,
} from "./utils.js";

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
      const $todaysTotalFollowers = $clone.querySelector(
        ".todays-total-followers",
      );

      // fill element with follower data
      $gradient.style.backgroundColor = followerData.gradient;
      setTheCorrectIcon(followerData.socialNetwork, $socialNetworkIcon);
      $socialUserHandle.textContent = followerData.socialHandle;
      $totalFollowers.textContent = followerData.totalFollowers;

      return $clone;
    },
  );
})();
