"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return MetaMatcher;
    },
    metaMatcher: function() {
        return metaMatcher;
    }
});
var _matcher = /*#__PURE__*/ _interopRequireDefault(require("./mixins/matcher"));
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var MetaMatcher = function MetaMatcher() {
    _classCallCheck(this, MetaMatcher);
};
Object.assign(MetaMatcher.prototype, _matcher.default);
var metaMatcher = new MetaMatcher();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhTWF0Y2hlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG1hdGNoZXJNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21hdGNoZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YU1hdGNoZXIge31cblxuT2JqZWN0LmFzc2lnbihNZXRhTWF0Y2hlci5wcm90b3R5cGUsIG1hdGNoZXJNaXhpbnMpO1xuXG5leHBvcnQgY29uc3QgbWV0YU1hdGNoZXIgPSBuZXcgTWV0YU1hdGNoZXIoKTtcbiJdLCJuYW1lcyI6WyJNZXRhTWF0Y2hlciIsIm1ldGFNYXRjaGVyIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwibWF0Y2hlck1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQUlxQkE7O0lBSVJDLFdBQVc7ZUFBWEE7Ozs0REFOYTs7Ozs7Ozs7Ozs7QUFFWCxJQUFBLEFBQU1ELGNBQU4sU0FBTUE7MEJBQUFBOztBQUVyQkUsT0FBT0MsTUFBTSxDQUFDSCxZQUFZSSxTQUFTLEVBQUVDLGdCQUFhO0FBRTNDLElBQU1KLGNBQWMsSUFBSUQifQ==