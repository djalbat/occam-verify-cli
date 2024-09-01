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
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _array = require("../utilities/array");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
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
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var LocalMetaContext = /*#__PURE__*/ function(LocalContext) {
    _inherits(LocalMetaContext, LocalContext);
    var _super = _create_super(LocalMetaContext);
    function LocalMetaContext(context, variables, proofSteps, equivalences, metavariables, metaproofSteps, frameAssertions) {
        _class_call_check(this, LocalMetaContext);
        var _this;
        _this = _super.call(this, context, variables, proofSteps, equivalences);
        _this.metavariables = metavariables;
        _this.metaproofSteps = metaproofSteps;
        _this.frameAssertions = frameAssertions;
        return _this;
    }
    _create_class(LocalMetaContext, [
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
                var metaproofSteps = this.getMetaproofSteps();
                metaproofSteps = (0, _array.reverse)(metaproofSteps); ///
                var metastatementMatches = metaproofSteps.some(function(metaproofStep) {
                    var proofStepMatchesMetastatement = metaproofStep.matchMetastatement(metastatementNode);
                    if (proofStepMatchesMetastatement) {
                        return true;
                    }
                });
                return metastatementMatches;
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
            key: "isMetavariablePresentByMetavariableNode",
            value: function isMetavariablePresentByMetavariableNode(metavariableNode, localMetaContext) {
                var metavariable = this.findMetavariableByMetavariableNode(metavariableNode, localMetaContext), metavariablePresent = metavariable !== null;
                return metavariablePresent;
            }
        },
        {
            key: "isFrameAssertionPresentByMetavariableNode",
            value: function isFrameAssertionPresentByMetavariableNode(metavariableNode) {
                var frameAssertion = this.findFrameAssertionByMetavariableNode(metavariableNode), frameAssertionPresent = frameAssertion !== null;
                return frameAssertionPresent;
            }
        }
    ], [
        {
            key: "fromFileContext",
            value: function fromFileContext(fileContext) {
                var context = fileContext, variables = [], proofSteps = [], equivalences = [], metavariables = [], metaproofSteps = [], frameAssertions = [], localMetaContext = new LocalMetaContext(context, variables, proofSteps, equivalences, metavariables, metaproofSteps, frameAssertions);
                return localMetaContext;
            }
        },
        {
            key: "fromLocalMetaContext",
            value: function fromLocalMetaContext(localMetaContext) {
                var context = localMetaContext, variables = [], proofSteps = [], equivalences = [], metavariables = [], metaproofSteps = [], frameAssertions = [];
                localMetaContext = new LocalMetaContext(context, variables, proofSteps, equivalences, metavariables, metaproofSteps, frameAssertions); ///
                return localMetaContext;
            }
        }
    ]);
    return LocalMetaContext;
}(_local.default);
var _default = LocalMetaContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsTWV0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBsYXN0LCByZXZlcnNlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBMb2NhbE1ldGFDb250ZXh0IGV4dGVuZHMgTG9jYWxDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBlcXVpdmFsZW5jZXMsIG1ldGF2YXJpYWJsZXMsIG1ldGFwcm9vZlN0ZXBzLCBmcmFtZUFzc2VydGlvbnMpIHtcbiAgICBzdXBlcihjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGVxdWl2YWxlbmNlcyk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMgPSBtZXRhcHJvb2ZTdGVwcztcbiAgICB0aGlzLmZyYW1lQXNzZXJ0aW9ucyA9IGZyYW1lQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0TWV0YXZhcmlhYmxlcygpO1xuXG4gICAgbWV0YXZhcmlhYmxlcyA9IFsgLy8vXG4gICAgICAuLi50aGlzLm1ldGF2YXJpYWJsZXMsXG4gICAgICAuLi5tZXRhdmFyaWFibGVzXG4gICAgXVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRNZXRhcHJvb2ZTdGVwcygpIHtcbiAgICBsZXQgbWV0YXByb29mU3RlcHMgPSB0aGlzLmNvbnRleHQuZ2V0TWV0YXByb29mU3RlcHMoKTtcblxuICAgIG1ldGFwcm9vZlN0ZXBzID0gWyAgLy8vXG4gICAgICAuLi5tZXRhcHJvb2ZTdGVwcyxcbiAgICAgIC4uLnRoaXMubWV0YXByb29mU3RlcHNcbiAgICBdO1xuXG4gICAgcmV0dXJuIG1ldGFwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0RnJhbWVBc3NlcnRpb25zKCkge1xuICAgIGxldCBmcmFtZUFzc2VydGlvbnMgPSB0aGlzLmNvbnRleHQuZ2V0RnJhbWVBc3NlcnRpb25zKCk7XG5cbiAgICBmcmFtZUFzc2VydGlvbnMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5mcmFtZUFzc2VydGlvbnMsXG4gICAgICAuLi5mcmFtZUFzc2VydGlvbnNcbiAgICBdXG5cbiAgICByZXR1cm4gZnJhbWVBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0TGFzdE1ldGFwcm9vZlN0ZXAoKSB7XG4gICAgbGV0IGxhc3RNZXRhcHJvb2ZTdGVwID0gbnVsbDtcblxuICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzTGVuZ3RoID0gdGhpcy5tZXRhcHJvb2ZTdGVwcy5sZW5ndGg7XG5cbiAgICBpZiAobWV0YXByb29mU3RlcHNMZW5ndGggPiAwKSB7XG4gICAgICBsYXN0TWV0YXByb29mU3RlcCA9IGxhc3QodGhpcy5tZXRhcHJvb2ZTdGVwcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RNZXRhcHJvb2ZTdGVwO1xuICB9XG5cbiAgYWRkRnJhbWVBc3NlcnRpb24oZnJhbWVBc3NlcnRpb24pIHtcbiAgICBsZXQgZnJhbWVBc3NlcnRpb25BZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lQXNzZXJ0aW9uLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBmcmFtZUFzc2VydGlvblByZXNlbnQgPSB0aGlzLmlzRnJhbWVBc3NlcnRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKCFmcmFtZUFzc2VydGlvblByZXNlbnQpIHtcbiAgICAgIHRoaXMuZnJhbWVBc3NlcnRpb25zLnB1c2goZnJhbWVBc3NlcnRpb24pO1xuXG4gICAgICBmcmFtZUFzc2VydGlvbkFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVBc3NlcnRpb25BZGRlZDtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSB0aGlzLm1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghbWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIGFkZE1ldGFwcm9vZlN0ZXAobWV0YXByb29mU3RlcCkge1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMucHVzaChtZXRhcHJvb2ZTdGVwKTtcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtZXRhcHJvb2ZTdGVwcyA9IHRoaXMuZ2V0TWV0YXByb29mU3RlcHMoKTtcblxuICAgIG1ldGFwcm9vZlN0ZXBzID0gcmV2ZXJzZShtZXRhcHJvb2ZTdGVwcyk7IC8vL1xuXG4gICAgY29uc3QgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBtZXRhcHJvb2ZTdGVwcy5zb21lKChtZXRhcHJvb2ZTdGVwKSA9PiB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBNYXRjaGVzTWV0YXN0YXRlbWVudCA9IG1ldGFwcm9vZlN0ZXAubWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHByb29mU3RlcE1hdGNoZXNNZXRhc3RhdGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRNYXRjaGVzO1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRGcmFtZUFzc2VydGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgZnJhbWVBc3NlcnRpb25zID0gdGhpcy5nZXRGcmFtZUFzc2VydGlvbnMoKSxcbiAgICAgICAgICBmcmFtZUFzc2VydGlvbiA9IGZyYW1lQXNzZXJ0aW9ucy5maW5kKChmcmFtZUFzc2VydGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTWF0Y2hlcyA9IGZyYW1lQXNzZXJ0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBmcmFtZUFzc2VydGlvbjtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsTWV0YUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNGcmFtZUFzc2VydGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lQXNzZXJ0aW9uID0gdGhpcy5maW5kRnJhbWVBc3NlcnRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgZnJhbWVBc3NlcnRpb25QcmVzZW50ID0gKGZyYW1lQXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBmcmFtZUFzc2VydGlvblByZXNlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGZyYW1lQXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIGxvY2FsTWV0YUNvbnRleHQgPSBuZXcgTG9jYWxNZXRhQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGVxdWl2YWxlbmNlcywgbWV0YXZhcmlhYmxlcywgbWV0YXByb29mU3RlcHMsIGZyYW1lQXNzZXJ0aW9ucyk7XG5cbiAgICByZXR1cm4gbG9jYWxNZXRhQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9jYWxNZXRhQ29udGV4dChsb2NhbE1ldGFDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IGxvY2FsTWV0YUNvbnRleHQsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gW10sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIG1ldGFwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgZnJhbWVBc3NlcnRpb25zID0gW107XG5cbiAgICBsb2NhbE1ldGFDb250ZXh0ID0gbmV3IExvY2FsTWV0YUNvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBlcXVpdmFsZW5jZXMsIG1ldGF2YXJpYWJsZXMsIG1ldGFwcm9vZlN0ZXBzLCBmcmFtZUFzc2VydGlvbnMpOyAgLy8vXG5cbiAgICByZXR1cm4gbG9jYWxNZXRhQ29udGV4dDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhbE1ldGFDb250ZXh0OyJdLCJuYW1lcyI6WyJMb2NhbE1ldGFDb250ZXh0IiwiY29udGV4dCIsInZhcmlhYmxlcyIsInByb29mU3RlcHMiLCJlcXVpdmFsZW5jZXMiLCJtZXRhdmFyaWFibGVzIiwibWV0YXByb29mU3RlcHMiLCJmcmFtZUFzc2VydGlvbnMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZ2V0TWV0YXByb29mU3RlcHMiLCJnZXRGcmFtZUFzc2VydGlvbnMiLCJnZXRMYXN0TWV0YXByb29mU3RlcCIsImxhc3RNZXRhcHJvb2ZTdGVwIiwibWV0YXByb29mU3RlcHNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0IiwiYWRkRnJhbWVBc3NlcnRpb24iLCJmcmFtZUFzc2VydGlvbiIsImZyYW1lQXNzZXJ0aW9uQWRkZWQiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImZyYW1lQXNzZXJ0aW9uUHJlc2VudCIsImlzRnJhbWVBc3NlcnRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwicHVzaCIsImFkZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUFkZGVkIiwibm9kZSIsImdldE5hbWUiLCJtZXRhdmFyaWFibGVQcmVzZW50Iiwic29tZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiYWRkTWV0YXByb29mU3RlcCIsIm1ldGFwcm9vZlN0ZXAiLCJtYXRjaE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsInJldmVyc2UiLCJtZXRhc3RhdGVtZW50TWF0Y2hlcyIsInByb29mU3RlcE1hdGNoZXNNZXRhc3RhdGVtZW50IiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsImxvY2FsTWV0YUNvbnRleHQiLCJmaW5kIiwibWF0Y2hlcyIsImZpbmRGcmFtZUFzc2VydGlvbkJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImZyb21Mb2NhbE1ldGFDb250ZXh0IiwiTG9jYWxDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5TEE7OztlQUFBOzs7NERBdkx5QjtxQkFFSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBQSxBQUFNQSxpQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSxpQkFDUUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTtnQ0FEcEdQOztrQ0FFSUMsU0FBU0MsV0FBV0MsWUFBWUM7UUFFdEMsTUFBS0MsYUFBYSxHQUFHQTtRQUNyQixNQUFLQyxjQUFjLEdBQUdBO1FBQ3RCLE1BQUtDLGVBQWUsR0FBR0E7OztrQkFOckJQOztZQVNKUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUgsZ0JBQWdCLElBQUksQ0FBQ0osT0FBTyxDQUFDTyxnQkFBZ0I7Z0JBRWpESCxnQkFBZ0IsQUFDZCxxQkFBRyxJQUFJLENBQUNBLGFBQWEsU0FDckIscUJBQUdBO2dCQUdMLE9BQU9BO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUgsaUJBQWlCLElBQUksQ0FBQ0wsT0FBTyxDQUFDUSxpQkFBaUI7Z0JBRW5ESCxpQkFBaUIsQUFDZixxQkFBR0EsdUJBQ0gscUJBQUcsSUFBSSxDQUFDQSxjQUFjO2dCQUd4QixPQUFPQTtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlILGtCQUFrQixJQUFJLENBQUNOLE9BQU8sQ0FBQ1Msa0JBQWtCO2dCQUVyREgsa0JBQWtCLEFBQ2hCLHFCQUFHLElBQUksQ0FBQ0EsZUFBZSxTQUN2QixxQkFBR0E7Z0JBR0wsT0FBT0E7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxvQkFBb0I7Z0JBRXhCLElBQU1DLHVCQUF1QixJQUFJLENBQUNQLGNBQWMsQ0FBQ1EsTUFBTTtnQkFFdkQsSUFBSUQsdUJBQXVCLEdBQUc7b0JBQzVCRCxvQkFBb0JHLElBQUFBLFdBQUksRUFBQyxJQUFJLENBQUNULGNBQWM7Z0JBQzlDO2dCQUVBLE9BQU9NO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxjQUFjO2dCQUM5QixJQUFJQyxzQkFBc0I7Z0JBRTFCLElBQU1DLG1CQUFtQkYsZUFBZUcsbUJBQW1CLElBQ3JEQyx3QkFBd0IsSUFBSSxDQUFDQyx5Q0FBeUMsQ0FBQ0g7Z0JBRTdFLElBQUksQ0FBQ0UsdUJBQXVCO29CQUMxQixJQUFJLENBQUNkLGVBQWUsQ0FBQ2dCLElBQUksQ0FBQ047b0JBRTFCQyxzQkFBc0I7Z0JBQ3hCO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCQyxZQUFZO2dCQUMxQixJQUFJQyxvQkFBb0I7Z0JBRXhCLElBQU1DLE9BQU9GLGFBQWFHLE9BQU8sSUFDM0JDLHNCQUFzQixJQUFJLENBQUN4QixhQUFhLENBQUN5QixJQUFJLENBQUMsU0FBQ0w7b0JBQzdDLElBQU1NLGNBQWNOLGFBQWFPLFNBQVMsQ0FBQ0w7b0JBRTNDLElBQUlJLGFBQWE7d0JBQ2YsT0FBTztvQkFDVDtnQkFDRjtnQkFFTixJQUFJLENBQUNGLHFCQUFxQjtvQkFDeEIsSUFBSSxDQUFDeEIsYUFBYSxDQUFDa0IsSUFBSSxDQUFDRTtvQkFFeEJDLG9CQUFvQjtnQkFDdEI7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLGFBQWE7Z0JBQzVCLElBQUksQ0FBQzVCLGNBQWMsQ0FBQ2lCLElBQUksQ0FBQ1c7WUFDM0I7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxpQkFBaUI7Z0JBQ2xDLElBQUk5QixpQkFBaUIsSUFBSSxDQUFDRyxpQkFBaUI7Z0JBRTNDSCxpQkFBaUIrQixJQUFBQSxjQUFPLEVBQUMvQixpQkFBaUIsR0FBRztnQkFFN0MsSUFBTWdDLHVCQUF1QmhDLGVBQWV3QixJQUFJLENBQUMsU0FBQ0k7b0JBQ2hELElBQU1LLGdDQUFnQ0wsY0FBY0Msa0JBQWtCLENBQUNDO29CQUV2RSxJQUFJRywrQkFBK0I7d0JBQ2pDLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxtQ0FBbUNyQixnQkFBZ0IsRUFBRXNCLGdCQUFnQjtnQkFDbkUsSUFBTWQsT0FBT1Isa0JBQ1BkLGdCQUFnQixJQUFJLENBQUNHLGdCQUFnQixJQUNyQ2lCLGVBQWVwQixjQUFjcUMsSUFBSSxDQUFDLFNBQUNqQjtvQkFDakMsSUFBTWtCLFVBQVVsQixhQUFhTyxTQUFTLENBQUNMLE1BQU1jO29CQUU3QyxJQUFJRSxTQUFTO3dCQUNYLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFWixPQUFPbEI7WUFDVDs7O1lBRUFtQixLQUFBQTttQkFBQUEsU0FBQUEscUNBQXFDekIsZ0JBQWdCO2dCQUNuRCxJQUFNWixrQkFBa0IsSUFBSSxDQUFDRyxrQkFBa0IsSUFDekNPLGlCQUFpQlYsZ0JBQWdCbUMsSUFBSSxDQUFDLFNBQUN6QjtvQkFDckMsSUFBTTRCLHNCQUFzQjVCLGVBQWU2QixxQkFBcUIsQ0FBQzNCO29CQUVqRSxJQUFJMEIscUJBQXFCO3dCQUN2QixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRVosT0FBTzVCO1lBQ1Q7OztZQUVBOEIsS0FBQUE7bUJBQUFBLFNBQUFBLHdDQUF3QzVCLGdCQUFnQixFQUFFc0IsZ0JBQWdCO2dCQUN4RSxJQUFNaEIsZUFBZSxJQUFJLENBQUNlLGtDQUFrQyxDQUFDckIsa0JBQWtCc0IsbUJBQ3pFWixzQkFBdUJKLGlCQUFpQjtnQkFFOUMsT0FBT0k7WUFDVDs7O1lBRUFQLEtBQUFBO21CQUFBQSxTQUFBQSwwQ0FBMENILGdCQUFnQjtnQkFDeEQsSUFBTUYsaUJBQWlCLElBQUksQ0FBQzJCLG9DQUFvQyxDQUFDekIsbUJBQzNERSx3QkFBeUJKLG1CQUFtQjtnQkFFbEQsT0FBT0k7WUFDVDs7OztZQUVPMkIsS0FBQUE7bUJBQVAsU0FBT0EsZ0JBQWdCQyxXQUFXO2dCQUNoQyxJQUFNaEQsVUFBVWdELGFBQ1YvQyxZQUFZLEVBQUUsRUFDZEMsYUFBYSxFQUFFLEVBQ2ZDLGVBQWUsRUFBRSxFQUNqQkMsZ0JBQWdCLEVBQUUsRUFDbEJDLGlCQUFpQixFQUFFLEVBQ25CQyxrQkFBa0IsRUFBRSxFQUNwQmtDLG1CQUFtQixJQS9KdkJ6QyxpQkErSjRDQyxTQUFTQyxXQUFXQyxZQUFZQyxjQUFjQyxlQUFlQyxnQkFBZ0JDO2dCQUUzSCxPQUFPa0M7WUFDVDs7O1lBRU9TLEtBQUFBO21CQUFQLFNBQU9BLHFCQUFxQlQsZ0JBQWdCO2dCQUMxQyxJQUFNeEMsVUFBVXdDLGtCQUNWdkMsWUFBWSxFQUFFLEVBQ2RDLGFBQWEsRUFBRSxFQUNmQyxlQUFlLEVBQUUsRUFDakJDLGdCQUFnQixFQUFFLEVBQ2xCQyxpQkFBaUIsRUFBRSxFQUNuQkMsa0JBQWtCLEVBQUU7Z0JBRTFCa0MsbUJBQW1CLElBN0tqQnpDLGlCQTZLc0NDLFNBQVNDLFdBQVdDLFlBQVlDLGNBQWNDLGVBQWVDLGdCQUFnQkMsa0JBQW1CLEdBQUc7Z0JBRTNJLE9BQU9rQztZQUNUOzs7V0FoTEl6QztFQUF5Qm1ELGNBQVk7SUFtTDNDLFdBQWVuRCJ9