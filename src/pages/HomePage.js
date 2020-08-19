import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import RecipeNavbar from '../components/RecipeNavbar';

class HomePage extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        const { activeUser, handleLogout } = this.props;

        return (
            <div>
                <RecipeNavbar activeUser={activeUser} handleLogout={handleLogout}/>
                <Container>
                    Home Page
                </Container>
            </div>
        );
    }
}

export default HomePage;