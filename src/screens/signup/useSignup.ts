import {useState} from 'react';

export const useSignup = () => {
  const [data, setData] = useState({
    name: '',
    password: '',
    email: '',
    mobile: '',
    dob: '',
  });
  const handleChange = (name: string, value: string) => {
    setData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  return {
    data,
    handleChange,
  };
};
