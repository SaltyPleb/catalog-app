import React from "react";
import Icons from "../images/icons.svg"; // Path to your icons.svg
import PropTypes from 'prop-types';

const Icon = ({ name, color, size, className = "icon" }) => (
  <svg className={`${className} ${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number
};

export default Icon;