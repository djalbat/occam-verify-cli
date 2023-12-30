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