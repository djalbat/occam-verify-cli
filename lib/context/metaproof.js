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
    function MetaproofContext(context, metaproofSteps) {
        _classCallCheck(this, MetaproofContext);
        this.context = context;
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
        },
        {
            key: "nodeAsString",
            value: function nodeAsString(node) {
                return this.context.nodeAsString(node);
            }
        },
        {
            key: "nodesAsString",
            value: function nodesAsString(node) {
                return this.context.nodesAsString(node);
            }
        }
    ], [
        {
            key: "fromFileContext",
            value: function fromFileContext(fileContext) {
                var context = fileContext, metaproofSteps = [], metaproofContext = new MetaproofContext(context, metaproofSteps);
                return metaproofContext;
            }
        },
        {
            key: "fromMetaproofContext",
            value: function fromMetaproofContext(metaproofContext) {
                var context = metaproofContext, metaproofSteps = [];
                metaproofContext = new MetaproofContext(context, metaproofSteps); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L21ldGFwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZpbGVNaXhpbnMgZnJvbSBcIi4uL21peGlucy9maWxlXCI7XG5pbXBvcnQgbG9nZ2luZ01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2xvZ2dpbmdcIjtcbmltcG9ydCBjYWxsYmFja3NNaXhpbnMgZnJvbSBcIi4uL21peGlucy9jYWxsYmFja3NcIjtcblxuaW1wb3J0IHsgbGFzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY2xhc3MgTWV0YXByb29mQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG1ldGFwcm9vZlN0ZXBzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm1ldGFwcm9vZlN0ZXBzID0gbWV0YXByb29mU3RlcHM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRNZXRhcHJvb2ZTdGVwcygpIHtcbiAgICBsZXQgbWV0YXByb29mU3RlcHMgPSB0aGlzLmNvbnRleHQuZ2V0TWV0YXByb29mU3RlcHMoKTtcblxuICAgIG1ldGFwcm9vZlN0ZXBzID0gWyAgLy8vXG4gICAgICAuLi5tZXRhcHJvb2ZTdGVwcyxcbiAgICAgIC4uLnRoaXMubWV0YXByb29mU3RlcHNcbiAgICBdO1xuXG4gICAgcmV0dXJuIG1ldGFwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0TGFzdE1ldGFwcm9vZlN0ZXAoKSB7XG4gICAgbGV0IGxhc3RNZXRhcHJvb2ZTdGVwID0gbnVsbDtcblxuICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzTGVuZ3RoID0gdGhpcy5tZXRhcHJvb2ZTdGVwcy5sZW5ndGg7XG5cbiAgICBpZiAobWV0YXByb29mU3RlcHNMZW5ndGggPiAwKSB7XG4gICAgICBsYXN0TWV0YXByb29mU3RlcCA9IGxhc3QodGhpcy5tZXRhcHJvb2ZTdGVwcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RNZXRhcHJvb2ZTdGVwO1xuICB9XG5cbiAgYWRkTWV0YXByb29mU3RlcChtZXRhcHJvb2ZTdGVwKSB7XG4gICAgdGhpcy5tZXRhcHJvb2ZTdGVwcy5wdXNoKG1ldGFwcm9vZlN0ZXApO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnRNYXRjaGVzO1xuXG4gICAgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSB0aGlzLm1ldGFwcm9vZlN0ZXBzLnNvbWUoKG1ldGFwcm9vZlN0ZXApID0+IHtcbiAgICAgIG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gbWV0YXByb29mU3RlcC5tYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAobWV0YXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIW1ldGFzdGF0ZW1lbnRNYXRjaGVzKSB7XG4gICAgICBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IHRoaXMuY29udGV4dC5tYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50TWF0Y2hlcztcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpOyB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQubm9kZXNBc1N0cmluZyhub2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIG1ldGFwcm9vZkNvbnRleHQgPSBuZXcgTWV0YXByb29mQ29udGV4dChjb250ZXh0LCBtZXRhcHJvb2ZTdGVwcyk7XG5cbiAgICByZXR1cm4gbWV0YXByb29mQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXByb29mQ29udGV4dChtZXRhcHJvb2ZDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IG1ldGFwcm9vZkNvbnRleHQsICAvLy9cbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwcyA9IFtdO1xuXG4gICAgbWV0YXByb29mQ29udGV4dCA9IG5ldyBNZXRhcHJvb2ZDb250ZXh0KGNvbnRleHQsIG1ldGFwcm9vZlN0ZXBzKTsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGFwcm9vZkNvbnRleHQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihNZXRhcHJvb2ZDb250ZXh0LnByb3RvdHlwZSwgZmlsZU1peGlucyk7XG5PYmplY3QuYXNzaWduKE1ldGFwcm9vZkNvbnRleHQucHJvdG90eXBlLCBsb2dnaW5nTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oTWV0YXByb29mQ29udGV4dC5wcm90b3R5cGUsIGNhbGxiYWNrc01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IE1ldGFwcm9vZkNvbnRleHQ7Il0sIm5hbWVzIjpbIk1ldGFwcm9vZkNvbnRleHQiLCJjb250ZXh0IiwibWV0YXByb29mU3RlcHMiLCJnZXRDb250ZXh0IiwiZ2V0TWV0YXByb29mU3RlcHMiLCJnZXRMYXN0TWV0YXByb29mU3RlcCIsImxhc3RNZXRhcHJvb2ZTdGVwIiwibWV0YXByb29mU3RlcHNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0IiwiYWRkTWV0YXByb29mU3RlcCIsIm1ldGFwcm9vZlN0ZXAiLCJwdXNoIiwibWF0Y2hNZXRhc3RhdGVtZW50IiwibWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhc3RhdGVtZW50TWF0Y2hlcyIsInNvbWUiLCJub2RlQXNTdHJpbmciLCJub2RlIiwibm9kZXNBc1N0cmluZyIsImZyb21GaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwibWV0YXByb29mQ29udGV4dCIsImZyb21NZXRhcHJvb2ZDb250ZXh0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZmlsZU1peGlucyIsImxvZ2dpbmdNaXhpbnMiLCJjYWxsYmFja3NNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlGQTs7O2VBQUE7Ozt5REF2RnVCOzREQUNHOzhEQUNFO3FCQUVQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFBLEFBQU1BLGlDQTZFSCxBQTdFSDthQUFNQSxpQkFDUUMsT0FBTyxFQUFFQyxjQUFjOzhCQUQvQkY7UUFFRixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLGNBQWMsR0FBR0E7O2lCQUhwQkY7O1lBTUpHLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhO2dCQUNYLE9BQU8sSUFBSSxDQUFDRixPQUFPO1lBQ3JCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQjtnQkFDbEIsSUFBSUYsaUJBQWlCLElBQUksQ0FBQ0QsT0FBTyxDQUFDRyxpQkFBaUI7Z0JBRW5ERixpQkFBaUIsQUFDZixtQkFBR0EsdUJBQ0gsbUJBQUcsSUFBSSxDQUFDQSxjQUFjO2dCQUd4QixPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QjtnQkFDckIsSUFBSUMsb0JBQW9CLElBQUk7Z0JBRTVCLElBQU1DLHVCQUF1QixJQUFJLENBQUNMLGNBQWMsQ0FBQ00sTUFBTTtnQkFFdkQsSUFBSUQsdUJBQXVCLEdBQUc7b0JBQzVCRCxvQkFBb0JHLElBQUFBLFdBQUksRUFBQyxJQUFJLENBQUNQLGNBQWM7Z0JBQzlDLENBQUM7Z0JBRUQsT0FBT0k7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLGFBQWEsRUFBRTtnQkFDOUIsSUFBSSxDQUFDVCxjQUFjLENBQUNVLElBQUksQ0FBQ0Q7WUFDM0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxpQkFBaUIsRUFBRTtnQkFDcEMsSUFBSUM7Z0JBRUpBLHVCQUF1QixJQUFJLENBQUNiLGNBQWMsQ0FBQ2MsSUFBSSxDQUFDLFNBQUNMLGVBQWtCO29CQUNqRUksdUJBQXVCSixjQUFjRSxrQkFBa0IsQ0FBQ0M7b0JBRXhELElBQUlDLHNCQUFzQjt3QkFDeEIsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0g7Z0JBRUEsSUFBSSxDQUFDQSxzQkFBc0I7b0JBQ3pCQSx1QkFBdUIsSUFBSSxDQUFDZCxPQUFPLENBQUNZLGtCQUFrQixDQUFDQztnQkFDekQsQ0FBQztnQkFFRCxPQUFPQztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLElBQUksRUFBRTtnQkFBRSxPQUFPLElBQUksQ0FBQ2pCLE9BQU8sQ0FBQ2dCLFlBQVksQ0FBQ0M7WUFBTzs7O1lBRTdEQyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0QsSUFBSSxFQUFFO2dCQUFFLE9BQU8sSUFBSSxDQUFDakIsT0FBTyxDQUFDa0IsYUFBYSxDQUFDRDtZQUFPOzs7O1lBRXhERSxLQUFBQTttQkFBUCxTQUFPQSxnQkFBZ0JDLFdBQVcsRUFBRTtnQkFDbEMsSUFBTXBCLFVBQVVvQixhQUNWbkIsaUJBQWlCLEVBQUUsRUFDbkJvQixtQkFBbUIsSUE5RHZCdEIsaUJBOEQ0Q0MsU0FBU0M7Z0JBRXZELE9BQU9vQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EscUJBQXFCRCxnQkFBZ0IsRUFBRTtnQkFDNUMsSUFBTXJCLFVBQVVxQixrQkFDVnBCLGlCQUFpQixFQUFFO2dCQUV6Qm9CLG1CQUFtQixJQXZFakJ0QixpQkF1RXNDQyxTQUFTQyxpQkFBa0IsR0FBRztnQkFFdEUsT0FBT29CO1lBQ1Q7OztXQTFFSXRCOztBQTZFTndCLE9BQU9DLE1BQU0sQ0FBQ3pCLGlCQUFpQjBCLFNBQVMsRUFBRUMsYUFBVTtBQUNwREgsT0FBT0MsTUFBTSxDQUFDekIsaUJBQWlCMEIsU0FBUyxFQUFFRSxnQkFBYTtBQUN2REosT0FBT0MsTUFBTSxDQUFDekIsaUJBQWlCMEIsU0FBUyxFQUFFRyxrQkFBZTtJQUV6RCxXQUFlN0IifQ==