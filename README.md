LESS custom conditions
=============

Plugin for create special conditions for mixin guards

##Usage
**Init**
```javascript
var features = require("less-features"),
    tree = require('less').tree,
    list = {
        "feature": {
            "state": true
        },
        "another-feature": {
            "state": false
        }
    };

parsedLessObj.toCSS({"plugins": [new features(tree, list)]});
```

**Call in LESS**
```LESS
.guarded-mixin() when (feature("feature")) {
    .class {
        color: red;
    }
}
.guarded-mixin() when (feature("another-feature")) {
    .another-class {
        color: green;
    }
}
.guarded-mixin();
```

**Compiled CSS**
```CSS
.class {
    color: red;
}
```