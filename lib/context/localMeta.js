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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsTWV0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGNvbnRleHRNaXhpbnMgZnJvbSBcIi4uL21peGlucy9jb250ZXh0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBtZXJnZU1ldGFFcXVpdmFsZW5jZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21ldGFFcXVpdmFsZW5jZXNcIjtcblxuY2xhc3MgTG9jYWxNZXRhQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG1ldGF2YXJpYWJsZXMsIG1ldGFwcm9vZlN0ZXBzLCBtZXRhRXF1aXZhbGVuY2VzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMgPSBtZXRhcHJvb2ZTdGVwcztcbiAgICB0aGlzLm1ldGFFcXVpdmFsZW5jZXMgPSBtZXRhRXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0VGVybVR5cGUodGVybSkge1xuICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICByZXR1cm4gdGVybVR5cGU7XG4gIH1cblxuICBnZXRNZXRhcHJvb2ZTdGVwcygpIHtcbiAgICBsZXQgbWV0YXByb29mU3RlcHMgPSB0aGlzLmNvbnRleHQuZ2V0TWV0YXByb29mU3RlcHMoKTtcblxuICAgIG1ldGFwcm9vZlN0ZXBzID0gWyAgLy8vXG4gICAgICAuLi5tZXRhcHJvb2ZTdGVwcyxcbiAgICAgIC4uLnRoaXMubWV0YXByb29mU3RlcHNcbiAgICBdO1xuXG4gICAgcmV0dXJuIG1ldGFwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0TWV0YUVxdWl2YWxlbmNlcygpIHtcbiAgICBsZXQgbWV0YUVxdWl2YWxlbmNlcyA9IHRoaXMuY29udGV4dC5nZXRNZXRhRXF1aXZhbGVuY2VzKCk7XG5cbiAgICBjb25zdCBtZXRhRXF1aXZhbGVuY2VzQSA9IHRoaXMubWV0YUVxdWl2YWxlbmNlcywgLy8vXG4gICAgICAgICAgbWV0YUVxdWl2YWxlbmNlc0IgPSBtZXRhRXF1aXZhbGVuY2VzLFxuICAgICAgICAgIGxvY2FsTWV0YUNvbnRleHQgPSB0aGlzOyAgLy8vXG5cbiAgICBtZXRhRXF1aXZhbGVuY2VzID0gbWVyZ2VNZXRhRXF1aXZhbGVuY2VzKG1ldGFFcXVpdmFsZW5jZXNBLCBtZXRhRXF1aXZhbGVuY2VzQiwgbG9jYWxNZXRhQ29udGV4dCk7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGFFcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7IH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCk7IH1cblxuICBnZXRNZXRhdmFyaWFibGVzKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVzID0gdGhpcy5jb250ZXh0LmdldE1ldGF2YXJpYWJsZXMoKTtcblxuICAgIG1ldGF2YXJpYWJsZXMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5tZXRhdmFyaWFibGVzLFxuICAgICAgLi4ubWV0YXZhcmlhYmxlc1xuICAgIF1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TGFzdE1ldGFwcm9vZlN0ZXAoKSB7XG4gICAgbGV0IGxhc3RNZXRhcHJvb2ZTdGVwID0gbnVsbDtcblxuICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzTGVuZ3RoID0gdGhpcy5tZXRhcHJvb2ZTdGVwcy5sZW5ndGg7XG5cbiAgICBpZiAobWV0YXByb29mU3RlcHNMZW5ndGggPiAwKSB7XG4gICAgICBsYXN0TWV0YXByb29mU3RlcCA9IGxhc3QodGhpcy5tZXRhcHJvb2ZTdGVwcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RNZXRhcHJvb2ZTdGVwO1xuICB9XG5cbiAgYWRkTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGxldCBtZXRhdmFyaWFibGVBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IHRoaXMubWV0YXZhcmlhYmxlcy5zb21lKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gbWV0YXZhcmlhYmxlLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKG5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuXG4gICAgICBtZXRhdmFyaWFibGVBZGRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZUFkZGVkO1xuICB9XG5cbiAgYWRkTWV0YXByb29mU3RlcChtZXRhcHJvb2ZTdGVwKSB7XG4gICAgdGhpcy5tZXRhcHJvb2ZTdGVwcy5wdXNoKG1ldGFwcm9vZlN0ZXApO1xuICB9XG5cbiAgYWRkTWV0YUVxdWl2YWxlbmNlKG1ldGFFcXVpdmFsZW5jZSkge1xuICAgIHRoaXMubWV0YUVxdWl2YWxlbmNlcy5wdXNoKG1ldGFFcXVpdmFsZW5jZSk7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGlmICghbWV0YXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcE1hdGNoZXNNZXRhc3RhdGVtZW50ID0gdGhpcy5tZXRhcHJvb2ZTdGVwcy5zb21lKChtZXRhcHJvb2ZTdGVwKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb29mU3RlcE1hdGNoZXNNZXRhc3RhdGVtZW50ID0gbWV0YXByb29mU3RlcC5tYXRjaChtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgaWYgKHByb29mU3RlcE1hdGNoZXNNZXRhc3RhdGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IHByb29mU3RlcE1hdGNoZXNNZXRhc3RhdGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICBpZiAoIW1ldGFzdGF0ZW1lbnRNYXRjaGVzKSB7XG4gICAgICBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IHRoaXMuY29udGV4dC5tYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50TWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxNZXRhQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gbWV0YXZhcmlhYmxlLm1hdGNoTm9kZShub2RlLCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxNZXRhQ29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbE1ldGFDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbWV0YXByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBtZXRhRXF1aXZhbGVuY2VzID0gW10sXG4gICAgICAgICAgbG9jYWxNZXRhQ29udGV4dCA9IG5ldyBMb2NhbE1ldGFDb250ZXh0KGNvbnRleHQsIG1ldGF2YXJpYWJsZXMsIG1ldGFwcm9vZlN0ZXBzLCBtZXRhRXF1aXZhbGVuY2VzKTtcblxuICAgIHJldHVybiBsb2NhbE1ldGFDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2NhbE1ldGFDb250ZXh0KGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbG9jYWxNZXRhQ29udGV4dCwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIG1ldGFFcXVpdmFsZW5jZXMgPSBbXTtcblxuICAgIGxvY2FsTWV0YUNvbnRleHQgPSBuZXcgTG9jYWxNZXRhQ29udGV4dChjb250ZXh0LCBtZXRhdmFyaWFibGVzLCBtZXRhcHJvb2ZTdGVwcywgbWV0YUVxdWl2YWxlbmNlcyk7ICAvLy9cblxuICAgIHJldHVybiBsb2NhbE1ldGFDb250ZXh0O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTG9jYWxNZXRhQ29udGV4dC5wcm90b3R5cGUsIGNvbnRleHRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBMb2NhbE1ldGFDb250ZXh0OyJdLCJuYW1lcyI6WyJMb2NhbE1ldGFDb250ZXh0IiwiY29udGV4dCIsIm1ldGF2YXJpYWJsZXMiLCJtZXRhcHJvb2ZTdGVwcyIsIm1ldGFFcXVpdmFsZW5jZXMiLCJnZXRDb250ZXh0IiwiZ2V0VGVybVR5cGUiLCJ0ZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwiZ2V0TWV0YXByb29mU3RlcHMiLCJnZXRNZXRhRXF1aXZhbGVuY2VzIiwibWV0YUVxdWl2YWxlbmNlc0EiLCJtZXRhRXF1aXZhbGVuY2VzQiIsImxvY2FsTWV0YUNvbnRleHQiLCJtZXJnZU1ldGFFcXVpdmFsZW5jZXMiLCJnZXRWYXJpYWJsZXMiLCJnZXRFcXVpdmFsZW5jZXMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZ2V0TGFzdE1ldGFwcm9vZlN0ZXAiLCJsYXN0TWV0YXByb29mU3RlcCIsIm1ldGFwcm9vZlN0ZXBzTGVuZ3RoIiwibGVuZ3RoIiwibGFzdCIsImFkZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUFkZGVkIiwibm9kZSIsImdldE5hbWUiLCJtZXRhdmFyaWFibGVQcmVzZW50Iiwic29tZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwicHVzaCIsImFkZE1ldGFwcm9vZlN0ZXAiLCJtZXRhcHJvb2ZTdGVwIiwiYWRkTWV0YUVxdWl2YWxlbmNlIiwibWV0YUVxdWl2YWxlbmNlIiwibWF0Y2hNZXRhc3RhdGVtZW50IiwibWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhc3RhdGVtZW50TWF0Y2hlcyIsInByb29mU3RlcE1hdGNoZXNNZXRhc3RhdGVtZW50IiwibWF0Y2giLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlcyIsInZhcmlhYmxlIiwiZmluZCIsIm1hdGNoZXMiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVQcmVzZW50IiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImZyb21Mb2NhbE1ldGFDb250ZXh0IiwiT2JqZWN0IiwiYXNzaWdu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