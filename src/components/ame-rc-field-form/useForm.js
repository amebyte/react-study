import React, { useRef } from "react";
class FormStore {
    constructor() {
        // 数据仓库
        this.store = {}
    }

    setFieldValue = (newStore) => {
        this.store = {
            ...this.store,
            ...newStore
        }
        console.log('store', this.store)
    }

    getFieldsValue = () => {
        return { ...this.store }
    }

    getFieldValue = (name) => {
        return this.store[name]
    }
    // 返回数据仓库的权限
    getForm = () => {
        return {
            setFieldValue: this.setFieldValue,
            getFieldsValue: this.getFieldsValue,
            getFieldValue: this.getFieldValue
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