import React  from 'react';
import ListNotes from './ListNotes';
import { Button, Container, Row, Col } from 'reactstrap';

const temp_notes = [
    {
        'id' : 1,
        'title' : 'note 1',
        'content' : 'note 1 content' 
    },
    {
        'id' : 2,
        'title' : 'note 2',
        'content' : 'note 2 content' 
    }, {
        'id' : 3,
        'title' : 'note 3',
        'content' : 'note 3 content' 
    }
]

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            notes : temp_notes,
            cur_note_id: 0,
            is_creating : true
        }

        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleNote = this.handleNote.bind(this);
    }

    handleNote(){
        this.setState((prevState) => {
            return {is_creating : true}
        })
    }

    handleItemClick (id) {
        this.setState((prevState) => {
            return {is_creating: false, cur_note_id: id}
        }); 
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
                            <Button color="primary" 
                            onClick={this.handleNote}>Create note here</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs="4">
                            <ListNotes notes={this.state.notes} 
                            handleItemClick={id => this.handleItemClick(id)} />
                        </Col>
                        <Col xs="8">
                            <h4>Edit notes here</h4>
                            {
                                this.state.is_creating ?
                                "Creating now" :
                                `Editing note with is ${this.state.cur_note_id}`
                            }
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default App;