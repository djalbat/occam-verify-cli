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
    function LocalMetaContext(context, metavariables, metaproofSteps) {
        _class_call_check(this, LocalMetaContext);
        this.context = context;
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
            key: "getTermType",
            value: function getTermType(term) {
                var termType = term.getType();
                return termType;
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
                metaproofSteps = _to_consumable_array(this.metaproofSteps).concat(_to_consumable_array(metaproofSteps));
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
            key: "findMetavariableByMetavariableNode",
            value: function findMetavariableByMetavariableNode(metavariableNode) {
                var node = metavariableNode, metavariables = this.getMetavariables(), metavariable = metavariables.find(function(metavariable) {
                    var matches = metavariable.matchNode(node);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return metavariable;
            }
        },
        {
            key: "isMetavariablePresentByMetavariableNode",
            value: function isMetavariablePresentByMetavariableNode(metavariableNode) {
                var metavariable = this.findMetavariableByMetavariableNode(metavariableNode), metavariablePresent = metavariable !== null;
                return metavariablePresent;
            }
        }
    ], [
        {
            key: "fromFileContext",
            value: function fromFileContext(fileContext) {
                var context = fileContext, metavariables = [], metaproofSteps = [], localMetaContext = new LocalMetaContext(context, metavariables, metaproofSteps);
                return localMetaContext;
            }
        },
        {
            key: "fromLocalMetaContext",
            value: function fromLocalMetaContext(localMetaContext) {
                var context = localMetaContext, metavariables = [], metaproofSteps = [];
                localMetaContext = new LocalMetaContext(context, metavariables, metaproofSteps); ///
                return localMetaContext;
            }
        }
    ]);
    return LocalMetaContext;
}();
Object.assign(LocalMetaContext.prototype, _context.default);
var _default = LocalMetaContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsTWV0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGNvbnRleHRNaXhpbnMgZnJvbSBcIi4uL21peGlucy9jb250ZXh0XCI7XG5cbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNsYXNzIExvY2FsTWV0YUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBtZXRhdmFyaWFibGVzLCBtZXRhcHJvb2ZTdGVwcykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgICB0aGlzLm1ldGFwcm9vZlN0ZXBzID0gbWV0YXByb29mU3RlcHM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRUZXJtVHlwZSh0ZXJtKSB7XG4gICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIHJldHVybiB0ZXJtVHlwZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0TWV0YXZhcmlhYmxlcygpO1xuXG4gICAgbWV0YXZhcmlhYmxlcyA9IFsgLy8vXG4gICAgICAuLi50aGlzLm1ldGF2YXJpYWJsZXMsXG4gICAgICAuLi5tZXRhdmFyaWFibGVzLFxuICAgIF1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TWV0YXByb29mU3RlcHMoKSB7XG4gICAgbGV0IG1ldGFwcm9vZlN0ZXBzID0gdGhpcy5jb250ZXh0LmdldE1ldGFwcm9vZlN0ZXBzKCk7XG5cbiAgICBtZXRhcHJvb2ZTdGVwcyA9IFsgIC8vL1xuICAgICAgLi4udGhpcy5tZXRhcHJvb2ZTdGVwcyxcbiAgICAgIC4uLm1ldGFwcm9vZlN0ZXBzXG4gICAgXTtcblxuICAgIHJldHVybiBtZXRhcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRWYXJpYWJsZXMoKTsgfVxuXG4gIGdldExhc3RNZXRhcHJvb2ZTdGVwKCkge1xuICAgIGxldCBsYXN0TWV0YXByb29mU3RlcCA9IG51bGw7XG5cbiAgICBjb25zdCBtZXRhcHJvb2ZTdGVwc0xlbmd0aCA9IHRoaXMubWV0YXByb29mU3RlcHMubGVuZ3RoO1xuXG4gICAgaWYgKG1ldGFwcm9vZlN0ZXBzTGVuZ3RoID4gMCkge1xuICAgICAgbGFzdE1ldGFwcm9vZlN0ZXAgPSBsYXN0KHRoaXMubWV0YXByb29mU3RlcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0TWV0YXByb29mU3RlcDtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSB0aGlzLm1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghbWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIGFkZE1ldGFwcm9vZlN0ZXAobWV0YXByb29mU3RlcCkge1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMucHVzaChtZXRhcHJvb2ZTdGVwKTtcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKCFtZXRhc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQgPSB0aGlzLm1ldGFwcm9vZlN0ZXBzLnNvbWUoKG1ldGFwcm9vZlN0ZXApID0+IHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQgPSBtZXRhcHJvb2ZTdGVwLm1hdGNoKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBpZiAocHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gcHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIGlmICghbWV0YXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gdGhpcy5jb250ZXh0Lm1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRNYXRjaGVzO1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGxvY2FsTWV0YUNvbnRleHQgPSBuZXcgTG9jYWxNZXRhQ29udGV4dChjb250ZXh0LCBtZXRhdmFyaWFibGVzLCBtZXRhcHJvb2ZTdGVwcyk7XG5cbiAgICByZXR1cm4gbG9jYWxNZXRhQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9jYWxNZXRhQ29udGV4dChsb2NhbE1ldGFDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IGxvY2FsTWV0YUNvbnRleHQsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbWV0YXByb29mU3RlcHMgPSBbXTtcblxuICAgIGxvY2FsTWV0YUNvbnRleHQgPSBuZXcgTG9jYWxNZXRhQ29udGV4dChjb250ZXh0LCBtZXRhdmFyaWFibGVzLCBtZXRhcHJvb2ZTdGVwcyk7ICAvLy9cblxuICAgIHJldHVybiBsb2NhbE1ldGFDb250ZXh0O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTG9jYWxNZXRhQ29udGV4dC5wcm90b3R5cGUsIGNvbnRleHRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBMb2NhbE1ldGFDb250ZXh0OyJdLCJuYW1lcyI6WyJMb2NhbE1ldGFDb250ZXh0IiwiY29udGV4dCIsIm1ldGF2YXJpYWJsZXMiLCJtZXRhcHJvb2ZTdGVwcyIsImdldENvbnRleHQiLCJnZXRUZXJtVHlwZSIsInRlcm0iLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJnZXRNZXRhdmFyaWFibGVzIiwiZ2V0TWV0YXByb29mU3RlcHMiLCJnZXRWYXJpYWJsZXMiLCJnZXRMYXN0TWV0YXByb29mU3RlcCIsImxhc3RNZXRhcHJvb2ZTdGVwIiwibWV0YXByb29mU3RlcHNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0IiwiYWRkTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlQWRkZWQiLCJub2RlIiwiZ2V0TmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJzb21lIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJwdXNoIiwiYWRkTWV0YXByb29mU3RlcCIsIm1ldGFwcm9vZlN0ZXAiLCJtYXRjaE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnRNYXRjaGVzIiwicHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQiLCJtYXRjaCIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZmluZCIsIm1hdGNoZXMiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImxvY2FsTWV0YUNvbnRleHQiLCJmcm9tTG9jYWxNZXRhQ29udGV4dCIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImNvbnRleHRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFKQTs7O2VBQUE7Ozs4REFuSjBCO3FCQUVMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFBLEFBQU1BLGlDQUFELEFBQUw7YUFBTUEsaUJBQ1FDLE9BQU8sRUFBRUMsYUFBYSxFQUFFQyxjQUFjO2dDQUQ5Q0g7UUFFRixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBOztrQkFKcEJIOztZQU9KSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUMsSUFBSTtnQkFDZCxJQUFNQyxXQUFXRCxLQUFLRSxPQUFPO2dCQUU3QixPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlQLGdCQUFnQixJQUFJLENBQUNELE9BQU8sQ0FBQ1EsZ0JBQWdCO2dCQUVqRFAsZ0JBQWdCLEFBQ2QscUJBQUcsSUFBSSxDQUFDQSxhQUFhLFNBQ3JCLHFCQUFHQTtnQkFHTCxPQUFPQTtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlQLGlCQUFpQixJQUFJLENBQUNGLE9BQU8sQ0FBQ1MsaUJBQWlCO2dCQUVuRFAsaUJBQWlCLEFBQ2YscUJBQUcsSUFBSSxDQUFDQSxjQUFjLFNBQ3RCLHFCQUFHQTtnQkFHTCxPQUFPQTtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFpQixPQUFPLElBQUksQ0FBQ1YsT0FBTyxDQUFDVSxZQUFZO1lBQUk7OztZQUVyREMsS0FB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