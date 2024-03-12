import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function BCard(props) {
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
        style={{ width: "100%", height: "50%" }}
      />
      <Card.Body>
        <Card.Title>{props.blog.title}</Card.Title>
        <Card.Text>
          {props.blog.body}
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
            to="/showBlogs"
          >
            Read More
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BCard;
