import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Button,
  Text,
  Accordion,
  MediaQuery,
  Burger,
  useMantineTheme,
  MantineProvider,
} from '@mantine/core';

export default function Dash() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <MantineProvider theme={{ fontFamily: 'Open Sans' , colorScheme: 'light',radius:{sm:0}}}>
        <Accordion iconPosition="right" offsetIcon={false}>
          
          <Accordion.Item label="Customization">
            <Accordion iconPosition="right" offsetIcon={false}> 
            <Accordion.Item label="inside-Customization">
              <Button variant="light" color="blue" fullWidth style={{}} onClick = {() => {setOpened(false);}}>this is a button</Button>
            </Accordion.Item>
            </Accordion>
          </Accordion.Item>

          <Accordion.Item label="Flexibility">
        
          </Accordion.Item>

          <Accordion.Item label="No annoying focus ring">
          <Button variant="light" color="blue" fullWidth style={{}} onClick = {() => {setOpened(false);}}>this is a button</Button>
          </Accordion.Item>
        </Accordion>
          </MantineProvider>
          
        </Navbar>
      }
      
      
      header={
        <Header height={40} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
          </div>
        </Header>
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}