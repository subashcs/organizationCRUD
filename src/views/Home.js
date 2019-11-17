import React from 'react';

import {connect} from 'react-redux';
import {getOrganizations,addOrganization,getIrrigationGroups,addIrrigationGroup} from '../actions';

const Home = () => {
    return (
        <div className="container-fluid" >
            <form className="jumbotron">
            <div className="form-group row">
                <label htmlFor="organizationName" className="col-sm-2 col-form-label">Organization Name</label>
                <div className="col-sm-10">
                <input type="text" className="form-control-plaintext" id="organizationName" value="" placeholder="Enter organization Name"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="contactPerson" className="col-sm-2 col-form-label">Contact Person Name</label>
                <div className="col-sm-10">
                <input type="text" className="form-control-plaintext" id="contactPerson" value="" placeholder="Enter here"/>
                </div>
            </div>
             
            <button type="submit" className="btn btn-primary mb-2">Add Organization</button>   
           </form>


           

           <form className="jumbotron">
           <div className="form-group row">
                <label htmlFor="totalBeneficiary" className="col-sm-2 col-form-label">Total Beneficiary HH</label>
                <div className="col-sm-10">
                <input type="number"  className="form-control-plaintext" id="totalBeneficiary" value="" placeholder="Enter Total Beneficiary HH"/>
                </div>
            </div>   
            <fieldset className="form-group">
                <div className="row">
                <legend className="col-form-label col-sm-2 pt-0">WUSC Formed</legend>
                <div className="col-sm-10">
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="hasFormedWUSC" id="hasFormedWUSC1" value="true" checked/>
                    <label className="form-check-label" htmlFor="hasFormedWUSC1">
                        True
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="hasFormedWUSC" id="hasFormedWUSC2" value="false"/>
                    <label className="form-check-label" htmlFor="hasFormedWUSC2">
                        False
                    </label>
                    </div>
                   
                    
                </div>
                </div>
            </fieldset>
                
            <div className="form-group">
                <label htmlFor="organizationType">Organization Type</label>
                <select className="form-control" id="organizationType">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
            </div>
                
            <button type="submit" className="btn btn-primary mb-2">Add Irrigation User Group</button>   
            </form>
        </div>
    );
};
const mapStateToProps=(state)=>{
    return{
        organizations:state.organizations,
        irrigationgroups:state.irrigationgroups
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getOrganizations:()=>dispatch(getOrganizations()),
        addOrganization:(data)=>dispatch(addOrganization(data)),
        getIrrigationGroups:()=>dispatch(getIrrigationGroups()),
        addIrrigationGroup:(data)=>dispatch(addIrrigationGroup(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);