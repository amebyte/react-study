import React, { useRef } from "react";

class FormStore {
  constructor() {
    //数据仓库
    this.store = {};
    this.fieldEntities = [];
    this.callbacks = {};
  }

  setCallbacks = (newCallbacks) => {
    this.callbacks = { ...this.callbacks, ...newCallbacks };
  };

  // 注册与取消注册
  // 订阅与取消订阅
  registerFieldEntity = (entity) => {
    this.fieldEntities.push(entity);
    return () => {
      this.fieldEntities = this.fieldEntities.filter((_en) => entity !== _en);
      delete this.store[entity.props.name];
    };
  };

  // get all
  getFieldsValue = () => {
    return { ...this.store };
  };
  // get
  getFieldValue = (name) => {
    return this.store[name];
  };

  //set {username:'omg'}
  setFieldsValue = (newStore) => {
    // 1. update store
    this.store = {
      ...this.store,
      ...newStore,
    };

    // 2. 让组件更新
    this.fieldEntities.forEach((entity) => {
      Object.keys(newStore).forEach((k) => {
        if (k === entity.props.name) {
          entity.onStoreChange();
        }
      });
    });
  };

  validate = () => {
    let err = [];
    // todo 校验

    return err;
  };

  submit = () => {
    let err = this.validate();
    const { onFinish, onFinishFailed } = this.callbacks;
    if (err.length === 0) {
      onFinish(this.getFieldsValue());
    } else {
      onFinishFailed(err, this.getFieldsValue());
    }
  };

  //  返回数据仓库的权限
  getForm = () => {
    return {
      getFieldsValue: this.getFieldsValue,
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
      registerFieldEntity: this.registerFieldEntity,
      submit: this.submit,
      setCallbacks: this.setCallbacks,
    };
  };
}

export default function useForm(form) {
  //把formStore存起来，确保组件的任何一个生命周期里，访问都是同一个值
  const formRef = useRef(null);

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const formStore = new FormStore();
      formRef.current = formStore.getForm();
    }
  }

  return [formRef.current];
}
