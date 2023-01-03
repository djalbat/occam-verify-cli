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
            value: function setDerived() {
                var derived = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                this.derived = derived;
            }
        },
        {
            key: "resetDerived",
            value: function resetDerived() {
                this.derived = false;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L21ldGFwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZpbGVNaXhpbnMgZnJvbSBcIi4uL21peGlucy9maWxlXCI7XG5pbXBvcnQgbG9nZ2luZ01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2xvZ2dpbmdcIjtcbmltcG9ydCBjYWxsYmFja3NNaXhpbnMgZnJvbSBcIi4uL21peGlucy9jYWxsYmFja3NcIjtcblxuaW1wb3J0IHsgbGFzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY2xhc3MgTWV0YXByb29mQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGRlcml2ZWQsIG1ldGFwcm9vZlN0ZXBzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmRlcml2ZWQgPSBkZXJpdmVkO1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMgPSBtZXRhcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGlzRGVyaXZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXJpdmVkO1xuICB9XG5cbiAgZ2V0TWV0YXByb29mU3RlcHMoKSB7XG4gICAgbGV0IG1ldGFwcm9vZlN0ZXBzID0gdGhpcy5jb250ZXh0LmdldE1ldGFwcm9vZlN0ZXBzKCk7XG5cbiAgICBtZXRhcHJvb2ZTdGVwcyA9IFsgIC8vL1xuICAgICAgLi4ubWV0YXByb29mU3RlcHMsXG4gICAgICAuLi50aGlzLm1ldGFwcm9vZlN0ZXBzXG4gICAgXTtcblxuICAgIHJldHVybiBtZXRhcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldExhc3RNZXRhcHJvb2ZTdGVwKCkge1xuICAgIGxldCBsYXN0TWV0YXByb29mU3RlcCA9IG51bGw7XG5cbiAgICBjb25zdCBtZXRhcHJvb2ZTdGVwc0xlbmd0aCA9IHRoaXMubWV0YXByb29mU3RlcHMubGVuZ3RoO1xuXG4gICAgaWYgKG1ldGFwcm9vZlN0ZXBzTGVuZ3RoID4gMCkge1xuICAgICAgbGFzdE1ldGFwcm9vZlN0ZXAgPSBsYXN0KHRoaXMubWV0YXByb29mU3RlcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0TWV0YXByb29mU3RlcDtcbiAgfVxuXG4gIHNldERlcml2ZWQoZGVyaXZlZCA9IHRydWUpIHtcbiAgICB0aGlzLmRlcml2ZWQgPSBkZXJpdmVkO1xuICB9XG5cbiAgcmVzZXREZXJpdmVkKCkge1xuICAgIHRoaXMuZGVyaXZlZCA9IGZhbHNlO1xuICB9XG5cbiAgYWRkTWV0YXByb29mU3RlcChtZXRhcHJvb2ZTdGVwKSB7XG4gICAgdGhpcy5tZXRhcHJvb2ZTdGVwcy5wdXNoKG1ldGFwcm9vZlN0ZXApO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnRNYXRjaGVzO1xuXG4gICAgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSB0aGlzLm1ldGFwcm9vZlN0ZXBzLnNvbWUoKG1ldGFwcm9vZlN0ZXApID0+IHtcbiAgICAgIG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gbWV0YXByb29mU3RlcC5tYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAobWV0YXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIW1ldGFzdGF0ZW1lbnRNYXRjaGVzKSB7XG4gICAgICBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IHRoaXMuY29udGV4dC5tYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50TWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBkZXJpdmVkID0gZmFsc2UsXG4gICAgICAgICAgbWV0YXByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBtZXRhcHJvb2ZDb250ZXh0ID0gbmV3IE1ldGFwcm9vZkNvbnRleHQoY29udGV4dCwgZGVyaXZlZCwgbWV0YXByb29mU3RlcHMpO1xuXG4gICAgcmV0dXJuIG1ldGFwcm9vZkNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFwcm9vZkNvbnRleHQobWV0YXByb29mQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBtZXRhcHJvb2ZDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZGVyaXZlZCA9IGZhbHNlLFxuICAgICAgICAgIG1ldGFwcm9vZlN0ZXBzID0gW107XG5cbiAgICBtZXRhcHJvb2ZDb250ZXh0ID0gbmV3IE1ldGFwcm9vZkNvbnRleHQoY29udGV4dCwgZGVyaXZlZCwgbWV0YXByb29mU3RlcHMpOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXByb29mQ29udGV4dDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKE1ldGFwcm9vZkNvbnRleHQucHJvdG90eXBlLCBmaWxlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oTWV0YXByb29mQ29udGV4dC5wcm90b3R5cGUsIGxvZ2dpbmdNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihNZXRhcHJvb2ZDb250ZXh0LnByb3RvdHlwZSwgY2FsbGJhY2tzTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0YXByb29mQ29udGV4dDsiXSwibmFtZXMiOlsiTWV0YXByb29mQ29udGV4dCIsImNvbnRleHQiLCJkZXJpdmVkIiwibWV0YXByb29mU3RlcHMiLCJnZXRDb250ZXh0IiwiaXNEZXJpdmVkIiwiZ2V0TWV0YXByb29mU3RlcHMiLCJnZXRMYXN0TWV0YXByb29mU3RlcCIsImxhc3RNZXRhcHJvb2ZTdGVwIiwibWV0YXByb29mU3RlcHNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0Iiwic2V0RGVyaXZlZCIsInJlc2V0RGVyaXZlZCIsImFkZE1ldGFwcm9vZlN0ZXAiLCJtZXRhcHJvb2ZTdGVwIiwicHVzaCIsIm1hdGNoTWV0YXN0YXRlbWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudE1hdGNoZXMiLCJzb21lIiwiZnJvbUZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJtZXRhcHJvb2ZDb250ZXh0IiwiZnJvbU1ldGFwcm9vZkNvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJmaWxlTWl4aW5zIiwibG9nZ2luZ01peGlucyIsImNhbGxiYWNrc01peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBb0dBOzs7ZUFBQTs7O3lEQWxHdUI7NERBQ0c7OERBQ0U7cUJBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEsaUNBd0ZILEFBeEZIO2FBQU1BLGlCQUNRQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsY0FBYzs4QkFEeENIO1FBRUYsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxjQUFjLEdBQUdBOztpQkFKcEJIOztZQU9KSSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYTtnQkFDWCxPQUFPLElBQUksQ0FBQ0gsT0FBTztZQUNyQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZO2dCQUNWLE9BQU8sSUFBSSxDQUFDSCxPQUFPO1lBQ3JCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQjtnQkFDbEIsSUFBSUgsaUJBQWlCLElBQUksQ0FBQ0YsT0FBTyxDQUFDSyxpQkFBaUI7Z0JBRW5ESCxpQkFBaUIsQUFDZixtQkFBR0EsdUJBQ0gsbUJBQUcsSUFBSSxDQUFDQSxjQUFjO2dCQUd4QixPQUFPQTtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QjtnQkFDckIsSUFBSUMsb0JBQW9CLElBQUk7Z0JBRTVCLElBQU1DLHVCQUF1QixJQUFJLENBQUNOLGNBQWMsQ0FBQ08sTUFBTTtnQkFFdkQsSUFBSUQsdUJBQXVCLEdBQUc7b0JBQzVCRCxvQkFBb0JHLElBQUFBLFdBQUksRUFBQyxJQUFJLENBQUNSLGNBQWM7Z0JBQzlDLENBQUM7Z0JBRUQsT0FBT0s7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxhQUEyQjtvQkFBaEJWLFVBQUFBLGlFQUFVLElBQUk7Z0JBQ3ZCLElBQUksQ0FBQ0EsT0FBTyxHQUFHQTtZQUNqQjs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlO2dCQUNiLElBQUksQ0FBQ1gsT0FBTyxHQUFHLEtBQUs7WUFDdEI7OztZQUVBWSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxhQUFhLEVBQUU7Z0JBQzlCLElBQUksQ0FBQ1osY0FBYyxDQUFDYSxJQUFJLENBQUNEO1lBQzNCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkMsaUJBQWlCLEVBQUU7Z0JBQ3BDLElBQUlDO2dCQUVKQSx1QkFBdUIsSUFBSSxDQUFDaEIsY0FBYyxDQUFDaUIsSUFBSSxDQUFDLFNBQUNMLGVBQWtCO29CQUNqRUksdUJBQXVCSixjQUFjRSxrQkFBa0IsQ0FBQ0M7b0JBRXhELElBQUlDLHNCQUFzQjt3QkFDeEIsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0g7Z0JBRUEsSUFBSSxDQUFDQSxzQkFBc0I7b0JBQ3pCQSx1QkFBdUIsSUFBSSxDQUFDbEIsT0FBTyxDQUFDZ0Isa0JBQWtCLENBQUNDO2dCQUN6RCxDQUFDO2dCQUVELE9BQU9DO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsZ0JBQWdCQyxXQUFXLEVBQUU7Z0JBQ2xDLElBQU1yQixVQUFVcUIsYUFDVnBCLFVBQVUsS0FBSyxFQUNmQyxpQkFBaUIsRUFBRSxFQUNuQm9CLG1CQUFtQixJQXhFdkJ2QixpQkF3RTRDQyxTQUFTQyxTQUFTQztnQkFFaEUsT0FBT29CO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxxQkFBcUJELGdCQUFnQixFQUFFO2dCQUM1QyxJQUFNdEIsVUFBVXNCLGtCQUNWckIsVUFBVSxLQUFLLEVBQ2ZDLGlCQUFpQixFQUFFO2dCQUV6Qm9CLG1CQUFtQixJQWxGakJ2QixpQkFrRnNDQyxTQUFTQyxTQUFTQyxpQkFBa0IsR0FBRztnQkFFL0UsT0FBT29CO1lBQ1Q7OztXQXJGSXZCOztBQXdGTnlCLE9BQU9DLE1BQU0sQ0FBQzFCLGlCQUFpQjJCLFNBQVMsRUFBRUMsYUFBVTtBQUNwREgsT0FBT0MsTUFBTSxDQUFDMUIsaUJBQWlCMkIsU0FBUyxFQUFFRSxnQkFBYTtBQUN2REosT0FBT0MsTUFBTSxDQUFDMUIsaUJBQWlCMkIsU0FBUyxFQUFFRyxrQkFBZTtJQUV6RCxXQUFlOUIifQ==