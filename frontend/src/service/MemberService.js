import http from "../http-common";

//회원가입
const signup = data => {
    return http.post("/signup", data);
};

//로그인
const signin = data => {
    return http.post("/signin", data);
};

export default {
    signup,
    signin
};