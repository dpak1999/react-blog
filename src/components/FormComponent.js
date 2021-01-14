/** @format */

import React, { useState } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const FormComponent = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: uuidv4(),
      date: Date.now(),
      title: title,
      author: author,
      category: category,
      tags: tags.split(","),
      description: description,
      content: content,
    });

    setTitle("");
    setAuthor("");
    setCategory("");
    setTags("");
    setDescription("");
    setContent("");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formGridTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter title"
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              placeholder="Author Name"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="choose">Choose...</option>
              <option value="react">React</option>
              <option value="js">JS</option>
              <option value="programming">Programming</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridTags">
          <Form.Label>Tags</Form.Label>
          <Form.Control
            required
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            type="text"
            placeholder="React,redux,javascript"
          />
        </Form.Group>

        <Form.Group controlId="formGridDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Short description"
          />
        </Form.Group>

        <Form.Group controlId="formGridContent">
          <Form.Label>Content</Form.Label>
          <Form.Control
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            placeholder="Post"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default FormComponent;
