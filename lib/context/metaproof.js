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
    function MetaproofContext(context, derived, metaproofSteps) {
        _classCallCheck(this, MetaproofContext);
        this.context = context;
        this.derived = derived;
        this.metaproofSteps = metaproofSteps;
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
            key: "getMetaproofSteps",
            value: function getMetaproofSteps() {
                var metaproofSteps = this.context.getMetaproofSteps();
                metaproofSteps = _toConsumableArray(metaproofSteps).concat(_toConsumableArray(this.metaproofSteps));
                return metaproofSteps;
            }
        },
        {
            key: "getLastMetaproofStep",
            value: function getLastMetaproofStep() {
                var lastMetaproofStep = null;
                var metaproofStepsLength = this.metaproofSteps.length;
                if (metaproofStepsLength > 0) {
                    lastMetaproofStep = (0, _array.last)(this.metaproofSteps);
                }
                return lastMetaproofStep;
            }
        },
        {
            key: "setDerived",
            value: function setDerived(derived) {
                this.derived = derived;
            }
        },
        {
            key: "addMetaproofStep",
            value: function addMetaproofStep(metaproofStep) {
                this.metaproofSteps.push(metaproofStep);
            }
        },
        {
            key: "matchMetastatement",
            value: function matchMetastatement(metastatementNode) {
                var metastatementMatches;
                metastatementMatches = this.metaproofSteps.some(function(metaproofStep) {
                    metastatementMatches = metaproofStep.matchMetastatement(metastatementNode);
                    if (metastatementMatches) {
                        return true;
                    }
                });
                if (!metastatementMatches) {
                    metastatementMatches = this.context.matchMetastatement(metastatementNode);
                }
                return metastatementMatches;
            }
        }
    ], [
        {
            key: "fromFileContext",
            value: function fromFileContext(fileContext) {
                var context = fileContext, derived = false, metaproofSteps = [], metaproofContext = new MetaproofContext(context, derived, metaproofSteps);
                return metaproofContext;
            }
        },
        {
            key: "fromMetaproofContext",
            value: function fromMetaproofContext(metaproofContext) {
                var context = metaproofContext, derived = false, metaproofSteps = [];
                metaproofContext = new MetaproofContext(context, derived, metaproofSteps); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L21ldGFwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZpbGVNaXhpbnMgZnJvbSBcIi4uL21peGlucy9maWxlXCI7XG5pbXBvcnQgbG9nZ2luZ01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2xvZ2dpbmdcIjtcbmltcG9ydCBjYWxsYmFja3NNaXhpbnMgZnJvbSBcIi4uL21peGlucy9jYWxsYmFja3NcIjtcblxuaW1wb3J0IHsgbGFzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY2xhc3MgTWV0YXByb29mQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGRlcml2ZWQsIG1ldGFwcm9vZlN0ZXBzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmRlcml2ZWQgPSBkZXJpdmVkO1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMgPSBtZXRhcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGlzRGVyaXZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXJpdmVkO1xuICB9XG5cbiAgZ2V0TWV0YXByb29mU3RlcHMoKSB7XG4gICAgbGV0IG1ldGFwcm9vZlN0ZXBzID0gdGhpcy5jb250ZXh0LmdldE1ldGFwcm9vZlN0ZXBzKCk7XG5cbiAgICBtZXRhcHJvb2ZTdGVwcyA9IFsgIC8vL1xuICAgICAgLi4ubWV0YXByb29mU3RlcHMsXG4gICAgICAuLi50aGlzLm1ldGFwcm9vZlN0ZXBzXG4gICAgXTtcblxuICAgIHJldHVybiBtZXRhcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldExhc3RNZXRhcHJvb2ZTdGVwKCkge1xuICAgIGxldCBsYXN0TWV0YXByb29mU3RlcCA9IG51bGw7XG5cbiAgICBjb25zdCBtZXRhcHJvb2ZTdGVwc0xlbmd0aCA9IHRoaXMubWV0YXByb29mU3RlcHMubGVuZ3RoO1xuXG4gICAgaWYgKG1ldGFwcm9vZlN0ZXBzTGVuZ3RoID4gMCkge1xuICAgICAgbGFzdE1ldGFwcm9vZlN0ZXAgPSBsYXN0KHRoaXMubWV0YXByb29mU3RlcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0TWV0YXByb29mU3RlcDtcbiAgfVxuXG4gIHNldERlcml2ZWQoZGVyaXZlZCkge1xuICAgIHRoaXMuZGVyaXZlZCA9IGRlcml2ZWQ7XG4gIH1cblxuICBhZGRNZXRhcHJvb2ZTdGVwKG1ldGFwcm9vZlN0ZXApIHtcbiAgICB0aGlzLm1ldGFwcm9vZlN0ZXBzLnB1c2gobWV0YXByb29mU3RlcCk7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE1hdGNoZXM7XG5cbiAgICBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IHRoaXMubWV0YXByb29mU3RlcHMuc29tZSgobWV0YXByb29mU3RlcCkgPT4ge1xuICAgICAgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBtZXRhcHJvb2ZTdGVwLm1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChtZXRhc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghbWV0YXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gdGhpcy5jb250ZXh0Lm1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRNYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGRlcml2ZWQgPSBmYWxzZSxcbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIG1ldGFwcm9vZkNvbnRleHQgPSBuZXcgTWV0YXByb29mQ29udGV4dChjb250ZXh0LCBkZXJpdmVkLCBtZXRhcHJvb2ZTdGVwcyk7XG5cbiAgICByZXR1cm4gbWV0YXByb29mQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXByb29mQ29udGV4dChtZXRhcHJvb2ZDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IG1ldGFwcm9vZkNvbnRleHQsICAvLy9cbiAgICAgICAgICBkZXJpdmVkID0gZmFsc2UsXG4gICAgICAgICAgbWV0YXByb29mU3RlcHMgPSBbXTtcblxuICAgIG1ldGFwcm9vZkNvbnRleHQgPSBuZXcgTWV0YXByb29mQ29udGV4dChjb250ZXh0LCBkZXJpdmVkLCBtZXRhcHJvb2ZTdGVwcyk7ICAvLy9cblxuICAgIHJldHVybiBtZXRhcHJvb2ZDb250ZXh0O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTWV0YXByb29mQ29udGV4dC5wcm90b3R5cGUsIGZpbGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihNZXRhcHJvb2ZDb250ZXh0LnByb3RvdHlwZSwgbG9nZ2luZ01peGlucyk7XG5PYmplY3QuYXNzaWduKE1ldGFwcm9vZkNvbnRleHQucHJvdG90eXBlLCBjYWxsYmFja3NNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBNZXRhcHJvb2ZDb250ZXh0OyJdLCJuYW1lcyI6WyJNZXRhcHJvb2ZDb250ZXh0IiwiY29udGV4dCIsImRlcml2ZWQiLCJtZXRhcHJvb2ZTdGVwcyIsImdldENvbnRleHQiLCJpc0Rlcml2ZWQiLCJnZXRNZXRhcHJvb2ZTdGVwcyIsImdldExhc3RNZXRhcHJvb2ZTdGVwIiwibGFzdE1ldGFwcm9vZlN0ZXAiLCJtZXRhcHJvb2ZTdGVwc0xlbmd0aCIsImxlbmd0aCIsImxhc3QiLCJzZXREZXJpdmVkIiwiYWRkTWV0YXByb29mU3RlcCIsIm1ldGFwcm9vZlN0ZXAiLCJwdXNoIiwibWF0Y2hNZXRhc3RhdGVtZW50IiwibWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhc3RhdGVtZW50TWF0Y2hlcyIsInNvbWUiLCJmcm9tRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsIm1ldGFwcm9vZkNvbnRleHQiLCJmcm9tTWV0YXByb29mQ29udGV4dCIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImZpbGVNaXhpbnMiLCJsb2dnaW5nTWl4aW5zIiwiY2FsbGJhY2tzTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnR0E7OztlQUFBOzs7eURBOUZ1Qjs0REFDRzs4REFDRTtxQkFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBQSxBQUFNQSxpQ0FvRkgsQUFwRkg7YUFBTUEsaUJBQ1FDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxjQUFjOzhCQUR4Q0g7UUFFRixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLGNBQWMsR0FBR0E7O2lCQUpwQkg7O1lBT0pJLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhO2dCQUNYLE9BQU8sSUFBSSxDQUFDSCxPQUFPO1lBQ3JCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVk7Z0JBQ1YsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CO2dCQUNsQixJQUFJSCxpQkFBaUIsSUFBSSxDQUFDRixPQUFPLENBQUNLLGlCQUFpQjtnQkFFbkRILGlCQUFpQixBQUNmLG1CQUFHQSx1QkFDSCxtQkFBRyxJQUFJLENBQUNBLGNBQWM7Z0JBR3hCLE9BQU9BO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCO2dCQUNyQixJQUFJQyxvQkFBb0IsSUFBSTtnQkFFNUIsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ04sY0FBYyxDQUFDTyxNQUFNO2dCQUV2RCxJQUFJRCx1QkFBdUIsR0FBRztvQkFDNUJELG9CQUFvQkcsSUFBQUEsV0FBSSxFQUFDLElBQUksQ0FBQ1IsY0FBYztnQkFDOUMsQ0FBQztnQkFFRCxPQUFPSztZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdWLE9BQU8sRUFBRTtnQkFDbEIsSUFBSSxDQUFDQSxPQUFPLEdBQUdBO1lBQ2pCOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsYUFBYSxFQUFFO2dCQUM5QixJQUFJLENBQUNYLGNBQWMsQ0FBQ1ksSUFBSSxDQUFDRDtZQUMzQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJDLGlCQUFpQixFQUFFO2dCQUNwQyxJQUFJQztnQkFFSkEsdUJBQXVCLElBQUksQ0FBQ2YsY0FBYyxDQUFDZ0IsSUFBSSxDQUFDLFNBQUNMLGVBQWtCO29CQUNqRUksdUJBQXVCSixjQUFjRSxrQkFBa0IsQ0FBQ0M7b0JBRXhELElBQUlDLHNCQUFzQjt3QkFDeEIsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0g7Z0JBRUEsSUFBSSxDQUFDQSxzQkFBc0I7b0JBQ3pCQSx1QkFBdUIsSUFBSSxDQUFDakIsT0FBTyxDQUFDZSxrQkFBa0IsQ0FBQ0M7Z0JBQ3pELENBQUM7Z0JBRUQsT0FBT0M7WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxnQkFBZ0JDLFdBQVcsRUFBRTtnQkFDbEMsSUFBTXBCLFVBQVVvQixhQUNWbkIsVUFBVSxLQUFLLEVBQ2ZDLGlCQUFpQixFQUFFLEVBQ25CbUIsbUJBQW1CLElBcEV2QnRCLGlCQW9FNENDLFNBQVNDLFNBQVNDO2dCQUVoRSxPQUFPbUI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHFCQUFxQkQsZ0JBQWdCLEVBQUU7Z0JBQzVDLElBQU1yQixVQUFVcUIsa0JBQ1ZwQixVQUFVLEtBQUssRUFDZkMsaUJBQWlCLEVBQUU7Z0JBRXpCbUIsbUJBQW1CLElBOUVqQnRCLGlCQThFc0NDLFNBQVNDLFNBQVNDLGlCQUFrQixHQUFHO2dCQUUvRSxPQUFPbUI7WUFDVDs7O1dBakZJdEI7O0FBb0ZOd0IsT0FBT0MsTUFBTSxDQUFDekIsaUJBQWlCMEIsU0FBUyxFQUFFQyxhQUFVO0FBQ3BESCxPQUFPQyxNQUFNLENBQUN6QixpQkFBaUIwQixTQUFTLEVBQUVFLGdCQUFhO0FBQ3ZESixPQUFPQyxNQUFNLENBQUN6QixpQkFBaUIwQixTQUFTLEVBQUVHLGtCQUFlO0lBRXpELFdBQWU3QiJ9