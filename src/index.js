// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'))
import React from 'react';
import ReactDom from "react-dom/client";
import App from './App';
import "./index.css";


const root = ReactDom.createRoot(document.getElementById('root'))// 创建 root 实例
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)// 渲染组件