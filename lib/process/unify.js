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
                const metavariableNode = generalStatementMetavariableNode, metavariableName = metavariableNode.getMetavariableName(), metavariable = context.findMetavariableByMetavariableName(metavariableName), metavariableNodeParentNode = metavariableNode.getParentNode();
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
                const frameNode = specificFrameNode, metavariableNode = generalFrameMetavariableNode, metavariableName = metavariableNode.getMetavariableName();
                let context;
                context = generalContext; ///
                const metavariable = context.findMetavariableByMetavariableName(metavariableName);
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
                const statementNode = specificStatementNode, metavariableNode = generalStatementMetavariableNode, metavariableName = metavariableNode.getMetavariableName();
                let context;
                context = generalContext; ///
                const metavariable = context.findMetavariableByMetavariableName(metavariableName);
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
                const frameNode = specificFrameNode, metavariableNode = generalFrameMetavariableNode, metavariableName = metavariableNode.getMetavariableName();
                let context;
                context = generalContext; ///
                const metavariable = context.findMetavariableByMetavariableName(metavariableName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3VuaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBxdWVyeVV0aWxpdGllcywgWmlwUGFzcyBhcyBaaXBQYXNzQmFzZSB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IFppcFBhc3MgZnJvbSBcIi4uL3Bhc3MvemlwXCI7XG5cbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FLCBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtTm9kZSwgZnJhbWVGcm9tRnJhbWVOb2RlLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IG5vZGVRdWVyeSB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKSxcbiAgICAgIHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lXCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVR5cGVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50XCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZVwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcmVmZXJlbmNlL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fzc3VtcHRpb24vbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsUGFzcyBleHRlbmRzIFppcFBhc3NCYXNlIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogYXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbEFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICByZWZlcmVuY2UsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlO1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgICByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VVbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlO1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlUGFyZW50Tm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xuXG4gICAgICAgIHN0YXRlbWVudE5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUGFyZW50Tm9kZTsgLy8vXG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3Vic3RpdHV0aW9uTm9kZSgpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSAoc3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7IC8vL1xuXG4gICAgICAgIHN0YXRlbWVudE5vZGUgPSBzcGVjaWZpY1N0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IGZyYW1lTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbEZyYW1lTWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNGcmFtZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBmcmFtZU5vZGUgPSBzcGVjaWZpY0ZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgICAgIGZyYW1lVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeUZyYW1lKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgICB0ZXJtVW5pZmllcyA9IHZhcmlhYmxlLnVuaWZ5VGVybSh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgQXNzdW1wdGlvblBhc3MgZXh0ZW5kcyBaaXBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBudWxsLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBtZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogcmVmZXJlbmNlTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljUmVmZXJlbmNlTWV0YXZhcmlhYmxlTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGxldCBjb250ZXh0LFxuICAgICAgICAgICAgcmVmZXJlbmNlLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZTtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY1JlZmVyZW5jZU1ldGF2YXJpYWJsZU5vZGU7IC8vL1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBjb25zdCByZWZlcmVuY2VVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgQ29tYmluYXRvclBhc3MgZXh0ZW5kcyBaaXBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogbWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbE1ldGFUeXBlTm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YVR5cGVOb2RlID0gZ2VuZXJhbE1ldGFUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlTm9kZS5nZXRNZXRhVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgbWV0YVR5cGVOYW1lU3RhdGVtZW50TWV0YVR5cGVOYW1lID0gKG1ldGFUeXBlTmFtZSA9PT0gU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FKTtcblxuICAgICAgICBpZiAobWV0YVR5cGVOYW1lU3RhdGVtZW50TWV0YVR5cGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzcGVjaWZpY1N0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgICAgIGxldCBzdGF0ZW1lbnQ7XG5cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTsgIC8vL1xuXG4gICAgICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBtZXRhVHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxNZXRhVHlwZU5vZGUsIHNwZWNpZmljRnJhbWVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YVR5cGVOb2RlID0gZ2VuZXJhbE1ldGFUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlTm9kZS5nZXRNZXRhVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgbWV0YVR5cGVOYW1lRnJhbWVNZXRhVHlwZU5hbWUgPSAobWV0YVR5cGVOYW1lID09PSBGUkFNRV9NRVRBX1RZUEVfTkFNRSk7XG5cbiAgICAgICAgaWYgKG1ldGFUeXBlTmFtZUZyYW1lTWV0YVR5cGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIGZyYW1lTm9kZSA9IHNwZWNpZmljRnJhbWVOb2RlOyAgLy8vXG5cbiAgICAgICAgICBsZXQgZnJhbWU7XG5cbiAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgZnJhbWUgPSBmcmFtZS52YWxpZGF0ZShjb250ZXh0KTsgIC8vL1xuXG4gICAgICAgICAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxUeXBlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gZ2VuZXJhbFR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGxldCB0ZXJtO1xuXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtID0gdGVybS52YWxpZGF0ZUdpdmVuVHlwZSh0eXBlLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBDb25zdHJ1Y3RvclBhc3MgZXh0ZW5kcyBaaXBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFR5cGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdHlwZU5vZGUgPSBnZW5lcmFsVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICAgIGxldCB0ZXJtO1xuXG4gICAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgdGVybSA9IHRlcm0udmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBNZXRhdmFyaWFibGVQYXNzIGV4dGVuZHMgWmlwUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxUeXBlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gZ2VuZXJhbFR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIHR5cGUgPSBnZW5lcmFsQ29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSksXG4gICAgICAgICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsIC8vL1xuICAgICAgICAgICAgICB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIFN1YnN0aXR1dGlvblBhc3MgZXh0ZW5kcyBaaXBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZnJhbWVOb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0ZyYW1lTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IHNwZWNpZmljRnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICAgICAgZnJhbWVVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5RnJhbWUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChmcmFtZVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgICAgIHRlcm1VbmlmaWVzID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBJbnRyaW5zaWNMZXZlbFBhc3MgZXh0ZW5kcyBaaXBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgICAgIHRlcm1VbmlmaWVzID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBtZXRhTGV2ZWxQYXNzID0gbmV3IE1ldGFMZXZlbFBhc3MoKSxcbiAgICAgIGFzc3VtcHRpb25QYXNzID0gbmV3IEFzc3VtcHRpb25QYXNzKCksXG4gICAgICBjb21iaW5hdG9yUGFzcyA9IG5ldyBDb21iaW5hdG9yUGFzcygpLFxuICAgICAgY29uc3RydWN0b3JQYXNzID0gbmV3IENvbnN0cnVjdG9yUGFzcygpLFxuICAgICAgbWV0YXZhcmlhYmxlUGFzcyA9IG5ldyBNZXRhdmFyaWFibGVQYXNzKCksXG4gICAgICBzdWJzdGl0dXRpb25QYXNzID0gbmV3IFN1YnN0aXR1dGlvblBhc3MoKSxcbiAgICAgIGludHJpbnNpY0xldmVsUGFzcyA9IG5ldyBJbnRyaW5zaWNMZXZlbFBhc3MoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3QgZ2VuZXJhbFN0YXRlbWVudE5vZGUgPSBnZW5lcmFsU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgIHN1Y2Nlc3MgPSBtZXRhTGV2ZWxQYXNzLnJ1bihnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeUFzc3VtcHRpb24oZ2VuZXJhbEFzc3VtcHRpb24sIHNwZWNpZmljQXNzdW1wdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgYXNzdW1wdGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsQXNzdW1wdGlvbk5vZGUgPSBnZW5lcmFsQXNzdW1wdGlvbi5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljQXNzdW1wdGlvbk5vZGUgPSBzcGVjaWZpY0Fzc3VtcHRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxBc3N1bXB0aW9uTm9kZSwgLy8vXG4gICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljQXNzdW1wdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3VjY2VzcyA9IGFzc3VtcHRpb25QYXNzLnJ1bihnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIGFzc3VtcHRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhc3N1bXB0aW9uVW5pZmllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5U3Vic3RpdHV0aW9uKGdlbmVyYWxTdWJzdGl0dXRpb24sIHNwZWNpZmljU3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBzdWJzdGl0dXRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbk5vZGUgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldE5vZGUoKSxcbiAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbk5vZGUgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsU3Vic3RpdHV0aW9uTm9kZSwgLy8vXG4gICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgc3VjY2VzcyA9IHN1YnN0aXR1dGlvblBhc3MucnVuKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgc3Vic3RpdHV0aW9uVW5pZmllcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5TWV0YXZhcmlhYmxlKGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBzdWNjZXNzID0gbWV0YXZhcmlhYmxlUGFzcy5ydW4oZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yKHRlcm0sIGNvbnN0cnVjdG9yLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgIGNvbnN0cnVjdG9yVGVybSA9IGNvbnN0cnVjdG9yLmdldFRlcm0oKSxcbiAgICAgICAgY29uc3RydWN0b3JUZXJtTm9kZSA9IGNvbnN0cnVjdG9yVGVybS5nZXROb2RlKCksXG4gICAgICAgIHN1Y2Nlc3MgPSBjb25zdHJ1Y3RvclBhc3MucnVuKGNvbnN0cnVjdG9yVGVybU5vZGUsIHRlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3Ioc3RhdGVtZW50LCBjb21iaW5hdG9yLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3IgPSBmYWxzZTtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgY29tYmluYXRvclN0YXRlbWVudCA9IGNvbWJpbmF0b3IuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgIGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlID0gY29tYmluYXRvclN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIHN1Y2Nlc3MgPSBjb21iaW5hdG9yUGFzcy5ydW4oY29tYmluYXRvclN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gZmFsc2U7XG5cbiAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgc3VjY2VzcyA9IGludHJpbnNpY0xldmVsUGFzcy5ydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7XG59XG4iXSwibmFtZXMiOlsidW5pZnlBc3N1bXB0aW9uIiwidW5pZnlNZXRhdmFyaWFibGUiLCJ1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3IiLCJ1bmlmeVN1YnN0aXR1dGlvbiIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciIsIm5vZGVRdWVyeSIsInF1ZXJ5VXRpbGl0aWVzIiwidHlwZU5vZGVRdWVyeSIsInRlcm1Ob2RlUXVlcnkiLCJmcmFtZU5vZGVRdWVyeSIsIm1ldGFUeXBlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5IiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YUxldmVsUGFzcyIsIlppcFBhc3NCYXNlIiwibWFwcyIsImdlbmVyYWxOb2RlUXVlcnkiLCJzcGVjaWZpY05vZGVRdWVyeSIsInJ1biIsImdlbmVyYWxBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1Y2Nlc3MiLCJjb250ZXh0IiwicmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlTm9kZSIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VVbmlmaWVzIiwidW5pZnlSZWZlcmVuY2UiLCJnZW5lcmFsU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOb2RlUGFyZW50Tm9kZSIsImdldFBhcmVudE5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwiZ2V0U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUiLCJzdGF0ZW1lbnQiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VW5pZmllcyIsImdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY0ZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmcmFtZVVuaWZpZXMiLCJ1bmlmeUZyYW1lIiwiZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUiLCJzcGVjaWZpY1Rlcm1Ob2RlIiwidGVybU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidGVybSIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1VbmlmaWVzIiwidW5pZnlUZXJtIiwiQXNzdW1wdGlvblBhc3MiLCJaaXBQYXNzIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY1JlZmVyZW5jZU1ldGF2YXJpYWJsZU5vZGUiLCJDb21iaW5hdG9yUGFzcyIsImdlbmVyYWxNZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5hbWUiLCJnZXRNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWVTdGF0ZW1lbnRNZXRhVHlwZU5hbWUiLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInZhbGlkYXRlIiwibWV0YVR5cGVOYW1lRnJhbWVNZXRhVHlwZU5hbWUiLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsImZyYW1lRnJvbUZyYW1lTm9kZSIsImdlbmVyYWxUeXBlTm9kZSIsInR5cGVOb2RlIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidmFsaWRhdGVHaXZlblR5cGUiLCJDb25zdHJ1Y3RvclBhc3MiLCJNZXRhdmFyaWFibGVQYXNzIiwidGVybVR5cGUiLCJnZXRUeXBlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJTdWJzdGl0dXRpb25QYXNzIiwiSW50cmluc2ljTGV2ZWxQYXNzIiwibWV0YUxldmVsUGFzcyIsImFzc3VtcHRpb25QYXNzIiwiY29tYmluYXRvclBhc3MiLCJjb25zdHJ1Y3RvclBhc3MiLCJtZXRhdmFyaWFibGVQYXNzIiwic3Vic3RpdHV0aW9uUGFzcyIsImludHJpbnNpY0xldmVsUGFzcyIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnROb2RlIiwiZ2V0Tm9kZSIsImdlbmVyYWxOb2RlIiwic3BlY2lmaWNOb2RlIiwiZ2VuZXJhbEFzc3VtcHRpb24iLCJzcGVjaWZpY0Fzc3VtcHRpb24iLCJhc3N1bXB0aW9uVW5pZmllcyIsImdlbmVyYWxBc3N1bXB0aW9uTm9kZSIsInNwZWNpZmljQXNzdW1wdGlvbk5vZGUiLCJnZW5lcmFsU3Vic3RpdHV0aW9uIiwic3BlY2lmaWNTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVzIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbk5vZGUiLCJzcGVjaWZpY1N1YnN0aXR1dGlvbk5vZGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwic3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlIiwiY29uc3RydWN0b3IiLCJ0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yVGVybSIsImdldFRlcm0iLCJjb25zdHJ1Y3RvclRlcm1Ob2RlIiwiY29tYmluYXRvciIsInN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciIsImNvbWJpbmF0b3JTdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFnZmdCQTtlQUFBQTs7UUFnQ0FDO2VBQUFBOztRQTRDQUM7ZUFBQUE7O1FBNUZBQztlQUFBQTs7UUE2RUFDO2VBQUFBOztRQTdDQUM7ZUFBQUE7O1FBOEJBQztlQUFBQTs7O2dDQTVoQnVDOzREQUVuQzsrQkFFMkM7eUJBQ2tCOzs7Ozs7QUFFakYsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsOEJBQWM7QUFFcEMsTUFBTUMsZ0JBQWdCRixVQUFVLFVBQzFCRyxnQkFBZ0JILFVBQVUsVUFDMUJJLGlCQUFpQkosVUFBVSxXQUMzQkssb0JBQW9CTCxVQUFVLGNBQzlCTSxxQkFBcUJOLFVBQVUsZUFDL0JPLHdCQUF3QlAsVUFBVSxrQkFDbENRLHdCQUF3QlIsVUFBVSxvQkFDbENTLDZCQUE2QlQsVUFBVSx5QkFDdkNVLGlDQUFpQ1YsVUFBVSw2QkFDM0NXLGlDQUFpQ1gsVUFBVSw2QkFDM0NZLGtDQUFrQ1osVUFBVTtBQUVsRCxNQUFNYSxzQkFBc0JDLHVCQUFXO0lBQ3JDLE9BQU9DLE9BQU87UUFDWjtZQUNFQyxrQkFBa0JKO1lBQ2xCSyxtQkFBbUJMO1lBQ25CTSxLQUFLLENBQUNDLG1DQUFtQ0Msb0NBQW9DQyxnQkFBZ0JDO2dCQUMzRixJQUFJQyxVQUFVO2dCQUVkLElBQUlDLFNBQ0FDLFdBQ0FDO2dCQUVKRixVQUFVSCxnQkFBZ0IsR0FBRztnQkFFN0JLLG1CQUFtQlAs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