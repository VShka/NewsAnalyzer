'use strict'

import "./style.css";

// constants
import GITHUB_API_PROPS from "../../js/constants/github-api-props";

// class
import GithubApi from "../../js/modules/GithubApi";
import CommitCardList from "../../js/components/CommitCardList";

const commitContainer = document.querySelector('.flickity-slider');

const githubApi = new GithubApi(GITHUB_API_PROPS);
const commitCardList = new CommitCardList(
  commitContainer,
  githubApi
);




commitCardList.renderCommit();

