import { useState } from "react";
import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";
export default function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                  </Nav>
                </Container>
              </Navbar>

              <div className="main-bg"></div>
              <div className="flex justify-around">
                {shoes.map((a, i) => {
                  return <Card item={shoes[i]} i={i} />;
                })}
              </div>
            </>
          }
        />
        <Route path="/detail" element={<div>으하하</div>} />
      </Routes>
    </div>
  );
}
//상품 컴포넌트화,데이터바인딩,map
function Card(props) {
  return (
    <div className="basis-1/4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
      />
      <h4>{props.item.title}</h4>
      <p>{props.item.content}</p>
    </div>
  );
}
