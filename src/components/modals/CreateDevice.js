import React, { useContext, useState } from "react";
import { Modal, Button, Form, Dropdown, Row, Col } from "react-bootstrap";
import { Context } from "../..";

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter(i=> i.number !== number));
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Dropdown className="mt-2 md-2">
          <Dropdown.Toggle>Select type</Dropdown.Toggle>
          <Dropdown.Menu>
            {device.types.map((type) => (
              <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="mt-2 md-2">
          <Dropdown.Toggle>Select brand</Dropdown.Toggle>
          <Dropdown.Menu>
            {device.brands.map((brand) => (
              <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Form.Control className="mt-3" placeholder="Enter device name" />
        <Form.Control
          className="mt-3"
          placeholder="Enter device price"
          type="number"
        />
        <Form.Control className="mt-3" type="file" />

        <hr/>
        
        {info.map((i) => (
          <Row className="mt-2" key={i.number}>
              <Col md={4}>
                  <Form.Control placeholder="Enter param name"/>
              </Col>

              <Col md={4}>
                  <Form.Control placeholder="Enter param description"/>
              </Col>

              <Col md={4}>
                  <Button variant="outline-danger" onClick={()=> removeInfo(i.number)}>Delete</Button>
              </Col>
          </Row>
        ))}

        <Button className="mt-2" onClick={addInfo} variant="outline-dark">
          Add all new params
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
