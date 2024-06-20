import React from 'react'


export const Cardlogin = () => {
  return (
    <div className='container d-flex align-items-center justify-content-center' style={{minHeight: "100vh"}}>
        <div className="card"style={{minHeight: "500px", minWidth:"400px"}}>
            <div className="card-body text-light">
                <div className="card-title text-center mt-5">
                    <h2 className='text-light'>Login here</h2>
                </div>
                <form action="#" className='p-3'>
                    <div className="d-flex flex-column mt-3">
                    <label htmlFor="userName" className='form-label'>User Name</label>
                    <input className='form-control' type="text" placeholder='Enter your user name' id='userName'/>
                    <label className='form-label mt-3' htmlFor="password">Password</label>
                    <input className='form-control' placeholder='Enter your password' type="password" id='password' />
                    <div className="text-center mt-3">
                    <button className='btn btn-primary btn-lg'>Login</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}