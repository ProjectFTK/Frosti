import { Dispatch, SetStateAction, useContext, useEffect, useMemo, useState } from "react";
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { AxiosError } from "axios";
import frostilogo from '../../assets/images/logoFace.png'
import googlelogo from '../../assets/images/googlelogo.png'
import msftlogo from '../../assets/images/msftlogo.png'

import IMessage, { IMessageType } from "../../types/message";
import { UserContext } from "../../providers/UserContext";
import FrostiApi from "../../apis/frosti";

interface ChatProps {
    messages: IMessage[];
    setMessages: Dispatch<SetStateAction<IMessage[]>>;
}

export default function Chat({ messages, setMessages }: ChatProps) {

    const { isAuthenticated } = useContext(UserContext);

    const [msgInputValue, setMsgInputValue] = useState("");
    const [provider, setProvider] = useState("azure");
    const [isWaitingOnFrosti, setIsWaitingOnFrosti] = useState(false);

    function handleSend(message: string) {
        let newMessages =
            [...messages, {
                content: message,
                timestamp: new Date(),
                type: IMessageType.User,
                summary: messages.reverse().find(x => x.type === IMessageType.AI)?.summary
            }]

        setMessages(newMessages)
        setMsgInputValue("");
        setIsWaitingOnFrosti(true)

        FrostiApi.chat(newMessages[newMessages.length - 1], provider)
            .then((response) => {
                if ((response.status !== 200 && response.status !== 204) && response.status !== 401) {
                    window.alert('An Error Occured');
                    setIsWaitingOnFrosti(false)
                }
                else {
                    setMessages([...newMessages, response.data])
                    setIsWaitingOnFrosti(false)
                }
            })
            .catch((e: AxiosError) => {
                if (e.response?.status === 401) {
                    newMessages =
                        [...newMessages, {
                            content: "Looks like you are logged out. Please login to use Frosti.",
                            timestamp: new Date(),
                            type: IMessageType.AI
                        }]
                    setMessages(newMessages)
                    setIsWaitingOnFrosti(false)
                }
                else if (e.response?.status === 413) {
                    newMessages =
                        [...newMessages, {
                            content: "Looks like the chat message was too long. Try again.",
                            timestamp: new Date(),
                            type: IMessageType.AI
                        }]
                    setMessages(newMessages)
                    setIsWaitingOnFrosti(false)
                }
                else if (e.response?.status === 429) {
                    newMessages =
                        [...newMessages, {
                            content: "Looks like you've used up your 25 free chat messages for the day. Please ask your admin to upgrade for unlimited AI messages.",
                            timestamp: new Date(),
                            type: IMessageType.AI
                        }]
                    setMessages(newMessages)
                    setIsWaitingOnFrosti(false)
                }
                else {
                    console.log(e)
                    setIsWaitingOnFrosti(false)
                    alert('Something went wrong. Please try again or contact founders@projectftk.com');
                }
            });

    };

    return (
        <>
            <div className="h-48 w-[75%] mx-auto mt-[15rem] mb-[2rem] p-4 rounded-2xl text-lg flex items-center justify-center">
            <div className="flex space-x-4">
                <label className="flex items-center">
                    <input
                        type="radio"
                        value="aws"
                        checked={provider === 'aws'}
                        onChange={(event) => setProvider(event.target.value)}
                        className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Amazon AWS</span>
                </label>
                <label className="flex items-center">
                    <input
                        type="radio"
                        value="azure"
                        checked={provider === 'azure'}
                        onChange={(event) => setProvider(event.target.value)}
                        className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Microsft Azure</span>
                </label>
                <label className="flex items-center">
                    <input
                        type="radio"
                        value="gcp"
                        checked={provider === 'gcp'}
                        onChange={(event) => setProvider(event.target.value)}
                        className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Google GCP</span>
                </label>
            </div>
            </div>
            <div className="h-48 w-[75%] mx-auto p-4 border border-white rounded-2xl text-lg">
                <div className="grid grid-cols-10">
                    <div className="col-span-8">
                        <div className="flex items-center space-x-2 mb-2">
                            <img src={frostilogo.src} className="w-8 h-8 rounded-sm" alt="Frosti Logo" />
                            <span className="text-white">Frosti the Whisperer</span>
                        </div>
                    </div>
                    <div className="col-span-2"></div>
                </div>
                <MainContainer>
                    <ChatContainer className="min-h-[60rem]">
                        <MessageList>
                            {!isAuthenticated ? (
                                <Message
                                    model={{
                                        type: 'custom',
                                        sentTime: 'now',
                                        sender: "Frosti",
                                        direction: "incoming",
                                        position: 'single'
                                    }}>
                                    <Message.CustomContent>
                                        <div className="mb-4">
                                            <span className="text-white text-md">Please login to use Frosti</span>
                                        </div>
                                        <button onClick={() => { window.location.href = 'https://api.tryfrosti.com/Auth/LoginWithMicrosoft' }} className="bg-black hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded-3xl inline-flex items-center text-md">
                                            <img src={msftlogo.src} className="w-8 h-8 rounded-sm mr-4" alt="Google Logo" />
                                            <span>Sign in with Microsoft</span>
                                        </button>
                                        <br />
                                        <br />
                                        <button onClick={() => { window.location.href = 'https://api.tryfrosti.com/Auth/LoginWithGoogle' }} className="bg-black hover:bg-gray-500 text-gray-800 font-bold py-2 pl-4 pr-8 rounded-3xl inline-flex items-center text-md">
                                            <img src={googlelogo.src} className="w-8 h-8 rounded-sm mr-4" alt="Google Logo" />
                                            <span>Sign in with Google</span>
                                        </button>
                                    </Message.CustomContent>
                                </Message>
                            ) : (
                                messages.map((message, index) => (
                                    <div key={index}>
                                        <Message
                                            model={{
                                                type: 'text',
                                                sentTime: message.timestamp.toString(),
                                                sender: message.type === IMessageType.AI ? "Frosti" : "User",
                                                direction: message.type === IMessageType.AI ? "incoming" : "outgoing",
                                                position: 'single'
                                            }}>
                                            <Message.TextContent className="text-md">
                                                {message.content}
                                            </Message.TextContent>
                                        </Message>
                                    </div>
                                ))
                            )}
                            {isWaitingOnFrosti && <TypingIndicator className="text-md" content="Frosti is typing" />}
                        </MessageList>
                        <MessageInput
                            className="text-md"
                            disabled={!isAuthenticated}
                            placeholder={!isAuthenticated ? 'Please login first' : 'Type away...'}
                            onChange={(innerHtml, textContent) => setMsgInputValue(textContent.substring(0, 500))}
                            value={msgInputValue.substring(0, 500)}
                            attachButton={false}
                            onSend={handleSend}
                        />
                    </ChatContainer>
                </MainContainer>
            </div>
        </>

    );
}
