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
var _occamlanguages = require("occam-languages");
var _elements = require("../elements");
var _metaTypeNames = require("../metaTypeNames");
var _metaTypes = require("../metaTypes");
var _string = require("../utilities/string");
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
var _default = (0, _elements.define)((_Frame = /*#__PURE__*/ function(Element) {
    _inherits(Frame, Element);
    function Frame(context, string, node, assumptions, metavairable) {
        _class_call_check(this, Frame);
        var _this;
        _this = _call_super(this, Frame, [
            context,
            string,
            node
        ]);
        _this.assumptions = assumptions;
        _this.metavariable = metavairable;
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
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "getMetavariableName",
            value: function getMetavariableName() {
                var node = this.getNode(), metavariableName = node.getMetavariableName();
                return metavariableName;
            }
        },
        {
            key: "getFrameNode",
            value: function getFrameNode() {
                var node = this.getNode(), frameNode = node; ///
                return frameNode;
            }
        },
        {
            key: "compareMetavariable",
            value: function compareMetavariable(metavariable) {
                var metavaraibleComparseTo = false;
                var singular = this.isSingular();
                if (singular) {
                    var metavariableName;
                    metavariableName = this.metavariable.getName();
                    var metavariableNameA = metavariableName ///
                    ;
                    metavariableName = metavariable.getName();
                    var metavariableNameB = metavariableName; ///
                    metavaraibleComparseTo = metavariableNameA === metavariableNameB;
                }
                return metavaraibleComparseTo;
            }
        },
        {
            key: "matchFrameNode",
            value: function matchFrameNode(frameNode) {
                var frameNodeA = frameNode; ///
                frameNode = this.getFrameNode();
                var frameNodeB = frameNode, frameNodeAAMatchesFrameBNodeB = frameNodeA.match(frameNodeB), equalTo = frameNodeAAMatchesFrameBNodeB; ///
                return equalTo;
            }
        },
        {
            key: "isValid",
            value: function isValid(context) {
                var frameNode = this.getFrameNode(), framePresent = context.isFramePresentByFrameNode(frameNode), valid = framePresent; ///
                return valid;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(frame) {
                var frameNode = frame.getNode(), frameNodeMatches = this.matchFrameNode(frameNode), equalTo = frameNodeMatches; ///
                return equalTo;
            }
        },
        {
            key: "isSingular",
            value: function isSingular() {
                var node = this.getNode(), frameNode = node, singular = frameNode.isSingular();
                return singular;
            }
        },
        {
            key: "compareParameter",
            value: function compareParameter(parameter) {
                var comparesToParamter = false;
                var singular = this.isSingular();
                if (singular) {
                    var parameterName = parameter.getName();
                    if (parameterName !== null) {
                        var metavariableName = this.getMetavariableName();
                        if (parameterName === metavariableName) {
                            comparesToParamter = true;
                        }
                    }
                }
                return comparesToParamter;
            }
        },
        {
            key: "compareSubstitution",
            value: function compareSubstitution(substitution, context) {
                var comparesToSubstitution = false;
                var frameString = this.getString(), substitutionString = substitution.getString();
                context.trace("Comparing the '".concat(frameString, "' frame to the '").concat(substitutionString, "' substitution..."));
                if (!comparesToSubstitution) {
                    comparesToSubstitution = this.assumptions.some(function(assumption) {
                        var assumptionComparesToSubstitution = assumption.compareSubstitution(substitution, context);
                        if (assumptionComparesToSubstitution) {
                            return true;
                        }
                    });
                }
                if (comparesToSubstitution) {
                    context.debug("...compared the the '".concat(frameString, "' frame to the '").concat(substitutionString, "' substitutions."));
                }
                return comparesToSubstitution;
            }
        },
        {
            key: "compareSubstitutions",
            value: function compareSubstitutions(substitutions, context) {
                var _this = this;
                var comparesToSubstitutions;
                var frameString = this.getString(), substitutionsString = substitutions.asString();
                context.trace("Comparing the '".concat(frameString, "' frame to the '").concat(substitutionsString, "' substitutions..."));
                comparesToSubstitutions = substitutions.every(function(substitution) {
                    var compaaresToSubstitution = _this.compareSubstitution(substitution, context);
                    if (compaaresToSubstitution) {
                        return true;
                    }
                });
                if (comparesToSubstitutions) {
                    context.debug("...compared the '".concat(frameString, "' frame to the '").concat(substitutionsString, "' substitutions."));
                }
                return comparesToSubstitutions;
            }
        },
        {
            key: "validate",
            value: function validate(assignments, stated, context) {
                var validates = false;
                var frameString = this.getString(); ///
                context.trace("Validating the '".concat(frameString, "' frame..."));
                var valid = this.isValid(context);
                if (valid) {
                    validates = true;
                    context.debug("...the '".concat(frameString, "' frame is already valid."));
                } else {
                    var assumptionsValidate = this.validateAssumptions(assignments, stated, context), metavariablevalidates = this.validateMetavariable(assignments, stated, context);
                    if (assumptionsValidate && metavariablevalidates) {
                        var validatesWhenStated = false, validatesWhenDerived = false;
                        if (stated) {
                            validatesWhenStated = this.validateWhenStated(assignments, context);
                        } else {
                            validatesWhenDerived = this.validateWhenDerived(context);
                        }
                        if (validatesWhenStated || validatesWhenDerived) {
                            validates = true;
                        }
                    }
                    if (validates) {
                        var frame = this; ///
                        context.addFrame(frame);
                        context.debug("...validated the '".concat(frameString, "' frame."));
                    }
                }
                return validates;
            }
        },
        {
            key: "validateWhenStated",
            value: function validateWhenStated(assignments, context) {
                var validatesWhenStated = false;
                var frameString = this.getString(); ///
                context.trace("Validating the '".concat(frameString, "' stated frame..."));
                var singular = this.isSingular();
                if (singular) {
                    validatesWhenStated = true;
                } else {
                    context.trace("The '".concat(frameString, "' stated frame must be singular."));
                }
                if (validatesWhenStated) {
                    context.debug("...validated the '".concat(frameString, "' stated frame."));
                }
                return validatesWhenStated;
            }
        },
        {
            key: "validateWhenDerived",
            value: function validateWhenDerived(context) {
                var validatesWhenDerived;
                var frameString = this.getString(); ///
                context.trace("Verifying the '".concat(frameString, "' derived frame..."));
                validatesWhenDerived = true;
                if (validatesWhenDerived) {
                    context.debug("...verified the '".concat(frameString, "' derived frame."));
                }
                return validatesWhenDerived;
            }
        },
        {
            key: "validateAssumptions",
            value: function validateAssumptions(assignments, stated, context) {
                var assumptionsValidate;
                var singular = this.isSingular();
                if (!singular) {
                    var frameString = this.getString(), assumptionsString = (0, _string.assumptionsStringFromAssumptions)(this.assumptions);
                    context.trace("Validating the '".concat(assumptionsString, "' assumptions of the '").concat(frameString, "' frame..."));
                    stated = true; ///
                    assignments = null; ///
                    assumptionsValidate = this.assumptions.every(function(assumption) {
                        var assumptionVerifies = assumption.validate(assignments, stated, context);
                        return assumptionVerifies;
                    });
                    if (assumptionsValidate) {
                        context.debug("...validated the '".concat(assumptionsString, "' assumptions of the '").concat(frameString, "' frame."));
                    }
                } else {
                    assumptionsValidate = true;
                }
                return assumptionsValidate;
            }
        },
        {
            key: "validateMetavariable",
            value: function validateMetavariable(assignments, stated, context) {
                var metavariableValidates = false;
                var singular = this.isSingular();
                if (singular) {
                    var frameString = this.getString(), metavraibleString = this.metavariable.getString();
                    context.trace("Validating the '".concat(frameString, "' frame's '").concat(metavraibleString, "' metavariable..."));
                    var metavariable = context.findMetavariable(this.metavariable);
                    if (metavariable !== null) {
                        var metaTypeName = _metaTypeNames.FRAME_META_TYPE_NAME, frameMetaType = (0, _metaTypes.findMetaTypeByMetaTypeName)(metaTypeName), metavariableValidateGivenMetaType = metavariable.validateGivenMetaType(frameMetaType, context);
                        if (metavariableValidateGivenMetaType) {
                            metavariableValidates = true;
                        }
                    } else {
                        context.debug("The '".concat(frameString, "' frame's '").concat(metavraibleString, "' metavariable is not present."));
                    }
                    if (metavariableValidates) {
                        context.debug("...validated the '".concat(frameString, "' frame's '").concat(metavraibleString, "' metavariable."));
                    }
                } else {
                    metavariableValidates = true;
                }
                return metavariableValidates;
            }
        },
        {
            key: "validateGivenMetaType",
            value: function validateGivenMetaType(metaType, assignments, stated, context) {
                var validatesGivenMetaType = false;
                var frameString = this.getString(), metaTypeString = metaType.getString();
                context.trace("Validating the '".concat(frameString, "' frame given the '").concat(metaTypeString, "' meta-type..."));
                var metaTypeName = metaType.getName();
                if (metaTypeName === _metaTypeNames.FRAME_META_TYPE_NAME) {
                    var validates = this.validate(assignments, stated, context);
                    validatesGivenMetaType = validates; ///
                }
                if (validatesGivenMetaType) {
                    context.debug("...validated the '".concat(frameString, "' frame given the '").concat(metaTypeString, "' meta-type."));
                }
                return validatesGivenMetaType;
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
                    var Assumption = elements.Assumption, assumption = Assumption.fromJSON(json, context), assumptions = [
                        assumption
                    ], string = null, node = null;
                    frame = new Frame(string, node, assumptions);
                }
                return frame;
            }
        }
    ]);
    return Frame;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Frame, "name", "Frame"), _Frame));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIH0gZnJvbSBcIi4uL21ldGFUeXBlc1wiO1xuaW1wb3J0IHsgYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRnJhbWUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhc3N1bXB0aW9ucywgbWV0YXZhaXJhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9ucztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YWlyYWJsZTtcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBub2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0RnJhbWVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBmcmFtZU5vZGU7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGxldCBtZXRhdmFyYWlibGVDb21wYXJzZVRvID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBsZXQgbWV0YXZhcmlhYmxlTmFtZTtcblxuICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUEgPSBtZXRhdmFyaWFibGVOYW1lIC8vL1xuXG4gICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUIgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgICAgbWV0YXZhcmFpYmxlQ29tcGFyc2VUbyA9IChtZXRhdmFyaWFibGVOYW1lQSA9PT0gbWV0YXZhcmlhYmxlTmFtZUIpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyYWlibGVDb21wYXJzZVRvO1xuICB9XG5cbiAgbWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlQSA9IGZyYW1lTm9kZTsgLy8vXG5cbiAgICBmcmFtZU5vZGUgPSB0aGlzLmdldEZyYW1lTm9kZSgpO1xuXG4gICAgY29uc3QgZnJhbWVOb2RlQiA9IGZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgZnJhbWVOb2RlQUFNYXRjaGVzRnJhbWVCTm9kZUIgPSBmcmFtZU5vZGVBLm1hdGNoKGZyYW1lTm9kZUIpLFxuICAgICAgICAgIGVxdWFsVG8gPSBmcmFtZU5vZGVBQU1hdGNoZXNGcmFtZUJOb2RlQjsgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzVmFsaWQoY29udGV4dCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgZnJhbWVQcmVzZW50ID0gY29udGV4dC5pc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgdmFsaWQgPSBmcmFtZVByZXNlbnQ7ICAvLy9cblxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIGlzRXF1YWxUbyhmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBmcmFtZU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIHNpbmd1bGFyID0gZnJhbWVOb2RlLmlzU2luZ3VsYXIoKTtcblxuICAgIHJldHVybiBzaW5ndWxhcjtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9QYXJhbXRlciA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICBpZiAocGFyYW1ldGVyTmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtdGVyO1xuICB9XG5cbiAgY29tcGFyZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGlmICghY29tcGFyZXNUb1N1YnN0aXR1dGlvbikge1xuICAgICAgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IHRoaXMuYXNzdW1wdGlvbnMuc29tZSgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uQ29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IGFzc3VtcHRpb24uY29tcGFyZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3N1bXB0aW9uQ29tcGFyZXNUb1N1YnN0aXR1dGlvbikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29tcGFyZXNUb1N1YnN0aXR1dGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb25zLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3Vic3RpdHV0aW9ucztcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zLi4uYCk7XG5cbiAgICBjb21wYXJlc1RvU3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnMuZXZlcnkoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgY29tcGFhcmVzVG9TdWJzdGl0dXRpb24gPSB0aGlzLmNvbXBhcmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGNvbXBhYXJlc1RvU3Vic3RpdHV0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNvbXBhcmVzVG9TdWJzdGl0dXRpb25zKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgdmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgdmFsaWQgPSB0aGlzLmlzVmFsaWQoY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFzc3VtcHRpb25zVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlQXNzdW1wdGlvbnMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGV2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlTWV0YXZhcmlhYmxlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoYXNzdW1wdGlvbnNWYWxpZGF0ZSAmJiBtZXRhdmFyaWFibGV2YWxpZGF0ZXMpIHtcbiAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRGcmFtZShmcmFtZSk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBtdXN0IGJlIHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHZhbGlkYXRlQXNzdW1wdGlvbnMoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uc1ZhbGlkYXRlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICghc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgICBhc3N1bXB0aW9uc1N0cmluZyA9IGFzc3VtcHRpb25zU3RyaW5nRnJvbUFzc3VtcHRpb25zKHRoaXMuYXNzdW1wdGlvbnMpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uc1N0cmluZ30nIGFzc3VtcHRpb25zIG9mIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgICAgYXNzdW1wdGlvbnNWYWxpZGF0ZSA9IHRoaXMuYXNzdW1wdGlvbnMuZXZlcnkoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvblZlcmlmaWVzID0gYXNzdW1wdGlvbi52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gYXNzdW1wdGlvblZlcmlmaWVzO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChhc3N1bXB0aW9uc1ZhbGlkYXRlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvbnNTdHJpbmd9JyBhc3N1bXB0aW9ucyBvZiB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXNzdW1wdGlvbnNWYWxpZGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zVmFsaWRhdGU7XG4gIH1cblxuICB2YWxpZGF0ZU1ldGF2YXJpYWJsZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICAgIG1ldGF2cmFpYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHttZXRhdnJhaWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGUodGhpcy5tZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IEZSQU1FX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgICAgICBmcmFtZU1ldGFUeXBlID0gZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVHaXZlbk1ldGFUeXBlID0gbWV0YXZhcmlhYmxlLnZhbGlkYXRlR2l2ZW5NZXRhVHlwZShmcmFtZU1ldGFUeXBlLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVHaXZlbk1ldGFUeXBlKSB7XG4gICAgICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHttZXRhdnJhaWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHttZXRhdnJhaWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gRlJBTUVfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dClcblxuICAgICAgdmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSA9IHZhbGlkYXRlczsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc0dpdmVuTWV0YVR5cGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGpzb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgYXNzdW1wdGlvbiA9IHRoaXMuZ2V0QXNzdW1wdGlvbigpLFxuICAgICAgICAgICAgYXNzdW1wdGlvbkpTT04gPSBhc3N1bXB0aW9uLnRvSlNPTigpO1xuXG4gICAgICBqc29uID0gYXNzdW1wdGlvbkpTT047ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJGcmFtZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lID0gbnVsbDtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IEFzc3VtcHRpb24gfSA9ZWxlbWVudHMsXG4gICAgICAgICAgICBhc3N1bXB0aW9uID0gQXNzdW1wdGlvbi5mcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGFzc3VtcHRpb25zID0gW1xuICAgICAgICAgICAgICBhc3N1bXB0aW9uXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICAgIG5vZGUgPSBudWxsO1xuXG4gICAgICBmcmFtZSA9IG5ldyBGcmFtZShzdHJpbmcsIG5vZGUsIGFzc3VtcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkZyYW1lIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJhc3N1bXB0aW9ucyIsIm1ldGF2YWlyYWJsZSIsIm1ldGF2YXJpYWJsZSIsImdldEFzc3VtcHRpb25zIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsImdldE5vZGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0RnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJhaWJsZUNvbXBhcnNlVG8iLCJzaW5ndWxhciIsImlzU2luZ3VsYXIiLCJnZXROYW1lIiwibWV0YXZhcmlhYmxlTmFtZUEiLCJtZXRhdmFyaWFibGVOYW1lQiIsIm1hdGNoRnJhbWVOb2RlIiwiZnJhbWVOb2RlQSIsImZyYW1lTm9kZUIiLCJmcmFtZU5vZGVBQU1hdGNoZXNGcmFtZUJOb2RlQiIsIm1hdGNoIiwiZXF1YWxUbyIsImlzVmFsaWQiLCJmcmFtZVByZXNlbnQiLCJpc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlIiwidmFsaWQiLCJpc0VxdWFsVG8iLCJmcmFtZSIsImZyYW1lTm9kZU1hdGNoZXMiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVyTmFtZSIsImNvbXBhcmVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJjb21wYXJlc1RvU3Vic3RpdHV0aW9uIiwiZnJhbWVTdHJpbmciLCJnZXRTdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsInNvbWUiLCJhc3N1bXB0aW9uIiwiYXNzdW1wdGlvbkNvbXBhcmVzVG9TdWJzdGl0dXRpb24iLCJkZWJ1ZyIsImNvbXBhcmVTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImNvbXBhcmVzVG9TdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsImFzU3RyaW5nIiwiZXZlcnkiLCJjb21wYWFyZXNUb1N1YnN0aXR1dGlvbiIsInZhbGlkYXRlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2YWxpZGF0ZXMiLCJhc3N1bXB0aW9uc1ZhbGlkYXRlIiwidmFsaWRhdGVBc3N1bXB0aW9ucyIsIm1ldGF2YXJpYWJsZXZhbGlkYXRlcyIsInZhbGlkYXRlTWV0YXZhcmlhYmxlIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFkZEZyYW1lIiwiYXNzdW1wdGlvbnNTdHJpbmciLCJhc3N1bXB0aW9uc1N0cmluZ0Zyb21Bc3N1bXB0aW9ucyIsImFzc3VtcHRpb25WZXJpZmllcyIsIm1ldGF2YXJpYWJsZVZhbGlkYXRlcyIsIm1ldGF2cmFpYmxlU3RyaW5nIiwiZmluZE1ldGF2YXJpYWJsZSIsIm1ldGFUeXBlTmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiZnJhbWVNZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YXZhcmlhYmxlVmFsaWRhdGVHaXZlbk1ldGFUeXBlIiwidmFsaWRhdGVHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGUiLCJ2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJ0b0pTT04iLCJqc29uIiwiZ2V0QXNzdW1wdGlvbiIsImFzc3VtcHRpb25KU09OIiwiZnJvbUpTT04iLCJBc3N1bXB0aW9uIiwiZWxlbWVudHMiLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7OEJBUHdCO3dCQUVEOzZCQUNjO3lCQUNNO3NCQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVqRCxXQUFlQSxJQUFBQSxnQkFBTSwwQkFBQzs7YUFBTUMsTUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxZQUFZO2dDQURsQ0w7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsV0FBVyxHQUFHQTtRQUNuQixNQUFLRSxZQUFZLEdBQUdEOzs7OztZQUd0QkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxXQUFXO1lBQ3pCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1OLE9BQU8sSUFBSSxDQUFDTyxPQUFPLElBQ25CQyxtQkFBbUJSLEtBQUtNLG1CQUFtQjtnQkFFakQsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVCxPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQkcsWUFBWVYsTUFBTSxHQUFHO2dCQUUzQixPQUFPVTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQlIsWUFBWTtnQkFDOUIsSUFBSVMseUJBQXlCO2dCQUU3QixJQUFNQyxXQUFXLElBQUksQ0FBQ0MsVUFBVTtnQkFFaEMsSUFBSUQsVUFBVTtvQkFDWixJ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