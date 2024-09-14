import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import frostilogo from '../../public/imgs/avatar_blue.png'
import googlelogo from '../../public/imgs/googlelogo.png'
import msftlogo from '../../public/imgs/msftlogo.png'

import './Chat.css'
import { Box, Text, Avatar as AVCore, Group, Anchor, Grid, Button } from "@mantine/core";
import { Dispatch, SetStateAction, useContext, useEffect, useMemo, useState } from "react";
import IMessage, { IMessageType, IRoles } from "../../types/message";
import IResource from "../../types/resource";
import { UserContext } from "../../providers/UserContext";
import { AxiosError } from "axios";
import FrostiApi from "../../apis/frosti";

interface ChatProps {
    messages: IMessage[];
    setMessages: Dispatch<SetStateAction<IMessage[]>>;
}

export default function Chat({ messages, setMessages }: ChatProps) {

    const { isAuthenticated } = useContext(UserContext);

    const [msgInputValue, setMsgInputValue] = useState("");
    const [isWaitingOnFrosti, setIsWaitingOnFrosti] = useState(false);

    function handleSend(message: string) {
        let newMessages =
            [...messages, {
                content: message,
                timestamp: new Date(),
                type: IMessageType.User,
                summary: messages.reverse().find(x => x.type == IMessageType.AI)?.summary
            }]

        setMessages(newMessages)
        setMsgInputValue("");
        setIsWaitingOnFrosti(true)

        FrostiApi.chat(newMessages[newMessages.length - 1])
            .then((response) => {
                if ((response.status !== 200 && response.status !== 204) && response.status !== 401) {
                    window.alert('An Error Occured');
                    setIsWaitingOnFrosti(false)
                }
                else {
                    //setMessages([...newMessages, ...response.data]) //for array
                    setMessages([...newMessages, response.data])
                    setIsWaitingOnFrosti(false)
                }
            })
            .catch((e: AxiosError) => {
                if (e.response?.status == 401) {
                    newMessages =
                        [...newMessages, {
                            content: "Looks like you are logged out. Please login to use Frosti.",
                            timestamp: new Date(),
                            type: IMessageType.AI
                        }]
                    setMessages(newMessages)
                    setIsWaitingOnFrosti(false)
                }
                else if (e.response?.status == 413) {
                    newMessages =
                        [...newMessages, {
                            content: "Looks like the chat message was too long. Try again.",
                            timestamp: new Date(),
                            type: IMessageType.AI
                        }]
                    setMessages(newMessages)
                    setIsWaitingOnFrosti(false)
                }
                else if (e.response?.status == 429) {
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
        <Box h={'98%'} w={'75%'} mx='auto' mt='5rem' p='lg' style={{ border: '1px solid white', borderRadius: '20px' }}>
            <Grid columns={10}>
                <Grid.Col span={8}>
                    <Group spacing="sm" mb='sm'>
                        <AVCore src={frostilogo.src} size={30} radius='xs' />
                        <Text>
                            Frosti the Whisperer
                        </Text>
                    </Group>
                </Grid.Col>
                <Grid.Col span={2}>
                </Grid.Col>
            </Grid>
            <MainContainer>
                <ChatContainer style={{ minHeight: '30rem' }}>
                    <MessageList>
                        {
                            !isAuthenticated ?
                                <Message
                                    model={{
                                        type: 'custom',
                                        sentTime: 'now',
                                        sender: "Frosti",
                                        direction: "incoming",
                                        position: 'single'
                                    }}>
                                    <Message.CustomContent>
                                        <Text mb='md'>
                                            Please login to use Frosti
                                        </Text>
                                        <Button leftIcon={<AVCore src={msftlogo.src} size={30} radius='xs' />} component="a" href="https://api.tryfrosti.com/Auth/LoginWithMicrosoft" bg="black">
                                            Sign in with Microsoft
                                        </Button>
                                        <br />
                                        <Button mt='sm' pr='37px' leftIcon={<AVCore src={googlelogo.src} size={30} radius='xs' />} component="a" href="https://api.tryfrosti.com/Auth/LoginWithGoogle" bg="black">
                                            Sign in with Google
                                        </Button>
                                    </Message.CustomContent>
                                </Message>
                                :
                                messages.map((message, index) => (
                                    <div key={index}>
                                        <Message
                                            model={{
                                                type: 'text',
                                                sentTime: message.timestamp.toString(),
                                                sender: message.type == IMessageType.AI ? "Frosti" : "User",
                                                direction: message.type == IMessageType.AI ? "incoming" : "outgoing",
                                                position: 'single'
                                            }}>
                                            <Message.TextContent>
                                                {message.content}
                                            </Message.TextContent>
                                        </Message>
                                    </div>
                                ))
                        }
                        {isWaitingOnFrosti && <TypingIndicator content="Frosti is typing" />}
                    </MessageList>
                    <MessageInput disabled={isAuthenticated != true} placeholder={isAuthenticated != true ? 'Please login first' : 'Type away..'} onChange={(innerHtml, textContent) => setMsgInputValue(textContent.substring(0, 500))} value={msgInputValue.substring(0, 500)} attachButton={false} onSend={handleSend} />
                </ChatContainer>
            </MainContainer >
        </Box >
    );
}