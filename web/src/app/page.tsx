import Header from "@/components/header";
import Crappy from "@/components/crappy";

function Page() {
  return (
    <div>
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
    </div>
  );
}

export default Page;
