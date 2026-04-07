import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <div>
      <div className="h-screen w-full">
        <Image src={"/image0.jpeg"} alt="" fill className="object-cover" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-12">
          <div className="text-white text-2xl text-center">
            心の安定と土台を育てることで、人と組織の可能性をひらく
            <div className="mt-2">人と組織の土台を整える会社</div>
            <div className="text-9xl mt-4">anchor</div>
            <Link href={"/"}>
              <div className="flex items-center justify-center">
                <div className="rounded-2xl border border-white px-6">
                  お問い合わせ
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
