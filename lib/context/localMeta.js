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
                var judgementAdded = false;
                var metavariableNode = judgement.getMetavariableNode(), judgementPresent = this.isJudgementPresentByMetavariableNode(metavariableNode);
                if (!judgementPresent) {
                    this.judgements.push(judgement);
                    judgementAdded = true;
                }
                return judgementAdded;
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
            key: "findJudgementByMetavariableNode",
            value: function findJudgementByMetavariableNode(metavariableNode) {
                var judgements = this.getJudgements(), judgement = judgements.find(function(judgement) {
                    var metavariableMatches = judgement.matchMetavariableNode(metavariableNode);
                    if (metavariableMatches) {
                        return true;
                    }
                }) || null;
                return judgement;
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
            key: "isJudgementPresentByMetavariableNode",
            value: function isJudgementPresentByMetavariableNode(metavariableNode) {
                var judgement = this.findJudgementByMetavariableNode(metavariableNode), judgementPresent = judgement !== null;
                return judgementPresent;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsTWV0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGNvbnRleHRNaXhpbnMgZnJvbSBcIi4uL21peGlucy9jb250ZXh0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNsYXNzIExvY2FsTWV0YUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBqdWRnZW1lbnRzLCBtZXRhdmFyaWFibGVzLCBtZXRhcHJvb2ZTdGVwcykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50cztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMgPSBtZXRhcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7XG4gICAgbGV0IGp1ZGdlbWVudHMgPSB0aGlzLmNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuXG4gICAganVkZ2VtZW50cyA9IFsgLy8vXG4gICAgICAuLi50aGlzLmp1ZGdlbWVudHMsXG4gICAgICAuLi5qdWRnZW1lbnRzXG4gICAgXVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVzID0gdGhpcy5jb250ZXh0LmdldE1ldGF2YXJpYWJsZXMoKTtcblxuICAgIG1ldGF2YXJpYWJsZXMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5tZXRhdmFyaWFibGVzLFxuICAgICAgLi4ubWV0YXZhcmlhYmxlc1xuICAgIF1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TWV0YXByb29mU3RlcHMoKSB7XG4gICAgbGV0IG1ldGFwcm9vZlN0ZXBzID0gdGhpcy5jb250ZXh0LmdldE1ldGFwcm9vZlN0ZXBzKCk7XG5cbiAgICBtZXRhcHJvb2ZTdGVwcyA9IFsgIC8vL1xuICAgICAgLi4ubWV0YXByb29mU3RlcHMsXG4gICAgICAuLi50aGlzLm1ldGFwcm9vZlN0ZXBzXG4gICAgXTtcblxuICAgIHJldHVybiBtZXRhcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRWYXJpYWJsZXMoKTsgfVxuXG4gIGdldFByb29mU3RlcHMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0UHJvb2ZTdGVwcygpOyB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEVxdWl2YWxlbmNlcygpOyB9XG5cbiAgZ2V0VGVybVR5cGUodGVybSkge1xuICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICByZXR1cm4gdGVybVR5cGU7XG4gIH1cblxuICBnZXRMYXN0TWV0YXByb29mU3RlcCgpIHtcbiAgICBsZXQgbGFzdE1ldGFwcm9vZlN0ZXAgPSBudWxsO1xuXG4gICAgY29uc3QgbWV0YXByb29mU3RlcHNMZW5ndGggPSB0aGlzLm1ldGFwcm9vZlN0ZXBzLmxlbmd0aDtcblxuICAgIGlmIChtZXRhcHJvb2ZTdGVwc0xlbmd0aCA+IDApIHtcbiAgICAgIGxhc3RNZXRhcHJvb2ZTdGVwID0gbGFzdCh0aGlzLm1ldGFwcm9vZlN0ZXBzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdE1ldGFwcm9vZlN0ZXA7XG4gIH1cblxuICBhZGRKdWRnZW1lbnQoanVkZ2VtZW50KSB7XG4gICAgbGV0IGp1ZGdlbWVudEFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0ganVkZ2VtZW50LmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gdGhpcy5pc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoIWp1ZGdlbWVudFByZXNlbnQpIHtcbiAgICAgIHRoaXMuanVkZ2VtZW50cy5wdXNoKGp1ZGdlbWVudCk7XG5cbiAgICAgIGp1ZGdlbWVudEFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ganVkZ2VtZW50QWRkZWQ7XG4gIH1cblxuICBhZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZUFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gdGhpcy5tZXRhdmFyaWFibGVzLnNvbWUoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZU1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIW1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHRoaXMubWV0YXZhcmlhYmxlcy5wdXNoKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZUFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlQWRkZWQ7XG4gIH1cblxuICBhZGRNZXRhcHJvb2ZTdGVwKG1ldGFwcm9vZlN0ZXApIHtcbiAgICB0aGlzLm1ldGFwcm9vZlN0ZXBzLnB1c2gobWV0YXByb29mU3RlcCk7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGlmICghbWV0YXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcE1hdGNoZXNNZXRhc3RhdGVtZW50ID0gdGhpcy5tZXRhcHJvb2ZTdGVwcy5zb21lKChtZXRhcHJvb2ZTdGVwKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb29mU3RlcE1hdGNoZXNNZXRhc3RhdGVtZW50ID0gbWV0YXByb29mU3RlcC5tYXRjaChtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgaWYgKHByb29mU3RlcE1hdGNoZXNNZXRhc3RhdGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IHByb29mU3RlcE1hdGNoZXNNZXRhc3RhdGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICBpZiAoIW1ldGFzdGF0ZW1lbnRNYXRjaGVzKSB7XG4gICAgICBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IHRoaXMuY29udGV4dC5tYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50TWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QganVkZ2VtZW50cyA9IHRoaXMuZ2V0SnVkZ2VtZW50cygpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGp1ZGdlbWVudHMuZmluZCgoanVkZ2VtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVNYXRjaGVzID0ganVkZ2VtZW50Lm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IChqdWRnZW1lbnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudFByZXNlbnQ7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxNZXRhQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IChtZXRhdmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGxvY2FsTWV0YUNvbnRleHQgPSBuZXcgTG9jYWxNZXRhQ29udGV4dChjb250ZXh0LCBqdWRnZW1lbnRzLCBtZXRhdmFyaWFibGVzLCBtZXRhcHJvb2ZTdGVwcyk7XG5cbiAgICByZXR1cm4gbG9jYWxNZXRhQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9jYWxNZXRhQ29udGV4dChsb2NhbE1ldGFDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IGxvY2FsTWV0YUNvbnRleHQsICAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRzID0gW10sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIG1ldGFwcm9vZlN0ZXBzID0gW107XG5cbiAgICBsb2NhbE1ldGFDb250ZXh0ID0gbmV3IExvY2FsTWV0YUNvbnRleHQoY29udGV4dCwganVkZ2VtZW50cywgbWV0YXZhcmlhYmxlcywgbWV0YXByb29mU3RlcHMpOyAgLy8vXG5cbiAgICByZXR1cm4gbG9jYWxNZXRhQ29udGV4dDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKExvY2FsTWV0YUNvbnRleHQucHJvdG90eXBlLCBjb250ZXh0TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxNZXRhQ29udGV4dDsiXSwibmFtZXMiOlsiTG9jYWxNZXRhQ29udGV4dCIsImNvbnRleHQiLCJqdWRnZW1lbnRzIiwibWV0YXZhcmlhYmxlcyIsIm1ldGFwcm9vZlN0ZXBzIiwiZ2V0Q29udGV4dCIsImdldEp1ZGdlbWVudHMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZ2V0TWV0YXByb29mU3RlcHMiLCJnZXRWYXJpYWJsZXMiLCJnZXRQcm9vZlN0ZXBzIiwiZ2V0RXF1aXZhbGVuY2VzIiwiZ2V0VGVybVR5cGUiLCJ0ZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwiZ2V0TGFzdE1ldGFwcm9vZlN0ZXAiLCJsYXN0TWV0YXByb29mU3RlcCIsIm1ldGFwcm9vZlN0ZXBzTGVuZ3RoIiwibGVuZ3RoIiwibGFzdCIsImFkZEp1ZGdlbWVudCIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEFkZGVkIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwicHVzaCIsImFkZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUFkZGVkIiwibm9kZSIsImdldE5hbWUiLCJtZXRhdmFyaWFibGVQcmVzZW50Iiwic29tZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiYWRkTWV0YXByb29mU3RlcCIsIm1ldGFwcm9vZlN0ZXAiLCJtYXRjaE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnRNYXRjaGVzIiwicHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQiLCJtYXRjaCIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVzIiwidmFyaWFibGUiLCJmaW5kIiwibWF0Y2hlcyIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlUHJlc2VudCIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJsb2NhbE1ldGFDb250ZXh0IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiZnJvbUZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJmcm9tTG9jYWxNZXRhQ29udGV4dCIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImNvbnRleHRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStOQTs7O2VBQUE7Ozs4REE3TjBCO3FCQUVMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFBLEFBQU1BLGlDQUFELEFBQUw7YUFBTUEs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