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
var _array = require("../utilities/array");
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
            key: "getLastMetaAssertion",
            value: function getLastMetaAssertion() {
                var lastMetaAssertion = null;
                var metaAssertionsLength = this.metaAssertions.length;
                if (metaAssertionsLength > 0) {
                    lastMetaAssertion = (0, _array.last)(this.metaAssertions);
                }
                return lastMetaAssertion;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L21ldGFwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZpbGVNaXhpbnMgZnJvbSBcIi4uL21peGlucy9maWxlXCI7XG5pbXBvcnQgbG9nZ2luZ01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2xvZ2dpbmdcIjtcbmltcG9ydCBjYWxsYmFja3NNaXhpbnMgZnJvbSBcIi4uL21peGlucy9jYWxsYmFja3NcIjtcblxuaW1wb3J0IHsgbGFzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY2xhc3MgTWV0YXByb29mQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGRlcml2ZWQsIG1ldGFBc3NlcnRpb25zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmRlcml2ZWQgPSBkZXJpdmVkO1xuICAgIHRoaXMubWV0YUFzc2VydGlvbnMgPSBtZXRhQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGlzRGVyaXZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXJpdmVkO1xuICB9XG5cbiAgZ2V0TWV0YUFzc2VydGlvbnMoKSB7XG4gICAgbGV0IG1ldGFBc3NlcnRpb25zID0gdGhpcy5jb250ZXh0LmdldE1ldGFBc3NlcnRpb25zKCk7XG5cbiAgICBtZXRhQXNzZXJ0aW9ucyA9IFsgIC8vL1xuICAgICAgLi4ubWV0YUFzc2VydGlvbnMsXG4gICAgICAuLi50aGlzLm1ldGFBc3NlcnRpb25zXG4gICAgXTtcblxuICAgIHJldHVybiBtZXRhQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldExhc3RNZXRhQXNzZXJ0aW9uKCkge1xuICAgIGxldCBsYXN0TWV0YUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBtZXRhQXNzZXJ0aW9uc0xlbmd0aCA9IHRoaXMubWV0YUFzc2VydGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKG1ldGFBc3NlcnRpb25zTGVuZ3RoID4gMCkge1xuICAgICAgbGFzdE1ldGFBc3NlcnRpb24gPSBsYXN0KHRoaXMubWV0YUFzc2VydGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0TWV0YUFzc2VydGlvbjtcbiAgfVxuXG4gIHNldERlcml2ZWQoZGVyaXZlZCkge1xuICAgIHRoaXMuZGVyaXZlZCA9IGRlcml2ZWQ7XG4gIH1cblxuICBhZGRNZXRhQXNzZXJ0aW9uKG1ldGFBc3NlcnRpb24pIHtcbiAgICB0aGlzLm1ldGFBc3NlcnRpb25zLnB1c2gobWV0YUFzc2VydGlvbik7XG4gIH1cblxuICBtYXRjaE1ldGFBc3NlcnRpb24obWV0YUFzc2VydGlvbikge1xuICAgIGxldCBtZXRhQXNzZXJ0aW9uTWF0Y2hlcztcblxuICAgIGNvbnN0IG1ldGFBc3NlcnRpb25CID0gbWV0YUFzc2VydGlvbjsgLy8vXG5cbiAgICBtZXRhQXNzZXJ0aW9uTWF0Y2hlcyA9IHRoaXMubWV0YUFzc2VydGlvbnMuc29tZSgobWV0YUFzc2VydGlvbikgPT4ge1xuICAgICAgY29uc3QgbWV0YUFzc2VydGlvbkEgPSBtZXRhQXNzZXJ0aW9uLCAvLy9cbiAgICAgICAgICAgIG1hdGNoZXMgPSBtZXRhQXNzZXJ0aW9uQS5tYXRjaChtZXRhQXNzZXJ0aW9uQik7XG5cbiAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFtZXRhQXNzZXJ0aW9uTWF0Y2hlcykge1xuICAgICAgbWV0YUFzc2VydGlvbk1hdGNoZXMgPSB0aGlzLmNvbnRleHQubWF0Y2hNZXRhQXNzZXJ0aW9uKG1ldGFBc3NlcnRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhQXNzZXJ0aW9uTWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBkZXJpdmVkID0gZmFsc2UsXG4gICAgICAgICAgbWV0YUFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICBtZXRhcHJvb2ZDb250ZXh0ID0gbmV3IE1ldGFwcm9vZkNvbnRleHQoY29udGV4dCwgZGVyaXZlZCwgbWV0YUFzc2VydGlvbnMpO1xuXG4gICAgcmV0dXJuIG1ldGFwcm9vZkNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFwcm9vZkNvbnRleHQobWV0YXByb29mQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBtZXRhcHJvb2ZDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZGVyaXZlZCA9IGZhbHNlLFxuICAgICAgICAgIG1ldGFBc3NlcnRpb25zID0gW107XG5cbiAgICBtZXRhcHJvb2ZDb250ZXh0ID0gbmV3IE1ldGFwcm9vZkNvbnRleHQoY29udGV4dCwgZGVyaXZlZCwgbWV0YUFzc2VydGlvbnMpOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXByb29mQ29udGV4dDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKE1ldGFwcm9vZkNvbnRleHQucHJvdG90eXBlLCBmaWxlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oTWV0YXByb29mQ29udGV4dC5wcm90b3R5cGUsIGxvZ2dpbmdNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihNZXRhcHJvb2ZDb250ZXh0LnByb3RvdHlwZSwgY2FsbGJhY2tzTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0YXByb29mQ29udGV4dDsiXSwibmFtZXMiOlsiTWV0YXByb29mQ29udGV4dCIsImNvbnRleHQiLCJkZXJpdmVkIiwibWV0YUFzc2VydGlvbnMiLCJnZXRDb250ZXh0IiwiaXNEZXJpdmVkIiwiZ2V0TWV0YUFzc2VydGlvbnMiLCJnZXRMYXN0TWV0YUFzc2VydGlvbiIsImxhc3RNZXRhQXNzZXJ0aW9uIiwibWV0YUFzc2VydGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0Iiwic2V0RGVyaXZlZCIsImFkZE1ldGFBc3NlcnRpb24iLCJtZXRhQXNzZXJ0aW9uIiwicHVzaCIsIm1hdGNoTWV0YUFzc2VydGlvbiIsIm1ldGFBc3NlcnRpb25NYXRjaGVzIiwibWV0YUFzc2VydGlvbkIiLCJzb21lIiwibWV0YUFzc2VydGlvbkEiLCJtYXRjaGVzIiwibWF0Y2giLCJmcm9tRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsIm1ldGFwcm9vZkNvbnRleHQiLCJmcm9tTWV0YXByb29mQ29udGV4dCIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImZpbGVNaXhpbnMiLCJsb2dnaW5nTWl4aW5zIiwiY2FsbGJhY2tzTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtR0E7OztlQUFBOzs7eURBakd1Qjs0REFDRzs4REFDRTtxQkFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBQSxBQUFNQSxpQ0F1RkgsQUF2Rkg7YUFBTUEsaUJBQ1FDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxjQUFjOzhCQUR4Q0g7UUFFRixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLGNBQWMsR0FBR0E7O2lCQUpwQkg7O1lBT0pJLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhO2dCQUNYLE9BQU8sSUFBSSxDQUFDSCxPQUFPO1lBQ3JCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVk7Z0JBQ1YsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CO2dCQUNsQixJQUFJSCxpQkFBaUIsSUFBSSxDQUFDRixPQUFPLENBQUNLLGlCQUFpQjtnQkFFbkRILGlCQUFpQixBQUNmLG1CQUFHQSx1QkFDSCxtQkFBRyxJQUFJLENBQUNBLGNBQWM7Z0JBR3hCLE9BQU9BO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCO2dCQUNyQixJQUFJQyxvQkFBb0IsSUFBSTtnQkFFNUIsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ04sY0FBYyxDQUFDTyxNQUFNO2dCQUV2RCxJQUFJRCx1QkFBdUIsR0FBRztvQkFDNUJELG9CQUFvQkcsSUFBQUEsV0FBSSxFQUFDLElBQUksQ0FBQ1IsY0FBYztnQkFDOUMsQ0FBQztnQkFFRCxPQUFPSztZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdWLE9BQU8sRUFBRTtnQkFDbEIsSUFBSSxDQUFDQSxPQUFPLEdBQUdBO1lBQ2pCOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsYUFBYSxFQUFFO2dCQUM5QixJQUFJLENBQUNYLGNBQWMsQ0FBQ1ksSUFBSSxDQUFDRDtZQUMzQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJGLGFBQWEsRUFBRTtnQkFDaEMsSUFBSUc7Z0JBRUosSUFBTUMsaUJBQWlCSixlQUFlLEdBQUc7Z0JBRXpDRyx1QkFBdUIsSUFBSSxDQUFDZCxjQUFjLENBQUNnQixJQUFJLENBQUMsU0FBQ0wsZUFBa0I7b0JBQ2pFLElBQU1NLGlCQUFpQk4sZUFDakJPLFVBQVVELGVBQWVFLEtBQUssQ0FBQ0o7b0JBRXJDLElBQUlHLFNBQVM7d0JBQ1gsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0g7Z0JBRUEsSUFBSSxDQUFDSixzQkFBc0I7b0JBQ3pCQSx1QkFBdUIsSUFBSSxDQUFDaEIsT0FBTyxDQUFDZSxrQkFBa0IsQ0FBQ0Y7Z0JBQ3pELENBQUM7Z0JBRUQsT0FBT0c7WUFDVDs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSxnQkFBZ0JDLFdBQVcsRUFBRTtnQkFDbEMsSUFBTXZCLFVBQVV1QixhQUNWdEIsVUFBVSxLQUFLLEVBQ2ZDLGlCQUFpQixFQUFFLEVBQ25Cc0IsbUJBQW1CLElBdkV2QnpCLGlCQXVFNENDLFNBQVNDLFNBQVNDO2dCQUVoRSxPQUFPc0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHFCQUFxQkQsZ0JBQWdCLEVBQUU7Z0JBQzVDLElBQU14QixVQUFVd0Isa0JBQ1Z2QixVQUFVLEtBQUssRUFDZkMsaUJBQWlCLEVBQUU7Z0JBRXpCc0IsbUJBQW1CLElBakZqQnpCLGlCQWlGc0NDLFNBQVNDLFNBQVNDLGlCQUFrQixHQUFHO2dCQUUvRSxPQUFPc0I7WUFDVDs7O1dBcEZJekI7O0FBdUZOMkIsT0FBT0MsTUFBTSxDQUFDNUIsaUJBQWlCNkIsU0FBUyxFQUFFQyxhQUFVO0FBQ3BESCxPQUFPQyxNQUFNLENBQUM1QixpQkFBaUI2QixTQUFTLEVBQUVFLGdCQUFhO0FBQ3ZESixPQUFPQyxNQUFNLENBQUM1QixpQkFBaUI2QixTQUFTLEVBQUVHLGtCQUFlO0lBRXpELFdBQWVoQyJ9