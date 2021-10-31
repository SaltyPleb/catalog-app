import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import CreateBrand from "../../components/modals/CreateBrand.js";
import CreateDevice from "../../components/modals/CreateDevice.js";
import CreateType from "../../components/modals/CreateType.js";
import "../admin/admin.css";

const Admin = () => {
  const [brandVisibility, setBrandVisibility] = useState(false);
  const [typeVisibility, setTypeVisibility] = useState(false);
  const [deviceVisibility, setDeviceVisibility] = useState(false);
  return (
    <Container className="d-flex flex-column">
      <Button variant="outline-dark" className="mt-4 p-2" onClick={()=>setTypeVisibility(true)}>
        Add type
      </Button>
      <Button variant="outline-dark" className="mt-4 p-2" onClick={()=>setBrandVisibility(true)}>
        Add brand
      </Button>
      <Button variant="outline-dark" className="mt-4 p-2" onClick={()=>setDeviceVisibility(true)}>
        Add device
      </Button>
      <CreateType show={typeVisibility} onHide={()=>setTypeVisibility(false)}/>
      <CreateDevice show={deviceVisibility} onHide={()=>setDeviceVisibility(false)}/>
      <CreateBrand show={brandVisibility} onHide={()=>setBrandVisibility(false)}/>
    </Container>
  );
};

export default Admin;
