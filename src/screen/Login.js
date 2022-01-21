import { useNavigate } from 'react-router-dom';
import './login.css';
function Login() {
    const navigate = useNavigate()

    const handleSignUp = () => {
        console.log("Create Account")
        navigate("/signup")
    }

    return (
        <>
            <div className="d-flex align-items-center">

                <div className="container px-4 center mb-5" style={{ marginTop: '118px' }}>
                    <h2 className="p-5 pb-2 my-3"
                        style={{ fontWeight: 'bold', color: 'black', fontSize: '24px' }}>
                        SIGN
                        IN
                    </h2>
                    <form className="px-5 pt-2" >
                        <div className=" mb-3">
                            <label  htmlFor="inputEmail3" className="col-form-label">Email</label>
                            <div>
                                <input required style={{ width: '333px', height: '45px' }} type="email" placeholder="example@gmail.com"
                                    className="form-control" id="inputEmail3" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPassword3" className=" col-form-label">Password</label>
                            <div>
                                <input required style={{ width: '333px', height: '45px' }} type="password" placeholder="******"
                                    className="form-control" id="inputPassword3" />
                            </div>
                        </div>
                        <div className=" mb-3 ">

                            <div className="form-check  d-flex justify-content-between my-4">
                                <div>
                                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#" style={{ color: 'black',  paddingRight: '25px' }}>Forget Password</a>
                            </div>
                            {/* textDecorationStyle: 'dashed', */}

                        </div>
                        <div className="d-grid gap-2 col-12 mx-auto">
                            <button className="btn  my-2 btnCol " style={{ width: '333px', height: '45px', color: 'white' }}>Sign
                                in</button><br />
                            <p className="text-center my-2">Don't have an account ?</p>
                        </div>
                    </form>
                    <div className="d-grid gap-2 col-12  px-5 ">


                        <button onClick={handleSignUp}
                            style={{ fontWeight: 'bold', boxShadow: 'none', width: '333px', height: '45px' }} className="btn  border">Create an
                            account</button>


                    </div>

                </div>

            </div>



        </>
    )
}

export default Login