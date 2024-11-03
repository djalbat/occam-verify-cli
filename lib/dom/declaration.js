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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _query = require("../utilities/query");
var _brackets = require("../utilities/brackets");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var _Declaration;
var referenceNodeQuery = (0, _query.nodeQuery)("/declaration/reference"), statementNodeQuery = (0, _query.nodeQuery)("/declaration/statement");
var _default = (0, _dom.domAssigned)((_Declaration = /*#__PURE__*/ function() {
    function Declaration(string, reference, statement) {
        _class_call_check(this, Declaration);
        this.string = string;
        this.reference = reference;
        this.statement = statement;
    }
    _create_class(Declaration, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, context) {
                var statementUnified;
                var statementString = statement.getString(), declarationStatementString = this.statement.getString(); ///
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(declarationStatementString, "' statement..."));
                var statementNode = statement.getNode();
                statementNode = (0, _brackets.stripBracketsFromStatementNode)(statementNode); ///
                var statementNodeMatches = this.statement.matchStatementNode(statementNode);
                statementUnified = statementNodeMatches; ///
                if (statementUnified) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(declarationStatementString, "' statement."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifyMetavariable",
            value: function unifyMetavariable(metavariable, context) {
                var metavariableUnified;
                var referenceString = this.reference.getString(), metavariableString = metavariable.getString();
                context.trace("Unifying the '".concat(metavariableString, "' metavariable with the '").concat(referenceString, "' reference..."));
                var metavariableNode = metavariable.getNode(), metavariableNodeMatches = this.reference.matchMetavariableNode(metavariableNode);
                metavariableUnified = metavariableNodeMatches; ///
                if (metavariableUnified) {
                    context.debug("...unified the '".concat(metavariableString, "' metavariable with the '").concat(referenceString, "' reference."));
                }
                return metavariableUnified;
            }
        },
        {
            key: "unifySubstitution",
            value: function unifySubstitution(substitution, context) {
                var substitutionUnified;
                var declarationString = this.string, substitutionString = substitution.getString();
                context.trace("Unifying the '".concat(substitutionString, "' substitution with the '").concat(declarationString, "' declaration..."));
                var statement = substitution.getStatement(), metavariable = substitution.getMetavariable(), statementUnified = this.unifyStatement(statement, context), metavariableUnified = this.unifyMetavariable(metavariable, context);
                substitutionUnified = metavariableUnified && statementUnified;
                if (substitutionUnified) {
                    context.debug("...unified the '".concat(declarationString, "' substitution with the '").concat(substitutionString, "' declaration."));
                }
                return substitutionUnified;
            }
        },
        {
            key: "unifyMetaLemmaMetatheorem",
            value: function unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context) {
                var metaLemmaMetatheoremUnified = false;
                var declarationString = this.string, metalemmaMetatheoremString = metaLemmaMetatheorem.getString();
                context.trace("Unifying the '".concat(metalemmaMetatheoremString, "' meta-lemma or metatheorem with the '").concat(declarationString, "' declaration..."));
                var substitutions = Substitutions.fromNothing(), referenceUnified = metaLemmaMetatheorem.unifyReference(this.reference, substitutions, context);
                if (referenceUnified) {
                    var statementUnified = metaLemmaMetatheorem.unifyStatement(this.statement, substitutions, context);
                    if (statementUnified) {
                        metaLemmaMetatheoremUnified = true;
                    }
                }
                if (metaLemmaMetatheoremUnified) {
                    context.debug("...unified the '".concat(metalemmaMetatheoremString, "' meta-lemma or metatheorem with the '").concat(declarationString, "' declaration."));
                }
                return metaLemmaMetatheoremUnified;
            }
        },
        {
            key: "unifyAxiomLemmaTheoremConjecture",
            value: function unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, context) {
                var axiomLemmaTheoremConjectureUnified = false;
                var declarationString = this.string, axiomLemmaTheoremConjectureString = axiomLemmaTheoremConjecture.getString();
                context.trace("Unifying the '".concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture with the '").concat(declarationString, "' declaration..."));
                var referenceUnified = axiomLemmaTheoremConjecture.unifyReference(this.reference, context);
                if (referenceUnified) {
                    var statementUnified = axiomLemmaTheoremConjecture.unifyStatement(this.statement, context);
                    if (statementUnified) {
                        axiomLemmaTheoremConjectureUnified = true;
                    }
                }
                if (axiomLemmaTheoremConjectureUnified) {
                    context.debug("...unified the '".concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture with the '").concat(declarationString, "' declaration."));
                }
                return axiomLemmaTheoremConjectureUnified;
            }
        },
        {
            key: "verify",
            value: function verify(frame, assignments, stated, context) {
                var verified = false;
                var declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' declaration..."));
                var statementVerified = this.verifyStatement(this.statement, assignments, stated, context);
                if (statementVerified) {
                    var verifiedWhenStated = false, verifiedWhenDerived = false;
                    if (stated) {
                        verifiedWhenStated = this.verifyWhenStated(context);
                    } else {
                        verifiedWhenDerived = this.verifyWhenDerived(frame, context);
                    }
                    verified = verifiedWhenStated || verifiedWhenDerived;
                }
                if (verified) {
                    context.debug("...verified the '".concat(declarationString, "' declaration."));
                }
                return verified;
            }
        },
        {
            key: "verifyStatement",
            value: function verifyStatement(statement, assignments, stated, context) {
                stated = true; ///
                assignments = null; ///
                var statementVerified = statement.verify(assignments, stated, context);
                return statementVerified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(context) {
                var _this = this;
                var verifiedWhenStated;
                var declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' stated declaration..."));
                var referenceVerified = this.reference.verify(context);
                if (referenceVerified) {
                    verifiedWhenStated = true;
                } else {
                    var metaLemmas = context.findMetaLemmasByReference(this.reference), metatheorems = context.findMetatheoremsByReference(this.reference), metaLemmaMetatheorems = _to_consumable_array(metaLemmas).concat(_to_consumable_array(metatheorems)), metaLemmaMetatheoremUnified = metaLemmaMetatheorems.some(function(metaLemmaMetatheorem) {
                        var metaLemmaMetatheoremUnified = _this.unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context);
                        if (metaLemmaMetatheoremUnified) {
                            return true;
                        }
                    });
                    if (metaLemmaMetatheoremUnified) {
                        verifiedWhenStated = true;
                    } else {
                        var axiom = context.findAxiomByReference(this.reference), lemma = context.findLemmaByReference(this.reference), theorem = context.findTheoremByReference(this.reference), conjecture = context.findConjectureByReference(this.reference), axiomLemmaTheoremConjecture = axiom || lemma || theorem || conjecture;
                        if (axiomLemmaTheoremConjecture !== null) {
                            var axiomLemmaTheoremConjectureUnified = this.unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, context);
                            if (axiomLemmaTheoremConjectureUnified) {
                                verifiedWhenStated = true;
                            }
                        }
                    }
                }
                if (verifiedWhenStated) {
                    context.debug("...verified the '".concat(declarationString, "' stated declaration."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(frame, context) {
                var _this = this;
                var verifiedWhenDerived;
                var declarationString = this.string; ///
                context.trace("Verifying the '".concat(declarationString, "' derived declaration..."));
                var referenceVerified = this.reference.verify(context);
                if (referenceVerified) {
                    verifiedWhenDerived = true;
                } else {
                    var metaLemmas = context.findMetaLemmasByReference(this.reference), metatheorems = context.findMetatheoremsByReference(this.reference), metaLemmaMetatheorems = _to_consumable_array(metaLemmas).concat(_to_consumable_array(metatheorems)), metaLemmaMetatheoremUnified = metaLemmaMetatheorems.some(function(metaLemmaMetatheorem) {
                        var metaLemmaMetatheoremUnified = true;
                        if (metaLemmaMetatheoremUnified) {
                            metaLemmaMetatheoremUnified = frame.unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context);
                        }
                        if (metaLemmaMetatheoremUnified) {
                            metaLemmaMetatheoremUnified = _this.unifyMetaLemmaMetatheorem(metaLemmaMetatheorem, context);
                        }
                        if (metaLemmaMetatheoremUnified) {
                            return true;
                        }
                    });
                    if (metaLemmaMetatheoremUnified) {
                        verifiedWhenDerived = true;
                    } else {
                        var axiom = context.findAxiomByReference(this.reference), lemma = context.findLemmaByReference(this.reference), theorem = context.findTheoremByReference(this.reference), conjecture = context.findConjectureByReference(this.reference), axiomLemmaTheoremConjecture = axiom || lemma || theorem || conjecture;
                        if (axiomLemmaTheoremConjecture !== null) {
                            var axiomLemmaTheoremConjectureUnified = this.unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, context);
                            if (axiomLemmaTheoremConjectureUnified) {
                                verifiedWhenDerived = true;
                            }
                        }
                    }
                }
                if (verifiedWhenDerived) {
                    context.debug("...verified the '".concat(declarationString, "' derived declaration."));
                }
                return verifiedWhenDerived;
            }
        }
    ], [
        {
            key: "fromDeclarationNode",
            value: function fromDeclarationNode(declarationNode, context) {
                var declaration = null;
                if (declarationNode !== null) {
                    var Statement = _dom.default.Statement, referenceNode = referenceNodeQuery(declarationNode);
                    var statementNode = statementNodeQuery(declarationNode);
                    statementNode = (0, _brackets.stripBracketsFromStatementNode)(statementNode); ///
                    var Reference = _dom.default.Reference, reference = Reference.fromReferenceNode(referenceNode, context), statement = Statement.fromStatementNode(statementNode, context), node = declarationNode, string = context.nodeAsString(node);
                    declaration = new Declaration(string, reference, statement);
                }
                return declaration;
            }
        }
    ]);
    return Declaration;
}(), _define_property(_Declaration, "name", "Declaration"), _Declaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuY29uc3QgcmVmZXJlbmNlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2RlY2xhcmF0aW9uL3JlZmVyZW5jZVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWNsYXJhdGlvbi9zdGF0ZW1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCByZWZlcmVuY2UsIHN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZGVjbGFyYXRpb25TdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBsZXQgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCk7XG5cbiAgICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5zdGF0ZW1lbnQubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllZCA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZWQ7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdpdGggdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLnJlZmVyZW5jZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBtZXRhdmFyaWFibGVVbmlmaWVkID0gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvblVuaWZpZWQ7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllZCA9IHRoaXMudW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgIHN1YnN0aXR1dGlvblVuaWZpZWQgPSAobWV0YXZhcmlhYmxlVW5pZmllZCAmJiBzdGF0ZW1lbnRVbmlmaWVkKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0sIGNvbnRleHQpIHtcbiAgICBsZXQgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbWV0YWxlbW1hTWV0YXRoZW9yZW1TdHJpbmcgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhbGVtbWFNZXRhdGhlb3JlbVN0cmluZ30nIG1ldGEtbGVtbWEgb3IgbWV0YXRoZW9yZW0gd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICByZWZlcmVuY2VVbmlmaWVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0udW5pZnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZVVuaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZWQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbS51bmlmeVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bWV0YWxlbW1hTWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhLWxlbW1hIG9yIG1ldGF0aGVvcmVtIHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5QXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSwgY29udGV4dCkge1xuICAgIGxldCBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlIHdpdGggdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVVuaWZpZWQgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUudW5pZnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UsIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZVVuaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZWQgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUudW5pZnlTdGF0ZW1lbnQodGhpcy5zdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUgd2l0aCB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShmcmFtZSwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMudmVyaWZ5U3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChmcmFtZSwgY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIHZlcmlmaWVkID0gKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZWQgPSBzdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBzdGF0ZWQgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVkID0gdGhpcy5yZWZlcmVuY2UudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVkKSB7XG4gICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhTGVtbWFzID0gY29udGV4dC5maW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IGNvbnRleHQuZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtcyA9IFtcbiAgICAgICAgICAgICAgLi4ubWV0YUxlbW1hcyxcbiAgICAgICAgICAgICAgLi4ubWV0YXRoZW9yZW1zXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkID0gbWV0YUxlbW1hTWV0YXRoZW9yZW1zLnNvbWUoKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IHRoaXMudW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgICAgbGVtbWEgPSBjb250ZXh0LmZpbmRMZW1tYUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgICAgdGhlb3JlbSA9IGNvbnRleHQuZmluZFRoZW9yZW1CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgICAgIGNvbmplY3R1cmUgPSBjb250ZXh0LmZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgPSAoYXhpb20gfHwgbGVtbWEgfHwgdGhlb3JlbSB8fCBjb25qZWN0dXJlKTtcblxuICAgICAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IHRoaXMudW5pZnlBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkKSB7XG4gICAgICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWNsYXJhdGlvblN0cmluZ30nIHN0YXRlZCBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoZnJhbWUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVjbGFyYXRpb25TdHJpbmd9JyBkZXJpdmVkIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2VWZXJpZmllZCA9IHRoaXMucmVmZXJlbmNlLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2VWZXJpZmllZCkge1xuICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBjb250ZXh0LmZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgbWV0YXRoZW9yZW1zID0gY29udGV4dC5maW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1zID0gW1xuICAgICAgICAgICAgICAuLi5tZXRhTGVtbWFzLFxuICAgICAgICAgICAgICAuLi5tZXRhdGhlb3JlbXNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZWQgPSBtZXRhTGVtbWFNZXRhdGhlb3JlbXMuc29tZSgobWV0YUxlbW1hTWV0YXRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgICAgbGV0IG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCkge1xuICAgICAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IGZyYW1lLnVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0sIGNvbnRleHQpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCkge1xuICAgICAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCA9IHRoaXMudW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSwgY29udGV4dCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgICAgbGVtbWEgPSBjb250ZXh0LmZpbmRMZW1tYUJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgICAgdGhlb3JlbSA9IGNvbnRleHQuZmluZFRoZW9yZW1CeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgICAgIGNvbmplY3R1cmUgPSBjb250ZXh0LmZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgPSAoYXhpb20gfHwgbGVtbWEgfHwgdGhlb3JlbSB8fCBjb25qZWN0dXJlKTtcblxuICAgICAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IHRoaXMudW5pZnlBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkKSB7XG4gICAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlY2xhcmF0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tRGVjbGFyYXRpb25Ob2RlKGRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBkZWNsYXJhdGlvbiA9IG51bGw7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICAgICAgcmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZU5vZGVRdWVyeShkZWNsYXJhdGlvbk5vZGUpO1xuXG4gICAgICBsZXQgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShkZWNsYXJhdGlvbk5vZGUpO1xuXG4gICAgICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpOyAgLy8vXG5cbiAgICAgIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBkb20sXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gZGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICAgICAgZGVjbGFyYXRpb24gPSBuZXcgRGVjbGFyYXRpb24oc3RyaW5nLCByZWZlcmVuY2UsIHN0YXRlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJyZWZlcmVuY2VOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkRlY2xhcmF0aW9uIiwic3RyaW5nIiwicmVmZXJlbmNlIiwic3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnQiLCJjb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFN0cmluZyIsImRlY2xhcmF0aW9uU3RhdGVtZW50U3RyaW5nIiwidHJhY2UiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0Tm9kZSIsInN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwiZGVidWciLCJ1bmlmeU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZWQiLCJyZWZlcmVuY2VTdHJpbmciLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJ1bmlmeVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblVuaWZpZWQiLCJkZWNsYXJhdGlvblN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsImdldE1ldGF2YXJpYWJsZSIsInVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllZCIsIm1ldGFsZW1tYU1ldGF0aGVvcmVtU3RyaW5nIiwic3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInJlZmVyZW5jZVVuaWZpZWQiLCJ1bmlmeVJlZmVyZW5jZSIsInVuaWZ5QXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyIsInZlcmlmeSIsImZyYW1lIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllZCIsInN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50IiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsInJlZmVyZW5jZVZlcmlmaWVkIiwibWV0YUxlbW1hcyIsImZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UiLCJtZXRhdGhlb3JlbXMiLCJmaW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbXMiLCJzb21lIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImxlbW1hIiwiZmluZExlbW1hQnlSZWZlcmVuY2UiLCJ0aGVvcmVtIiwiZmluZFRoZW9yZW1CeVJlZmVyZW5jZSIsImNvbmplY3R1cmUiLCJmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiZnJvbURlY2xhcmF0aW9uTm9kZSIsImRlY2xhcmF0aW9uTm9kZSIsImRlY2xhcmF0aW9uIiwiU3RhdGVtZW50IiwiZG9tIiwicmVmZXJlbmNlTm9kZSIsIlJlZmVyZW5jZSIsImZyb21SZWZlcmVuY2VOb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7MkRBVGdCO3FCQUVVO3dCQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFNQSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsMkJBQy9CQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUM7SUFFckMsV0FBZUUsSUFBQUEsZ0JBQVcsZ0NBQUM7YUFBTUMsWUFDbkJDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTO2dDQURUSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOzs7O1lBR25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUosU0FBUyxFQUFFSyxPQUFPO2dCQUMvQixJQUFJQztnQkFFSixJQUFNQyxrQkFBa0JQLFVBQVVDLFNBQVMsSUFDckNPLDZCQUE2QixJQUFJLENBQUNSLFNBQVMsQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7Z0JBRWxFSSxRQUFRSSxLQUFLLENBQUMsQUFBQyxpQkFB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