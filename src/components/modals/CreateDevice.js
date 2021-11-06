import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Modal, Button, Form, Dropdown, Row, Col } from "react-bootstrap";
import { Context } from "../..";
import { createDevice, fetchBrands, fetchTypes } from "../../http/deviceAPI";

const CreateDevice = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState('');

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addDevice = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('brandId', device.selectedBrand.id)
    formData.append('typeId', device.selectedType.id)
    formData.append('info', JSON.stringify(info))
    createDevice(formData).then(data => onHide());
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
          <Dropdown.Toggle>
            {device.selectedType.name || "Select type"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {device.types.map((type) => (
              <Dropdown.Item
                onClick={() => device.setSelectedType(type)}
                key={type.id}
              >
                {type.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="mt-2 md-2 min-vh-10">
          <Dropdown.Toggle>
            {device.selectedBrand.name || "Select brand"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {device.brands.map((brand) => (
              <Dropdown.Item
                onClick={() => device.setSelectedBrand(brand)}
                key={brand.id}
              >
                {brand.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Form.Control
          velue={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-3"
          placeholder="Enter device name"
        />
        <Form.Control
          velue={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="mt-3"
          placeholder="Enter device price"
          type="number"
        />
        <Form.Control onChange={selectFile} className="mt-3" type="file" />

        <hr />

        {info.map((i) => (
          <Row className="mt-2" key={i.number}>
            <Col md={4}>
              <Form.Control
                onChange={(e) => changeInfo("title", e.target.value, i.number)}
                value={i.title}
                placeholder="Enter param name"
              />
            </Col>

            <Col md={4}>
              <Form.Control
                onChange={(e) =>
                  changeInfo("description", e.target.value, i.number)
                }
                value={i.description}
                placeholder="Enter param description"
              />
            </Col>

            <Col md={4}>
              <Button
                variant="outline-danger"
                onClick={() => removeInfo(i.number)}
              >
                Delete
              </Button>
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
        <Button variant="outline-success" onClick={addDevice}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
