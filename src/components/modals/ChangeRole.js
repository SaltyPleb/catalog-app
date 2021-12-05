import React, { useContext, useEffect, useState } from "react";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import { changeRole, getUsers } from "../../http/userAPI";
import { Context } from "../..";

const ChangeRole = ({ show, onHide }) => {
  const { user } = useContext(Context);
  const [selectedUser, setselectedUser] = useState("");
  const [selectedUserRole, setselectedUserRole] = useState("");
  const [value, setValue] = useState("");
  const SaveChanges = () => {
    const formData = new FormData();
    formData.append("email", selectedUser);
    formData.append("role", selectedUserRole);
    changeRole(formData).then((data) => {
      onHide();
      setselectedUserRole("");
      setselectedUser("");
    });
  };

  useEffect(() => {
    getUsers().then((data) => user.setUsers(data));
    console.log(user.users);
  }, []);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex">
        <Dropdown className="m-2">
          <Dropdown.Toggle>
            {selectedUser ? selectedUser : "Select user"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {user.users.map((users) => (
              <Dropdown.Item
                onClick={() => {
                  setselectedUser(users.email);
                  setselectedUserRole(users.role);
                }}
                key={users.id}
              >
                {users.email}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        {selectedUser ? (
          <Dropdown className="m-2">
            <Dropdown.Toggle>{selectedUserRole}</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  setselectedUserRole("USER");
                }}
              >
                USER
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setselectedUserRole("ADMIN");
                }}
              >
                ADMIN
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={SaveChanges}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ChangeRole;
