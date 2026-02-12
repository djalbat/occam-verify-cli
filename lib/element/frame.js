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
            key: "isSingular",
            value: function isSingular() {
                var node = this.getNode(), frameNode = node, singular = frameNode.isSingular();
                return singular;
            }
        },
        {
            key: "isMetavariableEqualToMetavariable",
            value: function isMetavariableEqualToMetavariable(metavariable, context) {
                var metavariableEqualToMetavariable;
                var singular = this.isSingular();
                if (singular) {
                    var node = this.getNode(), metavariableA = metavariable, singularMetavariableNode = node.getSingularMetavariableNode(), metavariableName = singularMetavariableNode.getMetavariableName();
                    metavariable = context.findMetavariableByMetavariableName(metavariableName);
                    var metavariableB = metavariable, equalTo = metavariableA.isEqualTo(metavariableB);
                    metavariableEqualToMetavariable = equalTo; ///
                }
                return metavariableEqualToMetavariable;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(frame) {
                var frameA = this, frameB = frame, frameANode = frameA.getNode(), frameBNode = frameB.getNode(), frameANodeMatchesFrameBNode = frameANode.match(frameBNode), equalTo = frameANodeMatchesFrameBNode; ///
                return equalTo;
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
                comparesToSubstitutions = substitutions.everySubstitution(function(substitution) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIH0gZnJvbSBcIi4uL21ldGFUeXBlc1wiO1xuaW1wb3J0IHsgYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRnJhbWUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhc3N1bXB0aW9ucywgbWV0YXZhaXJhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9ucztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YWlyYWJsZTtcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBub2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgaXNTaW5ndWxhcigpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgc2luZ3VsYXIgPSBmcmFtZU5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlQSA9IG1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICBzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUgPSBub2RlLmdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKVxuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVCID0gbWV0YXZhcmlhYmxlLFxuICAgICAgICAgICAgZXF1YWxUbyA9IG1ldGF2YXJpYWJsZUEuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZUIpO1xuXG4gICAgICBtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0gZXF1YWxUbzsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNFcXVhbFRvKGZyYW1lKSB7XG4gICAgY29uc3QgZnJhbWVBID0gdGhpcywgLy8vXG4gICAgICAgICAgZnJhbWVCID0gZnJhbWUsIC8vL1xuICAgICAgICAgIGZyYW1lQU5vZGUgPSBmcmFtZUEuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lQk5vZGUgPSBmcmFtZUIuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGZyYW1lQU5vZGVNYXRjaGVzRnJhbWVCTm9kZSA9IGZyYW1lQU5vZGUubWF0Y2goZnJhbWVCTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IGZyYW1lQU5vZGVNYXRjaGVzRnJhbWVCTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9QYXJhbXRlciA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2luZ3VsYXIgPSB0aGlzLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmIChzaW5ndWxhcikge1xuICAgICAgY29uc3QgcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCk7XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICBpZiAocGFyYW1ldGVyTmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtdGVyO1xuICB9XG5cbiAgY29tcGFyZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGlmICghY29tcGFyZXNUb1N1YnN0aXR1dGlvbikge1xuICAgICAgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IHRoaXMuYXNzdW1wdGlvbnMuc29tZSgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uQ29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IGFzc3VtcHRpb24uY29tcGFyZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3N1bXB0aW9uQ29tcGFyZXNUb1N1YnN0aXR1dGlvbikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29tcGFyZXNUb1N1YnN0aXR1dGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb25zLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3Vic3RpdHV0aW9ucztcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnNTdHJpbmcgPSBzdWJzdGl0dXRpb25zLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlICcke3N1YnN0aXR1dGlvbnNTdHJpbmd9JyBzdWJzdGl0dXRpb25zLi4uYCk7XG5cbiAgICBjb21wYXJlc1RvU3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnMuZXZlcnlTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgY29tcGFhcmVzVG9TdWJzdGl0dXRpb24gPSB0aGlzLmNvbXBhcmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGNvbXBhYXJlc1RvU3Vic3RpdHV0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNvbXBhcmVzVG9TdWJzdGl0dXRpb25zKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgdmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvbnNWYWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVBc3N1bXB0aW9ucyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGV2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlTWV0YXZhcmlhYmxlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGFzc3VtcHRpb25zVmFsaWRhdGUgJiYgbWV0YXZhcmlhYmxldmFsaWRhdGVzKSB7XG4gICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IGZyYW1lID0gdGhpczsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkRnJhbWUoZnJhbWUpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgc3RhdGVkIGZyYW1lIG11c3QgYmUgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBkZXJpdmVkIGZyYW1lLi4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdmFsaWRhdGVBc3N1bXB0aW9ucyhhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb25zVmFsaWRhdGU7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKCFzaW5ndWxhcikge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICAgIGFzc3VtcHRpb25zU3RyaW5nID0gYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnModGhpcy5hc3N1bXB0aW9ucyk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25zU3RyaW5nfScgYXNzdW1wdGlvbnMgb2YgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgICBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdGhpcy5hc3N1bXB0aW9ucy5ldmVyeSgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uVmVyaWZpZXMgPSBhc3N1bXB0aW9uLnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBhc3N1bXB0aW9uVmVyaWZpZXM7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFzc3VtcHRpb25zVmFsaWRhdGUpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uc1N0cmluZ30nIGFzc3VtcHRpb25zIG9mIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbnNWYWxpZGF0ZTtcbiAgfVxuXG4gIHZhbGlkYXRlTWV0YXZhcmlhYmxlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgICAgbWV0YXZyYWlibGVTdHJpbmcgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke21ldGF2cmFpYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZSh0aGlzLm1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWV0YVR5cGVOYW1lID0gRlJBTUVfTUVUQV9UWVBFX05BTUUsXG4gICAgICAgICAgICAgIGZyYW1lTWV0YVR5cGUgPSBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZUdpdmVuTWV0YVR5cGUgPSBtZXRhdmFyaWFibGUudmFsaWRhdGVHaXZlbk1ldGFUeXBlKGZyYW1lTWV0YVR5cGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZUdpdmVuTWV0YVR5cGUpIHtcbiAgICAgICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke21ldGF2cmFpYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgfVxuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSdzICcke21ldGF2cmFpYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgICBpZiAobWV0YVR5cGVOYW1lID09PSBGUkFNRV9NRVRBX1RZUEVfTkFNRSkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KVxuXG4gICAgICB2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlID0gdmFsaWRhdGVzOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQganNvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcy5nZXRBc3N1bXB0aW9uKCksXG4gICAgICAgICAgICBhc3N1bXB0aW9uSlNPTiA9IGFzc3VtcHRpb24udG9KU09OKCk7XG5cbiAgICAgIGpzb24gPSBhc3N1bXB0aW9uSlNPTjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkZyYW1lXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWUgPSBudWxsO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgQXNzdW1wdGlvbiB9ID1lbGVtZW50cyxcbiAgICAgICAgICAgIGFzc3VtcHRpb24gPSBBc3N1bXB0aW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgYXNzdW1wdGlvbnMgPSBbXG4gICAgICAgICAgICAgIGFzc3VtcHRpb25cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgICAgbm9kZSA9IG51bGw7XG5cbiAgICAgIGZyYW1lID0gbmV3IEZyYW1lKHN0cmluZywgbm9kZSwgYXNzdW1wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRnJhbWUiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImFzc3VtcHRpb25zIiwibWV0YXZhaXJhYmxlIiwibWV0YXZhcmlhYmxlIiwiZ2V0QXNzdW1wdGlvbnMiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwiZ2V0Tm9kZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJpc1Npbmd1bGFyIiwiZnJhbWVOb2RlIiwic2luZ3VsYXIiLCJpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlQSIsInNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVCIiwiZXF1YWxUbyIsImlzRXF1YWxUbyIsImZyYW1lIiwiZnJhbWVBIiwiZnJhbWVCIiwiZnJhbWVBTm9kZSIsImZyYW1lQk5vZGUiLCJmcmFtZUFOb2RlTWF0Y2hlc0ZyYW1lQk5vZGUiLCJtYXRjaCIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJwYXJhbWV0ZXJOYW1lIiwiZ2V0TmFtZSIsImNvbXBhcmVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJjb21wYXJlc1RvU3Vic3RpdHV0aW9uIiwiZnJhbWVTdHJpbmciLCJnZXRTdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsInNvbWUiLCJhc3N1bXB0aW9uIiwiYXNzdW1wdGlvbkNvbXBhcmVzVG9TdWJzdGl0dXRpb24iLCJkZWJ1ZyIsImNvbXBhcmVTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImNvbXBhcmVzVG9TdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsImFzU3RyaW5nIiwiZXZlcnlTdWJzdGl0dXRpb24iLCJjb21wYWFyZXNUb1N1YnN0aXR1dGlvbiIsInZhbGlkYXRlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2YWxpZGF0ZXMiLCJhc3N1bXB0aW9uc1ZhbGlkYXRlIiwidmFsaWRhdGVBc3N1bXB0aW9ucyIsIm1ldGF2YXJpYWJsZXZhbGlkYXRlcyIsInZhbGlkYXRlTWV0YXZhcmlhYmxlIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFkZEZyYW1lIiwiYXNzdW1wdGlvbnNTdHJpbmciLCJhc3N1bXB0aW9uc1N0cmluZ0Zyb21Bc3N1bXB0aW9ucyIsImV2ZXJ5IiwiYXNzdW1wdGlvblZlcmlmaWVzIiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzIiwibWV0YXZyYWlibGVTdHJpbmciLCJmaW5kTWV0YXZhcmlhYmxlIiwibWV0YVR5cGVOYW1lIiwiRlJBTUVfTUVUQV9UWVBFX05BTUUiLCJmcmFtZU1ldGFUeXBlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhdmFyaWFibGVWYWxpZGF0ZUdpdmVuTWV0YVR5cGUiLCJ2YWxpZGF0ZUdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZSIsInZhbGlkYXRlc0dpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZVN0cmluZyIsInRvSlNPTiIsImpzb24iLCJnZXRBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbkpTT04iLCJmcm9tSlNPTiIsIkFzc3VtcHRpb24iLCJlbGVtZW50cyIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7Ozs4QkFQd0I7d0JBRUQ7NkJBQ2M7eUJBQ007c0JBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpELFdBQWVBLElBQUFBLGdCQUFNLDBCQUFDOzthQUFNQyxNQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLFlBQVk7Z0NBRGxDTDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxXQUFXLEdBQUdBO1FBQ25CLE1BQUtFLFlBQVksR0FBR0Q7Ozs7O1lBR3RCRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTU4sT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJDLG1CQUFtQlIsS0FBS00sbUJBQW1CO2dCQUVqRCxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ULE9BQU8sSUFBSSxDQUFDTyxPQUFPLElBQ25CRyxZQUFZVixNQUNaVyxXQUFXRCxVQUFVRCxVQUFVO2dCQUVyQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGtDQUFrQ1QsWUFBWSxFQUFFTCxPQUFPO2dCQUNyRCxJQUFJZTtnQkFFSixJQUFNRixXQUFXLElBQUksQ0FBQ0YsVUFBVTtnQkFFaEMsSUFBSUUsVUFBVTtvQkFDWixJQUFNWCxPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQk8sZ0JBQWdCWCxjQUNoQlksMkJBQTJCZixLQUFLZ0IsMkJBQTJCLElBQzNEUixtQkFBbUJPLHlCQUF5QlQsbUJBQW1CO29CQUVyRUgsZUFBZUwsUUFBUW1CLGtDQUFrQyxDQUFDVDtvQkFFMUQsSUFBTVUsZ0JBQWdCZixjQUNoQmdCLFVBQVVMLGNBQWNNLFNBQVMsQ0FBQ0Y7b0JBRXhDTCxrQ0FBa0NNLFNBQVUsR0FBRztnQkFDakQ7Z0JBRUEsT0FBT047WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxLQUFLO2dCQUNiLElBQU1DLFNBQVMsSUFBSSxFQUNiQyxTQUFTRixPQUNURyxhQUFhRixPQUFPZixPQUFPLElBQzNCa0IsYUFBYUYsT0FBT2hCLE9BQU8sSUFDM0JtQiw4QkFBOEJGLFdBQVdHLEtBQUssQ0FBQ0YsYUFDL0NOLFVBQVVPLDZCQUE2QixHQUFHO2dCQUVoRCxPQUFPUDtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsU0FBUztnQkFDeEIsSUFBSUMscUJBQXFCO2dCQUV6QixJQUFNbkIsV0FBVyxJQUFJLENBQUNGLFVBQVU7Z0JBRWhDLElBQUlFLFVBQVU7b0JBQ1osSUFBTW9CLGdCQUFnQkYsVUFBVUcsT0FBTztvQkFFdkMsSUFBSUQsa0JBQWtCLE1BQU07d0JBQzFCLElBQU12QixtQkFBbUIsSUFBSSxDQUFDRixtQkFBbUI7d0JBRWpELElBQUl5QixrQkFBa0J2QixrQkFBa0I7NEJBQ3RDc0IscUJBQXFCO3dCQUN2QjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQkMsWUFBWSxFQUFFcEMsT0FBTztnQkFDdkMsSUFBSXFDLHlCQUF5QjtnQkFFN0IsSUFBTUMsY0FBYyxJQUFJLENBQUNDLFNBQVMsSUFDNUJDLHFCQUFxQkosYUFBYUcsU0FBUztnQkFFakR2QyxRQUFReUMsS0FBSyxDQUFDLEFBQUMsa0JBQStDRCxPQUE5QkYsYUFBWSxvQkFBcUMsT0FBbkJFLG9CQUFtQjtnQkFFakYsSUFBSSxDQUFDSCx3QkFBd0I7b0JBQzNCQSx5QkFBeUIsSUFBSSxDQUFDbEMsV0FBVyxDQUFDdUMsSUFBSSxDQUFDLFNBQUNDO3dCQUM5QyxJQUFNQyxtQ0FBbUNELFdBQVdSLG1CQUFtQixDQUFDQyxjQUFjcEM7d0JBRXRGLElBQUk0QyxrQ0FBa0M7NEJBQ3BDLE9BQU87d0JBQ1Q7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSVAsd0JBQXdCO29CQUMxQnJDLFFBQVE2QyxLQUFLLENBQUMsQUFBQyx3QkFBcURMLE9BQTlCRixhQUFZLG9CQUFxQyxPQUFuQkUsb0JBQW1CO2dCQUN6RjtnQkFFQSxPQUFPSDtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQkMsYUFBYSxFQUFFL0MsT0FBTzs7Z0JBQ3pDLElBQUlnRDtnQkFFSixJQUFNVixjQUFjLElBQUksQ0FBQ0MsU0FBUyxJQUM1QlUsc0JBQXNCRixjQUFjRyxRQUFRO2dCQUVsRGxELFFBQVF5QyxLQUFLLENBQUMsQUFBQyxrQkFBK0NRLE9BQTlCWCxhQUFZLG9CQUFzQyxPQUFwQlcscUJBQW9CO2dCQUVsRkQsMEJBQTBCRCxjQUFjSSxpQkFBaUIsQ0FBQyxTQUFDZjtvQkFDekQsSUFBTWdCLDBCQUEwQixNQUFLakIsbUJBQW1CLENBQUNDLGNBQWNwQztvQkFFdkUsSUFBSW9ELHlCQUF5Qjt3QkFDM0IsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFJSix5QkFBeUI7b0JBQzNCaEQsUUFBUTZDLEtBQUssQ0FBQyxBQUFDLG9CQUFpREksT0FBOUJYLGFBQVksb0JBQXNDLE9BQXBCVyxxQkFBb0I7Z0JBQ3RGO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsV0FBVyxFQUFFQyxNQUFNLEVBQUV2RCxPQUFPO2dCQUNuQyxJQUFJd0QsWUFBWTtnQkFFaEIsSUFBTWxCLGNBQWMsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztnQkFFMUN2QyxRQUFReUMsS0FBSyxDQUFDLEFBQUMsbUJBQThCLE9BQVpILGFBQVk7Z0JBRTdDLElBQU1tQixzQkFBc0IsSUFBSSxDQUFDQyxtQkFBbUIsQ0FBQ0osYUFBYUMsUUFBUXZELFVBQ3BFMkQsd0JBQXdCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNOLGFBQWFDLFFBQVF2RDtnQkFFN0UsSUFBSXlELHVCQUF1QkUsdUJBQXVCO29CQUNoRCxJQUFJRSxzQkFBc0IsT0FDdEJDLHVCQUF1QjtvQkFFM0IsSUFBSVAsUUFBUTt3QkFDVk0sc0JBQXNCLElBQUksQ0FBQ0Usa0JBQWtCLENBQUNULGFBQWF0RDtvQkFDN0QsT0FBTzt3QkFDTDhELHVCQUF1QixJQUFJLENBQUNFLG1CQUFtQixDQUFDaEU7b0JBQ2xEO29CQUVBLElBQUk2RCx1QkFBdUJDLHNCQUFzQjt3QkFDL0NOLFlBQVk7b0JBQ2Q7Z0JBQ0Y7Z0JBRUEsSUFBSUEsV0FBVztvQkFDYixJQUFNakMsUUFBUSxJQUFJLEVBQUUsR0FBRztvQkFFdkJ2QixRQUFRaUUsUUFBUSxDQUFDMUM7b0JBRWpCdkIsUUFBUTZDLEtBQUssQ0FBQyxBQUFDLHFCQUFnQyxPQUFaUCxhQUFZO2dCQUNqRDtnQkFFQSxPQUFPa0I7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJULFdBQVcsRUFBRXRELE9BQU87Z0JBQ3JDLElBQUk2RCxzQkFBc0I7Z0JBRTFCLElBQU12QixjQUFjLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7Z0JBRTFDdkMsUUFBUXlDLEtBQUssQ0FBQyxBQUFDLG1CQUE4QixPQUFaSCxhQUFZO2dCQUU3QyxJQUFNekIsV0FBVyxJQUFJLENBQUNGLFVBQVU7Z0JBRWhDLElBQUlFLFVBQVU7b0JBQ1pnRCxzQkFBc0I7Z0JBQ3hCLE9BQU87b0JBQ0w3RCxRQUFReUMsS0FBSyxDQUFDLEFBQUMsUUFBbUIsT0FBWkgsYUFBWTtnQkFDcEM7Z0JBRUEsSUFBSXVCLHFCQUFxQjtvQkFDdkI3RCxRQUFRNkMsS0FBSyxDQUFDLEFBQUMscUJBQWdDLE9BQVpQLGFBQVk7Z0JBQ2pEO2dCQUVBLE9BQU91QjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQmhFLE9BQU87Z0JBQ3pCLElBQUk4RDtnQkFFSixJQUFNeEIsY0FBYyxJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO2dCQUUxQ3ZDLFFBQVF5QyxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWkgsYUFBWTtnQkFFNUN3Qix1QkFBdUI7Z0JBRXZCLElBQUlBLHNCQUFzQjtvQkFDeEI5RCxRQUFRNkMsS0FBSyxDQUFDLEFBQUMsb0JBQStCLE9BQVpQLGFBQVk7Z0JBQ2hEO2dCQUVBLE9BQU93QjtZQUNUOzs7WUFFQUosS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQkosV0FBVyxFQUFFQyxNQUFNLEVBQUV2RCxPQUFPO2dCQUM5QyxJQUFJeUQ7Z0JBRUosSUFBTTVDLFdBQVcsSUFBSSxDQUFDRixVQUFVO2dCQUVoQyxJQUFJLENBQUNFLFVBQVU7b0JBQ2IsSUFBTXlCLGNBQWMsSUFBSSxDQUFDQyxTQUFTLElBQzVCMkIsb0JBQW9CQyxJQUFBQSx3Q0FBZ0MsRUFBQyxJQUFJLENBQUNoRSxXQUFXO29CQUUzRUgsUUFBUXlDLEtBQUssQ0FBQyxBQUFDLG1CQUE0REgsT0FBMUM0QixtQkFBa0IsMEJBQW9DLE9BQVo1QixhQUFZO29CQUV2RmlCLFNBQVMsTUFBTyxHQUFHO29CQUVuQkQsY0FBYyxNQUFNLEdBQUc7b0JBRXZCRyxzQkFBc0IsSUFBSSxDQUFDdEQsV0FBVyxDQUFDaUUsS0FBSyxDQUFDLFNBQUN6Qjt3QkFDNUMsSUFBTTBCLHFCQUFxQjFCLFdBQVdVLFFBQVEsQ0FBQ0MsYUFBYUMsUUFBUXZEO3dCQUVwRSxPQUFPcUU7b0JBQ1Q7b0JBRUEsSUFBSVoscUJBQXFCO3dCQUN2QnpELFFBQVE2QyxLQUFLLENBQUMsQUFBQyxxQkFBOERQLE9BQTFDNEIsbUJBQWtCLDBCQUFvQyxPQUFaNUIsYUFBWTtvQkFDM0Y7Z0JBQ0YsT0FBTztvQkFDTG1CLHNCQUFzQjtnQkFDeEI7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJOLFdBQVcsRUFBRUMsTUFBTSxFQUFFdkQsT0FBTztnQkFDL0MsSUFBSXNFLHdCQUF3QjtnQkFFNUIsSUFBTXpELFdBQVcsSUFBSSxDQUFDRixVQUFVO2dCQUVoQyxJQUFJRSxVQUFVO29CQUNaLElBQU15QixjQUFjLElBQUksQ0FBQ0MsU0FBUyxJQUM1QmdDLG9CQUFvQixJQUFJLENBQUNsRSxZQUFZLENBQUNrQyxTQUFTO29CQUVyRHZDLFFBQVF5QyxLQUFLLENBQUMsQUFBQyxtQkFBMkM4QixPQUF6QmpDLGFBQVksZUFBK0IsT0FBbEJpQyxtQkFBa0I7b0JBRTVFLElBQU1sRSxlQUFlTCxRQUFRd0UsZ0JBQWdCLENBQUMsSUFBSSxDQUFDbkUsWUFBWTtvQkFFL0QsSUFBSUEsaUJBQWlCLE1BQU07d0JBQ3pCLElBQU1vRSxlQUFlQyxtQ0FBb0IsRUFDbkNDLGdCQUFnQkMsSUFBQUEscUNBQTBCLEVBQUNILGVBQzNDSSxvQ0FBb0N4RSxhQUFheUUscUJBQXFCLENBQUNILGVBQWUzRTt3QkFFNUYsSUFBSTZFLG1DQUFtQzs0QkFDckNQLHdCQUF3Qjt3QkFDMUI7b0JBQ0YsT0FBTzt3QkFDTHRFLFFBQVE2QyxLQUFLLENBQUMsQUFBQyxRQUFnQzBCLE9BQXpCakMsYUFBWSxlQUErQixPQUFsQmlDLG1CQUFrQjtvQkFDbkU7b0JBRUEsSUFBSUQsdUJBQXVCO3dCQUN6QnRFLFFBQVE2QyxLQUFLLENBQUMsQUFBQyxxQkFBNkMwQixPQUF6QmpDLGFBQVksZUFBK0IsT0FBbEJpQyxtQkFBa0I7b0JBQ2hGO2dCQUNGLE9BQU87b0JBQ0xELHdCQUF3QjtnQkFDMUI7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLFFBQVEsRUFBRXpCLFdBQVcsRUFBRUMsTUFBTSxFQUFFdkQsT0FBTztnQkFDMUQsSUFBSWdGLHlCQUF5QjtnQkFFN0IsSUFBTTFDLGNBQWMsSUFBSSxDQUFDQyxTQUFTLElBQzVCMEMsaUJBQWlCRixTQUFTeEMsU0FBUztnQkFFekN2QyxRQUFReUMsS0FBSyxDQUFDLEFBQUMsbUJBQW1Ed0MsT0FBakMzQyxhQUFZLHVCQUFvQyxPQUFmMkMsZ0JBQWU7Z0JBRWpGLElBQU1SLGVBQWVNLFNBQVM3QyxPQUFPO2dCQUVyQyxJQUFJdUMsaUJBQWlCQyxtQ0FBb0IsRUFBRTtvQkFDekMsSUFBTWxCLFlBQVksSUFBSSxDQUFDSCxRQUFRLENBQUNDLGFBQWFDLFFBQVF2RDtvQkFFckRnRix5QkFBeUJ4QixXQUFXLEdBQUc7Z0JBQ3pDO2dCQUVBLElBQUl3Qix3QkFBd0I7b0JBQzFCaEYsUUFBUTZDLEtBQUssQ0FBQyxBQUFDLHFCQUFxRG9DLE9BQWpDM0MsYUFBWSx1QkFBb0MsT0FBZjJDLGdCQUFlO2dCQUNyRjtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLE9BQU87Z0JBRVgsSUFBTXRFLFdBQVcsSUFBSSxDQUFDRixVQUFVO2dCQUVoQyxJQUFJRSxVQUFVO29CQUNaLElBQU04QixhQUFhLElBQUksQ0FBQ3lDLGFBQWEsSUFDL0JDLGlCQUFpQjFDLFdBQVd1QyxNQUFNO29CQUV4Q0MsT0FBT0UsZ0JBQWlCLEdBQUc7Z0JBQzdCO2dCQUVBLE9BQU9GO1lBQ1Q7Ozs7WUFJT0csS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0gsSUFBSSxFQUFFbkYsT0FBTztnQkFDM0IsSUFBSXVCLFFBQVE7Z0JBRVosSUFBSTRELFNBQVMsTUFBTTtvQkFDakIsSUFBTSxBQUFFSSxhQUFjQyxTQUFkRCxZQUNGNUMsYUFBYTRDLFdBQVdELFFBQVEsQ0FBQ0gsTUFBTW5GLFVBQ3ZDRyxjQUFjO3dCQUNad0M7cUJBQ0QsRUFDRDFDLFNBQVMsTUFDVEMsT0FBTztvQkFFYnFCLFFBQVEsSUFBSXhCLE1BQU1FLFFBQVFDLE1BQU1DO2dCQUNsQztnQkFFQSxPQUFPb0I7WUFDVDs7OztxQkF4VXdDa0UsdUJBQU8sSUFzVC9DLHlCQUFPQyxRQUFPIn0=