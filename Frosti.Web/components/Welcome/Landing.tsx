import { Box, Divider } from '@mantine/core';
import Body from './Body';
import Hero from './Hero';

export default function Landing() {
    return (
        <>
            <Hero />
            <Divider color="gray" />
            <Box>
                <Body
                    isStart={false}
                    line={true}
                    imgSrc="/imgs/startups.png"
                    title="Discover Solutions"
                    color='white'
                    content={
                        <p>
                            Explore a personalized feed of short, engaging videos showcasing groundbreaking product ideas, updates, and features from promising startups.
                        </p>
                    }
                />
                <Body
                    isStart={true}
                    line={true}
                    imgSrc="/imgs/educators.png"
                    title="Engage and Influence"
                    color='white'
                    content={
                        <p>
                            Share your thoughts and opinions directly with creators. Your quick, effortless feedback helps shape products and solve problems that matter to you.
                        </p>
                    }
                />
                <Body
                    isStart={false}
                    line={true}
                    imgSrc="/imgs/versions.png"
                    title="Follow the Journey"
                    color='white'
                    content={
                        <p>
                            Stay involved with your favorite startups. Your engagement helps them grow and adapt, ensuring their products meet your needs and preferences.
                        </p>
                    }
                />
            </Box>
        </>
    );
}
