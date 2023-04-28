import React from 'react'

interface Props {
    inputs: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        city: string;
        password: string;
    };
    handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isSignIn: boolean;
}

export default function AuthModalInputs({inputs, handleChangeInput, isSignIn}: Props) {
  return (
    <>
        {isSignIn ? null : (
            <div className="my-3 flex-justify-between text-sm">
                <input 
                    type="text"
                    className="border rounded p-2 py-3 w-[49%]"
                    placeholder="First Name"
                    value={inputs.firstName} 
                    onChange={handleChangeInput} 
                    name="firstName"
                />
                <input 
                    type="text" 
                    className="border rounded p-2 py-3 w-[49%]" 
                    placeholder="Last Name" 
                    value={inputs.lastName}
                    onChange={handleChangeInput} 
                    name="lastName"
                    />
            </div>
        )}
        <div className="my-3 flex-justify-between text-sm">
            <input 
                type="email" 
                className="border rounded p-2 py-3 w-full" 
                placeholder="Email" 
                value={inputs.email}
                onChange={handleChangeInput} 
                name="email"
            />
        </div>
        {isSignIn ? null : (
            <div className="my-3 flex-justify-between text-sm">
                <input 
                    type="tel" 
                    className="border rounded p-2 py-3 w-[49%]" 
                    placeholder="Phone (xxx xxx xx xx)" 
                    pattern="[0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}" 
                    value={inputs.phone}
                    onChange={handleChangeInput} 
                    name="phone"
                />
                <input 
                    type="text" 
                    className="border rounded p-2 py-3 w-[49%]" 
                    placeholder="City" 
                    value={inputs.city}
                    onChange={handleChangeInput} 
                    name="phone"
                />
            </div>
        )}
        <div className="my-3 flex-justify-between text-sm">
            <input 
                type="password" 
                className="border rounded p-2 py-3 w-full" 
                placeholder="Password" 
                value={inputs.password}
                onChange={handleChangeInput} 
                name="password"
            />
        </div>
    </>
  )
}
