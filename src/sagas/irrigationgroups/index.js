import {call,put} from 'redux-saga/effects';
import {SERVER } from '../../constants';
import {GET_IRRIGATIONGROUPS_SUCCESS, GET_IRRIGATIONGROUPS,GET_FAILURE,ADD_FAILURE,ADD_SUCCESS, GET_ORGANIZATIONS} from '../../actions/types';
import axios from 'axios';
let data = [];

export function* getIrrigationGroups(action) {
    data = [];
  
    const response = yield call(axios.get, `${SERVER}/irrigation-user-groups`, action.payload);

    if (response.status===200 && response.data) {  
        response.data.map((item, key) => {
            data.push({
                id: item.id,
                totalBeneficiary: item.totalBeneficiary,
                hasFormedWUSC: item.hasFormedWUSC,
                organization:item.organization
            })
            return null;

        })

    yield put({type: GET_IRRIGATIONGROUPS_SUCCESS, payload: data});
        
    }
    else{
         const message="Failed to get irrigation groups"+response.status;
         yield put({type:GET_FAILURE, payload: message});
    }
}


export function* addIrrigationGroup(action) {
    let newdata = action.payload;
    var today = new Date();
    const time= today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',second:'numeric', hour12: true });

    var date= today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    var id =Math.floor(Math.random() * 10000);
    newdata.id="ig"+date+id+time;

    
    const response = yield call(axios.post, `${SERVER}/irrigation-user-groups`, action.payload);
    

    if(response.status>200 && response.data){
       
        yield put({type: GET_IRRIGATIONGROUPS, payload: ''});
        yield put({type:GET_ORGANIZATIONS,payload:''});
        
        const message ="Success!! Irrigation Group Added";
        yield put({type:ADD_SUCCESS, payload: message});
    }
    else{
        const message ="Failed To Add Irrigation Group, "+response.status;
        yield put({type:ADD_FAILURE, payload: message});
    }

}