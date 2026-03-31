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
class IntrinsicLevelPass extends _zip.default {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3VuaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBxdWVyeVV0aWxpdGllcywgWmlwUGFzcyBhcyBaaXBQYXNzQmFzZSB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IFppcFBhc3MgZnJvbSBcIi4uL3Bhc3MvemlwXCI7XG5cbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FLCBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtTm9kZSwgZnJhbWVGcm9tRnJhbWVOb2RlLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IG5vZGVRdWVyeSB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKSxcbiAgICAgIHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lXCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVR5cGVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50XCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZVwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcmVmZXJlbmNlL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fzc3VtcHRpb24vbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsUGFzcyBleHRlbmRzIFppcFBhc3NCYXNlIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogYXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbEFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICByZWZlcmVuY2UsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlO1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgICByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VVbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlO1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLmdldFBhcmVudE5vZGUoKTtcblxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gbWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGU7IC8vL1xuXG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnN0aXR1dGlvbk5vZGUoKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAvLy9cblxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljRnJhbWVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgZnJhbWVOb2RlID0gc3BlY2lmaWNGcmFtZU5vZGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbEZyYW1lTWV0YXZhcmlhYmxlTm9kZTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgICAgIGZyYW1lVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeUZyYW1lKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBnZW5lcmFsVGVybVZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgdGVybVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIEFzc3VtcHRpb25QYXNzIGV4dGVuZHMgWmlwUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IG51bGwsXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IG1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiByZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNSZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICByZWZlcmVuY2UsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlO1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxNZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHNwZWNpZmljUmVmZXJlbmNlTWV0YXZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgICAgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZVVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlSZWZlcmVuY2UocmVmZXJlbmNlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAocmVmZXJlbmNlVW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBDb21iaW5hdG9yUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBtZXRhVHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsTWV0YVR5cGVOb2RlLCBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZXRhVHlwZU5vZGUgPSBnZW5lcmFsTWV0YVR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOb2RlLmdldE1ldGFUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICBtZXRhVHlwZU5hbWVTdGF0ZW1lbnRNZXRhVHlwZU5hbWUgPSAobWV0YVR5cGVOYW1lID09PSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUpO1xuXG4gICAgICAgIGlmIChtZXRhVHlwZU5hbWVTdGF0ZW1lbnRNZXRhVHlwZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgICAgbGV0IHN0YXRlbWVudDtcblxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpOyAgLy8vXG5cbiAgICAgICAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IG1ldGFUeXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IGZyYW1lTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbE1ldGFUeXBlTm9kZSwgc3BlY2lmaWNGcmFtZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZXRhVHlwZU5vZGUgPSBnZW5lcmFsTWV0YVR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOb2RlLmdldE1ldGFUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICBtZXRhVHlwZU5hbWVGcmFtZU1ldGFUeXBlTmFtZSA9IChtZXRhVHlwZU5hbWUgPT09IEZSQU1FX01FVEFfVFlQRV9OQU1FKTtcblxuICAgICAgICBpZiAobWV0YVR5cGVOYW1lRnJhbWVNZXRhVHlwZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgZnJhbWVOb2RlID0gc3BlY2lmaWNGcmFtZU5vZGU7ICAvLy9cblxuICAgICAgICAgIGxldCBmcmFtZTtcblxuICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBmcmFtZSA9IGZyYW1lLnZhbGlkYXRlKGNvbnRleHQpOyAgLy8vXG5cbiAgICAgICAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFR5cGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdHlwZU5vZGUgPSBnZW5lcmFsVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgbGV0IHRlcm07XG5cbiAgICAgICAgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHRlcm0gPSB0ZXJtLnZhbGlkYXRlR2l2ZW5UeXBlKHR5cGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIENvbnN0cnVjdG9yUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVHlwZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IGdlbmVyYWxUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgICAgbGV0IHRlcm07XG5cbiAgICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICB0ZXJtID0gdGVybS52YWxpZGF0ZUdpdmVuVHlwZSh0eXBlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIE1ldGF2YXJpYWJsZVBhc3MgZXh0ZW5kcyBaaXBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFR5cGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29uc3QgdHlwZU5vZGUgPSBnZW5lcmFsVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKTtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIFN1YnN0aXR1dGlvblBhc3MgZXh0ZW5kcyBaaXBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZnJhbWVOb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0ZyYW1lTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IHNwZWNpZmljRnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgICAgIGZyYW1lVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeUZyYW1lKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBnZW5lcmFsVGVybVZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgdGVybVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIEludHJpbnNpY0xldmVsUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGU7IC8vL1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgICAgIHRlcm1VbmlmaWVzID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBtZXRhTGV2ZWxQYXNzID0gbmV3IE1ldGFMZXZlbFBhc3MoKSxcbiAgICAgIGFzc3VtcHRpb25QYXNzID0gbmV3IEFzc3VtcHRpb25QYXNzKCksXG4gICAgICBjb21iaW5hdG9yUGFzcyA9IG5ldyBDb21iaW5hdG9yUGFzcygpLFxuICAgICAgY29uc3RydWN0b3JQYXNzID0gbmV3IENvbnN0cnVjdG9yUGFzcygpLFxuICAgICAgbWV0YXZhcmlhYmxlUGFzcyA9IG5ldyBNZXRhdmFyaWFibGVQYXNzKCksXG4gICAgICBzdWJzdGl0dXRpb25QYXNzID0gbmV3IFN1YnN0aXR1dGlvblBhc3MoKSxcbiAgICAgIGludHJpbnNpY0xldmVsUGFzcyA9IG5ldyBJbnRyaW5zaWNMZXZlbFBhc3MoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3QgZ2VuZXJhbFN0YXRlbWVudE5vZGUgPSBnZW5lcmFsU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgIHN1Y2Nlc3MgPSBtZXRhTGV2ZWxQYXNzLnJ1bihnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeUFzc3VtcHRpb24oZ2VuZXJhbEFzc3VtcHRpb24sIHNwZWNpZmljQXNzdW1wdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgYXNzdW1wdGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsQXNzdW1wdGlvbk5vZGUgPSBnZW5lcmFsQXNzdW1wdGlvbi5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljQXNzdW1wdGlvbk5vZGUgPSBzcGVjaWZpY0Fzc3VtcHRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxBc3N1bXB0aW9uTm9kZSwgLy8vXG4gICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljQXNzdW1wdGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3VjY2VzcyA9IGFzc3VtcHRpb25QYXNzLnJ1bihnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIGFzc3VtcHRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhc3N1bXB0aW9uVW5pZmllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5U3Vic3RpdHV0aW9uKGdlbmVyYWxTdWJzdGl0dXRpb24sIHNwZWNpZmljU3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBzdWJzdGl0dXRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbk5vZGUgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25Ob2RlID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxTdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNTdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgIHN1Y2Nlc3MgPSBzdWJzdGl0dXRpb25QYXNzLnJ1bihnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHN1YnN0aXR1dGlvblVuaWZpZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvblVuaWZpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeU1ldGF2YXJpYWJsZShnZW5lcmFsTWV0YXZhcmlhYmxlLCBzcGVjaWZpY01ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgbWV0YXZhcmlhYmxlVW5pZmllcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlTm9kZSA9IHNwZWNpZmljTWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgc3VjY2VzcyA9IG1ldGF2YXJpYWJsZVBhc3MucnVuKGdlbmVyYWxNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3Rvcih0ZXJtLCBjb25zdHJ1Y3RvciwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgdGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IgPSBmYWxzZTtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICBjb25zdHJ1Y3RvclRlcm0gPSBjb25zdHJ1Y3Rvci5nZXRUZXJtKCksXG4gICAgICAgIGNvbnN0cnVjdG9yVGVybU5vZGUgPSBjb25zdHJ1Y3RvclRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICBzdWNjZXNzID0gY29uc3RydWN0b3JQYXNzLnJ1bihjb25zdHJ1Y3RvclRlcm1Ob2RlLCB0ZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gdGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yKHN0YXRlbWVudCwgY29tYmluYXRvciwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yID0gZmFsc2U7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIGNvbWJpbmF0b3JTdGF0ZW1lbnQgPSBjb21iaW5hdG9yLmdldFN0YXRlbWVudCgpLFxuICAgICAgICBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3JTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBzdWNjZXNzID0gY29tYmluYXRvclBhc3MucnVuKGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCBzdGF0ZW1lbnROb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5KGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IGZhbHNlO1xuXG4gIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlTm9kZSA9IHNwZWNpZmljTWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljTWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgIHN1Y2Nlc3MgPSBpbnRyaW5zaWNMZXZlbFBhc3MucnVuKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5O1xufVxuIl0sIm5hbWVzIjpbInVuaWZ5QXNzdW1wdGlvbiIsInVuaWZ5TWV0YXZhcmlhYmxlIiwidW5pZnlNZXRhdmFyaWFibGVJbnRyaW5zaWNhbGx5IiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yIiwidW5pZnlTdWJzdGl0dXRpb24iLCJ1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IiLCJub2RlUXVlcnkiLCJxdWVyeVV0aWxpdGllcyIsInR5cGVOb2RlUXVlcnkiLCJ0ZXJtTm9kZVF1ZXJ5IiwiZnJhbWVOb2RlUXVlcnkiLCJtZXRhVHlwZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiYXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIk1ldGFMZXZlbFBhc3MiLCJaaXBQYXNzQmFzZSIsIm1hcHMiLCJnZW5lcmFsTm9kZVF1ZXJ5Iiwic3BlY2lmaWNOb2RlUXVlcnkiLCJydW4iLCJnZW5lcmFsQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdWNjZXNzIiwiY29udGV4dCIsInJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlVW5pZmllcyIsInVuaWZ5UmVmZXJlbmNlIiwiZ2VuZXJhbFN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY1N0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVQYXJlbnROb2RlIiwiZ2V0UGFyZW50Tm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInN0YXRlbWVudCIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiZ2VuZXJhbEZyYW1lTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljRnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwiZnJhbWUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lVW5pZmllcyIsInVuaWZ5RnJhbWUiLCJnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSIsInNwZWNpZmljVGVybU5vZGUiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ0ZXJtIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybVVuaWZpZXMiLCJ1bmlmeVRlcm0iLCJBc3N1bXB0aW9uUGFzcyIsIlppcFBhc3MiLCJnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljUmVmZXJlbmNlTWV0YXZhcmlhYmxlTm9kZSIsIkNvbWJpbmF0b3JQYXNzIiwiZ2VuZXJhbE1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlTmFtZSIsImdldE1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZVN0YXRlbWVudE1ldGFUeXBlTmFtZSIsIlNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlIiwidmFsaWRhdGUiLCJtZXRhVHlwZU5hbWVGcmFtZU1ldGFUeXBlTmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiZnJhbWVGcm9tRnJhbWVOb2RlIiwiZ2VuZXJhbFR5cGVOb2RlIiwidHlwZU5vZGUiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInRlcm1Gcm9tVGVybU5vZGUiLCJ2YWxpZGF0ZUdpdmVuVHlwZSIsIkNvbnN0cnVjdG9yUGFzcyIsIk1ldGF2YXJpYWJsZVBhc3MiLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJ0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsIlN1YnN0aXR1dGlvblBhc3MiLCJJbnRyaW5zaWNMZXZlbFBhc3MiLCJtZXRhTGV2ZWxQYXNzIiwiYXNzdW1wdGlvblBhc3MiLCJjb21iaW5hdG9yUGFzcyIsImNvbnN0cnVjdG9yUGFzcyIsIm1ldGF2YXJpYWJsZVBhc3MiLCJzdWJzdGl0dXRpb25QYXNzIiwiaW50cmluc2ljTGV2ZWxQYXNzIiwiZ2VuZXJhbFN0YXRlbWVudCIsInNwZWNpZmljU3RhdGVtZW50IiwiZ2VuZXJhbFN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwiZ2VuZXJhbE5vZGUiLCJzcGVjaWZpY05vZGUiLCJnZW5lcmFsQXNzdW1wdGlvbiIsInNwZWNpZmljQXNzdW1wdGlvbiIsImFzc3VtcHRpb25VbmlmaWVzIiwiZ2VuZXJhbEFzc3VtcHRpb25Ob2RlIiwic3BlY2lmaWNBc3N1bXB0aW9uTm9kZSIsImdlbmVyYWxTdWJzdGl0dXRpb24iLCJzcGVjaWZpY1N1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblVuaWZpZXMiLCJnZW5lcmFsU3Vic3RpdHV0aW9uTm9kZSIsInNwZWNpZmljU3Vic3RpdHV0aW9uTm9kZSIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXMiLCJzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUiLCJjb25zdHJ1Y3RvciIsInRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yIiwiY29uc3RydWN0b3JUZXJtIiwiZ2V0VGVybSIsImNvbnN0cnVjdG9yVGVybU5vZGUiLCJjb21iaW5hdG9yIiwic3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yIiwiY29tYmluYXRvclN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQWdmZ0JBO2VBQUFBOztRQWdDQUM7ZUFBQUE7O1FBNENBQztlQUFBQTs7UUE1RkFDO2VBQUFBOztRQTZFQUM7ZUFBQUE7O1FBN0NBQztlQUFBQTs7UUE4QkFDO2VBQUFBOzs7Z0NBNWhCdUM7NERBRW5DOytCQUUyQzt5QkFDa0I7Ozs7OztBQUVqRixNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyw4QkFBYztBQUVwQyxNQUFNQyxnQkFBZ0JGLFVBQVUsVUFDMUJHLGdCQUFnQkgsVUFBVSxVQUMxQkksaUJBQWlCSixVQUFVLFdBQzNCSyxvQkFBb0JMLFVBQVUsY0FDOUJNLHFCQUFxQk4sVUFBVSxlQUMv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