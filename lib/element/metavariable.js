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
            key: "compareParameter",
            value: function compareParameter(parameter) {
                var name = parameter.getName(), nameEqualTo = this.isNameEqualTo(name), comparesToParameter = nameEqualTo; ///
                return comparesToParameter;
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
                        var context1 = specificContext, metavariable1 = this, substitution1 = (0, _context.synthetically)(function(context) {
                            var FrameSubstitution = _elements.default.FrameSubstitution, frameSubstitution = FrameSubstitution.fromFrameAndMetavariable(frame, metavariable1, context), substitution = frameSubstitution; ///
                            return substitution;
                        }, generalContext, specificContext);
                        substitutions.addSubstitution(substitution1, context1);
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
                        var StatementSubstitution = _elements.default.StatementSubstitution, metavariable1 = this, statementSubstitution = substitution !== null ? StatementSubstitution.fromStatementMetavariableAndSubstitution(statement, metavariable1, substitution, context1) : StatementSubstitution.fromStatementAndMetavariable(statement, metavariable1, context1);
                        substitution = statementSubstitution; ///
                        substitutions.addSubstitution(substitution, context1);
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
                        var context1 = specificContext, metavariable1 = this, substitution1 = (0, _context.synthetically)(function(context) {
                            var ReferenceSubstitution = _elements.default.ReferenceSubstitution, referenceSubstitution = ReferenceSubstitution.fromReferenceAndMetavariable(reference, metavariable1, context), substitution = referenceSubstitution; ///
                            return substitution;
                        }, generalContext, specificContext);
                        substitutions.addSubstitution(substitution1, context1);
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
                var generalMetavariable = this, specificMetavariable = metavariable, generalMetavariableString = generalMetavariable.getString(), specificMetavariableString = specificMetavariable.getString();
                context.trace("Unifying the '".concat(specificMetavariableString, "' metavariable with the '").concat(generalMetavariableString, "' metavariable..."));
                var generalContext = context, specificContext = context; ///
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
}(_wrap_native_super(_element.default)), _define_property(_Metavariable, "name", "Metavariable"), _Metavariable));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBzeW50aGV0aWNhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyB0eXBlVG9UeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgbWV0YVR5cGVUb01ldGFUeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgdW5pZnlNZXRhdmFyaWFibGUsIHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBNZXRhdmFyaWFibGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlLCBtZXRhVHlwZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG4gICAgXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubWV0YVR5cGUgPSBtZXRhVHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE1ldGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFUeXBlO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIHNldE1ldGFUeXBlKG1ldGFUeXBlKSB7XG4gICAgdGhpcy5tZXRhVHlwZSA9IG1ldGFUeXBlO1xuICB9XG5cbiAgaXNOYW1lRXF1YWxUbyhuYW1lKSB7XG4gICAgY29uc3QgbmFtZUVxdWFsVG8gPSAobmFtZSA9PT0gdGhpcy5uYW1lKTtcblxuICAgIHJldHVybiBuYW1lRXF1YWxUbztcbiAgfVxuXG4gIGlzTWV0YVR5cGVFcXVhbFRvKG1ldGFUeXBlKSB7IHJldHVybiB0aGlzLm1ldGFUeXBlLmlzRXF1YWxUbyhtZXRhVHlwZSk7IH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IG5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgIG5hbWVFcXVhbFRvID0gdGhpcy5pc05hbWVFcXVhbFRvKG5hbWUpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbWV0ZXIgPSBuYW1lRXF1YWxUbzsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbWV0ZXI7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZU1ldGF2YXJpYWJsZU5hbWUgPSAodGhpcy5uYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IG5hbWVNZXRhdmFyaWFibGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmE7aWRhdGVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlR2l2ZW5NZXRhVHlwZShtZXRhVHlwZSwgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuLi5gKTtcblxuICAgIGxldCBtZXRhdmFyaWFibGUgPSB0aGlzOyAgLy8vXG5cbiAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb01ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmlzTWV0YVR5cGVFcXVhbFRvKG1ldGFUeXBlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU1ldGFUeXBlRXF1YWxUb01ldGFUeXBlKSB7XG4gICAgICAgIHZhbGlkYXRlc0dpdmVuTWV0YVR5cGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNHaXZlbk1ldGFUeXBlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBnaXZlbiB0aGUgJyR7bWV0YVR5cGVTdHJpbmd9JyBtZXRhLXR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc0dpdmVuTWV0YVR5cGU7XG4gIH1cblxuICB1bmlmeUZyYW1lKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlGcmFtZU1ldGF2YXJpYWJsZShmcmFtZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBmcmFtZVVuaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQgPSBzdWJzdGl0dXRpb25zLmlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICBzdWJzdGl0dXRpb25GcmFtZUVxdWFsVG9GcmFtZSA9IHN1YnN0aXR1dGlvbi5pc0ZyYW1lRXF1YWxUb0ZyYW1lKGZyYW1lKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uRnJhbWVFcXVhbFRvRnJhbWUpIHtcbiAgICAgICAgICBmcmFtZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3ludGhldGljYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgRnJhbWVTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gRnJhbWVTdWJzdGl0dXRpb24uZnJvbUZyYW1lQW5kTWV0YXZhcmlhYmxlKGZyYW1lLCBtZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGZyYW1lU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICAgICAgICAgICAgICB9LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGZyYW1lVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30ke3N1YnN0aXR1dGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gc3Vic3RpdHV0aW9ucy5pc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKTsgLy8vXG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQ29tcGFyZXNUb1N0YXRlbWVudCA9IHN1YnN0aXR1dGlvbi5jb21wYXJlU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbkNvbXBhcmVzVG9TdGF0ZW1lbnQpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSB0aGlzLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGVtZW50U3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgY29udGV4dCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGVtZW50U3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JHtzdWJzdGl0dXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2Ugd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzID0gdGhpcy51bmlmeVJlZmVyZW5jZU1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQgPSBzdWJzdGl0dXRpb25zLmlzU2ltcGxlU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25QcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksIC8vL1xuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSA9IHN1YnN0aXR1dGlvbi5pc1JlZmVyZW5jZUVxdWFsVG9SZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSkge1xuICAgICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3ludGhldGljYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgUmVmZXJlbmNlU3Vic3RpdHV0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VTdWJzdGl0dXRpb24gPSBSZWZlcmVuY2VTdWJzdGl0dXRpb24uZnJvbVJlZmVyZW5jZUFuZE1ldGF2YXJpYWJsZShyZWZlcmVuY2UsIG1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gcmVmZXJlbmNlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICAgICAgICAgICAgICB9LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBzdWJzdGl0dXRpb25zLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2Ugd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXM7XG5cbiAgICBjb25zdCBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUsICAvLy9cbiAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZyA9IHNwZWNpZmljTWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke2dlbmVyYWxNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHVuaWZ5TWV0YXZhcmlhYmxlKGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY01ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHtnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlGcmFtZU1ldGF2YXJpYWJsZShmcmFtZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBmcmFtZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dEZpbGVQYXRoID0gZ2VuZXJhbENvbnRleHQuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCA9IHNwZWNpZmljQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgaWYgKGdlbmVyYWxDb250ZXh0RmlsZVBhdGggPT09IHNwZWNpZmljQ29udGV4dEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZUVxdWFsVG9NZXR2YXJpYWJsZSA9IGZyYW1lLmlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoZnJhbWVNZXRhdmFyaWFibGVFcXVhbFRvTWV0dmFyaWFibGUpIHtcbiAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZyYW1lU2luZ3VsYXIgPSBmcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgICAgaWYgKGZyYW1lU2luZ3VsYXIpIHtcbiAgICAgICAgICBjb25zdCBmcmFtZU1ldGF2YXJpYWJsZU5hbWUgPSBmcmFtZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUoZnJhbWVNZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgICBmcmFtZU1ldGF2YXJpYWJsZVN0cmluZyA9IGZyYW1lTWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlIGZyYW1lJ3MgJyR7ZnJhbWVNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICAgICAgICBjb25zdCBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBmcmFtZU1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzID0gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7IC8vL1xuXG4gICAgICAgICAgaWYgKGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgZnJhbWUncyAnJHtmcmFtZU1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lTWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50TWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlRXF1YWxUb01ldHZhcmlhYmxlID0gc3RhdGVtZW50LmlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlRXF1YWxUb01ldHZhcmlhYmxlKSB7XG4gICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50U2luZ3VsYXIgPSBzdGF0ZW1lbnQuaXNTaW5ndWxhcigpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRTaW5ndWxhcikge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5hbWUgPSBzdGF0ZW1lbnQuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShzdGF0ZW1lbnRNZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVTdHJpbmcgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgc3RhdGVtZW50J3MgJHtzdGF0ZW1lbnRNZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICAgICAgICBjb25zdCBnZW5lcmFsTWV0YXZhcmlhYmxlID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZVVuaWZpZXMgPSBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTsgLy8vXG5cbiAgICAgICAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgc3RhdGVtZW50J3MgJyR7c3RhdGVtZW50TWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlKHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VNZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHRGaWxlUGF0aCA9IGdlbmVyYWxDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0RmlsZVBhdGggPSBzcGVjaWZpY0NvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgIGlmIChnZW5lcmFsQ29udGV4dEZpbGVQYXRoID09PSBzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlRXF1YWxUb01ldHZhcmlhYmxlID0gcmVmZXJlbmNlLmlzTWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlTWV0YXZhcmlhYmxlRXF1YWxUb01ldHZhcmlhYmxlKSB7XG4gICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlTWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVTdHJpbmcgPSByZWZlcmVuY2VNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlIHJlZmVyZW5jZSdzICR7cmVmZXJlbmNlTWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgICAgIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGUgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSByZWZlcmVuY2VNZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyA9IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAvLy9cblxuICAgICAgICBpZiAocmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlIHJlZmVyZW5jZSdzICcke3JlZmVyZW5jZU1ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aXRoIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtZXRhVHlwZUpTT04gPSBtZXRhVHlwZVRvTWV0YVR5cGVKU09OKHRoaXMubWV0YVR5cGUpLFxuICAgICAgICAgIHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgbWV0YVR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTWV0YXZhcmlhYmxlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICAvLy9cbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTWV0YXZhcmlhYmxlIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwidHlwZSIsIm1ldGFUeXBlIiwiZ2V0TmFtZSIsImdldFR5cGUiLCJnZXRNZXRhVHlwZSIsInNldFR5cGUiLCJzZXRNZXRhVHlwZSIsImlzTmFtZUVxdWFsVG8iLCJuYW1lRXF1YWxUbyIsImlzTWV0YVR5cGVFcXVhbFRvIiwiaXNFcXVhbFRvIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJuYW1lTWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwidmFsaWRhdGUiLCJ2YWxpZGF0ZXMiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJkZWJ1ZyIsInZhbGlkYXRlR2l2ZW5NZXRhVHlwZSIsInZhbGlkYXRlc0dpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZVN0cmluZyIsImZpbmRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVNZXRhVHlwZUVxdWFsVG9NZXRhVHlwZSIsInVuaWZ5RnJhbWUiLCJmcmFtZSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImZyYW1lVW5pZmllcyIsImZyYW1lU3RyaW5nIiwiZnJhbWVNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlGcmFtZU1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1NpbXBsZVN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkZyYW1lRXF1YWxUb0ZyYW1lIiwiaXNGcmFtZUVxdWFsVG9GcmFtZSIsInN5bnRoZXRpY2FsbHkiLCJGcmFtZVN1YnN0aXR1dGlvbiIsImVsZW1lbnRzIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJmcm9tRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJhZGRTdWJzdGl0dXRpb24iLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJzdGF0ZW1lbnRTdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJFTVBUWV9TVFJJTkciLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnRNZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Db21wYXJlc1RvU3RhdGVtZW50IiwiY29tcGFyZVN0YXRlbWVudCIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwidW5pZnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VVbmlmaWVzIiwicmVmZXJlbmNlU3RyaW5nIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5UmVmZXJlbmNlTWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSIsImlzUmVmZXJlbmNlRXF1YWxUb1JlZmVyZW5jZSIsIlJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsInJlZmVyZW5jZVN1YnN0aXR1dGlvbiIsImZyb21SZWZlcmVuY2VBbmRNZXRhdmFyaWFibGUiLCJ1bmlmeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXMiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlU3RyaW5nIiwic3BlY2lmaWNNZXRhdmFyaWFibGVTdHJpbmciLCJnZW5lcmFsQ29udGV4dEZpbGVQYXRoIiwiZ2V0RmlsZVBhdGgiLCJzcGVjaWZpY0NvbnRleHRGaWxlUGF0aCIsImZyYW1lTWV0YXZhcmlhYmxlRXF1YWxUb01ldHZhcmlhYmxlIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiZnJhbWVTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJmcmFtZU1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwiZnJhbWVNZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwiZnJhbWVNZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSIsInVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZUVxdWFsVG9NZXR2YXJpYWJsZSIsInN0YXRlbWVudFNpbmd1bGFyIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTmFtZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZVN0cmluZyIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZUVxdWFsVG9NZXR2YXJpYWJsZSIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZVN0cmluZyIsInRvSlNPTiIsIm1ldGFUeXBlSlNPTiIsIm1ldGFUeXBlVG9NZXRhVHlwZUpTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwiRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7OERBVm9CO2dFQUNDO3lCQUdRO3VCQUNDO29CQUNDO3FCQUVtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWxFLFdBQWVBLElBQUFBLGdCQUFNLGlDQUFDOzthQUFNQyxhQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUTtnQ0FEN0JOOztnQkFFeEIs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