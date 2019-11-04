module.exports = {
  /**
   * 
   * eslint-plugin-import
   */
  // 禁止使用无关的包裹
  'import/no-extraneous-dependencies': 'off',
  // 路径支持字符串拼接, 变量引用
  'import/no-dynamic-require': 'off',
  // 导入的模块可以解析为本地文件系统上的模块
  'import/no-unresolved': 'off',
  // 导入语句后没有其他导入后, 需要有 1 个换行
  'import/newline-after-import': 'error',

  /**
   * 
   * @typescript-eslint
   */
  // 空格
  '@typescript-eslint/indent': 'off',
  // 接口定义必须加 I 作为前缀
  '@typescript-eslint/interface-name-prefix': ['error', 'always'],
  // 接口的各个属性之间需要有特定的分隔符
  '@typescript-eslint/member-delimiter-style': 'off',
  /**
   * 在类属性和方法上需要显式的可访问性修饰符
   * 正确示例
   * public a = 1
   * private b() {}
   * public static c = {}
   */
  '@typescript-eslint/explicit-member-accessibility': 'off',
  /**
   * 要求函数和类方法的显式返回类型
   * 正确示例
   * public render(): JSX.Element {}
   */
  '@typescript-eslint/explicit-function-return-type': 'off',
  // 不允许单独使用 require 语句
  '@typescript-eslint/no-var-requires': 'off',
  // 禁止定义前使用, 与 eslint 的 no-use-before-define 重复, 默认使用 eslint 的规则
  '@typescript-eslint/no-use-before-define': 'off',
  // 禁止申明变量后却不使用, 与 eslint 的 no-unused-vars 重复, 默认使用 eslint 的规则
  '@typescript-eslint/no-unused-vars': 'off',
}
