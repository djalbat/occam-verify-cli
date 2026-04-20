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
    get unifyTermIntrinsically () {
        return unifyTermIntrinsically;
    },
    get unifyTermWithConstructor () {
        return unifyTermWithConstructor;
    }
});
const _occamlanguages = require("occam-languages");
const _zip = /*#__PURE__*/ _interop_require_default(require("../pass/zip"));
const _context = require("../utilities/context");
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
                const specificSignature = context.findSignatureBySignatureNode(specificSignatureNode);
                (0, _context.reconcile)((context)=>{
                    const signatureUnifies = generalSignature.unifySignature(specificSignature, context);
                    if (signatureUnifies) {
                        success = true;
                    }
                }, context);
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
const metaLevelPass = new MetaLevelPass(), combinatorPass = new CombinatorPass(), constructorPass = new ConstructorPass(), metavariablePass = new MetavariablePass(), intrinsicTermPass = new IntrinsicTermPass(), intrinsicMetavariablePass = new IntrinsicMetavariablePass();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3VuaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBxdWVyeVV0aWxpdGllcywgWmlwUGFzcyBhcyBaaXBQYXNzQmFzZSB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IFppcFBhc3MgZnJvbSBcIi4uL3Bhc3MvemlwXCI7XG5cbmltcG9ydCB7IHJlY29uY2lsZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUsIFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1Ob2RlLCBmcmFtZUZyb21GcmFtZU5vZGUsIHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmNvbnN0IHsgbm9kZVF1ZXJ5IH0gPSBxdWVyeVV0aWxpdGllcztcblxuY29uc3QgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlXCIpLFxuICAgICAgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWVcIiksXG4gICAgICBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhVHlwZVwiKSxcbiAgICAgIHNpZ25hdHVyZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zaWduYXR1cmVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50XCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIGFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXNzdW1wdGlvbi9tZXRhdmFyaWFibGUhXCIpO1xuXG5jbGFzcyBNZXRhTGV2ZWxQYXNzIGV4dGVuZHMgWmlwUGFzc0Jhc2Uge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IGFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBsZXQgY29udGV4dCxcbiAgICAgICAgICAgIHJlZmVyZW5jZSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGU7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbEFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHNwZWNpZmljQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGU7IC8vL1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBjb25zdCByZWZlcmVuY2VVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBsZXQgY29udGV4dCxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGU7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbFN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlUGFyZW50Tm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xuXG4gICAgICAgIHN0YXRlbWVudE5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUGFyZW50Tm9kZTsgLy8vXG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3Vic3RpdHV0aW9uTm9kZSgpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSAoc3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7IC8vL1xuXG4gICAgICAgIHN0YXRlbWVudE5vZGUgPSBzcGVjaWZpY1N0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IGZyYW1lTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbEZyYW1lTWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNGcmFtZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBmcmFtZU5vZGUgPSBzcGVjaWZpY0ZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICAgICAgZnJhbWVVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5RnJhbWUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChmcmFtZVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgICB0ZXJtVW5pZmllcyA9IHZhcmlhYmxlLnVuaWZ5VGVybSh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogc2lnbmF0dXJlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHNpZ25hdHVyZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxTaWduYXR1cmVOb2RlLCBzcGVjaWZpY1NpZ25hdHVyZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBnZW5lcmFsU2lnbmF0dXJlID0gY29udGV4dC5maW5kU2lnbmF0dXJlQnlTaWduYXR1cmVOb2RlKGdlbmVyYWxTaWduYXR1cmVOb2RlKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3Qgc3BlY2lmaWNTaWduYXR1cmUgPSBjb250ZXh0LmZpbmRTaWduYXR1cmVCeVNpZ25hdHVyZU5vZGUoc3BlY2lmaWNTaWduYXR1cmVOb2RlKTtcblxuICAgICAgICByZWNvbmNpbGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCBzaWduYXR1cmVVbmlmaWVzID0gZ2VuZXJhbFNpZ25hdHVyZS51bmlmeVNpZ25hdHVyZShzcGVjaWZpY1NpZ25hdHVyZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc2lnbmF0dXJlVW5pZmllcykge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBjb250ZXh0KVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgQ29tYmluYXRvclBhc3MgZXh0ZW5kcyBaaXBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogbWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbE1ldGFUeXBlTm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YVR5cGVOb2RlID0gZ2VuZXJhbE1ldGFUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlTm9kZS5nZXRNZXRhVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgbWV0YVR5cGVOYW1lU3RhdGVtZW50TWV0YVR5cGVOYW1lID0gKG1ldGFUeXBlTmFtZSA9PT0gU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FKTtcblxuICAgICAgICBpZiAobWV0YVR5cGVOYW1lU3RhdGVtZW50TWV0YVR5cGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzcGVjaWZpY1N0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgICAgIGxldCBzdGF0ZW1lbnQ7XG5cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTsgIC8vL1xuXG4gICAgICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBtZXRhVHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxNZXRhVHlwZU5vZGUsIHNwZWNpZmljRnJhbWVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YVR5cGVOb2RlID0gZ2VuZXJhbE1ldGFUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlTm9kZS5nZXRNZXRhVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgbWV0YVR5cGVOYW1lRnJhbWVNZXRhVHlwZU5hbWUgPSAobWV0YVR5cGVOYW1lID09PSBGUkFNRV9NRVRBX1RZUEVfTkFNRSk7XG5cbiAgICAgICAgaWYgKG1ldGFUeXBlTmFtZUZyYW1lTWV0YVR5cGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIGZyYW1lTm9kZSA9IHNwZWNpZmljRnJhbWVOb2RlOyAgLy8vXG5cbiAgICAgICAgICBsZXQgZnJhbWU7XG5cbiAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgZnJhbWUgPSBmcmFtZS52YWxpZGF0ZShjb250ZXh0KTsgIC8vL1xuXG4gICAgICAgICAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxUeXBlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gZ2VuZXJhbFR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGxldCB0ZXJtO1xuXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtID0gdGVybS52YWxpZGF0ZUdpdmVuVHlwZSh0eXBlLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBDb25zdHJ1Y3RvclBhc3MgZXh0ZW5kcyBaaXBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFR5cGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdHlwZU5vZGUgPSBnZW5lcmFsVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICAgIGxldCB0ZXJtO1xuXG4gICAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgdGVybSA9IHRlcm0udmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBNZXRhdmFyaWFibGVQYXNzIGV4dGVuZHMgWmlwUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxUeXBlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gZ2VuZXJhbFR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBJbnRyaW5zaWNUZXJtUGFzcyBleHRlbmRzIFppcFBhc3NCYXNlIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgICB0ZXJtVW5pZmllcyA9IHZhcmlhYmxlLnVuaWZ5VGVybSh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgSW50cmluc2ljTWV0YXZhcmlhYmxlUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGU7IC8vL1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgICAgIHRlcm1VbmlmaWVzID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBtZXRhTGV2ZWxQYXNzID0gbmV3IE1ldGFMZXZlbFBhc3MoKSxcbiAgICAgIGNvbWJpbmF0b3JQYXNzID0gbmV3IENvbWJpbmF0b3JQYXNzKCksXG4gICAgICBjb25zdHJ1Y3RvclBhc3MgPSBuZXcgQ29uc3RydWN0b3JQYXNzKCksXG4gICAgICBtZXRhdmFyaWFibGVQYXNzID0gbmV3IE1ldGF2YXJpYWJsZVBhc3MoKSxcbiAgICAgIGludHJpbnNpY1Rlcm1QYXNzID0gbmV3IEludHJpbnNpY1Rlcm1QYXNzKCksXG4gICAgICBpbnRyaW5zaWNNZXRhdmFyaWFibGVQYXNzID0gbmV3IEludHJpbnNpY01ldGF2YXJpYWJsZVBhc3MoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3QgZ2VuZXJhbFN0YXRlbWVudE5vZGUgPSBnZW5lcmFsU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgIHN1Y2Nlc3MgPSBtZXRhTGV2ZWxQYXNzLnJ1bihnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeU1ldGF2YXJpYWJsZShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlTm9kZSA9IHNwZWNpZmljTWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgc3VjY2VzcyA9IG1ldGF2YXJpYWJsZVBhc3MucnVuKGdlbmVyYWxNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3Rvcih0ZXJtLCBjb25zdHJ1Y3RvciwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgdGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IgPSBmYWxzZTtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICBjb25zdHJ1Y3RvclRlcm0gPSBjb25zdHJ1Y3Rvci5nZXRUZXJtKCksXG4gICAgICAgIGNvbnN0cnVjdG9yVGVybU5vZGUgPSBjb25zdHJ1Y3RvclRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICBzdWNjZXNzID0gY29uc3RydWN0b3JQYXNzLnJ1bihjb25zdHJ1Y3RvclRlcm1Ob2RlLCB0ZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yKHN0YXRlbWVudCwgY29tYmluYXRvciwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yID0gZmFsc2U7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIGNvbWJpbmF0b3JTdGF0ZW1lbnQgPSBjb21iaW5hdG9yLmdldFN0YXRlbWVudCgpLFxuICAgICAgICBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3JTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBzdWNjZXNzID0gY29tYmluYXRvclBhc3MucnVuKGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCBzdGF0ZW1lbnROb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlUZXJtSW50cmluc2ljYWxseShnZW5lcmFsVGVybSwgc3BlY2lmaWNUZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCB0ZXJtVW5pZmllc0ludHJpbnNpY2FsbHkgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsVGVybU5vZGUgPSBnZW5lcmFsVGVybS5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljVGVybU5vZGUgPSBzcGVjaWZpY1Rlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxUZXJtTm9kZSwgLy8vXG4gICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICBzdWNjZXNzID0gaW50cmluc2ljVGVybVBhc3MucnVuKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgdGVybVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVW5pZmllc0ludHJpbnNpY2FsbHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gZmFsc2U7XG5cbiAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgc3VjY2VzcyA9IGludHJpbnNpY01ldGF2YXJpYWJsZVBhc3MucnVuKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5O1xufVxuIl0sIm5hbWVzIjpbInVuaWZ5TWV0YXZhcmlhYmxlIiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yIiwidW5pZnlUZXJtSW50cmluc2ljYWxseSIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciIsIm5vZGVRdWVyeSIsInF1ZXJ5VXRpbGl0aWVzIiwidHlwZU5vZGVRdWVyeSIsInRlcm1Ob2RlUXVlcnkiLCJmcmFtZU5vZGVRdWVyeSIsIm1ldGFUeXBlTm9kZVF1ZXJ5Iiwic2lnbmF0dXJlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5IiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YUxldmVsUGFzcyIsIlppcFBhc3NCYXNlIiwibWFwcyIsImdlbmVyYWxOb2RlUXVlcnkiLCJzcGVjaWZpY05vZGVRdWVyeSIsInJ1biIsImdlbmVyYWxBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1Y2Nlc3MiLCJjb250ZXh0IiwicmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlTm9kZSIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VVbmlmaWVzIiwidW5pZnlSZWZlcmVuY2UiLCJnZW5lcmFsU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGUiLCJnZXRQYXJlbnROb2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50IiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFVuaWZpZXMiLCJnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwiZnJhbWVVbmlmaWVzIiwidW5pZnlGcmFtZSIsImdlbmVyYWxUZXJtVmFyaWFibGVOb2RlIiwic3BlY2lmaWNUZXJtTm9kZSIsInRlcm1Ob2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInRlcm0iLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtVW5pZmllcyIsInVuaWZ5VGVybSIsImdlbmVyYWxTaWduYXR1cmVOb2RlIiwic3BlY2lmaWNTaWduYXR1cmVOb2RlIiwiZ2VuZXJhbFNpZ25hdHVyZSIsImZpbmRTaWduYXR1cmVCeVNpZ25hdHVyZU5vZGUiLCJzcGVjaWZpY1NpZ25hdHVyZSIsInJlY29uY2lsZSIsInNpZ25hdHVyZVVuaWZpZXMiLCJ1bmlmeVNpZ25hdHVyZSIsIkNvbWJpbmF0b3JQYXNzIiwiWmlwUGFzcyIsImdlbmVyYWxNZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5hbWUiLCJnZXRNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWVTdGF0ZW1lbnRNZXRhVHlwZU5hbWUiLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInZhbGlkYXRlIiwibWV0YVR5cGVOYW1lRnJhbWVNZXRhVHlwZU5hbWUiLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsImZyYW1lRnJvbUZyYW1lTm9kZSIsImdlbmVyYWxUeXBlTm9kZSIsInR5cGVOb2RlIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidmFsaWRhdGVHaXZlblR5cGUiLCJDb25zdHJ1Y3RvclBhc3MiLCJNZXRhdmFyaWFibGVQYXNzIiwidGVybVR5cGUiLCJnZXRUeXBlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJJbnRyaW5zaWNUZXJtUGFzcyIsIkludHJpbnNpY01ldGF2YXJpYWJsZVBhc3MiLCJtZXRhTGV2ZWxQYXNzIiwiY29tYmluYXRvclBhc3MiLCJjb25zdHJ1Y3RvclBhc3MiLCJtZXRhdmFyaWFibGVQYXNzIiwiaW50cmluc2ljVGVybVBhc3MiLCJpbnRyaW5zaWNNZXRhdmFyaWFibGVQYXNzIiwiZ2VuZXJhbFN0YXRlbWVudCIsInNwZWNpZmljU3RhdGVtZW50IiwiZ2VuZXJhbFN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwiZ2VuZXJhbE5vZGUiLCJzcGVjaWZpY05vZGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUiLCJjb25zdHJ1Y3RvciIsInRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yIiwiY29uc3RydWN0b3JUZXJtIiwiZ2V0VGVybSIsImNvbnN0cnVjdG9yVGVybU5vZGUiLCJjb21iaW5hdG9yIiwic3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yIiwiY29tYmluYXRvclN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlIiwiZ2VuZXJhbFRlcm0iLCJzcGVjaWZpY1Rlcm0iLCJ0ZXJtVW5pZmllc0ludHJpbnNpY2FsbHkiLCJnZW5lcmFsVGVybU5vZGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBNmFnQkE7ZUFBQUE7O1FBNERBQztlQUFBQTs7UUE1RUFDO2VBQUFBOztRQTZDQUM7ZUFBQUE7O1FBZUFDO2VBQUFBOztRQTlCQUM7ZUFBQUE7OztnQ0F6YnVDOzREQUVuQzt5QkFFTTsrQkFDcUM7eUJBQ2tCOzs7Ozs7QUFFakYsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsOEJBQWM7QUFFcEMsTUFBTUMsZ0JBQWdCRixVQUFVLFVBQzFCRyxnQkFBZ0JILFVBQVUsVUFDMUJJLGlCQUFpQkosVUFBVSxXQUMzQkssb0JBQW9CTCxVQUFVLGNBQzlCTSxxQkFBcUJOLFVBQVUsZUFDL0JPLHFCQUFxQlAsVUFBVSxlQUMvQlEsd0JBQXdCUixVQUFVLG9CQUNsQ1MsNkJBQTZCVCxVQUFVLHlCQUN2Q1UsaUNBQWlDVixVQUFVLDZCQUMzQ1cs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