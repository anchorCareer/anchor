import { Header } from "../../components/header";

function Page() {
  return (
    <div>
      <Header />
      <div className="p-4">
        <div className="text-3xl m-4">anchorとは</div>
        <div className="m-6">
          <div>「anchor」には、船の碇という意味が込められています。</div>
          <div className="pb-4">
            外的ストレスという波に揺られても、心の中にしっかりと碇を下ろすことで「心の安全地帯（レジリエンスゾーン）」を守り、一定以上流されないようにする。そして、しなやかに立ち直り、自分らしく進む力を育むお手伝いをすることが、私たちの目指すサポートの核です。
          </div>
          <div className="pb-4">
            多くの組織で、本来防げるはずの停滞や混乱が繰り返されているのを見てきました。
            努力しているのにうまくいかない。 関わっているのに変わらない。
            その原因の多くが「能力」ではなく、構造や捉え方の未整理にあります。
          </div>
          <div className="pb-4">
            私たちは、個人や組織に新しい知識や手法を足すのではなく、
            本来の力が発揮される「土台」を整えることに取り組んでいます。
          </div>
          <div>
            一人ひとりが自分で考え、選び、立て直すことができる。
            そして組織が、しなやかに成長し続けていく。
            その状態をつくることが、私たちanchorの使命です。
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
