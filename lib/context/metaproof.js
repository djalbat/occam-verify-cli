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
var _logging = /*#__PURE__*/ _interopRequireDefault(require("../mixins/logging"));
var _metaproof = /*#__PURE__*/ _interopRequireDefault(require("../mixins/context/metaproof"));
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
            key: "getRules",
            value: function getRules() {
                return this.context.getRules();
            }
        },
        {
            key: "getTypes",
            value: function getTypes() {
                return this.context.getTypes();
            }
        },
        {
            key: "getAxioms",
            value: function getAxioms() {
                return this.context.getAxioms();
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators() {
                return this.context.getCombinators();
            }
        },
        {
            key: "getConstructors",
            value: function getConstructors() {
                return this.context.getConstructors();
            }
        },
        {
            key: "findTypeByTypeName",
            value: function findTypeByTypeName(typeName) {
                return this.context.findTypeByTypeName(typeName);
            }
        },
        {
            key: "findRuleByReferenceName",
            value: function findRuleByReferenceName(referenceName) {
                return this.context.findRuleByReferenceName(referenceName);
            }
        },
        {
            key: "findVariableByVariableName",
            value: function findVariableByVariableName(variableName) {
                return this.context.findVariableByVariableName(variableName);
            }
        },
        {
            key: "isLabelPresent",
            value: function isLabelPresent(label) {
                return this.context.isLabelPresent(label);
            }
        },
        {
            key: "isTypePresentByTypeName",
            value: function isTypePresentByTypeName(typeName) {
                return this.context.isTypePresentByTypeName(typeName);
            }
        },
        {
            key: "isVariablePresentByVariableName",
            value: function isVariablePresentByVariableName(variableName) {
                return this.context.isVariablePresentByVariableName(variableName);
            }
        },
        {
            key: "setDerived",
            value: function setDerived(derived) {
                this.derived = derived;
            }
        },
        {
            key: "addRule",
            value: function addRule(rule) {
                this.context.addRule(rule);
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
        },
        {
            key: "halt",
            value: function halt(node) {
                this.context.halt(node);
            }
        },
        {
            key: "begin",
            value: function begin(node) {
                this.context.begin(node);
            }
        },
        {
            key: "complete",
            value: function complete(node) {
                this.context.complete(node);
            }
        }
    ], [
        {
            key: "fromContext",
            value: function fromContext(context) {
                var derived = false, metaAssertions = [], metaproofContext = new MetaproofContext(context, derived, metaAssertions);
                return metaproofContext;
            }
        }
    ]);
    return MetaproofContext;
}();
Object.assign(MetaproofContext.prototype, _logging.default);
Object.assign(MetaproofContext.prototype, _metaproof.default);
var _default = MetaproofContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L21ldGFwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGxvZ2dpbmdNaXhpbnMgZnJvbSBcIi4uL21peGlucy9sb2dnaW5nXCI7XG5pbXBvcnQgbWV0YXByb29mQ29udGV4dE1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2NvbnRleHQvbWV0YXByb29mXCI7XG5cbmNsYXNzIE1ldGFwcm9vZkNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBkZXJpdmVkLCBtZXRhQXNzZXJ0aW9ucykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5kZXJpdmVkID0gZGVyaXZlZDtcbiAgICB0aGlzLm1ldGFBc3NlcnRpb25zID0gbWV0YUFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBpc0Rlcml2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVyaXZlZDtcbiAgfVxuXG4gIGdldE1ldGFBc3NlcnRpb25zKCkge1xuICAgIGxldCBtZXRhQXNzZXJ0aW9ucyA9IHRoaXMuY29udGV4dC5nZXRNZXRhQXNzZXJ0aW9ucygpO1xuXG4gICAgbWV0YUFzc2VydGlvbnMgPSBbXG4gICAgICAuLi5tZXRhQXNzZXJ0aW9ucyxcbiAgICAgIC4uLnRoaXMubWV0YUFzc2VydGlvbnNcbiAgICBdO1xuXG4gICAgcmV0dXJuIG1ldGFBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0UnVsZXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0UnVsZXMoKTsgfVxuXG4gIGdldFR5cGVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFR5cGVzKCk7IH1cblxuICBnZXRBeGlvbXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXhpb21zKCk7IH1cblxuICBnZXRDb21iaW5hdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb21iaW5hdG9ycygpOyB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbnN0cnVjdG9ycygpOyB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTsgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKTsgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7IH1cblxuICBpc0xhYmVsUHJlc2VudChsYWJlbCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50KGxhYmVsKTsgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpOyB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7IH1cblxuICBzZXREZXJpdmVkKGRlcml2ZWQpIHtcbiAgICB0aGlzLmRlcml2ZWQgPSBkZXJpdmVkO1xuICB9XG5cbiAgYWRkUnVsZShydWxlKSB7IHRoaXMuY29udGV4dC5hZGRSdWxlKHJ1bGUpOyB9XG5cbiAgYWRkTWV0YUFzc2VydGlvbihtZXRhQXNzZXJ0aW9uKSB7XG4gICAgdGhpcy5tZXRhQXNzZXJ0aW9ucy5wdXNoKG1ldGFBc3NlcnRpb24pO1xuICB9XG5cbiAgbWF0Y2hNZXRhQXNzZXJ0aW9uKG1ldGFBc3NlcnRpb24pIHtcbiAgICBsZXQgbWV0YUFzc2VydGlvbk1hdGNoZXM7XG5cbiAgICBjb25zdCBtZXRhQXNzZXJ0aW9uQiA9IG1ldGFBc3NlcnRpb247IC8vL1xuXG4gICAgbWV0YUFzc2VydGlvbk1hdGNoZXMgPSB0aGlzLm1ldGFBc3NlcnRpb25zLnNvbWUoKG1ldGFBc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IG1ldGFBc3NlcnRpb25BID0gbWV0YUFzc2VydGlvbiwgLy8vXG4gICAgICAgICAgICBtYXRjaGVzID0gbWV0YUFzc2VydGlvbkEubWF0Y2gobWV0YUFzc2VydGlvbkIpO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghbWV0YUFzc2VydGlvbk1hdGNoZXMpIHtcbiAgICAgIG1ldGFBc3NlcnRpb25NYXRjaGVzID0gdGhpcy5jb250ZXh0Lm1hdGNoTWV0YUFzc2VydGlvbihtZXRhQXNzZXJ0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUFzc2VydGlvbk1hdGNoZXM7XG4gIH1cblxuICBoYWx0KG5vZGUpIHsgdGhpcy5jb250ZXh0LmhhbHQobm9kZSk7IH1cblxuICBiZWdpbihub2RlKSB7IHRoaXMuY29udGV4dC5iZWdpbihub2RlKTsgfVxuXG4gIGNvbXBsZXRlKG5vZGUpIHsgdGhpcy5jb250ZXh0LmNvbXBsZXRlKG5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBkZXJpdmVkID0gZmFsc2UsXG4gICAgICAgICAgbWV0YUFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICBtZXRhcHJvb2ZDb250ZXh0ID0gbmV3IE1ldGFwcm9vZkNvbnRleHQoY29udGV4dCwgZGVyaXZlZCwgbWV0YUFzc2VydGlvbnMpO1xuXG4gICAgcmV0dXJuIG1ldGFwcm9vZkNvbnRleHQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihNZXRhcHJvb2ZDb250ZXh0LnByb3RvdHlwZSwgbG9nZ2luZ01peGlucyk7XG5PYmplY3QuYXNzaWduKE1ldGFwcm9vZkNvbnRleHQucHJvdG90eXBlLCBtZXRhcHJvb2ZDb250ZXh0TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0YXByb29mQ29udGV4dDsiXSwibmFtZXMiOlsiTWV0YXByb29mQ29udGV4dCIsImNvbnRleHQiLCJkZXJpdmVkIiwibWV0YUFzc2VydGlvbnMiLCJnZXRDb250ZXh0IiwiaXNEZXJpdmVkIiwiZ2V0TWV0YUFzc2VydGlvbnMiLCJnZXRSdWxlcyIsImdldFR5cGVzIiwiZ2V0QXhpb21zIiwiZ2V0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsImZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lIiwicmVmZXJlbmNlTmFtZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwiaXNMYWJlbFByZXNlbnQiLCJsYWJlbCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsInNldERlcml2ZWQiLCJhZGRSdWxlIiwicnVsZSIsImFkZE1ldGFBc3NlcnRpb24iLCJtZXRhQXNzZXJ0aW9uIiwicHVzaCIsIm1hdGNoTWV0YUFzc2VydGlvbiIsIm1ldGFBc3NlcnRpb25NYXRjaGVzIiwibWV0YUFzc2VydGlvbkIiLCJzb21lIiwibWV0YUFzc2VydGlvbkEiLCJtYXRjaGVzIiwibWF0Y2giLCJoYWx0Iiwibm9kZSIsImJlZ2luIiwiY29tcGxldGUiLCJmcm9tQ29udGV4dCIsIm1ldGFwcm9vZkNvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJsb2dnaW5nTWl4aW5zIiwibWV0YXByb29mQ29udGV4dE1peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0dBOzs7ZUFBQTs7OzREQXBHMEI7OERBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQUEsQUFBTUEsaUNBOEZILEFBOUZIO2FBQU1BLGlCQUNRQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsY0FBYzs4QkFEeENIO1FBRUYsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxjQUFjLEdBQUdBOztpQkFKcEJIOztZQU9KSSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYTtnQkFDWCxPQUFPLElBQUksQ0FBQ0gsT0FBTztZQUNyQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZO2dCQUNWLE9BQU8sSUFBSSxDQUFDSCxPQUFPO1lBQ3JCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQjtnQkFDbEIsSUFBSUgsaUJBQWlCLElBQUksQ0FBQ0YsT0FBTyxDQUFDSyxpQkFBaUI7Z0JBRW5ESCxpQkFBaUIsQUFDZixtQkFBR0EsdUJBQ0gsbUJBQUcsSUFBSSxDQUFDQSxjQUFjO2dCQUd4QixPQUFPQTtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQUUsT0FBTyxJQUFJLENBQUNOLE9BQU8sQ0FBQ00sUUFBUTtZQUFJOzs7WUFFN0NDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUFFLE9BQU8sSUFBSSxDQUFDUCxPQUFPLENBQUNPLFFBQVE7WUFBSTs7O1lBRTdDQyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTtnQkFBRSxPQUFPLElBQUksQ0FBQ1IsT0FBTyxDQUFDUSxTQUFTO1lBQUk7OztZQUUvQ0MsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQjtnQkFBRSxPQUFPLElBQUksQ0FBQ1QsT0FBTyxDQUFDUyxjQUFjO1lBQUk7OztZQUV6REMsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFBRSxPQUFPLElBQUksQ0FBQ1YsT0FBTyxDQUFDVSxlQUFlO1lBQUk7OztZQUUzREMsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkMsUUFBUSxFQUFFO2dCQUFFLE9BQU8sSUFBSSxDQUFDWixPQUFPLENBQUNXLGtCQUFrQixDQUFDQztZQUFXOzs7WUFFakZDLEtBQUFBO21CQUFBQSxTQUFBQSx3QkFBd0JDLGFBQWEsRUFBRTtnQkFBRSxPQUFPLElBQUksQ0FBQ2QsT0FBTyxDQUFDYSx1QkFBdUIsQ0FBQ0M7WUFBZ0I7OztZQUVyR0MsS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQkMsWUFBWSxFQUFFO2dCQUFFLE9BQU8sSUFBSSxDQUFDaEIsT0FBTyxDQUFDZSwwQkFBMEIsQ0FBQ0M7WUFBZTs7O1lBRXpHQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsS0FBSyxFQUFFO2dCQUFFLE9BQU8sSUFBSSxDQUFDbEIsT0FBTyxDQUFDaUIsY0FBYyxDQUFDQztZQUFROzs7WUFFbkVDLEtBQUFBO21CQUFBQSxTQUFBQSx3QkFBd0JQLFFBQVEsRUFBRTtnQkFBRSxPQUFPLElBQUksQ0FBQ1osT0FBTyxDQUFDbUIsdUJBQXVCLENBQUNQO1lBQVc7OztZQUUzRlEsS0FBQUE7bUJBQUFBLFNBQUFBLGdDQUFnQ0osWUFBWSxFQUFFO2dCQUFFLE9BQU8sSUFBSSxDQUFDaEIsT0FBTyxDQUFDb0IsK0JBQStCLENBQUNKO1lBQWU7OztZQUVuSEssS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdwQixPQUFPLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQ0EsT0FBTyxHQUFHQTtZQUNqQjs7O1lBRUFxQixLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsSUFBSSxFQUFFO2dCQUFFLElBQUksQ0FBQ3ZCLE9BQU8sQ0FBQ3NCLE9BQU8sQ0FBQ0M7WUFBTzs7O1lBRTVDQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxhQUFhLEVBQUU7Z0JBQzlCLElBQUksQ0FBQ3ZCLGNBQWMsQ0FBQ3dCLElBQUksQ0FBQ0Q7WUFDM0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CRixhQUFhLEVBQUU7Z0JBQ2hDLElBQUlHO2dCQUVKLElBQU1DLGlCQUFpQkosZUFBZSxHQUFHO2dCQUV6Q0csdUJBQXVCLElBQUksQ0FBQzFCLGNBQWMsQ0FBQzRCLElBQUksQ0FBQyxTQUFDTCxlQUFrQjtvQkFDakUsSUFBTU0saUJBQWlCTixlQUNqQk8sVUFBVUQsZUFBZUUsS0FBSyxDQUFDSjtvQkFFckMsSUFBSUcsU0FBUzt3QkFDWCxPQUFPLElBQUk7b0JBQ2IsQ0FBQztnQkFDSDtnQkFFQSxJQUFJLENBQUNKLHNCQUFzQjtvQkFDekJBLHVCQUF1QixJQUFJLENBQUM1QixPQUFPLENBQUMyQixrQkFBa0IsQ0FBQ0Y7Z0JBQ3pELENBQUM7Z0JBRUQsT0FBT0c7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxLQUFLQyxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDbkMsT0FBTyxDQUFDa0MsSUFBSSxDQUFDQztZQUFPOzs7WUFFdENDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNRCxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDbkMsT0FBTyxDQUFDb0MsS0FBSyxDQUFDRDtZQUFPOzs7WUFFeENFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTRixJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDbkMsT0FBTyxDQUFDcUMsUUFBUSxDQUFDRjtZQUFPOzs7O1lBRXZDRyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZdEMsT0FBTyxFQUFFO2dCQUMxQixJQUFNQyxVQUFVLEtBQUssRUFDZkMsaUJBQWlCLEVBQUUsRUFDbkJxQyxtQkFBbUIsSUF4RnZCeEMsaUJBd0Y0Q0MsU0FBU0MsU0FBU0M7Z0JBRWhFLE9BQU9xQztZQUNUOzs7V0EzRkl4Qzs7QUE4Rk55QyxPQUFPQyxNQUFNLENBQUMxQyxpQkFBaUIyQyxTQUFTLEVBQUVDLGdCQUFhO0FBQ3ZESCxPQUFPQyxNQUFNLENBQUMxQyxpQkFBaUIyQyxTQUFTLEVBQUVFLGtCQUFzQjtJQUVoRSxXQUFlN0MifQ==