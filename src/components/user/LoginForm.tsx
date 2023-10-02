import React, { useState, ChangeEvent, FormEvent } from "react";

const Login: React.FC = () => {
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

    // 서버에 로그인 요청 보내기
    // 예: axios.post('/api/login', { username, password })
    // 성공적으로 로그인한 경우 홈페이지로 이동
  };

  return (
    <div>
      <h2>로그인</h2>
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
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
