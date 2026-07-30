function Header() {
  return (
  <header className="bg-white border-b border-gray-200 sticky top-0 z-10">

<div className="bg-yellow-50 border-b border-yellow-200">
  <p className="max-w-6xl mx-auto px-6 py-2 text-center text-sm text-gray-600">
    본 사이트는 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받을 수 있습니다.
  </p>
</div>

  <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center">
    <img
      src="/profile.png"
      alt="Sundu Pick"
      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
    />

    <div className="ml-3">
      <h1 className="text-xl sm:text-2xl font-bold">
        Sundu Pick
      </h1>

      <p className="text-xs sm:text-sm text-gray-500">
        엄마가 직접 고른 추천템
      </p>
    </div>
  </div>

</header>
  );
}

export default Header;