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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var _default = (0, _elements.define)((_Metavariable = /*#__PURE__*/ function(Element) {
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
                            var FrameSubstitution = _elements.default.FrameSubstitution;
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
                            var StatementSubstitution = _elements.default.StatementSubstitution;
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
                            var ReferenceSubstitution = _elements.default.ReferenceSubstitution;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHN5bnRoZXRpY2FsbHkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyBtZXRhVHlwZVRvTWV0YVR5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyB1bmlmeU1ldGF2YXJpYWJsZSwgdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGF2YXJpYWJsZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUsIG1ldGFUeXBlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcbiAgICBcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgc2V0TWV0YVR5cGUobWV0YVR5cGUpIHtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBpc05hbWVFcXVhbFRvKG5hbWUpIHtcbiAgICBjb25zdCBuYW1lRXF1YWxUbyA9IChuYW1lID09PSB0aGlzLm5hbWUpO1xuXG4gICAgcmV0dXJuIG5hbWVFcXVhbFRvO1xuICB9XG5cbiAgaXNNZXRhVHlwZUVxdWFsVG8obWV0YVR5cGUpIHsgcmV0dXJuIHRoaXMubWV0YVR5cGUuaXNFcXVhbFRvKG1ldGFUeXBlKTsgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lTWV0YXZhcmlhYmxlTmFtZSA9ICh0aGlzLm5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gbmFtZU1ldGF2YXJpYWJsZU5hbWU7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YTtpZGF0ZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVHaXZlbk1ldGFUeXBlKG1ldGFUeXBlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IHRoaXM7ICAvLy9cblxuICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvTWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuaXNNZXRhVHlwZUVxdWFsVG8obWV0YVR5cGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvTWV0YVR5cGUpIHtcbiAgICAgICAgdmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzR2l2ZW5NZXRhVHlwZTtcbiAgfVxuXG4gIHVuaWZ5RnJhbWUoZnJhbWUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gdGhpcy51bmlmeUZyYW1lTWV0YXZhcmlhYmxlKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCA9IHN1YnN0aXR1dGlvbnMuaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbkZyYW1lRXF1YWxUb0ZyYW1lID0gc3Vic3RpdHV0aW9uLmlzRnJhbWVFcXVhbFRvRnJhbWUoZnJhbWUpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25GcmFtZUVxdWFsVG9GcmFtZSkge1xuICAgICAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXM7ICAvLy9cblxuICAgICAgICBzeW50aGV0aWNhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBGcmFtZVN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHM7XG5cbiAgICAgICAgICBGcmFtZVN1YnN0aXR1dGlvbi5mcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUoZnJhbWUsIG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG4gICAgICAgIH0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gc3Vic3RpdHV0aW9ucy5pc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTsgLy8vXG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCA9IHN1YnN0aXR1dGlvbi5jb21wYXJlU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpczsgIC8vL1xuXG4gICAgICAgIHN5bnRoZXRpY2FsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHM7XG5cbiAgICAgICAgICAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICBTdGF0ZW1lbnRTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSA6XG4gICAgICAgICAgICAgIFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgICB9LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0aGlzLnVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgcmVmZXJlbmNlVW5pZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCA9IHN1YnN0aXR1dGlvbnMuaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSwgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25SZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlID0gc3Vic3RpdHV0aW9uLmlzUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25SZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlKSB7XG4gICAgICAgICAgcmVmZXJlbmNlVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXM7ICAvLy9cblxuICAgICAgICBzeW50aGV0aWNhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBSZWZlcmVuY2VTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzO1xuXG4gICAgICAgICAgUmVmZXJlbmNlU3Vic3RpdHV0aW9uLmZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuICAgICAgICB9LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZWZlcmVuY2VVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZSwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmcgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7Z2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHVuaWZ5TWV0YXZhcmlhYmxlKGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlGcmFtZU1ldGF2YXJpYWJsZShmcmFtZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZUVxdWFsVG9NZXR2YXJpYWJsZSA9IGZyYW1lLmlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVFcXVhbFRvTWV0dmFyaWFibGUpIHtcbiAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZyYW1lU2luZ3VsYXIgPSBmcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgICAgaWYgKGZyYW1lU2luZ3VsYXIpIHtcbiAgICAgICAgICBjb25zdCBmcmFtZU1ldGF2YXJpYWJsZU5hbWUgPSBmcmFtZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUoZnJhbWVNZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVN0cmluZyA9IGZyYW1lTWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlIGZyYW1lJ3MgJyR7ZnJhbWVNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICAgICAgICBjb25zdCBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBmcmFtZU1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7IC8vL1xuXG4gICAgICAgICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgZnJhbWUncyAnJHtmcmFtZU1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlRXF1YWxUb01ldHZhcmlhYmxlID0gc3RhdGVtZW50LmlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlRXF1YWxUb01ldHZhcmlhYmxlKSB7XG4gICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50U2luZ3VsYXIgPSBzdGF0ZW1lbnQuaXNTaW5ndWxhcigpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRTaW5ndWxhcikge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5hbWUgPSBzdGF0ZW1lbnQuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVTdHJpbmcgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgc3RhdGVtZW50J3MgJHtzdGF0ZW1lbnRNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICAgICAgICBjb25zdCBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMgPSBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTsgLy8vXG5cbiAgICAgICAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgc3RhdGVtZW50J3MgJyR7c3RhdGVtZW50TWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlRXF1YWxUb01ldHZhcmlhYmxlID0gcmVmZXJlbmNlLmlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlTWV0YXZhcmlhYmxlRXF1YWxUb01ldHZhcmlhYmxlKSB7XG4gICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlTWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVTdHJpbmcgPSByZWZlcmVuY2VNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlIHJlZmVyZW5jZSdzICR7cmVmZXJlbmNlTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgICAgIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSByZWZlcmVuY2VNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAvLy9cblxuICAgICAgICBpZiAocmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlIHJlZmVyZW5jZSdzICcke3JlZmVyZW5jZU1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhVHlwZUpTT04gPSBtZXRhVHlwZVRvTWV0YVR5cGVKU09OKHRoaXMubWV0YVR5cGUpLFxuICAgICAgICAgIHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgbWV0YVR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTWV0YXZhcmlhYmxlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICAvLy9cbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTWV0YXZhcmlhYmxlIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwidHlwZSIsIm1ldGFUeXBlIiwiZ2V0TmFtZSIsImdldFR5cGUiLCJnZXRNZXRhVHlwZSIsInNldFR5cGUiLCJzZXRNZXRhVHlwZSIsImlzTmFtZUVxdWFsVG8iLCJuYW1lRXF1YWxUbyIsImlzTWV0YVR5cGVFcXVhbFRvIiwiaXNFcXVhbFRvIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibmFtZU1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsInZhbGlkYXRlIiwidmFsaWRhdGVzIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwiZGVidWciLCJ2YWxpZGF0ZUdpdmVuTWV0YVR5cGUiLCJ2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVTdHJpbmciLCJmaW5kTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvTWV0YVR5cGUiLCJ1bmlmeUZyYW1lIiwiZnJhbWUiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJmcmFtZVVuaWZpZXMiLCJmcmFtZVN0cmluZyIsImZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5RnJhbWVNZXRhdmFyaWFibGUiLCJzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGUiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25GcmFtZUVxdWFsVG9GcmFtZSIsImlzRnJhbWVFcXVhbFRvRnJhbWUiLCJzeW50aGV0aWNhbGx5IiwiRnJhbWVTdWJzdGl0dXRpb24iLCJlbGVtZW50cyIsImZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllcyIsInN0YXRlbWVudFN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsIkVNUFRZX1NUUklORyIsInN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQiLCJjb21wYXJlU3RhdGVtZW50IiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJ1bmlmeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZVVuaWZpZXMiLCJyZWZlcmVuY2VTdHJpbmciLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlSZWZlcmVuY2VNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25SZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlIiwiaXNSZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlIiwiUmVmZXJlbmNlU3Vic3RpdHV0aW9uIiwiZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZSIsInVuaWZ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsImdldENvbnRleHQiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nIiwic3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmciLCJnZW5lcmFsQ29udGV4dEZpbGVQYXRoIiwiZ2V0RmlsZVBhdGgiLCJzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCIsImZyYW1lTWV0YXZhcmlhYmxlRXF1YWxUb01ldHZhcmlhYmxlIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiZnJhbWVTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJmcmFtZU1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwiZnJhbWVNZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwiZnJhbWVNZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZUVxdWFsVG9NZXR2YXJpYWJsZSIsInN0YXRlbWVudFNpbmd1bGFyIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZVN0cmluZyIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZUVxdWFsVG9NZXR2YXJpYWJsZSIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZVN0cmluZyIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwiRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7MkJBWHdCO2dFQUVIO3lCQUdRO3VCQUNDO29CQUNDO3FCQUVtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVsRSxXQUFlQSxJQUFBQSxnQkFBTSxpQ0FBQzs7YUFBTUMsYUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFFBQVE7Z0NBRDdCTjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFD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