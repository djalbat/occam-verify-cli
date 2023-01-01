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
            key: "getLemmas",
            value: function getLemmas() {
                return this.context.getLemmas();
            }
        },
        {
            key: "getTheorems",
            value: function getTheorems() {
                return this.context.getTheorems();
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
            key: "getLastAssertion",
            value: function getLastAssertion() {
                var lastAssertion = (0, _array.last)(this.assertions);
                return lastAssertion;
            }
        },
        {
            key: "setDerived",
            value: function setDerived(derived) {
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
            key: "findLemmaByReferenceName",
            value: function findLemmaByReferenceName(referenceName) {
                return this.context.findLemmaByReferenceName(referenceName);
            }
        },
        {
            key: "findTheoremByReferenceName",
            value: function findTheoremByReferenceName(referenceName) {
                return this.context.findTheoremByReferenceName(referenceName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Byb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZmlsZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZpbGVcIjtcbmltcG9ydCBsb2dnaW5nTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbG9nZ2luZ1wiO1xuaW1wb3J0IGNhbGxiYWNrc01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2NhbGxiYWNrc1wiO1xuXG5pbXBvcnQgeyBwdXNoLCBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBQcm9vZkNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBkZXJpdmVkLCB2YXJpYWJsZXMsIGFzc2VydGlvbnMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuZGVyaXZlZCA9IGRlcml2ZWQ7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5hc3NlcnRpb25zID0gYXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGlzRGVyaXZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXJpdmVkO1xuICB9XG5cbiAgZ2V0QXNzZXJ0aW9ucygpIHtcbiAgICBsZXQgYXNzZXJ0aW9ucyA9IHRoaXMuY29udGV4dC5nZXRBc3NlcnRpb25zKCk7XG5cbiAgICBhc3NlcnRpb25zID0gW1xuICAgICAgLi4uYXNzZXJ0aW9ucyxcbiAgICAgIC4uLnRoaXMuYXNzZXJ0aW9uc1xuICAgIF07XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldFR5cGVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFR5cGVzKCk7IH1cblxuICBnZXRBeGlvbXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXhpb21zKCk7IH1cblxuICBnZXRMZW1tYXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TGVtbWFzKCk7IH1cblxuICBnZXRUaGVvcmVtcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRUaGVvcmVtcygpOyB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTsgfVxuXG4gIGdldENvbnN0cnVjdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTsgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSBbXTtcblxuICAgIHB1c2godmFyaWFibGVzLCB0aGlzLnZhcmlhYmxlcyk7XG5cbiAgICBjb25zdCBjb250ZXh0VmFyaWFibGVzID0gdGhpcy5jb250ZXh0LmdldFZhcmlhYmxlcygpO1xuXG4gICAgcHVzaCh2YXJpYWJsZXMsIGNvbnRleHRWYXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldExhc3RBc3NlcnRpb24oKSB7XG4gICAgY29uc3QgbGFzdEFzc2VydGlvbiA9IGxhc3QodGhpcy5hc3NlcnRpb25zKTtcblxuICAgIHJldHVybiBsYXN0QXNzZXJ0aW9uO1xuICB9XG5cbiAgc2V0RGVyaXZlZChkZXJpdmVkKSB7XG4gICAgdGhpcy5kZXJpdmVkID0gZGVyaXZlZDtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRBc3NlcnRpb24oYXNzZXJ0aW9uKSB7XG4gICAgdGhpcy5hc3NlcnRpb25zLnB1c2goYXNzZXJ0aW9uKTtcbiAgfVxuXG4gIG1hdGNoQXNzZXJ0aW9uKGFzc2VydGlvbikge1xuICAgIGxldCBhc3NlcnRpb25NYXRjaGVzO1xuXG4gICAgY29uc3QgYXNzZXJ0aW9uQiA9IGFzc2VydGlvbjsgLy8vXG5cbiAgICBhc3NlcnRpb25NYXRjaGVzID0gdGhpcy5hc3NlcnRpb25zLnNvbWUoKGFzc2VydGlvbikgPT4ge1xuICAgICAgY29uc3QgYXNzZXJ0aW9uQSA9IGFzc2VydGlvbiwgLy8vXG4gICAgICAgICAgICBtYXRjaGVzID0gYXNzZXJ0aW9uQS5tYXRjaChhc3NlcnRpb25CKTtcblxuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIWFzc2VydGlvbk1hdGNoZXMpIHtcbiAgICAgIGFzc2VydGlvbk1hdGNoZXMgPSB0aGlzLmNvbnRleHQubWF0Y2hBc3NlcnRpb24oYXNzZXJ0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uTWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpOyB9XG5cbiAgZmluZExhYmVsQnlUeXBlTmFtZShsYWJlbE5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTGFiZWxCeVR5cGVOYW1lKGxhYmVsTmFtZSk7IH1cblxuICBmaW5kUnVsZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSk7IH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKTsgfVxuXG4gIGZpbmRMZW1tYUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZExlbW1hQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpOyB9XG5cbiAgZmluZFRoZW9yZW1CeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRUaGVvcmVtQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpOyB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeUxhYmVsTmFtZShsYWJlbE5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TGFiZWxOYW1lKGxhYmVsTmFtZSk7IH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTsgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBkZXJpdmVkID0gZmFsc2UsXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIHByb29mQ29udGV4dCA9IG5ldyBQcm9vZkNvbnRleHQoY29udGV4dCwgZGVyaXZlZCwgdmFyaWFibGVzLCBhc3NlcnRpb25zKTtcblxuICAgIHJldHVybiBwcm9vZkNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb29mQ29udGV4dChwcm9vZkNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gcHJvb2ZDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZGVyaXZlZCA9IGZhbHNlLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGFzc2VydGlvbnMgPSBbXTtcblxuICAgIHByb29mQ29udGV4dCA9IG5ldyBQcm9vZkNvbnRleHQoY29udGV4dCwgZGVyaXZlZCwgdmFyaWFibGVzLCBhc3NlcnRpb25zKTtcblxuICAgIHJldHVybiBwcm9vZkNvbnRleHQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihQcm9vZkNvbnRleHQucHJvdG90eXBlLCBmaWxlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oUHJvb2ZDb250ZXh0LnByb3RvdHlwZSwgbG9nZ2luZ01peGlucyk7XG5PYmplY3QuYXNzaWduKFByb29mQ29udGV4dC5wcm90b3R5cGUsIGNhbGxiYWNrc01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb29mQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJQcm9vZkNvbnRleHQiLCJjb250ZXh0IiwiZGVyaXZlZCIsInZhcmlhYmxlcyIsImFzc2VydGlvbnMiLCJnZXRDb250ZXh0IiwiaXNEZXJpdmVkIiwiZ2V0QXNzZXJ0aW9ucyIsImdldFR5cGVzIiwiZ2V0QXhpb21zIiwiZ2V0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJnZXRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImdldFZhcmlhYmxlcyIsInB1c2giLCJjb250ZXh0VmFyaWFibGVzIiwiZ2V0TGFzdEFzc2VydGlvbiIsImxhc3RBc3NlcnRpb24iLCJsYXN0Iiwic2V0RGVyaXZlZCIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJhZGRBc3NlcnRpb24iLCJhc3NlcnRpb24iLCJtYXRjaEFzc2VydGlvbiIsImFzc2VydGlvbk1hdGNoZXMiLCJhc3NlcnRpb25CIiwic29tZSIsImFzc2VydGlvbkEiLCJtYXRjaGVzIiwibWF0Y2giLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsIm5hbWUiLCJmaW5kIiwibWF0Y2hOYW1lIiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlUHJlc2VudCIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwiZmluZExhYmVsQnlUeXBlTmFtZSIsImxhYmVsTmFtZSIsImZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lIiwicmVmZXJlbmNlTmFtZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlTmFtZSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2VOYW1lIiwiaXNMYWJlbFByZXNlbnRCeUxhYmVsTmFtZSIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiZnJvbUZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJwcm9vZkNvbnRleHQiLCJmcm9tUHJvb2ZDb250ZXh0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZmlsZU1peGlucyIsImxvZ2dpbmdNaXhpbnMiLCJjYWxsYmFja3NNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlLQTs7O2VBQUE7Ozt5REEvSnVCOzREQUNHOzhEQUNFO3FCQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFBLEFBQU1BLDZCQXFKSCxBQXJKSDthQUFNQSxhQUNRQyxPQUFP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