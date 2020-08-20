'use strict'

import "./style.css"

// class
import DataStorage from "../../js/modules/DataStorage";
import KeywordStatistics from "../../js/components/KeywordStatistics"


const analyticsContainer = document.querySelector('.analytics__container');
// инстансы классов
const dataStorage = new DataStorage();
const dataStat = dataStorage.unpackData();
const keyWordStatistics = new KeywordStatistics(
  analyticsContainer,
  dataStat
);

keyWordStatistics.showResults();
