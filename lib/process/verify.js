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
    get verifyFile () {
        return verifyFile;
    },
    get verifyStatementAsCombinator () {
        return verifyStatementAsCombinator;
    },
    get verifyTermAsConstructor () {
        return verifyTermAsConstructor;
    }
});
const _occamlanguages = require("occam-languages");
const _element = require("../utilities/element");
const { nodeQuery } = _occamlanguages.queryUtilities;
const ruleNodeQuery = nodeQuery("/rule"), termNodeQuery = nodeQuery("/term"), typeNodeQuery = nodeQuery("/type"), errorNodeQuery = nodeQuery("/error"), axiomNodeQuery = nodeQuery("/axiom"), lemmaNodeQuery = nodeQuery("/lemma"), sectionNodeQuery = nodeQuery("/section"), theoremNodeQuery = nodeQuery("/theorem"), metaLemmaNodeQuery = nodeQuery("/metaLemma"), statementNodeQuery = nodeQuery("/statement"), conjectureNodeQuery = nodeQuery("/conjecture"), metatheoremNodeQuery = nodeQuery("/metatheorem"), variableDeclarationNodeQuery = nodeQuery("/variableDeclaration"), combinatorDeclarationNodeQuery = nodeQuery("/combinatorDeclaration"), simpleTypeDeclarationNodeQuery = nodeQuery("/simpleTypeDeclaration"), typePrefixDeclarationNodeQuery = nodeQuery("/typePrefixDeclaration"), constructorDeclarationNodeQuery = nodeQuery("/constructorDeclaration"), complexTypeDeclarationNodeQuery = nodeQuery("/complexTypeDeclaration"), metavariableDeclarationNodeQuery = nodeQuery("/metavariableDeclaration");
class TopLevelPass extends _occamlanguages.AsyncPass {
    static maps = [
        {
            nodeQuery: errorNodeQuery,
            run: async (errorNode, context)=>{
                let success = false;
                const error = (0, _element.errorFromErrorNode)(errorNode, context), errorVerifies = await error.verify();
                if (errorVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: ruleNodeQuery,
            run: async (ruleNode, context)=>{
                let success = false;
                const rule = (0, _element.ruleFromRuleNode)(ruleNode, context), ruleVerifies = await rule.verify();
                if (ruleVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: axiomNodeQuery,
            run: async (axiomNode, context)=>{
                let success = false;
                const axiom = (0, _element.axiomFromAxiomNode)(axiomNode, context), axiomVerifies = await axiom.verify();
                if (axiomVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: lemmaNodeQuery,
            run: async (lemmaNode, context)=>{
                let success = false;
                const lemma = (0, _element.lemmaFromLemmaNode)(lemmaNode, context), lemmaVerifies = await lemma.verify();
                if (lemmaVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: sectionNodeQuery,
            run: async (sectionNode, context)=>{
                let success = false;
                const section = (0, _element.sectionFromSectionNode)(sectionNode, context), sectionVerifies = await section.verify();
                if (sectionVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: theoremNodeQuery,
            run: async (theoremNode, context)=>{
                let success = false;
                const theorem = (0, _element.theoremFromTheoremNode)(theoremNode, context), theoremVerifies = await theorem.verify();
                if (theoremVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: metaLemmaNodeQuery,
            run: async (metaLemmaNode, context)=>{
                let success = false;
                const metaLemma = (0, _element.metaLemmaFromMetaLemmaNode)(metaLemmaNode, context), metaLemmaVerifies = await metaLemma.verify();
                if (metaLemmaVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: conjectureNodeQuery,
            run: async (conjectureNode, context)=>{
                let success = false;
                const conjecture = (0, _element.conjectureFromConjectureNode)(conjectureNode, context), conjectureVerifies = await conjecture.verify();
                if (conjectureVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: metatheoremNodeQuery,
            run: async (metatheoremNode, context)=>{
                let success = false;
                const metatheorem = (0, _element.metatheoremFromMetatheoremNode)(metatheoremNode, context), metatheoremVerifies = await metatheorem.verify();
                if (metatheoremVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: variableDeclarationNodeQuery,
            run: async (variableDeclarationNode, context)=>{
                let success = false;
                const variableDeclaration = (0, _element.variableDeclarationFromVariableDeclarationNode)(variableDeclarationNode, context), variableDeclarationVerifies = await variableDeclaration.verify();
                if (variableDeclarationVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: simpleTypeDeclarationNodeQuery,
            run: async (simpleTypeDeclarationNode, context)=>{
                let success = false;
                const simpleTypeDeclaration = (0, _element.simpleTypeDeclarationFromSimpleTypeDeclarationNode)(simpleTypeDeclarationNode, context), simpleTypeDeclarationVerifies = await simpleTypeDeclaration.verify();
                if (simpleTypeDeclarationVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: typePrefixDeclarationNodeQuery,
            run: async (typePrefixDeclarationNode, context)=>{
                let success = false;
                const typePrefixDeclaration = (0, _element.typePrefixDeclarationFromTypePrefixDeclarationNode)(typePrefixDeclarationNode, context), typePrefixDeclarationVerifies = await typePrefixDeclaration.verify();
                if (typePrefixDeclarationVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: combinatorDeclarationNodeQuery,
            run: async (combinatorDeclarationNode, context)=>{
                let success = false;
                const combinatorDeclaration = (0, _element.combinatorDeclarationFromCombinatorDeclarationNode)(combinatorDeclarationNode, context), combinatorDeclarationVerifies = await combinatorDeclaration.verify();
                if (combinatorDeclarationVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: constructorDeclarationNodeQuery,
            run: async (constructorDeclarationNode, context)=>{
                let success = false;
                const constructorDeclaration = (0, _element.constructorDeclarationFromConstructorDeclarationNode)(constructorDeclarationNode, context), constructorDeclarationVerifies = await constructorDeclaration.verify();
                if (constructorDeclarationVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: complexTypeDeclarationNodeQuery,
            run: async (complexTypeDeclarationNode, context)=>{
                let success = false;
                const complexTypeDeclaration = (0, _element.complexTypeDeclarationFromComplexTypeDeclarationNode)(complexTypeDeclarationNode, context), complexTypeDeclarationVerifies = await complexTypeDeclaration.verify();
                if (complexTypeDeclarationVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: metavariableDeclarationNodeQuery,
            run: async (metavariableDeclarationNode, context)=>{
                let success = false;
                const metavariableDeclaration = (0, _element.metavariableDeclarationFromMetavariableDeclarationNode)(metavariableDeclarationNode, context), metavariableDeclarationVerifies = await metavariableDeclaration.verify();
                if (metavariableDeclarationVerifies) {
                    success = true;
                }
                return success;
            }
        }
    ];
}
class ConbinatorPass extends _occamlanguages.SimplePass {
    run(statementNode, context) {
        let success = false;
        const nonTerminalNode = statementNode, childNodes = nonTerminalNode.getChildNodes(), descended = this.descend(childNodes, context);
        if (descended) {
            success = true;
        }
        return success;
    }
    static maps = [
        {
            nodeQuery: statementNodeQuery,
            run: (statementNode, context)=>{
                let success = false;
                let statement;
                const stated = true;
                statement = (0, _element.statementFromStatementNode)(statementNode, context);
                statement = statement.validate(stated, context);
                if (statement !== null) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: termNodeQuery,
            run: (termNode, context)=>{
                let success = false;
                let term;
                term = (0, _element.termFromTermNode)(termNode, context);
                term = term.validate(context, ()=>{
                    const validatesForwards = true;
                    return validatesForwards;
                });
                if (term !== null) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: typeNodeQuery,
            run: (typeNode, context)=>{
                let success = false;
                const nominalTypeName = typeNode.getNominalTypeName(), typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
                if (typePresent) {
                    success = true;
                }
                return success;
            }
        }
    ];
}
class ConstructorPass extends _occamlanguages.SimplePass {
    run(termNode, context) {
        let success = false;
        const nonTerminalNode = termNode, childNodes = nonTerminalNode.getChildNodes(), descended = this.descend(childNodes, context);
        if (descended) {
            success = true;
        }
        return success;
    }
    static maps = [
        {
            nodeQuery: termNodeQuery,
            run: (termNode, context)=>{
                let success = false;
                let term;
                term = (0, _element.termFromTermNode)(termNode, context);
                term = term.validate(context, ()=>{
                    const validatesForwards = true;
                    return validatesForwards;
                });
                if (term !== null) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: typeNodeQuery,
            run: (typeNode, context)=>{
                let success = false;
                const nominalTypeName = typeNode.getNominalTypeName(), typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
                if (typePresent) {
                    success = true;
                }
                return success;
            }
        }
    ];
}
const topLevelPass = new TopLevelPass(), combinatorPass = new ConbinatorPass(), constructorPass = new ConstructorPass();
async function verifyFile(fileNode, context) {
    let fileVerifies = false;
    const node = fileNode, sucess = await topLevelPass.run(node, context);
    if (sucess) {
        fileVerifies = true;
    }
    return fileVerifies;
}
function verifyTermAsConstructor(term, context) {
    let termVerifiesAsConstructor = false;
    const termNode = term.getNode(), success = constructorPass.run(termNode, context);
    if (success) {
        termVerifiesAsConstructor = true;
    }
    return termVerifiesAsConstructor;
}
function verifyStatementAsCombinator(statement, context) {
    let statementVerifiesAsCombinator = false;
    const statementNode = statement.getNode(), success = combinatorPass.run(statementNode, context);
    if (success) {
        statementVerifiesAsCombinator = true;
    }
    return statementVerifiesAsCombinator;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZlcmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQXN5bmNQYXNzLCBTaW1wbGVQYXNzLCBxdWVyeVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIlxuXG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1Ob2RlLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgcnVsZUZyb21SdWxlTm9kZSxcbiAgICAgICAgIGVycm9yRnJvbUVycm9yTm9kZSxcbiAgICAgICAgIGF4aW9tRnJvbUF4aW9tTm9kZSxcbiAgICAgICAgIGxlbW1hRnJvbUxlbW1hTm9kZSxcbiAgICAgICAgIHNlY3Rpb25Gcm9tU2VjdGlvbk5vZGUsXG4gICAgICAgICB0aGVvcmVtRnJvbVRoZW9yZW1Ob2RlLFxuICAgICAgICAgbWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUsXG4gICAgICAgICBjb25qZWN0dXJlRnJvbUNvbmplY3R1cmVOb2RlLFxuICAgICAgICAgbWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlLFxuICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbkZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSxcbiAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLFxuICAgICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsXG4gICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSxcbiAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsXG4gICAgICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uRnJvbUNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLFxuICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmNvbnN0IHsgbm9kZVF1ZXJ5IH0gPSBxdWVyeVV0aWxpdGllcztcblxuY29uc3QgcnVsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlXCIpLFxuICAgICAgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlXCIpLFxuICAgICAgZXJyb3JOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXJyb3JcIiksXG4gICAgICBheGlvbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9heGlvbVwiKSxcbiAgICAgIGxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2xlbW1hXCIpLFxuICAgICAgc2VjdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zZWN0aW9uXCIpLFxuICAgICAgdGhlb3JlbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90aGVvcmVtXCIpLFxuICAgICAgbWV0YUxlbW1hTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFMZW1tYVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnRcIiksXG4gICAgICBjb25qZWN0dXJlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmplY3R1cmVcIiksXG4gICAgICBtZXRhdGhlb3JlbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdGhlb3JlbVwiKSxcbiAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21iaW5hdG9yRGVjbGFyYXRpb25cIiksXG4gICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc2ltcGxlVHlwZURlY2xhcmF0aW9uXCIpLFxuICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVQcmVmaXhEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uc3RydWN0b3JEZWNsYXJhdGlvblwiKSxcbiAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tcGxleFR5cGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZURlY2xhcmF0aW9uXCIpO1xuXG5jbGFzcyBUb3BMZXZlbFBhc3MgZXh0ZW5kcyBBc3luY1Bhc3Mge1xuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGVycm9yTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoZXJyb3JOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgZXJyb3IgPSBlcnJvckZyb21FcnJvck5vZGUoZXJyb3JOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgZXJyb3JWZXJpZmllcyA9IGF3YWl0IGVycm9yLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChlcnJvclZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogcnVsZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKHJ1bGVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBydWxlVmVyaWZpZXMgPSBhd2FpdCBydWxlLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChydWxlVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBheGlvbU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKGF4aW9tTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGF4aW9tID0gYXhpb21Gcm9tQXhpb21Ob2RlKGF4aW9tTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGF4aW9tVmVyaWZpZXMgPSBhd2FpdCBheGlvbS52ZXJpZnkoKTtcblxuICAgICAgICBpZiAoYXhpb21WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGxlbW1hTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAobGVtbWFOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbGVtbWEgPSBsZW1tYUZyb21MZW1tYU5vZGUobGVtbWFOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbGVtbWFWZXJpZmllcyA9IGF3YWl0IGxlbW1hLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChsZW1tYVZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogc2VjdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKHNlY3Rpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHNlY3Rpb25Gcm9tU2VjdGlvbk5vZGUoc2VjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzZWN0aW9uVmVyaWZpZXMgPSBhd2FpdCBzZWN0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChzZWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0aGVvcmVtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAodGhlb3JlbU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0aGVvcmVtID0gdGhlb3JlbUZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRoZW9yZW1WZXJpZmllcyA9IGF3YWl0IHRoZW9yZW0udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKHRoZW9yZW1WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGFMZW1tYU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKG1ldGFMZW1tYU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZXRhTGVtbWEgPSBtZXRhTGVtbWFGcm9tTWV0YUxlbW1hTm9kZShtZXRhTGVtbWFOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YUxlbW1hVmVyaWZpZXMgPSBhd2FpdCBtZXRhTGVtbWEudmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKG1ldGFMZW1tYVZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29uamVjdHVyZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKGNvbmplY3R1cmVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgY29uamVjdHVyZSA9IGNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb25qZWN0dXJlVmVyaWZpZXMgPSBhd2FpdCBjb25qZWN0dXJlLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChjb25qZWN0dXJlVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhdGhlb3JlbU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKG1ldGF0aGVvcmVtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlKG1ldGF0aGVvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGF0aGVvcmVtVmVyaWZpZXMgPSBhd2FpdCBtZXRhdGhlb3JlbS52ZXJpZnkoKTtcblxuICAgICAgICBpZiAobWV0YXRoZW9yZW1WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jICh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRpb24gPSB2YXJpYWJsZURlY2xhcmF0aW9uRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzID0gYXdhaXQgdmFyaWFibGVEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICBpZiAodmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHNpbXBsZVR5cGVEZWNsYXJhdGlvbiA9IHNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlKHNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25WZXJpZmllcyA9IGF3YWl0IHNpbXBsZVR5cGVEZWNsYXJhdGlvbi52ZXJpZnkoKTtcblxuICAgICAgICBpZiAoc2ltcGxlVHlwZURlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jICh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdHlwZVByZWZpeERlY2xhcmF0aW9uID0gdHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvblZlcmlmaWVzID0gYXdhaXQgdHlwZVByZWZpeERlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlZml4RGVjbGFyYXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZXMgPSBhd2FpdCBjb21iaW5hdG9yRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKGNvbWJpbmF0b3JEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Gcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXMgPSBhd2FpdCBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjb21wbGV4VHlwZURlY2xhcmF0aW9uID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25WZXJpZmllcyA9IGF3YWl0IGNvbXBsZXhUeXBlRGVjbGFyYXRpb24udmVyaWZ5KCk7XG5cbiAgICAgICAgaWYgKGNvbXBsZXhUeXBlRGVjbGFyYXRpb25WZXJpZmllcykge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcyA9IGF3YWl0IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uLnZlcmlmeSgpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNsYXNzIENvbmJpbmF0b3JQYXNzIGV4dGVuZHMgU2ltcGxlUGFzcyB7XG4gIHJ1bihzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSwgLy8vXG4gICAgICAgICAgZGVzY2VuZGVkID0gdGhpcy5kZXNjZW5kKGNoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlc2NlbmRlZCkge1xuICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBsZXQgc3RhdGVtZW50O1xuXG4gICAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWU7XG5cbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50LnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICBydW46ICh0ZXJtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGxldCB0ZXJtO1xuXG4gICAgICAgIHRlcm0gPSB0ZXJtRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtID0gdGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodHlwZU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jbGFzcyBDb25zdHJ1Y3RvclBhc3MgZXh0ZW5kcyBTaW1wbGVQYXNzIHtcbiAgcnVuKHRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksIC8vL1xuICAgICAgICAgIGRlc2NlbmRlZCA9IHRoaXMuZGVzY2VuZChjaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiAodGVybU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBsZXQgdGVybTtcblxuICAgICAgICB0ZXJtID0gdGVybUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgdGVybSA9IHRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogdHlwZU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHR5cGVOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgdG9wTGV2ZWxQYXNzID0gbmV3IFRvcExldmVsUGFzcygpLFxuICAgICAgY29tYmluYXRvclBhc3MgPSBuZXcgQ29uYmluYXRvclBhc3MoKSxcbiAgICAgIGNvbnN0cnVjdG9yUGFzcyA9IG5ldyBDb25zdHJ1Y3RvclBhc3MoKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHZlcmlmeUZpbGUoZmlsZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZpbGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGUgPSBmaWxlTm9kZSwgLy8vXG4gICAgICAgIHN1Y2VzcyA9IGF3YWl0IHRvcExldmVsUGFzcy5ydW4obm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKHN1Y2Vzcykge1xuICAgIGZpbGVWZXJpZmllcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gZmlsZVZlcmlmaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VGVybUFzQ29uc3RydWN0b3IodGVybSwgY29udGV4dCkge1xuICBsZXQgdGVybVZlcmlmaWVzQXNDb25zdHJ1Y3RvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgIHN1Y2Nlc3MgPSBjb25zdHJ1Y3RvclBhc3MucnVuKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHRlcm1WZXJpZmllc0FzQ29uc3RydWN0b3IgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllc0FzQ29uc3RydWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRBc0NvbWJpbmF0b3Ioc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllc0FzQ29tYmluYXRvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICBzdWNjZXNzID0gY29tYmluYXRvclBhc3MucnVuKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgc3RhdGVtZW50VmVyaWZpZXNBc0NvbWJpbmF0b3IgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVzQXNDb21iaW5hdG9yO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUZpbGUiLCJ2ZXJpZnlTdGF0ZW1lbnRBc0NvbWJpbmF0b3IiLCJ2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciIsIm5vZGVRdWVyeSIsInF1ZXJ5VXRpbGl0aWVzIiwicnVsZU5vZGVRdWVyeSIsInRlcm1Ob2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwiZXJyb3JOb2RlUXVlcnkiLCJheGlvbU5vZGVRdWVyeSIsImxlbW1hTm9kZVF1ZXJ5Iiwic2VjdGlvbk5vZGVRdWVyeSIsInRoZW9yZW1Ob2RlUXVlcnkiLCJtZXRhTGVtbWFOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJjb25qZWN0dXJlTm9kZVF1ZXJ5IiwibWV0YXRoZW9yZW1Ob2RlUXVlcnkiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5Iiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwidHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsIlRvcExldmVsUGFzcyIsIkFzeW5jUGFzcyIsIm1hcHMiLCJydW4iLCJlcnJvck5vZGUiLCJjb250ZXh0Iiwic3VjY2VzcyIsImVycm9yIiwiZXJyb3JGcm9tRXJyb3JOb2RlIiwiZXJyb3JWZXJpZmllcyIsInZlcmlmeSIsInJ1bGVOb2RlIiwicnVsZSIsInJ1bGVGcm9tUnVsZU5vZGUiLCJydWxlVmVyaWZpZXMiLCJheGlvbU5vZGUiLCJheGlvbSIsImF4aW9tRnJvbUF4aW9tTm9kZSIsImF4aW9tVmVyaWZpZXMiLCJsZW1tYU5vZGUiLCJsZW1tYSIsImxlbW1hRnJvbUxlbW1hTm9kZSIsImxlbW1hVmVyaWZpZXMiLCJzZWN0aW9uTm9kZSIsInNlY3Rpb24iLCJzZWN0aW9uRnJvbVNlY3Rpb25Ob2RlIiwic2VjdGlvblZlcmlmaWVzIiwidGhlb3JlbU5vZGUiLCJ0aGVvcmVtIiwidGhlb3JlbUZyb21UaGVvcmVtTm9kZSIsInRoZW9yZW1WZXJpZmllcyIsIm1ldGFMZW1tYU5vZGUiLCJtZXRhTGVtbWEiLCJtZXRhTGVtbWFGcm9tTWV0YUxlbW1hTm9kZSIsIm1ldGFMZW1tYVZlcmlmaWVzIiwiY29uamVjdHVyZU5vZGUiLCJjb25qZWN0dXJlIiwiY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZSIsImNvbmplY3R1cmVWZXJpZmllcyIsIm1ldGF0aGVvcmVtTm9kZSIsIm1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlIiwibWV0YXRoZW9yZW1WZXJpZmllcyIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbiIsInZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXMiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzaW1wbGVUeXBlRGVjbGFyYXRpb25WZXJpZmllcyIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb24iLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Gcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvblZlcmlmaWVzIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbkZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZXMiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uRnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvblZlcmlmaWVzIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25WZXJpZmllcyIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcyIsIkNvbmJpbmF0b3JQYXNzIiwiU2ltcGxlUGFzcyIsInN0YXRlbWVudE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImRlc2NlbmRlZCIsImRlc2NlbmQiLCJzdGF0ZW1lbnQiLCJzdGF0ZWQiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInZhbGlkYXRlIiwidGVybU5vZGUiLCJ0ZXJtIiwidGVybUZyb21UZXJtTm9kZSIsInZhbGlkYXRlc0ZvcndhcmRzIiwidHlwZU5vZGUiLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsIkNvbnN0cnVjdG9yUGFzcyIsInRvcExldmVsUGFzcyIsImNvbWJpbmF0b3JQYXNzIiwiY29uc3RydWN0b3JQYXNzIiwiZmlsZU5vZGUiLCJmaWxlVmVyaWZpZXMiLCJub2RlIiwic3VjZXNzIiwidGVybVZlcmlmaWVzQXNDb25zdHJ1Y3RvciIsImdldE5vZGUiLCJzdGF0ZW1lbnRWZXJpZmllc0FzQ29tYmluYXRvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBeWFzQkE7ZUFBQUE7O1FBMEJOQztlQUFBQTs7UUFiQUM7ZUFBQUE7OztnQ0FwYnNDO3lCQUVPO0FBa0I3RCxNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyw4QkFBYztBQUVwQyxNQUFNQyxnQkFBZ0JGLFVBQVUsVUFDMUJHLGdCQUFnQkgsVUFBVSxVQUMxQkksZ0JBQWdCSixVQUFVLFVBQzFCSyxpQkFBaUJMLFVBQVUsV0FDM0JNLGlCQUFpQk4sVUFBVSxXQUMzQk8saUJBQWlCUCxVQUFVLFdBQzNCUSxtQkFBbUJSLFVBQVUsYUFDN0JTLG1CQUFtQlQsVUFBVSxhQUM3QlUscUJBQXFCVixVQUFVLGVBQy9CVyxxQkFBcUJYLFVBQVUsZUFDL0JZLHNCQUFzQlosVUFBVSxnQkFDaENhLHVCQUF1QmIsVUFBVSxpQkFDakNjLCtCQUErQmQsVUFBVSx5QkFDekNlLGlDQUFpQ2YsVUFBVSwyQkFDM0NnQixpQ0FBaUNoQixVQUFVLDJCQUMzQ2lCLGlDQUFpQ2pCLFVBQVUsMkJBQzNDa0Isa0NBQWtDbEIsVUFBVSw0QkFDNUNtQixrQ0FBa0NuQixVQUFVLDRCQUM1Q29CLG1DQUFtQ3BCLFVBQVU7QUFFbkQsTUFBTXFCLHFCQUFxQkMseUJBQVM7SUFDbEMsT0FBT0MsT0FBTztRQUNa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