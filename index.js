function FeaturesChecker(tree, features) {
    this._features = features;
    this._tree = tree;
}

FeaturesChecker.prototype = {
    run: function() {
        var features = this._features,
            tree = this._tree;

        tree.functions.feature = function(feature) {
            return features[feature.value] && features[feature.value].state ? tree.True : tree.False;
        }
    }
};

module.exports = FeaturesChecker;