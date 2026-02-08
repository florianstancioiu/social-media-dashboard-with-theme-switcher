"use strict";

import { setIcon, fetchData, fillContainerWithData } from "./utils.js";

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
      const $totalPercentageWrapper = $clone.querySelector(
        ".total-percentage-wrapper",
      );
      const $totalPercentageOrder = $clone.querySelector(
        ".total-percentage-asc",
      );
      const $totalPercentageValue = $clone.querySelector(
        ".total-percentage-value",
      );
      const $socialNetworkIcon = $clone.querySelector(".social-network-icon");

      // fill element with follower data
      $title.textContent = followerData.title;
      $total.textContent = followerData.value;
      $totalPercentageWrapper.style.color =
        followerData.percentageOrder === "ASC"
          ? "var(--color-green)"
          : "var(--color-red)";
      $totalPercentageOrder.setAttribute(
        "src",
        followerData.percentageOrder === "ASC"
          ? "./images/icon-up.svg"
          : "./images/icon-down.svg",
      );
      $totalPercentageValue.textContent = followerData.percentage;
      setIcon(followerData.socialNetwork, $socialNetworkIcon);

      return $clone;
    },
  );
})();
