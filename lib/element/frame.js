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
                debugger;
            }
        }
    ]);
    return Frame;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Frame, "name", "Frame"), _Frame));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIH0gZnJvbSBcIi4uL21ldGFUeXBlc1wiO1xuaW1wb3J0IHsgYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRnJhbWUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhc3N1bXB0aW9ucywgbWV0YXZhaXJhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9ucztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YWlyYWJsZTtcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldEZyYW1lTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZnJhbWVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSB0aGlzLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBmcmFtZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIG1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZUEgPSBmcmFtZU5vZGU7IC8vL1xuXG4gICAgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKTtcblxuICAgIGNvbnN0IGZyYW1lTm9kZUIgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICAgIGZyYW1lTm9kZUFBTWF0Y2hlc0ZyYW1lQk5vZGVCID0gZnJhbWVOb2RlQS5tYXRjaChmcmFtZU5vZGVCKSxcbiAgICAgICAgICBmcmFtZU5vZGVNYXRjaGVzID0gZnJhbWVOb2RlQUFNYXRjaGVzRnJhbWVCTm9kZUI7IC8vL1xuXG4gICAgcmV0dXJuIGZyYW1lTm9kZU1hdGNoZXM7XG4gIH1cblxuICBmaW5kVmFsaWRGcmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICB2YWxpZEZyYW1lID0gZnJhbWU7IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkRnJhbWU7XG4gIH1cblxuICBpc0VxdWFsVG8oZnJhbWUpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gZnJhbWVOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgc2luZ3VsYXIgPSBmcmFtZU5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJOYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgICAgaWYgKHBhcmFtZXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgIGlmIChwYXJhbWV0ZXJOYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgaWYgKCFjb21wYXJlc1RvU3Vic3RpdHV0aW9uKSB7XG4gICAgICBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gdGhpcy5hc3N1bXB0aW9ucy5zb21lKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGFzc3VtcHRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uID0gYXNzdW1wdGlvbi5jb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc3VtcHRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb21wYXJlc1RvU3Vic3RpdHV0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbnMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJzdGl0dXRpb247XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TdWJzdGl0dXRpb25zO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnMuYXNTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMuLi5gKTtcblxuICAgIGNvbXBhcmVzVG9TdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucy5ldmVyeSgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBjb21wYWFyZXNUb1N1YnN0aXR1dGlvbiA9IHRoaXMuY29tcGFyZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoY29tcGFhcmVzVG9TdWJzdGl0dXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY29tcGFyZXNUb1N1YnN0aXR1dGlvbnMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWUgLy8vXG5cbiAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUIgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSAobWV0YXZhcmlhYmxlTmFtZUEgPT09IG1ldGF2YXJpYWJsZU5hbWVCKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICB2YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEZyYW1lID0gdGhpcy5maW5kVmFsaWRGcmFtZShjb250ZXh0KSxcbiAgICAgICAgICB2YWxpZCA9ICh2YWxpZEZyYW1lICE9PSBudWxsKTtcblxuICAgIGlmICh2YWxpZCkge1xuICAgICAgZnJhbWUgPSB2YWxpZEZyYW1lOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZUFzc3VtcHRpb25zKHN0YXRlZCwgY29udGV4dCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGV2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlTWV0YXZhcmlhYmxlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChhc3N1bXB0aW9uc1ZhbGlkYXRlICYmIG1ldGF2YXJpYWJsZXZhbGlkYXRlcykge1xuICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgZnJhbWUgPSB0aGlzOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEZyYW1lKGZyYW1lKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS4uLmApO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZSBtdXN0IGJlIHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHZhbGlkYXRlQXNzdW1wdGlvbnMoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb25zVmFsaWRhdGU7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKCFzaW5ndWxhcikge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICAgIGFzc3VtcHRpb25zU3RyaW5nID0gYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnModGhpcy5hc3N1bXB0aW9ucyk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25zU3RyaW5nfScgYXNzdW1wdGlvbnMgb2YgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBjb25zdCBhc3N1bXB0aW9ucyA9IFtdO1xuXG4gICAgICBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdGhpcy5hc3N1bXB0aW9ucy5ldmVyeSgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uVmFsaWRhdGVzID0gYXNzdW1wdGlvbi52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3N1bXB0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgICAgYXNzdW1wdGlvbnMucHVzaChhc3N1bXB0aW9uKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFzc3VtcHRpb25zVmFsaWRhdGUpIHtcbiAgICAgICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvbnNTdHJpbmd9JyBhc3N1bXB0aW9ucyBvZiB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXNzdW1wdGlvbnNWYWxpZGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zVmFsaWRhdGU7XG4gIH1cblxuICB2YWxpZGF0ZU1ldGF2YXJpYWJsZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgICAgbWV0YXZyYWlibGVTdHJpbmcgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke21ldGF2cmFpYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudCh0aGlzLm1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IEZSQU1FX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgICAgICBmcmFtZU1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZUdpdmVuTWV0YVR5cGUgPSB0aGlzLm1ldGF2YXJpYWJsZS52YWxpZGF0ZUdpdmVuTWV0YVR5cGUoZnJhbWVNZXRhVHlwZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7bWV0YXZyYWlibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7bWV0YXZyYWlibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlR2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKG1ldGFUeXBlTmFtZSA9PT0gRlJBTUVfTUVUQV9UWVBFX05BTUUpIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KVxuXG4gICAgICB2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlID0gdmFsaWRhdGVzOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQganNvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcy5nZXRBc3N1bXB0aW9uKCksXG4gICAgICAgICAgICBhc3N1bXB0aW9uSlNPTiA9IGFzc3VtcHRpb24udG9KU09OKCk7XG5cbiAgICAgIGpzb24gPSBhc3N1bXB0aW9uSlNPTjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBkZWJ1Z2dlclxuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJGcmFtZSIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYXNzdW1wdGlvbnMiLCJtZXRhdmFpcmFibGUiLCJtZXRhdmFyaWFibGUiLCJnZXRBc3N1bXB0aW9ucyIsImdldE1ldGF2YXJpYWJsZSIsImdldEZyYW1lTm9kZSIsImdldE5vZGUiLCJmcmFtZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hGcmFtZU5vZGUiLCJmcmFtZU5vZGVBIiwiZnJhbWVOb2RlQiIsImZyYW1lTm9kZUFBTWF0Y2hlc0ZyYW1lQk5vZGVCIiwibWF0Y2giLCJmcmFtZU5vZGVNYXRjaGVzIiwiZmluZFZhbGlkRnJhbWUiLCJmcmFtZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwidmFsaWRGcmFtZSIsImlzRXF1YWxUbyIsImVxdWFsVG8iLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVyTmFtZSIsImdldE5hbWUiLCJjb21wYXJlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiY29tcGFyZXNUb1N1YnN0aXR1dGlvbiIsImZyYW1lU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJzb21lIiwiYXNzdW1wdGlvbiIsImFzc3VtcHRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uIiwiZGVidWciLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJjb21wYXJlc1RvU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNTdHJpbmciLCJhc1N0cmluZyIsImV2ZXJ5IiwiY29tcGFhcmVzVG9TdWJzdGl0dXRpb24iLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZUEiLCJtZXRhdmFyaWFibGVOYW1lQiIsInZhbGlkYXRlIiwic3RhdGVkIiwidmFsaWQiLCJ2YWxpZGF0ZXMiLCJhc3N1bXB0aW9uc1ZhbGlkYXRlIiwidmFsaWRhdGVBc3N1bXB0aW9ucyIsIm1ldGF2YXJpYWJsZXZhbGlkYXRlcyIsInZhbGlkYXRlTWV0YXZhcmlhYmxlIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFkZEZyYW1lIiwiYXNzdW1wdGlvbnNTdHJpbmciLCJhc3N1bXB0aW9uc1N0cmluZ0Zyb21Bc3N1bXB0aW9ucyIsImFzc3VtcHRpb25WYWxpZGF0ZXMiLCJwdXNoIiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzIiwibWV0YXZyYWlibGVTdHJpbmciLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwibWV0YVR5cGVOYW1lIiwiRlJBTUVfTUVUQV9UWVBFX05BTUUiLCJmcmFtZU1ldGFUeXBlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhdmFyaWFibGVWYWxpZGF0ZUdpdmVuTWV0YVR5cGUiLCJ2YWxpZGF0ZUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZhbGlkYXRlc0dpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZVN0cmluZyIsInRvSlNPTiIsImpzb24iLCJnZXRBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbkpTT04iLCJmcm9tSlNPTiIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFT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