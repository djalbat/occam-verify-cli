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
var MetaproofContext = /*#__PURE__*/ function() {
    function MetaproofContext(context, metavariables, metaproofSteps) {
        _classCallCheck(this, MetaproofContext);
        this.context = context;
        this.metavariables = metavariables;
        this.metaproofSteps = metaproofSteps;
    }
    _createClass(MetaproofContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                return this.context.getVariables();
            }
        },
        {
            key: "getMetavariables",
            value: function getMetavariables() {
                var metavariables = [];
                (0, _array.push)(metavariables, this.metavariables);
                var contextMetavariables = this.context.getMetavariables();
                (0, _array.push)(metavariables, contextMetavariables);
                return metavariables;
            }
        },
        {
            key: "getMetaproofSteps",
            value: function getMetaproofSteps() {
                var metaproofSteps = this.context.getMetaproofSteps();
                metaproofSteps = _toConsumableArray(metaproofSteps).concat(_toConsumableArray(this.metaproofSteps));
                return metaproofSteps;
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
            key: "isMetavariablePresentByVariableName",
            value: function isMetavariablePresentByVariableName(metavariableName) {
                var metavariable = this.findMetavariableByMetavariableName(metavariableName), metavariablePresent = metavariable !== null;
                return metavariablePresent;
            }
        }
    ], [
        {
            key: "fromFileContext",
            value: function fromFileContext(fileContext) {
                var context = fileContext, metavariables = [], metaproofSteps = [], metaproofContext = new MetaproofContext(context, metavariables, metaproofSteps);
                return metaproofContext;
            }
        },
        {
            key: "fromMetaproofContext",
            value: function fromMetaproofContext(metaproofContext) {
                var context = metaproofContext, metavariables = [], metaproofSteps = [];
                metaproofContext = new MetaproofContext(context, metavariables, metaproofSteps); ///
                return metaproofContext;
            }
        }
    ]);
    return MetaproofContext;
}();
Object.assign(MetaproofContext.prototype, _file.default);
Object.assign(MetaproofContext.prototype, _logging.default);
var _default = MetaproofContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L21ldGFwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGZpbGVNaXhpbnMgZnJvbSBcIi4uL21peGlucy9maWxlXCI7XG5pbXBvcnQgbG9nZ2luZ01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2xvZ2dpbmdcIjtcblxuaW1wb3J0IHsgcHVzaCwgbGFzdCwgZmlsdGVyIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBNZXRhcHJvb2ZDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbWV0YXZhcmlhYmxlcywgbWV0YXByb29mU3RlcHMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXM7XG4gICAgdGhpcy5tZXRhcHJvb2ZTdGVwcyA9IG1ldGFwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFZhcmlhYmxlcygpOyB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gW107XG5cbiAgICBwdXNoKG1ldGF2YXJpYWJsZXMsIHRoaXMubWV0YXZhcmlhYmxlcyk7XG5cbiAgICBjb25zdCBjb250ZXh0TWV0YXZhcmlhYmxlcyA9IHRoaXMuY29udGV4dC5nZXRNZXRhdmFyaWFibGVzKCk7XG5cbiAgICBwdXNoKG1ldGF2YXJpYWJsZXMsIGNvbnRleHRNZXRhdmFyaWFibGVzKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TWV0YXByb29mU3RlcHMoKSB7XG4gICAgbGV0IG1ldGFwcm9vZlN0ZXBzID0gdGhpcy5jb250ZXh0LmdldE1ldGFwcm9vZlN0ZXBzKCk7XG5cbiAgICBtZXRhcHJvb2ZTdGVwcyA9IFsgIC8vL1xuICAgICAgLi4ubWV0YXByb29mU3RlcHMsXG4gICAgICAuLi50aGlzLm1ldGFwcm9vZlN0ZXBzXG4gICAgXTtcblxuICAgIHJldHVybiBtZXRhcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldExhc3RNZXRhcHJvb2ZTdGVwKCkge1xuICAgIGxldCBsYXN0TWV0YXByb29mU3RlcCA9IG51bGw7XG5cbiAgICBjb25zdCBtZXRhcHJvb2ZTdGVwc0xlbmd0aCA9IHRoaXMubWV0YXByb29mU3RlcHMubGVuZ3RoO1xuXG4gICAgaWYgKG1ldGFwcm9vZlN0ZXBzTGVuZ3RoID4gMCkge1xuICAgICAgbGFzdE1ldGFwcm9vZlN0ZXAgPSBsYXN0KHRoaXMubWV0YXByb29mU3RlcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0TWV0YXByb29mU3RlcDtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIGZpbHRlcih0aGlzLm1ldGF2YXJpYWJsZXMsIChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbmFtZU1ldGF2YXJpYWJsZU5hbWUgPSAobmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmICghbmFtZU1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuICB9XG5cbiAgYWRkTWV0YXByb29mU3RlcChtZXRhcHJvb2ZTdGVwKSB7XG4gICAgdGhpcy5tZXRhcHJvb2ZTdGVwcy5wdXNoKG1ldGFwcm9vZlN0ZXApO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAoIW1ldGFzdGF0ZW1lbnRNYXRjaGVzKSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBNYXRjaGVzTWV0YXN0YXRlbWVudCA9IHRoaXMubWV0YXByb29mU3RlcHMuc29tZSgobWV0YXByb29mU3RlcCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9vZlN0ZXBNYXRjaGVzTWV0YXN0YXRlbWVudCA9IG1ldGFwcm9vZlN0ZXAubWF0Y2gobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIGlmIChwcm9vZlN0ZXBNYXRjaGVzTWV0YXN0YXRlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBwcm9vZlN0ZXBNYXRjaGVzTWV0YXN0YXRlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKCFtZXRhc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSB0aGlzLmNvbnRleHQubWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE1hdGNoZXM7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbWV0YXByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBtZXRhcHJvb2ZDb250ZXh0ID0gbmV3IE1ldGFwcm9vZkNvbnRleHQoY29udGV4dCwgbWV0YXZhcmlhYmxlcywgbWV0YXByb29mU3RlcHMpO1xuXG4gICAgcmV0dXJuIG1ldGFwcm9vZkNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFwcm9vZkNvbnRleHQobWV0YXByb29mQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBtZXRhcHJvb2ZDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIG1ldGFwcm9vZlN0ZXBzID0gW107XG5cbiAgICBtZXRhcHJvb2ZDb250ZXh0ID0gbmV3IE1ldGFwcm9vZkNvbnRleHQoY29udGV4dCwgbWV0YXZhcmlhYmxlcywgbWV0YXByb29mU3RlcHMpOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXByb29mQ29udGV4dDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKE1ldGFwcm9vZkNvbnRleHQucHJvdG90eXBlLCBmaWxlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oTWV0YXByb29mQ29udGV4dC5wcm90b3R5cGUsIGxvZ2dpbmdNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBNZXRhcHJvb2ZDb250ZXh0OyJdLCJuYW1lcyI6WyJNZXRhcHJvb2ZDb250ZXh0IiwiY29udGV4dCIsIm1ldGF2YXJpYWJsZXMiLCJtZXRhcHJvb2ZTdGVwcyIsImdldENvbnRleHQiLCJnZXRWYXJpYWJsZXMiLCJnZXRNZXRhdmFyaWFibGVzIiwicHVzaCIsImNvbnRleHRNZXRhdmFyaWFibGVzIiwiZ2V0TWV0YXByb29mU3RlcHMiLCJnZXRMYXN0TWV0YXByb29mU3RlcCIsImxhc3RNZXRhcHJvb2ZTdGVwIiwibWV0YXByb29mU3RlcHNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0IiwiYWRkTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJmaWx0ZXIiLCJuYW1lIiwibmFtZU1ldGF2YXJpYWJsZU5hbWUiLCJhZGRNZXRhcHJvb2ZTdGVwIiwibWV0YXByb29mU3RlcCIsIm1hdGNoTWV0YXN0YXRlbWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudE1hdGNoZXMiLCJwcm9vZlN0ZXBNYXRjaGVzTWV0YXN0YXRlbWVudCIsInNvbWUiLCJtYXRjaCIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kIiwibWF0Y2hlcyIsIm1hdGNoTmFtZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImZyb21GaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwibWV0YXByb29mQ29udGV4dCIsImZyb21NZXRhcHJvb2ZDb250ZXh0IiwiT2JqZWN0IiwiYXNzaWduIiwi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