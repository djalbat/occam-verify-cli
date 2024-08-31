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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsTWV0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jbGFzcyBMb2NhbE1ldGFDb250ZXh0IGV4dGVuZHMgTG9jYWxDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBlcXVpdmFsZW5jZXMsIG1ldGF2YXJpYWJsZXMsIG1ldGFwcm9vZlN0ZXBzLCBmcmFtZUFzc2VydGlvbnMpIHtcbiAgICBzdXBlcihjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGVxdWl2YWxlbmNlcyk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMgPSBtZXRhcHJvb2ZTdGVwcztcbiAgICB0aGlzLmZyYW1lQXNzZXJ0aW9ucyA9IGZyYW1lQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0TWV0YXZhcmlhYmxlcygpO1xuXG4gICAgbWV0YXZhcmlhYmxlcyA9IFsgLy8vXG4gICAgICAuLi50aGlzLm1ldGF2YXJpYWJsZXMsXG4gICAgICAuLi5tZXRhdmFyaWFibGVzXG4gICAgXVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRNZXRhcHJvb2ZTdGVwcygpIHtcbiAgICBsZXQgbWV0YXByb29mU3RlcHMgPSB0aGlzLmNvbnRleHQuZ2V0TWV0YXByb29mU3RlcHMoKTtcblxuICAgIG1ldGFwcm9vZlN0ZXBzID0gWyAgLy8vXG4gICAgICAuLi5tZXRhcHJvb2ZTdGVwcyxcbiAgICAgIC4uLnRoaXMubWV0YXByb29mU3RlcHNcbiAgICBdO1xuXG4gICAgcmV0dXJuIG1ldGFwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0RnJhbWVBc3NlcnRpb25zKCkge1xuICAgIGxldCBmcmFtZUFzc2VydGlvbnMgPSB0aGlzLmNvbnRleHQuZ2V0RnJhbWVBc3NlcnRpb25zKCk7XG5cbiAgICBmcmFtZUFzc2VydGlvbnMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5mcmFtZUFzc2VydGlvbnMsXG4gICAgICAuLi5mcmFtZUFzc2VydGlvbnNcbiAgICBdXG5cbiAgICByZXR1cm4gZnJhbWVBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0TGFzdE1ldGFwcm9vZlN0ZXAoKSB7XG4gICAgbGV0IGxhc3RNZXRhcHJvb2ZTdGVwID0gbnVsbDtcblxuICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzTGVuZ3RoID0gdGhpcy5tZXRhcHJvb2ZTdGVwcy5sZW5ndGg7XG5cbiAgICBpZiAobWV0YXByb29mU3RlcHNMZW5ndGggPiAwKSB7XG4gICAgICBsYXN0TWV0YXByb29mU3RlcCA9IGxhc3QodGhpcy5tZXRhcHJvb2ZTdGVwcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RNZXRhcHJvb2ZTdGVwO1xuICB9XG5cbiAgYWRkRnJhbWVBc3NlcnRpb24oZnJhbWVBc3NlcnRpb24pIHtcbiAgICBsZXQgZnJhbWVBc3NlcnRpb25BZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lQXNzZXJ0aW9uLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBmcmFtZUFzc2VydGlvblByZXNlbnQgPSB0aGlzLmlzRnJhbWVBc3NlcnRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKCFmcmFtZUFzc2VydGlvblByZXNlbnQpIHtcbiAgICAgIHRoaXMuZnJhbWVBc3NlcnRpb25zLnB1c2goZnJhbWVBc3NlcnRpb24pO1xuXG4gICAgICBmcmFtZUFzc2VydGlvbkFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVBc3NlcnRpb25BZGRlZDtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSB0aGlzLm1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghbWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIGFkZE1ldGFwcm9vZlN0ZXAobWV0YXByb29mU3RlcCkge1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMucHVzaChtZXRhcHJvb2ZTdGVwKTtcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKCFtZXRhc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQgPSB0aGlzLm1ldGFwcm9vZlN0ZXBzLnNvbWUoKG1ldGFwcm9vZlN0ZXApID0+IHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQgPSBtZXRhcHJvb2ZTdGVwLm1hdGNoKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBpZiAocHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gcHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIGlmICghbWV0YXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgIG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gdGhpcy5jb250ZXh0Lm1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRNYXRjaGVzO1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRGcmFtZUFzc2VydGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgZnJhbWVBc3NlcnRpb25zID0gdGhpcy5nZXRGcmFtZUFzc2VydGlvbnMoKSxcbiAgICAgICAgICBmcmFtZUFzc2VydGlvbiA9IGZyYW1lQXNzZXJ0aW9ucy5maW5kKChmcmFtZUFzc2VydGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTWF0Y2hlcyA9IGZyYW1lQXNzZXJ0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBmcmFtZUFzc2VydGlvbjtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsTWV0YUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNGcmFtZUFzc2VydGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lQXNzZXJ0aW9uID0gdGhpcy5maW5kRnJhbWVBc3NlcnRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgZnJhbWVBc3NlcnRpb25QcmVzZW50ID0gKGZyYW1lQXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBmcmFtZUFzc2VydGlvblByZXNlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGZyYW1lQXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIGxvY2FsTWV0YUNvbnRleHQgPSBuZXcgTG9jYWxNZXRhQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGVxdWl2YWxlbmNlcywgbWV0YXZhcmlhYmxlcywgbWV0YXByb29mU3RlcHMsIGZyYW1lQXNzZXJ0aW9ucyk7XG5cbiAgICByZXR1cm4gbG9jYWxNZXRhQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9jYWxNZXRhQ29udGV4dChsb2NhbE1ldGFDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IGxvY2FsTWV0YUNvbnRleHQsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gW10sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIG1ldGFwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgZnJhbWVBc3NlcnRpb25zID0gW107XG5cbiAgICBsb2NhbE1ldGFDb250ZXh0ID0gbmV3IExvY2FsTWV0YUNvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBlcXVpdmFsZW5jZXMsIG1ldGF2YXJpYWJsZXMsIG1ldGFwcm9vZlN0ZXBzLCBmcmFtZUFzc2VydGlvbnMpOyAgLy8vXG5cbiAgICByZXR1cm4gbG9jYWxNZXRhQ29udGV4dDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhbE1ldGFDb250ZXh0OyJdLCJuYW1lcyI6WyJMb2NhbE1ldGFDb250ZXh0IiwiY29udGV4dCIsInZhcmlhYmxlcyIsInByb29mU3RlcHMiLCJlcXVpdmFsZW5jZXMiLCJtZXRhdmFyaWFibGVzIiwibWV0YXByb29mU3RlcHMiLCJmcmFtZUFzc2VydGlvbnMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZ2V0TWV0YXByb29mU3RlcHMiLCJnZXRGcmFtZUFzc2VydGlvbnMiLCJnZXRMYXN0TWV0YXByb29mU3RlcCIsImxhc3RNZXRhcHJvb2ZTdGVwIiwibWV0YXByb29mU3RlcHNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0IiwiYWRkRnJhbWVBc3NlcnRpb24iLCJmcmFtZUFzc2VydGlvbiIsImZyYW1lQXNzZXJ0aW9uQWRkZWQiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImZyYW1lQXNzZXJ0aW9uUHJlc2VudCIsImlzRnJhbWVBc3NlcnRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwicHVzaCIsImFkZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUFkZGVkIiwibm9kZSIsImdldE5hbWUiLCJtZXRhdmFyaWFibGVQcmVzZW50Iiwic29tZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiYWRkTWV0YXByb29mU3RlcCIsIm1ldGFwcm9vZlN0ZXAiLCJtYXRjaE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnRNYXRjaGVzIiwicHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnQiLCJtYXRjaCIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJsb2NhbE1ldGFDb250ZXh0IiwiZmluZCIsIm1hdGNoZXMiLCJmaW5kRnJhbWVBc3NlcnRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiZnJvbUZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJmcm9tTG9jYWxNZXRhQ29udGV4dCIsIkxvY2FsQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK0xBOzs7ZUFBQTs7OzREQTdMeUI7cUJBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEsaUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEsaUJBQ1FDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0NBRHBHUDs7a0NBRUlDLFNBQVNDLFdBQVdDLFlBQVlDO1FBRXRDLE1BQUtDLGFBQWEsR0FBR0E7UUFDckIsTUFBS0MsY0FBYyxHQUFHQTtRQUN0QixNQUFLQyxlQUFlLEdBQUdBOzs7a0JBTnJCUDs7WUFTSlEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlILGdCQUFnQixJQUFJLENBQUNKLE9BQU8sQ0FBQ08sZ0JBQWdCO2dCQUVqREgsZ0JBQWdCLEFBQ2QscUJBQUcsSUFBSSxDQUFDQSxhQUFhLFNBQ3JCLHFCQUFHQTtnQkFHTCxPQUFPQTtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlILGlCQUFpQixJQUFJLENBQUNMLE9BQU8sQ0FBQ1EsaUJBQWlCO2dCQUVuREgsaUJBQWlCLEFBQ2YscUJBQUdBLHVCQUNILHFCQUFHLElBQUksQ0FBQ0EsY0FBYztnQkFHeEIsT0FBT0E7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJSCxrQkFBa0Is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