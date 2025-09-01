import React, { useRef } from 'react'
import { useNavigate } from 'react-router';

export const UseRefHook = () => {

    const firstNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    function submitHandler(ev){
        ev.preventDefault();
        console.log({firstName: firstNameRef.current.value,email:  emailRef.current.value, password: passwordRef.current.value})
    }

    return (
        <>
            <h1 className='text-center'>Add User</h1>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="" ref={firstNameRef} aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" ref={emailRef} aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" ref={passwordRef} />
                    </div>
           
                    <button type="submit" onClick={submitHandler} className="btn btn-primary">Submit</button>
                </form>

                <button onClick={()=> navigate('/counter')}>Go to Counter Page</button>
            </div>
        </>
    )
}
