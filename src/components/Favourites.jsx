import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";

const Favourites = () => {
  const jobsPreferiti = useSelector((state) => {
    return state.jobs.preferiti;
  });
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Favourites Jobs:</h1>
          <div className="d-flex">
            <Link to="/" className="btn btn-outline-info">
              Home
            </Link>
          </div>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <ul style={{ listStyle: "none" }}>
            {jobsPreferiti.map((job, i) => (
              <li key={i} className="my-4 d-flex  justify-content-between align-items-center">
                {job.title}
                {job.company_name}
                <>
                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch({
                        type: "DELETE_FROM_PREFERITI",
                        payload: i,
                      });
                    }}
                  >
                    Cancella
                  </Button>
                </>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
