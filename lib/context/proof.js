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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Byb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZmlsZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZpbGVcIjtcbmltcG9ydCBsb2dnaW5nTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbG9nZ2luZ1wiO1xuaW1wb3J0IGNhbGxiYWNrc01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2NhbGxiYWNrc1wiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBQcm9vZkNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBkZXJpdmVkLCB2YXJpYWJsZXMsIGFzc2VydGlvbnMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuZGVyaXZlZCA9IGRlcml2ZWQ7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5hc3NlcnRpb25zID0gYXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGlzRGVyaXZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXJpdmVkO1xuICB9XG5cbiAgZ2V0QXNzZXJ0aW9ucygpIHtcbiAgICBsZXQgYXNzZXJ0aW9ucyA9IHRoaXMuY29udGV4dC5nZXRBc3NlcnRpb25zKCk7XG5cbiAgICBhc3NlcnRpb25zID0gW1xuICAgICAgLi4uYXNzZXJ0aW9ucyxcbiAgICAgIC4uLnRoaXMuYXNzZXJ0aW9uc1xuICAgIF07XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldFR5cGVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFR5cGVzKCk7IH1cblxuICBnZXRBeGlvbXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXhpb21zKCk7IH1cblxuICBnZXRMZW1tYXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TGVtbWFzKCk7IH1cblxuICBnZXRUaGVvcmVtcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRUaGVvcmVtcygpOyB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTsgfVxuXG4gIGdldENvbnN0cnVjdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTsgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSBbXTtcblxuICAgIHB1c2godmFyaWFibGVzLCB0aGlzLnZhcmlhYmxlcyk7XG5cbiAgICBjb25zdCBjb250ZXh0VmFyaWFibGVzID0gdGhpcy5jb250ZXh0LmdldFZhcmlhYmxlcygpO1xuXG4gICAgcHVzaCh2YXJpYWJsZXMsIGNvbnRleHRWYXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIHNldERlcml2ZWQoZGVyaXZlZCkge1xuICAgIHRoaXMuZGVyaXZlZCA9IGRlcml2ZWQ7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgYWRkQXNzZXJ0aW9uKGFzc2VydGlvbikge1xuICAgIHRoaXMuYXNzZXJ0aW9ucy5wdXNoKGFzc2VydGlvbik7XG4gIH1cblxuICBtYXRjaEFzc2VydGlvbihhc3NlcnRpb24pIHtcbiAgICBsZXQgYXNzZXJ0aW9uTWF0Y2hlcztcblxuICAgIGNvbnN0IGFzc2VydGlvbkIgPSBhc3NlcnRpb247IC8vL1xuXG4gICAgYXNzZXJ0aW9uTWF0Y2hlcyA9IHRoaXMuYXNzZXJ0aW9ucy5zb21lKChhc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbkEgPSBhc3NlcnRpb24sIC8vL1xuICAgICAgICAgICAgbWF0Y2hlcyA9IGFzc2VydGlvbkEubWF0Y2goYXNzZXJ0aW9uQik7XG5cbiAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKCFhc3NlcnRpb25NYXRjaGVzKSB7XG4gICAgICBhc3NlcnRpb25NYXRjaGVzID0gdGhpcy5jb250ZXh0Lm1hdGNoQXNzZXJ0aW9uKGFzc2VydGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc2VydGlvbk1hdGNoZXM7XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTsgfVxuXG4gIGZpbmRMYWJlbEJ5VHlwZU5hbWUobGFiZWxOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZExhYmVsQnlUeXBlTmFtZShsYWJlbE5hbWUpOyB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpOyB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSk7IH1cblxuICBmaW5kTGVtbWFCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRMZW1tYUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKTsgfVxuXG4gIGZpbmRUaGVvcmVtQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVGhlb3JlbUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKTsgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlMYWJlbE5hbWUobGFiZWxOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnRCeUxhYmVsTmFtZShsYWJlbE5hbWUpOyB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7IH1cblxuICBzdGF0aWMgZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZGVyaXZlZCA9IGZhbHNlLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICBwcm9vZkNvbnRleHQgPSBuZXcgUHJvb2ZDb250ZXh0KGNvbnRleHQsIGRlcml2ZWQsIHZhcmlhYmxlcywgYXNzZXJ0aW9ucyk7XG5cbiAgICByZXR1cm4gcHJvb2ZDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9vZkNvbnRleHQocHJvb2ZDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHByb29mQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGRlcml2ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBhc3NlcnRpb25zID0gW107XG5cbiAgICBwcm9vZkNvbnRleHQgPSBuZXcgUHJvb2ZDb250ZXh0KGNvbnRleHQsIGRlcml2ZWQsIHZhcmlhYmxlcywgYXNzZXJ0aW9ucyk7XG5cbiAgICByZXR1cm4gcHJvb2ZDb250ZXh0O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUHJvb2ZDb250ZXh0LnByb3RvdHlwZSwgZmlsZU1peGlucyk7XG5PYmplY3QuYXNzaWduKFByb29mQ29udGV4dC5wcm90b3R5cGUsIGxvZ2dpbmdNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihQcm9vZkNvbnRleHQucHJvdG90eXBlLCBjYWxsYmFja3NNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9vZkNvbnRleHQ7XG4iXSwibmFtZXMiOlsiUHJvb2ZDb250ZXh0IiwiY29udGV4dCIsImRlcml2ZWQiLCJ2YXJpYWJsZXMiLCJhc3NlcnRpb25zIiwiZ2V0Q29udGV4dCIsImlzRGVyaXZlZCIsImdldEFzc2VydGlvbnMiLCJnZXRUeXBlcyIsImdldEF4aW9tcyIsImdldExlbW1hcyIsImdldFRoZW9yZW1zIiwiZ2V0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJnZXRWYXJpYWJsZXMiLCJwdXNoIiwiY29udGV4dFZhcmlhYmxlcyIsInNldERlcml2ZWQiLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlIiwiYWRkQXNzZXJ0aW9uIiwiYXNzZXJ0aW9uIiwibWF0Y2hBc3NlcnRpb24iLCJhc3NlcnRpb25NYXRjaGVzIiwiYXNzZXJ0aW9uQiIsInNvbWUiLCJhc3NlcnRpb25BIiwibWF0Y2hlcyIsIm1hdGNoIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJuYW1lIiwiZmluZCIsIm1hdGNoTmFtZSIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZVByZXNlbnQiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsImZpbmRMYWJlbEJ5VHlwZU5hbWUiLCJsYWJlbE5hbWUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlTmFtZSIsInJlZmVyZW5jZU5hbWUiLCJmaW5kQXhpb21CeVJlZmVyZW5jZU5hbWUiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZU5hbWUiLCJmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlTmFtZSIsImlzTGFiZWxQcmVzZW50QnlMYWJlbE5hbWUiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImZyb21GaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwicHJvb2ZDb250ZXh0IiwiZnJvbVByb29mQ29udGV4dCIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImZpbGVNaXhpbnMiLCJsb2dnaW5nTWl4aW5zIiwiY2FsbGJhY2tzTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEySkE7OztlQUFBOzs7eURBekp1Qjs0REFDRzs4REFDRTtxQkFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBQSxBQUFNQSw2QkErSUgsQUEvSUg7YUFBTUEsYUFDUUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsVUFBVTs4QkFEL0NKO1FBRUYsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7aUJBTGhC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