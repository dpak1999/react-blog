/** @format */

import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import FormComponent from "../components/FormComponent";

const AddPostScreen = () => {
  return (
    <div>
      <h1 className="text-center my-4">Add a new Post</h1>
      <hr />
      <div className="border border-primary rounded container p-4">
        <FormComponent />
      </div>
      <LinkContainer style={{ padding: "15px", borderRadius: "100%" }} to="/">
        <Button variant="primary" className="btn-position">
          <i class="lni lni-lg lni-home"></i>
        </Button>
      </LinkContainer>
    </div>
  );
};

export default AddPostScreen;
