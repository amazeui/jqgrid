# Amaze UI jqGrid
---

[![NPM version](https://img.shields.io/npm/v/amazeui-jqgrid.svg?style=flat-square)](https://www.npmjs.com/package/amazeui-jqgrid)
[![Dependency Status](https://img.shields.io/david/amazeui/jqgrid.svg?style=flat-square)](https://david-dm.org/amazeui/jqgrid)
[![devDependency Status](https://img.shields.io/david/dev/amazeui/jqgrid.svg?style=flat-square)](https://david-dm.org/amazeui/jqgrid#info=devDependencies)

[jqGrid](https://github.com/tonytomov/jqGrid) 插件 Amaze UI 样式扩展。

- [使用示例](http://amazeui.github.io/jqgrid/docs/demo.html)
- [API 文档](http://amazeui.github.io/jqgrid/docs/api.html)

**使用说明：**

1. 获取 Amaze UI jqgrid

  - [直接下载](https://github.com/amazeui/jqgrid/archive/master.zip)
  - 使用 NPM: `npm install amazeui-jqgrid`

2. 引入 jGgrid 样式以及 Amaze UI 样式（`dist` 目录下的 CSS）：

  ```html
  <link rel="stylesheet" href="http://www.guriddo.net/demo/css/trirand/ui.jqgrid-bootstrap.css">
  <link rel="stylesheet" href="path/to/amazeui.min.css"/>
  <link rel="stylesheet" href="path/to/amazeui.jqgrid.min.css"/>
  ```

3. 引入 jGgrid 相关文件及 Amaze UI 扩展：

  ```html
  <script src="path/to/jquery.min.js"></script>
  <script src="http://www.guriddo.net/demo/js/trirand/i18n/grid.locale-cn.js"></script>
  <script src="http://www.guriddo.net/demo/js/trirand/jquery.jqGrid.min.js"></script>
  <script src="path/to/amazeui.jqgrid.min.js"></script>
  ```

4. 初始化 jqGrid:

  ```js
  $(function() {
    $("#jqGrid").jqGrid({
      url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
      mtype: "GET",
      styleUI : 'AmazeUI', // 注意设置此项
      // ...
    });
  });
  ```

**TODO:**

- 编辑、修改等功能测试

