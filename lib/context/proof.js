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
var ProofContext = /*#__PURE__*/ function() {
    function ProofContext(context, derived, variables, assertions) {
        _classCallCheck(this, ProofContext);
        this.context = context;
        this.derived = derived;
        this.variables = variables;
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
            key: "getVariables",
            value: function getVariables() {
                var variables = [];
                (0, _array.push)(variables, this.variables);
                var contextVariables = this.context.getVariables();
                (0, _array.push)(variables, contextVariables);
                return variables;
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
            key: "addVariable",
            value: function addVariable(variable) {
                this.variables.push(variable);
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
        },
        {
            key: "findVariableByVariableName",
            value: function findVariableByVariableName(variableName) {
                var name = variableName, variables = this.getVariables(), variable = variables.find(function(variable) {
                    var matches = variable.matchName(name);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return variable;
            }
        },
        {
            key: "isVariablePresentByVariableName",
            value: function isVariablePresentByVariableName(variableName) {
                var variable = this.findVariableByVariableName(variableName), variablePresent = variable !== null;
                return variablePresent;
            }
        },
        {
            key: "findTypeByTypeName",
            value: function findTypeByTypeName(typeName) {
                return this.context.findTypeByTypeName(typeName);
            }
        },
        {
            key: "findLabelByTypeName",
            value: function findLabelByTypeName(labelName) {
                return this.context.findLabelByTypeName(labelName);
            }
        },
        {
            key: "findRuleByReferenceName",
            value: function findRuleByReferenceName(referenceName) {
                return this.context.findRuleByReferenceName(referenceName);
            }
        },
        {
            key: "findAxiomByReferenceName",
            value: function findAxiomByReferenceName(referenceName) {
                return this.context.findAxiomByReferenceName(referenceName);
            }
        },
        {
            key: "isLabelPresentByLabelName",
            value: function isLabelPresentByLabelName(labelName) {
                return this.context.isLabelPresentByLabelName(labelName);
            }
        },
        {
            key: "isTypePresentByTypeName",
            value: function isTypePresentByTypeName(typeName) {
                return this.context.isTypePresentByTypeName(typeName);
            }
        }
    ], [
        {
            key: "fromFileContext",
            value: function fromFileContext(fileContext) {
                var context = fileContext, derived = false, variables = [], assertions = [], proofContext = new ProofContext(context, derived, variables, assertions);
                return proofContext;
            }
        },
        {
            key: "fromProofContext",
            value: function fromProofContext(proofContext) {
                var context = proofContext, derived = false, variables = [], assertions = [];
                proofContext = new ProofContext(context, derived, variables, assertions);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Byb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZmlsZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZpbGVcIjtcbmltcG9ydCBsb2dnaW5nTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbG9nZ2luZ1wiO1xuaW1wb3J0IGNhbGxiYWNrc01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2NhbGxiYWNrc1wiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBQcm9vZkNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBkZXJpdmVkLCB2YXJpYWJsZXMsIGFzc2VydGlvbnMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuZGVyaXZlZCA9IGRlcml2ZWQ7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5hc3NlcnRpb25zID0gYXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGlzRGVyaXZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXJpdmVkO1xuICB9XG5cbiAgZ2V0QXNzZXJ0aW9ucygpIHtcbiAgICBsZXQgYXNzZXJ0aW9ucyA9IHRoaXMuY29udGV4dC5nZXRBc3NlcnRpb25zKCk7XG5cbiAgICBhc3NlcnRpb25zID0gW1xuICAgICAgLi4uYXNzZXJ0aW9ucyxcbiAgICAgIC4uLnRoaXMuYXNzZXJ0aW9uc1xuICAgIF07XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldFR5cGVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFR5cGVzKCk7IH1cblxuICBnZXRBeGlvbXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXhpb21zKCk7IH1cblxuICBnZXRDb21iaW5hdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb21iaW5hdG9ycygpOyB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbnN0cnVjdG9ycygpOyB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdO1xuXG4gICAgcHVzaCh2YXJpYWJsZXMsIHRoaXMudmFyaWFibGVzKTtcblxuICAgIGNvbnN0IGNvbnRleHRWYXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICBwdXNoKHZhcmlhYmxlcywgY29udGV4dFZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgc2V0RGVyaXZlZChkZXJpdmVkKSB7XG4gICAgaWYgKGRlcml2ZWQpIHtcbiAgICAgIHRoaXMuc3RhdGVtZW50Tm9kZXMucG9wKCk7XG4gICAgfVxuXG4gICAgdGhpcy5kZXJpdmVkID0gZGVyaXZlZDtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRBc3NlcnRpb24oYXNzZXJ0aW9uKSB7XG4gICAgdGhpcy5hc3NlcnRpb25zLnB1c2goYXNzZXJ0aW9uKTtcbiAgfVxuXG4gIG1hdGNoQXNzZXJ0aW9uKGFzc2VydGlvbikge1xuICAgIGxldCBhc3NlcnRpb25NYXRjaGVzO1xuXG4gICAgY29uc3QgYXNzZXJ0aW9uQiA9IGFzc2VydGlvbjsgLy8vXG5cbiAgICBhc3NlcnRpb25NYXRjaGVzID0gdGhpcy5hc3NlcnRpb25zLnNvbWUoKGFzc2VydGlvbikgPT4ge1xuICAgICAgY29uc3QgYXNzZXJ0aW9uQSA9IGFzc2VydGlvbiwgLy8vXG4gICAgICAgICAgICBtYXRjaGVzID0gYXNzZXJ0aW9uQS5tYXRjaChhc3NlcnRpb25CKTtcblxuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIWFzc2VydGlvbk1hdGNoZXMpIHtcbiAgICAgIGFzc2VydGlvbk1hdGNoZXMgPSB0aGlzLmNvbnRleHQubWF0Y2hBc3NlcnRpb24oYXNzZXJ0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uTWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpOyB9XG5cbiAgZmluZExhYmVsQnlUeXBlTmFtZShsYWJlbE5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTGFiZWxCeVR5cGVOYW1lKGxhYmVsTmFtZSk7IH1cblxuICBmaW5kUnVsZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSk7IH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKTsgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlMYWJlbE5hbWUobGFiZWxOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnRCeUxhYmVsTmFtZShsYWJlbE5hbWUpOyB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7IH1cblxuICBzdGF0aWMgZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZGVyaXZlZCA9IGZhbHNlLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICBwcm9vZkNvbnRleHQgPSBuZXcgUHJvb2ZDb250ZXh0KGNvbnRleHQsIGRlcml2ZWQsIHZhcmlhYmxlcywgYXNzZXJ0aW9ucyk7XG5cbiAgICByZXR1cm4gcHJvb2ZDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9vZkNvbnRleHQocHJvb2ZDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHByb29mQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGRlcml2ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBhc3NlcnRpb25zID0gW107XG5cbiAgICBwcm9vZkNvbnRleHQgPSBuZXcgUHJvb2ZDb250ZXh0KGNvbnRleHQsIGRlcml2ZWQsIHZhcmlhYmxlcywgYXNzZXJ0aW9ucyk7XG5cbiAgICByZXR1cm4gcHJvb2ZDb250ZXh0O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUHJvb2ZDb250ZXh0LnByb3RvdHlwZSwgZmlsZU1peGlucyk7XG5PYmplY3QuYXNzaWduKFByb29mQ29udGV4dC5wcm90b3R5cGUsIGxvZ2dpbmdNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihQcm9vZkNvbnRleHQucHJvdG90eXBlLCBjYWxsYmFja3NNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9vZkNvbnRleHQ7XG4iXSwibmFtZXMiOlsiUHJvb2ZDb250ZXh0IiwiY29udGV4dCIsImRlcml2ZWQiLCJ2YXJpYWJsZXMiLCJhc3NlcnRpb25zIiwiZ2V0Q29udGV4dCIsImlzRGVyaXZlZCIsImdldEFzc2VydGlvbnMiLCJnZXRUeXBlcyIsImdldEF4aW9tcyIsImdldENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiZ2V0VmFyaWFibGVzIiwicHVzaCIsImNvbnRleHRWYXJpYWJsZXMiLCJzZXREZXJpdmVkIiwic3RhdGVtZW50Tm9kZXMiLCJwb3AiLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlIiwiYWRkQXNzZXJ0aW9uIiwiYXNzZXJ0aW9uIiwibWF0Y2hBc3NlcnRpb24iLCJhc3NlcnRpb25NYXRjaGVzIiwiYXNzZXJ0aW9uQiIsInNvbWUiLCJhc3NlcnRpb25BIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJuYW1lIiwiZmluZCIsIm1hdGNoTmFtZSIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZVByZXNlbnQiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsImZpbmRMYWJlbEJ5VHlwZU5hbWUiLCJsYWJlbE5hbWUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlTmFtZSIsInJlZmVyZW5jZU5hbWUiLCJmaW5kQXhpb21CeVJlZmVyZW5jZU5hbWUiLCJpc0xhYmVsUHJlc2VudEJ5TGFiZWxOYW1lIiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJmcm9tRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsInByb29mQ29udGV4dCIsImZyb21Qcm9vZkNvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJmaWxlTWl4aW5zIiwibG9nZ2luZ01peGlucyIsImNhbGxiYWNrc01peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdUpBOzs7ZUFBQTs7O3lEQXJKdUI7NERBQ0c7OERBQ0U7cUJBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEsNkJBMklILEFBM0lIO2FBQU1BLGFBQ1FDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFVBQVU7OEJBRC9DSjtRQUVGLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2lCQUxoQko7O1lBUUpLLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhO2dCQUNYLE9BQU8sSUFBSSxDQUFDSixPQUFPO1lBQ3JCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVk7Z0JBQ1YsT0FBTyxJQUFJLENBQUNKLE9BQU87WUFDckI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLElBQUlILGFBQWEsSUFBSSxDQUFDSCxPQUFPLENBQUNNLGFBQWE7Z0JBRTNDSCxhQUFhLEFBQ1gsbUJBQUdBLG1CQUNILG1CQUFHLElBQUksQ0FBQ0EsVUFBVTtnQkFHcEIsT0FBT0E7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUFFLE9BQU8sSUFBSSxDQUFD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