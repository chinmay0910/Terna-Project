import React, { useState } from 'react';
// import Card from './components/Card';

function Dashboard() {
    const [collaborate, setCollaborate] = useState(false);
    const [companyDetails, setCompanyDetails] = useState({
        companyName: '',
        collaborationPreference: '',
        selectedSDGs: []
    });
    const [matchedNGOs, setMatchedNGOs] = useState([]);

    // Function to handle collaboration preference change
    const handleCollaborationChange = (e) => {
        setCollaborate(e.target.value === 'yes');
        if (e.target.value === 'no') {
            // Reset company details and matched NGOs if user doesn't want to collaborate
            setCompanyDetails({
                companyName: '',
                collaborationPreference: '',
                selectedSDGs: [],
            });
            setMatchedNGOs([]);
        }
    };

    // Function to handle form submission
    const handleSubmit = () => {
        // You can handle form submission here, for now, let's just log company details
        console.log('Company Details:', companyDetails);
        // You can also make an API call to match NGOs based on selected SDGs here
    };

    return (
        <div>
            <h1>Private Sector Company Dashboard</h1>
            <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0f2Wk3rGSJYJOwKXGYas3lIHBf8gjkCBoy_gq_L0olA&s" alt="Collaboration Image" />
            <label>
                            Company Name:
                            <p type="text" value={companyDetails.companyName} onChange={(e) => setCompanyDetails({ ...companyDetails, companyName: e.target.value })} />
                        </label>
                        <br/>
                        <label>
                            Company Details:
                            <p type="text" value={companyDetails.companyName} onChange={(e) => setCompanyDetails({ ...companyDetails, companyName: e.target.value })} />
                        </label>
                        <br />
                <label>
                    Collaborate with NGOs?
                    {/* {<Card/> } */}
                    
                </label>
            </div>
            {/* {collaborate && (
                <div> */}
                    <h2>Collaboration Details</h2>
                    {/* <form onSubmit={handleSubmit}> */}
                        
                        {/* <label>
                            Select SDGs:
                            <select multiple value={companyDetails.selectedSDGs} onChange={(e) => setCompanyDetails({ ...companyDetails, selectedSDGs: Array.from(e.target.selectedOptions, option => option.value) })}>
                                {/* <Card/> */}
                                {/* <option value="SDG 1">SDG 1</option>
                                <option value="SDG 2">SDG 2</option>
                                <option value="SDG 3">SDG 3</option>
                                <option value="SDG 1">SDG 4</option>
                                <option value="SDG 2">SDG 5</option>
                                <option value="SDG 3">SDG 6</option>
                                <option value="SDG 1">SDG 7</option>
                                <option value="SDG 2">SDG 8</option>
                                <option value="SDG 3">SDG 9</option>
                                <option value="SDG 1">SDG 10</option>
                                <option value="SDG 2">SDG 11</option>
                                <option value="SDG 3">SDG 12</option>
                                <option value="SDG 2">SDG 13</option>
                                <option value="SDG 3">SDG 14</option>
                                <option value="SDG 1">SDG 15</option>
                                <option value="SDG 2">SDG 16</option>
                                <option value="SDG 3">SDG 17</option> */}
                                {/* Add options for all 17 SDGs */}
                            {/* </select>
                        </label> */} 
                        {/* <br />
                        {console.log(companyDetails.selectedSDGs)}
                        <button type="submit" >Submit</button>
                    </form>
                </div> */}
            {/* )} */}
            {matchedNGOs.length > 0 && (
                <div>
                    <h2>Matched NGOs:</h2>
                    <ul>
                        {matchedNGOs.map((ngo, index) => (
                            <li key={index}>{ngo.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Dashboard;