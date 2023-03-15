import React,{ FormEvent } from "react"

const Login = () => {

  const api = process.env.REACT_APP_API_URL

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const userName = (event.currentTarget.elements[0] as HTMLInputElement).value
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value
    login({userName, password})
  }

  const login = (parmas: {userName: string, password: string}) => {
    fetch(`${api}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(parmas)
    }).then( async res => {
      if (res.ok) {
        
      }
    })
  }

  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">用户名</label>
        <input type="text" name="" id="userNmae" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" name="" id="passwordd" />
      </div>
      <button type="submit">登录</button>
    </form>
  )
}

export default Login