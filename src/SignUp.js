import React from 'react'
import { Input, InputGroup, InputLeftAddon, useToast } from '@chakra-ui/react'
import { FaUserAlt, FaLock, FaMailBulk } from 'react-icons/fa'
import { Formik, Field, ErrorMessage, Form} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

export default function SignIn() {
  const toast = useToast()
  const initialValues = { username: '', email: '', password: '' }
  const handleSubmit =  (values) => {
    // try {
      axios.post('https://conduit.productionready.io/api/users', {
        user: values
      }).then((data) => {
        toast({
          title: "注册成功",
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
            title: "注册失败",
            position: 'top',
            description: errorMsg,
            status: "error",
            duration: 9000,
            isClosable: true,
          })
        }
        console.log(errors)
      })
  }
  const schema = Yup.object({
    username: Yup.string().max(15, '用户名长度不得超过15').required('用户名不能为空'),
    email: Yup.string().required('手机号不能为空'),
    password: Yup.string().min(8, '密码不得少于8位').required('密码不能为空')
  })

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
      <Form>
        <InputGroup borderRadius="none">
          <InputLeftAddon children={<FaUserAlt color="#969696"/>} bgColor="hsla(0,0%,71%,.1)" borderRight="none" borderEndStartRadius="none" borderBottomLeftRadius="none"/>
          <Field as={Input} name="username" placeholder="你的昵称" borderLeft="none" bgColor="hsla(0,0%,71%,.1)" borderEndEndRadius="none"/>
        </InputGroup>
        <ErrorMessage name="username"/>
        <InputGroup>
          <InputLeftAddon children={<FaMailBulk color="#969696"/>} bgColor="hsla(0,0%,71%,.1)" borderRight="none" borderRadius="none" borderTop="none"/>
          <Field as={Input} name="email" placeholder="邮箱" borderLeft="none" bgColor="hsla(0,0%,71%,.1)" borderRadius="none" borderTop="none"/>
        </InputGroup>
        <ErrorMessage name="email"/>
        <InputGroup>
          <InputLeftAddon children={<FaLock color="#969696"/>} bgColor="hsla(0,0%,71%,.1)" borderRight="none" borderTopLeftRadius="none" borderTop="none"/>
          <Field as={Input} name="password" placeholder="设置密码" borderLeft="none" bgColor="hsla(0,0%,71%,.1)" borderTopRightRadius="none" borderTop="none"/>
        </InputGroup>
        <ErrorMessage name="password"/>
        <Input type="submit" borderRadius="full" bgColor="#42c02e" _hover={{bgColor: '#63B540'}} color="white" mt="4" />
      </Form>
    </Formik>
  )
}