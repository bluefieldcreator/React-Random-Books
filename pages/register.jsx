import Link from "next/link"
export default function Login() {
  return (
    <div>
      <h1>Join the Website</h1>
      <div>
        <input type="text" placeholder="Username" />
      </div>
      <div>
        <input type="email" placeholder="Email" />
      </div>
      <div>
        <input type="password" placeholder="Password" />
      </div>
      <button>Register</button>
      <div className="link mx-1">    <Link href="/login">Ah! I have an account!</Link></div>

    </div>
  );
}
