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
    get unifyAssumption () {
        return unifyAssumption;
    },
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
const typeNodeQuery = nodeQuery("/type"), termNodeQuery = nodeQuery("/term"), frameNodeQuery = nodeQuery("/frame"), metaTypeNodeQuery = nodeQuery("/metaType"), statementNodeQuery = nodeQuery("/statement"), metavariableNodeQuery = nodeQuery("/metavariable"), termVariableNodeQuery = nodeQuery("/term/variable!"), frameMetavariableNodeQuery = nodeQuery("/frame/metavariable!"), referenceMetavariableNodeQuery = nodeQuery("/reference/metavariable!"), statementMetavariableNodeQuery = nodeQuery("/statement/metavariable!"), assumptionMetavariableNodeQuery = nodeQuery("/assumption/metavariable!");
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
                const termNode = specificTermNode, variableNode = generalTermVariableNode, variableIdentifier = variableNode.getVariableIdentifier();
                let context;
                context = generalContext; ///
                const variable = context.findVariableByVariableIdentifier(variableIdentifier);
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
class AssumptionPass extends _zip.default {
    static maps = [
        {
            generalNodeQuery: statementMetavariableNodeQuery,
            specificNodeQuery: statementNodeQuery,
            run: (generalStatementMetavariableNode, specificStatementNode, generalContext, specificContext)=>{
                let success = false;
                const statementNode = specificStatementNode, metavariableNode = generalStatementMetavariableNode; ///
                let context;
                context = generalContext; ///
                const metavariable = context.findMetavariableByMetavariableNode(metavariableNode);
                context = specificContext; ///
                const statement = context.findStatementByStatementNode(statementNode), substitution = null, statementUnifies = metavariable.unifyStatement(statement, substitution, generalContext, specificContext);
                if (statementUnifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            generalNodeQuery: metavariableNodeQuery,
            specificNodeQuery: referenceMetavariableNodeQuery,
            run: (generalMetavariableNode, specificReferenceMetavariableNode, generalContext, specificContext)=>{
                let success = false;
                let context, reference, metavariableNode;
                context = generalContext; ///
                metavariableNode = generalMetavariableNode; ///
                reference = context.findReferenceByMetavariableNode(metavariableNode);
                const metavariable = reference.getMetavariable();
                context = specificContext; ///
                metavariableNode = specificReferenceMetavariableNode; ///
                reference = context.findReferenceByMetavariableNode(metavariableNode);
                const referenceUnifies = metavariable.unifyReference(reference, generalContext, specificContext);
                if (referenceUnifies) {
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
                const typeNode = generalTypeNode, termNode = specificTermNode, nominalTypeName = typeNode.getNominalTypeName(), type = generalContext.findTypeByNominalTypeName(nominalTypeName), context = specificContext, term = context.findTermByTermNode(termNode), termType = term.getType(), termTypeEqualToOrSubTypeOfGivenTypeType = termType.isEqualToOrSubTypeOf(type);
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
                const termNode = specificTermNode, variableNode = generalTermVariableNode, variableIdentifier = variableNode.getVariableIdentifier();
                let context;
                context = generalContext; ///
                const variable = context.findVariableByVariableIdentifier(variableIdentifier);
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
class IntrinsicLevelPass extends _zip.default {
    static maps = [
        {
            generalNodeQuery: termVariableNodeQuery,
            specificNodeQuery: termNodeQuery,
            run: (generalTermVariableNode, specificTermNode, generalContext, specificContext)=>{
                let success = false;
                const termNode = specificTermNode, variableNode = generalTermVariableNode, variableIdentifier = variableNode.getVariableIdentifier();
                let context;
                context = generalContext; ///
                const variable = context.findVariableByVariableIdentifier(variableIdentifier);
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
const metaLevelPass = new MetaLevelPass(), assumptionPass = new AssumptionPass(), combinatorPass = new CombinatorPass(), constructorPass = new ConstructorPass(), metavariablePass = new MetavariablePass(), substitutionPass = new SubstitutionPass(), intrinsicLevelPass = new IntrinsicLevelPass();
function unifyStatement(generalStatement, specificStatement, generalContext, specificContext) {
    let statementUnifies = false;
    const generalStatementNode = generalStatement.getNode(), specificStatementNode = specificStatement.getNode(), generalNode = generalStatementNode, specificNode = specificStatementNode, success = metaLevelPass.run(generalNode, specificNode, generalContext, specificContext);
    if (success) {
        statementUnifies = true;
    }
    return statementUnifies;
}
function unifyAssumption(generalAssumption, specificAssumption, generalContext, specificContext) {
    let assumptionUnifies = false;
    const generalAssumptionNode = generalAssumption.getNode(), specificAssumptionNode = specificAssumption.getNode(), generalNode = generalAssumptionNode, specificNode = specificAssumptionNode, success = assumptionPass.run(generalNode, specificNode, generalContext, specificContext);
    if (success) {
        assumptionUnifies = true;
    }
    return assumptionUnifies;
}
function unifySubstitution(generalSubstitution, specificSubstitution, generalContext, specificContext) {
    let substitutionUnifies = false;
    const generalSubstitutionNode = generalSubstitution.getNode(), specificSubstitutionNode = specificSubstitution.getNode(), generalNode = generalSubstitutionNode, specificNode = specificSubstitutionNode, success = substitutionPass.run(generalNode, specificNode, generalContext, specificContext);
    if (success) {
        substitutionUnifies = true;
    }
    return substitutionUnifies;
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
function unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, generalContext, specificContext) {
    let metavariableUnifiesIntrinsically = false;
    const generalMetavariableNode = generalMetavariable.getNode(), specificMetavariableNode = specificMetavariable.getNode(), generalNode = generalMetavariableNode, specificNode = specificMetavariableNode, success = intrinsicLevelPass.run(generalNode, specificNode, generalContext, specificContext);
    if (success) {
        metavariableUnifiesIntrinsically = true;
    }
    return metavariableUnifiesIntrinsically;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3VuaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBxdWVyeVV0aWxpdGllcywgWmlwUGFzcyBhcyBaaXBQYXNzQmFzZSB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IFppcFBhc3MgZnJvbSBcIi4uL3Bhc3MvemlwXCI7XG5cbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FLCBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtTm9kZSwgZnJhbWVGcm9tRnJhbWVOb2RlLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IG5vZGVRdWVyeSB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKSxcbiAgICAgIHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lXCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVR5cGVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50XCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZVwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcmVmZXJlbmNlL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fzc3VtcHRpb24vbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsUGFzcyBleHRlbmRzIFppcFBhc3NCYXNlIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogYXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbEFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICByZWZlcmVuY2UsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlO1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgICByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VVbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlO1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLmdldFBhcmVudE5vZGUoKTtcblxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gbWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGU7IC8vL1xuXG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnN0aXR1dGlvbk5vZGUoKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAvLy9cblxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljRnJhbWVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgZnJhbWVOb2RlID0gc3BlY2lmaWNGcmFtZU5vZGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbEZyYW1lTWV0YXZhcmlhYmxlTm9kZTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgICAgIGZyYW1lVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeUZyYW1lKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgICB0ZXJtVW5pZmllcyA9IHZhcmlhYmxlLnVuaWZ5VGVybSh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgQXNzdW1wdGlvblBhc3MgZXh0ZW5kcyBaaXBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gbnVsbCxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHJlZmVyZW5jZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY1JlZmVyZW5jZU1ldGF2YXJpYWJsZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBsZXQgY29udGV4dCxcbiAgICAgICAgICAgIHJlZmVyZW5jZSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGU7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgICAgICByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gc3BlY2lmaWNSZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgICByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VVbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIENvbWJpbmF0b3JQYXNzIGV4dGVuZHMgWmlwUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IG1ldGFUeXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxNZXRhVHlwZU5vZGUsIHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG1ldGFUeXBlTm9kZSA9IGdlbmVyYWxNZXRhVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZU5vZGUuZ2V0TWV0YVR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIG1ldGFUeXBlTmFtZVN0YXRlbWVudE1ldGFUeXBlTmFtZSA9IChtZXRhVHlwZU5hbWUgPT09IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSk7XG5cbiAgICAgICAgaWYgKG1ldGFUeXBlTmFtZVN0YXRlbWVudE1ldGFUeXBlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgICBsZXQgc3RhdGVtZW50O1xuXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogbWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZnJhbWVOb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsTWV0YVR5cGVOb2RlLCBzcGVjaWZpY0ZyYW1lTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG1ldGFUeXBlTm9kZSA9IGdlbmVyYWxNZXRhVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZU5vZGUuZ2V0TWV0YVR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIG1ldGFUeXBlTmFtZUZyYW1lTWV0YVR5cGVOYW1lID0gKG1ldGFUeXBlTmFtZSA9PT0gRlJBTUVfTUVUQV9UWVBFX05BTUUpO1xuXG4gICAgICAgIGlmIChtZXRhVHlwZU5hbWVGcmFtZU1ldGFUeXBlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBzcGVjaWZpY0ZyYW1lTm9kZTsgIC8vL1xuXG4gICAgICAgICAgbGV0IGZyYW1lO1xuXG4gICAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGZyYW1lID0gZnJhbWUudmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgICAgICAgIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVHlwZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IGdlbmVyYWxUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBsZXQgdGVybTtcblxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgdGVybSA9IHRlcm0udmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgQ29uc3RydWN0b3JQYXNzIGV4dGVuZHMgWmlwUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxUeXBlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gZ2VuZXJhbFR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgICBsZXQgdGVybTtcblxuICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHRlcm0gPSB0ZXJtLnZhbGlkYXRlR2l2ZW5UeXBlKHR5cGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgTWV0YXZhcmlhYmxlUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVHlwZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IGdlbmVyYWxUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICB0eXBlID0gZ2VuZXJhbENvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpLFxuICAgICAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBTdWJzdGl0dXRpb25QYXNzIGV4dGVuZHMgWmlwUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IGZyYW1lTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbEZyYW1lTWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNGcmFtZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBmcmFtZU5vZGUgPSBzcGVjaWZpY0ZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgICAgICBmcmFtZVVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlGcmFtZShmcmFtZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgdGVybVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIEludHJpbnNpY0xldmVsUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgdGVybVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IG1ldGFMZXZlbFBhc3MgPSBuZXcgTWV0YUxldmVsUGFzcygpLFxuICAgICAgYXNzdW1wdGlvblBhc3MgPSBuZXcgQXNzdW1wdGlvblBhc3MoKSxcbiAgICAgIGNvbWJpbmF0b3JQYXNzID0gbmV3IENvbWJpbmF0b3JQYXNzKCksXG4gICAgICBjb25zdHJ1Y3RvclBhc3MgPSBuZXcgQ29uc3RydWN0b3JQYXNzKCksXG4gICAgICBtZXRhdmFyaWFibGVQYXNzID0gbmV3IE1ldGF2YXJpYWJsZVBhc3MoKSxcbiAgICAgIHN1YnN0aXR1dGlvblBhc3MgPSBuZXcgU3Vic3RpdHV0aW9uUGFzcygpLFxuICAgICAgaW50cmluc2ljTGV2ZWxQYXNzID0gbmV3IEludHJpbnNpY0xldmVsUGFzcygpO1xuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnQoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXMgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsU3RhdGVtZW50Tm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBzcGVjaWZpY1N0YXRlbWVudE5vZGUgPSBzcGVjaWZpY1N0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbFN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY1N0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgc3VjY2VzcyA9IG1ldGFMZXZlbFBhc3MucnVuKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5QXNzdW1wdGlvbihnZW5lcmFsQXNzdW1wdGlvbiwgc3BlY2lmaWNBc3N1bXB0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBhc3N1bXB0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGdlbmVyYWxBc3N1bXB0aW9uTm9kZSA9IGdlbmVyYWxBc3N1bXB0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgc3BlY2lmaWNBc3N1bXB0aW9uTm9kZSA9IHNwZWNpZmljQXNzdW1wdGlvbi5nZXROb2RlKCksXG4gICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbEFzc3VtcHRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNBc3N1bXB0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdWNjZXNzID0gYXNzdW1wdGlvblBhc3MucnVuKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgYXNzdW1wdGlvblVuaWZpZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGFzc3VtcHRpb25VbmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlTdWJzdGl0dXRpb24oZ2VuZXJhbFN1YnN0aXR1dGlvbiwgc3BlY2lmaWNTdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHN1YnN0aXR1dGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uTm9kZSA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uTm9kZSA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldE5vZGUoKSxcbiAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxTdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICBzdWNjZXNzID0gc3Vic3RpdHV0aW9uUGFzcy5ydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBzdWJzdGl0dXRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlNZXRhdmFyaWFibGUoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxNZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY01ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIHN1Y2Nlc3MgPSBtZXRhdmFyaWFibGVQYXNzLnJ1bihnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IodGVybSwgY29uc3RydWN0b3IsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yID0gZmFsc2U7XG5cbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgY29uc3RydWN0b3JUZXJtID0gY29uc3RydWN0b3IuZ2V0VGVybSgpLFxuICAgICAgICBjb25zdHJ1Y3RvclRlcm1Ob2RlID0gY29uc3RydWN0b3JUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgc3VjY2VzcyA9IGNvbnN0cnVjdG9yUGFzcy5ydW4oY29uc3RydWN0b3JUZXJtTm9kZSwgdGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgdGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvcihzdGF0ZW1lbnQsIGNvbWJpbmF0b3IsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBjb21iaW5hdG9yU3RhdGVtZW50ID0gY29tYmluYXRvci5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgY29tYmluYXRvclN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgc3VjY2VzcyA9IGNvbWJpbmF0b3JQYXNzLnJ1bihjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50Tm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3IgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxNZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY01ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICBzdWNjZXNzID0gaW50cmluc2ljTGV2ZWxQYXNzLnJ1bihnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseTtcbn1cbiJdLCJuYW1lcyI6WyJ1bmlmeUFzc3VtcHRpb24iLCJ1bmlmeU1ldGF2YXJpYWJsZSIsInVuaWZ5TWV0YXZhcmlhYmxlSW50cmluc2ljYWxseSIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvciIsInVuaWZ5U3Vic3RpdHV0aW9uIiwidW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yIiwibm9kZVF1ZXJ5IiwicXVlcnlVdGlsaXRpZXMiLCJ0eXBlTm9kZVF1ZXJ5IiwidGVybU5vZGVRdWVyeSIsImZyYW1lTm9kZVF1ZXJ5IiwibWV0YVR5cGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJNZXRhTGV2ZWxQYXNzIiwiWmlwUGFzc0Jhc2UiLCJtYXBzIiwiZ2VuZXJhbE5vZGVRdWVyeSIsInNwZWNpZmljTm9kZVF1ZXJ5IiwicnVuIiwiZ2VuZXJhbEFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VjY2VzcyIsImNvbnRleHQiLCJyZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVOb2RlIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsInJlZmVyZW5jZVVuaWZpZXMiLCJ1bmlmeVJlZmVyZW5jZSIsImdlbmVyYWxTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlUGFyZW50Tm9kZSIsImdldFBhcmVudE5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwiZ2V0U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUiLCJzdGF0ZW1lbnQiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VW5pZmllcyIsImdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY0ZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmcmFtZVVuaWZpZXMiLCJ1bmlmeUZyYW1lIiwiZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUiLCJzcGVjaWZpY1Rlcm1Ob2RlIiwidGVybU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidGVybSIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1VbmlmaWVzIiwidW5pZnlUZXJtIiwiQXNzdW1wdGlvblBhc3MiLCJaaXBQYXNzIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY1JlZmVyZW5jZU1ldGF2YXJpYWJsZU5vZGUiLCJDb21iaW5hdG9yUGFzcyIsImdlbmVyYWxNZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5hbWUiLCJnZXRNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWVTdGF0ZW1lbnRNZXRhVHlwZU5hbWUiLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInZhbGlkYXRlIiwibWV0YVR5cGVOYW1lRnJhbWVNZXRhVHlwZU5hbWUiLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsImZyYW1lRnJvbUZyYW1lTm9kZSIsImdlbmVyYWxUeXBlTm9kZSIsInR5cGVOb2RlIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidmFsaWRhdGVHaXZlblR5cGUiLCJDb25zdHJ1Y3RvclBhc3MiLCJNZXRhdmFyaWFibGVQYXNzIiwidGVybVR5cGUiLCJnZXRUeXBlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJTdWJzdGl0dXRpb25QYXNzIiwiSW50cmluc2ljTGV2ZWxQYXNzIiwibWV0YUxldmVsUGFzcyIsImFzc3VtcHRpb25QYXNzIiwiY29tYmluYXRvclBhc3MiLCJjb25zdHJ1Y3RvclBhc3MiLCJtZXRhdmFyaWFibGVQYXNzIiwic3Vic3RpdHV0aW9uUGFzcyIsImludHJpbnNpY0xldmVsUGFzcyIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnROb2RlIiwiZ2V0Tm9kZSIsImdlbmVyYWxOb2RlIiwic3BlY2lmaWNOb2RlIiwiZ2VuZXJhbEFzc3VtcHRpb24iLCJzcGVjaWZpY0Fzc3VtcHRpb24iLCJhc3N1bXB0aW9uVW5pZmllcyIsImdlbmVyYWxBc3N1bXB0aW9uTm9kZSIsInNwZWNpZmljQXNzdW1wdGlvbk5vZGUiLCJnZW5lcmFsU3Vic3RpdHV0aW9uIiwic3BlY2lmaWNTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVzIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbk5vZGUiLCJzcGVjaWZpY1N1YnN0aXR1dGlvbk5vZGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwic3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlIiwiY29uc3RydWN0b3IiLCJ0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yVGVybSIsImdldFRlcm0iLCJjb25zdHJ1Y3RvclRlcm1Ob2RlIiwiY29tYmluYXRvciIsInN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciIsImNvbWJpbmF0b3JTdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUE0ZWdCQTtlQUFBQTs7UUFnQ0FDO2VBQUFBOztRQTRDQUM7ZUFBQUE7O1FBNUZB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