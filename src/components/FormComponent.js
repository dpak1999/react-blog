/** @format */

import React from "react";
import { Form, Button, Col, Container } from "react-bootstrap";

const FormComponent = () => {
  return (
    <Container>
      <Form>
        <Form.Group controlId="formGridTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control placeholder="Author Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridTags">
          <Form.Label>Tags</Form.Label>
          <Form.Control placeholder="React,redux,javascript" />
        </Form.Group>

        <Form.Group controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group controlId="formGridContent">
          <Form.Label>Content</Form.Label>
          <Form.Control />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default FormComponent;
