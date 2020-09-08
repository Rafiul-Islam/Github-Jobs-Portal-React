import {useReducer, useEffect} from "react";
import axios from "axios";

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'
const ACTION = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

export default function UseFetchJobs(params, page) {
    const [state, dispatch] = useReducer(reducer, {jobs: [], loading: true})

    useEffect(() => {
        const cancelToken = axios.CancelToken.source()
        dispatch({type: ACTION.MAKE_REQUEST})

        axios.get(BASE_URL, {cancelToken: cancelToken.token, params: {markdown: true, page: page, ...params}})
            .then(response => {
                dispatch({type: ACTION.GET_DATA, payload: {jobs: response.data}})
            })
            .catch(error => {
                if (axios.isCancel(error)) return
                dispatch({type: ACTION.ERROR, payload: {error: error}})

            })

        return () => {
            cancelToken.cancel()
        }

    }, [params, page])

    return state
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.MAKE_REQUEST:
            return {loading: true, jobs: []}
        case ACTION.GET_DATA:
            return {...state, loading: false, jobs: action.payload.jobs}
        case ACTION.ERROR:
            return {...state, loading: false, error: action.payload.error, jobs: []}
        default:
            return state
    }
}
