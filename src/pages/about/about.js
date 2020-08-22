'use strict'

import "swiper/swiper-bundle.css"
import "./style.css";


import Swiper from "swiper/bundle";

// constants
import GITHUB_API_PROPS from "../../js/constants/github-api-props";


// class
import GithubApi from "../../js/modules/GithubApi";
import CommitCardList from "../../js/components/CommitCardList";

const commitContainer = document.querySelector('.swiper-wrapper');

const githubApi = new GithubApi(GITHUB_API_PROPS);
const commitCardList = new CommitCardList(
  commitContainer,
  githubApi
);
// слайдер
const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  freeMode: true,
  slidesPerView: 'auto',
  observer: true
});

commitCardList.renderCommit();







