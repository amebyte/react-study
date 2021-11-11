import React, { useRef } from "react";
class FormStore {
    constructor() {
        // 数据仓库
        this.store = {}
        this.fieldEntities = []
        this.callbacks = {}
    }

    setCallbacks = (newCallbacks) => {
        this.callbacks = { ...this.callbacks, ...newCallbacks}
    }

    // 注册与取消注册
    registerFieldEntity = (entity) => {
        this.fieldEntities.push(entity);
        return () => {
            this.fieldEntities = this.fieldEntities.filter(_en => _en !== entity)
            delete this.store[entity.props.name]
        }
    }

    setFieldValue = (newStore) => {
        this.store = {
            ...this.store,
            ...newStore
        }
        console.log('store', this.store)
        // 让组件更新
        this.fieldEntities.forEach(entity => {
            Object.keys(newStore).forEach(k => {
                if(k === entity.props.name) {
                    entity.onStoreChange()                    
                }
            })
        })
    }

    getFieldsValue = () => {
        return { ...this.store }
    }

    getFieldValue = (name) => {
        return this.store[name]
    }

    validate = () => {
        let err = []

        return err
    }

    submit = () => {
        let err = this.validate()
        const { onFinish, onFinishFailed } = this.callbacks
        if(err.length === 0) {
            onFinish(this.getFieldsValue())
        } else {
            onFinishFailed(err, this.getFieldsValue())
        }
    }

    // 返回数据仓库的权限
    getForm = () => {
        return {
            setFieldValue: this.setFieldValue,
            getFieldsValue: this.getFieldsValue,
            getFieldValue: this.getFieldValue,
            registerFieldEntity: this.registerFieldEntity,
            submit: this.submit,
            validate: this.validate,
            setCallbacks: this.setCallbacks
        }
    }

}
export default function useForm(form) {
    // 把formStore存起来，确保组件的任何一个生命周期里，访问都是同一个值
    const formRef = useRef(null)
    if(!formRef.current) {
        if(form) {
            formRef.current = form
        } else {
            const formStore = new FormStore()
            formRef.current = formStore.getForm()
        }
    }
    
    return [formRef.current]
}