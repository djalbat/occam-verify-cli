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
var _file = /*#__PURE__*/ _interop_require_default(require("../mixins/file"));
var _logging = /*#__PURE__*/ _interop_require_default(require("../mixins/logging"));
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
            key: "getMetavariables",
            value: function getMetavariables() {
                var metavariables = this.context.getMetavariables();
                metavariables = _to_consumable_array(metavariables).concat([
                    this.metavariables
                ]);
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
                var metavariableName = metavariable.getName();
                (0, _array.filter)(this.metavariables, function(metavariable) {
                    var name = metavariable.getName(), nameMetavariableName = name === metavariableName;
                    if (!nameMetavariableName) {
                        return true;
                    }
                });
                this.metavariables.push(metavariable);
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
            key: "findMetavariableByMetavariableName",
            value: function findMetavariableByMetavariableName(metavariableName) {
                var name = metavariableName, metavariables = this.getMetavariables(), metavariable = metavariables.find(function(metavariable) {
                    var matches = metavariable.matchName(name);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return metavariable;
            }
        },
        {
            key: "isMetavariablePresentByMetavariableName",
            value: function isMetavariablePresentByMetavariableName(metavariableName) {
                var metavariable = this.findMetavariableByMetavariableName(metavariableName), metavariablePresent = metavariable !== null;
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
Object.assign(LocalMetaContext.prototype, _file.default);
Object.assign(LocalMetaContext.prototype, _logging.default);
var _default = LocalMetaContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsTWV0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZpbGVNaXhpbnMgZnJvbSBcIi4uL21peGlucy9maWxlXCI7XG5pbXBvcnQgbG9nZ2luZ01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2xvZ2dpbmdcIjtcblxuaW1wb3J0IHsgbGFzdCwgZmlsdGVyIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBMb2NhbE1ldGFDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbWV0YXZhcmlhYmxlcywgbWV0YXByb29mU3RlcHMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXM7XG4gICAgdGhpcy5tZXRhcHJvb2ZTdGVwcyA9IG1ldGFwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlcyA9IHRoaXMuY29udGV4dC5nZXRNZXRhdmFyaWFibGVzKCk7XG5cbiAgICBtZXRhdmFyaWFibGVzID0gWyAvLy9cbiAgICAgIC4uLm1ldGF2YXJpYWJsZXMsXG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZXNcbiAgICBdXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldE1ldGFwcm9vZlN0ZXBzKCkge1xuICAgIGxldCBtZXRhcHJvb2ZTdGVwcyA9IHRoaXMuY29udGV4dC5nZXRNZXRhcHJvb2ZTdGVwcygpO1xuXG4gICAgbWV0YXByb29mU3RlcHMgPSBbICAvLy9cbiAgICAgIC4uLm1ldGFwcm9vZlN0ZXBzLFxuICAgICAgLi4udGhpcy5tZXRhcHJvb2ZTdGVwc1xuICAgIF07XG5cbiAgICByZXR1cm4gbWV0YXByb29mU3RlcHM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7IH1cblxuICBnZXRMYXN0TWV0YXByb29mU3RlcCgpIHtcbiAgICBsZXQgbGFzdE1ldGFwcm9vZlN0ZXAgPSBudWxsO1xuXG4gICAgY29uc3QgbWV0YXByb29mU3RlcHNMZW5ndGggPSB0aGlzLm1ldGFwcm9vZlN0ZXBzLmxlbmd0aDtcblxuICAgIGlmIChtZXRhcHJvb2ZTdGVwc0xlbmd0aCA+IDApIHtcbiAgICAgIGxhc3RNZXRhcHJvb2ZTdGVwID0gbGFzdCh0aGlzLm1ldGFwcm9vZlN0ZXBzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdE1ldGFwcm9vZlN0ZXA7XG4gIH1cblxuICBhZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICBmaWx0ZXIodGhpcy5tZXRhdmFyaWFibGVzLCAobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIG5hbWVNZXRhdmFyaWFibGVOYW1lID0gKG5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAoIW5hbWVNZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcbiAgfVxuXG4gIGFkZE1ldGFwcm9vZlN0ZXAobWV0YXByb29mU3RlcCkge1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMucHVzaChtZXRhcHJvb2ZTdGVwKTtcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKCFtZXRhc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQgPSB0aGlzLm1ldGFwcm9vZlN0ZXBzLnNvbWUoKG1ldGFwcm9vZlN0ZXApID0+IHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQgPSBtZXRhcHJvb2ZTdGVwLm1hdGNoKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBpZiAocHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gcHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIGlmICghbWV0YXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gdGhpcy5jb250ZXh0Lm1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRNYXRjaGVzO1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IG1ldGF2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGxvY2FsTWV0YUNvbnRleHQgPSBuZXcgTG9jYWxNZXRhQ29udGV4dChjb250ZXh0LCBtZXRhdmFyaWFibGVzLCBtZXRhcHJvb2ZTdGVwcyk7XG5cbiAgICByZXR1cm4gbG9jYWxNZXRhQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9jYWxNZXRhQ29udGV4dChsb2NhbE1ldGFDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IGxvY2FsTWV0YUNvbnRleHQsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbWV0YXByb29mU3RlcHMgPSBbXTtcblxuICAgIGxvY2FsTWV0YUNvbnRleHQgPSBuZXcgTG9jYWxNZXRhQ29udGV4dChjb250ZXh0LCBtZXRhdmFyaWFibGVzLCBtZXRhcHJvb2ZTdGVwcyk7ICAvLy9cblxuICAgIHJldHVybiBsb2NhbE1ldGFDb250ZXh0O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTG9jYWxNZXRhQ29udGV4dC5wcm90b3R5cGUsIGZpbGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihMb2NhbE1ldGFDb250ZXh0LnByb3RvdHlwZSwgbG9nZ2luZ01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsTWV0YUNvbnRleHQ7Il0sIm5hbWVzIjpbIkxvY2FsTWV0YUNvbnRleHQiLCJjb250ZXh0IiwibWV0YXZhcmlhYmxlcyIsIm1ldGFwcm9vZlN0ZXBzIiwiZ2V0Q29udGV4dCIsImdldE1ldGF2YXJpYWJsZXMiLCJnZXRNZXRhcHJvb2ZTdGVwcyIsImdldFZhcmlhYmxlcyIsImdldExhc3RNZXRhcHJvb2ZTdGVwIiwibGFzdE1ldGFwcm9vZlN0ZXAiLCJtZXRhcHJvb2ZTdGVwc0xlbmd0aCIsImxlbmd0aCIsImxhc3QiLCJhZGRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsImZpbHRlciIsIm5hbWUiLCJuYW1lTWV0YXZhcmlhYmxlTmFtZSIsInB1c2giLCJhZGRNZXRhcHJvb2ZTdGVwIiwibWV0YXByb29mU3RlcCIsIm1hdGNoTWV0YXN0YXRlbWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudE1hdGNoZXMiLCJwcm9vZlN0ZXBNYXRjaGVzTWV0YXN0YXRlbWVudCIsInNvbWUiLCJtYXRjaCIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kIiwibWF0Y2hlcyIsIm1hdGNoTmFtZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJmcm9tRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImxvY2FsTWV0YUNvbnRleHQiLCJmcm9tTG9jYWxNZXRhQ29udGV4dCIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImZpbGVNaXhpbnMiLCJsb2dnaW5nTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEySUE7OztlQUFB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