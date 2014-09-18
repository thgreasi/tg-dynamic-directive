tg-dynamic-directive
====================

A simple directive to dynamically load proper view, based on the characteristics of the provided model.

#Example Code

```html
<div ng-repeat="pagePart in pageParts">
  <tg-dynamic-directive ng-model="pagePart" tg-dynamic-directive-view="getView">
  </tg-dynamic-directive>
</div>
```

```js
myapp.controller('myController', function ($scope) {
  $scope.pageParts = [{
    title: 'My Title',
    type: 'title'
  }, {
    title: 'Section 1',
    type: 'section'
  }, {
    title: 'Section 2',
    type: 'section'
  }]

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
