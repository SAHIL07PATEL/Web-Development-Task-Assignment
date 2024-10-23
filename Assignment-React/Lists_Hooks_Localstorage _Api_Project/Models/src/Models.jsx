import React, { useEffect, useState } from 'react';

const Models = () => {

    
    const [showLoginModel, setShowLoginModel] = useState(false);
    const [showRegModel, setShowRegModel] = useState(false);

    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center gap-5">
                <h1 className='text-xl font-bold'>Model Login Form  </h1>
                <button onClick={() => setShowLoginModel(true)} className='p-3 bg-blue-600 text-white'>Open Model</button>

                <h1 className='text-xl font-bold'>Model Registration Form  </h1>
                <button onClick={() => setShowRegModel(true)} className='p-3 bg-blue-600 text-white'>Open Model</button>

                <ModelView
                    showModel={showLoginModel}
                    setShowModal={setShowLoginModel}
                    title="LOGIN TO MY ACCOUNT"
                >
                    <LoginForm />
                </ModelView>

                <ModelView
                    showModel={showRegModel}
                    setShowModal={setShowRegModel}
                    title="CREATE A NEW ACCOUNT"
                >
                    <RegistrationForm />
                </ModelView>
            </div>

        </div>
    );
}

const ModelView = ({ showModel, setShowModal, children, title }) => {
    return (
        <>
            {showModel ? (
                <div className='fixed inset-0 bg-opacity-75 bg-gray-500 flex items-center justify-center z-50'>
                    <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">{title}</h2>
                            <button
                                className="text-gray-500 hover:text-gray-800"
                                onClick={() => setShowModal(false)}
                            >
                                &times;
                            </button>
                        </div>

                        {children}
                    </div>
                </div>
            ) : null}
        </>
    )
}


const LoginForm = () => {

    const [users, setUsers] = useState(null);
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState();

    useEffect(() => {
        fetch("http://localhost:3001/users",{
            method:"GET",
            headers:{
                'content-type':'application/json'
            }
        })
        .then((res)=> res.json())
        .then((data)=>setUsers(data))
    }, []);


    const handleLogin = (e) =>{
        e.preventDefault();
        const user = users.find(
            (u) => u.email === userEmail && u.password === password
          );
        
        if(user){
            localStorage.setItem("user",JSON.stringify(user))
            alert("Login successful!");
            window.location.href = "/profile"
        }else{
            alert("Invalid Credinitial")
        }

    }
    return (
        <>
            <div>
                <form action="" onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email address"
                        onChange={(e)=>setUserEmail(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                    />
                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="rememberMe" className="mr-2" />
                        <label htmlFor="rememberMe">Remember Me On This Computer</label>
                    </div>
                    <button  className="w-full bg-orange-500 text-white p-2 rounded">
                        LOGIN
                    </button>
                    <div className="flex justify-between mt-4">
                        <a href="#" className="text-sm text-blue-600">
                            Forgot Your Password?
                        </a>
                        <a href="#" className="text-sm text-blue-600">
                            Create A New Account
                        </a>
                    </div>
                </form>
            </div>
        </>
    )
}

const RegistrationForm = () => {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    

    const handleRegister = (e) =>{
        e.preventDefault();

        if(username !== "" && email !== "" && password !== ""){

            const newUser = {username,email,password}

            fetch("http://localhost:3001/users",{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then((res)=> {
                if(res.ok){
                    alert("Register successfully")
                    setEmail("")
                    setPassword("")
                    setUsername("")
                    window.location.href = '/'
                }
            })
        }else{
            alert("Fill the Data....")
        }
    }
    return (
        <>
            <form action="" onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={(e)=>setUsername(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Middel Name"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    onChange={(e)=>setEmail(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                />
                <button className='w-full bg-orange-500 text-white p-2 rounded'>
                    REGISTER
                </button>
            </form>
        </>
    )
}

export default Models;















