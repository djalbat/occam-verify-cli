"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _file = /*#__PURE__*/ _interopRequireDefault(require("../mixins/file"));
var _logging = /*#__PURE__*/ _interopRequireDefault(require("../mixins/logging"));
var _callbacks = /*#__PURE__*/ _interopRequireDefault(require("../mixins/callbacks"));
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var MetaproofContext = /*#__PURE__*/ function() {
    function MetaproofContext(context, derived, metaAssertions) {
        _classCallCheck(this, MetaproofContext);
        this.context = context;
        this.derived = derived;
        this.metaAssertions = metaAssertions;
    }
    _createClass(MetaproofContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "isDerived",
            value: function isDerived() {
                return this.derived;
            }
        },
        {
            key: "getMetaAssertions",
            value: function getMetaAssertions() {
                var metaAssertions = this.context.getMetaAssertions();
                metaAssertions = _toConsumableArray(metaAssertions).concat(_toConsumableArray(this.metaAssertions));
                return metaAssertions;
            }
        },
        {
            key: "setDerived",
            value: function setDerived(derived) {
                this.derived = derived;
            }
        },
        {
            key: "addMetaAssertion",
            value: function addMetaAssertion(metaAssertion) {
                this.metaAssertions.push(metaAssertion);
            }
        },
        {
            key: "matchMetaAssertion",
            value: function matchMetaAssertion(metaAssertion) {
                var metaAssertionMatches;
                var metaAssertionB = metaAssertion; ///
                metaAssertionMatches = this.metaAssertions.some(function(metaAssertion) {
                    var metaAssertionA = metaAssertion, matches = metaAssertionA.match(metaAssertionB);
                    if (matches) {
                        return true;
                    }
                });
                if (!metaAssertionMatches) {
                    metaAssertionMatches = this.context.matchMetaAssertion(metaAssertion);
                }
                return metaAssertionMatches;
            }
        }
    ], [
        {
            key: "fromFileContext",
            value: function fromFileContext(fileContext) {
                var context = fileContext, derived = false, metaAssertions = [], metaproofContext = new MetaproofContext(context, derived, metaAssertions);
                return metaproofContext;
            }
        },
        {
            key: "fromMetaproofContext",
            value: function fromMetaproofContext(metaproofContext) {
                var context = metaproofContext, derived = false, metaAssertions = [];
                metaproofContext = new MetaproofContext(context, derived, metaAssertions); ///
                return metaproofContext;
            }
        }
    ]);
    return MetaproofContext;
}();
Object.assign(MetaproofContext.prototype, _file.default);
Object.assign(MetaproofContext.prototype, _logging.default);
Object.assign(MetaproofContext.prototype, _callbacks.default);
var _default = MetaproofContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L21ldGFwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZpbGVNaXhpbnMgZnJvbSBcIi4uL21peGlucy9maWxlXCI7XG5pbXBvcnQgbG9nZ2luZ01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2xvZ2dpbmdcIjtcbmltcG9ydCBjYWxsYmFja3NNaXhpbnMgZnJvbSBcIi4uL21peGlucy9jYWxsYmFja3NcIjtcblxuY2xhc3MgTWV0YXByb29mQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGRlcml2ZWQsIG1ldGFBc3NlcnRpb25zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmRlcml2ZWQgPSBkZXJpdmVkO1xuICAgIHRoaXMubWV0YUFzc2VydGlvbnMgPSBtZXRhQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGlzRGVyaXZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXJpdmVkO1xuICB9XG5cbiAgZ2V0TWV0YUFzc2VydGlvbnMoKSB7XG4gICAgbGV0IG1ldGFBc3NlcnRpb25zID0gdGhpcy5jb250ZXh0LmdldE1ldGFBc3NlcnRpb25zKCk7XG5cbiAgICBtZXRhQXNzZXJ0aW9ucyA9IFtcbiAgICAgIC4uLm1ldGFBc3NlcnRpb25zLFxuICAgICAgLi4udGhpcy5tZXRhQXNzZXJ0aW9uc1xuICAgIF07XG5cbiAgICByZXR1cm4gbWV0YUFzc2VydGlvbnM7XG4gIH1cblxuICBzZXREZXJpdmVkKGRlcml2ZWQpIHtcbiAgICB0aGlzLmRlcml2ZWQgPSBkZXJpdmVkO1xuICB9XG5cbiAgYWRkTWV0YUFzc2VydGlvbihtZXRhQXNzZXJ0aW9uKSB7XG4gICAgdGhpcy5tZXRhQXNzZXJ0aW9ucy5wdXNoKG1ldGFBc3NlcnRpb24pO1xuICB9XG5cbiAgbWF0Y2hNZXRhQXNzZXJ0aW9uKG1ldGFBc3NlcnRpb24pIHtcbiAgICBsZXQgbWV0YUFzc2VydGlvbk1hdGNoZXM7XG5cbiAgICBjb25zdCBtZXRhQXNzZXJ0aW9uQiA9IG1ldGFBc3NlcnRpb247IC8vL1xuXG4gICAgbWV0YUFzc2VydGlvbk1hdGNoZXMgPSB0aGlzLm1ldGFBc3NlcnRpb25zLnNvbWUoKG1ldGFBc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IG1ldGFBc3NlcnRpb25BID0gbWV0YUFzc2VydGlvbiwgLy8vXG4gICAgICAgICAgICBtYXRjaGVzID0gbWV0YUFzc2VydGlvbkEubWF0Y2gobWV0YUFzc2VydGlvbkIpO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghbWV0YUFzc2VydGlvbk1hdGNoZXMpIHtcbiAgICAgIG1ldGFBc3NlcnRpb25NYXRjaGVzID0gdGhpcy5jb250ZXh0Lm1hdGNoTWV0YUFzc2VydGlvbihtZXRhQXNzZXJ0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUFzc2VydGlvbk1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZGVyaXZlZCA9IGZhbHNlLFxuICAgICAgICAgIG1ldGFBc3NlcnRpb25zID0gW10sXG4gICAgICAgICAgbWV0YXByb29mQ29udGV4dCA9IG5ldyBNZXRhcHJvb2ZDb250ZXh0KGNvbnRleHQsIGRlcml2ZWQsIG1ldGFBc3NlcnRpb25zKTtcblxuICAgIHJldHVybiBtZXRhcHJvb2ZDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhcHJvb2ZDb250ZXh0KG1ldGFwcm9vZkNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbWV0YXByb29mQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGRlcml2ZWQgPSBmYWxzZSxcbiAgICAgICAgICBtZXRhQXNzZXJ0aW9ucyA9IFtdO1xuXG4gICAgbWV0YXByb29mQ29udGV4dCA9IG5ldyBNZXRhcHJvb2ZDb250ZXh0KGNvbnRleHQsIGRlcml2ZWQsIG1ldGFBc3NlcnRpb25zKTsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGFwcm9vZkNvbnRleHQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihNZXRhcHJvb2ZDb250ZXh0LnByb3RvdHlwZSwgZmlsZU1peGlucyk7XG5PYmplY3QuYXNzaWduKE1ldGFwcm9vZkNvbnRleHQucHJvdG90eXBlLCBsb2dnaW5nTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oTWV0YXByb29mQ29udGV4dC5wcm90b3R5cGUsIGNhbGxiYWNrc01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IE1ldGFwcm9vZkNvbnRleHQ7Il0sIm5hbWVzIjpbIk1ldGFwcm9vZkNvbnRleHQiLCJjb250ZXh0IiwiZGVyaXZlZCIsIm1ldGFBc3NlcnRpb25zIiwiZ2V0Q29udGV4dCIsImlzRGVyaXZlZCIsImdldE1ldGFBc3NlcnRpb25zIiwic2V0RGVyaXZlZCIsImFkZE1ldGFBc3NlcnRpb24iLCJtZXRhQXNzZXJ0aW9uIiwicHVzaCIsIm1hdGNoTWV0YUFzc2VydGlvbiIsIm1ldGFBc3NlcnRpb25NYXRjaGVzIiwibWV0YUFzc2VydGlvbkIiLCJzb21lIiwibWV0YUFzc2VydGlvbkEiLCJtYXRjaGVzIiwibWF0Y2giLCJmcm9tRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsIm1ldGFwcm9vZkNvbnRleHQiLCJmcm9tTWV0YXByb29mQ29udGV4dCIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImZpbGVNaXhpbnMiLCJsb2dnaW5nTWl4aW5zIiwiY2FsbGJhY2tzTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxRkE7OztlQUFBOzs7eURBbkZ1Qjs0REFDRzs4REFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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