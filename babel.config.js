module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // plugins: [
    //   "babel-plugin-module-resolver",
    //   {
    //     root: ["./app"],
    //     alias: {
    //       "@components/*": ["./app/components"],
    //       "@config/*": ["./app/config"],
    //       "@hooks/*": ["./app/hooks"],
    //       "@screens/*": ["./app/screens"],
    //       "@assets/*": ["./app/assets"],
    //       "@navigation/*": ["./app/navigation"],
    //     },
    //   },
    // ],
  };
};
