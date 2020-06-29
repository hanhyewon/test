import React, {useState} from 'react';
import axios from "axios";

function SignUp(props){
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    //Create
    const post = async(name, id, password) => {
        await axios( {
            url: 'http://127.0.0.1:8000/api/signup/',
            method: 'post',
            data: {
                name: name,
                id: id,
                password: password
            }
        })
    }

    const handleSubmit = async(e) => {
        //새로고침 방지
        e.preventDefault();

        if(name.trim().length===0 || id.trim().length===0 || password.trim().length===0) {
            alert('모두 입력해주세요');
        } else {
            await post(name, id, password);
            console.log("가입완료");

            //내용 비우기
            setName("");
            setId("");
            setPassword("");
        }
        //props.handleSubmit();
    }

    return (
        <div className="form_container">
            <form onSubmit={handleSubmit}>
                <h1>회원가입</h1>

                <input type="text" placeholder="이름" value={name} onChange={onChangeName} />
                <input type="text" placeholder="아이디" value={id} onChange={onChangeId} />
                <input type="password" placeholder="비밀번호" value={password} onChange={onChangePassword} />

                <button className="form_button" type="submit">가입하기</button>
            </form>
        </div>
    )
}

export default SignUp;