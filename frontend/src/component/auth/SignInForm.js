import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import MemberService from "../../service/MemberService";

const SignIn = () => {
    const history = useHistory();
    const initialSigninState = {
        id: '',
        password: ''
    };
    const [signin, setSignin] = useState(initialSigninState);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setSignin({...signin, [name]: value});
    };

    const clearSignin = () => {
        setSignin(initialSigninState);
    };

    const handleSubmit = () => {
        var data = {
            id: signin.id,
            password: signin.password
        };

        MemberService.signin(data).then(response => {
            setSignin({
                id: response.data.id,
                password: response.data.password
            });
            console.log(response.data);
            clearSignin();
            history.push("/main");
        })
        .catch(e => {
            alert("등록되지 않은 아이디 또는 비밀번호 입니다");
            console.log(e);
        });
    };

    return ( 
        <div className="form_container">
            <h1>로그인</h1>
            <input type="text" id="id" name="id" placeholder="아이디" value={signin.id} onChange={handleInputChange} required />
            <input type="password" id="password" name="password" placeholder="비밀번호" value={signin.password} onChange={handleInputChange} required />
            <button onClick={handleSubmit} className="form_button">로그인</button>
            <Link to={"/signUp"} className="signUp_link">아직 회원이 아니라면?</Link>
        </div>
    )
}
export default SignIn;