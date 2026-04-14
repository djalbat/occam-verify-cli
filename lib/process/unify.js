"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get unifyMetavariable () {
        return unifyMetavariable;
    },
    get unifyMetavariableIntrinsically () {
        return unifyMetavariableIntrinsically;
    },
    get unifyStatement () {
        return unifyStatement;
    },
    get unifyStatementWithCombinator () {
        return unifyStatementWithCombinator;
    },
    get unifySubstitution () {
        return unifySubstitution;
    },
    get unifyTermIntrinsically () {
        return unifyTermIntrinsically;
    },
    get unifyTermWithConstructor () {
        return unifyTermWithConstructor;
    }
});
const _occamlanguages = require("occam-languages");
const _zip = /*#__PURE__*/ _interop_require_default(require("../pass/zip"));
const _metaTypeNames = require("../metaTypeNames");
const _element = require("../utilities/element");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { nodeQuery } = _occamlanguages.queryUtilities;
const typeNodeQuery = nodeQuery("/type"), termNodeQuery = nodeQuery("/term"), frameNodeQuery = nodeQuery("/frame"), metaTypeNodeQuery = nodeQuery("/metaType"), signatureNodeQuery = nodeQuery("/signature"), statementNodeQuery = nodeQuery("/statement"), termVariableNodeQuery = nodeQuery("/term/variable!"), frameMetavariableNodeQuery = nodeQuery("/frame/metavariable!"), statementMetavariableNodeQuery = nodeQuery("/statement/metavariable!"), assumptionMetavariableNodeQuery = nodeQuery("/assumption/metavariable!");
class MetaLevelPass extends _occamlanguages.ZipPass {
    static maps = [
        {
            generalNodeQuery: assumptionMetavariableNodeQuery,
            specificNodeQuery: assumptionMetavariableNodeQuery,
            run: (generalAssumptionMetavariableNode, specificAssumptionMetavariableNode, generalContext, specificContext)=>{
                let success = false;
                let context, reference, metavariableNode;
                context = generalContext; ///
                metavariableNode = generalAssumptionMetavariableNode; ///
                reference = context.findReferenceByMetavariableNode(metavariableNode);
                const metavariable = reference.getMetavariable();
                context = specificContext; ///
                metavariableNode = specificAssumptionMetavariableNode; ///
                reference = context.findReferenceByMetavariableNode(metavariableNode);
                const referenceUnifies = metavariable.unifyReference(reference, generalContext, specificContext);
                if (referenceUnifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            generalNodeQuery: statementMetavariableNodeQuery,
            specificNodeQuery: statementNodeQuery,
            run: (generalStatementMetavariableNode, specificStatementNode, generalContext, specificContext)=>{
                let success = false;
                let context, statementNode;
                context = generalContext; ///
                const metavariableNode = generalStatementMetavariableNode, metavariable = context.findMetavariableByMetavariableNode(metavariableNode), metavariableNodeParentNode = metavariableNode.getParentNode();
                statementNode = metavariableNodeParentNode; ///
                const substitutionNode = statementNode.getSubstitutionNode(), substitution = substitutionNode !== null ? context.findSubstitutionBySubstitutionNode(substitutionNode) : null;
                context = specificContext; ///
                statementNode = specificStatementNode; ///
                const statement = context.findStatementByStatementNode(statementNode), statementUnifies = metavariable.unifyStatement(statement, substitution, generalContext, specificContext);
                if (statementUnifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            generalNodeQuery: frameMetavariableNodeQuery,
            specificNodeQuery: frameNodeQuery,
            run: (generalFrameMetavariableNode, specificFrameNode, generalContext, specificContext)=>{
                let success = false;
                const frameNode = specificFrameNode, metavariableNode = generalFrameMetavariableNode;
                let context;
                context = generalContext; ///
                const metavariable = context.findMetavariableByMetavariableNode(metavariableNode);
                context = specificContext; ///
                const frame = context.findFrameByFrameNode(frameNode), frameUnifies = metavariable.unifyFrame(frame, generalContext, specificContext);
                if (frameUnifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            generalNodeQuery: termVariableNodeQuery,
            specificNodeQuery: termNodeQuery,
            run: (generalTermVariableNode, specificTermNode, generalContext, specificContext)=>{
                let success = false;
                const termNode = specificTermNode, variableNode = generalTermVariableNode; ///
                let context;
                context = generalContext; ///
                const variable = context.findVariableByVariableNode(variableNode);
                context = specificContext; ///
                const term = context.findTermByTermNode(termNode), termUnifies = variable.unifyTerm(term, generalContext, specificContext);
                if (termUnifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            generalNodeQuery: signatureNodeQuery,
            specificNodeQuery: signatureNodeQuery,
            run: (generalSignatureNode, specificSignatureNode, generalContext, specificContext)=>{
                let success = false;
                let context;
                context = generalContext; ///
                const generalSignature = context.findSignatureBySignatureNode(generalSignatureNode);
                context = specificContext; ///
                const specificSignature = context.findSignatureBySignatureNode(specificSignatureNode), signatureUnifies = generalSignature.unifySignature(specificSignature, generalContext, specificContext);
                if (signatureUnifies) {
                    success = true;
                }
                return success;
            }
        }
    ];
}
class CombinatorPass extends _zip.default {
    static maps = [
        {
            generalNodeQuery: metaTypeNodeQuery,
            specificNodeQuery: statementNodeQuery,
            run: (generalMetaTypeNode, specificStatementNode, generalContext, specificContext)=>{
                let success = false;
                const metaTypeNode = generalMetaTypeNode, metaTypeName = metaTypeNode.getMetaTypeName(), metaTypeNameStatementMetaTypeName = metaTypeName === _metaTypeNames.STATEMENT_META_TYPE_NAME;
                if (metaTypeNameStatementMetaTypeName) {
                    const context = specificContext, statementNode = specificStatementNode; ///
                    let statement;
                    statement = (0, _element.statementFromStatementNode)(statementNode, context);
                    statement = statement.validate(context); ///
                    if (statement !== null) {
                        success = true;
                    }
                }
                return success;
            }
        },
        {
            generalNodeQuery: metaTypeNodeQuery,
            specificNodeQuery: frameNodeQuery,
            run: (generalMetaTypeNode, specificFrameNode, generalContext, specificContext)=>{
                let success = false;
                const metaTypeNode = generalMetaTypeNode, metaTypeName = metaTypeNode.getMetaTypeName(), metaTypeNameFrameMetaTypeName = metaTypeName === _metaTypeNames.FRAME_META_TYPE_NAME;
                if (metaTypeNameFrameMetaTypeName) {
                    const context = specificContext, frameNode = specificFrameNode; ///
                    let frame;
                    frame = (0, _element.frameFromFrameNode)(frameNode, context);
                    frame = frame.validate(context); ///
                    if (frame !== null) {
                        success = true;
                    }
                }
                return success;
            }
        },
        {
            generalNodeQuery: typeNodeQuery,
            specificNodeQuery: termNodeQuery,
            run: (generalTypeNode, specificTermNode, generalContext, specificContext)=>{
                let success = false;
                const typeNode = generalTypeNode, termNode = specificTermNode, nominalTypeName = typeNode.getNominalTypeName();
                let context;
                context = generalContext; ///
                const type = context.findTypeByNominalTypeName(nominalTypeName);
                context = specificContext; ///
                let term;
                term = (0, _element.termFromTermNode)(termNode, context);
                term = term.validateGivenType(type, context);
                if (term !== null) {
                    success = true;
                }
                return success;
            }
        }
    ];
}
class ConstructorPass extends _zip.default {
    static maps = [
        {
            generalNodeQuery: typeNodeQuery,
            specificNodeQuery: termNodeQuery,
            run: (generalTypeNode, specificTermNode, generalContext, specificContext)=>{
                let success = false;
                const typeNode = generalTypeNode, termNode = specificTermNode, nominalTypeName = typeNode.getNominalTypeName();
                let context;
                context = generalContext; ///
                const type = context.findTypeByNominalTypeName(nominalTypeName);
                if (type !== null) {
                    context = specificContext; ///
                    let term;
                    term = (0, _element.termFromTermNode)(termNode, context);
                    term = term.validateGivenType(type, context);
                    if (term !== null) {
                        success = true;
                    }
                }
                return success;
            }
        }
    ];
}
class MetavariablePass extends _zip.default {
    static maps = [
        {
            generalNodeQuery: typeNodeQuery,
            specificNodeQuery: termNodeQuery,
            run: (generalTypeNode, specificTermNode, generalContext, specificContext)=>{
                let success = false;
                let context;
                const typeNode = generalTypeNode, termNode = specificTermNode, nominalTypeName = typeNode.getNominalTypeName();
                context = generalContext; ///
                const type = context.findTypeByNominalTypeName(nominalTypeName);
                context = specificContext; ///
                const term = context.findTermByTermNode(termNode), termType = term.getType(), termTypeEqualToOrSubTypeOfGivenTypeType = termType.isEqualToOrSubTypeOf(type);
                if (termTypeEqualToOrSubTypeOfGivenTypeType) {
                    success = true;
                }
                return success;
            }
        }
    ];
}
class SubstitutionPass extends _zip.default {
    static maps = [
        {
            generalNodeQuery: frameMetavariableNodeQuery,
            specificNodeQuery: frameNodeQuery,
            run: (generalFrameMetavariableNode, specificFrameNode, generalContext, specificContext)=>{
                let success = false;
                const frameNode = specificFrameNode, metavariableNode = generalFrameMetavariableNode; ///
                let context;
                context = generalContext; ///
                const metavariable = context.findMetavariableByMetavariableNode(metavariableNode);
                context = specificContext; ///
                const frame = context.findFrameByFrameNode(frameNode), frameUnifies = metavariable.unifyFrame(frame, generalContext, specificContext);
                if (frameUnifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            generalNodeQuery: termVariableNodeQuery,
            specificNodeQuery: termNodeQuery,
            run: (generalTermVariableNode, specificTermNode, generalContext, specificContext)=>{
                let success = false;
                const termNode = specificTermNode, variableNode = generalTermVariableNode; ///
                let context;
                context = generalContext; ///
                const variable = context.findVariableByVariableNode(variableNode);
                context = specificContext; ///
                const term = context.findTermByTermNode(termNode), termUnifies = variable.unifyTerm(term, generalContext, specificContext);
                if (termUnifies) {
                    success = true;
                }
                return success;
            }
        }
    ];
}
class IntrinsicTermPass extends _occamlanguages.ZipPass {
    static maps = [
        {
            generalNodeQuery: termVariableNodeQuery,
            specificNodeQuery: termNodeQuery,
            run: (generalTermVariableNode, specificTermNode, generalContext, specificContext)=>{
                let success = false;
                const termNode = specificTermNode, variableNode = generalTermVariableNode; ///
                let context;
                context = generalContext; ///
                const variable = context.findVariableByVariableNode(variableNode);
                context = specificContext; ///
                const term = context.findTermByTermNode(termNode), termUnifies = variable.unifyTerm(term, generalContext, specificContext);
                if (termUnifies) {
                    success = true;
                }
                return success;
            }
        }
    ];
}
class IntrinsicMetavariablePass extends _zip.default {
    static maps = [
        {
            generalNodeQuery: termVariableNodeQuery,
            specificNodeQuery: termNodeQuery,
            run: (generalTermVariableNode, specificTermNode, generalContext, specificContext)=>{
                let success = false;
                const termNode = specificTermNode, variableNode = generalTermVariableNode; ///
                let context;
                context = generalContext; ///
                const variable = context.findVariableByVariableNode(variableNode);
                context = specificContext; ///
                const term = context.findTermByTermNode(termNode), termUnifies = variable.unifyTerm(term, generalContext, specificContext);
                if (termUnifies) {
                    success = true;
                }
                return success;
            }
        }
    ];
}
const metaLevelPass = new MetaLevelPass(), combinatorPass = new CombinatorPass(), constructorPass = new ConstructorPass(), metavariablePass = new MetavariablePass(), substitutionPass = new SubstitutionPass(), intrinsicTermPass = new IntrinsicTermPass(), intrinsicMetavariablePass = new IntrinsicMetavariablePass();
function unifyStatement(generalStatement, specificStatement, generalContext, specificContext) {
    let statementUnifies = false;
    const generalStatementNode = generalStatement.getNode(), specificStatementNode = specificStatement.getNode(), generalNode = generalStatementNode, specificNode = specificStatementNode, success = metaLevelPass.run(generalNode, specificNode, generalContext, specificContext);
    if (success) {
        statementUnifies = true;
    }
    return statementUnifies;
}
function unifyMetavariable(generalMetavariable, specificMetavariable, generalContext, specificContext) {
    let metavariableUnifies = false;
    const generalMetavariableNode = generalMetavariable.getNode(), specificMetavariableNode = specificMetavariable.getNode(), success = metavariablePass.run(generalMetavariableNode, specificMetavariableNode, generalContext, specificContext);
    if (success) {
        metavariableUnifies = true;
    }
    return metavariableUnifies;
}
function unifySubstitution(generalSubstitution, specificSubstitution, generalContext, specificContext) {
    let substitutionUnifies = false;
    const generalSubstitutionNode = generalSubstitution.getNode(), specificSubstitutionNode = specificSubstitution.getNode(), generalNode = generalSubstitutionNode, specificNode = specificSubstitutionNode, success = substitutionPass.run(generalNode, specificNode, generalContext, specificContext);
    if (success) {
        substitutionUnifies = true;
    }
    return substitutionUnifies;
}
function unifyTermWithConstructor(term, constructor, generalContext, specificContext) {
    let termUnifiesWithConstructor = false;
    const termNode = term.getNode(), constructorTerm = constructor.getTerm(), constructorTermNode = constructorTerm.getNode(), success = constructorPass.run(constructorTermNode, termNode, generalContext, specificContext);
    if (success) {
        termUnifiesWithConstructor = true;
    }
    return termUnifiesWithConstructor;
}
function unifyStatementWithCombinator(statement, combinator, generalContext, specificContext) {
    let statementUnifiesWithCombinator = false;
    const statementNode = statement.getNode(), combinatorStatement = combinator.getStatement(), combinatorStatementNode = combinatorStatement.getNode(), success = combinatorPass.run(combinatorStatementNode, statementNode, generalContext, specificContext);
    if (success) {
        statementUnifiesWithCombinator = true;
    }
    return statementUnifiesWithCombinator;
}
function unifyTermIntrinsically(generalTerm, specificTerm, generalContext, specificContext) {
    let termUnifiesIntrinsically = false;
    const generalTermNode = generalTerm.getNode(), specificTermNode = specificTerm.getNode(), generalNode = generalTermNode, specificNode = specificTermNode, success = intrinsicTermPass.run(generalNode, specificNode, generalContext, specificContext);
    if (success) {
        termUnifiesIntrinsically = true;
    }
    return termUnifiesIntrinsically;
}
function unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, generalContext, specificContext) {
    let metavariableUnifiesIntrinsically = false;
    const generalMetavariableNode = generalMetavariable.getNode(), specificMetavariableNode = specificMetavariable.getNode(), generalNode = generalMetavariableNode, specificNode = specificMetavariableNode, success = intrinsicMetavariablePass.run(generalNode, specificNode, generalContext, specificContext);
    if (success) {
        metavariableUnifiesIntrinsically = true;
    }
    return metavariableUnifiesIntrinsically;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3VuaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBxdWVyeVV0aWxpdGllcywgWmlwUGFzcyBhcyBaaXBQYXNzQmFzZSB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IFppcFBhc3MgZnJvbSBcIi4uL3Bhc3MvemlwXCI7XG5cbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FLCBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtTm9kZSwgZnJhbWVGcm9tRnJhbWVOb2RlLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IG5vZGVRdWVyeSB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKSxcbiAgICAgIHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lXCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVR5cGVcIiksXG4gICAgICBzaWduYXR1cmVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc2lnbmF0dXJlXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudFwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fzc3VtcHRpb24vbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsUGFzcyBleHRlbmRzIFppcFBhc3NCYXNlIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogYXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbEFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICByZWZlcmVuY2UsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlO1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgICByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VVbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlO1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLmdldFBhcmVudE5vZGUoKTtcblxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gbWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGU7IC8vL1xuXG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnN0aXR1dGlvbk5vZGUoKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAvLy9cblxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljRnJhbWVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgZnJhbWVOb2RlID0gc3BlY2lmaWNGcmFtZU5vZGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbEZyYW1lTWV0YXZhcmlhYmxlTm9kZTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgICAgIGZyYW1lVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeUZyYW1lKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBnZW5lcmFsVGVybVZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgdGVybVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHNpZ25hdHVyZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBzaWduYXR1cmVOb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsU2lnbmF0dXJlTm9kZSwgc3BlY2lmaWNTaWduYXR1cmVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgZ2VuZXJhbFNpZ25hdHVyZSA9IGNvbnRleHQuZmluZFNpZ25hdHVyZUJ5U2lnbmF0dXJlTm9kZShnZW5lcmFsU2lnbmF0dXJlTm9kZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHNwZWNpZmljU2lnbmF0dXJlID0gY29udGV4dC5maW5kU2lnbmF0dXJlQnlTaWduYXR1cmVOb2RlKHNwZWNpZmljU2lnbmF0dXJlTm9kZSksXG4gICAgICAgICAgICAgIHNpZ25hdHVyZVVuaWZpZXMgPSBnZW5lcmFsU2lnbmF0dXJlLnVuaWZ5U2lnbmF0dXJlKHNwZWNpZmljU2lnbmF0dXJlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc2lnbmF0dXJlVW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBDb21iaW5hdG9yUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBtZXRhVHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsTWV0YVR5cGVOb2RlLCBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZXRhVHlwZU5vZGUgPSBnZW5lcmFsTWV0YVR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOb2RlLmdldE1ldGFUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICBtZXRhVHlwZU5hbWVTdGF0ZW1lbnRNZXRhVHlwZU5hbWUgPSAobWV0YVR5cGVOYW1lID09PSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUpO1xuXG4gICAgICAgIGlmIChtZXRhVHlwZU5hbWVTdGF0ZW1lbnRNZXRhVHlwZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgICAgbGV0IHN0YXRlbWVudDtcblxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpOyAgLy8vXG5cbiAgICAgICAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IG1ldGFUeXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IGZyYW1lTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbE1ldGFUeXBlTm9kZSwgc3BlY2lmaWNGcmFtZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZXRhVHlwZU5vZGUgPSBnZW5lcmFsTWV0YVR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOb2RlLmdldE1ldGFUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICBtZXRhVHlwZU5hbWVGcmFtZU1ldGFUeXBlTmFtZSA9IChtZXRhVHlwZU5hbWUgPT09IEZSQU1FX01FVEFfVFlQRV9OQU1FKTtcblxuICAgICAgICBpZiAobWV0YVR5cGVOYW1lRnJhbWVNZXRhVHlwZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgZnJhbWVOb2RlID0gc3BlY2lmaWNGcmFtZU5vZGU7ICAvLy9cblxuICAgICAgICAgIGxldCBmcmFtZTtcblxuICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBmcmFtZSA9IGZyYW1lLnZhbGlkYXRlKGNvbnRleHQpOyAgLy8vXG5cbiAgICAgICAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFR5cGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdHlwZU5vZGUgPSBnZW5lcmFsVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgbGV0IHRlcm07XG5cbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHRlcm0gPSB0ZXJtLnZhbGlkYXRlR2l2ZW5UeXBlKHR5cGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIENvbnN0cnVjdG9yUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVHlwZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IGdlbmVyYWxUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgICAgbGV0IHRlcm07XG5cbiAgICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICB0ZXJtID0gdGVybS52YWxpZGF0ZUdpdmVuVHlwZSh0eXBlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIE1ldGF2YXJpYWJsZVBhc3MgZXh0ZW5kcyBaaXBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFR5cGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29uc3QgdHlwZU5vZGUgPSBnZW5lcmFsVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKTtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIFN1YnN0aXR1dGlvblBhc3MgZXh0ZW5kcyBaaXBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZnJhbWVOb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0ZyYW1lTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IHNwZWNpZmljRnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgICAgIGZyYW1lVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeUZyYW1lKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBnZW5lcmFsVGVybVZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgdGVybVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIEludHJpbnNpY1Rlcm1QYXNzIGV4dGVuZHMgWmlwUGFzc0Jhc2Uge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGU7IC8vL1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgICAgIHRlcm1VbmlmaWVzID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBJbnRyaW5zaWNNZXRhdmFyaWFibGVQYXNzIGV4dGVuZHMgWmlwUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBnZW5lcmFsVGVybVZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgdGVybVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IG1ldGFMZXZlbFBhc3MgPSBuZXcgTWV0YUxldmVsUGFzcygpLFxuICAgICAgY29tYmluYXRvclBhc3MgPSBuZXcgQ29tYmluYXRvclBhc3MoKSxcbiAgICAgIGNvbnN0cnVjdG9yUGFzcyA9IG5ldyBDb25zdHJ1Y3RvclBhc3MoKSxcbiAgICAgIG1ldGF2YXJpYWJsZVBhc3MgPSBuZXcgTWV0YXZhcmlhYmxlUGFzcygpLFxuICAgICAgc3Vic3RpdHV0aW9uUGFzcyA9IG5ldyBTdWJzdGl0dXRpb25QYXNzKCksXG4gICAgICBpbnRyaW5zaWNUZXJtUGFzcyA9IG5ldyBJbnRyaW5zaWNUZXJtUGFzcygpLFxuICAgICAgaW50cmluc2ljTWV0YXZhcmlhYmxlUGFzcyA9IG5ldyBJbnRyaW5zaWNNZXRhdmFyaWFibGVQYXNzKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudChnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnROb2RlID0gZ2VuZXJhbFN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljU3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICBzdWNjZXNzID0gbWV0YUxldmVsUGFzcy5ydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlNZXRhdmFyaWFibGUoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxNZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY01ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIHN1Y2Nlc3MgPSBtZXRhdmFyaWFibGVQYXNzLnJ1bihnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeVN1YnN0aXR1dGlvbihnZW5lcmFsU3Vic3RpdHV0aW9uLCBzcGVjaWZpY1N1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgc3Vic3RpdHV0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb25Ob2RlID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uTm9kZSA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsU3Vic3RpdHV0aW9uTm9kZSwgLy8vXG4gICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdWNjZXNzID0gc3Vic3RpdHV0aW9uUGFzcy5ydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBzdWJzdGl0dXRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yKHRlcm0sIGNvbnN0cnVjdG9yLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgIGNvbnN0cnVjdG9yVGVybSA9IGNvbnN0cnVjdG9yLmdldFRlcm0oKSxcbiAgICAgICAgY29uc3RydWN0b3JUZXJtTm9kZSA9IGNvbnN0cnVjdG9yVGVybS5nZXROb2RlKCksXG4gICAgICAgIHN1Y2Nlc3MgPSBjb25zdHJ1Y3RvclBhc3MucnVuKGNvbnN0cnVjdG9yVGVybU5vZGUsIHRlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3Ioc3RhdGVtZW50LCBjb21iaW5hdG9yLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3IgPSBmYWxzZTtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgY29tYmluYXRvclN0YXRlbWVudCA9IGNvbWJpbmF0b3IuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgIGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlID0gY29tYmluYXRvclN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIHN1Y2Nlc3MgPSBjb21iaW5hdG9yUGFzcy5ydW4oY29tYmluYXRvclN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeVRlcm1JbnRyaW5zaWNhbGx5KGdlbmVyYWxUZXJtLCBzcGVjaWZpY1Rlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHRlcm1VbmlmaWVzSW50cmluc2ljYWxseSA9IGZhbHNlO1xuXG4gIGNvbnN0IGdlbmVyYWxUZXJtTm9kZSA9IGdlbmVyYWxUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgc3BlY2lmaWNUZXJtTm9kZSA9IHNwZWNpZmljVGVybS5nZXROb2RlKCksXG4gICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgIHN1Y2Nlc3MgPSBpbnRyaW5zaWNUZXJtUGFzcy5ydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICB0ZXJtVW5pZmllc0ludHJpbnNpY2FsbHkgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1VbmlmaWVzSW50cmluc2ljYWxseTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxNZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY01ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICBzdWNjZXNzID0gaW50cmluc2ljTWV0YXZhcmlhYmxlUGFzcy5ydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7XG59XG4iXSwibmFtZXMiOlsidW5pZnlNZXRhdmFyaWFibGUiLCJ1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3IiLCJ1bmlmeVN1YnN0aXR1dGlvbiIsInVuaWZ5VGVybUludHJpbnNpY2FsbHkiLCJ1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IiLCJub2RlUXVlcnkiLCJxdWVyeVV0aWxpdGllcyIsInR5cGVOb2RlUXVlcnkiLCJ0ZXJtTm9kZVF1ZXJ5IiwiZnJhbWVOb2RlUXVlcnkiLCJtZXRhVHlwZU5vZGVRdWVyeSIsInNpZ25hdHVyZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiYXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIk1ldGFMZXZlbFBhc3MiLCJaaXBQYXNzQmFzZSIsIm1hcHMiLCJnZW5lcmFsTm9kZVF1ZXJ5Iiwic3BlY2lmaWNOb2RlUXVlcnkiLCJydW4iLCJnZW5lcmFsQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdWNjZXNzIiwiY29udGV4dCIsInJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlVW5pZmllcyIsInVuaWZ5UmVmZXJlbmNlIiwiZ2VuZXJhbFN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY1N0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVQYXJlbnROb2RlIiwiZ2V0UGFyZW50Tm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInN0YXRlbWVudCIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiZ2VuZXJhbEZyYW1lTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljRnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwiZnJhbWUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lVW5pZmllcyIsInVuaWZ5RnJhbWUiLCJnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSIsInNwZWNpZmljVGVybU5vZGUiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ0ZXJtIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybVVuaWZpZXMiLCJ1bmlmeVRlcm0iLCJnZW5lcmFsU2lnbmF0dXJlTm9kZSIsInNwZWNpZmljU2lnbmF0dXJlTm9kZSIsImdlbmVyYWxTaWduYXR1cmUiLCJmaW5kU2lnbmF0dXJlQnlTaWduYXR1cmVOb2RlIiwic3BlY2lmaWNTaWduYXR1cmUiLCJzaWduYXR1cmVVbmlmaWVzIiwidW5pZnlTaWduYXR1cmUiLCJDb21iaW5hdG9yUGFzcyIsIlppcFBhc3MiLCJnZW5lcmFsTWV0YVR5cGVOb2RlIiwibWV0YVR5cGVOb2RlIiwibWV0YVR5cGVOYW1lIiwiZ2V0TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lU3RhdGVtZW50TWV0YVR5cGVOYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUiLCJ2YWxpZGF0ZSIsIm1ldGFUeXBlTmFtZUZyYW1lTWV0YVR5cGVOYW1lIiwiRlJBTUVfTUVUQV9UWVBFX05BTUUiLCJmcmFtZUZyb21GcmFtZU5vZGUiLCJnZW5lcmFsVHlwZU5vZGUiLCJ0eXBlTm9kZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwidGVybUZyb21UZXJtTm9kZSIsInZhbGlkYXRlR2l2ZW5UeXBlIiwiQ29uc3RydWN0b3JQYXNzIiwiTWV0YXZhcmlhYmxlUGFzcyIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiU3Vic3RpdHV0aW9uUGFzcyIsIkludHJpbnNpY1Rlcm1QYXNzIiwiSW50cmluc2ljTWV0YXZhcmlhYmxlUGFzcyIsIm1ldGFMZXZlbFBhc3MiLCJjb21iaW5hdG9yUGFzcyIsImNvbnN0cnVjdG9yUGFzcyIsIm1ldGF2YXJpYWJsZVBhc3MiLCJzdWJzdGl0dXRpb25QYXNzIiwiaW50cmluc2ljVGVybVBhc3MiLCJpbnRyaW5zaWNNZXRhdmFyaWFibGVQYXNzIiwiZ2VuZXJhbFN0YXRlbWVudCIsInNwZWNpZmljU3RhdGVtZW50IiwiZ2VuZXJhbFN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwiZ2VuZXJhbE5vZGUiLCJzcGVjaWZpY05vZGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUiLCJnZW5lcmFsU3Vic3RpdHV0aW9uIiwic3BlY2lmaWNTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVzIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbk5vZGUiLCJzcGVjaWZpY1N1YnN0aXR1dGlvbk5vZGUiLCJjb25zdHJ1Y3RvciIsInRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yIiwiY29uc3RydWN0b3JUZXJtIiwiZ2V0VGVybSIsImNvbnN0cnVjdG9yVGVybU5vZGUiLCJjb21iaW5hdG9yIiwic3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yIiwiY29tYmluYXRvclN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlIiwiZ2VuZXJhbFRlcm0iLCJzcGVjaWZpY1Rlcm0iLCJ0ZXJtVW5pZmllc0ludHJpbnNpY2FsbHkiLCJnZW5lcmFsVGVybU5vZGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBcWVnQkE7ZUFBQUE7O1FBNEVBQztlQUFBQTs7UUE1RkFDO2VBQUFBOztRQTZEQUM7ZUFBQUE7O1FBL0JBQztlQUFBQTs7UUE4Q0FDO2VBQUFBOztRQTlCQUM7ZUFBQUE7OztnQ0FqZ0J1Qzs0REFFbkM7K0JBRTJDO3lCQUNrQjs7Ozs7O0FBRWpGLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdDLDhCQUFjO0FBRXBDLE1BQU1DLGdCQUFnQkYsVUFBVSxVQUMxQkcsZ0JBQWdCSCxVQUFVLFVBQzFCSSxpQkFBaUJKLFVBQVUsV0FDM0JLLG9CQUFvQkwsVUFBVSxjQUM5Qk0scUJBQXFCTixVQUFVLGVBQy9CTyxxQkFBcUJQLFVBQVUsZUFDL0JRLHdCQUF3QlIsVUFBVSxvQkFDbENTLDZCQUE2QlQsVUFBVSx5QkFDdkNVLGlDQUFpQ1YsVUFBVSw2QkFDM0NXLGtDQUFrQ1gsVUFBVTtBQUVsRCxNQUFNWSxzQkFBc0JDLHVCQUFXO0lBQ3JDLE9BQU9DLE9BQU87UUFDWjtZQUNFQyxrQkFBa0JKO1lBQ2xCSyxtQkFBbUJMO1lBQ25CTSxLQUFLLENBQUNDLG1DQUFtQ0Msb0NBQW9DQyxnQkFBZ0JDO2dCQUMzRixJQUFJQyxVQUFVO2dCQUVkLElBQUlDLFNBQ0FDLFdBQ0FDO2dCQUVKRixVQUFVSCxnQkFBZ0IsR0FBRztnQkFFN0JLLG1CQUFtQlAsbUNBQW9DLEdBQUc7Z0JBRTFETSxZQUFZRCxRQUFRRywrQkFBK0IsQ0FBQ0Q7Z0JBRXBELE1BQU1FLGVBQWVILFVBQVVJLGVBQWU7Z0JBRTlDTCxVQUFV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