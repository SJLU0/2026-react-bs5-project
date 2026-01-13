// 傳入動態參數後要記得引入React
import DiffCard from "../components/DiffCard";

const Index = () => {
  //  步道難度資料
  const diffLevels = [
    {
      id: 1,
      title: "休閒級",
      icon: "/imgs/index-diff-01.svg",
      description: "適合全家大小",
    },
    {
      id: 2,
      title: "入門級",
      icon: "/imgs/index-diff-02.svg",
      description: "輕鬆健行路線",
    },
    {
      id: 3,
      title: "健行級",
      icon: "/imgs/index-diff-03.svg",
      description: "需基本體力",
    },
    {
      id: 4,
      title: "挑戰級",
      icon: "/imgs/index-diff-04.svg",
      description: "地形較為複雜",
    },
    {
      id: 5,
      title: "專業級",
      icon: "/imgs/index-diff-05.svg",
      description: "需專業裝備",
    },
  ];

  return (
    <main>
      {/*  🚩本週熱門步道推薦  */}
      {/*  🚩步道難度指南  */}
      <section className="bg-primary-50">
        <div className="container">
          <h2 className="mb-8">步道難度指南</h2>
          <div className="row">
            <div className="col-lg-12">
              <div className="diff-card__list d-flex justify-content-between">
                <DiffCard />
                <DiffCard />
                <DiffCard />
                <DiffCard />
                <DiffCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  🚩特色步道連結  */}
      {/* 🚩關於我們 */}
      <section className=" bg-primary-50 py-32 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* 讓白色小卡脫離static，使z-2生效 */}
              <div className="about__card bg-white position-relative radius-60 p-6 z-2">
                <div className="row align-items-center">
                  {/* 🚩關於我們圖片 */}
                  <div className="col-lg-7">
                    <div className="about__card-img">
                      <img src="/imgs/index-about-lg.svg" alt="關於我們圖片" />
                    </div>
                  </div>
                  {/* 🚩關於我們文字 */}
                  <div className="col-lg-5">
                    <div className="about__card-content">
                      <h2 className="mb-6">關於我們</h2>
                      <div className="about__card-paragraph mb-4">
                        <p>
                          人生的旅途中，我們經常問自己：「我做得到嗎？我能再往前走嗎？」
                        </p>
                        <p>大多時候，答案只差那麼一步—— </p>
                        <p>
                          <strong>一個肯定的Yes</strong>
                        </p>
                      </div>
                      <div className="about__card-paragraph mb-4 ">
                        <p>YeStep的誕生，來自一個簡單卻重要的想法：</p>
                        <p>把每一個「Yes（願意）」化為實際的「Step（行動）」</p>
                        <p>選擇向前、選擇相信、選擇可行</p>
                        <p>第一步可以很輕、很小、很不確定。</p>
                        <p>但它依然是找回呼吸的開始</p>
                        <p>
                          讓你看見森林的寧靜、山稜的光線，還有踏出每一步的自己
                        </p>
                      </div>
                      <div className="about__card-paragraph  text-primary-200 mb-4">
                        <p>Yes to nature.</p>
                        <p>Yes to slowing down.</p>
                        <p>Yes to breathing with every step.</p>
                      </div>
                      <p>只要你願意開始，世界就會為你敞開更多可行的道路。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 🚩滿版山脈圖 */}
        <div className="about-decor-img position-absolute w-100 bottom-0 start-0 ">
          <img
            src="/imgs/footer-decor-lg.svg"
            className="w-100 d-block"
            alt="footer裝飾山脈圖"
          />
        </div>
      </section>
    </main>
  );
};

export default Index;
