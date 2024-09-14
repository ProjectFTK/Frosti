import { useState } from 'react';
import { BasicComment, BaseReply, replyInterface } from 'react-simple-comment'
import CommentSection from '../components/Comments/CommentSection';

export default function Com() {


  return (
    <div>
      <h1>Comment System</h1>
      <CommentSection />
    </div>

  );
}