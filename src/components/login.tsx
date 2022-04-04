import React,{ useState } from 'react';
import {Button,Center,Card,Text,Group,Input,useMantineTheme,Grid,PasswordInput,Select} from '@mantine/core';
import { EyeCheck, EyeOff } from 'tabler-icons-react';


function Login() {

    const theme = useMantineTheme();
    const [showLogin, setLogin] = useState(true);
    const [showRegister, setRegister] = useState(false);


  return (
    <div style={{background: theme.fn.linearGradient( 291, 'Moccasin', 'PowderBlue') }} >
    <Center style={{height: 400 }}>
    {showLogin && <div>
    <Card shadow="xl" p="md" style={{ marginBottom: 10, marginTop: 200 }}>
        
        <Card.Section  style={{ marginTop: 20 }}>
          <Text size="xl" color={'blue'}>Introduce yourself !</Text>
        </Card.Section>

        <Group style={{ marginBottom: 10, marginTop: 50 }}>
        <Grid>
        <Grid.Col span={6}><Text size="md" color={'teal'}>Email Address :</Text></Grid.Col>
        <Grid.Col span={6}> <Input style={{ width: 250,marginLeft: 0}} size="sm" placeholder="Your email"/></Grid.Col>
        </Grid>
        </Group>
        
        <Group style={{ marginBottom: 10, marginTop: 10 }}>
        
        <Text size="md" color={'teal'} style={{ marginLeft: 40  }}>Password :</Text>
        
          <PasswordInput 
          style={{ width: 250,marginLeft: 65}}
          size="sm"
          placeholder="Enter password"
          visibilityToggleIcon={({ reveal, size }) =>
          reveal ? <EyeOff size={size} /> : <EyeCheck size={size} />
         }/>
        
        </Group>

        <Button variant='gradient' gradient={{ from: 'teal', to: 'blue', deg: 60 }} color="blue" fullWidth style={{ marginTop: 14 }}>
          Login
        </Button>

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}
        onClick = {() => {setLogin(false); setRegister(true)}}
        >
          New user? Register here  
        </Button>
      </Card>
    </div> }


    {showRegister && <div>
    <Card shadow="xl" p="md" style={{ marginBottom: 10, marginTop: 200 }}>
        
        <Card.Section  style={{ marginTop: 20 }}>
          <Text size="xl" color={'blue'}>Introduce yourself !</Text>
        </Card.Section>

        <Group style={{ marginBottom: 10, marginTop: 50 }}>
        <Grid>
        <Grid.Col span={6}><Text size="md" color={'teal'} style={{marginLeft: -25}} >Name :</Text></Grid.Col>
        <Grid.Col span={6}> <Input style={{ width: 250,marginLeft: 25}} size="sm" placeholder="Your name"/></Grid.Col>
        </Grid>
        </Group>

        <Group style={{ marginBottom: 10, marginTop: 10 }}>
        <Grid>
        <Grid.Col span={6}><Text size="md" color={'teal'}>Email Address :</Text></Grid.Col>
        <Grid.Col span={6}> <Input style={{ width: 250,marginLeft: 0}} size="sm" placeholder="Your email"/></Grid.Col>
        </Grid>
        </Group>
        
        <Group style={{ marginBottom: 10, marginTop: 10 }}> 
        <Text size="md" color={'teal'} style={{ marginLeft: 40  }}>Password :</Text>
        <PasswordInput 
          style={{ width: 250,marginLeft: 65}}
          size="sm"
          placeholder="Enter password"
          visibilityToggleIcon={({ reveal, size }) =>
          reveal ? <EyeOff size={size} /> : <EyeCheck size={size} />
        }/>
        </Group>

        <Group style={{ marginBottom: 10, marginTop: 10 }}> 
        <Text size="md" color={'teal'} style={{ marginLeft: 40  }}>Role :</Text>
        <Select
        style={{ marginLeft: 95, width: 250}}
        placeholder="Pick one"
        data={[
        { value: 'admin', label: 'Admin' },
        { value: 'insert', label: 'Insert' },
        { value: 'view', label: 'View' },
        ]}
        />
        </Group>

        <Button variant='gradient' gradient={{ from: 'teal', to: 'blue', deg: 60 }} color="blue" fullWidth style={{ marginTop: 14 }}>
            Register
        </Button>

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}
         onClick = {() => {setLogin(true); setRegister(false)}}>
          Already Register ? Login here
        </Button>
      </Card>
    </div> }

    </Center>
    <div style={{height: 400}}></div>
    </div>
  );
}

export default Login;