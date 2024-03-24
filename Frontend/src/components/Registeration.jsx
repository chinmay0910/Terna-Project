import React, { useState } from 'react';

export default function Register() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        role: '',
        dob: '',
        qualification: '',
        address: '',
        job: '',
        ngoName: '',
        atgNumber: '',
        ngoLocation: '',
        goals: '',
        description: '',
        registrationError: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
            registrationError: ''
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const requestData = {
                name: formData.fullname,
                email: formData.email,
                password: formData.password,
                role: formData.role,
                dob: formData.dob,
                qualification: formData.qualification,
                address: formData.address,
                job: formData.job,
                ngo_name: formData.ngoName,
                atgNumber: formData.atgNumber,
                ngo_location: formData.ngoLocation,
                goal: formData.goals,
                ngo_desc: formData.description
            };

            const endpoint = formData.role === 'user' ? 'http://localhost:5000/api/auth/createuser' : 'http://localhost:5000/api/auth/createNgo';

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            const data = await response.json();

            if (response.ok) {
                alert('User added successfully!');
                console.log(data);
                // Clear form data after successful submission
                setFormData({
                    fullname: '',
                    email: '',
                    password: '',
                    role: '',
                    dob: '',
                    qualification: '',
                    address: '',
                    job: '',
                    ngoName: '',
                    atgNumber: '',
                    ngoLocation: '',
                    goals: '',
                    description: '',
                    registrationError: ''
                });
            } else {
                console.error('Failed to add user');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="mt-16 text-lg font-semibold">
            <h1 className='w-[80%] m-auto mb-4'>Add User:</h1>
            <form className='bg-gray-100 shadow-xl w-[80%] rounded-lg m-auto pb-16 flex flex-col' onSubmit={handleSubmit}>
                <div className="flex flex-col mx-8 pt-8">
                    <label htmlFor="role">Role:</label>
                    <select
                        name="role"
                        id="role"
                        className="bg-white py-2 outline-none"
                        required
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <option value="">Select your Role</option>
                        <option value="user">User</option>
                        <option value="ngo">NGO</option>
                    </select>
                </div>

                {formData.role === 'user' && (

                    <>
                        <div className="flex flex-col mx-8 pt-8">
                            <label htmlFor="fullname">Name:</label>
                            <input type="text" name="name" value={formData.fullname} className="rounded-sm border-2 p-2" onChange={handleChange} />
                        </div>
                        <div className="flex flex-col mx-8 pt-8">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" value={formData.email} className="rounded-sm border-2 p-2" onChange={handleChange} />
                        </div>
                        <div className="flex flex-col mx-8 pt-8">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" value={formData.password} className="rounded-sm border-2 p-2" onChange={handleChange} />
                        </div>
                        <div className="flex flex-col mx-8 pt-8">
                            <label htmlFor="dob">Date of Birth:</label>
                            <input type="date" name="dob" value={formData.dob} className="rounded-sm border-2 p-2" onChange={handleChange} />
                        </div>
                        <div className="flex flex-col mx-8 pt-8">
                            <label htmlFor="qualification">Qualification:</label>
                            <input type="text" name="qualification" value={formData.qualification} className="rounded-sm border-2 p-2" onChange={handleChange} />
                        </div>
                        <div className="flex flex-col mx-8 pt-8">
                            <label htmlFor="address">Address:</label>
                            <textarea name="address" value={formData.address} className="rounded-sm border-2 p-2" onChange={handleChange} />
                        </div>
                        <div className="flex flex-col mx-8 pt-8">
                            <label htmlFor="job">Job:</label>
                            <input type="text" name="job" value={formData.job} className="rounded-sm border-2 p-2" onChange={handleChange} />
                        </div>
                    </>
                )}

{formData.role === 'ngo' && (
                    <>
                        <div className="flex flex-col mx-8 pt-8">
                            <label htmlFor="atgNumber">ATG Number:</label>
                            <input type="text" name="atgNumber" value={formData.atgNumber} className="rounded-sm border-2 p-2" onChange={handleChange} />
                            {formData.registrationError && <span className="text-red-500">{formData.registrationError}</span>}
                        </div>
                        <div className="flex flex-col mx-8 pt-8">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" value={formData.email} className="rounded-sm border-2 p-2" onChange={handleChange} />
                        </div>
                        <div className="flex flex-col mx-8 pt-8">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" value={formData.password} className="rounded-sm border-2 p-2" onChange={handleChange} />
                        </div>
                        <div className="flex flex-col mx-8 pt-8">
                            <label htmlFor="ngoName">NGO Name:</label>
                            <input type="text" name="ngoName" value={formData.ngoName} className="rounded-sm border-2 p-2" onChange={handleChange} />
                        </div>
                        <div className="flex flex-col mx-8 pt-8">
                            <label htmlFor="ngoLocation">NGO Location:</label>
                            <input type="text" name="ngoLocation" value={formData.ngoLocation} className="rounded-sm border-2 p-2" onChange={handleChange} />
                        </div>
                        <div className="flex flex-col mx-8 pt-8">
                            <label htmlFor="goals">Goals:</label>
                            <textarea name="goals" value={formData.goals} className="rounded-sm border-2 p-2" onChange={handleChange} />
                        </div>
                        <div className="flex flex-col mx-8 pt-8">
                            <label htmlFor="description">Description:</label>
                            <textarea name="description" value={formData.description} className="rounded-sm border-2 p-2" onChange={handleChange} />
                        </div>
                    </>
                )}

                <button className='block p-2 bg-blue-600 rounded-lg w-1/5 mx-auto mt-8 text-white font-semibold'>Add User</button>
            </form>
        </div>
    );
}