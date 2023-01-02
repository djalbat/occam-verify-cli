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
    function ProofContext(context, derived, variables, proofSteps) {
        _classCallCheck(this, ProofContext);
        this.context = context;
        this.derived = derived;
        this.variables = variables;
        this.proofSteps = proofSteps;
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
            key: "getProofSteps",
            value: function getProofSteps() {
                var proofSteps = this.context.getProofSteps();
                proofSteps = _toConsumableArray(proofSteps).concat(_toConsumableArray(this.proofSteps));
                return proofSteps;
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
            key: "getLastProofStep",
            value: function getLastProofStep() {
                var lastProofStep = (0, _array.last)(this.proofSteps);
                return lastProofStep;
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
            value: function addAssertion(proofStep) {
                this.proofSteps.push(proofStep);
            }
        },
        {
            key: "matchStatement",
            value: function matchStatement(statementNode) {
                var statementMatches;
                statementMatches = this.proofSteps.some(function(proofStep) {
                    statementMatches = proofStep.matchStatement(statementNode);
                    if (statementMatches) {
                        return true;
                    }
                });
                if (!statementMatches) {
                    statementMatches = this.context.matchStatement(statementNode);
                }
                return statementMatches;
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
                var context = fileContext, derived = false, variables = [], proofSteps = [], proofContext = new ProofContext(context, derived, variables, proofSteps);
                return proofContext;
            }
        },
        {
            key: "fromProofContext",
            value: function fromProofContext(proofContext) {
                var context = proofContext, derived = false, variables = [], proofSteps = [];
                proofContext = new ProofContext(context, derived, variables, proofSteps);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Byb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZmlsZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZpbGVcIjtcbmltcG9ydCBsb2dnaW5nTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvbG9nZ2luZ1wiO1xuaW1wb3J0IGNhbGxiYWNrc01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2NhbGxiYWNrc1wiO1xuXG5pbXBvcnQgeyBwdXNoLCBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBQcm9vZkNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBkZXJpdmVkLCB2YXJpYWJsZXMsIHByb29mU3RlcHMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuZGVyaXZlZCA9IGRlcml2ZWQ7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5wcm9vZlN0ZXBzID0gcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGlzRGVyaXZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZXJpdmVkO1xuICB9XG5cbiAgZ2V0UHJvb2ZTdGVwcygpIHtcbiAgICBsZXQgcHJvb2ZTdGVwcyA9IHRoaXMuY29udGV4dC5nZXRQcm9vZlN0ZXBzKCk7XG5cbiAgICBwcm9vZlN0ZXBzID0gW1xuICAgICAgLi4ucHJvb2ZTdGVwcyxcbiAgICAgIC4uLnRoaXMucHJvb2ZTdGVwc1xuICAgIF07XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldFR5cGVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFR5cGVzKCk7IH1cblxuICBnZXRBeGlvbXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXhpb21zKCk7IH1cblxuICBnZXRMZW1tYXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TGVtbWFzKCk7IH1cblxuICBnZXRUaGVvcmVtcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRUaGVvcmVtcygpOyB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTsgfVxuXG4gIGdldENvbnN0cnVjdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTsgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSBbXTtcblxuICAgIHB1c2godmFyaWFibGVzLCB0aGlzLnZhcmlhYmxlcyk7XG5cbiAgICBjb25zdCBjb250ZXh0VmFyaWFibGVzID0gdGhpcy5jb250ZXh0LmdldFZhcmlhYmxlcygpO1xuXG4gICAgcHVzaCh2YXJpYWJsZXMsIGNvbnRleHRWYXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldExhc3RQcm9vZlN0ZXAoKSB7XG4gICAgY29uc3QgbGFzdFByb29mU3RlcCA9IGxhc3QodGhpcy5wcm9vZlN0ZXBzKTtcblxuICAgIHJldHVybiBsYXN0UHJvb2ZTdGVwO1xuICB9XG5cbiAgc2V0RGVyaXZlZChkZXJpdmVkKSB7XG4gICAgdGhpcy5kZXJpdmVkID0gZGVyaXZlZDtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRBc3NlcnRpb24ocHJvb2ZTdGVwKSB7XG4gICAgdGhpcy5wcm9vZlN0ZXBzLnB1c2gocHJvb2ZTdGVwKTtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgc3RhdGVtZW50TWF0Y2hlcztcblxuICAgIHN0YXRlbWVudE1hdGNoZXMgPSB0aGlzLnByb29mU3RlcHMuc29tZSgocHJvb2ZTdGVwKSA9PiB7XG4gICAgICBzdGF0ZW1lbnRNYXRjaGVzID0gcHJvb2ZTdGVwLm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgc3RhdGVtZW50TWF0Y2hlcyA9IHRoaXMuY29udGV4dC5tYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpOyB9XG5cbiAgZmluZExhYmVsQnlUeXBlTmFtZShsYWJlbE5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTGFiZWxCeVR5cGVOYW1lKGxhYmVsTmFtZSk7IH1cblxuICBmaW5kUnVsZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSk7IH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKTsgfVxuXG4gIGZpbmRMZW1tYUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZExlbW1hQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpOyB9XG5cbiAgZmluZFRoZW9yZW1CeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRUaGVvcmVtQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpOyB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeUxhYmVsTmFtZShsYWJlbE5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TGFiZWxOYW1lKGxhYmVsTmFtZSk7IH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTsgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBkZXJpdmVkID0gZmFsc2UsXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIHByb29mQ29udGV4dCA9IG5ldyBQcm9vZkNvbnRleHQoY29udGV4dCwgZGVyaXZlZCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzKTtcblxuICAgIHJldHVybiBwcm9vZkNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb29mQ29udGV4dChwcm9vZkNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gcHJvb2ZDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZGVyaXZlZCA9IGZhbHNlLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBbXTtcblxuICAgIHByb29mQ29udGV4dCA9IG5ldyBQcm9vZkNvbnRleHQoY29udGV4dCwgZGVyaXZlZCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzKTtcblxuICAgIHJldHVybiBwcm9vZkNvbnRleHQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihQcm9vZkNvbnRleHQucHJvdG90eXBlLCBmaWxlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oUHJvb2ZDb250ZXh0LnByb3RvdHlwZSwgbG9nZ2luZ01peGlucyk7XG5PYmplY3QuYXNzaWduKFByb29mQ29udGV4dC5wcm90b3R5cGUsIGNhbGxiYWNrc01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb29mQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJQcm9vZkNvbnRleHQiLCJjb250ZXh0IiwiZGVyaXZlZCIsInZhcmlhYmxlcyIsInByb29mU3RlcHMiLCJnZXRDb250ZXh0IiwiaXNEZXJpdmVkIiwiZ2V0UHJvb2ZTdGVwcyIsImdldFR5cGVzIiwiZ2V0QXhpb21zIiwiZ2V0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJnZXRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImdldFZhcmlhYmxlcyIsInB1c2giLCJjb250ZXh0VmFyaWFibGVzIiwiZ2V0TGFzdFByb29mU3RlcCIsImxhc3RQcm9vZlN0ZXAiLCJsYXN0Iiwic2V0RGVyaXZlZCIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJhZGRBc3NlcnRpb24iLCJwcm9vZlN0ZXAiLCJtYXRjaFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRNYXRjaGVzIiwic29tZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwibmFtZSIsImZpbmQiLCJtYXRjaGVzIiwibWF0Y2hOYW1lIiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlUHJlc2VudCIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwiZmluZExhYmVsQnlUeXBlTmFtZSIsImxhYmVsTmFtZSIsImZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lIiwicmVmZXJlbmNlTmFtZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlTmFtZSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2VOYW1lIiwiaXNMYWJlbFByZXNlbnRCeUxhYmVsTmFtZSIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiZnJvbUZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJwcm9vZkNvbnRleHQiLCJmcm9tUHJvb2ZDb250ZXh0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZmlsZU1peGlucyIsImxvZ2dpbmdNaXhpbnMiLCJjYWxsYmFja3NNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThKQTs7O2VBQUE7Ozt5REE1SnVCOzREQUNHOzhEQUNFO3FCQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFBLEFBQU1BLDZCQWtKSCxBQWxKSDthQUFNQSxhQUNRQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxVQUFVOzhCQUQvQ0o7UUFFRixJQUFJLENBQUNDLE9BQU8sR0FBR0E7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