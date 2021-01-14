/** @format */

import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CardComponent from "../components/CardComponent";
import { blog } from "../data";

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Row>
          <CardComponent blog={blog} />
        </Row>
      </Container>
      <LinkContainer
        style={{ padding: "15px", borderRadius: "100%" }}
        to="/add"
      >
        <Button variant="primary" className="btn-position">
          <i className="lni lni-lg lni-plus"></i>
        </Button>
      </LinkContainer>
    </>
  );
};

export default HomeScreen;
