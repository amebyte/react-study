import React, { createContext } from "react"

// context 三步走
// step1 创建一个context对象
const FieldContext = createContext()
export default FieldContext

// step2 通过Provdier传递value

// step3 子孙组件消费
// useContext hook
// ContextType class 只能订阅单一的context来源
// Consumer 注意使用格式