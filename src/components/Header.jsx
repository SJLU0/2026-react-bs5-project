const Header = () => {
  return (
    <header className="bg-black-100 py-6">
      <div className="container">
        <div className="header__links d-flex justify-content-between align-items-center">
          <div className="header__nav d-flex align-items-center">
            <a href="/">
              <img src="/imgs/logo-lg.svg" alt="logo圖片" />
            </a>
            {/* me:10 > 40px */}
            <nav>
              <ul className="list-unstyled d-flex gap-8">
                <li className="decor-lined">
                  <a href="/" className="text-decoration-none text-white  ">
                    主題活動
                  </a>
                </li>
                <li className="decor-lined">
                  <a href="/" className="text-decoration-none text-white">
                    步道總覽
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none text-white ">
                    熱門步道
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__login">
            <a href="/" className="text-decoration-none text-white">
              <img
                src="/imgs/icon-account.svg"
                className="me-2"
                alt="登入/註冊按鈕"
              />

              <span>登入/註冊</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
