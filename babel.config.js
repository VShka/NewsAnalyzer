const presets = [
  [
    "@babel/env",
    {
      targets: { // указываем поддержку браузеров
        chrome: "64",
        edge: "15",
        ie: "11",
        firefox: "50",
        safari: "11.1"
        //chromeMobile
        //YandexBrowser
      },
      useBuiltIns: "usage",
      corejs: "3.4.1"
    }
  ],
];

module.exports = { presets };