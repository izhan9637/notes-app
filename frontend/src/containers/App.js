import React  from 'react';
import { Button, Container, Row, Col } from 'reactstrap';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            notes : [],
            cur_note_id: 0,
            is_creating : true
        }
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col xs="10">
                            <h2>Realtime notes</h2>
                        </Col>
                        <Col xs="2">
                            <Button color="primary">Create note here</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="4">
                            <h4>List all the notes here</h4>
                        </Col>
                        <Col xs="8">
                            <h4>Edit notes here</h4>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default App;