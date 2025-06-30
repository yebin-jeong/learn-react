import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="flex flex-col h-screen">
        <header className="bg-blue-500 text-white p-4">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className={`hover:underline`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={`hover:underline`}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/posts" className={`hover:underline`}>
                  게시판
                </Link>
              </li>
              <li>
                <Link href="/user/login" className={`hover:underline`}>
                  로그인
                </Link>
              </li>
              <li>
                <Link href="/user/signup" className={`hover:underline`}>
                  회원가입
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
