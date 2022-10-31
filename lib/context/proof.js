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
var ProofContext = /*#__PURE__*/ function() {
    function ProofContext(context, derived, assertions) {
        _classCallCheck(this, ProofContext);
        this.context = context;
        this.derived = derived;
        this.assertions = assertions;
    }
    _createClass(ProofContext, [
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
            key: "getAssertions",
            value: function getAssertions() {
                var assertions = this.context.getAssertions();
                assertions = _toConsumableArray(assertions).concat(_toConsumableArray(this.assertions));
                return assertions;
            }
        },
        {
            key: "setDerived",
            value: function setDerived(derived) {
                if (derived) {
                    this.statementNodes.pop();
                }
                this.derived = derived;
            }
        },
        {
            key: "addAssertion",
            value: function addAssertion(assertion) {
                this.assertions.push(assertion);
            }
        },
        {
            key: "matchAssertion",
            value: function matchAssertion(assertion) {
                var assertionMatches;
                var assertionB = assertion; ///
                assertionMatches = this.assertions.some(function(assertion) {
                    var assertionA = assertion, matches = assertionA.match(assertionB);
                    if (matches) {
                        return true;
                    }
                });
                if (!assertionMatches) {
                    assertionMatches = this.context.matchAssertion(assertion);
                }
                return assertionMatches;
            }
        }
    ], [
        {
            key: "fromFileContext",
            value: function fromFileContext(fileContext) {
                var context = fileContext, derived = false, assertions = [], proofContext = new ProofContext(context, derived, assertions);
                return proofContext;
            }
        },
        {
            key: "fromProofContext",
            value: function fromProofContext(proofContext) {
                var context = proofContext, derived = false, assertions = [];
                proofContext = new ProofContext(context, derived, assertions); ///
                return proofContext;
            }
        }
    ]);
    return ProofContext;
}();
Object.assign(ProofContext.prototype, _file.default);
Object.assign(ProofContext.prototype, _logging.default);
Object.assign(ProofContext.prototype, _callbacks.default);
var _default = ProofContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Byb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZmlsZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZpbGVcIjtcbmltcG9ydCBsb2dnaW5nTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbG9nZ2luZ1wiO1xuaW1wb3J0IGNhbGxiYWNrc01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2NhbGxiYWNrc1wiO1xuXG5jbGFzcyBQcm9vZkNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBkZXJpdmVkLCBhc3NlcnRpb25zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmRlcml2ZWQgPSBkZXJpdmVkO1xuICAgIHRoaXMuYXNzZXJ0aW9ucyA9IGFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBpc0Rlcml2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVyaXZlZDtcbiAgfVxuXG4gIGdldEFzc2VydGlvbnMoKSB7XG4gICAgbGV0IGFzc2VydGlvbnMgPSB0aGlzLmNvbnRleHQuZ2V0QXNzZXJ0aW9ucygpO1xuXG4gICAgYXNzZXJ0aW9ucyA9IFtcbiAgICAgIC4uLmFzc2VydGlvbnMsXG4gICAgICAuLi50aGlzLmFzc2VydGlvbnNcbiAgICBdO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbnM7XG4gIH1cblxuICBzZXREZXJpdmVkKGRlcml2ZWQpIHtcbiAgICBpZiAoZGVyaXZlZCkge1xuICAgICAgdGhpcy5zdGF0ZW1lbnROb2Rlcy5wb3AoKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcml2ZWQgPSBkZXJpdmVkO1xuICB9XG5cbiAgYWRkQXNzZXJ0aW9uKGFzc2VydGlvbikge1xuICAgIHRoaXMuYXNzZXJ0aW9ucy5wdXNoKGFzc2VydGlvbik7XG4gIH1cblxuICBtYXRjaEFzc2VydGlvbihhc3NlcnRpb24pIHtcbiAgICBsZXQgYXNzZXJ0aW9uTWF0Y2hlcztcblxuICAgIGNvbnN0IGFzc2VydGlvbkIgPSBhc3NlcnRpb247IC8vL1xuXG4gICAgYXNzZXJ0aW9uTWF0Y2hlcyA9IHRoaXMuYXNzZXJ0aW9ucy5zb21lKChhc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbkEgPSBhc3NlcnRpb24sIC8vL1xuICAgICAgICAgICAgbWF0Y2hlcyA9IGFzc2VydGlvbkEubWF0Y2goYXNzZXJ0aW9uQik7XG5cbiAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFhc3NlcnRpb25NYXRjaGVzKSB7XG4gICAgICBhc3NlcnRpb25NYXRjaGVzID0gdGhpcy5jb250ZXh0Lm1hdGNoQXNzZXJ0aW9uKGFzc2VydGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc2VydGlvbk1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZGVyaXZlZCA9IGZhbHNlLFxuICAgICAgICAgIGFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICBwcm9vZkNvbnRleHQgPSBuZXcgUHJvb2ZDb250ZXh0KGNvbnRleHQsIGRlcml2ZWQsIGFzc2VydGlvbnMpO1xuXG4gICAgcmV0dXJuIHByb29mQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvb2ZDb250ZXh0KHByb29mQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBwcm9vZkNvbnRleHQsICAvLy9cbiAgICAgICAgICBkZXJpdmVkID0gZmFsc2UsXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IFtdO1xuXG4gICAgcHJvb2ZDb250ZXh0ID0gbmV3IFByb29mQ29udGV4dChjb250ZXh0LCBkZXJpdmVkLCBhc3NlcnRpb25zKTsgIC8vL1xuXG4gICAgcmV0dXJuIHByb29mQ29udGV4dDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFByb29mQ29udGV4dC5wcm90b3R5cGUsIGZpbGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihQcm9vZkNvbnRleHQucHJvdG90eXBlLCBsb2dnaW5nTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oUHJvb2ZDb250ZXh0LnByb3RvdHlwZSwgY2FsbGJhY2tzTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvb2ZDb250ZXh0O1xuIl0sIm5hbWVzIjpbIlByb29mQ29udGV4dCIsImNvbnRleHQiLCJkZXJpdmVkIiwiYXNzZXJ0aW9ucyIsImdldENvbnRleHQiLCJpc0Rlcml2ZWQiLCJnZXRBc3NlcnRpb25zIiwic2V0RGVyaXZlZCIsInN0YXRlbWVudE5vZGVzIiwicG9wIiwiYWRkQXNzZXJ0aW9uIiwiYXNzZXJ0aW9uIiwicHVzaCIsIm1hdGNoQXNzZXJ0aW9uIiwiYXNzZXJ0aW9uTWF0Y2hlcyIsImFzc2VydGlvbkIiLCJzb21lIiwiYXNzZXJ0aW9uQSIsIm1hdGNoZXMiLCJtYXRjaCIsImZyb21GaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwicHJvb2ZDb250ZXh0IiwiZnJvbVByb29mQ29udGV4dCIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImZpbGVNaXhpbnMiLCJsb2dnaW5nTWl4aW5zIiwiY2FsbGJhY2tzTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5RkE7OztlQUFBOzs7eURBdkZ1Qjs0REFDRzs4REFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBQSxBQUFNQSw2QkErRUgsQUEvRUg7YUFBTUEsYUFDUUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7OEJBRHBDSDtRQUVGLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7aUJBSmhCSDs7WUFPSkksS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWE7Z0JBQ1gsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTtnQkFDVixPQUFPLElBQUksQ0FBQ0gsT0FBTztZQUNyQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2QsSUFBSUgsYUFBYSxJQUFJLENBQUNGLE9BQU8sQ0FBQ0ssYUFBYTtnQkFFM0NILGFBQWEsQUFDWCxtQkFBR0EsbUJBQ0gsbUJBQUcsSUFBSSxDQUFDQSxVQUFVO2dCQUdwQixPQUFPQTtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdMLE9BQU8sRUFBRTtnQkFDbEIsSUFBSUEsU0FBUztvQkFDWCxJQUFJLENBQUNNLGNBQWMsQ0FBQ0MsR0FBRztnQkFDekIsQ0FBQztnQkFFRCxJQUFJLENBQUNQLE9BQU8sR0FBR0E7WUFDakI7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsU0FBUyxFQUFFO2dCQUN0QixJQUFJLENBQUNSLFVBQVUsQ0FBQ1MsSUFBSSxDQUFDRDtZQUN2Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlRixTQUFTLEVBQUU7Z0JBQ3hCLElBQUlHO2dCQUVKLElBQU1DLGFBQWFKLFdBQVcsR0FBRztnQkFFakNHLG1CQUFtQixJQUFJLENBQUNYLFVBQVUsQ0FBQ2EsSUFBSSxDQUFDLFNBQUNMLFdBQWM7b0JBQ3JELElBQU1NLGFBQWFOLFdBQ2JPLFVBQVVELFdBQVdFLEtBQUssQ0FBQ0o7b0JBRWpDLElBQUlHLFNBQVM7d0JBQ1gsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0g7Z0JBRUEsSUFBSSxDQUFDSixrQkFBa0I7b0JBQ3JCQSxtQkFBbUIsSUFBSSxDQUFDYixPQUFPLENBQUNZLGNBQWMsQ0FBQ0Y7Z0JBQ2pELENBQUM7Z0JBRUQsT0FBT0c7WUFDVDs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSxnQkFBZ0JDLFdBQVcsRUFBRTtnQkFDbEMsSUFBTXBCLFVBQVVvQixhQUNWbkIsVUFBVSxLQUFLLEVBQ2ZDLGFBQWEsRUFBRSxFQUNmbUIsZUFBZSxJQS9EbkJ0QixhQStEb0NDLFNBQVNDLFNBQVNDO2dCQUV4RCxPQUFPbUI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGlCQUFpQkQsWUFBWSxFQUFFO2dCQUNwQyxJQUFNckIsVUFBVXFCLGNBQ1ZwQixVQUFVLEtBQUssRUFDZkMsYUFBYSxFQUFFO2dCQUVyQm1CLGVBQWUsSUF6RWJ0QixhQXlFOEJDLFNBQVNDLFNBQVNDLGFBQWMsR0FBRztnQkFFbkUsT0FBT21CO1lBQ1Q7OztXQTVFSXRCOztBQStFTndCLE9BQU9DLE1BQU0sQ0FBQ3pCLGFBQWEwQixTQUFTLEVBQUVDLGFBQVU7QUFDaERILE9BQU9DLE1BQU0sQ0FBQ3pCLGFBQWEwQixTQUFTLEVBQUVFLGdCQUFhO0FBQ25ESixPQUFPQyxNQUFNLENBQUN6QixhQUFhMEIsU0FBUyxFQUFFRyxrQkFBZTtJQUVyRCxXQUFlN0IifQ==