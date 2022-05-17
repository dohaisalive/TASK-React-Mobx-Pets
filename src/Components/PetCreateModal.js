import { useState } from "react";
import petStore from "../stores/petStore";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function PetCreateModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [enteredPet, setEnteredPet] = useState({
    name: "",
    type: "Cat",
    image: {},
  });

  const handleChange = (event) => {
    setEnteredPet({ ...enteredPet, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    petStore.addPet(enteredPet);
    handleClose();
    setEnteredPet({ name: "", type: "Cat", image: {} });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a pet
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>name</Form.Label>
              <Form.Control
                placeholder="enter name"
                name="name"
                onChange={handleChange}
                // value={enteredPet.name}
                type="name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicType">
              <Form.Label>type</Form.Label>
              <Form.Select
                name="type"
                onChange={handleChange}
                // value={enteredPet.type}
              >
                <option>Cat</option>
                <option>Dog</option>
                <option>Rabbit</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>image</Form.Label>
              <Form.Control
                name="image"
                onChange={handleChange}
                // value={enteredPet.image}
                type="text"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default PetCreateModal;
