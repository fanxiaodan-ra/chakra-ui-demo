import React from 'react'
import SignIn from './SignIn'
import { Box } from '@chakra-ui/react'
import Form from './Form'
function App() {

  return (
    <div className="App">
      <Box w="300px" mx="auto" mt="280px" bgColor="#fff" px="30px" py="50px" boxShadow="lg" borderRadius="5px">
      <Form/>
      </Box>
    </div>
  );
}

export default App;
