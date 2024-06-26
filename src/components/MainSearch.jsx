import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Job from "./Job";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToPreferitiAction } from "../redux/actions";
import { getJobsAction } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const jobs = useSelector((state) => state.search.searchJobs);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobsAction(query));
  };
  const content = useSelector((state) => {
    return state.job.preferiti.length;
  });
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
          <Link to="/favourites" className="btn btn-outline-success position-relative">
            All preferited
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {content}
            </span>
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <div key={jobData._id}>
              <Job data={jobData}> </Job>
              <Button
                className="d-flex align-items-center mt-0 mb-5"
                onClick={() => {
                  dispatch(addToPreferitiAction(jobData));
                }}
              >
                Add to preferited
              </Button>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
