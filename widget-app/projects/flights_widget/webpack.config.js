const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "flights_widget",

  exposes: {
    // Adjusted line:
    "./Module": "./projects/flights_widget/src/app/flights/flights.module.ts",
    "./Component":
      "./projects/flights_widget/src/app/flights/flights-search/flights-search.component.ts",
    "./Component":
      "./projects/flights_widget/src/app/flights/flights-search-standalone/flights-search-standalone.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
