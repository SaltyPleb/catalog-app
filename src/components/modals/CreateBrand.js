import { observer } from "mobx-react";
import React, { useContext, useEffect, useState } from "react";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import { Context } from "../..";
import { createBrand, fetchTypes } from "../../http/deviceAPI";

const CreateBrand = observer(({ show, onHide }) => {
  const [value, setValue] = useState("");
  const addBrand = () => {
    const formData = new FormData()
    formData.append('name', value)
    formData.append('dep', device.selectedType.id)
    createBrand(formData).then((data) => setValue(""));
    onHide();
  };

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
  }, []);

  const { device } = useContext(Context)

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new brand
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Dropdown className="mt-2 md-2 mb-2">
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
          <Form.Control
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={"Enter new type name"}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addBrand}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateBrand;
