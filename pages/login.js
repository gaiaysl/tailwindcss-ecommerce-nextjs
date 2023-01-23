import Layout from "../Component/Layout"
export default function Login(){
    return(
        <Layout>
             <form action="/api/login" method="post" className="flex flex-col text-sm font-semibold my-8 mx-6 p-2 w-72 gap-y-2 ">
      <label>
        E-Posta
      </label>
      <input className=" p-2 rounded-lg border-2" type='email' name='email' placeholder='Type your email'></input>
      <label>
        Şifre
      </label>
      <input className=" p-2 rounded-lg border-2" type='password' name='password' placeholder='Type your password'></input>
      <button  className="mt-4 bg-blue-500 text-white border rounded-lg p-2 mt-2 " type='submit' value='Register'>Giriş Yap</button>
<span>hesabın yok mu? <a className="text-blue-500 underline" href="/register">kullanıcı oluştur</a></span>
    </form>
        </Layout>
    )
}