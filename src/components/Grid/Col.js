import React from "react";

export const Col = ({ size, classes, children }) =>
  <div className={size.split(" ").map(size => "col-" + size).join(" ") + ' ' + (classes ? classes : "")}>
    {children}
  </div>;
