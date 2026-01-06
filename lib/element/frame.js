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
var _necessary = require("necessary");
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _constants = require("../constants");
var _metaTypeNames = require("../metaTypeNames");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _Frame;
var first = _necessary.arrayUtilities.first;
var _default = (0, _elements.define)((_Frame = /*#__PURE__*/ function(Element) {
    _inherits(Frame, Element);
    function Frame(context, string, node, assumptions) {
        _class_call_check(this, Frame);
        var _this;
        _this = _call_super(this, Frame, [
            context,
            string,
            node
        ]);
        _this.assumptions = assumptions;
        return _this;
    }
    _create_class(Frame, [
        {
            key: "getAssumptions",
            value: function getAssumptions() {
                return this.assumptions;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                return this.assumptions.length;
            }
        },
        {
            key: "getAssumption",
            value: function getAssumption() {
                var assumption = null;
                var length = this.getLength();
                if (length === 1) {
                    var firstAssumption = first(this.assumptions);
                    assumption = firstAssumption; ///
                }
                return assumption;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                var metavariable = null;
                var singular = this.isSingular();
                if (singular) {
                    var assumption = this.getAssumption();
                    metavariable = assumption.getMetavariable();
                }
                return metavariable;
            }
        },
        {
            key: "getMetavariableName",
            value: function getMetavariableName() {
                var metavariableName = null;
                var singular = this.isSingular();
                if (singular) {
                    metavariableName = this.node.getMetavariableName();
                }
                return metavariableName;
            }
        },
        {
            key: "isSingular",
            value: function isSingular() {
                return this.node.isSingular();
            }
        },
        {
            key: "isMetavariableEqualToMetavariable",
            value: function isMetavariableEqualToMetavariable(metavariable, context) {
                var metavariableEqualToMetavariable;
                var singular = this.isSingular();
                if (singular) {
                    var metavariableA = metavariable, singularMetavariableNode = this.node.getSingularMetavariableNode(), metavariableName = singularMetavariableNode.getMetavariableName();
                    metavariable = context.findMetavariableByMetavariableName(metavariableName);
                    var metavariableB = metavariable, equalTo = metavariableA.isEqualTo(metavariableB);
                    metavariableEqualToMetavariable = equalTo; ///
                }
                return metavariableEqualToMetavariable;
            }
        },
        {
            key: "matchFrameNode",
            value: function matchFrameNode(frameNode) {
                return this.node.match(frameNode);
            }
        },
        {
            key: "matchSubstitution",
            value: function matchSubstitution(substitution, context) {
                var substitutionMatches = false;
                var frameString = this.string, substitutionString = substitution.getString();
                context.trace("Matching the '".concat(substitutionString, "' substitution against the '").concat(frameString, "' frame..."));
                if (!substitutionMatches) {
                    substitutionMatches = this.assumptions.some(function(assumption) {
                        var substitutionMatchesAssumption = assumption.matchSubstitution(substitution, context);
                        if (substitutionMatchesAssumption) {
                            return true;
                        }
                    });
                }
                if (substitutionMatches) {
                    context.debug("...matched the '".concat(substitutionString, "' substitutions against the '").concat(frameString, "' frame."));
                }
                return substitutionMatches;
            }
        },
        {
            key: "matchSubstitutions",
            value: function matchSubstitutions(substitutions, context) {
                var _this = this;
                var substitutionsMatch;
                var frameString = this.string, substitutionsString = substitutions.asString();
                context.trace("Matching the '".concat(substitutionsString, "' substitutions against the '").concat(frameString, "' frame..."));
                substitutionsMatch = substitutions.everySubstitution(function(substitution) {
                    var substitutionMatches = _this.matchSubstitution(substitution, context);
                    if (substitutionMatches) {
                        return true;
                    }
                });
                if (substitutionsMatch) {
                    context.debug("...matched the '".concat(substitutionsString, "' substitutions against the '").concat(frameString, "' frame."));
                }
                return substitutionsMatch;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verifies = false;
                var frameString = this.string; ///
                context.trace("Verifying the '".concat(frameString, "' frame..."));
                var assumptionsVerify = this.verifyAssumptions(assignments, stated, context);
                if (assumptionsVerify) {
                    var verifiesWhenStated = false, verifiesWhenDerived = false;
                    if (stated) {
                        verifiesWhenStated = this.verifyWhenStated(assignments, context);
                    } else {
                        verifiesWhenDerived = this.verifyWhenDerived(context);
                    }
                    if (verifiesWhenStated || verifiesWhenDerived) {
                        verifies = true;
                    }
                }
                if (verifies) {
                    var frame = this; ///
                    context.addFrame(frame);
                    context.debug("...verified the '".concat(frameString, "' frame."));
                }
                return verifies;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var verifiesWhenStated = false;
                var frameString = this.string; ///
                context.trace("Verifying the '".concat(frameString, "' stated frame..."));
                var singular = this.isSingular();
                if (!singular) {
                    context.trace("The '".concat(frameString, "' stated frame must be singular."));
                } else {
                    verifiesWhenStated = true;
                }
                if (verifiesWhenStated) {
                    context.debug("...verified the '".concat(frameString, "' stated frame."));
                }
                return verifiesWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var verifiesWhenDerived;
                var frameString = this.string; ///
                context.trace("Verifying the '".concat(frameString, "' derived frame..."));
                verifiesWhenDerived = true;
                if (verifiesWhenDerived) {
                    context.debug("...verified the '".concat(frameString, "' derived frame."));
                }
                return verifiesWhenDerived;
            }
        },
        {
            key: "verifyAssumptions",
            value: function verifyAssumptions(assignments, stated, context) {
                var assumptionsVerify = true; ///
                var length = this.getLength();
                if (length > 0) {
                    var sOrNothing = length > 1 ? _constants.S : _constants.NOTHING, assumptionsString = assumptionsStringFromAssumptions(this.assumptions);
                    context.trace("Verifying the '".concat(assumptionsString, "' assumption").concat(sOrNothing, "..."));
                    stated = true; ///
                    assignments = null; ///
                    assumptionsVerify = this.assumptions.every(function(assumption) {
                        var assumptionVerifies = assumption.verify(assignments, stated, context);
                        return assumptionVerifies;
                    });
                    if (assumptionsVerify) {
                        context.debug("...verified the '".concat(assumptionsString, "' assumption").concat(sOrNothing, "."));
                    }
                }
                return assumptionsVerify;
            }
        },
        {
            key: "verifyGivenMetaType",
            value: function verifyGivenMetaType(metaType, assignments, stated, context) {
                var verifiesGivenMetaType = false;
                var frameString = this.string, metaTypeString = metaType.getString();
                context.trace("Verifying the '".concat(frameString, "' frame given the '").concat(metaTypeString, "' meta-type..."));
                var metaTypeName = metaType.getName();
                if (metaTypeName === _metaTypeNames.FRAME_META_TYPE_NAME) {
                    var verifies = this.verify(assignments, stated, context);
                    verifiesGivenMetaType = verifies; ///
                }
                if (verifiesGivenMetaType) {
                    context.debug("...verified the '".concat(frameString, "' frame given the '").concat(metaTypeString, "' meta-type."));
                }
                return verifiesGivenMetaType;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var json = null;
                var singular = this.isSingular();
                if (singular) {
                    var assumption = this.getAssumption(), assumptionJSON = assumption.toJSON();
                    json = assumptionJSON; ///
                }
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var frame = null;
                if (json !== null) {
                    var Assumption = _elements.default.Assumption, assumption = Assumption.fromJSON(json, context), assumptions = [
                        assumption
                    ], string = null, node = null;
                    frame = new Frame(string, node, assumptions);
                }
                return frame;
            }
        }
    ]);
    return Frame;
}(_wrap_native_super(_element.default)), _define_property(_Frame, "name", "Frame"), _Frame));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBTLCBOT1RISU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEZyYW1lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXNzdW1wdGlvbnMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzdW1wdGlvbnM7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7IHJldHVybiB0aGlzLmFzc3VtcHRpb25zLmxlbmd0aDsgfVxuXG4gIGdldEFzc3VtcHRpb24oKSB7XG4gICAgbGV0IGFzc3VtcHRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChsZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0QXNzdW1wdGlvbiA9IGZpcnN0KHRoaXMuYXNzdW1wdGlvbnMpO1xuXG4gICAgICBhc3N1bXB0aW9uID0gZmlyc3RBc3N1bXB0aW9uOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IGFzc3VtcHRpb24gPSB0aGlzLmdldEFzc3VtcHRpb24oKTtcblxuICAgICAgbWV0YXZhcmlhYmxlID0gYXNzdW1wdGlvbi5nZXRNZXRhdmFyaWFibGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5ub2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7IHJldHVybiB0aGlzLm5vZGUuaXNTaW5ndWxhcigpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlQSA9IG1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm5vZGUuZ2V0U2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpXG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZUIgPSBtZXRhdmFyaWFibGUsXG4gICAgICAgICAgICBlcXVhbFRvID0gbWV0YXZhcmlhYmxlQS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlQik7XG5cbiAgICAgIG1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSBlcXVhbFRvOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGU7XG4gIH1cblxuICBtYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpIHsgcmV0dXJuIHRoaXMubm9kZS5tYXRjaChmcmFtZU5vZGUpOyB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbk1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIGFnYWluc3QgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGlmICghc3Vic3RpdHV0aW9uTWF0Y2hlcykge1xuICAgICAgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IHRoaXMuYXNzdW1wdGlvbnMuc29tZSgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzQXNzdW1wdGlvbiA9IGFzc3VtcHRpb24ubWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc0Fzc3VtcHRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbnMgYWdhaW5zdCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbnNNYXRjaDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zU3RyaW5nID0gc3Vic3RpdHV0aW9ucy5hc1N0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zIGFnYWluc3QgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIHN1YnN0aXR1dGlvbnNNYXRjaCA9IHN1YnN0aXR1dGlvbnMuZXZlcnlTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlcyA9IHRoaXMubWF0Y2hTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uc01hdGNoKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucyBhZ2FpbnN0IHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zTWF0Y2g7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uc1ZlcmlmeSA9IHRoaXMudmVyaWZ5QXNzdW1wdGlvbnMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoYXNzdW1wdGlvbnNWZXJpZnkpIHtcbiAgICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkIHx8IHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgZnJhbWUgPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRGcmFtZShmcmFtZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKCFzaW5ndWxhcikge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIG11c3QgYmUgc2luZ3VsYXIuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS4uLmApO1xuXG4gICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHZlcmlmeUFzc3VtcHRpb25zKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvbnNWZXJpZnkgPSB0cnVlOyAgLy8vXG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNPck5vdGhpbmcgPSAobGVuZ3RoID4gMSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgUyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PVEhJTkcsXG4gICAgICAgICAgICBhc3N1bXB0aW9uc1N0cmluZyA9IGFzc3VtcHRpb25zU3RyaW5nRnJvbUFzc3VtcHRpb25zKHRoaXMuYXNzdW1wdGlvbnMpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2Fzc3VtcHRpb25zU3RyaW5nfScgYXNzdW1wdGlvbiR7c09yTm90aGluZ30uLi5gKTtcblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgICBhc3N1bXB0aW9uc1ZlcmlmeSA9IHRoaXMuYXNzdW1wdGlvbnMuZXZlcnkoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvblZlcmlmaWVzID0gYXNzdW1wdGlvbi52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGFzc3VtcHRpb25WZXJpZmllcztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYXNzdW1wdGlvbnNWZXJpZnkpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2Fzc3VtcHRpb25zU3RyaW5nfScgYXNzdW1wdGlvbiR7c09yTm90aGluZ30uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5R2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc0dpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gRlJBTUVfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVzID0gdGhpcy52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dClcblxuICAgICAgdmVyaWZpZXNHaXZlbk1ldGFUeXBlID0gdmVyaWZpZXM7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllc0dpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBqc29uID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IGFzc3VtcHRpb24gPSB0aGlzLmdldEFzc3VtcHRpb24oKSxcbiAgICAgICAgICAgIGFzc3VtcHRpb25KU09OID0gYXNzdW1wdGlvbi50b0pTT04oKTtcblxuICAgICAganNvbiA9IGFzc3VtcHRpb25KU09OOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRnJhbWVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBBc3N1bXB0aW9uIH0gPWVsZW1lbnRzLFxuICAgICAgICAgICAgYXNzdW1wdGlvbiA9IEFzc3VtcHRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBhc3N1bXB0aW9ucyA9IFtcbiAgICAgICAgICAgICAgYXNzdW1wdGlvblxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgICBub2RlID0gbnVsbDtcblxuICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoc3RyaW5nLCBub2RlLCBhc3N1bXB0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiRnJhbWUiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImFzc3VtcHRpb25zIiwiZ2V0QXNzdW1wdGlvbnMiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbiIsImZpcnN0QXNzdW1wdGlvbiIsImdldE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsInNpbmd1bGFyIiwiaXNTaW5ndWxhciIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUEiLCJzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlQiIsImVxdWFsVG8iLCJpc0VxdWFsVG8iLCJtYXRjaEZyYW1lTm9kZSIsImZyYW1lTm9kZSIsIm1hdGNoIiwibWF0Y2hTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25NYXRjaGVzIiwiZnJhbWVTdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInNvbWUiLCJzdWJzdGl0dXRpb25NYXRjaGVzQXNzdW1wdGlvbiIsImRlYnVnIiwibWF0Y2hTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNNYXRjaCIsInN1YnN0aXR1dGlvbnNTdHJpbmciLCJhc1N0cmluZyIsImV2ZXJ5U3Vic3RpdHV0aW9uIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllcyIsImFzc3VtcHRpb25zVmVyaWZ5IiwidmVyaWZ5QXNzdW1wdGlvbnMiLCJ2ZXJpZmllc1doZW5TdGF0ZWQiLCJ2ZXJpZmllc1doZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiZnJhbWUiLCJhZGRGcmFtZSIsInNPck5vdGhpbmciLCJTIiwiTk9USElORyIsImFzc3VtcHRpb25zU3RyaW5nIiwiYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnMiLCJldmVyeSIsImFzc3VtcHRpb25WZXJpZmllcyIsInZlcmlmeUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZlcmlmaWVzR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwidG9KU09OIiwianNvbiIsImFzc3VtcHRpb25KU09OIiwiZnJvbUpTT04iLCJBc3N1bXB0aW9uIiwiZWxlbWVudHMiLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7eUJBWCtCOzhEQUVYO2dFQUNDO3lCQUdNOzZCQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQ7SUFFUixXQUFlRSxJQUFBQSxnQkFBTSwwQkFBQzs7YUFBTUMsTUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsV0FBVztnQ0FEcEJKOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFdBQVcsR0FBR0E7Ozs7O1lBR3JCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFdBQVc7WUFDekI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNGLFdBQVcsQ0FBQ0csTUFBTTtZQUFFOzs7WUFFOUNDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxhQUFhO2dCQUVqQixJQUFNRixTQUFTLElBQUksQ0FBQ0QsU0FBUztnQkFFN0IsSUFBSUMsV0FBVyxHQUFHO29CQUNoQixJQUFNRyxrQkFBa0JiLE1BQU0sSUFBSSxDQUFDTyxXQUFXO29CQUU5Q0ssYUFBYUMsaUJBQWlCLEdBQUc7Z0JBQ25DO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsZUFBZTtnQkFFbkIsSUFBTUMsV0FBVyxJQUFJLENBQUNDLFVBQVU7Z0JBRWhDLElBQUlELFVBQVU7b0JBQ1osSUFBTUosYUFBYSxJQUFJLENBQUNELGFBQWE7b0JBRXJDSSxlQUFlSCxXQUFXRSxlQUFlO2dCQUMzQztnQkFFQSxPQUFPQztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLG1CQUFtQjtnQkFFdkIsSUFBTUgsV0FBVyxJQUFJLENBQUNDLFVBQVU7Z0JBRWhDLElBQUlELFVBQVU7b0JBQ1pHLG1CQUFtQixJQUFJLENBQUNiLElBQUksQ0FBQ1ksbUJBQW1CO2dCQUNsRDtnQkFFQSxPQUFPQztZQUNUOzs7WUFFQUYsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFlLE9BQU8sSUFBSSxDQUFDWCxJQUFJLENBQUNXLFVBQVU7WUFBSTs7O1lBRTlDRyxLQUFBQTttQkFBQUEsU0FBQUEsa0NBQWtDTCxZQUFZLEVBQUVYLE9BQU87Z0JBQ3JELElBQUlpQjtnQkFFSixJQUFNTCxXQUFXLElBQUksQ0FBQ0MsVUFBVTtnQkFFaEMsSUFBSUQsVUFBVTtvQkFDWixJQUFNTSxnQkFBZ0JQLGNBQ2hCUSwyQkFBMkIsSUFBSSxDQUFDakIsSUFBSSxDQUFDa0IsMkJBQTJCLElBQ2hFTCxtQkFBbUJJLHlCQUF5QkwsbUJBQW1CO29CQUVyRUgsZUFBZVgsUUFBUXFCLGtDQUFrQyxDQUFDTjtvQkFFMUQsSUFBTU8sZ0JBQWdCWCxjQUNoQlksVUFBVUwsY0FBY00sU0FBUyxDQUFDRjtvQkFFeENMLGtDQUFrQ00sU0FBVSxHQUFHO2dCQUNqRDtnQkFFQSxPQUFPTjtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLFNBQVM7Z0JBQUksT0FBTyxJQUFJLENBQUN4QixJQUFJLENBQUN5QixLQUFLLENBQUNEO1lBQVk7OztZQUUvREUsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsWUFBWSxFQUFFN0IsT0FBTztnQkFDckMsSUFBSThCLHNCQUFzQjtnQkFFMUIsSUFBTUMsY0FBYyxJQUFJLENBQUM5QixNQUFNLEVBQ3pCK0IscUJBQXFCSCxhQUFhSSxTQUFTO2dCQUVqRGpDLFFBQVFrQyxLQUFLLENBQUMsQUFBQyxpQkFBaUVILE9BQWpEQyxvQkFBbUIsZ0NBQTBDLE9BQVpELGFBQVk7Z0JBRTVGLElBQUksQ0FBQ0QscUJBQXFCO29CQUN4QkEsc0JBQXNCLElBQUksQ0FBQzNCLFdBQVcsQ0FBQ2dDLElBQUksQ0FBQyxTQUFDM0I7d0JBQzNDLElBQU00QixnQ0FBZ0M1QixXQUFXb0IsaUJBQWlCLENBQUNDLGNBQWM3Qjt3QkFFakYsSUFBSW9DLCtCQUErQjs0QkFDakMsT0FBTzt3QkFDVDtvQkFDRjtnQkFDRjtnQkFFQSxJQUFJTixxQkFBcUI7b0JBQ3ZCOUIsUUFBUXFDLEtBQUssQ0FBQyxBQUFDLG1CQUFvRU4sT0FBbERDLG9CQUFtQixpQ0FBMkMsT0FBWkQsYUFBWTtnQkFDakc7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJDLGFBQWEsRUFBRXZDLE9BQU87O2dCQUN2QyxJQUFJd0M7Z0JBRUosSUFBTVQsY0FBYyxJQUFJLENBQUM5QixNQUFNLEVBQ3pCd0Msc0JBQXNCRixjQUFjRyxRQUFRO2dCQUVsRDFDLFFBQVFrQyxLQUFLLENBQUMsQUFBQyxpQkFBbUVILE9BQW5EVSxxQkFBb0IsaUNBQTJDLE9BQVpWLGFBQVk7Z0JBRTlGUyxxQkFBcUJELGNBQWNJLGlCQUFpQixDQUFDLFNBQUNkO29CQUNwRCxJQUFNQyxzQkFBc0IsTUFBS0YsaUJBQWlCLENBQUNDLGNBQWM3QjtvQkFFakUsSUFBSThCLHFCQUFxQjt3QkFDdkIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFJVSxvQkFBb0I7b0JBQ3RCeEMsUUFBUXFDLEtBQUssQ0FBQyxBQUFDLG1CQUFxRU4sT0FBbkRVLHFCQUFvQixpQ0FBMkMsT0FBWlYsYUFBWTtnQkFDbEc7Z0JBRUEsT0FBT1M7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXLEVBQUVDLE1BQU0sRUFBRTlDLE9BQU87Z0JBQ2pDLElBQUkrQyxXQUFXO2dCQUVmLElBQU1oQixjQUFjLElBQUksQ0FBQzlCLE1BQU0sRUFBRyxHQUFHO2dCQUVyQ0QsUUFBUWtDLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaSCxhQUFZO2dCQUU1QyxJQUFNaUIsb0JBQW9CLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNKLGFBQWFDLFFBQVE5QztnQkFFdEUsSUFBSWdELG1CQUFtQjtvQkFDckIsSUFBSUUscUJBQXFCLE9BQ3JCQyxzQkFBc0I7b0JBRTFCLElBQUlMLFFBQVE7d0JBQ1ZJLHFCQUFxQixJQUFJLENBQUNFLGdCQUFnQixDQUFDUCxhQUFhN0M7b0JBQzFELE9BQU87d0JBQ0xtRCxzQkFBc0IsSUFBSSxDQUFDRSxpQkFBaUIsQ0FBQ3JEO29CQUMvQztvQkFFQSxJQUFJa0Qsc0JBQXNCQyxxQkFBcUI7d0JBQzdDSixXQUFXO29CQUNiO2dCQUNGO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1osSUFBTU8sUUFBUSxJQUFJLEVBQUUsR0FBRztvQkFFdkJ0RCxRQUFRdUQsUUFBUSxDQUFDRDtvQkFFakJ0RCxRQUFRcUMsS0FBSyxDQUFDLEFBQUMsb0JBQStCLE9BQVpOLGFBQVk7Z0JBQ2hEO2dCQUVBLE9BQU9nQjtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQlAsV0FBVyxFQUFFN0MsT0FBTztnQkFDbkMsSUFBSWtELHFCQUFxQjtnQkFFekIsSUFBTW5CLGNBQWMsSUFBSSxDQUFDOUIsTUFBTSxFQUFHLEdBQUc7Z0JBRXJDRCxRQUFRa0MsS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpILGFBQVk7Z0JBRTVDLElBQU1uQixXQUFXLElBQUksQ0FBQ0MsVUFBVTtnQkFFaEMsSUFBSSxDQUFDRCxVQUFVO29CQUNiWixRQUFRa0MsS0FBSyxDQUFDLEFBQUMsUUFBbUIsT0FBWkgsYUFBWTtnQkFDcEMsT0FBTztvQkFDTG1CLHFCQUFxQjtnQkFDdkI7Z0JBRUEsSUFBSUEsb0JBQW9CO29CQUN0QmxELFFBQVFxQyxLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWk4sYUFBWTtnQkFDaEQ7Z0JBRUEsT0FBT21CO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCckQsT0FBTztnQkFDdkIsSUFBSW1EO2dCQUVKLElBQU1wQixjQUFjLElBQUksQ0FBQzlCLE1BQU0sRUFBRyxHQUFHO2dCQUVyQ0QsUUFBUWtDLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaSCxhQUFZO2dCQUU1Q29CLHNCQUFzQjtnQkFFdEIsSUFBSUEscUJBQXFCO29CQUN2Qm5ELFFBQVFxQyxLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWk4sYUFBWTtnQkFDaEQ7Z0JBRUEsT0FBT29CO1lBQ1Q7OztZQUVBRixLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCSixXQUFXLEVBQUVDLE1BQU0sRUFBRTlDLE9BQU87Z0JBQzVDLElBQUlnRCxvQkFBb0IsTUFBTyxHQUFHO2dCQUVsQyxJQUFNMUMsU0FBUyxJQUFJLENBQUNELFNBQVM7Z0JBRTdCLElBQUlDLFNBQVMsR0FBRztvQkFDZCxJQUFNa0QsYUFBYSxBQUFDbEQsU0FBUyxJQUNSbUQsWUFBQyxHQUNDQyxrQkFBTyxFQUN4QkMsb0JBQW9CQyxpQ0FBaUMsSUFBSSxDQUFDekQsV0FBVztvQkFFM0VILFFBQVFrQyxLQUFLLENBQUMsQUFBQyxrQkFBaURzQixPQUFoQ0csbUJBQWtCLGdCQUF5QixPQUFYSCxZQUFXO29CQUUzRVYsU0FBUyxNQUFPLEdBQUc7b0JBRW5CRCxjQUFjLE1BQU0sR0FBRztvQkFFdkJHLG9CQUFvQixJQUFJLENBQUM3QyxXQUFXLENBQUMwRCxLQUFLLENBQUMsU0FBQ3JEO3dCQUMxQyxJQUFNc0QscUJBQXFCdEQsV0FBV29DLE1BQU0sQ0FBQ0MsYUFBYUMsUUFBUTlDO3dCQUVsRSxPQUFPOEQ7b0JBQ1Q7b0JBRUEsSUFBSWQsbUJBQW1CO3dCQUNyQmhELFFBQVFxQyxLQUFLLENBQUMsQUFBQyxvQkFBbURtQixPQUFoQ0csbUJBQWtCLGdCQUF5QixPQUFYSCxZQUFXO29CQUMvRTtnQkFDRjtnQkFFQSxPQUFPUjtZQUNUOzs7WUFFQWUsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQkMsUUFBUSxFQUFFbkIsV0FBVyxFQUFFQyxNQUFNLEVBQUU5QyxPQUFPO2dCQUN4RCxJQUFJaUUsd0JBQXdCO2dCQUU1QixJQUFNbEMsY0FBYyxJQUFJLENBQUM5QixNQUFNLEVBQ3pCaUUsaUJBQWlCRixTQUFTL0IsU0FBUztnQkFFekNqQyxRQUFRa0MsS0FBSyxDQUFDLEFBQUMsa0JBQWtEZ0MsT0FBakNuQyxhQUFZLHVCQUFvQyxPQUFmbUMsZ0JBQWU7Z0JBRWhGLElBQU1DLGVBQWVILFNBQVNJLE9BQU87Z0JBRXJDLElBQUlELGlCQUFpQkUsbUNBQW9CLEVBQUU7b0JBQ3pDLElBQU10QixXQUFXLElBQUksQ0FBQ0gsTUFBTSxDQUFDQyxhQUFhQyxRQUFROUM7b0JBRWxEaUUsd0JBQXdCbEIsVUFBVSxHQUFHO2dCQUN2QztnQkFFQSxJQUFJa0IsdUJBQXVCO29CQUN6QmpFLFFBQVFxQyxLQUFLLENBQUMsQUFBQyxvQkFBb0Q2QixPQUFqQ25DLGFBQVksdUJBQW9DLE9BQWZtQyxnQkFBZTtnQkFDcEY7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxPQUFPO2dCQUVYLElBQU0zRCxXQUFXLElBQUksQ0FBQ0MsVUFBVTtnQkFFaEMsSUFBSUQsVUFBVTtvQkFDWixJQUFNSixhQUFhLElBQUksQ0FBQ0QsYUFBYSxJQUMvQmlFLGlCQUFpQmhFLFdBQVc4RCxNQUFNO29CQUV4Q0MsT0FBT0MsZ0JBQWlCLEdBQUc7Z0JBQzdCO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7WUFJT0UsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0YsSUFBSSxFQUFFdkUsT0FBTztnQkFDM0IsSUFBSXNELFFBQVE7Z0JBRVosSUFBSWlCLFNBQVMsTUFBTTtvQkFDakIsSUFBTSxBQUFFRyxhQUFjQyxpQkFBUSxDQUF0QkQsWUFDRmxFLGFBQWFrRSxXQUFXRCxRQUFRLENBQUNGLE1BQU12RSxVQUN2Q0csY0FBYzt3QkFDWks7cUJBQ0QsRUFDRFAsU0FBUyxNQUNUQyxPQUFPO29CQUVib0QsUUFBUSxJQUFJdkQsTUFBTUUsUUFBUUMsTUFBTUM7Z0JBQ2xDO2dCQUVBLE9BQU9tRDtZQUNUOzs7O3FCQTlSd0NzQixnQkFBTyxJQTRRL0MseUJBQU9DLFFBQU8ifQ==