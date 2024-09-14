import React, { useState } from 'react';
import { Card, TextInput, Button, Box } from '@mantine/core';
import Comment from './Comment';

interface CommentType {
  id: string;
  text: string;
  name: string;
  replies: {
    id: string;
    text: string;
    name: string;
    timestamp: number;
  }[];
  timestamp: number;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [commentText, setCommentText] = useState('');

  const addComment = () => {
    setComments([
      ...comments,
      {
        id: Date.now().toString(),
        text: commentText,
        name: 'Philip',
        replies: [],
        timestamp: Date.now(),
      },
    ]);
    setCommentText('');
  };

  const addReply = (commentId: string, replyText: string) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: Date.now().toString(),
                text: replyText,
                name: 'Philip',
                timestamp: Date.now(),
              },
            ],
          }
          : comment
      )
    );
  };

  return (
    <Box mx='5rem'>
      <Card withBorder style={{ marginBottom: 20, padding: 15 }}>
        <TextInput
          value={commentText}
          onChange={(event) => setCommentText(event.currentTarget.value)}
          placeholder="Write a comment..."
        />
        <Button onClick={addComment} style={{ marginTop: 10 }}>
          Submit
        </Button>
      </Card>
      {comments.sort((a, b) => a.timestamp - b.timestamp).map((comment) => (
        <Comment key={comment.id} comment={comment} addReply={addReply} />
      ))}
    </Box>
  );
};

export default CommentSection;
