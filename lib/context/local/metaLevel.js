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
var _intrinsicLevel = /*#__PURE__*/ _interop_require_default(require("../../context/local/intrinsicLevel"));
var _array = require("../../utilities/array");
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
var MetaLevelLocalContext = /*#__PURE__*/ function(IntrinsicLevelLocalContext) {
    _inherits(MetaLevelLocalContext, IntrinsicLevelLocalContext);
    var _super = _create_super(MetaLevelLocalContext);
    function MetaLevelLocalContext(context, variables, proofSteps, equivalences, metavariables, metaproofSteps, frameAssertions) {
        _class_call_check(this, MetaLevelLocalContext);
        var _this;
        _this = _super.call(this, context, variables, proofSteps, equivalences);
        _this.metavariables = metavariables;
        _this.metaproofSteps = metaproofSteps;
        _this.frameAssertions = frameAssertions;
        return _this;
    }
    _create_class(MetaLevelLocalContext, [
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
            key: "isIntrinsicLevel",
            value: function isIntrinsicLevel() {
                var intrinsicLevel = false;
                return intrinsicLevel;
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
                    var metavariableMatchesNode = metavariable.matchNode(node);
                    if (metavariableMatchesNode) {
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
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNode) {
                var metaproofSteps = this.getMetaproofSteps();
                metaproofSteps = (0, _array.reverse)(metaproofSteps); ///
                var matchesMetastatementNode = metaproofSteps.some(function(metaproofStep) {
                    var metaproofStepMatchesMetastatementNode = metaproofStep.matchMetastatementNode(metastatementNode);
                    if (metaproofStepMatchesMetastatementNode) {
                        return true;
                    }
                });
                return matchesMetastatementNode;
            }
        },
        {
            key: "findMetavariableByMetavariableNode",
            value: function findMetavariableByMetavariableNode(metavariableNode, metaLevelLocalContext) {
                var node = metavariableNode, metavariables = this.getMetavariables(), metavariable = metavariables.find(function(metavariable) {
                    var matches = metavariable.matchNode(node, metaLevelLocalContext);
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
                    var frameAssertionMatchesMetavariableNode = frameAssertion.matchMetavariableNode(metavariableNode);
                    if (frameAssertionMatchesMetavariableNode) {
                        return true;
                    }
                }) || null;
                return frameAssertion;
            }
        },
        {
            key: "isMetavariablePresentByMetavariableNode",
            value: function isMetavariablePresentByMetavariableNode(metavariableNode, metaLevelLocalContext) {
                var metavariable = this.findMetavariableByMetavariableNode(metavariableNode, metaLevelLocalContext), metavariablePresent = metavariable !== null;
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
                var context = fileContext, variables = [], proofSteps = [], equivalences = [], metavariables = [], metaproofSteps = [], frameAssertions = [], metaLevelLocalContext = new MetaLevelLocalContext(context, variables, proofSteps, equivalences, metavariables, metaproofSteps, frameAssertions);
                return metaLevelLocalContext;
            }
        },
        {
            key: "fromLocalContext",
            value: function fromLocalContext(localContext) {
                var context = localContext, variables = [], proofSteps = [], equivalences = [], metavariables = [], metaproofSteps = [], frameAssertions = [], metaLevelLocalContext = new MetaLevelLocalContext(context, variables, proofSteps, equivalences, metavariables, metaproofSteps, frameAssertions); ///
                return metaLevelLocalContext;
            }
        }
    ]);
    return MetaLevelLocalContext;
}(_intrinsicLevel.default);
var _default = MetaLevelLocalContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2xvY2FsL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEludHJpbnNpY0xldmVsTG9jYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L2xvY2FsL2ludHJpbnNpY0xldmVsXCI7XG5cbmltcG9ydCB7IGxhc3QsIHJldmVyc2UgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNsYXNzIE1ldGFMZXZlbExvY2FsQ29udGV4dCBleHRlbmRzIEludHJpbnNpY0xldmVsTG9jYWxDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBlcXVpdmFsZW5jZXMsIG1ldGF2YXJpYWJsZXMsIG1ldGFwcm9vZlN0ZXBzLCBmcmFtZUFzc2VydGlvbnMpIHtcbiAgICBzdXBlcihjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGVxdWl2YWxlbmNlcyk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMgPSBtZXRhcHJvb2ZTdGVwcztcbiAgICB0aGlzLmZyYW1lQXNzZXJ0aW9ucyA9IGZyYW1lQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0TWV0YXZhcmlhYmxlcygpO1xuXG4gICAgbWV0YXZhcmlhYmxlcyA9IFsgLy8vXG4gICAgICAuLi50aGlzLm1ldGF2YXJpYWJsZXMsXG4gICAgICAuLi5tZXRhdmFyaWFibGVzXG4gICAgXVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRNZXRhcHJvb2ZTdGVwcygpIHtcbiAgICBsZXQgbWV0YXByb29mU3RlcHMgPSB0aGlzLmNvbnRleHQuZ2V0TWV0YXByb29mU3RlcHMoKTtcblxuICAgIG1ldGFwcm9vZlN0ZXBzID0gWyAgLy8vXG4gICAgICAuLi5tZXRhcHJvb2ZTdGVwcyxcbiAgICAgIC4uLnRoaXMubWV0YXByb29mU3RlcHNcbiAgICBdO1xuXG4gICAgcmV0dXJuIG1ldGFwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0RnJhbWVBc3NlcnRpb25zKCkge1xuICAgIGxldCBmcmFtZUFzc2VydGlvbnMgPSB0aGlzLmNvbnRleHQuZ2V0RnJhbWVBc3NlcnRpb25zKCk7XG5cbiAgICBmcmFtZUFzc2VydGlvbnMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5mcmFtZUFzc2VydGlvbnMsXG4gICAgICAuLi5mcmFtZUFzc2VydGlvbnNcbiAgICBdXG5cbiAgICByZXR1cm4gZnJhbWVBc3NlcnRpb25zO1xuICB9XG5cbiAgaXNJbnRyaW5zaWNMZXZlbCgpIHtcbiAgICBjb25zdCBpbnRyaW5zaWNMZXZlbCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGludHJpbnNpY0xldmVsO1xuICB9XG5cbiAgZ2V0TGFzdE1ldGFwcm9vZlN0ZXAoKSB7XG4gICAgbGV0IGxhc3RNZXRhcHJvb2ZTdGVwID0gbnVsbDtcblxuICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzTGVuZ3RoID0gdGhpcy5tZXRhcHJvb2ZTdGVwcy5sZW5ndGg7XG5cbiAgICBpZiAobWV0YXByb29mU3RlcHNMZW5ndGggPiAwKSB7XG4gICAgICBsYXN0TWV0YXByb29mU3RlcCA9IGxhc3QodGhpcy5tZXRhcHJvb2ZTdGVwcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RNZXRhcHJvb2ZTdGVwO1xuICB9XG5cbiAgYWRkRnJhbWVBc3NlcnRpb24oZnJhbWVBc3NlcnRpb24pIHtcbiAgICBsZXQgZnJhbWVBc3NlcnRpb25BZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lQXNzZXJ0aW9uLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBmcmFtZUFzc2VydGlvblByZXNlbnQgPSB0aGlzLmlzRnJhbWVBc3NlcnRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKCFmcmFtZUFzc2VydGlvblByZXNlbnQpIHtcbiAgICAgIHRoaXMuZnJhbWVBc3NlcnRpb25zLnB1c2goZnJhbWVBc3NlcnRpb24pO1xuXG4gICAgICBmcmFtZUFzc2VydGlvbkFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVBc3NlcnRpb25BZGRlZDtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSB0aGlzLm1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVNYXRjaGVzTm9kZSA9IG1ldGF2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVNYXRjaGVzTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghbWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIGFkZE1ldGFwcm9vZlN0ZXAobWV0YXByb29mU3RlcCkge1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMucHVzaChtZXRhcHJvb2ZTdGVwKTtcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWV0YXByb29mU3RlcHMgPSB0aGlzLmdldE1ldGFwcm9vZlN0ZXBzKCk7XG5cbiAgICBtZXRhcHJvb2ZTdGVwcyA9IHJldmVyc2UobWV0YXByb29mU3RlcHMpOyAvLy9cblxuICAgIGNvbnN0IG1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFwcm9vZlN0ZXBzLnNvbWUoKG1ldGFwcm9vZlN0ZXApID0+IHtcbiAgICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBNYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhcHJvb2ZTdGVwLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAobWV0YXByb29mU3RlcE1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIG1ldGFMZXZlbExvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gbWV0YXZhcmlhYmxlLm1hdGNoTm9kZShub2RlLCBtZXRhTGV2ZWxMb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRGcmFtZUFzc2VydGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgZnJhbWVBc3NlcnRpb25zID0gdGhpcy5nZXRGcmFtZUFzc2VydGlvbnMoKSxcbiAgICAgICAgICBmcmFtZUFzc2VydGlvbiA9IGZyYW1lQXNzZXJ0aW9ucy5maW5kKChmcmFtZUFzc2VydGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZnJhbWVBc3NlcnRpb25NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lQXNzZXJ0aW9uLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGZyYW1lQXNzZXJ0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBmcmFtZUFzc2VydGlvbjtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBtZXRhTGV2ZWxMb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbWV0YUxldmVsTG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzRnJhbWVBc3NlcnRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZUFzc2VydGlvbiA9IHRoaXMuZmluZEZyYW1lQXNzZXJ0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGZyYW1lQXNzZXJ0aW9uUHJlc2VudCA9IChmcmFtZUFzc2VydGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gZnJhbWVBc3NlcnRpb25QcmVzZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbWV0YXByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBmcmFtZUFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICBtZXRhTGV2ZWxMb2NhbENvbnRleHQgPSBuZXcgTWV0YUxldmVsTG9jYWxDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcywgZXF1aXZhbGVuY2VzLCBtZXRhdmFyaWFibGVzLCBtZXRhcHJvb2ZTdGVwcywgZnJhbWVBc3NlcnRpb25zKTtcblxuICAgIHJldHVybiBtZXRhTGV2ZWxMb2NhbENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvY2FsQ29udGV4dChsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGZyYW1lQXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIG1ldGFMZXZlbExvY2FsQ29udGV4dCA9IG5ldyBNZXRhTGV2ZWxMb2NhbENvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBlcXVpdmFsZW5jZXMsIG1ldGF2YXJpYWJsZXMsIG1ldGFwcm9vZlN0ZXBzLCBmcmFtZUFzc2VydGlvbnMpOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YUxldmVsTG9jYWxDb250ZXh0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1ldGFMZXZlbExvY2FsQ29udGV4dDsiXSwibmFtZXMiOlsiTWV0YUxldmVsTG9jYWxDb250ZXh0IiwiY29udGV4dCIsInZhcmlhYmxlcyIsInByb29mU3RlcHMiLCJlcXVpdmFsZW5jZXMiLCJtZXRhdmFyaWFibGVzIiwibWV0YXByb29mU3RlcHMiLCJmcmFtZUFzc2VydGlvbnMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZ2V0TWV0YXByb29mU3RlcHMiLCJnZXRGcmFtZUFzc2VydGlvbnMiLCJpc0ludHJpbnNpY0xldmVsIiwiaW50cmluc2ljTGV2ZWwiLCJnZXRMYXN0TWV0YXByb29mU3RlcCIsImxhc3RNZXRhcHJvb2ZTdGVwIiwibWV0YXByb29mU3RlcHNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0IiwiYWRkRnJhbWVBc3NlcnRpb24iLCJmcmFtZUFzc2VydGlvbiIsImZyYW1lQXNzZXJ0aW9uQWRkZWQiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImZyYW1lQXNzZXJ0aW9uUHJlc2VudCIsImlzRnJhbWVBc3NlcnRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwicHVzaCIsImFkZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUFkZGVkIiwibm9kZSIsImdldE5hbWUiLCJtZXRhdmFyaWFibGVQcmVzZW50Iiwic29tZSIsIm1ldGF2YXJpYWJsZU1hdGNoZXNOb2RlIiwibWF0Y2hOb2RlIiwiYWRkTWV0YXByb29mU3RlcCIsIm1ldGFwcm9vZlN0ZXAiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudE5vZGUiLCJyZXZlcnNlIiwibWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXByb29mU3RlcE1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhTGV2ZWxMb2NhbENvbnRleHQiLCJmaW5kIiwibWF0Y2hlcyIsImZpbmRGcmFtZUFzc2VydGlvbkJ5TWV0YXZhcmlhYmxlTm9kZSIsImZyYW1lQXNzZXJ0aW9uTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImZyb21Mb2NhbENvbnRleHQiLCJsb2NhbENvbnRleHQiLCJJbnRyaW5zaWNMZXZlbExvY2FsQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOExBOzs7ZUFBQTs7O3FFQTVMdUM7cUJBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlCLElBQUEsQUFBTUEsc0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEsc0JBQ1FDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0NBRHBHUDs7a0NBRUlDLFNBQVNDLFdBQVdDLFlBQVlDO1FBRXRDLE1BQUtDLGFBQWEsR0FBR0E7UUFDckIsTUFBS0MsY0FBYyxHQUFHQTtRQUN0QixNQUFLQyxlQUFlLEdBQUdBOzs7a0JBTnJCUDs7WUFTSlEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlILGdCQUFnQixJQUFJLENBQUNKLE9BQU8sQ0FBQ08sZ0JBQWdCO2dCQUVqREgsZ0JBQWdCLEFBQ2Qs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