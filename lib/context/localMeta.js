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
var _context = /*#__PURE__*/ _interop_require_default(require("../mixins/context"));
var _array = require("../utilities/array");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var LocalMetaContext = /*#__PURE__*/ function() {
    function LocalMetaContext(context, judgements, metavariables, metaproofSteps) {
        _class_call_check(this, LocalMetaContext);
        this.context = context;
        this.judgements = judgements;
        this.metavariables = metavariables;
        this.metaproofSteps = metaproofSteps;
    }
    _create_class(LocalMetaContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getJudgements",
            value: function getJudgements() {
                var judgements = this.context.getJudgements();
                judgements = _to_consumable_array(this.judgements).concat(_to_consumable_array(judgements));
                return judgements;
            }
        },
        {
            key: "getMetavariables",
            value: function getMetavariables() {
                var metavariables = this.context.getMetavariables();
                metavariables = _to_consumable_array(this.metavariables).concat(_to_consumable_array(metavariables));
                return metavariables;
            }
        },
        {
            key: "getMetaproofSteps",
            value: function getMetaproofSteps() {
                var metaproofSteps = this.context.getMetaproofSteps();
                metaproofSteps = _to_consumable_array(metaproofSteps).concat(_to_consumable_array(this.metaproofSteps));
                return metaproofSteps;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                return this.context.getVariables();
            }
        },
        {
            key: "getProofSteps",
            value: function getProofSteps() {
                return this.context.getProofSteps();
            }
        },
        {
            key: "getEquivalences",
            value: function getEquivalences() {
                return this.context.getEquivalences();
            }
        },
        {
            key: "getTermType",
            value: function getTermType(term) {
                var termType = term.getType();
                return termType;
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
            key: "addJudgement",
            value: function addJudgement(judgement) {
                this.judgements.push(judgement);
            }
        },
        {
            key: "addMetavariable",
            value: function addMetavariable(metavariable) {
                var metavariableAdded = false;
                var node = metavariable.getName(), metavariablePresent = this.metavariables.some(function(metavariable) {
                    var nodeMatches = metavariable.matchNode(node);
                    if (nodeMatches) {
                        return true;
                    }
                });
                if (!metavariablePresent) {
                    this.metavariables.push(metavariable);
                    metavariableAdded = true;
                }
                return metavariableAdded;
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
                var metastatementMatches = false;
                if (!metastatementMatches) {
                    var proofStepMatchesMetastatement = this.metaproofSteps.some(function(metaproofStep) {
                        var proofStepMatchesMetastatement = metaproofStep.match(metastatementNode);
                        if (proofStepMatchesMetastatement) {
                            return true;
                        }
                    });
                    metastatementMatches = proofStepMatchesMetastatement; ///
                }
                if (!metastatementMatches) {
                    metastatementMatches = this.context.matchMetastatement(metastatementNode);
                }
                return metastatementMatches;
            }
        },
        {
            key: "findVariableByVariableNode",
            value: function findVariableByVariableNode(variableNode) {
                var node = variableNode, variables = this.getVariables(), variable = variables.find(function(variable) {
                    var matches = variable.matchNode(node);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return variable;
            }
        },
        {
            key: "isVariablePresentByVariableNode",
            value: function isVariablePresentByVariableNode(variableNode) {
                var variable = this.findVariableByVariableNode(variableNode), variablePresent = variable !== null;
                return variablePresent;
            }
        },
        {
            key: "findMetavariableByMetavariableNode",
            value: function findMetavariableByMetavariableNode(metavariableNode, localMetaContext) {
                var node = metavariableNode, metavariables = this.getMetavariables(), metavariable = metavariables.find(function(metavariable) {
                    var matches = metavariable.matchNode(node, localMetaContext);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return metavariable;
            }
        },
        {
            key: "isMetavariablePresentByMetavariableNode",
            value: function isMetavariablePresentByMetavariableNode(metavariableNode, localMetaContext) {
                var metavariable = this.findMetavariableByMetavariableNode(metavariableNode, localMetaContext), metavariablePresent = metavariable !== null;
                return metavariablePresent;
            }
        }
    ], [
        {
            key: "fromFileContext",
            value: function fromFileContext(fileContext) {
                var context = fileContext, judgements = [], metavariables = [], metaproofSteps = [], localMetaContext = new LocalMetaContext(context, judgements, metavariables, metaproofSteps);
                return localMetaContext;
            }
        },
        {
            key: "fromLocalMetaContext",
            value: function fromLocalMetaContext(localMetaContext) {
                var context = localMetaContext, judgements = [], metavariables = [], metaproofSteps = [];
                localMetaContext = new LocalMetaContext(context, judgements, metavariables, metaproofSteps); ///
                return localMetaContext;
            }
        }
    ]);
    return LocalMetaContext;
}();
Object.assign(LocalMetaContext.prototype, _context.default);
var _default = LocalMetaContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsTWV0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGNvbnRleHRNaXhpbnMgZnJvbSBcIi4uL21peGlucy9jb250ZXh0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNsYXNzIExvY2FsTWV0YUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBqdWRnZW1lbnRzLCBtZXRhdmFyaWFibGVzLCBtZXRhcHJvb2ZTdGVwcykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50cztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMgPSBtZXRhcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7XG4gICAgbGV0IGp1ZGdlbWVudHMgPSB0aGlzLmNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuXG4gICAganVkZ2VtZW50cyA9IFsgLy8vXG4gICAgICAuLi50aGlzLmp1ZGdlbWVudHMsXG4gICAgICAuLi5qdWRnZW1lbnRzXG4gICAgXVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVzID0gdGhpcy5jb250ZXh0LmdldE1ldGF2YXJpYWJsZXMoKTtcblxuICAgIG1ldGF2YXJpYWJsZXMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5tZXRhdmFyaWFibGVzLFxuICAgICAgLi4ubWV0YXZhcmlhYmxlc1xuICAgIF1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TWV0YXByb29mU3RlcHMoKSB7XG4gICAgbGV0IG1ldGFwcm9vZlN0ZXBzID0gdGhpcy5jb250ZXh0LmdldE1ldGFwcm9vZlN0ZXBzKCk7XG5cbiAgICBtZXRhcHJvb2ZTdGVwcyA9IFsgIC8vL1xuICAgICAgLi4ubWV0YXByb29mU3RlcHMsXG4gICAgICAuLi50aGlzLm1ldGFwcm9vZlN0ZXBzXG4gICAgXTtcblxuICAgIHJldHVybiBtZXRhcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRWYXJpYWJsZXMoKTsgfVxuXG4gIGdldFByb29mU3RlcHMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0UHJvb2ZTdGVwcygpOyB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEVxdWl2YWxlbmNlcygpOyB9XG5cbiAgZ2V0VGVybVR5cGUodGVybSkge1xuICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICByZXR1cm4gdGVybVR5cGU7XG4gIH1cblxuICBnZXRMYXN0TWV0YXByb29mU3RlcCgpIHtcbiAgICBsZXQgbGFzdE1ldGFwcm9vZlN0ZXAgPSBudWxsO1xuXG4gICAgY29uc3QgbWV0YXByb29mU3RlcHNMZW5ndGggPSB0aGlzLm1ldGFwcm9vZlN0ZXBzLmxlbmd0aDtcblxuICAgIGlmIChtZXRhcHJvb2ZTdGVwc0xlbmd0aCA+IDApIHtcbiAgICAgIGxhc3RNZXRhcHJvb2ZTdGVwID0gbGFzdCh0aGlzLm1ldGFwcm9vZlN0ZXBzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdE1ldGFwcm9vZlN0ZXA7XG4gIH1cblxuICBhZGRKdWRnZW1lbnQoanVkZ2VtZW50KSB7XG4gICAgdGhpcy5qdWRnZW1lbnRzLnB1c2goanVkZ2VtZW50KTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSB0aGlzLm1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghbWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIGFkZE1ldGFwcm9vZlN0ZXAobWV0YXByb29mU3RlcCkge1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMucHVzaChtZXRhcHJvb2ZTdGVwKTtcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKCFtZXRhc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQgPSB0aGlzLm1ldGFwcm9vZlN0ZXBzLnNvbWUoKG1ldGFwcm9vZlN0ZXApID0+IHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQgPSBtZXRhcHJvb2ZTdGVwLm1hdGNoKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBpZiAocHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gcHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIGlmICghbWV0YXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gdGhpcy5jb250ZXh0Lm1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRNYXRjaGVzO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsTWV0YUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGp1ZGdlbWVudHMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbWV0YXByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBsb2NhbE1ldGFDb250ZXh0ID0gbmV3IExvY2FsTWV0YUNvbnRleHQoY29udGV4dCwganVkZ2VtZW50cywgbWV0YXZhcmlhYmxlcywgbWV0YXByb29mU3RlcHMpO1xuXG4gICAgcmV0dXJuIGxvY2FsTWV0YUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvY2FsTWV0YUNvbnRleHQobG9jYWxNZXRhQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBsb2NhbE1ldGFDb250ZXh0LCAgLy8vXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwcyA9IFtdO1xuXG4gICAgbG9jYWxNZXRhQ29udGV4dCA9IG5ldyBMb2NhbE1ldGFDb250ZXh0KGNvbnRleHQsIGp1ZGdlbWVudHMsIG1ldGF2YXJpYWJsZXMsIG1ldGFwcm9vZlN0ZXBzKTsgIC8vL1xuXG4gICAgcmV0dXJuIGxvY2FsTWV0YUNvbnRleHQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihMb2NhbE1ldGFDb250ZXh0LnByb3RvdHlwZSwgY29udGV4dE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsTWV0YUNvbnRleHQ7Il0sIm5hbWVzIjpbIkxvY2FsTWV0YUNvbnRleHQiLCJjb250ZXh0IiwianVkZ2VtZW50cyIsIm1ldGF2YXJpYWJsZXMiLCJtZXRhcHJvb2ZTdGVwcyIsImdldENvbnRleHQiLCJnZXRKdWRnZW1lbnRzIiwiZ2V0TWV0YXZhcmlhYmxlcyIsImdldE1ldGFwcm9vZlN0ZXBzIiwiZ2V0VmFyaWFibGVzIiwiZ2V0UHJvb2ZTdGVwcyIsImdldEVxdWl2YWxlbmNlcyIsImdldFRlcm1UeXBlIiwidGVybSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsImdldExhc3RNZXRhcHJvb2ZTdGVwIiwibGFzdE1ldGFwcm9vZlN0ZXAiLCJtZXRhcHJvb2ZTdGVwc0xlbmd0aCIsImxlbmd0aCIsImxhc3QiLCJhZGRKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJwdXNoIiwiYWRkTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlQWRkZWQiLCJub2RlIiwiZ2V0TmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJzb21lIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJhZGRNZXRhcHJvb2ZTdGVwIiwibWV0YXByb29mU3RlcCIsIm1hdGNoTWV0YXN0YXRlbWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudE1hdGNoZXMiLCJwcm9vZlN0ZXBNYXRjaGVzTWV0YXN0YXRlbWVudCIsIm1hdGNoIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZXMiLCJ2YXJpYWJsZSIsImZpbmQiLCJtYXRjaGVzIiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlUHJlc2VudCIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibG9jYWxNZXRhQ29udGV4dCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImZyb21GaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwiZnJvbUxvY2FsTWV0YUNvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJjb250ZXh0TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnTUE7OztlQUFBOzs7OERBOUwwQjtxQkFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBQSxBQUFNQSxpQ0FBRCxBQUFMO2FBQU1BLGlCQUNRQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsYUFBYSxFQUFFQyxjQUFjO2dDQUQxREo7UUFFRixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQTs7a0JBTHBCSjs7WUFRSkssS0FBQUE7bUJB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