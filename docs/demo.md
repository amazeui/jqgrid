---
title: Amaze UI jqgrid 使用演示
next: api.html
prev: ../
---

## jqGrid 演示


- [官方演示]: http://www.guriddo.net/demo/bootstrap/

### 与 Amaze UI 集成演示

`````html
<table id="jqGrid">
</table>
<div id="jqGridPager"></div>
`````
```html
<script type="text/javascript">
  $(document).ready(function () {
    $("#jqGrid").jqGrid({
      url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
      mtype: "GET",
      styleUI : 'AmazeUI',
      datatype: "jsonp",
      colModel: [
        { label: 'OrderID', name: 'OrderID', key: true, width: 85 },
        { label: 'Customer ID', name: 'CustomerID', width: 150 },
        { label: 'Order Date', name: 'OrderDate', width: 150 },
        { label: 'Freight', name: 'Freight', width: 150 },
        { label:'Ship Name', name: 'ShipName', width: 150 }
      ],
      viewrecords: true,
      height: 250,
      rowNum: 20,
      pager: "#jqGridPager"
    });
  });
 </script>
```

<script src="http://www.guriddo.net/demo/js/trirand/i18n/grid.locale-cn.js"></script>
<script src="http://www.guriddo.net/demo/js/trirand/jquery.jqGrid.min.js"></script>
<script src="../amazeui.jqgrid.min.js"></script>
<script type="text/javascript">
  $(document).ready(function () {
    $("#jqGrid").jqGrid({
      url: 'http://trirand.com/blog/phpjqgrid/examples/jsonp/getjsonp.php?callback=?&qwery=longorders',
      mtype: "GET",
      styleUI : 'AmazeUI',
      datatype: "jsonp",
      colModel: [
        { label: 'OrderID', name: 'OrderID', key: true, width: 85 },
        { label: 'Customer ID', name: 'CustomerID', width: 150 },
        { label: 'Order Date', name: 'OrderDate', width: 150 },
        { label: 'Freight', name: 'Freight', width: 150 },
        { label:'Ship Name', name: 'ShipName', width: 150 }
      ],
      viewrecords: true,
      height: 250,
      rowNum: 20,
      pager: "#jqGridPager"
    });
  });
 </script>

