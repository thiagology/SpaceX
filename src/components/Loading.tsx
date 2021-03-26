import React from "react";

import { Loader } from "react-bulma-components";

export default function Loading() {
  return (
    <Loader className="loader-override"
      style={{
        width: 300,
        height: 300,
        borderTopColor: "transparent",
        borderRightColor: "transparent",
      }}
    />
  );
}
