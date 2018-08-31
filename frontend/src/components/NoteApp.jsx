import React, { Component } from 'react';
import {connect} from 'react-redux';

import {notes} from "../actions";


class TodoNote extends Component {

    componentWillMount() {
        this.props.fetchAllNotes();
        this.props.fetchReadyNotes();
        this.props.fetchNotReadyNotes();
    }

    state = {
        title: "",
        description: "",
        ready: false,
        updateNoteId: null,
    }

    resetForm = () => {
        this.setState({title: "", description: "", ready: false, updateNoteId: null});
    }

    selectForEdit = (index) => {

        let note = this.props.allNotes.find(item => item.id === index);
        this.setState({
            title: note.title,
            description: note.description,
            ready: note.ready,
            updateNoteId: index});
    }

    submitNote = (e) => {
        e.preventDefault();
        if (this.state.updateNoteId === null) {
            this.props.addNote(this.state.title, this.state.description, this.state.ready).then(this.resetForm)
        } else {
            this.props.updateNote(this.state.updateNoteId, this.state.title, this.state.description, this.state.ready).then(this.resetForm);
        }
    }

    render() {
        return (
            <div>
                <h2>Welcome to Note Application!</h2>
                <hr />

                <h3>Add new note</h3>
                <form onSubmit={this.submitNote}>
                    <input
                        value={this.state.title}
                        placeholder="Enter a title here..."
                        onChange={(e) => this.setState({title: e.target.value})}
                        required />
                    <input
                        value={this.state.description}
                        placeholder="Enter a note description here..."
                        onChange={(e) => this.setState({description: e.target.value})}
                        required />
                    <input
                        type="checkbox"
                        onChange={(e) => this.setState({ready: e.target.value})}
                        placeholder="ready or not"
                    />
                    <button onClick={this.resetForm}>Reset</button>
                    <input type="submit" value="Save Note" />
                </form>

                <h3> Not Ready Notes</h3>

                <table>
                    <tbody>
                        {this.props.notReadyNotes && this.props.notReadyNotes.map((note, id) => (
                            <tr key={`note_${note.id}`}>
                                <td>{note.title}</td>
                                <td>{note.description}</td>
                                <td><button>{note.ready? <p>ready</p> : <p>not ready</p>} </button></td>
                                <td><button onClick={() => this.selectForEdit(note.id)}>Edit</button></td>
                                <td><button onClick={() => this.props.deleteNote(id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h3> Ready Notes</h3>
                <table>
                    <tbody>

                        {this.props.readyNotes && this.props.readyNotes.map((note, id) => (
                            <tr key={`note_${note.id}`}>
                                <td>{note.title}</td>
                                <td>{note.description}</td>
                                <td>{note.ready}</td>
                                <td><button>{note.ready? <p>ready</p> : <p>not ready</p>} </button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        )
    }
}


const mapStateToProps = ({notes}) => {
    return {
        allNotes: notes.allNotes,
        readyNotes: notes.readyNotes,
        notReadyNotes: notes.notReadyNotes,
    }
};

const mapDispatchToProps = dispatch => {
    return {

        fetchAllNotes: () => {
            dispatch(notes.fetchAllNotes());
        },
        fetchNotReadyNotes: () => {
            dispatch(notes.fetchNotReadyNotes());
        },
        fetchReadyNotes: () => {
            dispatch(notes.fetchReadyNotes());
        },
        addNote: (title, description, ready) => {
            return dispatch(notes.addNote(title, description, ready));
        },
        updateNote: (id, title, description, ready) => {
            return dispatch(notes.updateNote(id, title, description, ready));
        },
        deleteNote: (id) => {
            dispatch(notes.deleteNote(id));
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoNote);
