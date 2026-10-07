import React, {useState, useRef, useEffect} from 'react';
import Title from '../components/Title';
import FormGroup from '../components/FormGroup';
import Auth from './components/Auth';
import { Wrapper } from './components/Wrapper.style';
import {AuthContext} from './context/auth-context';

export default function AuthApp() {

    //Autofocus
    const inputName = useRef(null);
    useEffect(()=>{
        inputName.current.focus();
    },[inputName]);

    //UI state
    const [iu, setIU] = useState({
        wrapper: true,
        title: 'Authenticate',
    });

    //Animation State
    const [animateDenied, setAnimateDenied] = useState(false);

    //Control name and password
    const [userAuth, setUserAuth] = useState({
        name: '',
        password: ''
    });

    const handleChangeName = (e) => {
        setUserAuth({...userAuth, name: e.target.value });
    };

    const handleChangePassword = (e) => {
        setUserAuth({...userAuth, password: e.target.value });
    };

    //Authentication Stuff
    const [authStatus, setAuthStatus] = useState(null);

    const login = () => {
        if(userAuth.name === 'admin' && userAuth.password === 'admin') {
            setAuthStatus(true);
            clearInputs();
            authenticate();
        } else {
            setAuthStatus(false);
            setAnimateDenied(true);
            setTimeout(() => {
                setAnimateDenied(false);
            }, 600);
        }
    };

    function clearInputs() {
      setUserAuth({ name: '', password: '' });
    }

    function authenticate() {
        setIU({wrapper: false, title: `Welcome! ${userAuth.name}`});
    }

    const logout = () => {
      window.location.reload(true);
    }

  return (
    <div className="container" style={{maxWidth: '300'}}>
      <Title text={iu.title} />
      <AuthContext.Provider value={{ status:authStatus, login:login, logout:logout }}>
          
          {iu.wrapper && (
                <Wrapper className={animateDenied && 'active'}>
                  <FormGroup labelText="User Name" 
                              inputType="text" 
                              placeholder="Enter your name" 
                              values=""
                              className="form-control" 
                              reference={inputName} 
                              value={userAuth.name}
                              onChange={handleChangeName}
                              />

                  <FormGroup labelText="Password" 
                              inputType="password" 
                              placeholder="Enter your password" 
                              values="" 
                              className="form-control" 
                              value={userAuth.password}
                              onChange={handleChangePassword}
                              />
                </Wrapper>
          )}

          <Auth />
      </AuthContext.Provider>
    </div>
  )
}
