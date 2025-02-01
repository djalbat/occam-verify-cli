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
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var labels = this.getLabels(), deduction = this.getDeduction(), suppositions = this.getSuppositions();
                var labelsJSON = (0, _json.labelsToLabelsJSON)(labels), deductionJSON = (0, _json.deductionToDeductionJSON)(deduction), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(suppositions);
                labels = labelsJSON; ///
                deduction = deductionJSON; ///
                suppositions = suppositionsJSON; ///
                var satisfying = this.satisfying, json = {
                    labels: labels,
                    deduction: deduction,
                    suppositions: suppositions,
                    satisfying: satisfying
                };
                return json;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYXhpb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uICBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBTQVRJU0ZZSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBsYWJlbHNGcm9tSlNPTixcbiAgICAgICAgIGRlZHVjdGlvbkZyb21KU09OLFxuICAgICAgICAgc2F0aXNmeWluZ0Zyb21KU09OLFxuICAgICAgICAgbGFiZWxzVG9MYWJlbHNKU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zRnJvbUpTT04sXG4gICAgICAgICBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IHByb29mRnJvbU5vZGUsIGxhYmVsc0Zyb21Ob2RlLCBkZWR1Y3Rpb25Gcm9tTm9kZSwgc3VwcG9zaXRpb25zRnJvbU5vZGUsIHN0cmluZ0Zyb21MYWJlbHNBbmREZWR1Y3Rpb24gfSBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgZmlyc3RQcmltYXJ5S2V5d29yZFRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2F4aW9tL0BwcmltYXJ5LWtleXdvcmRbMF1cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEF4aW9tIGV4dGVuZHMgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2F0aXNmeWluZykge1xuICAgIHN1cGVyKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mKTtcblxuICAgIHRoaXMuc2F0aXNmeWluZyA9IHNhdGlzZnlpbmc7XG4gIH1cblxuICBpc1NhdGlzZnlpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F0aXNmeWluZztcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBheGlvbSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGF4aW9tU3RyaW5nID0gYXhpb20uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSB0aGlzLmdldEZpbGVDb250ZXh0KCk7XG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICB2ZXJpZmllZCA9IHN1cGVyLnZlcmlmeSgpO1xuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBheGlvbSA9IHRoaXM7IC8vL1xuXG4gICAgICBmaWxlQ29udGV4dC5hZGRBeGlvbShheGlvbSk7XG5cbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUsIGNvbnRleHQpIHtcbiAgICBsZXQgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZSBhZ2FpbnN0IHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXMuZ2V0RmlsZUNvbnRleHQoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGxldCBzdXBwb3NpdGlvbnM7XG5cbiAgICBzdXBwb3NpdGlvbnMgPSB0aGlzLmdldFN1cHBvc2l0aW9ucygpO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uczsgLy8vXG5cbiAgICBzdXBwb3NpdGlvbnMgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZ2V0U3VwcG9zaXRpb25zKCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY1N1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucywgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uc01hdGNoID0gbWF0Y2goZ2VuZXJhbFN1cHBvc2l0aW9ucywgc3BlY2lmaWNTdXBwb3NpdGlvbnMsIChnZW5lcmFsU3VwcG9zaXRpb24sIHNwZWNpZmljU3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gZ2VuZXJhbFN1cHBvc2l0aW9uLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc01hdGNoKSB7XG4gICAgICBsZXQgZGVkdWN0aW9uO1xuXG4gICAgICBkZWR1Y3Rpb24gPSB0aGlzLmdldERlZHVjdGlvbigpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsRGVkdWN0aW9uID0gZGVkdWN0aW9uOyAvLy9cblxuICAgICAgZGVkdWN0aW9uID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmdldERlZHVjdGlvbigpO1xuXG4gICAgICBjb25zdCBzcGVjaWZpY0RlZHVjdGlvbiA9IGRlZHVjdGlvbixcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHNwZWNpZmljRGVkdWN0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGdlbmVyYWxEZWR1Y3Rpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlIGFnYWluc3QgdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudEFuZFByb29mU3RlcFN1YnByb29mcyhzdGF0ZW1lbnQsIHByb29mU3RlcFN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBTdWJwcm9vZnNVbmlmaWVkO1xuXG4gICAgc3RhdGVtZW50QW5kUHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZCA9IHN1cGVyLnVuaWZ5U3RhdGVtZW50QW5kUHJvb2ZTdGVwU3VicHJvb2ZzKHN0YXRlbWVudCwgcHJvb2ZTdGVwU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIC8vIGlmIChzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBTdWJwcm9vZnNVbmlmaWVkKSB7XG4gICAgLy8gICBpZiAodGhpcy5zYXRpc2Z5aW5nKSB7XG4gICAgLy8gICAgIGRlYnVnZ2VyXG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEFuZFByb29mU3RlcFN1YnByb29mc1VuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXhpb21cIjtcblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgIGRlZHVjdGlvbiA9IHRoaXMuZ2V0RGVkdWN0aW9uKCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHRoaXMuZ2V0U3VwcG9zaXRpb25zKCk7XG5cbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKGxhYmVscyksXG4gICAgICAgICAgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTihkZWR1Y3Rpb24pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04oc3VwcG9zaXRpb25zKTtcblxuICAgIGxhYmVscyA9IGxhYmVsc0pTT047ICAvLy9cbiAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25KU09OOyAgLy8vXG4gICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTjsgIC8vL1xuXG4gICAgY29uc3Qgc2F0aXNmeWluZyA9IHRoaXMuc2F0aXNmeWluZyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgZGVkdWN0aW9uLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgc2F0aXNmeWluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBzYXRpc2Z5aW5nID0gc2F0aXNmeWluZ0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzQW5kRGVkdWN0aW9uKGxhYmVscywgZGVkdWN0aW9uKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IG5ldyBBeGlvbShmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2F0aXNmeWluZyk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IGF4aW9tTm9kZSwgLy8vXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzYXRpc2Z5aW5nID0gc2F0aXNmeWluZ0Zyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzQW5kRGVkdWN0aW9uKGxhYmVscywgZGVkdWN0aW9uKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IG5ldyBBeGlvbShmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2F0aXNmeWluZyk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzYXRpc2Z5aW5nRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgZmlyc3RQcmltYXJ5S2V5d29yZFRlcm1pbmFsTm9kZSA9IGZpcnN0UHJpbWFyeUtleXdvcmRUZXJtaW5hbE5vZGVRdWVyeShub2RlKSxcbiAgICAgICAgY29udGVudCA9IGZpcnN0UHJpbWFyeUtleXdvcmRUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBjb250ZW50U2F0aXNmeWluZyA9IChjb250ZW50ID09PSBTQVRJU0ZZSU5HKSxcbiAgICAgICAgc2F0aXNmeWluZyA9IGNvbnRlbnRTYXRpc2Z5aW5nOyAvLy9cblxuICByZXR1cm4gc2F0aXNmeWluZztcbn1cblxuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdFByaW1hcnlLZXl3b3JkVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkF4aW9tIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb24iLCJwcm9vZiIsInNhdGlzZnlpbmciLCJpc1NhdGlzZnlpbmciLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImF4aW9tIiwiYXhpb21TdHJpbmciLCJnZXRTdHJpbmciLCJnZXRGaWxlQ29udGV4dCIsInRyYWNlIiwiYWRkQXhpb20iLCJkZWJ1ZyIsInVuaWZ5QXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiY29udGV4dCIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmciLCJzdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZW5lcmFsU3VwcG9zaXRpb25zIiwic3BlY2lmaWNTdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbnNNYXRjaCIsImdlbmVyYWxTdXBwb3NpdGlvbiIsInNwZWNpZmljU3VwcG9zaXRpb24iLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJnZXREZWR1Y3Rpb24iLCJnZW5lcmFsRGVkdWN0aW9uIiwic3BlY2lmaWNEZWR1Y3Rpb24iLCJ1bmlmeVN0YXRlbWVudEFuZFByb29mU3RlcFN1YnByb29mcyIsInByb29mU3RlcFN1YnByb29mcyIsInN0YXRlbWVudEFuZFByb29mU3RlcFN1YnByb29mc1VuaWZpZWQiLCJ0b0pTT04iLCJnZXRMYWJlbHMiLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwiZGVkdWN0aW9uSlNPTiIsImRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsYWJlbHNGcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJzYXRpc2Z5aW5nRnJvbUpTT04iLCJzdHJpbmdGcm9tTGFiZWxzQW5kRGVkdWN0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJmcm9tQXhpb21Ob2RlIiwiYXhpb21Ob2RlIiwibm9kZSIsImxhYmVsc0Zyb21Ob2RlIiwic3VwcG9zaXRpb25zRnJvbU5vZGUiLCJkZWR1Y3Rpb25Gcm9tTm9kZSIsInByb29mRnJvbU5vZGUiLCJzYXRpc2Z5aW5nRnJvbU5vZGUiLCJUb3BMZXZlbEFzc2VydGlvbiIsIm5hbWUiLCJmaXJzdFByaW1hcnlLZXl3b3JkVGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50U2F0aXNmeWluZyIsIlNBVElTRllJTkciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVCQTs7O2VBQUE7Ozt5QkFyQitCO29FQUVMO3lFQUNLO3FCQUVMO3lCQUNDO21CQUNDO29CQU9tQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcvQyxJQUFNLEFBQUVBLFFBQVVD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