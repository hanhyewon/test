import React, {useState} from 'react';
import MemberService from "../../service/MemberService";
import { useHistory } from 'react-router-dom';

const SignUp = () => {
    const history = useHistory();
    const initialMemberState = {
        name: '',
        id: '',
        password: ''
    };
    const [member, setMember] = useState(initialMemberState);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setMember({...member, [name]: value});
    };

    const clearMember = () => {
        setMember(initialMemberState);
    };

    const handleSubmit = () => {
        var data = {
            name: member.name,
            id: member.id,
            password: member.password
        };

        MemberService.signup(data).then(response => {
            setMember({
                name: response.data.name,
                id: response.data.id,
                password: response.data.password
            });
            console.log(response.data);
            clearMember();
            alert("회원가입이 성공적으로 완료 되었습니다!");
            history.push('/');  //로그인 페이지로 이동
        })
        .catch(e => {
            //이미 존재하는 id일 경우, 어떻게 처리할지 생각해보기
            alert("모두 입력해주세요.");
            console.log(e);
        });
    };

    return (
        <div className="form_container">
            <h1>회원가입</h1>
            <input type="text" id="name" name="name" placeholder="이름" value={member.name} onChange={handleInputChange} />
            <input type="text" id="id" name="id" placeholder="아이디" value={member.id} onChange={handleInputChange} />
            <input type="password" id="password" name="password" placeholder="비밀번호" value={member.password} onChange={handleInputChange} />
            <button onClick={handleSubmit} className="form_button">가입하기</button>   
        </div>
    )
}

export default SignUp;