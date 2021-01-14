/** @format */

import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const HomeScreen = () => {
  return (
    <>
      <LinkContainer
        style={{ padding: "15px", borderRadius: "100%" }}
        to="/add"
      >
        <Button variant="primary" className="btn-position">
          <i class="lni lni-lg lni-plus"></i>
        </Button>
      </LinkContainer>
    </>
  );
};

export default HomeScreen;
