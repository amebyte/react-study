import React, { Component, useEffect } from "react";
// import Form, { Field } from "rc-field-form";
import Form, { Field } from "../components/ame-rc-field-form";
import Input from "../components/Input";

const nameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };

export default class MyRCFieldForm extends Component {
  formRef = React.createRef();
  componentDidMount() {
    
  }

  onFinish = (val) => {
    console.log("onFinish", val); //sy-log
  };

  // 表单校验失败执行
  onFinishFailed = (val) => {
    console.log("onFinishFailed", val); //sy-log
  };
  render() {
    return (
      <div>
        <h3>AmeRCFieldForm</h3>
        <Form
          ref={this.formRef}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Field name="username" rules={[nameRules]}>
            <Input placeholder="Username" />
          </Field>
          <Field name="password" rules={[passworRules]}>
            <Input placeholder="Password" />
          </Field>
          <button>Submit</button>
        </Form>
      </div>
    );
  }
}
