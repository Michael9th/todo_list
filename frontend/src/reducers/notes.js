import { initialState } from "../state"


export default (state=initialState, {type, payload}) => {

    switch (type) {
        case 'FETCH_ALL_NOTES':
            return {
                ...state,
                allNotes: payload
            };

        case 'FETCH_READY_NOTES':
            return {
                ...state,
                readyNotes: payload
            };

        case 'FETCH_NOT_READY_NOTES':
            return {
                ...state,
                notReadyNotes: payload
            };

        case 'ADD_NOTE':
            return {
                ...state,
                payload
            };

        case 'UPDATE_NOTE':
            return {
                ...state,
                title: payload.title,
                description: payload.description,
                ready: payload.ready,
            };

        case 'DELETE_NOTE':
            return {
                ...state,
                payload
            };
        default:
            return state;
    }
}
