/** @format */

import React from "react";
import { Button, Card, Form } from "react-bootstrap";

const CommentForm = () => {
  return (
    <Card className="my-4">
      <Card.Header>Leave a comment</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CommentForm;
