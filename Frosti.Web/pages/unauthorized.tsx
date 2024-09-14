import { createStyles, Title, Button, Container, Group, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
  },
}));

export default function UnAuthorized() {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>ERR</div>
      <Title mt={rem(20)} mb={rem(10)} className={classes.title}>
        You don't have access to edit this.
      </Title>
      <Group position="center">
        <Button variant="subtle" size="md" onClick={() => (window.location.href = '/dashboard')}>
          Take me back to home page
        </Button>
      </Group>
    </Container>
  );
}
