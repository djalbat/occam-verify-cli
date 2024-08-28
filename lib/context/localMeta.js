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
    function LocalMetaContext(context, metavariables, metaproofSteps, frameAssertions) {
        _class_call_check(this, LocalMetaContext);
        this.context = context;
        this.metavariables = metavariables;
        this.metaproofSteps = metaproofSteps;
        this.frameAssertions = frameAssertions;
    }
    _create_class(LocalMetaContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
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
            key: "getFrameAssertions",
            value: function getFrameAssertions() {
                var frameAssertions = this.context.getFrameAssertions();
                frameAssertions = _to_consumable_array(this.frameAssertions).concat(_to_consumable_array(frameAssertions));
                return frameAssertions;
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
            key: "addFrameAssertion",
            value: function addFrameAssertion(frameAssertion) {
                var frameAssertionAdded = false;
                var metavariableNode = frameAssertion.getMetavariableNode(), frameAssertionPresent = this.isFrameAssertionPresentByMetavariableNode(metavariableNode);
                if (!frameAssertionPresent) {
                    this.frameAssertions.push(frameAssertion);
                    frameAssertionAdded = true;
                }
                return frameAssertionAdded;
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
            key: "findFrameAssertionByMetavariableNode",
            value: function findFrameAssertionByMetavariableNode(metavariableNode) {
                var frameAssertions = this.getFrameAssertions(), frameAssertion = frameAssertions.find(function(frameAssertion) {
                    var metavariableMatches = frameAssertion.matchMetavariableNode(metavariableNode);
                    if (metavariableMatches) {
                        return true;
                    }
                }) || null;
                return frameAssertion;
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
            key: "isFrameAssertionPresentByMetavariableNode",
            value: function isFrameAssertionPresentByMetavariableNode(metavariableNode) {
                var frameAssertion = this.findFrameAssertionByMetavariableNode(metavariableNode), frameAssertionPresent = frameAssertion !== null;
                return frameAssertionPresent;
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
                var context = fileContext, metavariables = [], metaproofSteps = [], frameAssertions = [], localMetaContext = new LocalMetaContext(context, metavariables, metaproofSteps, frameAssertions);
                return localMetaContext;
            }
        },
        {
            key: "fromLocalMetaContext",
            value: function fromLocalMetaContext(localMetaContext) {
                var context = localMetaContext, metavariables = [], metaproofSteps = [], frameAssertions = [];
                localMetaContext = new LocalMetaContext(context, metavariables, metaproofSteps, frameAssertions); ///
                return localMetaContext;
            }
        }
    ]);
    return LocalMetaContext;
}();
Object.assign(LocalMetaContext.prototype, _context.default);
var _default = LocalMetaContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsTWV0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGNvbnRleHRNaXhpbnMgZnJvbSBcIi4uL21peGlucy9jb250ZXh0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNsYXNzIExvY2FsTWV0YUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBtZXRhdmFyaWFibGVzLCBtZXRhcHJvb2ZTdGVwcywgZnJhbWVBc3NlcnRpb25zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMgPSBtZXRhcHJvb2ZTdGVwcztcbiAgICB0aGlzLmZyYW1lQXNzZXJ0aW9ucyA9IGZyYW1lQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0TWV0YXZhcmlhYmxlcygpO1xuXG4gICAgbWV0YXZhcmlhYmxlcyA9IFsgLy8vXG4gICAgICAuLi50aGlzLm1ldGF2YXJpYWJsZXMsXG4gICAgICAuLi5tZXRhdmFyaWFibGVzXG4gICAgXVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRNZXRhcHJvb2ZTdGVwcygpIHtcbiAgICBsZXQgbWV0YXByb29mU3RlcHMgPSB0aGlzLmNvbnRleHQuZ2V0TWV0YXByb29mU3RlcHMoKTtcblxuICAgIG1ldGFwcm9vZlN0ZXBzID0gWyAgLy8vXG4gICAgICAuLi5tZXRhcHJvb2ZTdGVwcyxcbiAgICAgIC4uLnRoaXMubWV0YXByb29mU3RlcHNcbiAgICBdO1xuXG4gICAgcmV0dXJuIG1ldGFwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0RnJhbWVBc3NlcnRpb25zKCkge1xuICAgIGxldCBmcmFtZUFzc2VydGlvbnMgPSB0aGlzLmNvbnRleHQuZ2V0RnJhbWVBc3NlcnRpb25zKCk7XG5cbiAgICBmcmFtZUFzc2VydGlvbnMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5mcmFtZUFzc2VydGlvbnMsXG4gICAgICAuLi5mcmFtZUFzc2VydGlvbnNcbiAgICBdXG5cbiAgICByZXR1cm4gZnJhbWVBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFZhcmlhYmxlcygpOyB9XG5cbiAgZ2V0UHJvb2ZTdGVwcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRQcm9vZlN0ZXBzKCk7IH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCk7IH1cblxuICBnZXRUZXJtVHlwZSh0ZXJtKSB7XG4gICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIHJldHVybiB0ZXJtVHlwZTtcbiAgfVxuXG4gIGdldExhc3RNZXRhcHJvb2ZTdGVwKCkge1xuICAgIGxldCBsYXN0TWV0YXByb29mU3RlcCA9IG51bGw7XG5cbiAgICBjb25zdCBtZXRhcHJvb2ZTdGVwc0xlbmd0aCA9IHRoaXMubWV0YXByb29mU3RlcHMubGVuZ3RoO1xuXG4gICAgaWYgKG1ldGFwcm9vZlN0ZXBzTGVuZ3RoID4gMCkge1xuICAgICAgbGFzdE1ldGFwcm9vZlN0ZXAgPSBsYXN0KHRoaXMubWV0YXByb29mU3RlcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0TWV0YXByb29mU3RlcDtcbiAgfVxuXG4gIGFkZEZyYW1lQXNzZXJ0aW9uKGZyYW1lQXNzZXJ0aW9uKSB7XG4gICAgbGV0IGZyYW1lQXNzZXJ0aW9uQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBmcmFtZUFzc2VydGlvbi5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgZnJhbWVBc3NlcnRpb25QcmVzZW50ID0gdGhpcy5pc0ZyYW1lQXNzZXJ0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIGlmICghZnJhbWVBc3NlcnRpb25QcmVzZW50KSB7XG4gICAgICB0aGlzLmZyYW1lQXNzZXJ0aW9ucy5wdXNoKGZyYW1lQXNzZXJ0aW9uKTtcblxuICAgICAgZnJhbWVBc3NlcnRpb25BZGRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lQXNzZXJ0aW9uQWRkZWQ7XG4gIH1cblxuICBhZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZUFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gdGhpcy5tZXRhdmFyaWFibGVzLnNvbWUoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZU1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIW1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHRoaXMubWV0YXZhcmlhYmxlcy5wdXNoKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZUFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlQWRkZWQ7XG4gIH1cblxuICBhZGRNZXRhcHJvb2ZTdGVwKG1ldGFwcm9vZlN0ZXApIHtcbiAgICB0aGlzLm1ldGFwcm9vZlN0ZXBzLnB1c2gobWV0YXByb29mU3RlcCk7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGlmICghbWV0YXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcE1hdGNoZXNNZXRhc3RhdGVtZW50ID0gdGhpcy5tZXRhcHJvb2ZTdGVwcy5zb21lKChtZXRhcHJvb2ZTdGVwKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb29mU3RlcE1hdGNoZXNNZXRhc3RhdGVtZW50ID0gbWV0YXByb29mU3RlcC5tYXRjaChtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgaWYgKHByb29mU3RlcE1hdGNoZXNNZXRhc3RhdGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IHByb29mU3RlcE1hdGNoZXNNZXRhc3RhdGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICBpZiAoIW1ldGFzdGF0ZW1lbnRNYXRjaGVzKSB7XG4gICAgICBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IHRoaXMuY29udGV4dC5tYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50TWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZmluZEZyYW1lQXNzZXJ0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZUFzc2VydGlvbnMgPSB0aGlzLmdldEZyYW1lQXNzZXJ0aW9ucygpLFxuICAgICAgICAgIGZyYW1lQXNzZXJ0aW9uID0gZnJhbWVBc3NlcnRpb25zLmZpbmQoKGZyYW1lQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVNYXRjaGVzID0gZnJhbWVBc3NlcnRpb24ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGZyYW1lQXNzZXJ0aW9uO1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzRnJhbWVBc3NlcnRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZUFzc2VydGlvbiA9IHRoaXMuZmluZEZyYW1lQXNzZXJ0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGZyYW1lQXNzZXJ0aW9uUHJlc2VudCA9IChmcmFtZUFzc2VydGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gZnJhbWVBc3NlcnRpb25QcmVzZW50O1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsTWV0YUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGZyYW1lQXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIGxvY2FsTWV0YUNvbnRleHQgPSBuZXcgTG9jYWxNZXRhQ29udGV4dChjb250ZXh0LCBtZXRhdmFyaWFibGVzLCBtZXRhcHJvb2ZTdGVwcywgZnJhbWVBc3NlcnRpb25zKTtcblxuICAgIHJldHVybiBsb2NhbE1ldGFDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2NhbE1ldGFDb250ZXh0KGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbG9jYWxNZXRhQ29udGV4dCwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGZyYW1lQXNzZXJ0aW9ucyA9IFtdO1xuXG4gICAgbG9jYWxNZXRhQ29udGV4dCA9IG5ldyBMb2NhbE1ldGFDb250ZXh0KGNvbnRleHQsIG1ldGF2YXJpYWJsZXMsIG1ldGFwcm9vZlN0ZXBzLCBmcmFtZUFzc2VydGlvbnMpOyAgLy8vXG5cbiAgICByZXR1cm4gbG9jYWxNZXRhQ29udGV4dDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKExvY2FsTWV0YUNvbnRleHQucHJvdG90eXBlLCBjb250ZXh0TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxNZXRhQ29udGV4dDsiXSwibmFtZXMiOlsiTG9jYWxNZXRhQ29udGV4dCIsImNvbnRleHQiLCJtZXRhdmFyaWFibGVzIiwibWV0YXByb29mU3RlcHMiLCJmcmFtZUFzc2VydGlvbnMiLCJnZXRDb250ZXh0IiwiZ2V0TWV0YXZhcmlhYmxlcyIsImdldE1ldGFwcm9vZlN0ZXBzIiwiZ2V0RnJhbWVBc3NlcnRpb25zIiwiZ2V0VmFyaWFibGVzIiwiZ2V0UHJvb2ZTdGVwcyIsImdldEVxdWl2YWxlbmNlcyIsImdldFRlcm1UeXBlIiwidGVybSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsImdldExhc3RNZXRhcHJvb2ZTdGVwIiwibGFzdE1ldGFwcm9vZlN0ZXAiLCJtZXRhcHJvb2ZTdGVwc0xlbmd0aCIsImxlbmd0aCIsImxhc3QiLCJhZGRGcmFtZUFzc2VydGlvbiIsImZyYW1lQXNzZXJ0aW9uIiwiZnJhbWVBc3NlcnRpb25BZGRlZCIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZnJhbWVBc3NlcnRpb25QcmVzZW50IiwiaXNGcmFtZUFzc2VydGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJwdXNoIiwiYWRkTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlQWRkZWQiLCJub2RlIiwiZ2V0TmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJzb21lIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJhZGRNZXRhcHJvb2ZTdGVwIiwibWV0YXByb29mU3RlcCIsIm1hdGNoTWV0YXN0YXRlbWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudE1hdGNoZXMiLCJwcm9vZlN0ZXBNYXRjaGVzTWV0YXN0YXRlbWVudCIsIm1hdGNoIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZXMiLCJ2YXJpYWJsZSIsImZpbmQiLCJtYXRjaGVzIiwiZmluZEZyYW1lQXNzZXJ0aW9uQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVByZXNlbnQiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwibG9jYWxNZXRhQ29udGV4dCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImZyb21GaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwiZnJvbUxvY2FsTWV0YUNvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJjb250ZXh0TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErTkE7OztlQUFBOzs7OERBN04wQjtxQkFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBQSxBQUFNQSxpQ0FBRCxBQUFMO2FBQU1BLGlCQUNRQyxPQUFPLEVBQUVDLGFBQWEsRUFBRUMsY0FBYyxFQUFFQyxlQUFlO2dDQUQvREo7UUFFRixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTs7a0JBTHJCSjs7WUFRSkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixPQUFPO1lBQ3JCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlKLGdCQUFnQixJQUFJLENBQUNELE9BQU8sQ0FBQ0ssZ0JBQWdCO2dCQUVqREosZ0JBQWdCLEFBQ2QscUJBQUcsSUFBSSxDQUFDQSxhQUFhLFNBQ3JCLHFCQUFHQTtnQkFHTCxPQUFPQTtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlKLGlCQUFpQixJQUFJLENBQUNGLE9BQU8sQ0FBQ00saUJBQWlCO2dCQUVuREosaUJBQWlCLEFBQ2YscUJBQUdBLHVCQUNILHFCQUFHLElBQUksQ0FBQ0EsY0FBYztnQkFHeEIsT0FBT0E7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJSixrQkFBa0IsSUFBSSxDQUFDSCxPQUFPLENBQUNPLGtCQUFrQjtnQkFFckRKLGtCQUFrQixBQUNoQixxQkFBRyxJQUFJLENBQUNBLGVBQWUsU0FDdkIscUJBQUdBO2dCQUdMLE9B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