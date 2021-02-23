import React from 'react'
import { Input, InputGroup, InputLeftAddon, Text, Checkbox, Button, FormLabel, Flex, Stack, useToast } from '@chakra-ui/react'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { Formik, Field, ErrorMessage, Form} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

export default function SignIn() {
  const toast = useToast()
  const initialValues = { email: '', password: '' }
  const handleSubmit =  (values) => {
    // try {
      axios.post('https://conduit.productionready.io/api/users/login', {
        user: values
      }).then((data) => {
        toast({
          title: "登录成功",
          position: 'top',
          status: "success",
          duration: 5000,
          isClosable: true,
        })
      }).catch((error) => {
        let errors = error.response.data.errors
        if (errors) {
          let errorMsg = ''
          for( let key in errors) {
            errorMsg = `${errorMsg} ${key} ${errors[key][0]} \n`
          }
          toast({
            title: "登录失败",
            position: 'top',
            description: errorMsg,
            status: "error",
            duration: 9000,
            isClosable: true,
          })
        }
      })
  }
  const schema = Yup.object({
    email: Yup.string().required('邮箱不能为空'),
    password: Yup.string().min(8, '密码不得少于8位').required('密码不能为空')
  })



  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
      <Form>
        <InputGroup>
          <InputLeftAddon children={<FaUserAlt color="#969696"/>} bgColor="hsla(0,0%,71%,.1)" borderRight="none" borderEndStartRadius="none"/>
          <Field as={Input} name="email" placeholder="手机号或邮箱" borderLeft="none" bgColor="hsla(0,0%,71%,.1)" borderEndEndRadius="none"/>
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children={<FaLock color="#969696"/>} bgColor="hsla(0,0%,71%,.1)" borderRight="none"  borderTopLeftRadius="none" borderTop="none"/>
          <Field as={Input} name="password" type="password" placeholder="密码" type="password" borderLeft="none" bgColor="hsla(0,0%,71%,.1)" borderTop="none" borderTopEndRadius="none"/>
        </InputGroup>
        <Flex justifyContent="space-between" my={4}>
          <Stack direction="horizontal">
            <Checkbox mr={2}/>
            <Text>记住我</Text>
          </Stack>
          <Text>登录遇到问题</Text>
        </Flex>
        <Input type="submit" w="100%" borderRadius="full" bgColor="#3194d0" _hover={{bgColor: '#397BB2'}} color="white"/>
      </Form>
    </Formik>
  )
}