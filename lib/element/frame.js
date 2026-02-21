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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIH0gZnJvbSBcIi4uL21ldGFUeXBlc1wiO1xuaW1wb3J0IHsgYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRnJhbWUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhc3N1bXB0aW9ucywgbWV0YXZhaXJhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9ucztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YWlyYWJsZTtcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldEZyYW1lTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZnJhbWVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBmcmFtZU5vZGUgPSB0aGlzLmdldEZyYW1lTm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBmcmFtZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IHRoaXMuZ2V0RnJhbWVOb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIG1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZUEgPSBmcmFtZU5vZGU7IC8vL1xuXG4gICAgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKTtcblxuICAgIGNvbnN0IGZyYW1lTm9kZUIgPSBmcmFtZU5vZGUsIC8vL1xuICAgICAgICAgIGZyYW1lTm9kZUFBTWF0Y2hlc0ZyYW1lQk5vZGVCID0gZnJhbWVOb2RlQS5tYXRjaChmcmFtZU5vZGVCKSxcbiAgICAgICAgICBmcmFtZU5vZGVNYXRjaGVzID0gZnJhbWVOb2RlQUFNYXRjaGVzRnJhbWVCTm9kZUI7IC8vL1xuXG4gICAgcmV0dXJuIGZyYW1lTm9kZU1hdGNoZXM7XG4gIH1cblxuICBmaW5kVmFsaWRGcmFtZShjb250ZXh0KSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICB2YWxpZEZyYW1lID0gZnJhbWU7IC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkRnJhbWU7XG4gIH1cblxuXG4gIGlzRXF1YWxUbyhmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBmcmFtZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBmcmFtZU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU2luZ3VsYXIoKSB7XG4gICAgY29uc3QgZnJhbWVOb2RlID0gdGhpcy5nZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgICBzaW5ndWxhciA9IGZyYW1lTm9kZS5pc1Npbmd1bGFyKCk7XG5cbiAgICByZXR1cm4gc2luZ3VsYXI7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgICBpZiAocGFyYW1ldGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKHBhcmFtZXRlck5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBpZiAoIWNvbXBhcmVzVG9TdWJzdGl0dXRpb24pIHtcbiAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSB0aGlzLmFzc3VtcHRpb25zLnNvbWUoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvbkNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSBhc3N1bXB0aW9uLmNvbXBhcmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzdW1wdGlvbkNvbXBhcmVzVG9TdWJzdGl0dXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmVzVG9TdWJzdGl0dXRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9ucy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1N1YnN0aXR1dGlvbnM7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zU3RyaW5nID0gc3Vic3RpdHV0aW9ucy5hc1N0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucy4uLmApO1xuXG4gICAgY29tcGFyZXNUb1N1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zLmV2ZXJ5KChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGNvbXBhYXJlc1RvU3Vic3RpdHV0aW9uID0gdGhpcy5jb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChjb21wYWFyZXNUb1N1YnN0aXR1dGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjb21wYXJlc1RvU3Vic3RpdHV0aW9ucykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvU3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBsZXQgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZSAvLy9cblxuICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQiA9IG1ldGF2YXJpYWJsZU5hbWU7IC8vL1xuXG4gICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IChtZXRhdmFyaWFibGVOYW1lQSA9PT0gbWV0YXZhcmlhYmxlTmFtZUIpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIHZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkRnJhbWUgPSB0aGlzLmZpbmRWYWxpZEZyYW1lKGNvbnRleHQpLFxuICAgICAgICAgIHZhbGlkID0gKHZhbGlkRnJhbWUgIT09IG51bGwpO1xuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICBmcmFtZSA9IHZhbGlkRnJhbWU7IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IGFzc3VtcHRpb25zVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlQXNzdW1wdGlvbnMoc3RhdGVkLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVNZXRhdmFyaWFibGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGFzc3VtcHRpb25zVmFsaWRhdGUgJiYgbWV0YXZhcmlhYmxldmFsaWRhdGVzKSB7XG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBmcmFtZSA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkRnJhbWUoZnJhbWUpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIG11c3QgYmUgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLi4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdmFsaWRhdGVBc3N1bXB0aW9ucyhzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvbnNWYWxpZGF0ZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoIXNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgICAgYXNzdW1wdGlvbnNTdHJpbmcgPSBhc3N1bXB0aW9uc1N0cmluZ0Zyb21Bc3N1bXB0aW9ucyh0aGlzLmFzc3VtcHRpb25zKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvbnNTdHJpbmd9JyBhc3N1bXB0aW9ucyBvZiB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgIGNvbnN0IGFzc3VtcHRpb25zID0gW107XG5cbiAgICAgIGFzc3VtcHRpb25zVmFsaWRhdGUgPSB0aGlzLmFzc3VtcHRpb25zLmV2ZXJ5KChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGFzc3VtcHRpb25WYWxpZGF0ZXMgPSBhc3N1bXB0aW9uLnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc3VtcHRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBhc3N1bXB0aW9ucy5wdXNoKGFzc3VtcHRpb24pO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYXNzdW1wdGlvbnNWYWxpZGF0ZSkge1xuICAgICAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnM7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uc1N0cmluZ30nIGFzc3VtcHRpb25zIG9mIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbnNWYWxpZGF0ZTtcbiAgfVxuXG4gIHZhbGlkYXRlTWV0YXZhcmlhYmxlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgICBtZXRhdnJhaWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7bWV0YXZyYWlibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KHRoaXMubWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgY29uc3QgbWV0YVR5cGVOYW1lID0gRlJBTUVfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgICAgIGZyYW1lTWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlR2l2ZW5NZXRhVHlwZSA9IHRoaXMubWV0YXZhcmlhYmxlLnZhbGlkYXRlR2l2ZW5NZXRhVHlwZShmcmFtZU1ldGFUeXBlLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVHaXZlbk1ldGFUeXBlKSB7XG4gICAgICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHttZXRhdnJhaWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUncyAnJHttZXRhdnJhaWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICBpZiAobWV0YVR5cGVOYW1lID09PSBGUkFNRV9NRVRBX1RZUEVfTkFNRSkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpXG5cbiAgICAgIHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSB2YWxpZGF0ZXM7IC8vL1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBqc29uID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IGFzc3VtcHRpb24gPSB0aGlzLmdldEFzc3VtcHRpb24oKSxcbiAgICAgICAgICAgIGFzc3VtcHRpb25KU09OID0gYXNzdW1wdGlvbi50b0pTT04oKTtcblxuICAgICAganNvbiA9IGFzc3VtcHRpb25KU09OOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRnJhbWVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBBc3N1bXB0aW9uIH0gPWVsZW1lbnRzLFxuICAgICAgICAgICAgYXNzdW1wdGlvbiA9IEFzc3VtcHRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBhc3N1bXB0aW9ucyA9IFtcbiAgICAgICAgICAgICAgYXNzdW1wdGlvblxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgICBub2RlID0gbnVsbDtcblxuICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoc3RyaW5nLCBub2RlLCBhc3N1bXB0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJGcmFtZSIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYXNzdW1wdGlvbnMiLCJtZXRhdmFpcmFibGUiLCJtZXRhdmFyaWFibGUiLCJnZXRBc3N1bXB0aW9ucyIsImdldE1ldGF2YXJpYWJsZSIsImdldEZyYW1lTm9kZSIsImdldE5vZGUiLCJmcmFtZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hGcmFtZU5vZGUiLCJmcmFtZU5vZGVBIiwiZnJhbWVOb2RlQiIsImZyYW1lTm9kZUFBTWF0Y2hlc0ZyYW1lQk5vZGVCIiwibWF0Y2giLCJmcmFtZU5vZGVNYXRjaGVzIiwiZmluZFZhbGlkRnJhbWUiLCJmcmFtZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwidmFsaWRGcmFtZSIsImlzRXF1YWxUbyIsImVxdWFsVG8iLCJpc1Npbmd1bGFyIiwic2luZ3VsYXIiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVyTmFtZSIsImdldE5hbWUiLCJjb21wYXJlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiY29tcGFyZXNUb1N1YnN0aXR1dGlvbiIsImZyYW1lU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJzb21lIiwiYXNzdW1wdGlvbiIsImFzc3VtcHRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uIiwiZGVidWciLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJjb21wYXJlc1RvU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNTdHJpbmciLCJhc1N0cmluZyIsImV2ZXJ5IiwiY29tcGFhcmVzVG9TdWJzdGl0dXRpb24iLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZUEiLCJtZXRhdmFyaWFibGVOYW1lQiIsInZhbGlkYXRlIiwic3RhdGVkIiwidmFsaWQiLCJ2YWxpZGF0ZXMiLCJhc3N1bXB0aW9uc1ZhbGlkYXRlIiwidmFsaWRhdGVBc3N1bXB0aW9ucyIsIm1ldGF2YXJpYWJsZXZhbGlkYXRlcyIsInZhbGlkYXRlTWV0YXZhcmlhYmxlIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFkZEZyYW1lIiwiYXNzdW1wdGlvbnNTdHJpbmciLCJhc3N1bXB0aW9uc1N0cmluZ0Zyb21Bc3N1bXB0aW9ucyIsImFzc3VtcHRpb25WYWxpZGF0ZXMiLCJwdXNoIiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzIiwibWV0YXZyYWlibGVTdHJpbmciLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwibWV0YVR5cGVOYW1lIiwiRlJBTUVfTUVUQV9UWVBFX05BTUUiLCJmcmFtZU1ldGFUeXBlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhdmFyaWFibGVWYWxpZGF0ZUdpdmVuTWV0YVR5cGUiLCJ2YWxpZGF0ZUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZhbGlkYXRlc0dpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZVN0cmluZyIsInRvSlNPTiIsImpzb24iLCJnZXRBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbkpTT04iLCJmcm9tSlNPTiIsIkFzc3VtcHRpb24iLCJlbGVtZW50cyIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7Ozs4QkFQd0I7d0JBRUQ7NkJBQ2M7eUJBQ007c0JBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpELFdBQWVBLElBQUFBLGdCQUFNLDBCQUFDOzthQUFNQyxNQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLFlBQVk7Z0NBRGxDTDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxXQUFXLEdBQUdBO1FBQ25CLE1BQUtFLFlBQVksR0FBR0Q7Ozs7O1lBR3RCRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTU4sT0FBTyxJQUFJ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