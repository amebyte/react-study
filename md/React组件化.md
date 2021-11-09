# React组件化

Create React App 中文文档

[快速入门](https://www.html.cn/create-react-app/docs/getting-started)[帮助](https://react.css88.com/community/support.html)[GitHub](https://www.github.com/facebook/create-react-app)



```
npx create-react-app lesson1
cd lesson1
yarn start
```

组件化优点 

1. 增强代码重⽤性，提⾼开发效率 
2. 简化调试步骤，提升整个项⽬的可维护性 
3. 便于协同开发 
4. 注意点：降低耦合性 组件跨层级通信 - Context 

```jsx
class App extends React.Component {
 render() {
     return (
         <Provider value={{something: 'something'}}>
            <Toolbar />
         </Provider>
     );
 }
}
```

```javascript
{something: 'something'} === {something: 'something'} // false
```

这是两个地址之间的对比