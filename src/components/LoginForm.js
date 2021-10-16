import React ,{useState} from 'react'

function LoginForm(props) {

    const [details, setDetails] = useState({ name: "", email: "", password: "" })

    const submitHandler = (e) => {
        e.preventDefault();

        props.Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h1>Login</h1>
                {(props.error!=="")?(
                    <h5>{props.error}</h5>
                ):""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e=>setDetails({...details,name:e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"  onChange={e=>setDetails({...details,email:e.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"  onChange={e=>setDetails({...details,password:e.target.value})} />
                </div>
                <div className="btn">
                <button>Log In</button>
                </div>
            </div>
        </form>
    )
}

export default LoginForm
