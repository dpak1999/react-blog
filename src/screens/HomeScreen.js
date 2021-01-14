/** @format */

import React from "react";
import { Button } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <>
      <Button
        style={{ padding: "15px", borderRadius: "50%" }}
        variant="dark"
        className="btn-position"
      >
        <i class="lni lni-lg lni-plus"></i>
      </Button>
    </>
  );
};

export default HomeScreen;
