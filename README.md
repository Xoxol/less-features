LESS custom conditions
=============

Plugin for create special conditions for mixin guards

##Usage

**Init**
```javascript
var Features = require("less-features");
    list = {
        "feature": {
            "state": true
        },
        "another-feature": {
            "state": false
        },
        "one-more-feature": true
    };

less.render(lessString, {plugins: [new Features(list)]}, function(err, result) {/* */});
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
.guarded-mixin() when (feature("one-more-feature")) {
    .one-more-class {
        color: blue;
    }
}
.guarded-mixin();
```

**Compiled CSS**
```CSS
.class {
    color: red;
}
.one-more-class {
    color: blue;
}
```