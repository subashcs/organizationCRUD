import {call,put} from 'redux-saga/effects';
import {SERVER } from '../../constants';
import {GET_ORGANIZATIONS_SUCCESS, GET_ORGANIZATIONS, ADD_FAILURE,GET_FAILURE, ADD_SUCCESS} from '../../actions/types';
import axios from 'axios';
let data = [];

export function* getOrganizations(action) {
    data = [];
  
    const response = yield call(axios.get, `${SERVER}/organizations`, action.payload);

    if (response.status===200 && response.data) {  
        response.data.map((item) => {
            data.push({
                id: item.id,
                primaryContactPersonName: item.primaryContactPersonName,
                organizationType: item.organizationType,
                organizationName:item.organizationName,
            })
            return null;

        })
    yield put({type: GET_ORGANIZATIONS_SUCCESS, payload: data});
        
    }
    else{
        const message="Failed to get organizations"+response.status;
        yield put({type:GET_FAILURE, payload: message});
    }


}

export function* addOrganization(action) {
  

    
    const response = yield call(axios.post, `${SERVER}/organizations`, action.payload);
    

    if(response.status>=200){
        yield put({type: GET_ORGANIZATIONS, payload: ''});
        
        const message ="Success!! Organization Added";
        yield put({type:ADD_SUCCESS, payload: message});
       
    }
    else{
        const message ="Failed To Add Organization, "+response.status;
        yield put({type:ADD_FAILURE, payload: message});
       
    }

}