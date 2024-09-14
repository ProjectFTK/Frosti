import { Center } from "@mantine/core";
import Post from "../components/Post/Index";

export default function Dice() {
    const testPost = {
        id: '1',
        name: 'Startup Idea Validation',
        project: {
            name: 'ProjectFTK',
            avatarUrl: 'https://www.projectftk.com/imgs/Logo_dark.png',
            id: '1',
        },
        author: {
            name: 'John Doe',
            avatarUrl: 'https://via.placeholder.com/150',
            id: '1',
        },
        problem: 'What is the best way to validate a startup idea?',
        content: 'I am trying to validate my startup idea and would love to get some feedback. What are some effective methods?',
        commentTop: 'I think you should start by creating a landing page and see if people sign up.',
        comments: [
            {
                fullName: 'Jane Smith',
                avatarUrl: 'https://via.placeholder.com/150',
                text: 'You can also try running a small ad campaign to gauge interest.',
            },
            {
                fullName: 'Alice Johnson',
                avatarUrl: 'https://via.placeholder.com/150',
                text: 'Talking to potential customers directly can give you a lot of insights.',
            },
        ],
        commentCount: '2',
        date: new Date(),
        lastResponse: new Date(),
        slug: 'startup-idea-validation',
    };


    return (
        <Center mt={'20vh'}>
            <Post post={testPost} />
        </Center>
    )
}