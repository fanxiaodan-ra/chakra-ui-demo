import React from 'react'
import { Tabs, TabList, Tab, TabPanel, TabPanels, Box} from '@chakra-ui/react'
import SignIn from './SignIn'
import SignUp from './SignUp'

export default function Form () {
  return <Box>
    <Tabs align="center" variant="unstyled">
      <TabList mb="4">
        <Tab _focus={{boxShadow: 'none'}} _selected={{borderBottom: '2px solid tomato', color: 'tomato', fontWeight: 'bold'}}>
          登录
        </Tab>
        <Tab _focus={{boxShadow: 'none'}} _selected={{borderBottom: '2px solid tomato', color: 'tomato', fontWeight: 'bold'}}>
          注册
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <SignIn/>
        </TabPanel>
        <TabPanel>
          <SignUp/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>

}