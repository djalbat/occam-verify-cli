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
var _necessary = require("necessary");
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
var _topLevelAssertion = /*#__PURE__*/ _interop_require_wildcard(require("./topLevelAssertion"));
var _query = require("../utilities/query");
var _constants = require("../constants");
var _dom = require("../dom");
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
var _Axiom;
var match = _necessary.arrayUtilities.match;
var firstPrimaryKeywordTerminalNodeQuery = (0, _query.nodeQuery)("/axiom/@primary-keyword[0]");
var _default = (0, _dom.domAssigned)((_Axiom = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(Axiom, TopLevelAssertion);
    function Axiom(fileContext, string, labels, suppositions, deduction, proof, satisfying) {
        _class_call_check(this, Axiom);
        var _this;
        _this = _call_super(this, Axiom, [
            fileContext,
            string,
            labels,
            suppositions,
            deduction,
            proof
        ]);
        _this.satisfying = satisfying;
        return _this;
    }
    _create_class(Axiom, [
        {
            key: "isSatisfying",
            value: function isSatisfying() {
                return this.satisfying;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified;
                var axiom = this, axiomString = axiom.getString(), fileContext = this.getFileContext();
                fileContext.trace("Verifying the '".concat(axiomString, "' axiom..."));
                verified = _get(_get_prototype_of(Axiom.prototype), "verify", this).call(this);
                if (verified) {
                    var axiom1 = this; ///
                    fileContext.addAxiom(axiom1);
                    fileContext.debug("...verified the '".concat(axiomString, "' axiom."));
                }
                return verified;
            }
        },
        {
            key: "unifyAxiomLemmaTheoremConjecture",
            value: function unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, context) {
                var axiomLemmaTheoremConjectureUnified = false;
                var axiomString = this.getString(), axiomLemmaTheoremConjectureString = axiomLemmaTheoremConjecture.getString();
                context.trace("Unifying the '".concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture against the '").concat(axiomString, "' axiom..."));
                var fileContext = this.getFileContext(), substitutions = _substitutions.default.fromNothing(), generalContext = fileContext, specificContext = context; ///
                var suppositions;
                suppositions = this.getSuppositions();
                var generalSuppositions = suppositions; ///
                suppositions = axiomLemmaTheoremConjecture.getSuppositions();
                var specificSuppositions = suppositions, suppositionsMatch = match(generalSuppositions, specificSuppositions, function(generalSupposition, specificSupposition) {
                    var statement = specificSupposition.getStatement(), statementUnified = generalSupposition.unifyStatement(statement, substitutions, generalContext, specificContext);
                    if (statementUnified) {
                        return true;
                    }
                });
                if (suppositionsMatch) {
                    var deduction;
                    deduction = this.getDeduction();
                    var generalDeduction = deduction; ///
                    deduction = axiomLemmaTheoremConjecture.getDeduction();
                    var specificDeduction = deduction, statement = specificDeduction.getStatement(), statementUnified = generalDeduction.unifyStatement(statement, substitutions, generalContext, specificContext);
                    if (statementUnified) {
                        axiomLemmaTheoremConjectureUnified = true;
                    }
                }
                if (axiomLemmaTheoremConjectureUnified) {
                    context.debug("...unified the '".concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture against the '").concat(axiomString, "' axiom."));
                }
                return axiomLemmaTheoremConjectureUnified;
            }
        },
        {
            key: "unifyStatementAndProofStepSubproofs",
            value: function unifyStatementAndProofStepSubproofs(statement, proofStepSubproofs, substitutions, context) {
                var statementAndProofStepSubproofsUnified;
                statementAndProofStepSubproofsUnified = _get(_get_prototype_of(Axiom.prototype), "unifyStatementAndProofStepSubproofs", this).call(this, statement, proofStepSubproofs, substitutions, context);
                // if (statementAndProofStepSubproofsUnified) {
                //   if (this.satisfying) {
                //     debugger
                //   }
                // }
                return statementAndProofStepSubproofsUnified;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var labels = (0, _json.labelsFromJSON)(json, fileContext), suppositions = (0, _json.suppositionsFromJSON)(json, fileContext), deduction = (0, _json.deductionFromJSON)(json, fileContext), proof = null, satisfying = (0, _json.satisfyingFromJSON)(json, fileContext), string = (0, _topLevelAssertion.stringFromLabelsAndDeduction)(labels, deduction), topLevelAssertion = new Axiom(fileContext, string, labels, suppositions, deduction, proof, satisfying);
                return topLevelAssertion;
            }
        },
        {
            key: "fromAxiomNode",
            value: function fromAxiomNode(axiomNode, fileContext) {
                var node = axiomNode, labels = (0, _topLevelAssertion.labelsFromNode)(node, fileContext), suppositions = (0, _topLevelAssertion.suppositionsFromNode)(node, fileContext), deduction = (0, _topLevelAssertion.deductionFromNode)(node, fileContext), proof = (0, _topLevelAssertion.proofFromNode)(node, fileContext), satisfying = satisfyingFromNode(node, fileContext), string = (0, _topLevelAssertion.stringFromLabelsAndDeduction)(labels, deduction), topLevelAssertion = new Axiom(fileContext, string, labels, suppositions, deduction, proof, satisfying);
                return topLevelAssertion;
            }
        }
    ]);
    return Axiom;
}(_topLevelAssertion.default), _define_property(_Axiom, "name", "Axiom"), _Axiom));
function satisfyingFromNode(node, fileContext) {
    var firstPrimaryKeywordTerminalNode = firstPrimaryKeywordTerminalNodeQuery(node), content = firstPrimaryKeywordTerminalNode.getContent(), contentSatisfying = content === _constants.SATISFYING, satisfying = contentSatisfying; ///
    return satisfying;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYXhpb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uICBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBTQVRJU0ZZSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBsYWJlbHNGcm9tSlNPTiwgZGVkdWN0aW9uRnJvbUpTT04sIHNhdGlzZnlpbmdGcm9tSlNPTiwgc3VwcG9zaXRpb25zRnJvbUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHByb29mRnJvbU5vZGUsIGxhYmVsc0Zyb21Ob2RlLCBkZWR1Y3Rpb25Gcm9tTm9kZSwgc3VwcG9zaXRpb25zRnJvbU5vZGUsIHN0cmluZ0Zyb21MYWJlbHNBbmREZWR1Y3Rpb24gfSBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgZmlyc3RQcmltYXJ5S2V5d29yZFRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2F4aW9tL0BwcmltYXJ5LWtleXdvcmRbMF1cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEF4aW9tIGV4dGVuZHMgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2F0aXNmeWluZykge1xuICAgIHN1cGVyKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mKTtcblxuICAgIHRoaXMuc2F0aXNmeWluZyA9IHNhdGlzZnlpbmc7XG4gIH1cblxuICBpc1NhdGlzZnlpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F0aXNmeWluZztcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBheGlvbSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGF4aW9tU3RyaW5nID0gYXhpb20uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSB0aGlzLmdldEZpbGVDb250ZXh0KCk7XG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICB2ZXJpZmllZCA9IHN1cGVyLnZlcmlmeSgpO1xuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBheGlvbSA9IHRoaXM7IC8vL1xuXG4gICAgICBmaWxlQ29udGV4dC5hZGRBeGlvbShheGlvbSk7XG5cbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUsIGNvbnRleHQpIHtcbiAgICBsZXQgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZSBhZ2FpbnN0IHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXMuZ2V0RmlsZUNvbnRleHQoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGxldCBzdXBwb3NpdGlvbnM7XG5cbiAgICBzdXBwb3NpdGlvbnMgPSB0aGlzLmdldFN1cHBvc2l0aW9ucygpO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uczsgLy8vXG5cbiAgICBzdXBwb3NpdGlvbnMgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZ2V0U3VwcG9zaXRpb25zKCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY1N1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucywgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uc01hdGNoID0gbWF0Y2goZ2VuZXJhbFN1cHBvc2l0aW9ucywgc3BlY2lmaWNTdXBwb3NpdGlvbnMsIChnZW5lcmFsU3VwcG9zaXRpb24sIHNwZWNpZmljU3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gZ2VuZXJhbFN1cHBvc2l0aW9uLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc01hdGNoKSB7XG4gICAgICBsZXQgZGVkdWN0aW9uO1xuXG4gICAgICBkZWR1Y3Rpb24gPSB0aGlzLmdldERlZHVjdGlvbigpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsRGVkdWN0aW9uID0gZGVkdWN0aW9uOyAvLy9cblxuICAgICAgZGVkdWN0aW9uID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmdldERlZHVjdGlvbigpO1xuXG4gICAgICBjb25zdCBzcGVjaWZpY0RlZHVjdGlvbiA9IGRlZHVjdGlvbixcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHNwZWNpZmljRGVkdWN0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGdlbmVyYWxEZWR1Y3Rpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlIGFnYWluc3QgdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudEFuZFByb29mU3RlcFN1YnByb29mcyhzdGF0ZW1lbnQsIHByb29mU3RlcFN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBTdWJwcm9vZnNVbmlmaWVkO1xuXG4gICAgc3RhdGVtZW50QW5kUHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZCA9IHN1cGVyLnVuaWZ5U3RhdGVtZW50QW5kUHJvb2ZTdGVwU3VicHJvb2ZzKHN0YXRlbWVudCwgcHJvb2ZTdGVwU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIC8vIGlmIChzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBTdWJwcm9vZnNVbmlmaWVkKSB7XG4gICAgLy8gICBpZiAodGhpcy5zYXRpc2Z5aW5nKSB7XG4gICAgLy8gICAgIGRlYnVnZ2VyXG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEFuZFByb29mU3RlcFN1YnByb29mc1VuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXhpb21cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgc2F0aXNmeWluZyA9IHNhdGlzZnlpbmdGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc0FuZERlZHVjdGlvbihsYWJlbHMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBuZXcgQXhpb20oZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNhdGlzZnlpbmcpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBheGlvbU5vZGUsIC8vL1xuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb29mID0gcHJvb2ZGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc2F0aXNmeWluZyA9IHNhdGlzZnlpbmdGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc0FuZERlZHVjdGlvbihsYWJlbHMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBuZXcgQXhpb20oZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNhdGlzZnlpbmcpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc2F0aXNmeWluZ0Zyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IGZpcnN0UHJpbWFyeUtleXdvcmRUZXJtaW5hbE5vZGUgPSBmaXJzdFByaW1hcnlLZXl3b3JkVGVybWluYWxOb2RlUXVlcnkobm9kZSksXG4gICAgICAgIGNvbnRlbnQgPSBmaXJzdFByaW1hcnlLZXl3b3JkVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgY29udGVudFNhdGlzZnlpbmcgPSAoY29udGVudCA9PT0gU0FUSVNGWUlORyksXG4gICAgICAgIHNhdGlzZnlpbmcgPSBjb250ZW50U2F0aXNmeWluZzsgLy8vXG5cbiAgcmV0dXJuIHNhdGlzZnlpbmc7XG59XG5cbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3RQcmltYXJ5S2V5d29yZFRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJBeGlvbSIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwibGFiZWxzIiwic3VwcG9zaXRpb25zIiwiZGVkdWN0aW9uIiwicHJvb2YiLCJzYXRpc2Z5aW5nIiwiaXNTYXRpc2Z5aW5nIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJheGlvbSIsImF4aW9tU3RyaW5nIiwiZ2V0U3RyaW5nIiwiZ2V0RmlsZUNvbnRleHQiLCJ0cmFjZSIsImFkZEF4aW9tIiwiZGVidWciLCJ1bmlmeUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImNvbnRleHQiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nIiwic3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2VuZXJhbFN1cHBvc2l0aW9ucyIsInNwZWNpZmljU3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25zTWF0Y2giLCJnZW5lcmFsU3VwcG9zaXRpb24iLCJzcGVjaWZpY1N1cHBvc2l0aW9uIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllZCIsInVuaWZ5U3RhdGVtZW50IiwiZ2V0RGVkdWN0aW9uIiwiZ2VuZXJhbERlZHVjdGlvbiIsInNwZWNpZmljRGVkdWN0aW9uIiwidW5pZnlTdGF0ZW1lbnRBbmRQcm9vZlN0ZXBTdWJwcm9vZnMiLCJwcm9vZlN0ZXBTdWJwcm9vZnMiLCJzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBTdWJwcm9vZnNVbmlmaWVkIiwiZnJvbUpTT04iLCJqc29uIiwibGFiZWxzRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsImRlZHVjdGlvbkZyb21KU09OIiwic2F0aXNmeWluZ0Zyb21KU09OIiwic3RyaW5nRnJvbUxhYmVsc0FuZERlZHVjdGlvbiIsInRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbUF4aW9tTm9kZSIsImF4aW9tTm9kZSIsIm5vZGUiLCJsYWJlbHNGcm9tTm9kZSIsInN1cHBvc2l0aW9uc0Zyb21Ob2RlIiwiZGVkdWN0aW9uRnJvbU5vZGUiLCJwcm9vZkZyb21Ob2RlIiwic2F0aXNmeWluZ0Zyb21Ob2RlIiwiVG9wTGV2ZWxBc3NlcnRpb24iLCJuYW1lIiwiZmlyc3RQcmltYXJ5S2V5d29yZFRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFNhdGlzZnlpbmciLCJTQVRJU0ZZSU5HIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUFBOzs7eUJBZitCO29FQUVMO3lFQUNLO3FCQUVMO3lCQUNDO21CQUNDO29CQUNnRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUc1RixJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVSLElBQU1FLHVDQUF1Q0MsSUFB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