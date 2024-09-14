import { Card, Avatar, Text, Group, Button, Center, Box, Badge, SimpleGrid, Loader } from '@mantine/core';
import { handleGenerate } from '../Loading/LoadingTop';
import { useContext, useEffect, useMemo, useState } from 'react';
import IUser from '../../types/user';
import UserApi from '../../apis/user';
import { UserContext } from '../../context/UserContext';

interface UserProps {
    userId: string;
}

export function UserCard({ userId }: UserProps) {
    const { username } = useContext(UserContext);

    const [user, setUser] = useState<IUser>();
    const [stats, setStats] = useState([
        { value: 0, label: 'Refferals' },
        { value: 0, label: 'Feedback' },
    ]);

    const colors = { r: handleGenerate(), g: handleGenerate(), b: handleGenerate() }
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useMemo(() => {
        UserApi.getAuthorById(userId)
            .then((response) => {
                setUser(response.data)
                setStats(
                    [
                        { value: response.data.referralsCount ?? 0, label: 'Refferals' },
                        { value: response.data.commentsCount ?? 0, label: 'Feedback' },
                    ]
                )
                setIsLoaded(true)
            })
            .catch((e: Error) => {
                console.log(e);
                window.location.href = '/404'
            })
    }, []);

    return (
        <>
            <Center h='85vh'>
                <Card miw='25rem' withBorder padding="xl" radius="md" style={{ border: 'rem(2px) solid var(--mantine-color-body);' }}>
                    <Card.Section
                        h={140}
                        style={{
                            background: `linear-gradient(96.2deg, #${colors.r} 10.4%, #${colors.g} 43.8%, #${colors.b} 105.8%)`
                        }}
                    />
                    {
                        !isLoaded ?
                            <Center>
                                <Loader mih='10rem' color={"#" + handleGenerate()} />
                            </Center>
                            :
                            <>

                                <Box pos='absolute'>
                                    <Badge mr='0.2rem' variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 172 }} size='xs'>
                                        Pioneer
                                    </Badge>
                                </Box>

                                <Avatar
                                    src={user?.avatarUrl}
                                    size={80}
                                    radius={80}
                                    mx="auto"
                                    mt={-30}
                                    style={{ border: '5px solid white' }}
                                />
                                <Text ta="center" fz="lg" fw={500} mt="sm">
                                    {user?.name}
                                </Text>
                                <Text ta="center" fz="sm" c="dimmed">
                                    @{user?.username}
                                </Text>
                                <Center>
                                    <SimpleGrid mt="md" spacing={30} cols={3}>
                                        {
                                            //user columns instead to get actually equal spacing
                                            stats.map((stat) => (
                                                <div key={stat.label}>
                                                    <Text ta="center" fz="lg" fw={500}>
                                                        {stat.value}
                                                    </Text>
                                                    <Text ta="center" fz="sm" c="dimmed" lh={1}>
                                                        {stat.label}
                                                    </Text>
                                                </div>
                                            ))
                                        }
                                    </SimpleGrid>
                                </Center>
                                <Button fullWidth radius="md" mt="xl" size="md" variant="default" component="a"
                                    href={`https://projectftk.com/beta/${user?.username}`}>
                                    Repos
                                </Button>
                            </>
                    }
                </Card>
            </Center>
        </>

    );
}