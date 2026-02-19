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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBhdHRlbXB0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUgfSBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5pbXBvcnQgeyB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkgfSBmcm9tIFwiLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVmZXJlbmNlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2VOb2RlO1xuICB9XG5cblxuICBnZXROYW1lKCkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpOyB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIG1hdGNoUmVmZXJlbmNlTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9uTm9kZUEgPSBhc3NlcnRpb25Ob2RlOyAvLy9cblxuICAgIGFzc2VydGlvbk5vZGUgPSB0aGlzLmdldFJlZmVyZW5jZU5vZGUoKTtcblxuICAgIGNvbnN0IGFzc2VydGlvbk5vZGVCID0gYXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uTm9kZUFBTWF0Y2hlc1JlZmVyZW5jZUJOb2RlQiA9IGFzc2VydGlvbk5vZGVBLm1hdGNoKGFzc2VydGlvbk5vZGVCKSxcbiAgICAgICAgICBlcXVhbFRvID0gYXNzZXJ0aW9uTm9kZUFBTWF0Y2hlc1JlZmVyZW5jZUJOb2RlQjsgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzVmFsaWQoY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2VQcmVzZW50ID0gY29udGV4dC5pc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFsaWQgPSByZWZlcmVuY2VQcmVzZW50OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH1cblxuICBpc0VxdWFsVG8ocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZS5nZXROb2RlKCksXG4gICAgICAgICAgcmVmZXJlbmNlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gcmVmZXJlbmNlTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBsZXQgY29tcGFyZXNUb1BhcmFtdGVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJOYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgIGlmIChwYXJhbWV0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJOYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgIGNvbXBhcmVzVG9QYXJhbXRlciA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBmYWxzZTtcblxuICAgIGxldCBtZXRhdmFyaWFibGVOYW1lO1xuXG4gICAgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZSAvLy9cblxuICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUIgPSBtZXRhdmFyaWFibGVOYW1lOyAvLy9cblxuICAgIGlmIChtZXRhdmFyaWFibGVOYW1lQSA9PT0gbWV0YXZhcmlhYmxlTmFtZUIpIHtcbiAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlcykge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZU1ldGF2YXJpYWJsZShjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICBpZiAobGFiZWxQcmVzZW50KSB7XG4gICAgICAgIHZhbGlkYXRlcyA9IHRydWU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uLidgKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICByZWZlcmVuY2VNZXRhVHlwZSA9IGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSksXG4gICAgICAgICAgbWV0YVR5cGUgPSByZWZlcmVuY2VNZXRhVHlwZSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSBtZXRhdmFyaWFibGUudmFsaWRhdGVHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlc0dpdmVuTWV0YVR5cGUpIHtcbiAgICAgICAgbWV0YXZhcmlhYmxlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVBc01ldGF2YXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlID0gZmFsc2U7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSBhcyBhIG1ldGF2YXJhaWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdmFsaWRhdGVzQXNNZXRhdmFyaWFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNBc01ldGF2YXJpYWJsZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgYXMgYSBtZXRhdmFyYWlibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgdW5pZnlMYWJlbChsYWJlbCwgY29udGV4dCkge1xuICAgIGxldCBsYWJlbFVuaWZpZXM7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsTWV0YXZhcmlhYmxlID0gbGFiZWwuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMubWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBsYWJlbE1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgbGFiZWxVbmlmaWVzID0gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7IC8vL1xuXG4gICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gYXR0ZW1wdCgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUsICAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5O1xuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkpIHtcbiAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldExhYmVsKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHRoaXMudW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gbGFiZWxVbmlmaWVzOyAgLy8vXG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlVG9NZXRhdmFyaWFibGVKU09OKHRoaXMubWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZWZlcmVuY2VcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlJlZmVyZW5jZSIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0UmVmZXJlbmNlTm9kZSIsImdldE5vZGUiLCJyZWZlcmVuY2VOb2RlIiwiZ2V0TmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaFJlZmVyZW5jZU5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZUEiLCJhc3NlcnRpb25Ob2RlQiIsImFzc2VydGlvbk5vZGVBQU1hdGNoZXNSZWZlcmVuY2VCTm9kZUIiLCJtYXRjaCIsImVxdWFsVG8iLCJpc1ZhbGlkIiwicmVmZXJlbmNlUHJlc2VudCIsImlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsInZhbGlkIiwiaXNFcXVhbFRvIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlTm9kZU1hdGNoZXMiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtdGVyIiwicGFyYW1ldGVyTmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTmFtZUEiLCJtZXRhdmFyaWFibGVOYW1lQiIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJyZWZlcmVuY2VTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZVZhbGlkYXRlcyIsInZhbGlkYXRlTWV0YXZhcmlhYmxlIiwibGFiZWxQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsImFkZFJlZmVyZW5jZSIsImRlYnVnIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FIiwicmVmZXJlbmNlTWV0YVR5cGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwiZmluZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVZhbGlkYXRlc0dpdmVuTWV0YVR5cGUiLCJ2YWxpZGF0ZUdpdmVuTWV0YVR5cGUiLCJ2YWxpZGF0ZUFzTWV0YXZhcmlhYmxlIiwidmFsaWRhdGVzQXNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwidW5pZnlMYWJlbCIsImxhYmVsIiwibGFiZWxVbmlmaWVzIiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwibGFiZWxTdHJpbmciLCJsYWJlbE1ldGF2YXJpYWJsZSIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwiYXR0ZW1wdCIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsImdldExhYmVsIiwic3Vic3RpdHV0aW9ucyIsInRvSlNPTiIsIm1ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7Ozs4QkFUd0I7d0JBRUQ7dUJBQ0M7NkJBQ2lCO3lCQUNFO3FCQUNJO29CQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFckUsV0FBZUEsSUFBQUEsZ0JBQU0sOEJBQUM7O2FBQU1DLFVBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFlBQVk7Z0NBRHJCSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxZQUFZLEdBQUdBOzs7OztZQUd0QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxZQUFZO1lBQzFCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ILE9BQU8sSUFBSSxDQUFDSSxPQUFPLElBQ25CQyxnQkFBZ0JMLE1BQU0sR0FBRztnQkFFL0IsT0FBT0s7WUFDVDs7O1lBR0FDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBWSxPQUFPLElBQUksQ0FBQ0wsWUFBWSxDQUFDSyxPQUFPO1lBQUk7OztZQUVoREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQixJQUFJLENBQUNQLFlBQVksQ0FBQ0ssT0FBTztnQkFFbEQsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxtQkFBbUIsSUFBSSxDQUFDVCxZQUFZLENBQUNHLE9BQU87Z0JBRWxELE9BQU9NO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxhQUFhO2dC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