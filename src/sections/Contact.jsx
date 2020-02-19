import React from 'react'
import { withFormik } from 'formik'
// Formik, Form as FormikForm, Field, ErrorMessage
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button } from 'antd'
const FormItem = Form.Item

const Contact = () => {

  // https://github.com/jannikbuschke/formik-antd

  return (
    <section className="section-contact">
      <div className="container  container--contact">
        <h1>sample CONTACT section!</h1>
        <div>
          <Form.Item>
            <Input
              name="name"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item>
            <Input
              name="email"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item>
            <Input
              name="phone"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Phone"
            />
          </Form.Item>
          <Form.Item>
            "checkbox 'I agree....'"
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href="">Forgot password</a>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </div>
      </div>
    </section>
  )
}

export default Contact