// ul, p的 margin 要消除
// 差裝飾線
// 修改gap等數值

const Footer = () => {
  return (
    <footer className="bg-black py-5">
      {/* py-5 要改成 py-16 */}

      <div className="container">
        <div className="row">
          {/* 🚩左欄logo + nav */}
          <div className="col-lg-8">
            <div className="brand__logo d-flex flex-column">
              {/* mb-13 52px */}
              <a href="/">
                <img
                  src="/imgs/logo-sm.svg"
                  className="mb-1"
                  alt="footer logo圖"
                />
              </a>
              <p className="brand__logo-slogan ">
                {/* text-black-100 */}
                每一步，找回生活的呼吸
              </p>
            </div>
            <nav className="footer__nav">
              <ul className="list-unstyled d-flex">
                {/* ul gap-8 */}
                <li className="decor-lined">
                  <a href="/" className="text-decoration-none text-white ">
                    主題活動
                  </a>
                </li>
                <li className="decor-lined">
                  <a href="/" className="text-decoration-none text-white ">
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
          {/* 🚩右欄icons+版權 */}
          <div className="col-lg-4">
            <ul className="footer__icons list-unstyled d-flex justify-content-end gap-2">
              {/* gap:12px mb:20px */}
              <li>
                <a href="/" className="text-white p-2">
                  <img src="/imgs/icon-facebook.svg" alt="facebook icon" />
                </a>
              </li>
              <li>
                <a href="/" className="text-white p-2">
                  <img src="/imgs/icon-line.svg" alt="line icon" />
                </a>
              </li>
              <li>
                <a href="/" className="text-white p-2">
                  <img src="/imgs/icon-ins.svg" alt="instagram icon" />
                </a>
              </li>
              <li>
                <a href="/" className="text-white p-2">
                  <img src="/imgs/icon-thread.svg" alt="thread icon" />
                </a>
              </li>
            </ul>
            <div className="copyright__content d-flex flex-column align-items-end text-white gap-2">
              <p>本網站僅供作品參考，並非真實營運販售</p>
              <p>Copyright © YeStep All Rights Reserved. 版權所有</p>
              <ul className="list-unstyled d-flex gap-4">
                {/* gap-4 要改成 gap 32px */}
                <li className="decor-lined">
                  <a href="/" className="text-decoration-none">
                    {/* text-black-100 */}
                    隱私權政策
                  </a>
                </li>
                <li className="decor-lined">
                  <a href="/" className="text-decoration-none ">
                    {/* text-black-100 */}
                    使用條款
                  </a>
                </li>
                <li>
                  <a href="/" className="text-decoration-none ">
                    {/* text-black-100 */}
                    illustrations by icons8.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
