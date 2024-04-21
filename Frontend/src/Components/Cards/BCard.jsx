/* eslint-disable react/prop-types */
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";


function BCard(props) {
  const navigate = useNavigate();

  function onclickedhandler() {
    const id=props.blog._id;
    // console.log(props.blog._id);

    navigate(`/showBlogs/${id}`);
  }

  return (
    <Card
      style={{
        width: "18rem",
        textAlign: "center",
        border: "1px solid #ffba08",
        margin: "10px",
        borderRadius: "6px",
      }}
    >
      <Card.Img
        variant="top"
        src={props.blog.image}
        style={{ width: "100%", height: "210px" }}
      />
      <Card.Body>
        <Card.Title>{props.blog.title}</Card.Title>
        <Card.Text>{props.blog.body.substring(0, 100)}</Card.Text>
        <Button
          onClick={onclickedhandler}
          style={{
            backgroundColor: "#ffee32",
            color: "black",
          }}
          variant="primary"
        >
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BCard;
