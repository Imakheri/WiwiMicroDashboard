import axios from 'axios';

export function getAll(){
    return async function (dispatch){
        try{
            var json = await axios.get('http://localhost:3001/');
            return dispatch ({
                type: 'GET_ALL',
                payload: json.data
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

export function getHours(){
    return async function (dispatch){
        try{
            var json = await axios.get('http://localhost:3001/date');
            return dispatch ({
                type: 'GET_HOURS',
                payload: json.data
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

export function getNodes(){
    return async function (dispatch){
        try{
            var json = await axios.get('http://localhost:3001/nodes');
            return dispatch ({
                type: 'GET_NODES',
                payload: json.data
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

export function getNode(){
    return async function (dispatch){
        try{
            var json = await axios.get('http://localhost:3001/node');
            return dispatch ({
                type: 'GET_NODE',
                payload: json.data
            })
        }
        catch(err){
            console.log(err)
        }
    }
}