import { useState } from 'react';
import { Paper, Button,useMantineTheme,Transition } from '@mantine/core';

function Gallery() {

    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

  return (
    <div >
        
      <p>this is gallery</p>
      <Button onClick={() => setOpened(!opened)}>Open dropdown</Button>
      <Transition mounted={opened} transition='skew-up' duration={400} timingFunction="ease">
      {(styles) => <div style={styles}> <Paper shadow="sm" >Click outside to close</Paper></div>}
    </Transition>
    <br></br>

    <p>this is gallery</p>
      <Button onClick={() => setOpened(!opened)}>Open dropdown</Button>
      <Transition mounted={opened} transition='skew-up' duration={400} timingFunction="ease">
      {(styles) => <div style={styles}> <Paper shadow="sm" >Click outside to close</Paper></div>}
    </Transition>
    <br></br>

    <p>this is gallery</p>
      <Button onClick={() => setOpened(!opened)}>Open dropdown</Button>
      <Transition mounted={opened} transition='skew-up' duration={400} timingFunction="ease">
      {(styles) => <div style={styles}> <Paper shadow="sm" >Click outside to close</Paper></div>}
    </Transition>
    <br></br>

    <p>this is gallery</p>
      <Button onClick={() => setOpened(!opened)}>Open dropdown</Button>
      <Transition mounted={opened} transition='skew-up' duration={400} timingFunction="ease">
      {(styles) => <div style={styles}> <Paper shadow="sm" >Click outside to close</Paper></div>}
    </Transition>
    <br></br>

    <p>this is gallery</p>
      <Button onClick={() => setOpened(!opened)}>Open dropdown</Button>
      <Transition mounted={opened} transition='skew-up' duration={400} timingFunction="ease">
      {(styles) => <div style={styles}> <Paper shadow="sm" >Click outside to close</Paper></div>}
    </Transition>
    <br></br>

    <p>this is gallery</p>
      <Button onClick={() => setOpened(!opened)}>Open dropdown</Button>
      <Transition mounted={opened} transition='skew-up' duration={400} timingFunction="ease">
      {(styles) => <div style={styles}> <Paper shadow="sm" >Click outside to close</Paper></div>}
    </Transition>
    <br></br>

    <p>this is gallery</p>
      <Button onClick={() => setOpened(!opened)}>Open dropdown</Button>
      <Transition mounted={opened} transition='skew-up' duration={400} timingFunction="ease">
      {(styles) => <div style={styles}> <Paper shadow="sm" >Click outside to close</Paper></div>}
    </Transition>
    <br></br>

    <p>this is gallery</p>
      <Button onClick={() => setOpened(!opened)}>Open dropdown</Button>
      <Transition mounted={opened} transition='skew-up' duration={400} timingFunction="ease">
      {(styles) => <div style={styles}> <Paper shadow="sm" >Click outside to close</Paper></div>}
    </Transition>
    <br></br>

    <p>this is gallery</p>
      <Button onClick={() => setOpened(!opened)}>Open dropdown</Button>
      <Transition mounted={opened} transition='skew-up' duration={400} timingFunction="ease">
      {(styles) => <div style={styles}> <Paper shadow="sm" >Click outside to close</Paper></div>}
    </Transition>
    <br></br>

    <p>this is gallery</p>
      <Button onClick={() => setOpened(!opened)}>Open dropdown</Button>
      <Transition mounted={opened} transition='skew-up' duration={400} timingFunction="ease">
      {(styles) => <div style={styles}> <Paper shadow="sm" >Click outside to close</Paper></div>}
    </Transition>
    <br></br>

    <p>this is gallery</p>
      <Button onClick={() => setOpened(!opened)}>Open dropdown</Button>
      <Transition mounted={opened} transition='skew-up' duration={400} timingFunction="ease">
      {(styles) => <div style={styles}> <Paper shadow="sm" >Click outside to close</Paper></div>}
    </Transition>
    <br></br>

    <p>this is gallery</p>
      <Button onClick={() => setOpened(!opened)}>Open dropdown</Button>
      <Transition mounted={opened} transition='skew-up' duration={400} timingFunction="ease">
      {(styles) => <div style={styles}> <Paper shadow="sm" >Click outside to close</Paper></div>}
    </Transition>
    <br></br>

    <p>this is gallery</p>
      <Button onClick={() => setOpened(!opened)}>Open dropdown</Button>
      <Transition mounted={opened} transition='skew-up' duration={400} timingFunction="ease">
      {(styles) => <div style={styles}> <Paper shadow="sm" >Click outside to close</Paper></div>}
    </Transition>
    <br></br>

    <p>this is gallery</p>
      <Button onClick={() => setOpened(!opened)}>Open dropdown</Button>
      <Transition mounted={opened} transition='skew-up' duration={400} timingFunction="ease">
      {(styles) => <div style={styles}> <Paper shadow="sm" >Click outside to close</Paper></div>}
    </Transition>
    <br></br>
    <p>this is gallery</p>
      <Button onClick={() => setOpened(!opened)}>Open dropdown</Button>
      <Transition mounted={opened} transition='skew-up' duration={400} timingFunction="ease">
      {(styles) => <div style={styles}> <Paper shadow="sm" >Click outside to close</Paper></div>}
    </Transition>
    <br></br>
    <p>this is gallery</p>
      <Button onClick={() => setOpened(!opened)}>Open dropdown</Button>
      <Transition mounted={opened} transition='skew-up' duration={400} timingFunction="ease">
      {(styles) => <div style={styles}> <Paper shadow="sm" >Click outside to close</Paper></div>}
    </Transition>
    <br></br>
    <p>this is gallery</p>
      <Button onClick={() => setOpened(!opened)}>Open dropdown</Button>
      <Transition mounted={opened} transition='skew-up' duration={400} timingFunction="ease">
      {(styles) => <div style={styles}> <Paper shadow="sm" >Click outside to close</Paper></div>}
    </Transition>
    <br></br>

    <p>this is gallery</p>
      <Button onClick={() => setOpened(!opened)}>Open dropdown</Button>
      <Transition mounted={opened} transition='skew-up' duration={400} timingFunction="ease">
      {(styles) => <div style={styles}> <Paper shadow="sm" >Click outside to close</Paper></div>}
    </Transition>
    <br></br>
    </div>
  );
}

export default Gallery;