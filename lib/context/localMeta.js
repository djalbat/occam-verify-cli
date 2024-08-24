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
var _metaEquivalences = require("../utilities/metaEquivalences");
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
    function LocalMetaContext(context, metavariables, metaproofSteps, metaEquivalences) {
        _class_call_check(this, LocalMetaContext);
        this.context = context;
        this.metavariables = metavariables;
        this.metaproofSteps = metaproofSteps;
        this.metaEquivalences = metaEquivalences;
    }
    _create_class(LocalMetaContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
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
            key: "getMetaproofSteps",
            value: function getMetaproofSteps() {
                var metaproofSteps = this.context.getMetaproofSteps();
                metaproofSteps = _to_consumable_array(metaproofSteps).concat(_to_consumable_array(this.metaproofSteps));
                return metaproofSteps;
            }
        },
        {
            key: "getMetaEquivalences",
            value: function getMetaEquivalences() {
                var metaEquivalences = this.context.getMetaEquivalences();
                var metaEquivalencesA = this.metaEquivalences, metaEquivalencesB = metaEquivalences, localMetaContext = this; ///
                metaEquivalences = (0, _metaEquivalences.mergeMetaEquivalences)(metaEquivalencesA, metaEquivalencesB, localMetaContext); ///
                return metaEquivalences;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                return this.context.getVariables();
            }
        },
        {
            key: "getEquivalences",
            value: function getEquivalences() {
                return this.context.getEquivalences();
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
            key: "addMetaEquality",
            value: function addMetaEquality(metaEquality) {}
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
            key: "addMetaEquivalence",
            value: function addMetaEquivalence(metaEquivalence) {
                this.metaEquivalences.push(metaEquivalence);
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
                var context = fileContext, metavariables = [], metaproofSteps = [], metaEquivalences = [], localMetaContext = new LocalMetaContext(context, metavariables, metaproofSteps, metaEquivalences);
                return localMetaContext;
            }
        },
        {
            key: "fromLocalMetaContext",
            value: function fromLocalMetaContext(localMetaContext) {
                var context = localMetaContext, metavariables = [], metaproofSteps = [], metaEquivalences = [];
                localMetaContext = new LocalMetaContext(context, metavariables, metaproofSteps, metaEquivalences); ///
                return localMetaContext;
            }
        }
    ]);
    return LocalMetaContext;
}();
Object.assign(LocalMetaContext.prototype, _context.default);
var _default = LocalMetaContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsTWV0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGNvbnRleHRNaXhpbnMgZnJvbSBcIi4uL21peGlucy9jb250ZXh0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBtZXJnZU1ldGFFcXVpdmFsZW5jZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21ldGFFcXVpdmFsZW5jZXNcIjtcblxuY2xhc3MgTG9jYWxNZXRhQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG1ldGF2YXJpYWJsZXMsIG1ldGFwcm9vZlN0ZXBzLCBtZXRhRXF1aXZhbGVuY2VzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMgPSBtZXRhcHJvb2ZTdGVwcztcbiAgICB0aGlzLm1ldGFFcXVpdmFsZW5jZXMgPSBtZXRhRXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0VGVybVR5cGUodGVybSkge1xuICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICByZXR1cm4gdGVybVR5cGU7XG4gIH1cblxuICBnZXRNZXRhcHJvb2ZTdGVwcygpIHtcbiAgICBsZXQgbWV0YXByb29mU3RlcHMgPSB0aGlzLmNvbnRleHQuZ2V0TWV0YXByb29mU3RlcHMoKTtcblxuICAgIG1ldGFwcm9vZlN0ZXBzID0gWyAgLy8vXG4gICAgICAuLi5tZXRhcHJvb2ZTdGVwcyxcbiAgICAgIC4uLnRoaXMubWV0YXByb29mU3RlcHNcbiAgICBdO1xuXG4gICAgcmV0dXJuIG1ldGFwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0TWV0YUVxdWl2YWxlbmNlcygpIHtcbiAgICBsZXQgbWV0YUVxdWl2YWxlbmNlcyA9IHRoaXMuY29udGV4dC5nZXRNZXRhRXF1aXZhbGVuY2VzKCk7XG5cbiAgICBjb25zdCBtZXRhRXF1aXZhbGVuY2VzQSA9IHRoaXMubWV0YUVxdWl2YWxlbmNlcywgLy8vXG4gICAgICAgICAgbWV0YUVxdWl2YWxlbmNlc0IgPSBtZXRhRXF1aXZhbGVuY2VzLFxuICAgICAgICAgIGxvY2FsTWV0YUNvbnRleHQgPSB0aGlzOyAgLy8vXG5cbiAgICBtZXRhRXF1aXZhbGVuY2VzID0gbWVyZ2VNZXRhRXF1aXZhbGVuY2VzKG1ldGFFcXVpdmFsZW5jZXNBLCBtZXRhRXF1aXZhbGVuY2VzQiwgbG9jYWxNZXRhQ29udGV4dCk7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGFFcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7IH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCk7IH1cblxuICBnZXRNZXRhdmFyaWFibGVzKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVzID0gdGhpcy5jb250ZXh0LmdldE1ldGF2YXJpYWJsZXMoKTtcblxuICAgIG1ldGF2YXJpYWJsZXMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5tZXRhdmFyaWFibGVzLFxuICAgICAgLi4ubWV0YXZhcmlhYmxlc1xuICAgIF1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TGFzdE1ldGFwcm9vZlN0ZXAoKSB7XG4gICAgbGV0IGxhc3RNZXRhcHJvb2ZTdGVwID0gbnVsbDtcblxuICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzTGVuZ3RoID0gdGhpcy5tZXRhcHJvb2ZTdGVwcy5sZW5ndGg7XG5cbiAgICBpZiAobWV0YXByb29mU3RlcHNMZW5ndGggPiAwKSB7XG4gICAgICBsYXN0TWV0YXByb29mU3RlcCA9IGxhc3QodGhpcy5tZXRhcHJvb2ZTdGVwcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RNZXRhcHJvb2ZTdGVwO1xuICB9XG5cbiAgYWRkTWV0YUVxdWFsaXR5KG1ldGFFcXVhbGl0eSkge1xuXG4gIH1cblxuICBhZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZUFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gdGhpcy5tZXRhdmFyaWFibGVzLnNvbWUoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZU1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIW1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHRoaXMubWV0YXZhcmlhYmxlcy5wdXNoKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZUFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlQWRkZWQ7XG4gIH1cblxuICBhZGRNZXRhcHJvb2ZTdGVwKG1ldGFwcm9vZlN0ZXApIHtcbiAgICB0aGlzLm1ldGFwcm9vZlN0ZXBzLnB1c2gobWV0YXByb29mU3RlcCk7XG4gIH1cblxuICBhZGRNZXRhRXF1aXZhbGVuY2UobWV0YUVxdWl2YWxlbmNlKSB7XG4gICAgdGhpcy5tZXRhRXF1aXZhbGVuY2VzLnB1c2gobWV0YUVxdWl2YWxlbmNlKTtcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKCFtZXRhc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQgPSB0aGlzLm1ldGFwcm9vZlN0ZXBzLnNvbWUoKG1ldGFwcm9vZlN0ZXApID0+IHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQgPSBtZXRhcHJvb2ZTdGVwLm1hdGNoKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBpZiAocHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gcHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIGlmICghbWV0YXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gdGhpcy5jb250ZXh0Lm1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRNYXRjaGVzO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsTWV0YUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIG1ldGFFcXVpdmFsZW5jZXMgPSBbXSxcbiAgICAgICAgICBsb2NhbE1ldGFDb250ZXh0ID0gbmV3IExvY2FsTWV0YUNvbnRleHQoY29udGV4dCwgbWV0YXZhcmlhYmxlcywgbWV0YXByb29mU3RlcHMsIG1ldGFFcXVpdmFsZW5jZXMpO1xuXG4gICAgcmV0dXJuIGxvY2FsTWV0YUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvY2FsTWV0YUNvbnRleHQobG9jYWxNZXRhQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBsb2NhbE1ldGFDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIG1ldGFwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgbWV0YUVxdWl2YWxlbmNlcyA9IFtdO1xuXG4gICAgbG9jYWxNZXRhQ29udGV4dCA9IG5ldyBMb2NhbE1ldGFDb250ZXh0KGNvbnRleHQsIG1ldGF2YXJpYWJsZXMsIG1ldGFwcm9vZlN0ZXBzLCBtZXRhRXF1aXZhbGVuY2VzKTsgIC8vL1xuXG4gICAgcmV0dXJuIGxvY2FsTWV0YUNvbnRleHQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihMb2NhbE1ldGFDb250ZXh0LnByb3RvdHlwZSwgY29udGV4dE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsTWV0YUNvbnRleHQ7Il0sIm5hbWVzIjpbIkxvY2FsTWV0YUNvbnRleHQiLCJjb250ZXh0IiwibWV0YXZhcmlhYmxlcyIsIm1ldGFwcm9vZlN0ZXBzIiwibWV0YUVxdWl2YWxlbmNlcyIsImdldENvbnRleHQiLCJnZXRUZXJtVHlwZSIsInRlcm0iLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJnZXRNZXRhcHJvb2ZTdGVwcyIsImdldE1ldGFFcXVpdmFsZW5jZXMiLCJtZXRhRXF1aXZhbGVuY2VzQSIsIm1ldGFFcXVpdmFsZW5jZXNCIiwibG9jYWxNZXRhQ29udGV4dCIsIm1lcmdlTWV0YUVxdWl2YWxlbmNlcyIsImdldFZhcmlhYmxlcyIsImdldEVxdWl2YWxlbmNlcyIsImdldE1ldGF2YXJpYWJsZXMiLCJnZXRMYXN0TWV0YXByb29mU3RlcCIsImxhc3RNZXRhcHJvb2ZTdGVwIiwibWV0YXByb29mU3RlcHNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0IiwiYWRkTWV0YUVxdWFsaXR5IiwibWV0YUVxdWFsaXR5IiwiYWRkTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlQWRkZWQiLCJub2RlIiwiZ2V0TmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJzb21lIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJwdXNoIiwiYWRkTWV0YXByb29mU3RlcCIsIm1ldGFwcm9vZlN0ZXAiLCJhZGRNZXRhRXF1aXZhbGVuY2UiLCJtZXRhRXF1aXZhbGVuY2UiLCJtYXRjaE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnRNYXRjaGVzIiwicHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQiLCJtYXRjaCIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVzIiwidmFyaWFibGUiLCJmaW5kIiwibWF0Y2hlcyIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVByZXNlbnQiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImZyb21GaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwiZnJvbUxvY2FsTWV0YUNvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJjb250ZXh0TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvTUE7OztlQUFBOzs7OERBbE0wQjtxQkFFTDtnQ0FDaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQUEsQUFBTUEsaUNBQUQsQUFBTDthQUFNQSxpQkFDUUMsT0FBTyxFQUFFQyxhQUFhLEVBQUVDLGNBQWMsRUFBRUMsZ0JBQWdCO2dDQURoRUo7UUFFRixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBOztrQkFMdEJKOztZQVFKSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE9BQU87WUFDckI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUMsSUFBSTtnQkFDZCxJQUFNQyxXQUFXRCxLQUFLRSxPQUFPO2dCQUU3QixPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlQLGlCQUFpQixJQUFJLENBQUNGLE9BQU8sQ0FBQ1MsaUJBQWlCO2dCQUVuRFAsaUJBQWlCLEFBQ2YscUJBQUdBLHVCQUNILHFCQUFHLElBQUksQ0FBQ0EsY0FBYztnQkFHeEIsT0FBT0E7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJUCxtQkFBbUIsSUFBSSxDQUFDSCxPQUFPLENBQUNVLG1CQUFtQjtnQkFFdkQsSUFBTUMsb0JBQW9CLElBQUksQ0FBQ1IsZ0JBQWdCLEVBQ3pDUyxvQkFBb0JULGtCQUNwQlUsbUJBQW1CLElBQUksRUFBRyxHQUFHO2dCQUVuQ1YsbUJBQW1CVyxJQUFBQSx1Q0FBcUIsRUFBQ0gsbUJBQW1CQyxtQkFBbUJDLG1CQUFtQixHQUFHO2dCQUVyRyxPQUFPVjtZQUNUOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFpQixPQUFPLElBQUksQ0FBQ2YsT0FBTyxDQUFDZSxZQUFZO1lBQUk7OztZQUVyREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFvQixPQUFPLElBQUksQ0FBQ2hCLE9BQU8sQ0FBQ2dCLGVBQWU7WUFBSTs7O1lBRTNEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSWhCLGdCQUFnQixJQUFJLENBQUNELE9BQU8sQ0FBQ2lCLGdCQUFnQjtnQkFFakRoQixnQkFBZ0IsQUFDZCxxQkFBRyxJQUFJLENBQUNBLGFBQWEsU0FDckIscUJBQUdBO2dCQUdMLE9BQU9BO1lBQ1Q7OztZQUVBaUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLG9CQUFvQjtnQkFFeEIsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ2xCLGNBQWMsQ0FBQ21CLE1BQU07Z0JBRXZELElBQUlELHVCQUF1QixHQUFHO29CQUM1QkQsb0JBQW9CRyxJQUFBQSxXQUFJLEVBQUMsSUFBSSxDQUFDcEIsY0FBYztnQkFDOUM7Z0JBRUEsT0FBT2lCO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCQyxZQUFZLEdBRTVCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkMsWUFBWTtnQkFDMUIsSUFBSUMsb0JBQW9CO2dCQUV4QixJQUFNQyxPQUFPRixhQUFhRyxPQUFPLElBQzNCQyxzQkFBc0IsSUFBSSxDQUFDN0IsYUFBYSxDQUFDOEIsSUFBSSxDQUFDLFNBQUNMO29CQUM3QyxJQUFNTSxjQUFjTixhQUFhTyxTQUFTLENBQUNMO29CQUUzQyxJQUFJSSxhQUFhO3dCQUNmLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRU4sSUFBSSxDQUFDRixxQkFBcUI7b0JBQ3hCLElBQUksQ0FBQzdCLGFBQWEsQ0FBQ2lDLElBQUksQ0FBQ1I7b0JBRXhCQyxvQkFBb0I7Z0JBQ3RCO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxhQUFhO2dCQUM1QixJQUFJLENBQUNsQyxjQUFjLENBQUNnQyxJQUFJLENBQUNFO1lBQzNCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkMsZUFBZTtnQkFDaEMsSUFBSSxDQUFDbkMsZ0JBQWdCLENBQUMrQixJQUFJLENBQUNJO1lBQzdCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkMsaUJBQWlCO2dCQUNsQyxJQUFJQyx1QkFBdUI7Z0JBRTNCLElBQUksQ0FBQ0Esc0JBQXNCO29CQUN6QixJQUFNQyxnQ0FBZ0MsSUFBSSxDQUFDeEMsY0FBYyxDQUFDNkIsSUFBSSxDQUFDLFNBQUNLO3dCQUM5RCxJQUFNTSxnQ0FBZ0NOLGNBQWNPLEtBQUssQ0FBQ0g7d0JBRTFELElBQUlFLCtCQUErQjs0QkFDakMsT0FBTzt3QkFDVDtvQkFDRjtvQkFFQUQsdUJBQXVCQywrQkFBK0IsR0FBRztnQkFDM0Q7Z0JBRUEsSUFBSSxDQUFDRCxzQkFBc0I7b0JBQ3pCQSx1QkFBdUIsSUFBSSxDQUFDekMsT0FBTyxDQUFDdUMsa0JBQWtCLENBQUNDO2dCQUN6RDtnQkFFQSxPQUFPQztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQkMsWUFBWTtnQkFDckMsSUFBTWpCLE9BQU9pQixjQUNQQyxZQUFZLElBQUksQ0FBQy9CLFlBQVksSUFDN0JnQyxXQUFXRCxVQUFVRSxJQUFJLENBQUMsU0FBQ0Q7b0JBQ3pCLElBQU1FLFVBQVVGLFNBQVNkLFNBQVMsQ0FBQ0w7b0JBRW5DLElBQUlxQixTQUFTO3dCQUNYLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFWixPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGdDQUFnQ0wsWUFBWTtnQkFDMUMsSUFBTUUsV0FBVyxJQUFJLENBQUNILDBCQUEwQixDQUFDQyxlQUMzQ00sa0JBQW1CSixhQUFhO2dCQUV0QyxPQUFPSTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLG1DQUFtQ0MsZ0JBQWdCLEVBQUV4QyxnQkFBZ0I7Z0JBQ25FLElBQU1lLE9BQU95QixrQkFDUHBELGdCQUFnQixJQUFJLENBQUNnQixnQkFBZ0IsSUFDckNTLGVBQWV6QixjQUFjK0MsSUFBSSxDQUFDLFNBQUN0QjtvQkFDakMsSUFBTXVCLFVBQVV2QixhQUFhTyxTQUFTLENBQUNMLE1BQU1mO29CQUU3QyxJQUFJb0MsU0FBUzt3QkFDWCxPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRVosT0FBT3ZCO1lBQ1Q7OztZQUVBNEIsS0FBQUE7bUJBQUFBLFNBQUFBLHdDQUF3Q0QsZ0JBQWdCLEVBQUV4QyxnQkFBZ0I7Z0JBQ3hFLElBQU1hLGVBQWUsSUFBSSxDQUFDMEIsa0NBQWtDLENBQUNDLGtCQUFrQnhDLG1CQUN6RWlCLHNCQUF1QkosaUJBQWlCO2dCQUU5QyxPQUFPSTtZQUNUOzs7O1lBRU95QixLQUFBQTttQkFBUCxTQUFPQSxnQkFBZ0JDLFdBQVc7Z0JBQ2hDLElBQU14RCxVQUFVd0QsYUFDVnZELGdCQUFnQixFQUFFLEVBQ2xCQyxpQkFBaUIsRUFBRSxFQUNuQkMsbUJBQW1CLEVBQUUsRUFDckJVLG1CQUFtQixJQTFLdkJkLGlCQTBLNENDLFNBQVNDLGVBQWVDLGdCQUFnQkM7Z0JBRXRGLE9BQU9VO1lBQ1Q7OztZQUVPNEMsS0FBQUE7bUJBQVAsU0FBT0EscUJBQXFCNUMsZ0JBQWdCO2dCQUMxQyxJQUFNYixVQUFVYSxrQkFDVlosZ0JBQWdCLEVBQUUsRUFDbEJDLGlCQUFpQixFQUFFLEVBQ25CQyxtQkFBbUIsRUFBRTtnQkFFM0JVLG1CQUFtQixJQXJMakJkLGlCQXFMc0NDLFNBQVNDLGVBQWVDLGdCQUFnQkMsbUJBQW9CLEdBQUc7Z0JBRXZHLE9BQU9VO1lBQ1Q7OztXQXhMSWQ7O0FBMkxOMkQsT0FBT0MsTUFBTSxDQUFDNUQsaUJBQWlCNkQsU0FBUyxFQUFFQyxnQkFBYTtJQUV2RCxXQUFlOUQifQ==