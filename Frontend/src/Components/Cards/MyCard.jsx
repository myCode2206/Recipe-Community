/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function MyCard(props) {

  const navigate=useNavigate();
  const  showRecipeHandler = (id)=>
  {
    // console.log("bhai merko pt dba")

    navigate(`/showRecipe/${id}`)
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
        src={props.item.image}
        style={{ width: "100%", height: "50%" }}
      />
      <Card.Body>
        <Card.Title>{props.item.title}</Card.Title>
        <Card.Text>{props.item.body.substring(0, 100)}...</Card.Text>
        <Button
          onClick={() => showRecipeHandler(props.item._id)}
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

export default MyCard;
