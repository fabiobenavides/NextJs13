import Link from "next/link";

export default function Page() {
    return (
      <>
        <h1>Welcome to Home App</h1>
        <h2>
          <Link href="/blog">blog</Link>
        </h2>
        <h2>
          <Link href="/conference">conference</Link>
        </h2>
        <h2>
          <Link href="/settings">Settings</Link>
        </h2>
      </>
    );
  }
  