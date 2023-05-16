import React from 'react'
import LoginForm from '../../components/LoginForm'
import loginBg from '../../assets/loginBg.png'
import Lottie from 'lottie-react'
import animationData from '../../assets/Befit.json'

const Login = () => {
  return (
    <main style={{display:'grid', gridTemplateColumns: "60% 1fr", height:"100vh",margin: '0px', padding: '0px' }}>
        <section style={{backgroundColor:'#fff', width:'100%', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
          <LoginForm />
        </section>
        <section style={{backgroundColor: '#50A060', width:'100%', opacity: 0.1}}>
          {/* <img src={loginBg} alt="" width={600} height={600} style={{zIndex: 1, objectFit: 'contain'}} /> */}
        </section>
          <Lottie animationData={animationData} style={{position:'absolute', right: '50px', bottom:'50px', width: '800px'}} />

          <hr style={{position:'absolute', bottom:'500px'}} />

    </main>
  )
}

export default Login