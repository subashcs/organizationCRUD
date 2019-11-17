import { 
  DISPLAY_MESSAGE,
  GET_ORGANIZATIONS,
  ADD_ORGANIZATION, 
  GET_IRRIGATIONGROUPS, 
  ADD_IRRIGATIONGROUP,
} from './types';

export const displayMessage = () => {
  return {
    type: DISPLAY_MESSAGE,
    payload: 'Displayed'
  };
};

export const getOrganizations =()=>{
  return{
    type:GET_ORGANIZATIONS,
    payload:''
  }
}
export const addOrganization=(data)=>{
  return {
    type:ADD_ORGANIZATION,
    payload:data
  }
}
export const getIrrigationGroups =()=>{
  return{
    type:GET_IRRIGATIONGROUPS,
    payload:''
  }
}
export const addIrrigationGroup =(data)=>{
  return {
    type:ADD_IRRIGATIONGROUP,
    payload:data
  }
}