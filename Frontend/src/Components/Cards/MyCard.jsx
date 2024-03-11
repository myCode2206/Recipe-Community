import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function MyCard(props) {
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
        src={props.img}
        style={{ width: "100%", height: "50%" }}
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button
          style={{
            backgroundColor: "#ffee32",
            color: "black",
          }}
          variant="primary"
        >
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/showRecipe"
          >
            Read More
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
