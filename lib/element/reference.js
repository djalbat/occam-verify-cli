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
            key: "getReferenceNode",
            value: function getReferenceNode() {
                var node = this.getNode(), referenceNode = node; ///
                return referenceNode;
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
            key: "matchReferenceNode",
            value: function matchReferenceNode(assertionNode) {
                var assertionNodeA = assertionNode; ///
                assertionNode = this.getReferenceNode();
                var assertionNodeB = assertionNode, assertionNodeAAMatchesReferenceBNodeB = assertionNodeA.match(assertionNodeB), equalTo = assertionNodeAAMatchesReferenceBNodeB; ///
                return equalTo;
            }
        },
        {
            key: "isValid",
            value: function isValid(context) {
                var metavariableNode = this.getMetavariableNode(), referencePresent = context.isReferencePresentByMetavariableNode(metavariableNode), valid = referencePresent; ///
                return valid;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(reference) {
                var referenceNode = reference.getNode(), referenceNodeMatches = this.matchReferenceNode(referenceNode), equalTo = referenceNodeMatches; ///
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
            key: "compareMetavariable",
            value: function compareMetavariable(metavariable) {
                var comparesToMetavariable = false;
                var metavariableName;
                metavariableName = this.metavariable.getName();
                var metavariableNameA = metavariableName ///
                ;
                metavariableName = metavariable.getName();
                var metavariableNameB = metavariableName; ///
                if (metavariableNameA === metavariableNameB) {
                    comparesToMetavariable = true;
                }
                return comparesToMetavariable;
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
                return this.metavariable.matchMetavariableNode(metavariableNode);
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
                var metaTypeName = _metaTypeNames.REFERENCE_META_TYPE_NAME, referenceMetaType = context.findMetaTypeByMetaTypeName(metaTypeName), metaType = referenceMetaType, metavariable = context.findMetavariable(this.metavariable);
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
                var referenceString = this.getString(); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBhdHRlbXB0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUgfSBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5pbXBvcnQgeyB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkgfSBmcm9tIFwiLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVmZXJlbmNlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2VOb2RlO1xuICB9XG5cblxuICBnZXROYW1lKCkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpOyB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIG1hdGNoUmVmZXJlbmNlTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9uTm9kZUEgPSBhc3NlcnRpb25Ob2RlOyAvLy9cblxuICAgIGFzc2VydGlvbk5vZGUgPSB0aGlzLmdldFJlZmVyZW5jZU5vZGUoKTtcblxuICAgIGNvbnN0IGFzc2VydGlvbk5vZGVCID0gYXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uTm9kZUFBTWF0Y2hlc1JlZmVyZW5jZUJOb2RlQiA9IGFzc2VydGlvbk5vZGVBLm1hdGNoKGFzc2VydGlvbk5vZGVCKSxcbiAgICAgICAgICBlcXVhbFRvID0gYXNzZXJ0aW9uTm9kZUFBTWF0Y2hlc1JlZmVyZW5jZUJOb2RlQjsgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzVmFsaWQoY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2VQcmVzZW50ID0gY29udGV4dC5pc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFsaWQgPSByZWZlcmVuY2VQcmVzZW50OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH1cblxuICBpc0VxdWFsVG8ocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZS5nZXROb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gcmVmZXJlbmNlTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJOYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgIGlmIChwYXJhbWV0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJOYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBmYWxzZTtcblxuICAgIGxldCBtZXRhdmFyaWFibGVOYW1lO1xuXG4gICAgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZSAvLy9cblxuICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUIgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgIGlmIChtZXRhdmFyaWFibGVOYW1lQSA9PT0gbWV0YXZhcmlhYmxlTmFtZUIpIHtcbiAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlcykge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICBpZiAobGFiZWxQcmVzZW50KSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uLidgKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICByZWZlcmVuY2VNZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IHJlZmVyZW5jZU1ldGFUeXBlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGUodGhpcy5tZXRhdmFyaWFibGUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSA9IG1ldGF2YXJpYWJsZS52YWxpZGF0ZUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUFzTWV0YXZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzQXNNZXRhdmFyaWFibGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIGFzIGEgbWV0YXZhcmFpYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICB2YWxpZGF0ZXNBc01ldGF2YXJpYWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSBhcyBhIG1ldGF2YXJhaWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzQXNNZXRhdmFyaWFibGU7XG4gIH1cblxuICB1bmlmeUxhYmVsKGxhYmVsLCBjb250ZXh0KSB7XG4gICAgbGV0IGxhYmVsVW5pZmllcztcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgbGFiZWxNZXRhdmFyaWFibGUgPSBsYWJlbC5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IGxhYmVsTWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBsYWJlbFVuaWZpZXMgPSBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTsgLy8vXG5cbiAgICBpZiAobGFiZWxVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSBhdHRlbXB0KChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZSwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSkge1xuICAgICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgbGFiZWwgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0TGFiZWwoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgbGFiZWxVbmlmaWVzID0gdGhpcy51bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSBsYWJlbFVuaWZpZXM7ICAvLy9cblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04odGhpcy5tZXRhdmFyaWFibGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJlZmVyZW5jZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUmVmZXJlbmNlIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRSZWZlcmVuY2VOb2RlIiwiZ2V0Tm9kZSIsInJlZmVyZW5jZU5vZGUiLCJnZXROYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoUmVmZXJlbmNlTm9kZSIsImFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlQSIsImFzc2VydGlvbk5vZGVCIiwiYXNzZXJ0aW9uTm9kZUFBTWF0Y2hlc1JlZmVyZW5jZUJOb2RlQiIsIm1hdGNoIiwiZXF1YWxUbyIsImlzVmFsaWQiLCJyZWZlcmVuY2VQcmVzZW50IiwiaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwidmFsaWQiLCJpc0VxdWFsVG8iLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VOb2RlTWF0Y2hlcyIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW10ZXIiLCJwYXJhbWV0ZXJOYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsImNvbXBhcmVzVG9NZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOYW1lQSIsIm1ldGF2YXJpYWJsZU5hbWVCIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsInJlZmVyZW5jZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzIiwidmFsaWRhdGVNZXRhdmFyaWFibGUiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwiYWRkUmVmZXJlbmNlIiwiZGVidWciLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhVHlwZU5hbWUiLCJSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUiLCJyZWZlcmVuY2VNZXRhVHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJmaW5kTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSIsInZhbGlkYXRlR2l2ZW5NZXRhVHlwZSIsInZhbGlkYXRlQXNNZXRhdmFyaWFibGUiLCJ2YWxpZGF0ZXNBc01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJ1bmlmeUxhYmVsIiwibGFiZWwiLCJsYWJlbFVuaWZpZXMiLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJsYWJlbFN0cmluZyIsImxhYmVsTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkiLCJ1bmlmeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXMiLCJhdHRlbXB0IiwidW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0TGFiZWwiLCJzdWJzdGl0dXRpb25zIiwidG9KU09OIiwibWV0YXZhcmlhYmxlSlNPTiIsIm1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIm1ldGF2YXJpYWJsZUZyb21KU09OIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7OzhCQVR3Qjt3QkFFRDt1QkFDQzs2QkFDaUI7eUJBQ0U7cUJBQ0k7b0JBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVyRSxXQUFlQSxJQUFBQSxnQkFBTSw4QkFBQzs7YUFBTUMsVUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsWUFBWTtnQ0FEckJKOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFlBQVksR0FBR0E7Ozs7O1lBR3RCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFlBQVk7WUFDMUI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUgsT0FBTyxJQUFJLENBQUNJLE9BQU8sSUFDbkJDLGdCQUFnQkwsTUFBTSxHQUFHO2dCQUUvQixPQUFPSztZQUNUOzs7WUFHQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFZLE9BQU8sSUFBSSxDQUFDTCxZQUFZLENBQUNLLE9BQU87WUFBSTs7O1lBRWhEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ1AsWUFBWSxDQUFDSyxPQUFPO2dCQUVsRCxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQixJQUFJLENBQUNULFlBQVksQ0FBQ0csT0FBTztnQkFFbEQsT0FBT007WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJD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