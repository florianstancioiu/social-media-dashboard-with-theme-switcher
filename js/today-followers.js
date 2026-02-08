"use strict";

import {
  setTheCorrectIcon,
  fetchData,
  fillContainerWithData,
} from "./utils.js";

(async function () {
  const data = await fetchData("./data.json");
  const $container = document.querySelector(".todays-overview-container");
  const $template = document.querySelector("#today-card-template");

  fillContainerWithData(
    $container,
    $template,
    data.todaysFollowers,
    ($clone, followerData) => {
      // retrieve elements to fill with follower data
      const $title = $clone.querySelector(".overview-title");
      const $total = $clone.querySelector(".total");
      const $totalPercentageValue = $clone.querySelector(
        ".total-percentage-value",
      );
      const $socialNetworkIcon = $clone.querySelector(".social-network-icon");

      // fill element with follower data
      $title.textContent = followerData.title;
      $total.textContent = followerData.value;
      $totalPercentageValue.textContent = followerData.percentage;
      setTheCorrectIcon(followerData.socialNetwork, $socialNetworkIcon);

      return $clone;
    },
  );
})();
