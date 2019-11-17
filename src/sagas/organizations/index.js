import {call,put} from 'redux-saga/effects';
import {SERVER } from '../../constants';
import {GET_ORGANIZATIONS_SUCCESS, GET_ORGANIZATIONS,} from '../../actions/types';
import axios from 'axios';
let data = [];

export function* getOrganizations(action) {
    data = [];
  
    const response = yield call(axios.get, `${SERVER}/organizations`, action.payload);

    if (response.success) {  
        response.map((item, key) => {
            data.push({
                id: item.id,
                primaryContactPersonName: item.primaryContactPersonName,
                organizationType: item.organizationType,
            })

        })

    yield put({type: GET_ORGANIZATIONS_SUCCESS, payload: data});
        
    }
    else{
         console.log("Failed to get data",response);
    }


}

export function* addOrganization(action) {
    let newdata = action.payload;
    var today = new Date();
    const time= today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',second:'numeric', hour12: true });

    var date= today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    var id =Math.floor(Math.random() * 10000);
    newdata.id="organization"+date+id+time;

    
    const response = yield call(axios.post, `${SERVER}/organizations`, action.payload);
    console.log(response);

    if(response.error){
        const message ="Failed To Add Organization, "+response.name;
        console.log(message);
    }
    else{
        yield put({type: GET_ORGANIZATIONS, payload: ''});

    }

}