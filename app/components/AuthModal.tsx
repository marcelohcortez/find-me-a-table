"use client"

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useContext, useEffect, useState } from 'react';
import AuthModalInputs from './AuthModalInputs';
import useAuth from '../../hooks/useAuth';
import AuthContext, { AuthenticationContext } from '../context/AuthContext';
import { CircularProgress } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function LoginModal({ isSignIn }: { isSignIn: boolean }) {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: ""
  });
  
  const {signin} = useAuth();
  const {loading, data, error} = useContext(AuthenticationContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const renderContent = (signInContent: string, signUpContent: string) => {
    return isSignIn ? signInContent : signUpContent;
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }

  useEffect(() => {
    if (isSignIn) {
      if (inputs.password && inputs.email) {
        return setDisabled(false);
      }
    } else {
      if (inputs.firstName && inputs.lastName && inputs.email && inputs.phone && inputs.city && inputs.password) {
        return setDisabled(false);
      }
    }

    setDisabled(true);
  }, [inputs])

  const handleClick = () => {
    if (isSignIn) {
      signin({email: inputs.email, password: inputs.password});
    }
  }

  return (
    <div>
      <button className={`${renderContent("bg-orange-400 text-white", "border-orange-400" )} border p-1 px-4 rounded mr-3" `}
        onClick={handleOpen}
      >
        {renderContent("Sign In", "Sign Up")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {loading ? (
            <div className="p-2 h-[600px] flex justify-center items-center">
              <CircularProgress />
            </div>
          ) : (
            <div className="p-2 h-[600px]">
              <div className="uppercase font-bold text-center pb-2 border-b mb-2">
                <p className="text-sm">
                  { renderContent("Sign In", "Create an Account") }
                </p>
              </div>
              <div className="m-auto">
                <h2 className="text-2xl font-light text-center">
                  { renderContent("Log Into Your Account", "Create your 'Find Me a Table' Account") }
                </h2>
                <AuthModalInputs inputs={inputs} handleChangeInput={handleChangeInput} isSignIn={isSignIn}/>
                <button 
                  className='uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400' 
                  disabled={disabled} 
                  onClick={handleClick}
                >
                  { renderContent("Sign In", "Create Account") }
                </button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}