import Header from "@/components/header";
import Crappy from "@/components/crappy";
import NotePosts from "@/components/card";

function Page() {
  return (
    <div className="text-black">
      <Header />
      <Crappy />
      <div className="bg-[#efefef]">
        <div className="p-4">
          <div className="text-5xl m-4">サービス内容</div>
          <div className="text-2xl m-4 py-2">
            対象別に選べる3つの支援プログラム
          </div>
          <div className="grid grid-cols-3">
            <div className="border border-gray-300 flex items-center justify-center p-4 bg-[#e2eff2] font-bold">
              企業向け
            </div>
            <div className="border border-gray-300 flex items-center justify-center p-4 bg-[#e2eff2] font-bold">
              個人向け
            </div>
            <div className="border border-gray-300 flex items-center justify-center p-4 bg-[#e2eff2] font-bold">
              支援者向け
            </div>
            <div className="border border-gray-300 flex items-center justify-center p-4 bg-[#a2c4c9] font-bold text-white">
              組織力・判断力を高める人材育成研修
            </div>
            <div className="border border-gray-300 flex items-center justify-center p-4 bg-[#a2c4c9] font-bold text-white">
              揺らがない自分を育てるプログラム
            </div>
            <div className="border border-gray-300 flex items-center justify-center p-4 bg-[#a2c4c9] font-bold text-white">
              感情に巻き込まれない支援力強化研修
            </div>
            <div className="border border-gray-300 flex items-center justify-center p-4 bg-white">
              組織の“捉え方”を整え、主体的に動ける人材を育成する研修
            </div>
            <div className="border border-gray-300 flex items-center justify-center p-4 bg-white">
              不安や停滞から抜け出し、自分の影響の輪で判断・行動できる状態を取り戻すマンツーマンプログラム
            </div>
            <div className="border border-gray-300 flex items-center justify-center p-4 bg-white">
              支援者自身の心と捉え方を整え、より良い判断と関わりができる“ゆらがない支援者”を育てる研修
            </div>
            <div className="border border-gray-300 flex items-center justify-center p-4 bg-white">
              対象者：全従業員向け 構成：3時間✕3回 リアル又はオンライン
            </div>
            <div className="border border-gray-300 flex items-center justify-center p-4 bg-white">
              対象者：組織で働く個人
              構成：5回（1回60分／初回のみ90分）オンラインのみ
            </div>
            <div className="border border-gray-300 flex items-center justify-center p-4 bg-white">
              対象者：支援職管理者向け 構成：3回（2時間✕3回） リアル＋オンライン
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#efefef]">
        <div className="p-4">
          <div className="text-5xl m-4">お知らせ</div>
          <NotePosts />
        </div>
      </div>
      <div className="bg-[#efefef]">
        <div className="p-4">
          <div className="text-5xl m-4">体験者の声</div>
        </div>
      </div>
      <div className="bg-[#efefef]">
        <div className="p-4">
          <div className="text-5xl m-4">お問合せ</div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe0rkhjqJ16k8z7Yt5Ijd_R6wNCtYeOlG3GKwPSjgiXEbGYCA/viewform?embedded=true"
            width="640"
            height="1900"
          >
            読み込んでいます…
          </iframe>
          <div className="text-2xl m-4">各種サービス、料金等のお問い合わせ</div>
        </div>
      </div>
      <div className="bg-linear-to-b from-[#efefef] to-[#d8f4ef]">
        <div className="p-4">
          <div className="text-5xl m-4">会社概要</div>
          <div className="flex justify-between items-center">
            <div className="text-xl flex-col m-4 w-120 ">
              <div>会社名：１２３株式会社</div>
              <div>所在地：愛知県あま市七宝町伊福新家西84</div>
              <div>代表者：代表取締役　井藤瑞栄</div>
              <div>連絡先：info@anchor.daa.jp</div>
              <div>
                SNS:：
                <a href="https://www.instagram.com/anchor.career?utm_source=qr">
                  Instagram
                </a>
              </div>
            </div>
            <div className="text-xl w-250 m-4 ">
              <div>
                123株式会社は、人の脳と認知の仕組みに着目し、「働きづらさ」や「生きづらさ」を抱える人が、無理なく社会とつながれる仕組みづくりを行っています。
                前身である株式会社if
                meから飲食事業を移行し、現在は以下の領域を横断した事業を展開しています。
              </div>
              <div>▶123DISH　 飲食事業</div>
              <div>
                障害のある方への仕込み業務の提供や、障害の有無に限らず、働きづらさを抱える方の雇用を積極的に行う就労機会創出型モデル。
              </div>
              <div>▶anchor　研修・人材育成事業</div>
              <div>
                認知科学・心理学を活用した伴走型プログラムにより、
                自分で整え、立て直せる力を育む支援。
                すべての事業に共通するのは、「支援」ではなく「構造を変えることで、人が自然に力を発揮できる状態をつくる」という考え方。
                その人らしさが活きる場になる社会を目指しています。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
