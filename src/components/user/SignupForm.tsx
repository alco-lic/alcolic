import React, { useState, ChangeEvent, FormEvent } from "react";

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("user : " + username, "pw : " + password);
    // 서버에 회원가입 요청 보내기
    // 예: axios.post('/api/signup', { username, password })
    // 성공적으로 회원가입한 경우 로그인 페이지로 이동
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <label>
          사용자명:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          비밀번호:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
};

export default Signup;
