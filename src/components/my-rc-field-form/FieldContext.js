import React, { createContext } from "react";

// context 三步走
// step1 创建一个context对象
const FieldContext = createContext();

export default FieldContext;

// step2 通过Provdier传递value

// step3 子孙组件消费
// 1）useContext hook
// 2）ContextType class 只能订阅单一的contetx来源
// 3）Consumer 注意使用格式
