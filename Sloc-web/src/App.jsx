import './App.css'
import { Row,Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Search from './assets/Imgs/Search.svg'
import { Form, Button, InputGroup, Dropdown, DropdownButton } from "react-bootstrap";


function App() {

  return (
    <>
    <main>
<section className='Main-banner'>
<Container>
  <Row>
<Col>
<h1>Search Land Of Choice</h1>
</Col>
  </Row>
</Container>
<div className="d-flex align-items-center searc-bar gap-4">
      <DropdownButton
        id="dropdown-city"
        title="City"
        variant="outline-light"
        className="me-2 set-out"
      >
        <Dropdown.Item href="#">New York</Dropdown.Item>
        <Dropdown.Item href="#">Los Angeles</Dropdown.Item>
        <Dropdown.Item href="#">Chicago</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        id="dropdown-property"
        title="Property Type"
        variant="outline-light"
        className="me-2 set-out"
      >
        <Dropdown.Item href="#">Apartment</Dropdown.Item>
        <Dropdown.Item href="#">House</Dropdown.Item>
        <Dropdown.Item href="#">Condo</Dropdown.Item>
      </DropdownButton>

      <InputGroup className="me-2 ">
        <InputGroup.Text>
          <img src={Search} />
        </InputGroup.Text>
        <Form.Control type="text" placeholder="Search by location or property ID..." />
      </InputGroup>

      <Button variant="primary">Search</Button>
    </div>
</section>
    </main>
    </>
  )
}

export default App
