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
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _topLevelAssertion = /*#__PURE__*/ _interop_require_wildcard(require("./topLevelAssertion"));
var _json = require("./utilities/json");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var Metatheorem = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(Metatheorem, TopLevelAssertion);
    function Metatheorem() {
        _class_call_check(this, Metatheorem);
        return _call_super(this, Metatheorem, arguments);
    }
    _create_class(Metatheorem, [
        {
            key: "unifyReference",
            value: function unifyReference(reference, substitutions, context) {
                var referenceUnified;
                var metatheorem = this, referenceString = reference.getString(), metatheoremString = metatheorem.getString();
                context.trace("Unifying the '".concat(referenceString, "' reference with the '").concat(metatheoremString, "' metatheorem..."));
                var fileContext = this.getFileContext(), localContext = _local.default.fromFileContext(fileContext), generalContext = localContext, specificContext = context, labelUnified = this.labels.some(function(label) {
                    substitutions.clear();
                    var referenceUnified = reference.unifyLabel(label, substitutions, generalContext, specificContext);
                    if (referenceUnified) {
                        return true;
                    }
                });
                referenceUnified = labelUnified; ///
                if (referenceUnified) {
                    context.debug("...unified the '".concat(referenceString, "' reference with the '").concat(metatheoremString, "' metatheorem."));
                }
                return referenceUnified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, context) {
                var statementUnified;
                var metatheorem = this, statementString = statement.getString(), metatheoremString = metatheorem.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(metatheoremString, "' metatheorem..."));
                var suppositions = this.getSuppositions(), suppositionsLength = suppositions.length;
                if (suppositionsLength === 0) {
                    var fileContext = this.getFileContext(), localContext = _local.default.fromFileContext(fileContext), generalContext = localContext, specificContext = context, statementUnifiedWithConsequent = this.unifyStatementWithConsequent(statement, substitutions, generalContext, specificContext);
                    statementUnified = statementUnifiedWithConsequent; ///
                }
                if (statementUnified) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(metatheoremString, "' metatheorem."));
                }
                return statementUnified;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified;
                var metatheorem = this, fileContext = this.getFileContext(), metatheoremString = metatheorem.getString();
                fileContext.trace("Verifying the '".concat(metatheoremString, "' metatheorem..."));
                verified = _get(_get_prototype_of(Metatheorem.prototype), "verify", this).call(this);
                if (verified) {
                    var metaTheorem = this; ///
                    fileContext.addMetatheorem(metaTheorem);
                    fileContext.debug("...verified the '".concat(metatheoremString, "' metatheorem."));
                }
                return verified;
            }
        },
        {
            key: "verifyLabels",
            value: function verifyLabels() {
                var _this = this;
                var labelsVerified = this.labels.every(function(label) {
                    var nameOnly = false, labelVVerifiedWhenDeclared = label.verifyWhenDeclared(_this.fileContext, nameOnly);
                    if (labelVVerifiedWhenDeclared) {
                        return true;
                    }
                });
                return labelsVerified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var labelsJSON = (0, _json.labelsToLabelsJSON)(this.labels), consequentJSON = (0, _json.consequentToConsequentJSON)(this.consequent), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(this.suppositions), substitutionsJSON = (0, _json.substitutionsToSubstitutionsJSON)(this.substitutions), labels = labelsJSON, consequent = consequentJSON, suppositions = suppositionsJSON, substitutions = substitutionsJSON, json = {
                    labels: labels,
                    consequent: consequent,
                    suppositions: suppositions,
                    substitutions: substitutions
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var labels = (0, _json.labelsFromJSON)(json, fileContext), consequent = (0, _json.consequentFromJSON)(json, fileContext), suppositions = (0, _json.suppositionsFromJSON)(json, fileContext), substitutions = (0, _json.substitutionsFromJSON)(json, fileContext), string = (0, _topLevelAssertion.stringFromLabels)(labels), proof = null, topLevelAssertion = new Metatheorem(fileContext, string, labels, substitutions, suppositions, consequent, proof);
                return topLevelAssertion;
            }
        },
        {
            key: "fromMetatheoremNode",
            value: function fromMetatheoremNode(metatheoremNode, fileContext) {
                return _topLevelAssertion.default.fromNode(Metatheorem, metatheoremNode, fileContext);
            }
        }
    ]);
    return Metatheorem;
}(_topLevelAssertion.default);
Object.assign(_shim.default, {
    Metatheorem: Metatheorem
});
var _default = Metatheorem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgc3RyaW5nRnJvbUxhYmVscyB9IGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5pbXBvcnQgeyBsYWJlbHNGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIGNvbnNlcXVlbnRGcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgc3Vic3RpdHV0aW9uc0Zyb21KU09OLFxuICAgICAgICAgY29uc2VxdWVudFRvQ29uc2VxdWVudEpTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTiB9IGZyb20gXCIuL3V0aWxpdGllcy9qc29uXCI7XG5cbmNsYXNzIE1ldGF0aGVvcmVtIGV4dGVuZHMgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICB1bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVW5pZmllZDtcblxuICAgIGNvbnN0IG1ldGF0aGVvcmVtID0gdGhpcywgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF0aGVvcmVtU3RyaW5nID0gbWV0YXRoZW9yZW0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHdpdGggdGhlICcke21ldGF0aGVvcmVtU3RyaW5nfScgbWV0YXRoZW9yZW0uLi5gKTtcblxuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpcy5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgbGFiZWxVbmlmaWVkID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMuY2xlYXIoKTtcblxuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlVW5pZmllZCA9IHJlZmVyZW5jZS51bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHJlZmVyZW5jZVVuaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZWZlcmVuY2VVbmlmaWVkID0gbGFiZWxVbmlmaWVkOyAgLy8vXG5cbiAgICBpZiAocmVmZXJlbmNlVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHdpdGggdGhlICcke21ldGF0aGVvcmVtU3RyaW5nfScgbWV0YXRoZW9yZW0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IG1ldGF0aGVvcmVtID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIG1ldGF0aGVvcmVtU3RyaW5nID0gbWV0YXRoZW9yZW0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF0aGVvcmVtU3RyaW5nfScgbWV0YXRoZW9yZW0uLi5gKTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHRoaXMuZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zTGVuZ3RoID0gc3VwcG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpcy5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZFdpdGhDb25zZXF1ZW50ID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhDb25zZXF1ZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbnNlcXVlbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke21ldGF0aGVvcmVtU3RyaW5nfScgbWV0YXRoZW9yZW0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgbWV0YXRoZW9yZW0gPSB0aGlzLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IHRoaXMuZ2V0RmlsZUNvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbVN0cmluZyA9IG1ldGF0aGVvcmVtLmdldFN0cmluZygpO1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhdGhlb3JlbS4uLmApO1xuXG4gICAgdmVyaWZpZWQgPSBzdXBlci52ZXJpZnkoKTtcblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29uc3QgbWV0YVRoZW9yZW0gPSB0aGlzOyAvLy9cblxuICAgICAgZmlsZUNvbnRleHQuYWRkTWV0YXRoZW9yZW0obWV0YVRoZW9yZW0pO1xuXG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF0aGVvcmVtU3RyaW5nfScgbWV0YXRoZW9yZW0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWxzKCkge1xuICAgIGNvbnN0IGxhYmVsc1ZlcmlmaWVkID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lT25seSA9IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQgPSBsYWJlbC52ZXJpZnlXaGVuRGVjbGFyZWQodGhpcy5maWxlQ29udGV4dCwgbmFtZU9ubHkpO1xuXG4gICAgICBpZiAobGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWxzVmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsc1RvTGFiZWxzSlNPTih0aGlzLmxhYmVscyksXG4gICAgICAgICAgY29uc2VxdWVudEpTT04gPSBjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTih0aGlzLmNvbnNlcXVlbnQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04odGhpcy5zdXBwb3NpdGlvbnMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04odGhpcy5zdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRKU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBjb25zZXF1ZW50LFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb25zZXF1ZW50ID0gY29uc2VxdWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IG5ldyBNZXRhdGhlb3JlbShmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1YnN0aXR1dGlvbnMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdGhlb3JlbU5vZGUobWV0YXRoZW9yZW1Ob2RlLCBmaWxlQ29udGV4dCkgeyByZXR1cm4gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbU5vZGUoTWV0YXRoZW9yZW0sIG1ldGF0aGVvcmVtTm9kZSwgZmlsZUNvbnRleHQpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBNZXRhdGhlb3JlbVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE1ldGF0aGVvcmVtO1xuIl0sIm5hbWVzIjpbIk1ldGF0aGVvcmVtIiwidW5pZnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJzdWJzdGl0dXRpb25zIiwiY29udGV4dCIsInJlZmVyZW5jZVVuaWZpZWQiLCJtZXRhdGhlb3JlbSIsInJlZmVyZW5jZVN0cmluZyIsImdldFN0cmluZyIsIm1ldGF0aGVvcmVtU3RyaW5nIiwidHJhY2UiLCJmaWxlQ29udGV4dCIsImdldEZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJsYWJlbFVuaWZpZWQiLCJsYWJlbHMiLCJzb21lIiwibGFiZWwiLCJjbGVhciIsInVuaWZ5TGFiZWwiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFN0cmluZyIsInN1cHBvc2l0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN0YXRlbWVudFVuaWZpZWRXaXRoQ29uc2VxdWVudCIsInVuaWZ5U3RhdGVtZW50V2l0aENvbnNlcXVlbnQiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsIm1ldGFUaGVvcmVtIiwiYWRkTWV0YXRoZW9yZW0iLCJ2ZXJpZnlMYWJlbHMiLCJsYWJlbHNWZXJpZmllZCIsImV2ZXJ5IiwibmFtZU9ubHkiLCJsYWJlbFZWZXJpZmllZFdoZW5EZWNsYXJlZCIsInZlcmlmeVdoZW5EZWNsYXJlZCIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJjb25zZXF1ZW50SlNPTiIsImNvbnNlcXVlbnRUb0NvbnNlcXVlbnRKU09OIiwiY29uc2VxdWVudCIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJzdWJzdGl0dXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIiwianNvbiIsImZyb21KU09OIiwibGFiZWxzRnJvbUpTT04iLCJjb25zZXF1ZW50RnJvbUpTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsInN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsInN0cmluZyIsInN0cmluZ0Zyb21MYWJlbHMiLCJwcm9vZiIsInRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbU1ldGF0aGVvcmVtTm9kZSIsIm1ldGF0aGVvcmVtTm9kZSIsIlRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbU5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1SkE7OztlQUFBOzs7MkRBckppQjs0REFDUTt5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