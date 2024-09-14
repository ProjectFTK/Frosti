import Chat from "../components/Chat/Chat";
import IMessage, { IMessageType } from "../types/message";
import { useState } from "react";

export default function Beta() {

    const [messages, setMessages] = useState<IMessage[]>([
        {
            content: "Hi, I'm Frosti! Tell me about what you're working on, or whatever else you want...",
            timestamp: new Date(),
            type: IMessageType.AI,
        }
    ]);

    return (
        <Chat
            messages={messages}
            setMessages={setMessages}
        />
    )
}