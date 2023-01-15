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
        return Matcher;
    },
    matcher: function() {
        return matcher;
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
var Matcher = function Matcher() {
    _classCallCheck(this, Matcher);
};
Object.assign(Matcher.prototype, _matcher.default);
var matcher = new Matcher();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXRjaGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbWF0Y2hlck1peGlucyBmcm9tIFwiLi9taXhpbnMvbWF0Y2hlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRjaGVyIHt9XG5cbk9iamVjdC5hc3NpZ24oTWF0Y2hlci5wcm90b3R5cGUsIG1hdGNoZXJNaXhpbnMpO1xuXG5leHBvcnQgY29uc3QgbWF0Y2hlciA9IG5ldyBNYXRjaGVyKCk7XG4iXSwibmFtZXMiOlsiTWF0Y2hlciIsIm1hdGNoZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJtYXRjaGVyTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBSXFCQTs7SUFJUkMsT0FBTztlQUFQQTs7OzREQU5hOzs7Ozs7Ozs7OztBQUVYLElBQUEsQUFBTUQsVUFBTixTQUFNQTswQkFBQUE7O0FBRXJCRSxPQUFPQyxNQUFNLENBQUNILFFBQVFJLFNBQVMsRUFBRUMsZ0JBQWE7QUFFdkMsSUFBTUosVUFBVSxJQUFJRCJ9