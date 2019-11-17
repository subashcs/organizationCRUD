import {call,put} from 'redux-saga/effects';
import {SERVER } from '../../constants';
import {GET_IRRIGATIONGROUPS_SUCCESS, GET_IRRIGATIONGROUPS,} from '../../actions/types';
import axios from 'axios';
let data = [];

export function* getIrrigationGroups(action) {
    data = [];
  
    const response = yield call(axios.get, `${SERVER}/irrigation-user-groups`, action.payload);

    if (response.success) {  
        response.map((item, key) => {
            data.push({
                id: item.id,
                totalBeneficiary: item.totalBeneficiary,
                hasFormedWUSC: item.hasFormedWUSC,
                organization:item.organization
            })

        })

    yield put({type: GET_IRRIGATIONGROUPS_SUCCESS, payload: data});
        
    }
    else{
         console.log("Failed to get data",response);
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
    console.log(response);

    if(response.error){
        const message ="Failed To Add IUG, "+response.name;
        console.log(message);
    }
    else{
        yield put({type: GET_IRRIGATIONGROUPS, payload: ''});

    }

}