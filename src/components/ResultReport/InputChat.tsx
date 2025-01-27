import Image from "next/image";

export default function InputChat() {
  return (
    <div className="border rounded-[18px] p-2 pl-[16px] flex text-sm fixed bottom-6 w-[76%] md:w-[43%] bg-white">
      <div className="flex-grow flex gap-3">
        <Image
          src="/assets/images/paperclip.svg"
          alt="Paperclip"
          width={20}
          height={20}
          className="flex-none"
        />
        <input
          className="w-full outline-none"
          placeholder="Ask DeepSkill"
        ></input>
      </div>
      <div className="flex-none flex gap-2 text-white bg-[#737373] py-[10px] px-[14px] rounded-xl">
        <span>Send</span>
        <Image
          src="/assets/images/sparkle.svg"
          alt="Sparkle"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
