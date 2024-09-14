import React, { useState } from 'react';
import { Card, Text, Button, TextInput, Group, Avatar, Box, Grid } from '@mantine/core';
import { format } from 'date-fns';
import { IconSend } from '@tabler/icons-react';

interface Reply {
    id: string;
    text: string;
    name: string;
    timestamp: number;
}

interface CommentProps {
    comment: {
        id: string;
        text: string;
        name: string;
        replies: Reply[];
        timestamp: number;
    };
    addReply: (commentId: string, replyText: string) => void;
}

const Comment: React.FC<CommentProps> = ({ comment, addReply }) => {
    const [reply, setReply] = useState('');
    const [showReplyInput, setShowReplyInput] = useState(false);

    const handleReplySubmit = () => {
        addReply(comment.id, reply);
        setReply('');
        setShowReplyInput(false);
    };

    return (
        <Card withBorder style={{ marginBottom: 20, padding: 15 }}>
            <Group align="flex-start" noWrap>
                <Avatar radius="xl">P</Avatar>
                <Box w='100%'>
                    <Group align="center" spacing="xs">
                        <Text weight={500}>{comment.name}</Text>
                        <Text size="xs" color="dimmed">{format(comment.timestamp, 'MMM dd, yyyy HH:mm')}</Text>
                    </Group>
                    <Text size="sm" style={{ marginTop: 5 }}>{comment.text}</Text>
                    {!showReplyInput && (
                        <Group spacing="xs" style={{ marginTop: 10 }}>
                            <Button variant="subtle" size="xs" onClick={() => setShowReplyInput(!showReplyInput)}>
                                Reply
                            </Button>
                        </Group>
                    )}

                    {showReplyInput && (
                        <Grid gutter='none'>
                            <Grid.Col span={11}>
                                <TextInput
                                    value={reply}
                                    onChange={(event) => setReply(event.currentTarget.value)}
                                    placeholder="Write a reply..."
                                    style={{ marginRight: 10 }}
                                /></Grid.Col>
                            <Grid.Col span={1}>
                                <Button variant="transparent">
                                    <IconSend onClick={handleReplySubmit} />
                                </Button></Grid.Col>
                        </Grid>
                    )}
                    {comment.replies.sort((a, b) => a.timestamp - b.timestamp).map((reply) => (
                        <Group key={reply.id} align="flex-start" style={{ marginTop: 10, paddingLeft: 30 }} noWrap>
                            <Avatar radius="xl" size="sm">P</Avatar>
                            <div>
                                <Group align="center" spacing="xs">
                                    <Text weight={500}>{reply.name}</Text>
                                    <Text size="xs" color="dimmed">{format(reply.timestamp, 'MMM dd, yyyy HH:mm')}</Text>
                                </Group>
                                <Text size="sm" style={{ marginTop: 5 }}>{reply.text}</Text>
                            </div>
                        </Group>
                    ))}
                </Box>
            </Group>
        </Card>
    );
};

export default Comment;
