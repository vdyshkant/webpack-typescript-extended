import React from 'react'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button } from 'antd'
const FormItem = Form.Item

const Contact = () => {

  return (
    <div>
      <h1>sample CONTACT section!</h1>
      <div>
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </div>
    </div>
  )
}

export default Contact