import Link from "next/link"
export default function Login() {
  return (
    <div>
      <h1 className="">Welcome Back</h1>
      <div>
        <input type="text" placeholder="Username" />
      </div>
      <div>
        <input type="password" placeholder="Password" />
      </div>
      <button>Login</button>
  <div className="link mx-1">    <Link href="/register">I don&apos;t have an account.</Link></div>
    </div>
  );
}
