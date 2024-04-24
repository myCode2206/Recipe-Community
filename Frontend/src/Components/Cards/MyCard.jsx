/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function MyCard(props) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const showRecipeHandler = (id) => {
    navigate(`/showRecipe/${id}`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      style={{
        width: "19em",
        textAlign: "center",
        border: "none",
        margin: "10px",
        borderRadius: "10px",
        height: "100%",
        padding: "10px",
        position: "relative",
        overflow: "hidden",
        transition: "box-shadow 0.3s ease-in-out",
        boxShadow: isHovered
          ? "0px 10px 15px rgba(0, 0, 0, 0.1)"
          : "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ overflow: "hidden", borderRadius: "10px" }}>
        <Card.Img
          variant="top"
          src={props.item.image}
          style={{ width: "100%", height: "35vh", objectFit: "cover" }}
        />
      </div>
      <Card.Body style={{ marginTop: "10px" }}>
        <Card.Title style={{ fontSize: "1.2em", fontWeight: "bold" }}>
          {props.item.title}
        </Card.Title>
        <Card.Text className="text-muted">
          {props.item.body.substring(0, 100)}...
        </Card.Text>
      </Card.Body>
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            zIndex: "1",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            transition: "background-color 0.3s",
          }}
        >
          <Button
            onClick={() => showRecipeHandler(props.item._id)}
            style={{
              backgroundColor: "#ffee32",
              color: "black",
              border: "none",
              padding: "8px 16px",
              borderRadius: "20px",
              transition: "background-color 0.3s",
            }}
            variant="primary"
          >
            Read More
          </Button>
        </div>
      )}
    </Card>
  );
}

export default MyCard;
