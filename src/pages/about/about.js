'use strict'

import "./style.css";

// constants
import GITHUB_API_PROPS from "../../js/constants/github-api-props";

// class
import GithubApi from "../../js/modules/GithubApi";
import CommitCardList from "../../js/components/CommitCardList";

const sliderContainer = document.querySelector('.carousel');
const flkty = new Flickity(sliderContainer, {
  freeScroll: true,
  wrapAround:  true,
  initialIndex: 0,
  groupCells: true
})
const commitContainer = document.querySelector('.flickity-slider');

const githubApi = new GithubApi(GITHUB_API_PROPS);
const commitCardList = new CommitCardList(
  commitContainer,
  githubApi
);




commitCardList.renderCommit();

