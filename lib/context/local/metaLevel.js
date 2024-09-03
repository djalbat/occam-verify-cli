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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var MetaLevelLocalContext = /*#__PURE__*/ function(IntrinsicLevelLocalContext) {
    _inherits(MetaLevelLocalContext, IntrinsicLevelLocalContext);
    function MetaLevelLocalContext(context, variables, proofSteps, equivalences, judgements, metavariables, metaproofSteps) {
        _class_call_check(this, MetaLevelLocalContext);
        var _this;
        _this = _call_super(this, MetaLevelLocalContext, [
            context,
            variables,
            proofSteps,
            equivalences
        ]);
        _this.judgements = judgements;
        _this.metavariables = metavariables;
        _this.metaproofSteps = metaproofSteps;
        return _this;
    }
    _create_class(MetaLevelLocalContext, [
        {
            key: "getJudgements",
            value: function getJudgements() {
                var judgements = this.context.getJudgements();
                judgements = _to_consumable_array(this.judgements).concat(_to_consumable_array(judgements));
                return judgements;
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
            key: "addJudgement",
            value: function addJudgement(judgement) {
                var judgementAdded = false;
                var metavariableNode = judgement.getMetavariableNode(), judgementPresent = this.isJudgementPresentByMetavariableNode(metavariableNode);
                if (!judgementPresent) {
                    this.judgements.push(judgement);
                    judgementAdded = true;
                }
                return judgementAdded;
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
            key: "findJudgementByMetavariableNode",
            value: function findJudgementByMetavariableNode(metavariableNode) {
                var judgements = this.getJudgements(), judgement = judgements.find(function(judgement) {
                    var judgementMatchesMetavariableNode = judgement.matchMetavariableNode(metavariableNode);
                    if (judgementMatchesMetavariableNode) {
                        return true;
                    }
                }) || null;
                return judgement;
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
            key: "isJudgementPresentByMetavariableNode",
            value: function isJudgementPresentByMetavariableNode(metavariableNode) {
                var judgement = this.findJudgementByMetavariableNode(metavariableNode), judgementPresent = judgement !== null;
                return judgementPresent;
            }
        }
    ], [
        {
            key: "fromFileContext",
            value: function fromFileContext(fileContext) {
                var context = fileContext, variables = [], proofSteps = [], equivalences = [], judgements = [], metavariables = [], metaproofSteps = [], metaLevelLocalContext = new MetaLevelLocalContext(context, variables, proofSteps, equivalences, judgements, metavariables, metaproofSteps);
                return metaLevelLocalContext;
            }
        },
        {
            key: "fromLocalContext",
            value: function fromLocalContext(localContext) {
                var context = localContext, variables = [], proofSteps = [], equivalences = [], judgements = [], metavariables = [], metaproofSteps = [], metaLevelLocalContext = new MetaLevelLocalContext(context, variables, proofSteps, equivalences, judgements, metavariables, metaproofSteps); ///
                return metaLevelLocalContext;
            }
        }
    ]);
    return MetaLevelLocalContext;
}(_intrinsicLevel.default);
var _default = MetaLevelLocalContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2xvY2FsL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEludHJpbnNpY0xldmVsTG9jYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L2xvY2FsL2ludHJpbnNpY0xldmVsXCI7XG5cbmltcG9ydCB7IGxhc3QsIHJldmVyc2UgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNsYXNzIE1ldGFMZXZlbExvY2FsQ29udGV4dCBleHRlbmRzIEludHJpbnNpY0xldmVsTG9jYWxDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBlcXVpdmFsZW5jZXMsIGp1ZGdlbWVudHMsIG1ldGF2YXJpYWJsZXMsIG1ldGFwcm9vZlN0ZXBzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBlcXVpdmFsZW5jZXMpO1xuXG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50cztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMgPSBtZXRhcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7XG4gICAgbGV0IGp1ZGdlbWVudHMgPSB0aGlzLmNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuXG4gICAganVkZ2VtZW50cyA9IFsgLy8vXG4gICAgICAuLi50aGlzLmp1ZGdlbWVudHMsXG4gICAgICAuLi5qdWRnZW1lbnRzXG4gICAgXVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVzID0gdGhpcy5jb250ZXh0LmdldE1ldGF2YXJpYWJsZXMoKTtcblxuICAgIG1ldGF2YXJpYWJsZXMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5tZXRhdmFyaWFibGVzLFxuICAgICAgLi4ubWV0YXZhcmlhYmxlc1xuICAgIF1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TWV0YXByb29mU3RlcHMoKSB7XG4gICAgbGV0IG1ldGFwcm9vZlN0ZXBzID0gdGhpcy5jb250ZXh0LmdldE1ldGFwcm9vZlN0ZXBzKCk7XG5cbiAgICBtZXRhcHJvb2ZTdGVwcyA9IFsgIC8vL1xuICAgICAgLi4ubWV0YXByb29mU3RlcHMsXG4gICAgICAuLi50aGlzLm1ldGFwcm9vZlN0ZXBzXG4gICAgXTtcblxuICAgIHJldHVybiBtZXRhcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGlzSW50cmluc2ljTGV2ZWwoKSB7XG4gICAgY29uc3QgaW50cmluc2ljTGV2ZWwgPSBmYWxzZTtcblxuICAgIHJldHVybiBpbnRyaW5zaWNMZXZlbDtcbiAgfVxuXG4gIGdldExhc3RNZXRhcHJvb2ZTdGVwKCkge1xuICAgIGxldCBsYXN0TWV0YXByb29mU3RlcCA9IG51bGw7XG5cbiAgICBjb25zdCBtZXRhcHJvb2ZTdGVwc0xlbmd0aCA9IHRoaXMubWV0YXByb29mU3RlcHMubGVuZ3RoO1xuXG4gICAgaWYgKG1ldGFwcm9vZlN0ZXBzTGVuZ3RoID4gMCkge1xuICAgICAgbGFzdE1ldGFwcm9vZlN0ZXAgPSBsYXN0KHRoaXMubWV0YXByb29mU3RlcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0TWV0YXByb29mU3RlcDtcbiAgfVxuXG4gIGFkZEp1ZGdlbWVudChqdWRnZW1lbnQpIHtcbiAgICBsZXQganVkZ2VtZW50QWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBqdWRnZW1lbnQuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSB0aGlzLmlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIGlmICghanVkZ2VtZW50UHJlc2VudCkge1xuICAgICAgdGhpcy5qdWRnZW1lbnRzLnB1c2goanVkZ2VtZW50KTtcblxuICAgICAganVkZ2VtZW50QWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBqdWRnZW1lbnRBZGRlZDtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSB0aGlzLm1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVNYXRjaGVzTm9kZSA9IG1ldGF2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVNYXRjaGVzTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghbWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIGFkZE1ldGFwcm9vZlN0ZXAobWV0YXByb29mU3RlcCkge1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMucHVzaChtZXRhcHJvb2ZTdGVwKTtcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWV0YXByb29mU3RlcHMgPSB0aGlzLmdldE1ldGFwcm9vZlN0ZXBzKCk7XG5cbiAgICBtZXRhcHJvb2ZTdGVwcyA9IHJldmVyc2UobWV0YXByb29mU3RlcHMpOyAvLy9cblxuICAgIGNvbnN0IG1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFwcm9vZlN0ZXBzLnNvbWUoKG1ldGFwcm9vZlN0ZXApID0+IHtcbiAgICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBNYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhcHJvb2ZTdGVwLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAobWV0YXByb29mU3RlcE1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIG1ldGFMZXZlbExvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gbWV0YXZhcmlhYmxlLm1hdGNoTm9kZShub2RlLCBtZXRhTGV2ZWxMb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QganVkZ2VtZW50TWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSBqdWRnZW1lbnQubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoanVkZ2VtZW50TWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbWV0YUxldmVsTG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIG1ldGFMZXZlbExvY2FsQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IChtZXRhdmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudCA9IHRoaXMuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gKGp1ZGdlbWVudCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50UHJlc2VudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIG1ldGFMZXZlbExvY2FsQ29udGV4dCA9IG5ldyBNZXRhTGV2ZWxMb2NhbENvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBlcXVpdmFsZW5jZXMsIGp1ZGdlbWVudHMsIG1ldGF2YXJpYWJsZXMsIG1ldGFwcm9vZlN0ZXBzKTtcblxuICAgIHJldHVybiBtZXRhTGV2ZWxMb2NhbENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvY2FsQ29udGV4dChsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IFtdLFxuICAgICAgICAgIGp1ZGdlbWVudHMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbWV0YXByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBtZXRhTGV2ZWxMb2NhbENvbnRleHQgPSBuZXcgTWV0YUxldmVsTG9jYWxDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcywgZXF1aXZhbGVuY2VzLCBqdWRnZW1lbnRzLCBtZXRhdmFyaWFibGVzLCBtZXRhcHJvb2ZTdGVwcyk7ICAvLy9cblxuICAgIHJldHVybiBtZXRhTGV2ZWxMb2NhbENvbnRleHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWV0YUxldmVsTG9jYWxDb250ZXh0OyJdLCJuYW1lcyI6WyJNZXRhTGV2ZWxMb2NhbENvbnRleHQiLCJjb250ZXh0IiwidmFyaWFibGVzIiwicHJvb2ZTdGVwcyIsImVxdWl2YWxlbmNlcyIsImp1ZGdlbWVudHMiLCJtZXRhdmFyaWFibGVzIiwibWV0YXByb29mU3RlcHMiLCJnZXRKdWRnZW1lbnRzIiwiZ2V0TWV0YXZhcmlhYmxlcyIsImdldE1ldGFwcm9vZlN0ZXBzIiwiaXNJbnRyaW5zaWNMZXZlbCIsImludHJpbnNpY0xldmVsIiwiZ2V0TGFzdE1ldGFwcm9vZlN0ZXAiLCJsYXN0TWV0YXByb29mU3RlcCIsIm1ldGFwcm9vZlN0ZXBzTGVuZ3RoIiwibGVuZ3RoIiwibGFzdCIsImFkZEp1ZGdlbWVudCIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEFkZGVkIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwicHVzaCIsImFkZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUFkZGVkIiwibm9kZSIsImdldE5hbWUiLCJtZXRhdmFyaWFibGVQcmVzZW50Iiwic29tZSIsIm1ldGF2YXJpYWJsZU1hdGNoZXNOb2RlIiwibWF0Y2hOb2RlIiwiYWRkTWV0YXByb29mU3RlcCIsIm1ldGFwcm9vZlN0ZXAiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudE5vZGUiLCJyZXZlcnNlIiwibWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXByb29mU3RlcE1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhTGV2ZWxMb2NhbENvbnRleHQiLCJmaW5kIiwibWF0Y2hlcyIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJqdWRnZW1lbnRNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImZyb21GaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwiZnJvbUxvY2FsQ29udGV4dCIsImxvY2FsQ29udGV4dCIsIkludHJpbnNpY0xldmVsTG9jYWxDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE4TEE7OztlQUFBOzs7cUVBNUx1QztxQkFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBQSxBQUFNQSxzQ0FBRCxBQUFMO2NBQU1BO2FBQUFBLHNCQUNRQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBQUVDLFVBQVUsRUFBRUMsYUFBYSxFQUFFQyxjQUFjO2dDQUQvRlA7O2dCQUVGLGtCQUZFQTtZQUVJQztZQUFTQztZQUFXQztZQUFZQzs7UUFFdEMsTUFBS0MsVUFBVSxHQUFHQTtRQUNsQixNQUFLQyxhQUFhLEdBQUdBO1FBQ3JCLE1BQUtDLGNBQWMsR0FBR0E7OztrQkFOcEJQOztZQVNKUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUgsYUFBYSxJQUFJLENBQUNKLE9BQU8sQ0FBQ08sYUFBYTtnQkFFM0NILGFBQWEsQUFDWCxxQkFBRyxJQUFJLENBQUNBLFVBQVUsU0FDbEIscUJBQUdBO2dCQUdMLE9BQU9BO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUgsZ0JBQWdCLElBQUksQ0FBQ0wsT0FBTyxDQUFDUSxnQkFBZ0I7Z0JBRWpESCxnQkFBZ0IsQUFDZCxxQkFBRyxJQUFJLENBQUNBLGFBQWEsU0FDckIscUJBQUdBO2dCQUdMLE9BQU9BO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUgsaUJBQWlCLElBQUksQ0FBQ04sT0FBTyxD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