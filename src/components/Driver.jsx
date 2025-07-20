import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Driver({ name, imgUrl, team, description, raceWin, champion, }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Team: {team} <br />
            <br />
            Description: {description} <br />
            <br />
            Race win: {raceWin}
            <br />
            {champion ? <span> "Champion:" ✅️ </span> : <span> Champion : ❌ </span> } 
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Driver;
