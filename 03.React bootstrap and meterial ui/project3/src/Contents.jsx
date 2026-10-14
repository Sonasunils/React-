import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Footer from "./Footer";

import { Container, Row, Col } from "react-bootstrap";

function Contents() {
  return (
    <Container fluid className="p-0" style={{ minHeight: "100vh" }}>

      {/* Navbar */}
      <Row className="g-0">
        <Col xs={12}>
          <div style={{ backgroundColor: "#233B76", color: "#FFFFFF" }}>
            <Navbar />
          </div>
        </Col>
      </Row>

      {/* Sidebar and Main Content */}
      <Row className="g-0" style={{ minHeight: "80vh" }}>

        {/* Sidebar */}
        <Col
          xs={12}
          md={3}
          style={{
            backgroundColor: "#DCE6F8",
            color: "#233B76",
          }}
        >
          <Sidebar />
        </Col>

        {/* Main Content */}
        <Col
          xs={12}
          md={9}
          style={{
            backgroundColor: "#E9F4EF",
            color: "#246344",
            padding: "25px",
          }}
        >
          <Content />
        </Col>

      </Row>

      {/* Footer */}
      <Row className="g-0">
        <Col
          xs={12}
          style={{
            backgroundColor: "#4B5563",
            color: "#FFFFFF",
            padding: "20px",
          }}
        >
          <Footer />
        </Col>
      </Row>

    </Container>
  );
}

export default Contents;