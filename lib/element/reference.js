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
            key: "findValidRefernece",
            value: function findValidRefernece(context) {
                var metavariableNode = this.getMetavariableNode(), reference = context.findReferenceByMetavariableNode(metavariableNode), validReference = reference; ///
                return validReference;
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
                var reference = null;
                var referenceString = this.getString(); ///
                context.trace("Validating the '".concat(referenceString, "' reference..."));
                var validRefernece = this.findValidRefernece(context);
                if (validRefernece !== null) {
                    reference = validRefernece; ///
                    context.debug("...the '".concat(referenceString, "' reference is alrady valid."));
                } else {
                    var validates = false;
                    if (!validates) {
                        var metavariableValidates = this.validateMetavariable(context);
                        if (metavariableValidates) {
                            validates = true;
                        }
                    }
                    if (!validates) {
                        var reference1 = this, labelPresent = context.isLabelPresentByReference(reference1);
                        if (labelPresent) {
                            validates = true;
                        }
                    }
                    if (validates) {
                        var reference2 = this; ///
                        context.addReference(reference2);
                        context.debug("...validated the '".concat(referenceString, "' reference."));
                    }
                }
                return reference;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBhdHRlbXB0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUgfSBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5pbXBvcnQgeyB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkgfSBmcm9tIFwiLi4vcHJvY2Vzcy91bmlmeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlRnJvbUpTT04sIG1ldGF2YXJpYWJsZVRvTWV0YXZhcmlhYmxlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVmZXJlbmNlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2VOb2RlO1xuICB9XG5cblxuICBnZXROYW1lKCkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpOyB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5tZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIG1hdGNoUmVmZXJlbmNlTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9uTm9kZUEgPSBhc3NlcnRpb25Ob2RlOyAvLy9cblxuICAgIGFzc2VydGlvbk5vZGUgPSB0aGlzLmdldFJlZmVyZW5jZU5vZGUoKTtcblxuICAgIGNvbnN0IGFzc2VydGlvbk5vZGVCID0gYXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uTm9kZUFBTWF0Y2hlc1JlZmVyZW5jZUJOb2RlQiA9IGFzc2VydGlvbk5vZGVBLm1hdGNoKGFzc2VydGlvbk5vZGVCKSxcbiAgICAgICAgICBlcXVhbFRvID0gYXNzZXJ0aW9uTm9kZUFBTWF0Y2hlc1JlZmVyZW5jZUJOb2RlQjsgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGZpbmRWYWxpZFJlZmVybmVjZShjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YWxpZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkUmVmZXJlbmNlO1xuICB9XG5cbiAgaXNFcXVhbFRvKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2UuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHJlZmVyZW5jZU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9QYXJhbXRlciA9IGZhbHNlO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCk7XG5cbiAgICBpZiAocGFyYW1ldGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICBpZiAocGFyYW1ldGVyTmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICBjb21wYXJlc1RvUGFyYW10ZXIgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW10ZXI7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGxldCBjb21wYXJlc1RvTWV0YXZhcmlhYmxlID0gZmFsc2U7XG5cbiAgICBsZXQgbWV0YXZhcmlhYmxlTmFtZTtcblxuICAgIG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLm1ldGF2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWUgLy8vXG5cbiAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVCID0gbWV0YXZhcmlhYmxlTmFtZTsgLy8vXG5cbiAgICBpZiAobWV0YXZhcmlhYmxlTmFtZUEgPT09IG1ldGF2YXJpYWJsZU5hbWVCKSB7XG4gICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlID0gbnVsbDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZFJlZmVybmVjZSA9IHRoaXMuZmluZFZhbGlkUmVmZXJuZWNlKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkUmVmZXJuZWNlICE9PSBudWxsKSB7XG4gICAgICByZWZlcmVuY2UgPSB2YWxpZFJlZmVybmVjZTsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgaXMgYWxyYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGlmICghdmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG1ldGF2YXJpYWJsZVZhbGlkYXRlcykge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCF2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgIGlmIChsYWJlbFByZXNlbnQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgdmFsaWRhdGVNZXRhdmFyaWFibGUoY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMubWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlJ3MgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uLidgKTtcblxuICAgIGNvbnN0IG1ldGFUeXBlTmFtZSA9IFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSxcbiAgICAgICAgICByZWZlcmVuY2VNZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IHJlZmVyZW5jZU1ldGFUeXBlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGUodGhpcy5tZXRhdmFyaWFibGUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSA9IG1ldGF2YXJpYWJsZS52YWxpZGF0ZUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgICBtZXRhdmFyaWFibGVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUFzTWV0YXZhcmlhYmxlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzQXNNZXRhdmFyaWFibGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIGFzIGEgbWV0YXZhcmFpYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICB2YWxpZGF0ZXNBc01ldGF2YXJpYWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSBhcyBhIG1ldGF2YXJhaWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzQXNNZXRhdmFyaWFibGU7XG4gIH1cblxuICB1bmlmeUxhYmVsKGxhYmVsLCBjb250ZXh0KSB7XG4gICAgbGV0IGxhYmVsVW5pZmllcztcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLCAvLy9cbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgbGFiZWxNZXRhdmFyaWFibGUgPSBsYWJlbC5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcy5tZXRhdmFyaWFibGUsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IGxhYmVsTWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBsYWJlbFVuaWZpZXMgPSBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTsgLy8vXG5cbiAgICBpZiAobGFiZWxVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSBhdHRlbXB0KChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZSwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSkge1xuICAgICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgbGFiZWwgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0TGFiZWwoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgbGFiZWxVbmlmaWVzID0gdGhpcy51bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSBsYWJlbFVuaWZpZXM7ICAvLy9cblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04odGhpcy5tZXRhdmFyaWFibGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJlZmVyZW5jZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUmVmZXJlbmNlIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRSZWZlcmVuY2VOb2RlIiwiZ2V0Tm9kZSIsInJlZmVyZW5jZU5vZGUiLCJnZXROYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoUmVmZXJlbmNlTm9kZSIsImFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlQSIsImFzc2VydGlvbk5vZGVCIiwiYXNzZXJ0aW9uTm9kZUFBTWF0Y2hlc1JlZmVyZW5jZUJOb2RlQiIsIm1hdGNoIiwiZXF1YWxUbyIsImZpbmRWYWxpZFJlZmVybmVjZSIsInJlZmVyZW5jZSIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJ2YWxpZFJlZmVyZW5jZSIsImlzRXF1YWxUbyIsInJlZmVyZW5jZU5vZGVNYXRjaGVzIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbXRlciIsInBhcmFtZXRlck5hbWUiLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5hbWVBIiwibWV0YXZhcmlhYmxlTmFtZUIiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsInZhbGlkYXRlIiwicmVmZXJlbmNlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZFJlZmVybmVjZSIsImRlYnVnIiwidmFsaWRhdGVzIiwibWV0YXZhcmlhYmxlVmFsaWRhdGVzIiwidmFsaWRhdGVNZXRhdmFyaWFibGUiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwiYWRkUmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YVR5cGVOYW1lIiwiUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FIiwicmVmZXJlbmNlTWV0YVR5cGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwiZmluZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVZhbGlkYXRlc0dpdmVuTWV0YVR5cGUiLCJ2YWxpZGF0ZUdpdmVuTWV0YVR5cGUiLCJ2YWxpZGF0ZUFzTWV0YXZhcmlhYmxlIiwidmFsaWRhdGVzQXNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwidW5pZnlMYWJlbCIsImxhYmVsIiwibGFiZWxVbmlmaWVzIiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwibGFiZWxTdHJpbmciLCJsYWJlbE1ldGF2YXJpYWJsZSIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwiYXR0ZW1wdCIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsImdldExhYmVsIiwic3Vic3RpdHV0aW9ucyIsInRvSlNPTiIsIm1ldGF2YXJpYWJsZUpTT04iLCJtZXRhdmFyaWFibGVUb01ldGF2YXJpYWJsZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJtZXRhdmFyaWFibGVGcm9tSlNPTiIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7Ozs4QkFUd0I7d0JBRUQ7dUJBQ0M7NkJBQ2lCO3lCQUNFO3FCQUNJO29CQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFckUsV0FBZUEsSUFBQUEsZ0JBQU0sOEJBQUM7O2FBQU1DLFVBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFlBQVk7Z0NBRHJCSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxZQUFZLEdBQUdBOzs7OztZQUd0QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxZQUFZO1lBQzFCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ILE9BQU8sSUFBSSxDQUFDSSxPQUFPLElB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