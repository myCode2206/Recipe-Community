import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const HomeCard = (props) => {
  return (
    <Card
      style={{
        width: "18rem",
        textAlign: "center",
        border: "1px solid #ffba08",
        margin: "10px",
        borderRadius: "6px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Card.Img
        variant="top"
        src={props.image}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderTopLeftRadius: "6px",
          borderTopRightRadius: "6px",
        }}
      />
      <Card.Body>
        <Card.Title style={{ marginBottom: "10px" }}>{props.name}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button
          variant="primary"
          style={{
            backgroundColor: "#ffee32",
            border: "none",
            marginTop: "auto",
          }}
        >
          <Link
            to={props.url}
            style={{ textDecoration: "none", color: "black" }}
          >
            Read More
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default HomeCard;
