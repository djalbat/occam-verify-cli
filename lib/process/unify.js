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
const metaLevelPass = new MetaLevelPass(), combinatorPass = new CombinatorPass(), constructorPass = new ConstructorPass(), metavariablePass = new MetavariablePass(), substitutionPass = new SubstitutionPass(), intrinsicLevelPass = new IntrinsicLevelPass();
function unifyStatement(generalStatement, specificStatement, generalContext, specificContext) {
    let statementUnifies = false;
    const generalStatementNode = generalStatement.getNode(), specificStatementNode = specificStatement.getNode(), generalNode = generalStatementNode, specificNode = specificStatementNode, success = metaLevelPass.run(generalNode, specificNode, generalContext, specificContext);
    if (success) {
        statementUnifies = true;
    }
    return statementUnifies;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3VuaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBxdWVyeVV0aWxpdGllcywgWmlwUGFzcyBhcyBaaXBQYXNzQmFzZSB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IFppcFBhc3MgZnJvbSBcIi4uL3Bhc3MvemlwXCI7XG5cbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FLCBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtTm9kZSwgZnJhbWVGcm9tRnJhbWVOb2RlLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IG5vZGVRdWVyeSB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKSxcbiAgICAgIHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lXCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVR5cGVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50XCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZVwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcmVmZXJlbmNlL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fzc3VtcHRpb24vbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsUGFzcyBleHRlbmRzIFppcFBhc3NCYXNlIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogYXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbEFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICByZWZlcmVuY2UsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlO1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgICByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VVbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlO1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLmdldFBhcmVudE5vZGUoKTtcblxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gbWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGU7IC8vL1xuXG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnN0aXR1dGlvbk5vZGUoKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gKHN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAvLy9cblxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljRnJhbWVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgZnJhbWVOb2RlID0gc3BlY2lmaWNGcmFtZU5vZGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbEZyYW1lTWV0YXZhcmlhYmxlTm9kZTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgICAgIGZyYW1lVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeUZyYW1lKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBnZW5lcmFsVGVybVZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgdGVybVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIENvbWJpbmF0b3JQYXNzIGV4dGVuZHMgWmlwUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IG1ldGFUeXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxNZXRhVHlwZU5vZGUsIHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG1ldGFUeXBlTm9kZSA9IGdlbmVyYWxNZXRhVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZU5vZGUuZ2V0TWV0YVR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIG1ldGFUeXBlTmFtZVN0YXRlbWVudE1ldGFUeXBlTmFtZSA9IChtZXRhVHlwZU5hbWUgPT09IFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSk7XG5cbiAgICAgICAgaWYgKG1ldGFUeXBlTmFtZVN0YXRlbWVudE1ldGFUeXBlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgICBsZXQgc3RhdGVtZW50O1xuXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogbWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZnJhbWVOb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsTWV0YVR5cGVOb2RlLCBzcGVjaWZpY0ZyYW1lTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG1ldGFUeXBlTm9kZSA9IGdlbmVyYWxNZXRhVHlwZU5vZGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZU5vZGUuZ2V0TWV0YVR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIG1ldGFUeXBlTmFtZUZyYW1lTWV0YVR5cGVOYW1lID0gKG1ldGFUeXBlTmFtZSA9PT0gRlJBTUVfTUVUQV9UWVBFX05BTUUpO1xuXG4gICAgICAgIGlmIChtZXRhVHlwZU5hbWVGcmFtZU1ldGFUeXBlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBzcGVjaWZpY0ZyYW1lTm9kZTsgIC8vL1xuXG4gICAgICAgICAgbGV0IGZyYW1lO1xuXG4gICAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGZyYW1lID0gZnJhbWUudmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgICAgICAgIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVHlwZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IGdlbmVyYWxUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBsZXQgdGVybTtcblxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgdGVybSA9IHRlcm0udmFsaWRhdGVHaXZlblR5cGUodHlwZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgQ29uc3RydWN0b3JQYXNzIGV4dGVuZHMgWmlwUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxUeXBlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHR5cGVOb2RlID0gZ2VuZXJhbFR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgICBsZXQgdGVybTtcblxuICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHRlcm0gPSB0ZXJtLnZhbGlkYXRlR2l2ZW5UeXBlKHR5cGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgTWV0YXZhcmlhYmxlUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVHlwZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IGdlbmVyYWxUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgIGlmICh0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkdpdmVuVHlwZVR5cGUpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgU3Vic3RpdHV0aW9uUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljRnJhbWVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgZnJhbWVOb2RlID0gc3BlY2lmaWNGcmFtZU5vZGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbEZyYW1lTWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICAgICAgZnJhbWVVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5RnJhbWUoZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChmcmFtZVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgICB0ZXJtVW5pZmllcyA9IHZhcmlhYmxlLnVuaWZ5VGVybSh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgSW50cmluc2ljTGV2ZWxQYXNzIGV4dGVuZHMgWmlwUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBnZW5lcmFsVGVybVZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgdGVybVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IG1ldGFMZXZlbFBhc3MgPSBuZXcgTWV0YUxldmVsUGFzcygpLFxuICAgICAgY29tYmluYXRvclBhc3MgPSBuZXcgQ29tYmluYXRvclBhc3MoKSxcbiAgICAgIGNvbnN0cnVjdG9yUGFzcyA9IG5ldyBDb25zdHJ1Y3RvclBhc3MoKSxcbiAgICAgIG1ldGF2YXJpYWJsZVBhc3MgPSBuZXcgTWV0YXZhcmlhYmxlUGFzcygpLFxuICAgICAgc3Vic3RpdHV0aW9uUGFzcyA9IG5ldyBTdWJzdGl0dXRpb25QYXNzKCksXG4gICAgICBpbnRyaW5zaWNMZXZlbFBhc3MgPSBuZXcgSW50cmluc2ljTGV2ZWxQYXNzKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeVN0YXRlbWVudChnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnROb2RlID0gZ2VuZXJhbFN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljU3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICBzdWNjZXNzID0gbWV0YUxldmVsUGFzcy5ydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlTdWJzdGl0dXRpb24oZ2VuZXJhbFN1YnN0aXR1dGlvbiwgc3BlY2lmaWNTdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHN1YnN0aXR1dGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uTm9kZSA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbk5vZGUgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgIGdlbmVyYWxOb2RlID0gZ2VuZXJhbFN1YnN0aXR1dGlvbk5vZGUsIC8vL1xuICAgICAgICBzcGVjaWZpY05vZGUgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgc3VjY2VzcyA9IHN1YnN0aXR1dGlvblBhc3MucnVuKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgc3Vic3RpdHV0aW9uVW5pZmllcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5TWV0YXZhcmlhYmxlKGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGVVbmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBzdWNjZXNzID0gbWV0YXZhcmlhYmxlUGFzcy5ydW4oZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBtZXRhdmFyaWFibGVVbmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yKHRlcm0sIGNvbnN0cnVjdG9yLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgIGNvbnN0cnVjdG9yVGVybSA9IGNvbnN0cnVjdG9yLmdldFRlcm0oKSxcbiAgICAgICAgY29uc3RydWN0b3JUZXJtTm9kZSA9IGNvbnN0cnVjdG9yVGVybS5nZXROb2RlKCksXG4gICAgICAgIHN1Y2Nlc3MgPSBjb25zdHJ1Y3RvclBhc3MucnVuKGNvbnN0cnVjdG9yVGVybU5vZGUsIHRlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3Ioc3RhdGVtZW50LCBjb21iaW5hdG9yLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3IgPSBmYWxzZTtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgY29tYmluYXRvclN0YXRlbWVudCA9IGNvbWJpbmF0b3IuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgIGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlID0gY29tYmluYXRvclN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIHN1Y2Nlc3MgPSBjb21iaW5hdG9yUGFzcy5ydW4oY29tYmluYXRvclN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gZmFsc2U7XG5cbiAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgc3VjY2VzcyA9IGludHJpbnNpY0xldmVsUGFzcy5ydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7XG59XG4iXSwibmFtZXMiOlsidW5pZnlNZXRhdmFyaWFibGUiLCJ1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3IiLCJ1bmlmeVN1YnN0aXR1dGlvbiIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciIsIm5vZGVRdWVyeSIsInF1ZXJ5VXRpbGl0aWVzIiwidHlwZU5vZGVRdWVyeSIsInRlcm1Ob2RlUXVlcnkiLCJmcmFtZU5vZGVRdWVyeSIsIm1ldGFUeXBlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5IiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YUxldmVsUGFzcyIsIlppcFBhc3NCYXNlIiwibWFwcyIsImdlbmVyYWxOb2RlUXVlcnkiLCJzcGVjaWZpY05vZGVRdWVyeSIsInJ1biIsImdlbmVyYWxBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1Y2Nlc3MiLCJjb250ZXh0IiwicmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlTm9kZSIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VVbmlmaWVzIiwidW5pZnlSZWZlcmVuY2UiLCJnZW5lcmFsU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGUiLCJnZXRQYXJlbnROb2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50IiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFVuaWZpZXMiLCJnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwiZnJhbWVVbmlmaWVzIiwidW5pZnlGcmFtZSIsImdlbmVyYWxUZXJtVmFyaWFibGVOb2RlIiwic3BlY2lmaWNUZXJtTm9kZSIsInRlcm1Ob2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInRlcm0iLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtVW5pZmllcyIsInVuaWZ5VGVybSIsIkNvbWJpbmF0b3JQYXNzIiwiWmlwUGFzcyIsImdlbmVyYWxNZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5hbWUiLCJnZXRNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWVTdGF0ZW1lbnRNZXRhVHlwZU5hbWUiLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInZhbGlkYXRlIiwibWV0YVR5cGVOYW1lRnJhbWVNZXRhVHlwZU5hbWUiLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsImZyYW1lRnJvbUZyYW1lTm9kZSIsImdlbmVyYWxUeXBlTm9kZSIsInR5cGVOb2RlIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidmFsaWRhdGVHaXZlblR5cGUiLCJDb25zdHJ1Y3RvclBhc3MiLCJNZXRhdmFyaWFibGVQYXNzIiwidGVybVR5cGUiLCJnZXRUeXBlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJTdWJzdGl0dXRpb25QYXNzIiwiSW50cmluc2ljTGV2ZWxQYXNzIiwibWV0YUxldmVsUGFzcyIsImNvbWJpbmF0b3JQYXNzIiwiY29uc3RydWN0b3JQYXNzIiwibWV0YXZhcmlhYmxlUGFzcyIsInN1YnN0aXR1dGlvblBhc3MiLCJpbnRyaW5zaWNMZXZlbFBhc3MiLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJnZW5lcmFsU3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJnZW5lcmFsTm9kZSIsInNwZWNpZmljTm9kZSIsImdlbmVyYWxTdWJzdGl0dXRpb24iLCJzcGVjaWZpY1N1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblVuaWZpZXMiLCJnZW5lcmFsU3Vic3RpdHV0aW9uTm9kZSIsInNwZWNpZmljU3Vic3RpdHV0aW9uTm9kZSIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXMiLCJnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlTm9kZSIsImNvbnN0cnVjdG9yIiwidGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvclRlcm0iLCJnZXRUZXJtIiwiY29uc3RydWN0b3JUZXJtTm9kZSIsImNvbWJpbmF0b3IiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3IiLCJjb21iaW5hdG9yU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiY29tYmluYXRvclN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBNmJnQkE7ZUFBQUE7O1FBNENBQztlQUFBQTs7UUE1RUFDO2VBQUFBOztRQTZEQUM7ZUFBQUE7O1FBN0NBQztlQUFBQTs7UUE4QkFDO2VBQUFBOzs7Z0NBemN1Qzs0REFFbkM7K0JBRTJDO3lCQUNrQjs7Ozs7O0FBRWpGLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdDLDhCQUFjO0FBRXBDLE1BQU1DLGdCQUFnQkYsVUFBVSxVQUMxQkcsZ0JBQWdCSCxVQUFVLFVBQzFCSSxpQkFBaUJKLFVBQVUsV0FDM0JLLG9CQUFvQkwsVUFBVSxjQUM5Qk0scUJBQXFCTixVQUFVLGVBQy9CTyx3QkFBd0JQLFVBQVUsa0JBQ2xDUSx3QkFBd0JSLFVBQVUsb0JBQ2xDUyw2QkFBNkJULFVBQVUseUJBQ3ZDVSxpQ0FBaUNWLFVBQVUsNkJBQzNDVyxpQ0FBaUNYLFVBQVUsNkJBQzNDWSxrQ0FBa0NaLFVBQVU7QUFFbEQs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