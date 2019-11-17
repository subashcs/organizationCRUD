import React,{useState,useEffect} from 'react';
import {ToastContainer,toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



import {connect} from 'react-redux';
import {getOrganizations,addOrganization,getIrrigationGroups,addIrrigationGroup} from '../actions';

const Home = (props) => {
    
    const initialOrgFormState={organizationName:"",primaryContactPersonName:""};
    const initialIrrigFormState={totalBeneficiary:"",hasFormedWUSC:"",organization:{}};
    const [organizations,setOrganizations]=useState([]);
    const [organization,setOrganization]=useState(initialOrgFormState);
    const[irrigationGroups,setIrrigationGroups]= useState(initialIrrigFormState);

    //
    const [currentlyAdded,setCurrentlyAdded] = useState('');

    const handleOrgInputChange = event => {
        const {name, value} = event.target;
        setOrganization({...organization, [name]: value})
     

    };
    const handleIrriInputChange = event => {
        const {name, value} = event.target;
        setIrrigationGroups({...irrigationGroups, [name]: value});
       


    };

    useEffect(()=>{
        
        props.getOrganizations();
    },[])
    useEffect(()=>{

        setTimeout(()=>{
            setOrganizations(props.organizations.message);
            
        },2000);
    })

    const addOrganization = ()=>{
        if(organization.organizationName &&organization.primaryContactPersonName)
        {
            let newdata = organization;
            var today = new Date();
            const time= today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',second:'numeric', hour12: true });
        
            var date= today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
            var id =Math.floor(Math.random() * 10000);
            newdata.id="organization"+date+id+time;

            props.addOrganization(newdata)
            toast("Organization added.");  
        }
        else{
            toast("Organization could not be added.");  

        }
    }

    const addIrrigationGroup =()=>{

    }
    const toggleBar=()=>{
        return (
        <ToastContainer
        position={toast.POSITION.TOP_RIGHT} 
           /> 
        )
    }
    return (
        <div className="container-fluid" >
            {toggleBar()}
            <form className="jumbotron" onSubmit={(event)=>{event.preventDefault();addOrganization();}}>
            <div className="form-group row">
                <label htmlFor="organizationName" className="col-sm-2 col-form-label">Organization Name</label>
                <div className="col-sm-10">
                <input type="text" className="form-control-plaintext" name="organizationName" id="organizationName" value={organization.organizationName} onChange={handleOrgInputChange} placeholder="Enter organization Name"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="primaryContactPersonName" className="col-sm-2 col-form-label">Contact Person Name</label>
                <div className="col-sm-10">
                <input type="text" className="form-control-plaintext" id="primaryContactPersonName" name="primaryContactPersonName" value={organization.primaryContactPersonName} onChange={handleOrgInputChange} placeholder="Enter here"/>
                </div>
            </div>
             
            <button type="submit" className="btn btn-primary mb-2">Add Organization</button>   
           </form>


           

           <form className="jumbotron">
           <div className="form-group row">
                <label htmlFor="totalBeneficiary" className="col-sm-2 col-form-label">Total Beneficiary HH</label>
                <div className="col-sm-10">
                <input type="number"  className="form-control-plaintext" name="totalBeneficiary" id="totalBeneficiary" value={irrigationGroups.totalBeneficiary} onChange={handleIrriInputChange} placeholder="Enter Total Beneficiary HH"/>
                </div>
            </div>   
            <fieldset className="form-group">
                <div className="row">
                <legend className="col-form-label col-sm-2 pt-0">WUSC Formed</legend>
                <div className="col-sm-10">
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="hasFormedWUSC" id="hasFormedWUSC1" value="true" onChange={handleIrriInputChange} checked/>
                    <label className="form-check-label" htmlFor="hasFormedWUSC1">
                        True
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="hasFormedWUSC" id="hasFormedWUSC2" value="false" onChange={handleIrriInputChange}/>
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
                    {
                        organizations?(organizations.map((item,key)=>{
                            return (
                                <option key={key} className="black">{item.organizationName}</option>
                            )   
                        })):''    
                        
                    }
               
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