import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="m-5">
      <nav className="flex gap-2 items-center justify-between  p-2 border-b-4 border-black">
        <div className="flex gap-2">
          <h1 className=" font-bold">Forum</h1>
          <p className="link">
            <Link href="/">Posts</Link>
          </p>
        </div>

        <div className="flex gap-2">
          <p className="link">
            <Link href="/login">Login</Link>
          </p>
          <p className="link">
            <Link href="/register">Register</Link>
          </p>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
