tg-dynamic-directive
====================

A simple directive to dynamically load proper view, based on the characteristics of the provided model.

#Usage

```html
<!-- Directly pass a string with the view -->
<tg-dynamic-directive ng-model="headerModel" tg-dynamic-directive-view="'headerView.html'">
</tg-dynamic-directive>

<!-- Use a function that is called with the ng-model as a parameter -->
<div ng-repeat="pagePart in pageParts">
  <tg-dynamic-directive ng-model="pagePart" tg-dynamic-directive-view="getView">
  </tg-dynamic-directive>
</div>

<!-- Get the view from a property of an object -->
<tg-dynamic-directive ng-model="footerModel" tg-dynamic-directive-view="footerModel.view">
</tg-dynamic-directive>
```

```js
myapp.controller('myController', function ($scope) {
  $scope.headerModel = { title: 'Header title' };

  $scope.pageParts = [{
    title: 'My Title',
    type: 'title'
  }, {
    label: 'Section 1',
    type: 'section'
  }, {
    label: 'Section 2',
    type: 'section'
  }]
  
  $scope.footerModel = {
    copyright: 'tg©',
    view: 'footerView.html'
  };

  $scope.getView = function(item) {
      if (item.type === 'title') {
        return 'titleView.html';
      } else if (item.type === 'section') {
        return 'sectionView.html';
      }
      return null;
  };
});
```

The parameter passed to `ng-model` is available to the `$scope` of the included view as `ngModelItem`.
```html
<script type="text/ng-template" id="headerView.html">
  <h1> {{ ngModelItem.title }} </h1>
</script>
```

#Examples

* [Sortable tree with dynamic template](http://codepen.io/thgreasi/pen/uyHFC)
* [Sortable tree with dynamic changing template](http://codepen.io/thgreasi/pen/emBJQL)
