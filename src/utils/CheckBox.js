import React from "react";

const checkbox = (params) => {
  return (
    <div class="rkmd-checkbox checkbox-rotate">
      <label class="input-checkbox checkbox-green">
        <input type="checkbox" id="checkbox-2" />
        <span class="checkbox"></span>
      </label>
      <label for="checkbox-2" class="label"></label>
    </div>
  );
};

export default checkbox;
