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
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _constants = require("../constants");
var _instantiate = require("../process/instantiate");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
            key: "matchParameter",
            value: function matchParameter(parameter) {
                var name = parameter.getName(), nameMatches = name === this.name, parameterMatches = nameMatches; ///
                return parameterMatches;
            }
        },
        {
            key: "matchMetavariableName",
            value: function matchMetavariableName(metavariableName) {
                var metavariableNameMatches = metavariableName === this.name;
                return metavariableNameMatches;
            }
        },
        {
            key: "isMetaTypeEqualTo",
            value: function isMetaTypeEqualTo(metaType) {
                return this.metaType.isEqualTo(metaType);
            }
        },
        {
            key: "validate",
            value: function validate(context) {
                var validates;
                var metavariableString = this.string; ///
                context.trace("Validating the '".concat(metavariableString, "' metavariable..."));
                var metavariable = this, metavariablePresent = context.isMetavariablePresent(metavariable);
                validates = metavariablePresent; ///
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
                var metavariableString = this.string, metaTypeString = metaType.getString();
                context.trace("Validating the '".concat(metavariableString, "' metavariable given the '").concat(metaTypeString, "' meta-type..."));
                var metavariable = this; ///
                metavariable = context.findMetavariable(metavariable);
                if (metavariable !== null) {
                    var metavariableMetaTypeEqualToMetaType = metavariable.isMetaTypeEqualTo(metaType);
                    validatesGivenMetaType = metavariableMetaTypeEqualToMetaType; ///
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
                var frameString = frame.getString(), metavariableString = this.string; ///
                specificContext.trace("Unifying the '".concat(frameString, "' frame with the '").concat(metavariableString, "' metavariable..."));
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
                        var FrameSubstitution = _elements.default.FrameSubstitution, context = specificContext, metavariable1 = this, frameSubstitution = FrameSubstitution.fromFrameAndMetavariable(frame, metavariable1, context), substitution1 = frameSubstitution; ///
                        substitutions.addSubstitution(substitution1, context);
                        frameUnifies = true;
                    }
                }
                if (frameUnifies) {
                    specificContext.debug("...unified the '".concat(frameString, "' frame with the '").concat(metavariableString, "' metavariable."));
                }
                return frameUnifies;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitution, substitutions, generalContext, specificContext) {
                var statementUnifies = false;
                var statementString = statement.getString(), metavariableString = this.string, substitutionString = substitution !== null ? substitution.getString() : _constants.EMPTY_STRING;
                specificContext.trace("Unifying the '".concat(statementString, "' statement with the '").concat(metavariableString).concat(substitutionString, "' metavariable..."));
                var statementMetavariableUnifies = this.unifyStatementMetavariable(statement, substitutions, generalContext, specificContext);
                if (statementMetavariableUnifies) {
                    statementUnifies = true;
                } else {
                    var context = specificContext, metavariable = this, substitutionPresent = substitutions.isSubstitutionPresentByMetavariableAndSubstitution(metavariable, substitution);
                    if (substitutionPresent) {
                        substitution = substitutions.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution); ///
                        var substitutionStatementEqualToStatement = substitution.isStatementEqualToStatement(statement, context);
                        if (substitutionStatementEqualToStatement) {
                            statementUnifies = true;
                        }
                    } else {
                        var StatementSubstitution = _elements.default.StatementSubstitution, metavariable1 = this, statementSubstitution = StatementSubstitution.fromStatementMetavariableAndSubstitution(statement, metavariable1, substitution, context);
                        substitution = statementSubstitution; ///
                        substitutions.addSubstitution(substitution, context);
                        statementUnifies = true;
                    }
                }
                if (statementUnifies) {
                    specificContext.debug("...unified the '".concat(statementString, "' statement with the '").concat(metavariableString).concat(substitutionString, "' metavariable."));
                }
                return statementUnifies;
            }
        },
        {
            key: "unifyReference",
            value: function unifyReference(reference, substitutions, generalContext, specificContext) {
                var referenceUnifies = false;
                var referenceString = reference.getString(), metavariableString = this.string; ///
                specificContext.trace("Unifying the '".concat(referenceString, "' reference with the '").concat(metavariableString, "' metavariable..."));
                var referenceMetavariableUnifies = this.unifyReferenceMetavariable(reference, substitutions, generalContext, specificContext);
                if (referenceMetavariableUnifies) {
                    referenceUnifies = true;
                } else {
                    var context = specificContext, metavariable = this, simpleSubstitutionPresent = substitutions.isSimpleSubstitutionPresentByMetavariable(metavariable);
                    if (simpleSubstitutionPresent) {
                        var simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariable(metavariable), substitution = simpleSubstitution, substitutionReferenceEqualToReference = substitution.isReferenceEqualToReference(reference, context);
                        if (substitutionReferenceEqualToReference) {
                            referenceUnifies = true;
                        }
                    } else {
                        var ReferenceSubstitution = _elements.default.ReferenceSubstitution, metavariable1 = this, referenceSubstitution = ReferenceSubstitution.fromReferenceAndMetavariable(reference, metavariable1, context), substitution1 = referenceSubstitution; ///
                        substitutions.addSubstitution(substitution1, context);
                        referenceUnifies = true;
                    }
                }
                if (referenceUnifies) {
                    specificContext.debug("...unified the '".concat(referenceString, "' reference with the '").concat(metavariableString, "' metavariable."));
                }
                return referenceUnifies;
            }
        },
        {
            key: "unifyMetavariable",
            value: function unifyMetavariable(metavariable, context) {
                var metavariableUnifies;
                var generalContext = context, specificContext = context, generalMetavariable = this, specificMetavariable = metavariable, generalMetavariableString = generalMetavariable.getString(), specificMetavariableString = specificMetavariable.getString();
                specificContext.trace("Unifying the '".concat(specificMetavariableString, "' metavariable with the '").concat(generalMetavariableString, "' metavariable..."));
                metavariableUnifies = (0, _unify.unifyMetavariable)(generalMetavariable, specificMetavariable, generalContext, specificContext);
                if (metavariableUnifies) {
                    specificContext.debug("...unified the '".concat(specificMetavariableString, "' metavariable with the '").concat(generalMetavariableString, "' metavariable."));
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
                    var metavariable = this, metavariableString = this.string, frameMetavariableEqualToMetvariable = frame.isMetavariableEqualToMetavariable(metavariable, context);
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
                    var metavariable = this, metavariableString = this.string, statementMetavariableEqualToMetvariable = statement.isMetavariableEqualToMetavariable(metavariable, context);
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
                    var metavariable = this, metavariableString = this.string, referenceMetavariableEqualToMetvariable = reference.isMetavariableEqualToMetavariable(metavariable);
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
                var metaTypeJSON = (0, _json.metaTypeToMetaTypeJSON)(this.metaType), typeJSON = (0, _json.typeToTypeJSON)(this.type), type = typeJSON, metaType = metaTypeJSON, string = this.string, json = {
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
                var string = json.string, metavariableNode = (0, _instantiate.instantiateMetavariable)(string, context), metavariableName = metavariableNode.getMetavariableName(), name = metavariableName, node = metavariableNode, type = (0, _json.typeFromJSON)(json, context), metaType = (0, _json.metaTypeFromJSON)(json, context), metavariable = new Metavariable(context, string, node, name, type, metaType);
                return metavariable;
            }
        }
    ]);
    return Metavariable;
}(_wrap_native_super(_element.default)), _define_property(_Metavariable, "name", "Metavariable"), _Metavariable));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZU1ldGF2YXJpYWJsZSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyBtZXRhVHlwZUZyb21KU09OLCBtZXRhVHlwZVRvTWV0YVR5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyB1bmlmeU1ldGF2YXJpYWJsZSwgdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGF2YXJpYWJsZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUsIG1ldGFUeXBlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcbiAgICBcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVR5cGU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgc2V0TWV0YVR5cGUobWV0YVR5cGUpIHtcbiAgICB0aGlzLm1ldGFUeXBlID0gbWV0YVR5cGU7XG4gIH1cblxuICBtYXRjaFBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCBuYW1lID0gcGFyYW1ldGVyLmdldE5hbWUoKSxcbiAgICAgICAgICBuYW1lTWF0Y2hlcyA9IChuYW1lID09PSB0aGlzLm5hbWUpLFxuICAgICAgICAgIHBhcmFtZXRlck1hdGNoZXMgPSBuYW1lTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gcGFyYW1ldGVyTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSAobWV0YXZhcmlhYmxlTmFtZSA9PT0gdGhpcy5uYW1lKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIGlzTWV0YVR5cGVFcXVhbFRvKG1ldGFUeXBlKSB7IHJldHVybiB0aGlzLm1ldGFUeXBlLmlzRXF1YWxUbyhtZXRhVHlwZSk7IH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcztcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSk7XG5cbiAgICB2YWxpZGF0ZXMgPSBtZXRhdmFyaWFibGVQcmVzZW50OyAvLy9cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhO2lkYXRlZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUdpdmVuTWV0YVR5cGUobWV0YVR5cGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGdpdmVuIHRoZSAnJHttZXRhVHlwZVN0cmluZ30nIG1ldGEtdHlwZS4uLmApO1xuXG4gICAgbGV0IG1ldGF2YXJpYWJsZSA9IHRoaXM7ICAvLy9cblxuICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvTWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuaXNNZXRhVHlwZUVxdWFsVG8obWV0YVR5cGUpO1xuXG4gICAgICB2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlID0gbWV0YXZhcmlhYmxlTWV0YVR5cGVFcXVhbFRvTWV0YVR5cGU7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzR2l2ZW5NZXRhVHlwZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgZ2l2ZW4gdGhlICcke21ldGFUeXBlU3RyaW5nfScgbWV0YS10eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlO1xuICB9XG5cbiAgdW5pZnlGcmFtZShmcmFtZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlGcmFtZU1ldGF2YXJpYWJsZShmcmFtZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBmcmFtZVVuaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQgPSBzdWJzdGl0dXRpb25zLmlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25GcmFtZUVxdWFsVG9GcmFtZSA9IHN1YnN0aXR1dGlvbi5pc0ZyYW1lRXF1YWxUb0ZyYW1lKGZyYW1lKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uRnJhbWVFcXVhbFRvRnJhbWUpIHtcbiAgICAgICAgICBmcmFtZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IEZyYW1lU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gRnJhbWVTdWJzdGl0dXRpb24uZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBmcmFtZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgZnJhbWVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICBzcGVjaWZpY0NvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gc3Vic3RpdHV0aW9ucy5pc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTsgLy8vXG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHN1YnN0aXR1dGlvbi5pc1N0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uU3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCkge1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB7IFN0YXRlbWVudFN1YnN0aXR1dGlvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHRoaXMsXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudFN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgc3BlY2lmaWNDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlSZWZlcmVuY2VNZXRhdmFyaWFibGUocmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICByZWZlcmVuY2VVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50ID0gc3Vic3RpdHV0aW9ucy5pc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudCkge1xuICAgICAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLCAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvblJlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UgPSBzdWJzdGl0dXRpb24uaXNSZWZlcmVuY2VFcXVhbFRvUmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvblJlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UpIHtcbiAgICAgICAgICByZWZlcmVuY2VVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBSZWZlcmVuY2VTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSB0aGlzLFxuICAgICAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBSZWZlcmVuY2VTdWJzdGl0dXRpb24uZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHJlZmVyZW5jZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgcmVmZXJlbmNlVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZVVuaWZpZXMpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZVN0cmluZyA9IGdlbmVyYWxNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmcgPSBzcGVjaWZpY01ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke2dlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB1bmlmeU1ldGF2YXJpYWJsZShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgc3BlY2lmaWNDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlGcmFtZU1ldGF2YXJpYWJsZShmcmFtZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVFcXVhbFRvTWV0dmFyaWFibGUgPSBmcmFtZS5pc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlRXF1YWxUb01ldHZhcmlhYmxlKSB7XG4gICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmcmFtZVNpbmd1bGFyID0gZnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgICAgIGlmIChmcmFtZVNpbmd1bGFyKSB7XG4gICAgICAgICAgY29uc3QgZnJhbWVNZXRhdmFyaWFibGVOYW1lID0gZnJhbWUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKGZyYW1lTWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVTdHJpbmcgPSBmcmFtZU1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSBmcmFtZSdzICcke2ZyYW1lTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgICAgICAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gZnJhbWVNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAvLy9cblxuICAgICAgICAgIGlmIChmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlIGZyYW1lJ3MgJyR7ZnJhbWVNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZUVxdWFsVG9NZXR2YXJpYWJsZSA9IHN0YXRlbWVudC5pc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZUVxdWFsVG9NZXR2YXJpYWJsZSkge1xuICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFNpbmd1bGFyID0gc3RhdGVtZW50LmlzU2luZ3VsYXIoKTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50U2luZ3VsYXIpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lID0gc3RhdGVtZW50LmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUoc3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlU3RyaW5nID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlIHN0YXRlbWVudCdzICR7c3RhdGVtZW50TWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgICAgICAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7IC8vL1xuXG4gICAgICAgICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlIHN0YXRlbWVudCdzICcke3N0YXRlbWVudE1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVJlZmVyZW5jZU1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPSBnZW5lcmFsQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dEZpbGVQYXRoID0gc3BlY2lmaWNDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICBpZiAoZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9PT0gc3BlY2lmaWNDb250ZXh0RmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZUVxdWFsVG9NZXR2YXJpYWJsZSA9IHJlZmVyZW5jZS5pc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgaWYgKHJlZmVyZW5jZU1ldGF2YXJpYWJsZUVxdWFsVG9NZXR2YXJpYWJsZSkge1xuICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZU1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlU3RyaW5nID0gcmVmZXJlbmNlTWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSByZWZlcmVuY2UncyAke3JlZmVyZW5jZU1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgICAgICBjb25zdCBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlTWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTsgLy8vXG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSByZWZlcmVuY2UncyAnJHtyZWZlcmVuY2VNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWV0YVR5cGVKU09OID0gbWV0YVR5cGVUb01ldGFUeXBlSlNPTih0aGlzLm1ldGFUeXBlKSxcbiAgICAgICAgICB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBtZXRhVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJNZXRhdmFyaWFibGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBpbnN0YW50aWF0ZU1ldGF2YXJpYWJsZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbmV3IE1ldGF2YXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUsIG1ldGFUeXBlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk1ldGF2YXJpYWJsZSIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibmFtZSIsInR5cGUiLCJtZXRhVHlwZSIsImdldE5hbWUiLCJnZXRUeXBlIiwiZ2V0TWV0YVR5cGUiLCJzZXRUeXBlIiwic2V0TWV0YVR5cGUiLCJtYXRjaFBhcmFtZXRlciIsInBhcmFtZXRlciIsIm5hbWVNYXRjaGVzIiwicGFyYW1ldGVyTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsImlzTWV0YVR5cGVFcXVhbFRvIiwiaXNFcXVhbFRvIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJkZWJ1ZyIsInZhbGlkYXRlR2l2ZW5NZXRhVHlwZSIsInZhbGlkYXRlc0dpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZVN0cmluZyIsImdldFN0cmluZyIsImZpbmRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9NZXRhVHlwZSIsInVuaWZ5RnJhbWUiLCJmcmFtZSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImZyYW1lVW5pZmllcyIsImZyYW1lU3RyaW5nIiwiZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlGcmFtZU1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkZyYW1lRXF1YWxUb0ZyYW1lIiwiaXNGcmFtZUVxdWFsVG9GcmFtZSIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiZWxlbWVudHMiLCJmcmFtZVN1YnN0aXR1dGlvbiIsImZyb21GcmFtZUFuZE1ldGF2YXJpYWJsZSIsImFkZFN1YnN0aXR1dGlvbiIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllcyIsInN0YXRlbWVudFN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsIkVNUFRZX1NUUklORyIsInN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudE1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc1N0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwidW5pZnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VVbmlmaWVzIiwicmVmZXJlbmNlU3RyaW5nIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSIsImlzUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsImZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUiLCJ1bmlmeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXMiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nIiwic3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmciLCJnZW5lcmFsQ29udGV4dEZpbGVQYXRoIiwiZ2V0RmlsZVBhdGgiLCJzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCIsImZyYW1lTWV0YXZhcmlhYmxlRXF1YWxUb01ldHZhcmlhYmxlIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiZnJhbWVTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJmcmFtZU1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwiZnJhbWVNZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwiZnJhbWVNZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZUVxdWFsVG9NZXR2YXJpYWJsZSIsInN0YXRlbWVudFNpbmd1bGFyIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZVN0cmluZyIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZUVxdWFsVG9NZXR2YXJpYWJsZSIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZVN0cmluZyIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwibWV0YXZhcmlhYmxlTm9kZSIsImluc3RhbnRpYXRlTWV0YXZhcmlhYmxlIiwidHlwZUZyb21KU09OIiwibWV0YVR5cGVGcm9tSlNPTiIsIkVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7OzhEQVZvQjtnRUFDQzt5QkFHUTsyQkFDVztvQkFDSztxQkFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVsRSxXQUFlQSxJQUFBQSxnQkFBTSxpQ0FBQzs7YUFBTUMsYUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFFBQVE7Z0NBRDdCTjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxJQUFJLEdBQUdBO1FBQ1osTUFBS0MsSUFBSSxHQUFHQTtRQUNaLE1BQUtDLFFBQVEsR0FBR0E7Ozs7O1lBR2xCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUwsSUFBSTtnQkFDVixJQUFJLENBQUNBLElBQUksR0FBR0E7WUFDZDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZTCxRQUFR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