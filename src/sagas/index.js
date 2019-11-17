import { takeEvery } from 'redux-saga/effects';
import {GET_ORGANIZATIONS, ADD_ORGANIZATION, GET_IRRIGATIONGROUPS, ADD_IRRIGATIONGROUP,} from '../actions/types';
import { addIrrigationGroup, getIrrigationGroups } from './irrigationgroups';
import { addOrganization, getOrganizations } from './organizations';


export default function* rootSaga() {
   yield takeEvery(GET_ORGANIZATIONS,getOrganizations);
   yield takeEvery (ADD_ORGANIZATION,addOrganization);

   yield takeEvery(GET_IRRIGATIONGROUPS,getIrrigationGroups);
   yield takeEvery(ADD_IRRIGATIONGROUP,addIrrigationGroup);
}
