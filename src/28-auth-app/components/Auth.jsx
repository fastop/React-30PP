import React, {useContext} from 'react'
import Button from '../../components/Button';
import Alert from '../../components/Alert';
import { AuthContext } from '../context/auth-context';

export default function Auth() {

  const auth = useContext(AuthContext);
    console.log(auth.status);

  return (
    <div>
        {auth.status === null ? (""): 
         auth.status ===true ? (<Alert type="success" message="Success!" />):(null)}

        {auth.status === null ? (<Button btnClass="btn btn-success btn-block w-100 m-1" text="Login" onClick={auth.login} />):
         auth.status === true ? (<Button btnClass="btn btn-danger btn-block w-100 m-1" text="Logout" onClick={auth.logout} />):
                                (<Button btnClass="btn btn-primary btn-block w-100 m-1" text="Try Again" onClick={auth.login} />)}
    </div>
  )
}
