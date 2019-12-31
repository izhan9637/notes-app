import React  from 'react';
import ListNotes from './ListNotes';
import { Button, Container, Row, Col } from 'reactstrap';
import AddNoteForm from './AddNoteForm';

//import AddNoteForm from './components/AddNoteForm';
import { fetchNotes, fetchNote, updateNote, addNote } from '../Api';
//import Websocket from 'react-websocket';
//import EditNoteForm from './components/EditNoteForm';


class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            notes : [],
            cur_note_id: 0,
            is_creating : true,
            is_fetching: true
        }

        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleNote = this.handleNote.bind(this);
        this.getData = this.getData.bind(this);
        this.handleSaveNote = this.handleSaveNote.bind(this);
    }

    componentDidMount() {
        this.getData();
      }
    
      async getData() {
        let data = await fetchNotes();
        this.setState({notes: data, is_fetching: false});
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

    async handleSaveNote(data) {
        await addNote(data);
        await this.getData();
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
                            {
                                this.state.is_creating ?
                                <AddNoteForm handleSave={this.handleSaveNote} /> :
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