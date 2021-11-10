import React from "react";
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
export default function useForm() {
    return []
}