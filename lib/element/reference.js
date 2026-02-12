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
var _default = (0, _elements.define)((_Reference = /*#__PURE__*/ function(Element) {
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
            key: "isEqualTo",
            value: function isEqualTo(reference) {
                var referenceA = this, referenceB = reference, referenceANode = referenceA.getNode(), referenceBNode = referenceB.getNode(), referenceANodeMatchesReferenceBNode = referenceANode.match(referenceBNode), equalTo = referenceANodeMatchesReferenceBNode; ///
                return equalTo;
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
                var validates = false;
                var referenceString = this.getString(); ///
                context.trace("Validating the '".concat(referenceString, "' reference..."));
                if (!validates) {
                    var metavariableValidates = this.validateMetavariable(context);
                    if (metavariableValidates) {
                        validates = true;
                    }
                }
                if (!validates) {
                    var reference = this, labelPresent = context.isLabelPresentByReference(reference);
                    if (labelPresent) {
                        validates = true; ///
                    }
                }
                if (validates) {
                    var reference1 = this; ///
                    context.addReference(reference1);
                    context.debug("...validated the '".concat(referenceString, "' reference."));
                }
                return validates;
            }
        },
        {
            key: "validateMetavariable",
            value: function validateMetavariable(context) {
                var metavariableValidates = false;
                var referenceString = this.getString(), metavariableString = this.metavariable.getString();
                context.trace("Validating the '".concat(referenceString, "' reference's '").concat(metavariableString, "' metavariable....'"));
                var metaTypeName = _metaTypeNames.REFERENCE_META_TYPE_NAME, referenceMetaType = (0, _metaTypes.findMetaTypeByMetaTypeName)(metaTypeName), metaType = referenceMetaType, metavariable = context.findMetavariable(this.metavariable);
                if (metavariable !== null) {
                    var metavariableValidatesGivenMetaType = metavariable.validateGivenMetaType(metaType, context);
                    if (metavariableValidatesGivenMetaType) {
                        metavariableValidates = true;
                    }
                } else {
                    context.debug("The '".concat(metavariableString, "' metavariable is not present."));
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
                var label = topLevelMetaAssertion.getLabel(), substitutions = [], labelUnifies = this.unifyLabel(label, substitutions, context);
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
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Reference, "name", "Reference"), _Reference));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBhdHRlbXB0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUgfSBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5pbXBvcnQgeyB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkgfSBmcm9tIFwiLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVmZXJlbmNlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7IH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5vZGUoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSk7IH1cblxuICBpc0VxdWFsVG8ocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlQSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZUIgPSByZWZlcmVuY2UsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZUFOb2RlID0gcmVmZXJlbmNlQS5nZXROb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlQk5vZGUgPSByZWZlcmVuY2VCLmdldE5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2VBTm9kZU1hdGNoZXNSZWZlcmVuY2VCTm9kZSA9IHJlZmVyZW5jZUFOb2RlLm1hdGNoKHJlZmVyZW5jZUJOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gcmVmZXJlbmNlQU5vZGVNYXRjaGVzUmVmZXJlbmNlQk5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGxldCBjb21wYXJlc1RvUGFyYW10ZXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IHBhcmFtZXRlck5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKHBhcmFtZXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgaWYgKHBhcmFtZXRlck5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgY29tcGFyZXNUb1BhcmFtdGVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtdGVyO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlcykge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICBpZiAobGFiZWxQcmVzZW50KSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UncyAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi4uJ2ApO1xuXG4gICAgY29uc3QgbWV0YVR5cGVOYW1lID0gUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FLFxuICAgICAgICAgIHJlZmVyZW5jZU1ldGFUeXBlID0gZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IHJlZmVyZW5jZU1ldGFUeXBlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGUodGhpcy5tZXRhdmFyaWFibGUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSA9IG1ldGF2YXJpYWJsZS52YWxpZGF0ZUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUFzTWV0YXZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzQXNNZXRhdmFyaWFibGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgYXMgYSBtZXRhdmFyYWlibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzQXNNZXRhdmFyaWFibGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIGFzIGEgbWV0YXZhcmFpYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNBc01ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHVuaWZ5TGFiZWwobGFiZWwsIGNvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbE1ldGF2YXJpYWJsZSA9IGxhYmVsLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZSwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbGFiZWxNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGxhYmVsVW5pZmllcyA9IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAvLy9cblxuICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IGF0dGVtcHQoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5KSB7XG4gICAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRMYWJlbCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBsYWJlbFVuaWZpZXMgPSB0aGlzLnVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IGxhYmVsVW5pZmllczsgIC8vL1xuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTih0aGlzLm1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVmZXJlbmNlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJSZWZlcmVuY2UiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsImdldE5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsImlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImlzRXF1YWxUbyIsInJlZmVyZW5jZSIsInJlZmVyZW5jZUEiLCJyZWZlcmVuY2VCIiwicmVmZXJlbmNlQU5vZGUiLCJyZWZlcmVuY2VCTm9kZSIsInJlZmVyZW5jZUFOb2RlTWF0Y2hlc1JlZmVyZW5jZUJOb2RlIiwibWF0Y2giLCJlcXVhbFRvIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsInBhcmFtZXRlck5hbWUiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoTm9kZSIsInZhbGlkYXRlIiwidmFsaWRhdGVzIiwicmVmZXJlbmNlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZU1ldGF2YXJpYWJsZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJhZGRSZWZlcmVuY2UiLCJkZWJ1ZyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGFUeXBlTmFtZSIsIlJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSIsInJlZmVyZW5jZU1ldGFUeXBlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsImZpbmRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVWYWxpZGF0ZXNHaXZlbk1ldGFUeXBlIiwidmFsaWRhdGVHaXZlbk1ldGFUeXBlIiwidmFsaWRhdGVBc01ldGF2YXJpYWJsZSIsInZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsInVuaWZ5TGFiZWwiLCJsYWJlbCIsImxhYmVsVW5pZmllcyIsInNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsImxhYmVsU3RyaW5nIiwibGFiZWxNZXRhdmFyaWFibGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSIsInVuaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsImF0dGVtcHQiLCJ1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJnZXRMYWJlbCIsInN1YnN0aXR1dGlvbnMiLCJ0b0pTT04iLCJtZXRhdmFyaWFibGVKU09OIiwibWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OIiwianNvbiIsImZyb21KU09OIiwibWV0YXZhcmlhYmxlRnJvbUpTT04iLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7OEJBVHdCO3dCQUVEO3VCQUNDOzZCQUNpQjt5QkFDRTtxQkFDSTtvQkFDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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