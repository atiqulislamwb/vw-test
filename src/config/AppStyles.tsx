export default class AppStyles {
  static color = function (opacity = 1) {
    opacity = opacity > 1 ? 1 : opacity < 0 ? 0 : opacity;

    return {
      white: `rgba(255, 255, 255, ${opacity})`,
      red: `rgba(255, 0, 0, ${opacity})`,
      black: `rgba(0, 0, 0, ${opacity})`,
      gray: `rgba(128, 128, 128, ${opacity})`,
      green: `rgba(0,128,0, ${opacity})`,
      skyblue: `rgba(0,106,175, ${opacity})`,
    };
  };
}
