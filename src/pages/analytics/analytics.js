'use strict'

import "./style.css"

// class
import DataStorage from "../../js/modules/DataStorage";
import KeywordStatistics from "../../js/components/KeywordStatistics";
import Statistics from "../../js/components/Statistics";


const analyticsContainer = document.querySelector('.analytics__container');
const chartContainer = document.querySelector('.chart__container');
// инстансы классов
const dataStorage = new DataStorage();
const dataStat = dataStorage.unpackData();
const keyWordStatistics = new KeywordStatistics(
  analyticsContainer,
  dataStat
);
const statistics = new Statistics(
  chartContainer,
  dataStat
)


keyWordStatistics.showResults();
statistics.renderChart();
