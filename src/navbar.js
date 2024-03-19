import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './App.css';
import logo from './images/hlogo.png'

export default function MyNavbar(){
  let style={color:'#fff'} 
    
  return (<>
  <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#9d75cf',boxShadow:"5px 5px 20px gray",zIndex:1000}}>
        <Container>
          <span>
          <img src={logo} width="50px" height='50px'/>
          </span>
          {
            window.innerWidth > 1000 ?  <Navbar.Brand href="#" style={style}><h3>orizon Bank</h3></Navbar.Brand> : null
          }
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='mb-3 justify-content-end'>
        <Nav sticky="top"> 
        <Nav.Item>
        <Nav.Link href="#/home" style={style}>Home</Nav.Link>
        <span className='desc'>Home page</span>
      </Nav.Item>      
      <Nav.Item>
        <Nav.Link href="#/create" style={style}>Create</Nav.Link>
        <span className='desc'>create account here</span>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/deposit" style={style}>Deposit</Nav.Link>
        <span className='desc'> deposit amount here</span>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/withdraw" style={style}>Withdraw</Nav.Link>
        <span className='desc'>withdraw amount here</span>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/alldata" style={style}>AllData</Nav.Link>
        <span className='desc'>click to view all data</span>
      </Nav.Item>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        
    
    </>
  );
}


