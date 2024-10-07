import { useState } from "react";
import Chat from "../components/Chat/Chat";
import IMessage, { IMessageType } from "../types/message";

export default function Beta() {

    const [messages, setMessages] = useState<IMessage[]>([
        {
            content: "I'm Frosti, let me help you find the right least privileged role. Tell me what you're trying to do.",
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