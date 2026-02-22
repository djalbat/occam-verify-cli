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
            key: "getFrameNode",
            value: function getFrameNode() {
                var node = this.getNode(), frameNode = node; ///
                return frameNode;
            }
        },
        {
            key: "getMetavariableName",
            value: function getMetavariableName() {
                var frameNode = this.getFrameNode(), metavariableName = frameNode.getMetavariableName();
                return metavariableName;
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                var frameNode = this.getFrameNode(), metavariableNode = frameNode.getMetavariableNode();
                return metavariableNode;
            }
        },
        {
            key: "matchFrameNode",
            value: function matchFrameNode(frameNode) {
                var frameNodeA = frameNode; ///
                frameNode = this.getFrameNode();
                var frameNodeB = frameNode, frameNodeAAMatchesFrameBNodeB = frameNodeA.match(frameNodeB), frameNodeMatches = frameNodeAAMatchesFrameBNodeB; ///
                return frameNodeMatches;
            }
        },
        {
            key: "findValidFrame",
            value: function findValidFrame(context) {
                var frameNode = this.getFrameNode(), frame = context.findFrameByFrameNode(frameNode), validFrame = frame; ///
                return validFrame;
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
                var frameNode = this.getFrameNode(), singular = frameNode.isSingular();
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
            key: "compareMetavariableName",
            value: function compareMetavariableName(metavariableName) {
                var comparesToMetavariableName = false;
                var singular = this.isSingular();
                if (singular) {
                    var metavariableNameA = metavariableName ///
                    ;
                    metavariableName = this.getMetavariableName();
                    var metavariableNameB = metavariableName; ///
                    comparesToMetavariableName = metavariableNameA === metavariableNameB;
                }
                return comparesToMetavariableName;
            }
        },
        {
            key: "validate",
            value: function validate(stated, context) {
                var frame = null;
                var frameString = this.getString(); ///
                context.trace("Validating the '".concat(frameString, "' frame..."));
                var validFrame = this.findValidFrame(context), valid = validFrame !== null;
                if (valid) {
                    frame = validFrame; ///
                    context.debug("...the '".concat(frameString, "' frame is already valid."));
                } else {
                    var validates = false;
                    var assumptionsValidate = this.validateAssumptions(stated, context), metavariablevalidates = this.validateMetavariable(stated, context);
                    if (assumptionsValidate && metavariablevalidates) {
                        var validatesWhenStated = false, validatesWhenDerived = false;
                        if (stated) {
                            validatesWhenStated = this.validateWhenStated(context);
                        } else {
                            validatesWhenDerived = this.validateWhenDerived(context);
                        }
                        if (validatesWhenStated || validatesWhenDerived) {
                            validates = true;
                        }
                    }
                    if (validates) {
                        frame = this; ///
                        context.addFrame(frame);
                        context.debug("...validated the '".concat(frameString, "' frame."));
                    }
                }
                return frame;
            }
        },
        {
            key: "validateWhenStated",
            value: function validateWhenStated(context) {
                var validatesWhenStated = false;
                var frameString = this.getString(); ///
                context.trace("Validating the '".concat(frameString, "' stated frame..."));
                var singular = this.isSingular();
                if (singular) {
                    validatesWhenStated = true;
                } else {
                    context.debug("The '".concat(frameString, "' stated frame must be singular."));
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
            value: function validateAssumptions(stated, context) {
                var assumptionsValidate;
                var singular = this.isSingular();
                if (!singular) {
                    var frameString = this.getString(), assumptionsString = (0, _string.assumptionsStringFromAssumptions)(this.assumptions);
                    context.trace("Validating the '".concat(assumptionsString, "' assumptions of the '").concat(frameString, "' frame..."));
                    stated = true; ///
                    var assumptions = [];
                    assumptionsValidate = this.assumptions.every(function(assumption) {
                        var assumptionValidates = assumption.validate(stated, context);
                        if (assumptionValidates) {
                            assumptions.push(assumption);
                            return true;
                        }
                    });
                    if (assumptionsValidate) {
                        this.assumptions = assumptions;
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
            value: function validateMetavariable(stated, context) {
                var metavariableValidates = false;
                var singular = this.isSingular();
                if (singular) {
                    var frameString = this.getString(), metavraibleString = this.metavariable.getString();
                    context.trace("Validating the '".concat(frameString, "' frame's '").concat(metavraibleString, "' metavariable..."));
                    var metavariablePresent = context.isMetavariablePresent(this.metavariable);
                    if (metavariablePresent) {
                        var metaTypeName = _metaTypeNames.FRAME_META_TYPE_NAME, frameMetaType = context.findMetaTypeByMetaTypeName(metaTypeName), metavariableValidateGivenMetaType = this.metavariable.validateGivenMetaType(frameMetaType, context);
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
            value: function validateGivenMetaType(metaType, stated, context) {
                var validatesGivenMetaType = false;
                var frameString = this.getString(), metaTypeString = metaType.getString();
                context.trace("Validating the '".concat(frameString, "' frame given the '").concat(metaTypeString, "' meta-type..."));
                var metaTypeName = metaType.getName();
                if (metaTypeName === _metaTypeNames.FRAME_META_TYPE_NAME) {
                    var validates = this.validate(stated, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIH0gZnJvbSBcIi4uL21ldGFUeXBlc1wiO1xuaW1wb3J0IHsgYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRnJhbWUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhc3N1bXB0aW9ucywgbWV0YXZhaXJhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9ucztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YWlyYWJsZTtcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldEZyYW1lTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZnJhbWVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSB0aGlzLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBmcmFtZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIG1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZUEgPSBmcmFtZU5vZGU7IC8vL1xuXG4gICAgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKTtcblxuICAgIGNvbnN0IGZyYW1lTm9kZUIgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICAgIGZyYW1lTm9kZUFBTWF0Y2hlc0ZyYW1lQk5vZGVCID0gZnJhbWVOb2RlQS5tYXRjaChmcmFtZU5vZGVCKSxcbiAgICAgICAgICBmcmFtZU5vZGVNYXRjaGVzID0gZnJhbWVOb2RlQUFNYXRjaGVzRnJhbWVCTm9kZUI7IC8vL1xuXG4gICAgcmV0dXJuIGZyYW1lTm9kZU1hdGNoZXM7XG4gIH1cblxuICBmaW5kVmFsaWRGcmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICB2YWxpZEZyYW1lID0gZnJhbWU7IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkRnJhbWU7XG4gIH1cblxuICBpc0VxdWFsVG8oZnJhbWUpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gZnJhbWVOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgc2luZ3VsYXIgPSBmcmFtZU5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJOYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgICAgaWYgKHBhcmFtZXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgIGlmIChwYXJhbWV0ZXJOYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgaWYgKCFjb21wYXJlc1RvU3Vic3RpdHV0aW9uKSB7XG4gICAgICBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gdGhpcy5hc3N1bXB0aW9ucy5zb21lKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGFzc3VtcHRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uID0gYXNzdW1wdGlvbi5jb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc3VtcHRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb21wYXJlc1RvU3Vic3RpdHV0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbnMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJzdGl0dXRpb247XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TdWJzdGl0dXRpb25zO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnMuYXNTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMuLi5gKTtcblxuICAgIGNvbXBhcmVzVG9TdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucy5ldmVyeSgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBjb21wYWFyZXNUb1N1YnN0aXR1dGlvbiA9IHRoaXMuY29tcGFyZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoY29tcGFhcmVzVG9TdWJzdGl0dXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY29tcGFyZXNUb1N1YnN0aXR1dGlvbnMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWUgLy8vXG5cbiAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUIgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSAobWV0YXZhcmlhYmxlTmFtZUEgPT09IG1ldGF2YXJpYWJsZU5hbWVCKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICB2YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEZyYW1lID0gdGhpcy5maW5kVmFsaWRGcmFtZShjb250ZXh0KSxcbiAgICAgICAgICB2YWxpZCA9ICh2YWxpZEZyYW1lICE9PSBudWxsKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgZnJhbWUgPSB2YWxpZEZyYW1lOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZUFzc3VtcHRpb25zKHN0YXRlZCwgY29udGV4dCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGV2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlTWV0YXZhcmlhYmxlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChhc3N1bXB0aW9uc1ZhbGlkYXRlICYmIG1ldGF2YXJpYWJsZXZhbGlkYXRlcykge1xuICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgZnJhbWUgPSB0aGlzOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEZyYW1lKGZyYW1lKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBtdXN0IGJlIHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHZhbGlkYXRlQXNzdW1wdGlvbnMoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb25zVmFsaWRhdGU7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKCFzaW5ndWxhcikge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICAgIGFzc3VtcHRpb25zU3RyaW5nID0gYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnModGhpcy5hc3N1bXB0aW9ucyk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25zU3RyaW5nfScgYXNzdW1wdGlvbnMgb2YgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBjb25zdCBhc3N1bXB0aW9ucyA9IFtdO1xuXG4gICAgICBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdGhpcy5hc3N1bXB0aW9ucy5ldmVyeSgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uVmFsaWRhdGVzID0gYXNzdW1wdGlvbi52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3N1bXB0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgICAgYXNzdW1wdGlvbnMucHVzaChhc3N1bXB0aW9uKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFzc3VtcHRpb25zVmFsaWRhdGUpIHtcbiAgICAgICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvbnNTdHJpbmd9JyBhc3N1bXB0aW9ucyBvZiB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXNzdW1wdGlvbnNWYWxpZGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zVmFsaWRhdGU7XG4gIH1cblxuICB2YWxpZGF0ZU1ldGF2YXJpYWJsZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgICAgbWV0YXZyYWlibGVTdHJpbmcgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke21ldGF2cmFpYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudCh0aGlzLm1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IEZSQU1FX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgICAgICBmcmFtZU1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZUdpdmVuTWV0YVR5cGUgPSB0aGlzLm1ldGF2YXJpYWJsZS52YWxpZGF0ZUdpdmVuTWV0YVR5cGUoZnJhbWVNZXRhVHlwZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7bWV0YXZyYWlibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7bWV0YXZyYWlibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlR2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gRlJBTUVfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KVxuXG4gICAgICB2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlID0gdmFsaWRhdGVzOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQganNvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcy5nZXRBc3N1bXB0aW9uKCksXG4gICAgICAgICAgICBhc3N1bXB0aW9uSlNPTiA9IGFzc3VtcHRpb24udG9KU09OKCk7XG5cbiAgICAgIGpzb24gPSBhc3N1bXB0aW9uSlNPTjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgQXNzdW1wdGlvbiB9ID1lbGVtZW50cyxcbiAgICAgICAgICAgIGFzc3VtcHRpb24gPSBBc3N1bXB0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgYXNzdW1wdGlvbnMgPSBbXG4gICAgICAgICAgICAgIGFzc3VtcHRpb25cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgICAgbm9kZSA9IG51bGw7XG5cbiAgICAgIGZyYW1lID0gbmV3IEZyYW1lKHN0cmluZywgbm9kZSwgYXNzdW1wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRnJhbWUiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImFzc3VtcHRpb25zIiwibWV0YXZhaXJhYmxlIiwibWV0YXZhcmlhYmxlIiwiZ2V0QXNzdW1wdGlvbnMiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRGcmFtZU5vZGUiLCJnZXROb2RlIiwiZnJhbWVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoRnJhbWVOb2RlIiwiZnJhbWVOb2RlQSIsImZyYW1lTm9kZUIiLCJmcmFtZU5vZGVBQU1hdGNoZXNGcmFtZUJOb2RlQiIsIm1hdGNoIiwiZnJhbWVOb2RlTWF0Y2hlcyIsImZpbmRWYWxpZEZyYW1lIiwiZnJhbWUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsInZhbGlkRnJhbWUiLCJpc0VxdWFsVG8iLCJlcXVhbFRvIiwiaXNTaW5ndWxhciIsInNpbmd1bGFyIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsInBhcmFtZXRlck5hbWUiLCJnZXROYW1lIiwiY29tcGFyZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImNvbXBhcmVzVG9TdWJzdGl0dXRpb24iLCJmcmFtZVN0cmluZyIsImdldFN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwic29tZSIsImFzc3VtcHRpb24iLCJhc3N1bXB0aW9uQ29tcGFyZXNUb1N1YnN0aXR1dGlvbiIsImRlYnVnIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiY29tcGFyZXNUb1N1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zU3RyaW5nIiwiYXNTdHJpbmciLCJldmVyeSIsImNvbXBhYXJlc1RvU3Vic3RpdHV0aW9uIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVBIiwibWV0YXZhcmlhYmxlTmFtZUIiLCJ2YWxpZGF0ZSIsInN0YXRlZCIsInZhbGlkIiwidmFsaWRhdGVzIiwiYXNzdW1wdGlvbnNWYWxpZGF0ZSIsInZhbGlkYXRlQXNzdW1wdGlvbnMiLCJtZXRhdmFyaWFibGV2YWxpZGF0ZXMiLCJ2YWxpZGF0ZU1ldGF2YXJpYWJsZSIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhZGRGcmFtZSIsImFzc3VtcHRpb25zU3RyaW5nIiwiYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnMiLCJhc3N1bXB0aW9uVmFsaWRhdGVzIiwicHVzaCIsIm1ldGF2YXJpYWJsZVZhbGlkYXRlcyIsIm1ldGF2cmFpYmxlU3RyaW5nIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsIm1ldGFUeXBlTmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiZnJhbWVNZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YXZhcmlhYmxlVmFsaWRhdGVHaXZlbk1ldGFUeXBlIiwidmFsaWRhdGVHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGUiLCJ2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJ0b0pTT04iLCJqc29uIiwiZ2V0QXNzdW1wdGlvbiIsImFzc3VtcHRpb25KU09OIiwiZnJvbUpTT04iLCJBc3N1bXB0aW9uIiwiZWxlbWVudHMiLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7OEJBUHdCO3dCQUVEOzZCQUNjO3lCQUNNO3NCQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVqRCxXQUFlQSxJQUFBQSxnQkFBTSwwQkFBQzs7YUFBTUMsTUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxZQUFZO2dDQURsQ0w7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsV0FBVyxHQUFHQTtRQUNuQixNQUFLRSxZQUFZLEdBQUdEOzs7OztZQUd0QkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxXQUFXO1lBQ3pCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1OLE9BQU8sSUFBSSxD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