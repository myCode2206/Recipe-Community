import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MyCard() {
  return (
    <Card
      style={{
        width: "18rem",
        textAlign: "center",
        border: "1px solid #ffba08",
      }}
    >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button
          style={{
            backgroundColor: "#ffba08",
            color: "black",
          }}
          variant="primary"
        >
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
