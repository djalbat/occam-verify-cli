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
var _constants = require("../constants");
var _context = require("../utilities/context");
var _json = require("../utilities/json");
var _unify = require("../process/unify");
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
var _Metavariable;
var define = _occamfurtle.elements.define;
var _default = define((_Metavariable = /*#__PURE__*/ function(Element) {
    _inherits(Metavariable, Element);
    function Metavariable(context, string, node, name, type, metaType) {
        _class_call_check(this, Metavariable);
        var _this;
        _this = _call_super(this, Metavariable, [
            context,
            string,
            node
        ]);
        _this.name = name;
        _this.type = type;
        _this.metaType = metaType;
        return _this;
    }
    _create_class(Metavariable, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getMetaType",
            value: function getMetaType() {
                return this.metaType;
            }
        },
        {
            key: "setType",
            value: function setType(type) {
                this.type = type;
            }
        },
        {
            key: "setMetaType",
            value: function setMetaType(metaType) {
                this.metaType = metaType;
            }
        },
        {
            key: "isNameEqualTo",
            value: function isNameEqualTo(name) {
                var nameEqualTo = name === this.name;
                return nameEqualTo;
            }
        },
        {
            key: "isMetaTypeEqualTo",
            value: function isMetaTypeEqualTo(metaType) {
                return this.metaType.isEqualTo(metaType);
            }
        },
        {
            key: "compareMetavariableName",
            value: function compareMetavariableName(metavariableName) {
                var nameMetavariableName = this.name === metavariableName, comparesToMetavariableName = nameMetavariableName; ///
                return comparesToMetavariableName;
            }
        },
        {
            key: "validate",
            value: function validate(context) {
                var validates = false;
                var metavariableString = this.getString(); ///
                context.trace("Validating the '".concat(metavariableString, "' metavariable..."));
                var metavariable = this, metavariablePresent = context.isMetavariablePresent(metavariable);
                if (metavariablePresent) {
                    validates = true;
                }
                if (validates) {
                    context.debug("...va;idated the '".concat(metavariableString, "' metavariable."));
                }
                return validates;
            }
        },
        {
            key: "validateGivenMetaType",
            value: function validateGivenMetaType(metaType, context) {
                var validatesGivenMetaType = false;
                var metaTypeString = metaType.getString(), metavariableString = this.getString(); ///
                context.trace("Validating the '".concat(metavariableString, "' metavariable given the '").concat(metaTypeString, "' meta-type..."));
                var metavariable = this; ///
                metavariable = context.findMetavariable(metavariable);
                if (metavariable !== null) {
                    var metavariableMetaTypeEqualToMetaType = metavariable.isMetaTypeEqualTo(metaType);
                    if (metavariableMetaTypeEqualToMetaType) {
                        validatesGivenMetaType = true;
                    }
                }
                if (validatesGivenMetaType) {
                    context.debug("...validated the '".concat(metavariableString, "' metavariable given the '").concat(metaTypeString, "' meta-type."));
                }
                return validatesGivenMetaType;
            }
        },
        {
            key: "unifyFrame",
            value: function unifyFrame(frame, substitutions, generalContext, specificContext) {
                var frameUnifies = false;
                var context = specificContext, frameString = frame.getString(), metavariableString = this.getString(); ///
                context.trace("Unifying the '".concat(frameString, "' frame with the '").concat(metavariableString, "' metavariable..."));
                var frameMetavariableUnifies = this.unifyFrameMetavariable(frame, substitutions, generalContext, specificContext);
                if (frameMetavariableUnifies) {
                    frameUnifies = true;
                } else {
                    var metavariable = this, simpleSubstitutionPresent = substitutions.isSimpleSubstitutionPresentByMetavariable(metavariable);
                    if (simpleSubstitutionPresent) {
                        var simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable), substitution = simpleSubstitution, substitutionFrameEqualToFrame = substitution.isFrameEqualToFrame(frame);
                        if (substitutionFrameEqualToFrame) {
                            frameUnifies = true;
                        }
                    } else {
                        var metavariable1 = this; ///
                        (0, _context.synthetically)(function(context) {
                            var FrameSubstitution = _occamfurtle.elements.FrameSubstitution;
                            FrameSubstitution.fromFrameAndMetavariable(frame, metavariable1, context);
                        }, generalContext, specificContext);
                        frameUnifies = true;
                    }
                }
                if (frameUnifies) {
                    context.debug("...unified the '".concat(frameString, "' frame with the '").concat(metavariableString, "' metavariable."));
                }
                return frameUnifies;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitution, substitutions, generalContext, specificContext) {
                var statementUnifies = false;
                var context = specificContext, statementString = statement.getString(), metavariableString = this.getString(), substitutionString = substitution !== null ? substitution.getString() : _constants.EMPTY_STRING;
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(metavariableString).concat(substitutionString, "' metavariable..."));
                var statementMetavariableUnifies = this.unifyStatementMetavariable(statement, substitutions, generalContext, specificContext);
                if (statementMetavariableUnifies) {
                    statementUnifies = true;
                } else {
                    var context1 = specificContext, metavariable = this, substitutionPresent = substitutions.isSubstitutionPresentByMetavariableAndSubstitution(metavariable, substitution);
                    if (substitutionPresent) {
                        substitution = substitutions.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution); ///
                        var substitutionComparesToStatement = substitution.compareStatement(statement, context1);
                        if (substitutionComparesToStatement) {
                            statementUnifies = true;
                        }
                    } else {
                        var metavariable1 = this; ///
                        (0, _context.synthetically)(function(context) {
                            var StatementSubstitution = _occamfurtle.elements.StatementSubstitution;
                            substitution !== null ? StatementSubstitution.fromStatementMetavariableAndSubstitution(statement, metavariable1, substitution, context) : StatementSubstitution.fromStatementAndMetavariable(statement, metavariable1, context);
                        }, generalContext, specificContext);
                        statementUnifies = true;
                    }
                }
                if (statementUnifies) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(metavariableString).concat(substitutionString, "' metavariable."));
                }
                return statementUnifies;
            }
        },
        {
            key: "unifyReference",
            value: function unifyReference(reference, substitutions, generalContext, specificContext) {
                var referenceUnifies = false;
                var context = specificContext, referenceString = reference.getString(), metavariableString = this.getString(); ///
                context.trace("Unifying the '".concat(referenceString, "' reference with the '").concat(metavariableString, "' metavariable..."));
                var referenceMetavariableUnifies = this.unifyReferenceMetavariable(reference, substitutions, generalContext, specificContext);
                if (referenceMetavariableUnifies) {
                    referenceUnifies = true;
                } else {
                    var metavariable = this, simpleSubstitutionPresent = substitutions.isSimpleSubstitutionPresentByMetavariable(metavariable);
                    if (simpleSubstitutionPresent) {
                        var simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable), substitution = simpleSubstitution, substitutionReferenceEqualToReference = substitution.isReferenceEqualToReference(reference);
                        if (substitutionReferenceEqualToReference) {
                            referenceUnifies = true;
                        }
                    } else {
                        var metavariable1 = this; ///
                        (0, _context.synthetically)(function(context) {
                            var ReferenceSubstitution = _occamfurtle.elements.ReferenceSubstitution;
                            ReferenceSubstitution.fromReferenceAndMetavariable(reference, metavariable1, context);
                        }, generalContext, specificContext);
                        referenceUnifies = true;
                    }
                }
                if (referenceUnifies) {
                    context.debug("...unified the '".concat(referenceString, "' reference with the '").concat(metavariableString, "' metavariable."));
                }
                return referenceUnifies;
            }
        },
        {
            key: "unifyMetavariable",
            value: function unifyMetavariable(metavariable, context) {
                var metavariableUnifies;
                var specificContext = context; ///
                context = this.getContext();
                var generalContext = context; ///
                context = specificContext; ///
                var generalMetavariable = this, specificMetavariable = metavariable, generalMetavariableString = generalMetavariable.getString(), specificMetavariableString = specificMetavariable.getString();
                context.trace("Unifying the '".concat(specificMetavariableString, "' metavariable with the '").concat(generalMetavariableString, "' metavariable..."));
                metavariableUnifies = (0, _unify.unifyMetavariable)(generalMetavariable, specificMetavariable, generalContext, specificContext);
                if (metavariableUnifies) {
                    context.debug("...unified the '".concat(specificMetavariableString, "' metavariable with the '").concat(generalMetavariableString, "' metavariable."));
                }
                return metavariableUnifies;
            }
        },
        {
            key: "unifyFrameMetavariable",
            value: function unifyFrameMetavariable(frame, substitutions, generalContext, specificContext) {
                var frameMetavariableUnifies = false;
                var context = specificContext, generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
                if (generalContextFilePath === specificContextFilePath) {
                    var metavariable = this, metavariableString = metavariable.getString(), frameMetavariableEqualToMetvariable = frame.isMetavariableEqualToMetavariable(metavariable, context);
                    if (frameMetavariableEqualToMetvariable) {
                        frameMetavariableUnifies = true;
                    } else {
                        var frameSingular = frame.isSingular();
                        if (frameSingular) {
                            var frameMetavariableName = frame.getMetavariableName(), frameMetavariable = context.findMetavariableByMetavariableName(frameMetavariableName), frameMetavariableString = frameMetavariable.getString();
                            context.trace("Unifying the frame's '".concat(frameMetavariableString, "' metavariable with the '").concat(metavariableString, "' metavariable..."));
                            var generalMetavariable = this, specificMetavariable = frameMetavariable, metavariableUnifiesIntrinsically = (0, _unify.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);
                            frameMetavariableUnifies = metavariableUnifiesIntrinsically; ///
                            if (frameMetavariableUnifies) {
                                context.debug("...unified the frame's '".concat(frameMetavariableString, "' metavariable with the '").concat(metavariableString, "' metavariable."));
                            }
                        }
                    }
                }
                return frameMetavariableUnifies;
            }
        },
        {
            key: "unifyStatementMetavariable",
            value: function unifyStatementMetavariable(statement, substitutions, generalContext, specificContext) {
                var statementMetavariableUnifies = false;
                var context = specificContext, generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
                if (generalContextFilePath === specificContextFilePath) {
                    var metavariable = this, metavariableString = metavariable.getString(), statementMetavariableEqualToMetvariable = statement.isMetavariableEqualToMetavariable(metavariable, context);
                    if (statementMetavariableEqualToMetvariable) {
                        statementMetavariableUnifies = true;
                    } else {
                        var statementSingular = statement.isSingular();
                        if (statementSingular) {
                            var statementMetavariableName = statement.getMetavariableName(), statementMetavariable = context.findMetavariableByMetavariableName(statementMetavariableName), statementMetavariableString = statementMetavariable.getString();
                            context.trace("Unifying the statement's ".concat(statementMetavariableString, "' metavariable with the '").concat(metavariableString, "' metavariable..."));
                            var generalMetavariable = this, specificMetavariable = statementMetavariable, metavariableUnifiesIntrinsically = (0, _unify.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);
                            statementMetavariableUnifies = metavariableUnifiesIntrinsically; ///
                            if (statementMetavariableUnifies) {
                                context.debug("...unified the statement's '".concat(statementMetavariableString, "' metavariable with the '").concat(metavariableString, "' metavariable."));
                            }
                        }
                    }
                }
                return statementMetavariableUnifies;
            }
        },
        {
            key: "unifyReferenceMetavariable",
            value: function unifyReferenceMetavariable(reference, substitutions, generalContext, specificContext) {
                var referenceMetavariableUnifies = false;
                var context = specificContext, generalContextFilePath = generalContext.getFilePath(), specificContextFilePath = specificContext.getFilePath();
                if (generalContextFilePath === specificContextFilePath) {
                    var metavariable = this, metavariableString = metavariable.getString(), referenceMetavariableEqualToMetvariable = reference.isMetavariableEqualToMetavariable(metavariable);
                    if (referenceMetavariableEqualToMetvariable) {
                        referenceMetavariableUnifies = true;
                    } else {
                        var referenceMetavariable = reference.getMetavariable(), referenceMetavariableString = referenceMetavariable.getString();
                        context.trace("Unifying the reference's ".concat(referenceMetavariableString, "' metavariable with the '").concat(metavariableString, "' metavariable..."));
                        var generalMetavariable = this, specificMetavariable = referenceMetavariable, metavariableUnifiesIntrinsically = (0, _unify.unifyMetavariableIntrinsically)(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext);
                        referenceMetavariableUnifies = metavariableUnifiesIntrinsically; ///
                        if (referenceMetavariableUnifies) {
                            context.debug("...unified the reference's '".concat(referenceMetavariableString, "' metavariable with the '").concat(metavariableString, "' metavariable."));
                        }
                    }
                }
                return referenceMetavariableUnifies;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var metaTypeJSON = (0, _json.metaTypeToMetaTypeJSON)(this.metaType), typeJSON = (0, _json.typeToTypeJSON)(this.type), type = typeJSON, metaType = metaTypeJSON, string = this.getString(), json = {
                    string: string,
                    type: type,
                    metaType: metaType
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
            ///
            }
        }
    ]);
    return Metavariable;
}(_wrap_native_super(_occamfurtle.Element)), _define_property(_Metavariable, "name", "Metavariable"), _Metavariable));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCwgZWxlbWVudHMgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHN5bnRoZXRpY2FsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyBtZXRhVHlwZVRvTWV0YVR5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyB1bmlmeU1ldGF2YXJpYWJsZSwgdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcblxuY29uc3QgeyBkZWZpbmUgfSA9IGVsZW1lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTWV0YXZhcmlhYmxlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSwgbWV0YVR5cGUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuICAgIFxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRNZXRhVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhVHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBzZXRNZXRhVHlwZShtZXRhVHlwZSkge1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGlzTmFtZUVxdWFsVG8obmFtZSkge1xuICAgIGNvbnN0IG5hbWVFcXVhbFRvID0gKG5hbWUgPT09IHRoaXMubmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZUVxdWFsVG87XG4gIH1cblxuICBpc01ldGFUeXBlRXF1YWxUbyhtZXRhVHlwZSkgeyByZXR1cm4gdGhpcy5tZXRhVHlwZS5pc0VxdWFsVG8obWV0YVR5cGUpOyB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWVNZXRhdmFyaWFibGVOYW1lID0gKHRoaXMubmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBuYW1lTWV0YXZhcmlhYmxlTmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhO2lkYXRlZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLi4uYCk7XG5cbiAgICBsZXQgbWV0YXZhcmlhYmxlID0gdGhpczsgIC8vL1xuXG4gICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9NZXRhVHlwZSA9IG1ldGF2YXJpYWJsZS5pc01ldGFUeXBlRXF1YWxUbyhtZXRhVHlwZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9NZXRhVHlwZSkge1xuICAgICAgICB2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdW5pZnlGcmFtZShmcmFtZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0aGlzLnVuaWZ5RnJhbWVNZXRhdmFyaWFibGUoZnJhbWUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgZnJhbWVVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50ID0gc3Vic3RpdHV0aW9ucy5pc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uRnJhbWVFcXVhbFRvRnJhbWUgPSBzdWJzdGl0dXRpb24uaXNGcmFtZUVxdWFsVG9GcmFtZShmcmFtZSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkZyYW1lRXF1YWxUb0ZyYW1lKSB7XG4gICAgICAgICAgZnJhbWVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpczsgIC8vL1xuXG4gICAgICAgIHN5bnRoZXRpY2FsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB7IEZyYW1lU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cztcblxuICAgICAgICAgIEZyYW1lU3Vic3RpdHV0aW9uLmZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZShmcmFtZSwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcbiAgICAgICAgfSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgZnJhbWVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uLmdldFN0cmluZygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfSR7c3Vic3RpdHV0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSBzdWJzdGl0dXRpb25zLmlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblByZXNlbnQpIHtcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pOyAvLy9cblxuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25Db21wYXJlc1RvU3RhdGVtZW50ID0gc3Vic3RpdHV0aW9uLmNvbXBhcmVTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCkge1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgc3ludGhldGljYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cztcblxuICAgICAgICAgIChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgIFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgU3RhdGVtZW50U3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICAgIH0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfSR7c3Vic3RpdHV0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlSZWZlcmVuY2UocmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlSZWZlcmVuY2VNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICByZWZlcmVuY2VVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50ID0gc3Vic3RpdHV0aW9ucy5pc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLCAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvblJlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UgPSBzdWJzdGl0dXRpb24uaXNSZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblJlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UpIHtcbiAgICAgICAgICByZWZlcmVuY2VVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpczsgIC8vL1xuXG4gICAgICAgIHN5bnRoZXRpY2FsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB7IFJlZmVyZW5jZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHM7XG5cbiAgICAgICAgICBSZWZlcmVuY2VTdWJzdGl0dXRpb24uZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG4gICAgICAgIH0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2Ugd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXM7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZyA9IGdlbmVyYWxNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmcgPSBzcGVjaWZpY01ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdW5pZnlNZXRhdmFyaWFibGUoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke2dlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUZyYW1lTWV0YXZhcmlhYmxlKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlRXF1YWxUb01ldHZhcmlhYmxlID0gZnJhbWUuaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZUVxdWFsVG9NZXR2YXJpYWJsZSkge1xuICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZnJhbWVTaW5ndWxhciA9IGZyYW1lLmlzU2luZ3VsYXIoKTtcblxuICAgICAgICBpZiAoZnJhbWVTaW5ndWxhcikge1xuICAgICAgICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlTmFtZSA9IGZyYW1lLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShmcmFtZU1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlU3RyaW5nID0gZnJhbWVNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgZnJhbWUncyAnJHtmcmFtZU1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgICAgICAgIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IGZyYW1lTWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTsgLy8vXG5cbiAgICAgICAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSBmcmFtZSdzICcke2ZyYW1lTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0dmFyaWFibGUgPSBzdGF0ZW1lbnQuaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0dmFyaWFibGUpIHtcbiAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRTaW5ndWxhciA9IHN0YXRlbWVudC5pc1Npbmd1bGFyKCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFNpbmd1bGFyKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZSA9IHN0YXRlbWVudC5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZVN0cmluZyA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSBzdGF0ZW1lbnQncyAke3N0YXRlbWVudE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgICAgICAgIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAvLy9cblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSBzdGF0ZW1lbnQncyAnJHtzdGF0ZW1lbnRNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlSZWZlcmVuY2VNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVFcXVhbFRvTWV0dmFyaWFibGUgPSByZWZlcmVuY2UuaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVFcXVhbFRvTWV0dmFyaWFibGUpIHtcbiAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VNZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVN0cmluZyA9IHJlZmVyZW5jZU1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgcmVmZXJlbmNlJ3MgJHtyZWZlcmVuY2VNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICAgICAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZU1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzID0gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7IC8vL1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgcmVmZXJlbmNlJ3MgJyR7cmVmZXJlbmNlTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1ldGFUeXBlSlNPTiA9IG1ldGFUeXBlVG9NZXRhVHlwZUpTT04odGhpcy5tZXRhVHlwZSksXG4gICAgICAgICAgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBtZXRhVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJNZXRhdmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIC8vL1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJlbGVtZW50cyIsIk1ldGF2YXJpYWJsZSIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsInR5cGUiLCJtZXRhVHlwZSIsImdldE5hbWUiLCJnZXRUeXBlIiwiZ2V0TWV0YVR5cGUiLCJzZXRUeXBlIiwic2V0TWV0YVR5cGUiLCJpc05hbWVFcXVhbFRvIiwibmFtZUVxdWFsVG8iLCJpc01ldGFUeXBlRXF1YWxUbyIsImlzRXF1YWxUbyIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsIm5hbWVNZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsIm1ldGF2YXJpYWJsZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsImRlYnVnIiwidmFsaWRhdGVHaXZlbk1ldGFUeXBlIiwidmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSIsIm1ldGFUeXBlU3RyaW5nIiwiZmluZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb01ldGFUeXBlIiwidW5pZnlGcmFtZSIsImZyYW1lIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZnJhbWVVbmlmaWVzIiwiZnJhbWVTdHJpbmciLCJmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMiLCJ1bmlmeUZyYW1lTWV0YXZhcmlhYmxlIiwic2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uRnJhbWVFcXVhbFRvRnJhbWUiLCJpc0ZyYW1lRXF1YWxUb0ZyYW1lIiwic3ludGhldGljYWxseSIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3RhdGVtZW50U3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCIsImNvbXBhcmVTdGF0ZW1lbnQiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsInVuaWZ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlVW5pZmllcyIsInJlZmVyZW5jZVN0cmluZyIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMiLCJ1bmlmeVJlZmVyZW5jZU1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvblJlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UiLCJpc1JlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UiLCJSZWZlcmVuY2VTdWJzdGl0dXRpb24iLCJmcm9tUmVmZXJlbmNlQW5kTWV0YXZhcmlhYmxlIiwidW5pZnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwiZ2V0Q29udGV4dCIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsImdlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmciLCJzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZyIsImdlbmVyYWxDb250ZXh0RmlsZVBhdGgiLCJnZXRGaWxlUGF0aCIsInNwZWNpZmljQ29udGV4dEZpbGVQYXRoIiwiZnJhbWVNZXRhdmFyaWFibGVFcXVhbFRvTWV0dmFyaWFibGUiLCJpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJmcmFtZVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsImZyYW1lTWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJmcmFtZU1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJmcmFtZU1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlRXF1YWxUb01ldHZhcmlhYmxlIiwic3RhdGVtZW50U2luZ3VsYXIiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlU3RyaW5nIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlRXF1YWxUb01ldHZhcmlhYmxlIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlU3RyaW5nIiwidG9KU09OIiwibWV0YVR5cGVKU09OIiwibWV0YVR5cGVUb01ldGFUeXBlSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OzsyQkFWa0M7eUJBRUw7dUJBQ0M7b0JBQ0M7cUJBRW1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRSxJQUFNLEFBQUVBLFNBQVdDLHFCQUFRLENBQW5CRDtJQUVSLFdBQWVBLHNDQUFPOzthQUFNRSxhQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUTtnQ0FEN0JOOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLElBQUksR0FBR0E7UUFDWixNQUFLQyxJQUFJLEdBQUdBO1FBQ1osTUFBS0MsUUFBUSxHQUFHQTs7Ozs7WUFHbEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRTCxJQUFJO2dCQUNWLElBQUksQ0FBQ0EsSUFBSSxHQUFHQTtZQUNkOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlMLFFBQVE7Z0JBQ2xCLElBQUksQ0FBQ0EsUUFBUSxHQUFHQTtZQUNsQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjUixJQUFJO2dCQUNoQixJQUFNUyxjQUFlVCxTQUFTLElBQUksQ0FBQ0EsSUFBSTtnQkFFdkMsT0FBT1M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JSLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNBLFFBQVEsQ0FBQ1MsU0FBUyxDQUFDVDtZQUFXOzs7WUFFeEVVLEtBQUFBO21CQUFBQSxTQUFBQSx3QkFBd0JDLGdCQUFnQjtnQkFDdEMsSUFBTUMsdUJBQXdCLElBQUksQ0FBQ2QsSUFBSSxLQUFLYSxrQkFDdENFLDZCQUE2QkQsc0JBQXVCLEdBQUc7Z0JBRTdELE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU25CLE9BQU87Z0JBQ2QsSUFBSW9CLFlBQVk7Z0JBRWhCLElBQU1DLHFCQUFxQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO2dCQUVoRHRCLFFBQVF1QixLQUFLLENBQUMsQUFBQyxtQkFBcUMsT0FBbkJGLG9CQUFtQjtnQkFFcEQsSUFBTUcsZUFBZSxJQUFJLEVBQ25CQyxzQkFBc0J6QixRQUFRMEIscUJBQXFCLENBQUNGO2dCQUUxRCxJQUFJQyxxQkFBcUI7b0JBQ3ZCTCxZQUFZO2dCQUNkO2dCQUVBLElBQUlBLFdBQVc7b0JBQ2JwQixRQUFRMkIsS0FBSyxDQUFDLEFBQUMscUJBQXVDLE9BQW5CTixvQkFBbUI7Z0JBQ3hEO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCdkIsUUFBUSxFQUFFTCxPQUFPO2dCQUNyQyxJQUFJNkIseUJBQXlCO2dCQUU3QixJQUFNQyxpQkFBaUJ6QixTQUFTaUIsU0FBUyxJQUNuQ0QscUJBQXFCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7Z0JBRWpEdEIsUUFBUXVCLEtBQUssQ0FBQyxBQUFDLG1CQUFpRU8sT0FBL0NULG9CQUFtQiw4QkFBMkMsT0FBZlMsZ0JBQWU7Z0JBRS9GLElBQUlOLGVBQWUsSUFBSSxFQUFHLEdBQUc7Z0JBRTdCQSxlQUFleEIsUUFBUStCLGdCQUFnQixDQUFDUDtnQkFFeEMsSUFBSUEsaUJBQWlCLE1BQU07b0JBQ3pCLElBQU1RLHNDQUFzQ1IsYUFBYVgsaUJBQWlCLENBQUNSO29CQUUzRSxJQUFJMkIscUNBQXFDO3dCQUN2Q0gseUJBQXlCO29CQUMzQjtnQkFDRjtnQkFFQSxJQUFJQSx3QkFBd0I7b0JBQzFCN0IsUUFBUTJCLEtBQUssQ0FBQyxBQUFDLHFCQUFtRUcsT0FBL0NULG9CQUFtQiw4QkFBMkMsT0FBZlMsZ0JBQWU7Z0JBQ25HO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTtnQkFDOUQsSUFBSUMsZUFBZTtnQkFFbkIsSUFBTXRDLFVBQVVxQyxpQkFDVkUsY0FBY0wsTUFBTVosU0FBUyxJQUM3QkQscUJBQXFCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7Z0JBRWhEdEIsUUFBUXVCLEtBQUssQ0FBQyxBQUFDLGlCQUFnREYsT0FBaENrQixhQUFZLHNCQUF1QyxPQUFuQmxCLG9CQUFtQjtnQkFFbEYsSUFBTW1CLDJCQUEyQixJQUFJLENBQUNDLHNCQUFzQixDQUFDUCxPQUFPQyxlQUFlQyxnQkFBZ0JDO2dCQUVuRyxJQUFJRywwQkFBMEI7b0JBQzVCRixlQUFlO2dCQUNqQixPQUFPO29CQUNMLElBQU1kLGVBQWUsSUFBSSxFQUNuQmtCLDRCQUE0QlAsY0FBY1EseUNBQXlDLENBQUNuQjtvQkFFMUYsSUFBSWtCLDJCQUEyQjt3QkFDN0IsSUFBTUUscUJBQXFCVCxjQUFjVSxvQ0FBb0MsQ0FBQ3JCLGVBQ3hFc0IsZUFBZUYsb0JBQ2ZHLGdDQUFnQ0QsYUFBYUUsbUJBQW1CLENBQUNkO3dCQUV2RSxJQUFJYSwrQkFBK0I7NEJBQ2pDVCxlQUFlO3dCQUNqQjtvQkFDRixPQUFPO3dCQUNMLElBQU1kLGdCQUFlLElBQUksRUFBRyxHQUFHO3dCQUUvQnlCLElBQUFBLHNCQUFhLEVBQUMsU0FBQ2pEOzRCQUNiLElBQU0sQUFBRWtELG9CQUFzQnBELHFCQUFRLENBQTlCb0Q7NEJBRVJBLGtCQUFrQkMsd0JBQXdCLENBQUNqQixPQUFPVixlQUFjeEI7d0JBQ2xFLEdBQUdvQyxnQkFBZ0JDO3dCQUVuQkMsZUFBZTtvQkFDakI7Z0JBQ0Y7Z0JBRUEsSUFBSUEsY0FBYztvQkFDaEJ0QyxRQUFRMkIsS0FBSyxDQUFDLEFBQUMsbUJBQWtETixPQUFoQ2tCLGFBQVksc0JBQXVDLE9BQW5CbEIsb0JBQW1CO2dCQUN0RjtnQkFFQSxPQUFPaUI7WUFDVDs7O1lBRUFjLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxTQUFTLEVBQUVQLFlBQVksRUFBRVgsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0JBQ3BGLElBQUlpQixtQkFBbUI7Z0JBRXZCLElBQU10RCxVQUFVcUMsaUJBQ1ZrQixrQkFBa0JGLFVBQVUvQixTQUFTLElBQ3JDRCxxQkFBcUIsSUFBSSxDQUFDQyxTQUFTLElBQ25Da0MscUJBQXFCLEFBQUNWLGlCQUFpQixPQUNmQSxhQUFheEIsU0FBUyxLQUNwQm1DLHVCQUFZO2dCQUU1Q3pELFFBQVF1QixLQUFLLENBQUMsQUFBQyxpQkFBd0RGLE9BQXhDa0MsaUJBQWdCLDBCQUE2Q0MsT0FBckJuQyxvQkFBd0MsT0FBbkJtQyxvQkFBbUI7Z0JBRS9HLElBQU1FLCtCQUErQixJQUFJLENBQUNDLDBCQUEwQixDQUFDTixXQUFXbEIsZUFBZUMsZ0JBQWdCQztnQkFFL0csSUFBSXFCLDhCQUE4QjtvQkFDaENKLG1CQUFtQjtnQkFDckIsT0FBTztvQkFDTCxJQUFNdEQsV0FBVXFDLGlCQUNWYixlQUFlLElBQUksRUFDbkJvQyxzQkFBc0J6QixjQUFjMEIsa0RBQWtELENBQUNyQyxjQUFjc0I7b0JBRTNHLElBQUljLHFCQUFxQjt3QkFDdkJkLGVBQWVYLGNBQWMyQiw2Q0FBNkMsQ0FBQ3RDLGNBQWNzQixlQUFlLEdBQUc7d0JBRTNHLElBQU1pQixrQ0FBa0NqQixhQUFha0IsZ0JBQWdCLENBQUNYLFdBQVdyRDt3QkFFakYsSUFBSStELGlDQUFpQzs0QkFDbkNULG1CQUFtQjt3QkFDckI7b0JBQ0YsT0FBTzt3QkFDTCxJQUFNOUIsZ0JBQWUsSUFBSSxFQUFHLEdBQUc7d0JBRS9CeUIsSUFBQUEsc0JBQWEsRUFBQyxTQUFDakQ7NEJBQ2IsSUFBTSxBQUFFaUUsd0JBQTBCbkUscUJBQVEsQ0FBbENtRTs0QkFFUG5CLGlCQUFpQixPQUNoQm1CLHNCQUFzQkMsd0NBQXdDLENBQUNiLFdBQVc3QixlQUFjc0IsY0FBYzlDLFdBQ3BHaUUsc0JBQXNCRSw0QkFBNEIsQ0FBQ2QsV0FBVzdCLGVBQWN4Qjt3QkFFbEYsR0FBR29DLGdCQUFnQkM7d0JBRW5CaUIsbUJBQW1CO29CQUNyQjtnQkFDRjtnQkFFQSxJQUFJQSxrQkFBa0I7b0JBQ3BCdEQsUUFBUTJCLEtBQUssQ0FBQyxBQUFDLG1CQUEwRE4sT0FBeENrQyxpQkFBZ0IsMEJBQTZDQyxPQUFyQm5DLG9CQUF3QyxPQUFuQm1DLG9CQUFtQjtnQkFDbkg7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFjLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxTQUFTLEVBQUVsQyxhQUFhLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTtnQkFDdEUsSUFBSWlDLG1CQUFtQjtnQkFFdkIsSUFBTXRFLFVBQVVxQyxpQkFDVmtDLGtCQUFrQkYsVUFBVS9DLFNBQVMsSUFDckNELHFCQUFxQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO2dCQUVoRHRCLFFBQVF1QixLQUFLLENBQUMsQUFBQyxpQkFBd0RGLE9BQXhDa0QsaUJBQWdCLDBCQUEyQyxPQUFuQmxELG9CQUFtQjtnQkFFMUYsSUFBTW1ELCtCQUErQixJQUFJLENBQUNDLDBCQUEwQixDQUFDSixXQUFXbEMsZUFBZUMsZ0JBQWdCQztnQkFFL0csSUFBSW1DLDhCQUE4QjtvQkFDaENGLG1CQUFtQjtnQkFDckIsT0FBTztvQkFDTCxJQUFNOUMsZUFBZSxJQUFJLEVBQ25Ca0IsNEJBQTRCUCxjQUFjUSx5Q0FBeUMsQ0FBQ25CO29CQUUxRixJQUFJa0IsMkJBQTJCO3dCQUM3QixJQUFNRSxxQkFBcUJULGNBQWNVLG9DQUFvQyxDQUFDckIsZUFDeEVzQixlQUFlRixvQkFDZjhCLHdDQUF3QzVCLGFBQWE2QiwyQkFBMkIsQ0FBQ047d0JBRXZGLElBQUlLLHVDQUF1Qzs0QkFDekNKLG1CQUFtQjt3QkFDckI7b0JBQ0YsT0FBTzt3QkFDTCxJQUFNOUMsZ0JBQWUsSUFBSSxFQUFHLEdBQUc7d0JBRS9CeUIsSUFBQUEsc0JBQWEsRUFBQyxTQUFDakQ7NEJBQ2IsSUFBTSxBQUFFNEUsd0JBQTBCOUUscUJBQVEsQ0FBbEM4RTs0QkFFUkEsc0JBQXNCQyw0QkFBNEIsQ0FBQ1IsV0FBVzdDLGVBQWN4Qjt3QkFDOUUsR0FBR29DLGdCQUFnQkM7d0JBRW5CaUMsbUJBQW1CO29CQUNyQjtnQkFDRjtnQkFFQSxJQUFJQSxrQkFBa0I7b0JBQ3BCdEUsUUFBUTJCLEtBQUssQ0FBQyxBQUFDLG1CQUEwRE4sT0FBeENrRCxpQkFBZ0IsMEJBQTJDLE9BQW5CbEQsb0JBQW1CO2dCQUM5RjtnQkFFQSxPQUFPaUQ7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0J0RCxZQUFZLEVBQUV4QixPQUFPO2dCQUNyQyxJQUFJK0U7Z0JBRUosSUFBTTFDLGtCQUFrQnJDLFNBQVMsR0FBRztnQkFFcENBLFVBQVUsSUFBSSxDQUFDZ0YsVUFBVTtnQkFFekIsSUFBTTVDLGlCQUFpQnBDLFNBQVUsR0FBRztnQkFFcENBLFVBQVVxQyxpQkFBa0IsR0FBRztnQkFFL0IsSUFBTTRDLHNCQUFzQixJQUFJLEVBQzFCQyx1QkFBdUIxRCxjQUN2QjJELDRCQUE0QkYsb0JBQW9CM0QsU0FBUyxJQUN6RDhELDZCQUE2QkYscUJBQXFCNUQsU0FBUztnQkFFakV0QixRQUFRdUIsS0FBSyxDQUFDLEFBQUMsaUJBQXNFNEQsT0FBdERDLDRCQUEyQiw2QkFBcUQsT0FBMUJELDJCQUEwQjtnQkFFL0dKLHNCQUFzQkQsSUFBQUEsd0JBQWlCLEVBQUNHLHFCQUFxQkMsc0JBQXNCOUMsZ0JBQWdCQztnQkFFbkcsSUFBSTBDLHFCQUFxQjtvQkFDdkIvRSxRQUFRMkIsS0FBSyxDQUFDLEFBQUMsbUJBQXdFd0QsT0FBdERDLDRCQUEyQiw2QkFBcUQsT0FBMUJELDJCQUEwQjtnQkFDbkg7Z0JBRUEsT0FBT0o7WUFDVDs7O1lBRUF0QyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCUCxLQUFLLEVBQUVDLGFBQWEsRUFBRUMsY0FBYyxFQUFFQyxlQUFlO2dCQUMxRSxJQUFJRywyQkFBMkI7Z0JBRS9CLElBQU14QyxVQUFVcUMsaUJBQ1ZnRCx5QkFBeUJqRCxlQUFla0QsV0FBVyxJQUNuREMsMEJBQTBCbEQsZ0JBQWdCaUQsV0FBVztnQkFFM0QsSUFBSUQsMkJBQTJCRSx5QkFBeUI7b0JBQ3RELElBQU0vRCxlQUFlLElBQUksRUFDbkJILHFCQUFxQkcsYUFBYUYsU0FBUyxJQUMzQ2tFLHNDQUFzQ3RELE1BQU11RCxpQ0FBaUMsQ0FBQ2pFLGNBQWN4QjtvQkFFbEcsSUFBSXdGLHFDQUFxQzt3QkFDdkNoRCwyQkFBMkI7b0JBQzdCLE9BQU87d0JBQ0wsSUFBTWtELGdCQUFnQnhELE1BQU15RCxVQUFVO3dCQUV0QyxJQUFJRCxlQUFlOzRCQUNqQixJQUFNRSx3QkFBd0IxRCxNQUFNMkQsbUJBQW1CLElBQ2pEQyxvQkFBb0I5RixRQUFRK0Ysa0NBQWtDLENBQUNILHdCQUMvREksMEJBQTBCRixrQkFBa0J4RSxTQUFTOzRCQUUzRHRCLFFBQVF1QixLQUFLLENBQUMsQUFBQyx5QkFBMkVGLE9BQW5EMkUseUJBQXdCLDZCQUE4QyxPQUFuQjNFLG9CQUFtQjs0QkFFN0csSUFBTTRELHNCQUFzQixJQUFJLEVBQzFCQyx1QkFBdUJZLG1CQUN2QkcsbUNBQW1DQyxJQUFBQSxxQ0FBOEIsRUFBQ2pCLHFCQUFxQkMsc0JBQXNCL0MsZUFBZUMsZ0JBQWdCQzs0QkFFbEpHLDJCQUEyQnlELGtDQUFrQyxHQUFHOzRCQUVoRSxJQUFJekQsMEJBQTBCO2dDQUM1QnhDLFFBQVEyQixLQUFLLENBQUMsQUFBQywyQkFBNkVOLE9BQW5EMkUseUJBQXdCLDZCQUE4QyxPQUFuQjNFLG9CQUFtQjs0QkFDakg7d0JBQ0Y7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT21CO1lBQ1Q7OztZQUVBbUIsS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQk4sU0FBUyxFQUFFbEIsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0JBQ2xGLElBQUlxQiwrQkFBK0I7Z0JBRW5DLElBQU0xRCxVQUFVcUMsaUJBQ1ZnRCx5QkFBeUJqRCxlQUFla0QsV0FBVyxJQUNuREMsMEJBQTBCbEQsZ0JBQWdCaUQsV0FBVztnQkFFM0QsSUFBSUQsMkJBQTJCRSx5QkFBeUI7b0JBQ3RELElBQU0vRCxlQUFlLElBQUksRUFDbkJILHFCQUFxQkcsYUFBYUYsU0FBUyxJQUMzQzZFLDBDQUEwQzlDLFVBQVVvQyxpQ0FBaUMsQ0FBQ2pFLGNBQWN4QjtvQkFFMUcsSUFBSW1HLHlDQUF5Qzt3QkFDM0N6QywrQkFBK0I7b0JBQ2pDLE9BQU87d0JBQ0wsSUFBTTBDLG9CQUFvQi9DLFVBQVVzQyxVQUFVO3dCQUU5QyxJQUFJUyxtQkFBbUI7NEJBQ3JCLElBQU1DLDRCQUE0QmhELFVBQVV3QyxtQkFBbUIsSUFDekRTLHdCQUF3QnRHLFFBQVErRixrQ0FBa0MsQ0FBQ00sNEJBQ25FRSw4QkFBOEJELHNCQUFzQmhGLFNBQVM7NEJBRW5FdEIsUUFBUXVCLEtBQUssQ0FBQyxBQUFDLDRCQUFrRkYsT0FBdkRrRiw2QkFBNEIsNkJBQThDLE9BQW5CbEYsb0JBQW1COzRCQUVwSCxJQUFNNEQsc0JBQXNCLElBQUksRUFDMUJDLHVCQUF1Qm9CLHVCQUN2QkwsbUNBQW1DQyxJQUFBQSxxQ0FBOEIsRUFBQ2pCLHFCQUFxQkMsc0JBQXNCL0MsZUFBZUMsZ0JBQWdCQzs0QkFFbEpxQiwrQkFBK0J1QyxrQ0FBa0MsR0FBRzs0QkFFcEUsSUFBSXZDLDhCQUE4QjtnQ0FDaEMxRCxRQUFRMkIsS0FBSyxDQUFDLEFBQUMsK0JBQXFGTixPQUF2RGtGLDZCQUE0Qiw2QkFBOEMsT0FBbkJsRixvQkFBbUI7NEJBQ3pIO3dCQUNGO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9xQztZQUNUOzs7WUFFQWUsS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQkosU0FBUyxFQUFFbEMsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0JBQ2xGLElBQUltQywrQkFBK0I7Z0JBRW5DLElBQU14RSxVQUFVcUMsaUJBQ1ZnRCx5QkFBeUJqRCxlQUFla0QsV0FBVyxJQUNuREMsMEJBQTBCbEQsZ0JBQWdCaUQsV0FBVztnQkFFM0QsSUFBSUQsMkJBQTJCRSx5QkFBeUI7b0JBQ3RELElBQU0vRCxlQUFlLElBQUksRUFDbkJILHFCQUFxQkcsYUFBYUYsU0FBUyxJQUMzQ2tGLDBDQUEwQ25DLFVBQVVvQixpQ0FBaUMsQ0FBQ2pFO29CQUU1RixJQUFJZ0YseUNBQXlDO3dCQUMzQ2hDLCtCQUErQjtvQkFDakMsT0FBTzt3QkFDTCxJQUFNaUMsd0JBQXdCcEMsVUFBVXFDLGVBQWUsSUFDakRDLDhCQUE4QkYsc0JBQXNCbkYsU0FBUzt3QkFFbkV0QixRQUFRdUIsS0FBSyxDQUFDLEFBQUMsNEJBQWtGRixPQUF2RHNGLDZCQUE0Qiw2QkFBOEMsT0FBbkJ0RixvQkFBbUI7d0JBRXBILElBQU00RCxzQkFBc0IsSUFBSSxFQUMxQkMsdUJBQXVCdUIsdUJBQ3ZCUixtQ0FBbUNDLElBQUFBLHFDQUE4QixFQUFDakIscUJBQXFCQyxzQkFBc0IvQyxlQUFlQyxnQkFBZ0JDO3dCQUVsSm1DLCtCQUErQnlCLGtDQUFrQyxHQUFHO3dCQUVwRSxJQUFJekIsOEJBQThCOzRCQUNoQ3hFLFFBQVEyQixLQUFLLENBQUMsQUFBQywrQkFBcUZOLE9BQXZEc0YsNkJBQTRCLDZCQUE4QyxPQUFuQnRGLG9CQUFtQjt3QkFDekg7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsT0FBT21EO1lBQ1Q7OztZQUVBb0MsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWVDLElBQUFBLDRCQUFzQixFQUFDLElBQUksQ0FBQ3pHLFFBQVEsR0FDbkQwRyxXQUFXQyxJQUFBQSxvQkFBYyxFQUFDLElBQUksQ0FBQzVHLElBQUksR0FDbkNBLE9BQU8yRyxVQUNQMUcsV0FBV3dHLGNBQ1g1RyxTQUFTLElBQUksQ0FBQ3FCLFNBQVMsSUFDdkIyRixPQUFPO29CQUNMaEgsUUFBQUE7b0JBQ0FHLE1BQUFBO29CQUNBQyxVQUFBQTtnQkFDRjtnQkFFTixPQUFPNEc7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVqSCxPQUFPO1lBQzNCLEdBQUc7WUFDTDs7OztxQkEzWStDbUgsb0JBQU8sSUF1WXRELGdDQUFPaEgsUUFBTyJ9