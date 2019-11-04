module.exports = {
  /**
   * 
   * eslint-plugin-jsx-a11y
   */
  // 禁止给 div, span 这类本身不具有事件的 dom 元素绑定事件, 拿 span 标签做按钮还是挺常见的
  'jsx-a11y/no-static-element-interactions': 'off',
  // 具有点击处理程序的可见非交互元素必须至少有一个键盘
  'jsx-a11y/click-events-have-key-events': 'off',

  /**
   * 
   * eslint-plugin-react
   */
  // 禁止强制执行组件方式的顺序
  'react/sort-comp': 'off',
  // 禁止使用数组索引作为 key
  'react/no-array-index-key': 'warn',
  // 强制执行无状态的 React Components 作为纯函数
  'react/prefer-stateless-function': ['off', {
    // 忽略使用 this.props 或 this.context 从 React.PureComponent 扩展的组件
    ignorePureComponents: true,
  }],
  /**
   * prop-types
   * 并不需要, ts 的接口已足够强大
   */
  'react/prop-types': 'off',
  // 检测的文件扩展名
  'react/jsx-filename-extension': ['error', {
    extensions: ['.js', '.jsx', '.tsx'],
  }],
}
