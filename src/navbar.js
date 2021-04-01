import React from 'react';
import App from "./App"

export function Navbar(){
    return(
        <div className='Navbar'>
            Navbar
        </div>
    )
}



import './Navbar.css'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }

    componentWillMount(){
        if(sessionStorage.getItem('access_token') != null && sessionStorage.getItem('id_token') != null){
            this.setState({loggedIn: true}); 
        } 
        else{
            this.setState({loggedIn: false}); 
        }
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render(){}
        return(
            <div
                <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
                    <Navbar color="faded" light expand="md">
                        <NavLink className='navbar-brand' exact to='/'>
                            <img src={logo} alt='Brand' width='35px' height='35px' />
                        </NavLink>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink className='nav-link' exact to='/categories'>
                                        Categories
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className='mx-auto' navbar>
                                <Form inline>
                                    <FormGroup>
                                        <Input size='sm' type="text" name="search" placeholder="Search" />
                                    </FormGroup>
                                    <Button size='sm'><i className='fa fa-search'></i></Button>
                                </Form>
                            </Nav>
                            div     <Nav className="ml-auto" navbar>

                                <NavItem>
                                    <NavLink className='nav-link' exact to='/cart'>
                                        <i className='fa fa-shopping-cart'></i>
                                    </NavLink>
                                </NavItem>

                                {(this.state.loggedIn) ?
                                    <NavItem>
                                        <NavLink className='nav-link' exact to='/profile'>
                                            <i className='fa fa-user'></i>
                                        </NavLink>
                                    </NavItem>
                                    : null}

                                {(this.state.loggedIn == true) ?

                                    <NavItem>
                                        <NavLink className='nav-link' exact to='/logout'>
                                            <i className='fa fa-sign-out'></i>
                                        </NavLink>
                                    </NavItem>
                                    :
                                    <NavItem>
                                        <NavLink className='nav-link' exact to='/login'>
                                            <i className='fa fa-sign-in'></i>
                                        </NavLink>
                                    </NavItem>}
                            </Nav>
                        </Collapse>
                    </Navbar></const newNav = >;</>
            
            </div>