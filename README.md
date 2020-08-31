样式系统文件结构
styles/
  _variables.scss(各种变量以及可配置设置) //色彩，字号，全局开关等，是否打开boxshadow等等
  _mixins.scss(全局mixins)//任何预处理器的基本特性
  _functions.scss(全局 functions)//与mixins的区别是，通过计算返回一个值，function有返回值，mixin没有返回值
components/
  Button/
    style.scss(组件单独的样式)

一。创建自己组件库的色彩体系   zhongguose.com
  1.系统色板-基础色板+中性色板

  2.产品色板-品牌色 + 功能色板


组件库样式变量分类
  模块的样式-更换组题
1.基础色彩系统
2.字体系统
3.表单
4.按钮
5.边框和阴影
6.可配置开关

//有些不同浏览器的padding和margin默认值不同 normalize.css

scss有@import命令，css也有这个命令，但是css每次import都会额外调用一次html请求，但scss的import命令不需要额外请求


Button组件需求分析
1.不同的button type
  Primary Default Danger Link
2.不用的button Size
  Normal Small Large
3.Disable状态

Button样式分析
  padding;line-height;font-size;text-align;color;border; 

