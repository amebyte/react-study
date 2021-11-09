import React from "react";
import FieldContext from "./FieldContext";
import useForm from "./useForm";

export default function Form(
  { children, form, onFinish, onFinishFailed },
  ref
) {
  // Form的父组件是类组件时候，数据仓库的初次初始化发生在这里
  const [formInstance] = useForm(form);
  React.useImperativeHandle(ref, () => formInstance);

  formInstance.setCallbacks({ onFinish, onFinishFailed });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formInstance.submit();
      }}
    >
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
}
