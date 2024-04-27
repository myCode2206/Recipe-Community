/* eslint-disable react/prop-types */
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function BCard(props) {
  const navigate = useNavigate();

  function onClickedHandler() {
    const id = props.blog._id;
    navigate(`/showBlogs/${id}`);
  }

  return (
    <Card
      className="custom-card text-center"
      style={{
        width: "18rem",
        margin: "10px",
        borderRadius: "8px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
        },
        padding: "6px",
      }}
    >
      <Card.Img
        variant="top"
        src={props.blog.image}
        style={{
          height: "210px",
          objectFit: "cover",
          borderRadius: "8px 8px 0 0",
        }}
      />
      <Card.Body>
        <Card.Title
          style={{
            fontSize: "1.2rem",
            marginBottom: "10px",
            color: "#333",
          }}
        >
          {props.blog.title}
        </Card.Title>
        <Card.Text
          style={{
            color: "#666",
            marginBottom: "15px",
          }}
        >
          {props.blog.body.substring(0, 70)}...
        </Card.Text>
        <Button
          onClick={onClickedHandler}
          style={{
            backgroundColor: "#ffee32",
            color: "#333",
            border: "none",
            borderRadius: "20px",
            padding: "8px 16px",
            width: "100%",
            fontSize: "0.9rem",
            transition: "background-color 0.2s, color 0.2s",
          }}
          variant="primary"
          className="read-more-button"
        >
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BCard;
