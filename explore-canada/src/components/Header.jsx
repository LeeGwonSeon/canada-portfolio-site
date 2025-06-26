import { useState } from "react";


function Header () {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <header className="flex items-center justify-between px-4 py-3 bg-blue-800 text-white relative">
    {/* 왼쪽: 마크 */}
    <div className="text-2xl">CA2</div>

    {/* 가운데: 로고 이미지 */}
    <div className="flex-1 text-center">
      <img src="/assets/logo.png" alt="로고" className="h-8 mx-auto" />
    </div>

    {/* 오른쪽: SNS + 햄버거 */}
    <div className="flex items-center space-x-4">
      {/* PC에서만 보이는 SNS 아이콘 */}
      <div className="hidden md:flex space-x-3">
        <a href="https://instagram.com" target="_blank"rel="noopener noreferrer">📸</a>
        <a href="https://facebook.com" target="_blank"rel="noopener noreferrer">📘</a>
        <a href="https://twitter.com" target="_blank"rel="noopener noreferrer">🐦</a>
      </div>

      {/* 모바일용 햄버거 버튼 */}
      <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
    </div>

    {/* 모바일용 SNS 드롭다운 */}
    {isOpen && (
      <div className="absolute top-16 right-4 bg-white text-black shadow-md rounded-md p-3 flex flex-col space-y-2 md:hidden z-50">
        <a href="https://instagram.com" target="_blank"rel="noopener noreferrer">📸 인스타그램</a>
        <a href="https://facebook.com" target="_blank"rel="noopener noreferrer">📘 페이스북</a>
        <a href="https://twitter.com" target="_blank"rel="noopener noreferrer">🐦 트위터</a>
      </div>
    )}
  </header>
  )
}

export default Header;