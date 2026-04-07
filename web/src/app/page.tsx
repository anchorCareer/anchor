import Image from "next/image";

function Page() {
  return (
    <div>
      <div>
        <Image src={"/image0.jpeg"} alt="" fill />
        <div className="absolute flex items-center justify-center w-screen h-screen">
          <div className="flex-col items-center justify-center gap-12">
            <div className="text-white text-2xl">
              心の安定と土台を育てることで、人と組織の可能性をひらく
              <div className="flex items-center justify-center">
                人と組織の土台を整える会社
              </div>
              <div className="text-9xl flex justify-center">anchor</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
