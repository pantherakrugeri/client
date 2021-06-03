import React from "react";
import PropTypes from "prop-types";

function List(props) {
  return <ul>{props.items}</ul>;
}

List.defaultProps = {
  items: ["Provide a list"],
};

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default List;
