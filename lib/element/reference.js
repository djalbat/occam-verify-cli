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
var _occamfurtle = require("occam-furtle");
var _context = require("../utilities/context");
var _metaTypeNames = require("../metaTypeNames");
var _metaTypes = require("../metaTypes");
var _unify = require("../process/unify");
var _json = require("../utilities/json");
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
var _Reference;
var define = _occamfurtle.elements.define;
var _default = define((_Reference = /*#__PURE__*/ function(Element) {
    _inherits(Reference, Element);
    function Reference(context, string, node, metavariable) {
        _class_call_check(this, Reference);
        var _this;
        _this = _call_super(this, Reference, [
            context,
            string,
            node
        ]);
        _this.metavariable = metavariable;
        return _this;
    }
    _create_class(Reference, [
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.metavariable.getName();
            }
        },
        {
            key: "getMetavariableName",
            value: function getMetavariableName() {
                var metavariableName = this.metavariable.getName();
                return metavariableName;
            }
        },
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                var metavariableNode = this.metavariable.getNode();
                return metavariableNode;
            }
        },
        {
            key: "isMetavariableEqualToMetavariable",
            value: function isMetavariableEqualToMetavariable(metavariable) {
                return this.metavariable.isEqualTo(metavariable);
            }
        },
        {
            key: "compareParameter",
            value: function compareParameter(parameter) {
                var comparesToParamter = false;
                var parameterName = parameter.getName();
                if (parameterName !== null) {
                    var metavariableName = this.getMetavariableName();
                    if (parameterName === metavariableName) {
                        comparesToParamter = true;
                    }
                }
                return comparesToParamter;
            }
        },
        {
            key: "compareMetavariableName",
            value: function compareMetavariableName(metavariableName) {
                return this.metavariable.compareMetavariableName(metavariableName);
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                return this.metavariable.matchNode(metavariableNode);
            }
        },
        {
            key: "validate",
            value: function validate(context) {
                var validate = false;
                var referenceString = this.getString(); ///
                context.trace("Validating the '".concat(referenceString, "' reference..."));
                if (!validate) {
                    var metavariableValidates = this.validateMetavariable(context);
                    validate = metavariableValidates; ///
                }
                if (!validate) {
                    var reference = this, labelPresent = context.isLabelPresentByReference(reference);
                    validate = labelPresent; ///
                }
                if (validate) {
                    var reference1 = this; ///
                    context.addReference(reference1);
                    context.debug("...validated the '".concat(referenceString, "' reference."));
                }
                return validate;
            }
        },
        {
            key: "validateMetavariable",
            value: function validateMetavariable(context) {
                var metavariableValidates = false;
                var metaTypeName = _metaTypeNames.REFERENCE_META_TYPE_NAME, referenceMetaType = (0, _metaTypes.findMetaTypeByMetaTypeName)(metaTypeName), metaType = referenceMetaType, metavariableValidatesGivenMetaType = this.metavariable.validateGivenMetaType(metaType, context);
                if (metavariableValidatesGivenMetaType) {
                    metavariableValidates = true;
                }
                return metavariableValidates;
            }
        },
        {
            key: "validateAsMetavariable",
            value: function validateAsMetavariable(context) {
                var validatesAsMetavariable = false;
                var referenceString = this.getString();
                context.trace("Validating the '".concat(referenceString, "' reference as a metavaraible..."));
                var metavariable = this.getMetavariable(), metavariableName = metavariable.getName(), metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);
                if (metavariablePresent) {
                    validatesAsMetavariable = true;
                }
                if (validatesAsMetavariable) {
                    context.debug("...validated the '".concat(referenceString, "' reference as a metavaraible."));
                }
                return validatesAsMetavariable;
            }
        },
        {
            key: "unifyLabel",
            value: function unifyLabel(label, context) {
                var labelUnifies;
                var specificContext = context; ///
                context = this.getContext();
                var generalContext = context; ///
                context = specificContext; ///
                var reference = this, labelString = label.getString(), referenceString = reference.getString();
                context.trace("Unifying the '".concat(labelString, "' label with the '").concat(referenceString, "' reference..."));
                var labelMetavariable = label.getMetavariable(), generalMetavariable = this.metavariable, specificMetavariable = labelMetavariable, metavariableUnifiesIntrinsically = (0, _unify.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, generalContext, specificContext);
                labelUnifies = metavariableUnifiesIntrinsically; ///
                if (labelUnifies) {
                    context.debug("...unified the '".concat(labelString, "' label with the '").concat(referenceString, "' reference."));
                }
                return labelUnifies;
            }
        },
        {
            key: "unifyMetavariable",
            value: function unifyMetavariable(metavariable, context) {
                var _this = this;
                var metavariableUnifies = false;
                var specificContext = context; ///
                context = this.getContext();
                var generalContext = context; ///
                context = specificContext; ///
                var referenceString = this.getString(), metavariableString = metavariable.getString();
                context.trace("Unifying the '".concat(metavariableString, "' metavariable with the '").concat(referenceString, "' reference..."));
                var metavariableUnifiesIntrinsically = (0, _context.attempt)(function(specificContext) {
                    var generalMetavariable = _this.metavariable, specificMetavariable = metavariable, metavariableUnifiesIntrinsically = (0, _unify.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, generalContext, specificContext);
                    return metavariableUnifiesIntrinsically;
                }, specificContext);
                if (metavariableUnifiesIntrinsically) {
                    metavariableUnifies = true;
                }
                if (metavariableUnifies) {
                    context.debug("...unified the '".concat(metavariableString, "' metavariable with the '").concat(referenceString, "' reference."));
                }
                return metavariableUnifies;
            }
        },
        {
            key: "unifyTopLevelMetaAssertion",
            value: function unifyTopLevelMetaAssertion(topLevelMetaAssertion, context) {
                var topLevelMetaAssertionUnifies;
                var reference = this, referenceString = reference.getString(), topLevelMetaAssertionString = topLevelMetaAssertion.getString();
                context.trace("Unifying the '".concat(topLevelMetaAssertionString, "' top level meta-assertion with the '").concat(referenceString, "' reference..."));
                var Substitutions = _occamfurtle.elements.Substitutions, label = topLevelMetaAssertion.getLabel(), substitutions = Substitutions.fromNothing(context), labelUnifies = this.unifyLabel(label, substitutions, context);
                topLevelMetaAssertionUnifies = labelUnifies; ///
                if (topLevelMetaAssertionUnifies) {
                    context.trace("...unified the '".concat(topLevelMetaAssertionString, "' top level meta-assertion with the '").concat(referenceString, "' reference."));
                }
                return topLevelMetaAssertionUnifies;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var metavariableJSON = (0, _json.metavariableToMetavariableJSON)(this.metavariable), metavariable = metavariableJSON, json = {
                    metavariable: metavariable
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var metavariable = (0, _json.metavariableFromJSON)(json, context), string = metavariable.getString(), node = metavariable.getNode(), reference = new Reference(context, string, node, metavariable);
                return reference;
            }
        }
    ]);
    return Reference;
}(_wrap_native_super(_occamfurtle.Element)), _define_property(_Reference, "name", "Reference"), _Reference));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCwgZWxlbWVudHMgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCB7IGF0dGVtcHQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSB9IGZyb20gXCIuLi9tZXRhVHlwZXNcIjtcbmltcG9ydCB7IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVGcm9tSlNPTiwgbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgZGVmaW5lIH0gPSBlbGVtZW50cztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJlZmVyZW5jZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXROYW1lKCkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpOyB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmlzRXF1YWxUbyhtZXRhdmFyaWFibGUpOyB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJOYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgIGlmIChwYXJhbWV0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJOYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlTWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgICB2YWxpZGF0ZSA9IG1ldGF2YXJpYWJsZVZhbGlkYXRlczsgLy8vXG4gICAgfVxuXG4gICAgaWYgKCF2YWxpZGF0ZSkge1xuICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgdmFsaWRhdGUgPSBsYWJlbFByZXNlbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGUpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGU7XG4gIH1cblxuICB2YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgIHJlZmVyZW5jZU1ldGFUeXBlID0gZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IHJlZmVyZW5jZU1ldGFUeXBlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZXNHaXZlbk1ldGFUeXBlID0gdGhpcy5tZXRhdmFyaWFibGUudmFsaWRhdGVHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBjb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWYWxpZGF0ZXNHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUFzTWV0YXZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzQXNNZXRhdmFyaWFibGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgYXMgYSBtZXRhdmFyYWlibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzQXNNZXRhdmFyaWFibGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIGFzIGEgbWV0YXZhcmFpYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNBc01ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHVuaWZ5TGFiZWwobGFiZWwsIGNvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbE1ldGF2YXJpYWJsZSA9IGxhYmVsLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZSwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbGFiZWxNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGxhYmVsVW5pZmllcyA9IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAvLy9cblxuICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IGF0dGVtcHQoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5KSB7XG4gICAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIGxhYmVsID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldExhYmVsKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoY29udGV4dCksXG4gICAgICAgICAgbGFiZWxVbmlmaWVzID0gdGhpcy51bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSBsYWJlbFVuaWZpZXM7ICAvLy9cblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04odGhpcy5tZXRhdmFyaWFibGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJlZmVyZW5jZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiZWxlbWVudHMiLCJSZWZlcmVuY2UiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsImdldE5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsImlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImlzRXF1YWxUbyIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJwYXJhbWV0ZXJOYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaE5vZGUiLCJ2YWxpZGF0ZSIsInJlZmVyZW5jZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzIiwidmFsaWRhdGVNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2UiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwiYWRkUmVmZXJlbmNlIiwiZGVidWciLCJtZXRhVHlwZU5hbWUiLCJSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUiLCJyZWZlcmVuY2VNZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJtZXRhdmFyaWFibGVWYWxpZGF0ZXNHaXZlbk1ldGFUeXBlIiwidmFsaWRhdGVHaXZlbk1ldGFUeXBlIiwidmFsaWRhdGVBc01ldGF2YXJpYWJsZSIsInZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsInVuaWZ5TGFiZWwiLCJsYWJlbCIsImxhYmVsVW5pZmllcyIsInNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsImxhYmVsU3RyaW5nIiwibGFiZWxNZXRhdmFyaWFibGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSIsInVuaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsImF0dGVtcHQiLCJ1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJTdWJzdGl0dXRpb25zIiwiZ2V0TGFiZWwiLCJzdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwianNvbiIsImZyb21KU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7MkJBVmtDO3VCQUVWOzZCQUNpQjt5QkFDRTtxQkFDSTtvQkFDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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