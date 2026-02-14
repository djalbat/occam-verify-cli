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
            key: "compareMetavariable",
            value: function compareMetavariable(metavariable) {
                var metavaraibleComparseTo;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2ZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcbmltcG9ydCB7IGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIH0gZnJvbSBcIi4uL21ldGFUeXBlc1wiO1xuaW1wb3J0IHsgYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRnJhbWUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhc3N1bXB0aW9ucywgbWV0YXZhaXJhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9ucztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YWlyYWJsZTtcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBub2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgaXNTaW5ndWxhcigpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgc2luZ3VsYXIgPSBmcmFtZU5vZGUuaXNTaW5ndWxhcigpO1xuXG4gICAgcmV0dXJuIHNpbmd1bGFyO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgbWV0YXZhcmFpYmxlQ29tcGFyc2VUbztcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGxldCBtZXRhdmFyaWFibGVOYW1lO1xuXG4gICAgICBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWUgLy8vXG5cbiAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQiA9IG1ldGF2YXJpYWJsZU5hbWU7IC8vL1xuXG4gICAgICBtZXRhdmFyYWlibGVDb21wYXJzZVRvID0gKG1ldGF2YXJpYWJsZU5hbWVBID09PSBtZXRhdmFyaWFibGVOYW1lQik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJhaWJsZUNvbXBhcnNlVG87XG4gIH1cblxuICBpc0VxdWFsVG8oZnJhbWUpIHtcbiAgICBjb25zdCBmcmFtZUEgPSB0aGlzLCAvLy9cbiAgICAgICAgICBmcmFtZUIgPSBmcmFtZSwgLy8vXG4gICAgICAgICAgZnJhbWVBTm9kZSA9IGZyYW1lQS5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVCTm9kZSA9IGZyYW1lQi5nZXROb2RlKCksXG4gICAgICAgICAgZnJhbWVBTm9kZU1hdGNoZXNGcmFtZUJOb2RlID0gZnJhbWVBTm9kZS5tYXRjaChmcmFtZUJOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gZnJhbWVBTm9kZU1hdGNoZXNGcmFtZUJOb2RlOyAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaW5ndWxhciA9IHRoaXMuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJOYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgICAgaWYgKHBhcmFtZXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgIGlmIChwYXJhbWV0ZXJOYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgaWYgKCFjb21wYXJlc1RvU3Vic3RpdHV0aW9uKSB7XG4gICAgICBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gdGhpcy5hc3N1bXB0aW9ucy5zb21lKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGFzc3VtcHRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uID0gYXNzdW1wdGlvbi5jb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc3VtcHRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb21wYXJlc1RvU3Vic3RpdHV0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbnMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJzdGl0dXRpb247XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TdWJzdGl0dXRpb25zO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHN1YnN0aXR1dGlvbnMuYXNTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgJyR7c3Vic3RpdHV0aW9uc1N0cmluZ30nIHN1YnN0aXR1dGlvbnMuLi5gKTtcblxuICAgIGNvbXBhcmVzVG9TdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucy5ldmVyeSgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBjb21wYWFyZXNUb1N1YnN0aXR1dGlvbiA9IHRoaXMuY29tcGFyZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoY29tcGFhcmVzVG9TdWJzdGl0dXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY29tcGFyZXNUb1N1YnN0aXR1dGlvbnMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSAnJHtzdWJzdGl0dXRpb25zU3RyaW5nfScgc3Vic3RpdHV0aW9ucy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N1YnN0aXR1dGlvbnM7XG4gIH1cblxuICB2YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uc1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZUFzc3VtcHRpb25zKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVNZXRhdmFyaWFibGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoYXNzdW1wdGlvbnNWYWxpZGF0ZSAmJiBtZXRhdmFyaWFibGV2YWxpZGF0ZXMpIHtcbiAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29uc3QgZnJhbWUgPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRGcmFtZShmcmFtZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUuLi5gKTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBzdGF0ZWQgZnJhbWUgbXVzdCBiZSBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIHN0YXRlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGRlcml2ZWQgZnJhbWUuLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZGVyaXZlZCBmcmFtZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZUFzc3VtcHRpb25zKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvbnNWYWxpZGF0ZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoIXNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgICAgYXNzdW1wdGlvbnNTdHJpbmcgPSBhc3N1bXB0aW9uc1N0cmluZ0Zyb21Bc3N1bXB0aW9ucyh0aGlzLmFzc3VtcHRpb25zKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvbnNTdHJpbmd9JyBhc3N1bXB0aW9ucyBvZiB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICAgIGFzc3VtcHRpb25zVmFsaWRhdGUgPSB0aGlzLmFzc3VtcHRpb25zLmV2ZXJ5KChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGFzc3VtcHRpb25WZXJpZmllcyA9IGFzc3VtcHRpb24udmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGFzc3VtcHRpb25WZXJpZmllcztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYXNzdW1wdGlvbnNWYWxpZGF0ZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25zU3RyaW5nfScgYXNzdW1wdGlvbnMgb2YgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc3VtcHRpb25zVmFsaWRhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uc1ZhbGlkYXRlO1xuICB9XG5cbiAgdmFsaWRhdGVNZXRhdmFyaWFibGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgICBtZXRhdnJhaWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7bWV0YXZyYWlibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhVHlwZU5hbWUgPSBGUkFNRV9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICAgICAgZnJhbWVNZXRhVHlwZSA9IGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlR2l2ZW5NZXRhVHlwZSA9IG1ldGF2YXJpYWJsZS52YWxpZGF0ZUdpdmVuTWV0YVR5cGUoZnJhbWVNZXRhVHlwZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7bWV0YXZyYWlibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lJ3MgJyR7bWV0YXZyYWlibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlR2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlID0gZmFsc2U7XG5cbiAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICAgIGlmIChtZXRhVHlwZU5hbWUgPT09IEZSQU1FX01FVEFfVFlQRV9OQU1FKSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpXG5cbiAgICAgIHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSB2YWxpZGF0ZXM7IC8vL1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBqc29uID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbmd1bGFyID0gdGhpcy5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAoc2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IGFzc3VtcHRpb24gPSB0aGlzLmdldEFzc3VtcHRpb24oKSxcbiAgICAgICAgICAgIGFzc3VtcHRpb25KU09OID0gYXNzdW1wdGlvbi50b0pTT04oKTtcblxuICAgICAganNvbiA9IGFzc3VtcHRpb25KU09OOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRnJhbWVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZSA9IG51bGw7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBBc3N1bXB0aW9uIH0gPWVsZW1lbnRzLFxuICAgICAgICAgICAgYXNzdW1wdGlvbiA9IEFzc3VtcHRpb24uZnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgICBhc3N1bXB0aW9ucyA9IFtcbiAgICAgICAgICAgICAgYXNzdW1wdGlvblxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgICBub2RlID0gbnVsbDtcblxuICAgICAgZnJhbWUgPSBuZXcgRnJhbWUoc3RyaW5nLCBub2RlLCBhc3N1bXB0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJGcmFtZSIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYXNzdW1wdGlvbnMiLCJtZXRhdmFpcmFibGUiLCJtZXRhdmFyaWFibGUiLCJnZXRBc3N1bXB0aW9ucyIsImdldE1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJnZXROb2RlIiwibWV0YXZhcmlhYmxlTmFtZSIsImlzU2luZ3VsYXIiLCJmcmFtZU5vZGUiLCJzaW5ndWxhciIsImNvbXBhcmVNZXRhdmFyaWFibGUiLCJtZXRhdmFyYWlibGVDb21wYXJzZVRvIiwiZ2V0TmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVBIiwibWV0YXZhcmlhYmxlTmFtZUIiLCJpc0VxdWFsVG8iLCJmcmFtZSIsImZyYW1lQSIsImZyYW1lQiIsImZyYW1lQU5vZGUiLCJmcmFtZUJOb2RlIiwiZnJhbWVBTm9kZU1hdGNoZXNGcmFtZUJOb2RlIiwibWF0Y2giLCJlcXVhbFRvIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsInBhcmFtZXRlck5hbWUiLCJjb21wYXJlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiY29tcGFyZXNUb1N1YnN0aXR1dGlvbiIsImZyYW1lU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJzb21lIiwiYXNzdW1wdGlvbiIsImFzc3VtcHRpb25Db21wYXJlc1RvU3Vic3RpdHV0aW9uIiwiZGVidWciLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJjb21wYXJlc1RvU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnNTdHJpbmciLCJhc1N0cmluZyIsImV2ZXJ5IiwiY29tcGFhcmVzVG9TdWJzdGl0dXRpb24iLCJ2YWxpZGF0ZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmFsaWRhdGVzIiwiYXNzdW1wdGlvbnNWYWxpZGF0ZSIsInZhbGlkYXRlQXNzdW1wdGlvbnMiLCJtZXRhdmFyaWFibGV2YWxpZGF0ZXMiLCJ2YWxpZGF0ZU1ldGF2YXJpYWJsZSIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhZGRGcmFtZSIsImFzc3VtcHRpb25zU3RyaW5nIiwiYXNzdW1wdGlvbnNTdHJpbmdGcm9tQXNzdW1wdGlvbnMiLCJhc3N1bXB0aW9uVmVyaWZpZXMiLCJtZXRhdmFyaWFibGVWYWxpZGF0ZXMiLCJtZXRhdnJhaWJsZVN0cmluZyIsImZpbmRNZXRhdmFyaWFibGUiLCJtZXRhVHlwZU5hbWUiLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsImZyYW1lTWV0YVR5cGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGF2YXJpYWJsZVZhbGlkYXRlR2l2ZW5NZXRhVHlwZSIsInZhbGlkYXRlR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlIiwidmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwidG9KU09OIiwianNvbiIsImdldEFzc3VtcHRpb24iLCJhc3N1bXB0aW9uSlNPTiIsImZyb21KU09OIiwiQXNzdW1wdGlvbiIsImVsZW1lbnRzIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7OzhCQVB3Qjt3QkFFRDs2QkFDYzt5QkFDTTtzQkFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFakQsV0FBZUEsSUFBQUEsZ0JBQU0sMEJBQUM7O2FBQU1DLE1BQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFdBQVcsRUFBRUMsWUFBWTtnQ0FEbENMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFdBQVcsR0FBR0E7UUFDbkIsTUFBS0UsWUFBWSxHQUFHRDs7Ozs7WUFHdEJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQkMsbUJBQW1CUixLQUFLTSxtQkFBbUI7Z0JBRWpELE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVQsT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJHLFlBQVlWLE1BQ1pXLFdBQVdELFVBQVVELFVBQVU7Z0JBRXJDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CVCxZQUFZO2dCQUM5QixJQUFJVTtnQkFFSixJQUFNRixXQUFXLElBQUksQ0FBQ0YsVUFBVTtnQkFFaEMsSUFBSUUsVUFBVTtvQkFDWixJQUFJSDtvQkFFSkEsbUJBQW1CLElBQUksQ0FBQ0wsWUFBWSxDQUFDVyxPQUFPO29CQUU1QyxJQUFNQyxvQkFBb0JQLGlCQUFpQixHQUFHOztvQkFFOUNBLG1CQUFtQkwsYUFBYVcsT0FBTztvQkFFdkMsSUFBTUUsb0JBQW9CUixrQkFBa0IsR0FBRztvQkFFL0NLLHlCQUEwQkUsc0JBQXNCQztnQkFDbEQ7Z0JBRUEsT0FBT0g7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxLQUFLO2dCQUNiLElBQU1DLFNBQVMsSUFBSSxFQUNiQyxTQUFTRixPQUNURyxhQUFhRixPQUFPWixPQUFPLElBQzNCZSxhQUFhRixPQUFPYixPQUFPLElBQzNCZ0IsOEJBQThCRixXQUFXRyxLQUFLLENBQUNGLGFBQy9DRyxVQUFVRiw2QkFBNkIsR0FBRztnQkFFaEQsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLFNBQVM7Z0JBQ3hCLElBQUlDLHFCQUFxQjtnQkFFekIsSUFBTWpCLFdBQVcsSUFBSSxDQUFDRixVQUFVO2dCQUVoQyxJQUFJRSxVQUFVO29CQUNaLElBQU1rQixnQkFBZ0JGLFVBQVViLE9BQU87b0JBRXZDLElBQUllLGtCQUFrQixNQUFNO3dCQUMxQixJQUFNckIsbUJBQW1CLElBQUksQ0FBQ0YsbUJBQW1CO3dCQUVqRCxJQUFJdUIsa0JBQWtCckIsa0JBQWtCOzRCQUN0Q29CLHFCQUFxQjt3QkFDdkI7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JDLFlBQVksRUFBRWpDLE9BQU87Z0JBQ3ZDLElBQUlrQyx5QkFBeUI7Z0JBRTdCLElBQU1DLGNBQWMsSUFBSSxDQUFDQyxTQUFTLElBQzVCQyxxQkFBcUJKLGFBQWFHLFNBQVM7Z0JBRWpEcEMsUUFBUXNDLEtBQUssQ0FBQyxBQUFDLGtCQUErQ0QsT0FBOUJGLGFBQVksb0JBQXFDLE9BQW5CRSxvQkFBbUI7Z0JBRWpGLElBQUksQ0FBQ0gsd0JBQXdCO29CQUMzQkEseUJBQXlCLElBQUksQ0FBQy9CLFdBQVcsQ0FBQ29DLElBQUksQ0FBQyxTQUFDQzt3QkFDOUMsSUFBTUMsbUNBQW1DRCxXQUFXUixtQkFBbUIsQ0FBQ0MsY0FBY2pDO3dCQUV0RixJQUFJeUMsa0NBQWtDOzRCQUNwQyxPQUFPO3dCQUNUO29CQUNGO2dCQUNGO2dCQUVBLElBQUlQLHdCQUF3QjtvQkFDMUJsQyxRQUFRMEMsS0FBSyxDQUFDLEFBQUMsd0JBQXFETCxPQUE5QkYsYUFBWSxvQkFBcUMsT0FBbkJFLG9CQUFtQjtnQkFDekY7Z0JBRUEsT0FBT0g7WUFDVDs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJDLGFBQWEsRUFBRTVDLE9BQU87O2dCQUN6QyxJQUFJNkM7Z0JBRUosSUFBTVYsY0FBYyxJQUFJLENBQUNDLFNBQVMsSUFDNUJVLHNCQUFzQkYsY0FBY0csUUFBUTtnQkFFbEQvQyxRQUFRc0MsS0FBSyxDQUFDLEFBQUMsa0JBQStDUSxPQUE5QlgsYUFBWSxvQkFBc0MsT0FBcEJXLHFCQUFvQjtnQkFFbEZELDBCQUEwQkQsY0FBY0ksS0FBSyxDQUFDLFNBQUNmO29CQUM3QyxJQUFNZ0IsMEJBQTBCLE1BQUtqQixtQkFBbUIsQ0FBQ0MsY0FBY2pDO29CQUV2RSxJQUFJaUQseUJBQXlCO3dCQUMzQixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLElBQUlKLHlCQUF5QjtvQkFDM0I3QyxRQUFRMEMsS0FBSyxDQUFDLEFBQUMsb0JBQWlESSxPQUE5QlgsYUFBWSxvQkFBc0MsT0FBcEJXLHFCQUFvQjtnQkFDdEY7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxXQUFXLEVBQUVDLE1BQU0sRUFBRXBELE9BQU87Z0JBQ25DLElBQUlxRCxZQUFZO2dCQUVoQixJQUFNbEIsY0FBYyxJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO2dCQUUxQ3BDLFFBQVFzQyxLQUFLLENBQUMsQUFBQyxtQkFBOEIsT0FBWkgsYUFBWTtnQkFFN0MsSUFBTW1CLHNCQUFzQixJQUFJLENBQUNDLG1CQUFtQixDQUFDSixhQUFhQyxRQUFRcEQsVUFDcEV3RCx3QkFBd0IsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ04sYUFBYUMsUUFBUXBEO2dCQUU3RSxJQUFJc0QsdUJBQXVCRSx1QkFBdUI7b0JBQ2hELElBQUlFLHNCQUFzQixPQUN0QkMsdUJBQXVCO29CQUUzQixJQUFJUCxRQUFRO3dCQUNWTSxzQkFBc0IsSUFBSSxDQUFDRSxrQkFBa0IsQ0FBQ1QsYUFBYW5EO29CQUM3RCxPQUFPO3dCQUNMMkQsdUJBQXVCLElBQUksQ0FBQ0UsbUJBQW1CLENBQUM3RDtvQkFDbEQ7b0JBRUEsSUFBSTBELHVCQUF1QkMsc0JBQXNCO3dCQUMvQ04sWUFBWTtvQkFDZDtnQkFDRjtnQkFFQSxJQUFJQSxXQUFXO29CQUNiLElBQU1qQyxRQUFRLElBQUksRUFBRSxHQUFHO29CQUV2QnBCLFFBQVE4RCxRQUFRLENBQUMxQztvQkFFakJwQixRQUFRMEMsS0FBSyxDQUFDLEFBQUMscUJBQWdDLE9BQVpQLGFBQVk7Z0JBQ2pEO2dCQUVBLE9BQU9rQjtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQlQsV0FBVyxFQUFFbkQsT0FBTztnQkFDckMsSUFBSTBELHNCQUFzQjtnQkFFMUIsSUFBTXZCLGNBQWMsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztnQkFFMUNwQyxRQUFRc0MsS0FBSyxDQUFDLEFBQUMsbUJBQThCLE9BQVpILGFBQVk7Z0JBRTdDLElBQU10QixXQUFXLElBQUksQ0FBQ0YsVUFBVTtnQkFFaEMsSUFBSUUsVUFBVTtvQkFDWjZDLHNCQUFzQjtnQkFDeEIsT0FBTztvQkFDTDFELFFBQVFzQyxLQUFLLENBQUMsQUFBQyxRQUFtQixPQUFaSCxhQUFZO2dCQUNwQztnQkFFQSxJQUFJdUIscUJBQXFCO29CQUN2QjFELFFBQVEwQyxLQUFLLENBQUMsQUFBQyxxQkFBZ0MsT0FBWlAsYUFBWTtnQkFDakQ7Z0JBRUEsT0FBT3VCO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CN0QsT0FBTztnQkFDekIsSUFBSTJEO2dCQUVKLElBQU14QixjQUFjLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7Z0JBRTFDcEMsUUFBUXNDLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaSCxhQUFZO2dCQUU1Q3dCLHVCQUF1QjtnQkFFdkIsSUFBSUEsc0JBQXNCO29CQUN4QjNELFFBQVEwQyxLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWlAsYUFBWTtnQkFDaEQ7Z0JBRUEsT0FBT3dCO1lBQ1Q7OztZQUVBSixLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CSixXQUFXLEVBQUVDLE1BQU0sRUFBRXBELE9BQU87Z0JBQzlDLElBQUlzRDtnQkFFSixJQUFNekMsV0FBVyxJQUFJLENBQUNGLFVBQVU7Z0JBRWhDLElBQUksQ0FBQ0UsVUFBVTtvQkFDYixJQUFNc0IsY0FBYyxJQUFJLENBQUNDLFNBQVMsSUFDNUIyQixvQkFBb0JDLElBQUFBLHdDQUFnQyxFQUFDLElBQUksQ0FBQzdELFdBQVc7b0JBRTNFSCxRQUFRc0MsS0FBSyxDQUFDLEFBQUMsbUJBQTRESCxPQUExQzRCLG1CQUFrQiwwQkFBb0MsT0FBWjVCLGFBQVk7b0JBRXZGaUIsU0FBUyxNQUFPLEdBQUc7b0JBRW5CRCxjQUFjLE1BQU0sR0FBRztvQkFFdkJHLHNCQUFzQixJQUFJLENBQUNuRCxXQUFXLENBQUM2QyxLQUFLLENBQUMsU0FBQ1I7d0JBQzVDLElBQU15QixxQkFBcUJ6QixXQUFXVSxRQUFRLENBQUNDLGFBQWFDLFFBQVFwRDt3QkFFcEUsT0FBT2lFO29CQUNUO29CQUVBLElBQUlYLHFCQUFxQjt3QkFDdkJ0RCxRQUFRMEMsS0FBSyxDQUFDLEFBQUMscUJBQThEUCxPQUExQzRCLG1CQUFrQiwwQkFBb0MsT0FBWjVCLGFBQVk7b0JBQzNGO2dCQUNGLE9BQU87b0JBQ0xtQixzQkFBc0I7Z0JBQ3hCO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCTixXQUFXLEVBQUVDLE1BQU0sRUFBRXBELE9BQU87Z0JBQy9DLElBQUlrRSx3QkFBd0I7Z0JBRTVCLElBQU1yRCxXQUFXLElBQUksQ0FBQ0YsVUFBVTtnQkFFaEMsSUFBSUUsVUFBVTtvQkFDWixJQUFNc0IsY0FBYyxJQUFJLENBQUNDLFNBQVMsSUFDNUIrQixvQkFBb0IsSUFBSSxDQUFDOUQsWUFBWSxDQUFDK0IsU0FBUztvQkFFckRwQyxRQUFRc0MsS0FBSyxDQUFDLEFBQUMsbUJBQTJDNkIsT0FBekJoQyxhQUFZLGVBQStCLE9BQWxCZ0MsbUJBQWtCO29CQUU1RSxJQUFNOUQsZUFBZUwsUUFBUW9FLGdCQUFnQixDQUFDLElBQUksQ0FBQy9ELFlBQVk7b0JBRS9ELElBQUlBLGlCQUFpQixNQUFNO3dCQUN6QixJQUFNZ0UsZUFBZUMsbUNBQW9CLEVBQ25DQyxnQkFBZ0JDLElBQUFBLHFDQUEwQixFQUFDSCxlQUMzQ0ksb0NBQW9DcEUsYUFBYXFFLHFCQUFxQixDQUFDSCxlQUFldkU7d0JBRTVGLElBQUl5RSxtQ0FBbUM7NEJBQ3JDUCx3QkFBd0I7d0JBQzFCO29CQUNGLE9BQU87d0JBQ0xsRSxRQUFRMEMsS0FBSyxDQUFDLEFBQUMsUUFBZ0N5QixPQUF6QmhDLGFBQVksZUFBK0IsT0FBbEJnQyxtQkFBa0I7b0JBQ25FO29CQUVBLElBQUlELHVCQUF1Qjt3QkFDekJsRSxRQUFRMEMsS0FBSyxDQUFDLEFBQUMscUJBQTZDeUIsT0FBekJoQyxhQUFZLGVBQStCLE9BQWxCZ0MsbUJBQWtCO29CQUNoRjtnQkFDRixPQUFPO29CQUNMRCx3QkFBd0I7Z0JBQzFCO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxRQUFRLEVBQUV4QixXQUFXLEVBQUVDLE1BQU0sRUFBRXBELE9BQU87Z0JBQzFELElBQUk0RSx5QkFBeUI7Z0JBRTdCLElBQU16QyxjQUFjLElBQUksQ0FBQ0MsU0FBUyxJQUM1QnlDLGlCQUFpQkYsU0FBU3ZDLFNBQVM7Z0JBRXpDcEMsUUFBUXNDLEtBQUssQ0FBQyxBQUFDLG1CQUFtRHVDLE9BQWpDMUMsYUFBWSx1QkFBb0MsT0FBZjBDLGdCQUFlO2dCQUVqRixJQUFNUixlQUFlTSxTQUFTM0QsT0FBTztnQkFFckMsSUFBSXFELGlCQUFpQkMsbUNBQW9CLEVBQUU7b0JBQ3pDLElBQU1qQixZQUFZLElBQUksQ0FBQ0gsUUFBUSxDQUFDQyxhQUFhQyxRQUFRcEQ7b0JBRXJENEUseUJBQXlCdkIsV0FBVyxHQUFHO2dCQUN6QztnQkFFQSxJQUFJdUIsd0JBQXdCO29CQUMxQjVFLFFBQVEwQyxLQUFLLENBQUMsQUFBQyxxQkFBcURtQyxPQUFqQzFDLGFBQVksdUJBQW9DLE9BQWYwQyxnQkFBZTtnQkFDckY7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxPQUFPO2dCQUVYLElBQU1sRSxXQUFXLElBQUksQ0FBQ0YsVUFBVTtnQkFFaEMsSUFBSUUsVUFBVTtvQkFDWixJQUFNMkIsYUFBYSxJQUFJLENBQUN3QyxhQUFhLElBQy9CQyxpQkFBaUJ6QyxXQUFXc0MsTUFBTTtvQkFFeENDLE9BQU9FLGdCQUFpQixHQUFHO2dCQUM3QjtnQkFFQSxPQUFPRjtZQUNUOzs7O1lBSU9HLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNILElBQUksRUFBRS9FLE9BQU87Z0JBQzNCLElBQUlvQixRQUFRO2dCQUVaLElBQUkyRCxTQUFTLE1BQU07b0JBQ2pCLElBQU0sQUFBRUksYUFBY0MsU0FBZEQsWUFDRjNDLGFBQWEyQyxXQUFXRCxRQUFRLENBQUNILE1BQU0vRSxVQUN2Q0csY0FBYzt3QkFDWnFDO3FCQUNELEVBQ0R2QyxTQUFTLE1BQ1RDLE9BQU87b0JBRWJrQixRQUFRLElBQUlyQixNQUFNRSxRQUFRQyxNQUFNQztnQkFDbEM7Z0JBRUEsT0FBT2lCO1lBQ1Q7Ozs7cUJBeFV3Q2lFLHVCQUFPLElBc1QvQyx5QkFBT0MsUUFBTyJ9