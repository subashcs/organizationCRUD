import {call,put} from 'redux-saga/effects';
import {SERVER } from '../../constants';
import {GET_ORGANIZATIONS_SUCCESS, GET_ORGANIZATIONS,} from '../../actions/types';
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

        })
        console.log(data);
    yield put({type: GET_ORGANIZATIONS_SUCCESS, payload: data});
        
    }
    else{
         console.log("Failed to get data",response);
    }


}

export function* addOrganization(action) {
  

    
    const response = yield call(axios.post, `${SERVER}/organizations`, action.payload);
    console.log(response);

    if(response.status>200){
        yield put({type: GET_ORGANIZATIONS, payload: ''});

       
    }
    else{
        const message ="Failed To Add Organization, "+response;
        console.log(message);
    }

}