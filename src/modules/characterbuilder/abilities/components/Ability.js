import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";

function Ability(props) {
  const print = props.print;

  if (print) {
    return (
      <div>
        {props.abilityName}: {props.abilityValue}
      </div>
    );
  }
  return (
    <TextField
      inputProps={props.inputProps}
      id={props.abilityId}
      className={props.className}
      label={props.abilityName}
      type={props.abilityType}
      value={props.abilityValue}
      onChange={props.onChange}
    />
  );
}

export default Ability;
