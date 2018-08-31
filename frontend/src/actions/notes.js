export const fetchAllNotes = () => {
    return (dispatch, getState) => {
        let headers = {"Content-Type": "application/json"};

        return fetch("http://127.0.0.1:8000/api/notes/", {headers, })
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return {status: res.status, data};
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 200) {
                    return dispatch({type: 'FETCH_ALL_NOTES', payload: res.data});
                }
            })
    }
};

export const fetchReadyNotes = () => {
    return (dispatch, getState) => {
        let headers = {"Content-Type": "application/json"};

        return fetch("http://127.0.0.1:8000/api/ready_notes/", {headers, })
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return {status: res.status, data};
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 200) {
                    return dispatch({type: 'FETCH_READY_NOTES', payload: res.data});

                }
            })
    }
};

export const fetchNotReadyNotes = () => {
    return (dispatch, getState) => {
        let headers = {"Content-Type": "application/json"};

        return fetch("http://127.0.0.1:8000/api/no_ready_notes/", {headers, })
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return {status: res.status, data};
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 200) {
                    return dispatch({type: 'FETCH_NOT_READY_NOTES', payload: res.data});
                }
            })
    }
};

export const addNote = (title, description, ready) => {
    return (dispatch, getState) => {
        let headers = {"Content-Type": "application/json"};

        let body = JSON.stringify({title, description, ready});
        return fetch("http://127.0.0.1:8000/api/notes/", {headers, method: "POST", body})
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return {status: res.status, data};
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 201) {
                    return dispatch({type: 'ADD_NOTE', payload: res.data});
                }
            })
    }
};

export const updateNote = (index, title, description, ready) => {
    return (dispatch, getState) => {

        let headers = {"Content-Type": "application/json"};

        let body = JSON.stringify({title, description, ready});

        const noteId = getState().notes.allNotes.filter(item => item.id === index)[0].id

        // let noteId = getState().notes[index].id;

        return fetch(`http://127.0.0.1:8000/api/notes/${noteId}/`, {headers, method: "PUT", body})
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return {status: res.status, data};
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 200) {
                    return dispatch({type: 'UPDATE_NOTE', payload: res.data, index});
                }
            })
    }
}

export const deleteNote = index => {
    return (dispatch, getState) => {

        let headers = {"Content-Type": "application/json"};

        const noteId = getState().notes.allNotes[index].id

        return fetch(`http://127.0.0.1:8000/api/notes/${noteId}/`, {headers, method: "DELETE"})
            .then(res => {
                if (res.status === 204) {
                    return {status: res.status, data: {}};
                } else if (res.status < 500) {
                    return res.json().then(data => {
                        return {status: res.status, data};
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 204) {
                    return dispatch({type: 'DELETE_NOTE', index});
                }
            })
    }
}
