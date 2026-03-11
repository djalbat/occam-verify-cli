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
    get unifyStatementIntrinsically () {
        return unifyStatementIntrinsically;
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
const typeNodeQuery = nodeQuery("/type"), termNodeQuery = nodeQuery("/term"), frameNodeQuery = nodeQuery("/frame"), metaTypeNodeQuery = nodeQuery("/metaType"), statementNodeQuery = nodeQuery("/statement"), termVariableNodeQuery = nodeQuery("/term/variable!"), frameAMetavariableNodeQuery = nodeQuery("/frame/metavariable!"), statementMetavariableNodeQuery = nodeQuery("/statement/metavariable!"), assumptionMetavariableNodeQuery = nodeQuery("/assumption/metavariable!");
class MetaLevelPass extends _occamlanguages.ZipPass {
    static maps = [
        {
            generalNodeQuery: assumptionMetavariableNodeQuery,
            specificNodeQuery: assumptionMetavariableNodeQuery,
            run: (generalAssumptionMetavariableNode, specificAssumptionMetavariableNode, generalContext, specificContext)=>{
                let success = false;
                let context, metavariableNode;
                context = generalContext; ///
                metavariableNode = generalAssumptionMetavariableNode; ///
                const metavariableName = metavariableNode.getMetavariableName(), metavariable = context.findMetavariableByMetavariableName(metavariableName);
                context = specificContext; ///
                metavariableNode = specificAssumptionMetavariableNode; ///
                const reference = context.findReferenceByMetavariableNode(metavariableNode), referenceUnifies = metavariable.unifyReference(reference, generalContext, specificContext);
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
            generalNodeQuery: frameAMetavariableNodeQuery,
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
class CombinatorPass extends _zip.default {
    static maps = [
        {
            generalNodeQuery: metaTypeNodeQuery,
            specificNodeQuery: statementNodeQuery,
            run: (generalMetaTypeNode, specificStatementNode, stated, generalContext, specificContext)=>{
                let success = false;
                const metaTypeNode = generalMetaTypeNode, metaTypeName = metaTypeNode.getMetaTypeName(), metaTypeNameStatementMetaTypeName = metaTypeName === _metaTypeNames.STATEMENT_META_TYPE_NAME;
                if (metaTypeNameStatementMetaTypeName) {
                    const context = specificContext, statementNode = specificStatementNode; ///
                    let statement;
                    statement = (0, _element.statementFromStatementNode)(statementNode, context);
                    statement = statement.validate(stated, context); ///
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
            run: (generalMetaTypeNode, specificFrameNode, stated, generalContext, specificContext)=>{
                let success = false;
                const metaTypeNode = generalMetaTypeNode, metaTypeName = metaTypeNode.getMetaTypeName(), metaTypeNameFrameMetaTypeName = metaTypeName === _metaTypeNames.FRAME_META_TYPE_NAME;
                if (metaTypeNameFrameMetaTypeName) {
                    const context = specificContext, frameNode = specificFrameNode; ///
                    let frame;
                    frame = (0, _element.frameFromFrameNode)(frameNode, context);
                    frame = frame.validate(stated, context); ///
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
            run: (generalTypeNode, specificTermNode, stated, generalContext, specificContext)=>{
                let success = false;
                const typeNode = generalTypeNode, termNode = specificTermNode, nominalTypeName = typeNode.getNominalTypeName();
                let context;
                context = generalContext; ///
                const type = context.findTypeByNominalTypeName(nominalTypeName);
                context = specificContext; ///
                const term = (0, _element.termFromTermNode)(termNode, context), termValidatesGivenType = term.validateGivenType(type, context);
                if (termValidatesGivenType) {
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
                    const term = (0, _element.termFromTermNode)(termNode, context), termValidatesGivenType = term.validateGivenType(type, context);
                    if (termValidatesGivenType) {
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
const metaLevelPass = new MetaLevelPass(), combinatorPass = new CombinatorPass(), constructorPass = new ConstructorPass(), metavariablePass = new MetavariablePass(), intrinsicLevelPass = new IntrinsicLevelPass();
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
    const generalSubstitutionNode = generalSubstitution.getNode(), specificSubstitutionNode = specificSubstitution.getNode(), generalNode = generalSubstitutionNode, specificNode = specificSubstitutionNode, success = metaLevelPass.run(generalNode, specificNode, generalContext, specificContext);
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
function unifyStatementIntrinsically(generalStatement, specificStatement, generalContext, specificContext) {
    let statementUnifiesIntrinsically = false;
    const generalStatementNode = generalStatement.getNode(), specificStatementNode = specificStatement.getNode(), generalNode = generalStatementNode, specificNode = specificStatementNode, success = intrinsicLevelPass.run(generalNode, specificNode, generalContext, specificContext);
    if (success) {
        statementUnifiesIntrinsically = true;
    }
    return statementUnifiesIntrinsically;
}
function unifyStatementWithCombinator(statement, combinator, stated, generalContext, specificContext) {
    let statementUnifiesWithCombinator = false;
    const statementNode = statement.getNode(), combinatorStatement = combinator.getStatement(), combinatorStatementNode = combinatorStatement.getNode(), success = combinatorPass.run(combinatorStatementNode, statementNode, stated, generalContext, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3VuaWZ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBxdWVyeVV0aWxpdGllcywgWmlwUGFzcyBhcyBaaXBQYXNzQmFzZSB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IFppcFBhc3MgZnJvbSBcIi4uL3Bhc3MvemlwXCI7XG5cbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FLCBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtTm9kZSwgZnJhbWVGcm9tRnJhbWVOb2RlLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCB7IG5vZGVRdWVyeSB9ID0gcXVlcnlVdGlsaXRpZXM7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZVwiKSxcbiAgICAgIHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lXCIpLFxuICAgICAgbWV0YVR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVR5cGVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50XCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgZnJhbWVBTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fzc3VtcHRpb24vbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsUGFzcyBleHRlbmRzIFppcFBhc3NCYXNlIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogYXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbEFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlO1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gc3BlY2lmaWNBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICByZWZlcmVuY2VVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGdlbmVyYWxTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBsZXQgY29udGV4dCxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGU7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbFN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGVQYXJlbnROb2RlID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRQYXJlbnROb2RlKCk7XG5cbiAgICAgICAgc3RhdGVtZW50Tm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVQYXJlbnROb2RlOyAvLy9cblxuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJzdGl0dXRpb25Ob2RlKCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IChzdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgLy8vXG5cbiAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogZnJhbWVBTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IGZyYW1lTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbEZyYW1lTWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNGcmFtZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBmcmFtZU5vZGUgPSBzcGVjaWZpY0ZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOb2RlLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgICAgIGZyYW1lVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeUZyYW1lKGZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWVVbmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgICB0ZXJtVW5pZmllcyA9IHZhcmlhYmxlLnVuaWZ5VGVybSh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgQ29tYmluYXRvclBhc3MgZXh0ZW5kcyBaaXBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogbWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbE1ldGFUeXBlTm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBzdGF0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZXRhVHlwZU5vZGUgPSBnZW5lcmFsTWV0YVR5cGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVOb2RlLmdldE1ldGFUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICBtZXRhVHlwZU5hbWVTdGF0ZW1lbnRNZXRhVHlwZU5hbWUgPSAobWV0YVR5cGVOYW1lID09PSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUpO1xuXG4gICAgICAgIGlmIChtZXRhVHlwZU5hbWVTdGF0ZW1lbnRNZXRhVHlwZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgICAgbGV0IHN0YXRlbWVudDtcblxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50LnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7ICAvLy9cblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogbWV0YVR5cGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZnJhbWVOb2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsTWV0YVR5cGVOb2RlLCBzcGVjaWZpY0ZyYW1lTm9kZSwgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YVR5cGVOb2RlID0gZ2VuZXJhbE1ldGFUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlTm9kZS5nZXRNZXRhVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgbWV0YVR5cGVOYW1lRnJhbWVNZXRhVHlwZU5hbWUgPSAobWV0YVR5cGVOYW1lID09PSBGUkFNRV9NRVRBX1RZUEVfTkFNRSk7XG5cbiAgICAgICAgaWYgKG1ldGFUeXBlTmFtZUZyYW1lTWV0YVR5cGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIGZyYW1lTm9kZSA9IHNwZWNpZmljRnJhbWVOb2RlOyAgLy8vXG5cbiAgICAgICAgICBsZXQgZnJhbWU7XG5cbiAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgZnJhbWUgPSBmcmFtZS52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpOyAgLy8vXG5cbiAgICAgICAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAoZ2VuZXJhbFR5cGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBzdGF0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IGdlbmVyYWxUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm1WYWxpZGF0ZXNHaXZlblR5cGUgPSB0ZXJtLnZhbGlkYXRlR2l2ZW5UeXBlKHR5cGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVmFsaWRhdGVzR2l2ZW5UeXBlKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIENvbnN0cnVjdG9yUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVHlwZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IGdlbmVyYWxUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHRlcm1WYWxpZGF0ZXNHaXZlblR5cGUgPSB0ZXJtLnZhbGlkYXRlR2l2ZW5UeXBlKHR5cGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXNHaXZlblR5cGUpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY2xhc3MgTWV0YXZhcmlhYmxlUGFzcyBleHRlbmRzIFppcFBhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVHlwZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0eXBlTm9kZSA9IGdlbmVyYWxUeXBlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgICAgICB0eXBlID0gZ2VuZXJhbENvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpLFxuICAgICAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZHaXZlblR5cGVUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBJbnRyaW5zaWNMZXZlbFBhc3MgZXh0ZW5kcyBaaXBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46IChnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgICAgIHRlcm1VbmlmaWVzID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBtZXRhTGV2ZWxQYXNzID0gbmV3IE1ldGFMZXZlbFBhc3MoKSxcbiAgICAgIGNvbWJpbmF0b3JQYXNzID0gbmV3IENvbWJpbmF0b3JQYXNzKCksXG4gICAgICBjb25zdHJ1Y3RvclBhc3MgPSBuZXcgQ29uc3RydWN0b3JQYXNzKCksXG4gICAgICBtZXRhdmFyaWFibGVQYXNzID0gbmV3IE1ldGF2YXJpYWJsZVBhc3MoKSxcbiAgICAgIGludHJpbnNpY0xldmVsUGFzcyA9IG5ldyBJbnRyaW5zaWNMZXZlbFBhc3MoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3QgZ2VuZXJhbFN0YXRlbWVudE5vZGUgPSBnZW5lcmFsU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgIHN1Y2Nlc3MgPSBtZXRhTGV2ZWxQYXNzLnJ1bihnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeVN1YnN0aXR1dGlvbihnZW5lcmFsU3Vic3RpdHV0aW9uLCBzcGVjaWZpY1N1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgc3Vic3RpdHV0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb25Ob2RlID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uTm9kZSA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsU3Vic3RpdHV0aW9uTm9kZSwgLy8vXG4gICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICBzdWNjZXNzID0gbWV0YUxldmVsUGFzcy5ydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBzdWJzdGl0dXRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlNZXRhdmFyaWFibGUoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXMgPSBmYWxzZTtcblxuICBjb25zdCBnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxNZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY01ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIHN1Y2Nlc3MgPSBtZXRhdmFyaWFibGVQYXNzLnJ1bihnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IodGVybSwgY29uc3RydWN0b3IsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yID0gZmFsc2U7XG5cbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgY29uc3RydWN0b3JUZXJtID0gY29uc3RydWN0b3IuZ2V0VGVybSgpLFxuICAgICAgICBjb25zdHJ1Y3RvclRlcm1Ob2RlID0gY29uc3RydWN0b3JUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgc3VjY2VzcyA9IGNvbnN0cnVjdG9yUGFzcy5ydW4oY29uc3RydWN0b3JUZXJtTm9kZSwgdGVybU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgdGVybVVuaWZpZXNXaXRoQ29uc3RydWN0b3IgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1VbmlmaWVzV2l0aENvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRJbnRyaW5zaWNhbGx5KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVzSW50cmluc2ljYWxseSA9IGZhbHNlO1xuXG4gIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnROb2RlID0gZ2VuZXJhbFN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljU3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHN1Y2Nlc3MgPSBpbnRyaW5zaWNMZXZlbFBhc3MucnVuKGdlbmVyYWxOb2RlLCBzcGVjaWZpY05vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgc3RhdGVtZW50VW5pZmllc0ludHJpbnNpY2FsbHkgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNJbnRyaW5zaWNhbGx5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvcihzdGF0ZW1lbnQsIGNvbWJpbmF0b3IsIHN0YXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yID0gZmFsc2U7XG5cbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIGNvbWJpbmF0b3JTdGF0ZW1lbnQgPSBjb21iaW5hdG9yLmdldFN0YXRlbWVudCgpLFxuICAgICAgICBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3JTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBzdWNjZXNzID0gY29tYmluYXRvclBhc3MucnVuKGNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCBzdGF0ZW1lbnROb2RlLCBzdGF0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gZmFsc2U7XG5cbiAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBnZW5lcmFsTm9kZSA9IGdlbmVyYWxNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgc3BlY2lmaWNOb2RlID0gc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgc3VjY2VzcyA9IGludHJpbnNpY0xldmVsUGFzcy5ydW4oZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICBtZXRhdmFyaWFibGVVbmlmaWVzSW50cmluc2ljYWxseSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHk7XG59XG4iXSwibmFtZXMiOlsidW5pZnlNZXRhdmFyaWFibGUiLCJ1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseSIsInVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3IiLCJ1bmlmeVN1YnN0aXR1dGlvbiIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciIsIm5vZGVRdWVyeSIsInF1ZXJ5VXRpbGl0aWVzIiwidHlwZU5vZGVRdWVyeSIsInRlcm1Ob2RlUXVlcnkiLCJmcmFtZU5vZGVRdWVyeSIsIm1ldGFUeXBlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5IiwiZnJhbWVBTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiYXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIk1ldGFMZXZlbFBhc3MiLCJaaXBQYXNzQmFzZSIsIm1hcHMiLCJnZW5lcmFsTm9kZVF1ZXJ5Iiwic3BlY2lmaWNOb2RlUXVlcnkiLCJydW4iLCJnZW5lcmFsQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdWNjZXNzIiwiY29udGV4dCIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJyZWZlcmVuY2UiLCJmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlVW5pZmllcyIsInVuaWZ5UmVmZXJlbmNlIiwiZ2VuZXJhbFN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY1N0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGUiLCJnZXRQYXJlbnROb2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwic3RhdGVtZW50IiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFVuaWZpZXMiLCJnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwiZnJhbWVVbmlmaWVzIiwidW5pZnlGcmFtZSIsImdlbmVyYWxUZXJtVmFyaWFibGVOb2RlIiwic3BlY2lmaWNUZXJtTm9kZSIsInRlcm1Ob2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInRlcm0iLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtVW5pZmllcyIsInVuaWZ5VGVybSIsIkNvbWJpbmF0b3JQYXNzIiwiWmlwUGFzcyIsImdlbmVyYWxNZXRhVHlwZU5vZGUiLCJzdGF0ZWQiLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5hbWUiLCJnZXRNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWVTdGF0ZW1lbnRNZXRhVHlwZU5hbWUiLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInZhbGlkYXRlIiwibWV0YVR5cGVOYW1lRnJhbWVNZXRhVHlwZU5hbWUiLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsImZyYW1lRnJvbUZyYW1lTm9kZSIsImdlbmVyYWxUeXBlTm9kZSIsInR5cGVOb2RlIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJ0ZXJtRnJvbVRlcm1Ob2RlIiwidGVybVZhbGlkYXRlc0dpdmVuVHlwZSIsInZhbGlkYXRlR2l2ZW5UeXBlIiwiQ29uc3RydWN0b3JQYXNzIiwiTWV0YXZhcmlhYmxlUGFzcyIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mR2l2ZW5UeXBlVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiSW50cmluc2ljTGV2ZWxQYXNzIiwibWV0YUxldmVsUGFzcyIsImNvbWJpbmF0b3JQYXNzIiwiY29uc3RydWN0b3JQYXNzIiwibWV0YXZhcmlhYmxlUGFzcyIsImludHJpbnNpY0xldmVsUGFzcyIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnROb2RlIiwiZ2V0Tm9kZSIsImdlbmVyYWxOb2RlIiwic3BlY2lmaWNOb2RlIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbiIsInNwZWNpZmljU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uVW5pZmllcyIsImdlbmVyYWxTdWJzdGl0dXRpb25Ob2RlIiwic3BlY2lmaWNTdWJzdGl0dXRpb25Ob2RlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsImdlbmVyYWxNZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlIiwiY29uc3RydWN0b3IiLCJ0ZXJtVW5pZmllc1dpdGhDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yVGVybSIsImdldFRlcm0iLCJjb25zdHJ1Y3RvclRlcm1Ob2RlIiwic3RhdGVtZW50VW5pZmllc0ludHJpbnNpY2FsbHkiLCJjb21iaW5hdG9yIiwic3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yIiwiY29tYmluYXRvclN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlVW5pZmllc0ludHJpbnNpY2FsbHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQW1YZ0JBO2VBQUFBOztRQTREQUM7ZUFBQUE7O1FBNUZBQztlQUFBQTs7UUE2REFDO2VBQUFBOztRQWdCQUM7ZUFBQUE7O1FBN0RBQztlQUFBQTs7UUE4QkFDO2VBQUFBOzs7Z0NBL1h1Qzs0REFFbkM7K0JBRTJDO3lCQUNrQjs7Ozs7O0FBRWpGLE1BQU0sRUFBRUMsU0FBUyxFQUFFLEdBQUdDLDhCQUFjO0FBRXBDLE1BQU1DLGdCQUFnQkYsVUFBVSxVQUMxQkcsZ0JBQWdCSCxVQUFVLFVBQzFCSSxpQkFBaUJKLFVBQVUsV0FDM0JLLG9CQUFvQkwsVUFBVSxjQUM5Qk0scUJBQXFCTixVQUFVLGVBQy9CTyx3QkFBd0JQLFVBQVUsb0JBQ2xDUSw4QkFBOEJSLFVBQVUseUJBQ3hD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