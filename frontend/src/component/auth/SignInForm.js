import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    return ( 
        <div className="form_container">
            <form>
                <h1>로그인</h1>

                <input type="text" placeholder="아이디" value={id} onChange={onChangeId} />
                <input type="password" placeholder="비밀번호" value={password} onChange={onChangePassword} />

                <button className="form_button">로그인</button>
            </form>

            <Link to="/signUp" className="signUp_link">아직 회원이 아니라면?</Link>
        </div>
    )
}
export default SignIn;