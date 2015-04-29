function FeaturesChecker(features) {
    this._features = features || {};
}

FeaturesChecker.prototype = {
    install: function(less) {
        var features = this._features;

        less.functions.functionRegistry.add('feature', function(feature) {

            if(typeof features[feature.value] === 'boolean') {
                feature = features[feature.value];
            } else {
                feature = features[feature.value] && features[feature.value].state;
            }

            return feature ? less.tree.Keyword.True : less.tree.Keyword.False;

        });
    },
    minVersion: [2, 0 , 0]
};

module.exports = FeaturesChecker;