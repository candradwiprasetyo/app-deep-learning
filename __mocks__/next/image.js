const React = require("react");

const nextImage = ({ src, alt }) => {
  return React.createElement("img", { src, alt });
};

module.exports = nextImage;
