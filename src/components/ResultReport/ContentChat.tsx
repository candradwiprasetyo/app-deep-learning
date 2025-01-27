import Recipient from "./Recipient";
import Sender from "./Sender";
import InputChat from "./InputChat";
import { chats } from "@/data/chats";

export default function ContentChat() {
  return (
    <div className="flex-1 bg-white border-l px-8 py-4 space-y-6 relative h-[calc(100vh-100px)] overflow-auto pb-28">
      {chats.map((chat) => (
        <div key={chat.id}>
          {chat.type === "recipient" ? (
            <Recipient message={chat.message} />
          ) : (
            <Sender message={chat.message} />
          )}
        </div>
      ))}
      <InputChat />
    </div>
  );
}
