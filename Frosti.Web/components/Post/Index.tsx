import React from 'react';
import { Card, Text, Avatar, Group, Button, Image, Collapse, Textarea, Center, Stack, Code } from '@mantine/core';
import IPost from '../../types/post';
import { formatRelative } from 'date-fns'

const Post: React.FC<{ post: IPost }> = ({ post }) => {
    const [opened, setOpened] = React.useState(false);
    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    };
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
            <Group position="apart" align="start" mb="md">
                <Group>
                    <Avatar src={post.project.avatarUrl} alt={post.project.name} radius="xl" />
                    <Stack spacing='none'>
                        <Text weight={500}>{post.project.name}</Text>
                        <Text size="xs" color="dimmed">
                            {post.author.name}
                        </Text>
                    </Stack>

                </Group>
                <Text size="xs" color="dimmed">
                    posted {formatRelative(post.date, new Date())}
                </Text>
            </Group>

            <Code block mb="md">
                Problem: {post.problem}
            </Code>

            <Text mb="md">{post.content}</Text>

            <Group position="apart" mb="md">
                <Button variant="outline" size="xs">
                    Refer
                </Button>
                <Button variant="outline" size="xs" onClick={() => setOpened((o) => !o)}>
                    {post.commentCount} Comments
                </Button>
            </Group>

            <Collapse in={opened}>
                <Text size="sm" weight={500} mb="xs">
                    Top Comment
                </Text>
                <Text mb="md">{post.commentTop}</Text>
                <Textarea placeholder="Add a comment" mb="md" />

                {post.comments.map((comment, index) => (
                    <Group key={index} mb="sm">
                        <Avatar src={comment.avatarUrl} alt={comment.fullName} radius="xl" size="sm" />
                        <div>
                            <Text weight={500}>{comment.fullName}</Text>
                            <Text size="sm">{comment.text}</Text>
                        </div>
                    </Group>
                ))}
            </Collapse>
        </Card>
    );
};

export default Post;
