"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "verifyFile", {
    enumerable: true,
    get: function() {
        return verifyFile;
    }
});
const _occamlanguages = require("occam-languages");
const _element = require("../utilities/element");
const { nodeQuery } = _occamlanguages.queryUtilities;
const ruleNodeQuery = nodeQuery("/rule"), errorNodeQuery = nodeQuery("/error"), axiomNodeQuery = nodeQuery("/axiom"), lemmaNodeQuery = nodeQuery("/lemma"), sectionNodeQuery = nodeQuery("/section"), theoremNodeQuery = nodeQuery("/theorem"), metaLemmaNodeQuery = nodeQuery("/metaLemma"), conjectureNodeQuery = nodeQuery("/conjecture"), metatheoremNodeQuery = nodeQuery("/metatheorem"), variableDeclarationNodeQuery = nodeQuery("/variableDeclaration"), combinatorDeclarationNodeQuery = nodeQuery("/combinatorDeclaration"), simpleTypeDeclarationNodeQuery = nodeQuery("/simpleTypeDeclaration"), typePrefixDeclarationNodeQuery = nodeQuery("/typePrefixDeclaration"), constructorDeclarationNodeQuery = nodeQuery("/constructorDeclaration"), complexTypeDeclarationNodeQuery = nodeQuery("/complexTypeDeclaration"), metavariableDeclarationNodeQuery = nodeQuery("/metavariableDeclaration");
class TopLevelPass extends _occamlanguages.AsyncPass {
    static maps = [
        {
            nodeQuery: errorNodeQuery,
            run: async (errorNode, context)=>{
                let success = false;
                const error = (0, _element.errorFromErrorNode)(errorNode, context), errorVerifies = await error.verify(context);
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
                const rule = (0, _element.ruleFromRuleNode)(ruleNode, context), ruleVerifies = await rule.verify(context);
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
                const axiom = (0, _element.axiomFromAxiomNode)(axiomNode, context), axiomVerifies = await axiom.verify(context);
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
                const lemma = (0, _element.lemmaFromLemmaNode)(lemmaNode, context), lemmaVerifies = await lemma.verify(context);
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
                const section = (0, _element.sectionFromSectionNode)(sectionNode, context), sectionVerifies = await section.verify(context);
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
                const theorem = (0, _element.theoremFromTheoremNode)(theoremNode, context), theoremVerifies = await theorem.verify(context);
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
                const metaLemma = (0, _element.metaLemmaFromMetaLemmaNode)(metaLemmaNode, context), metaLemmaVerifies = await metaLemma.verify(context);
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
                const conjecture = (0, _element.conjectureFromConjectureNode)(conjectureNode, context), conjectureVerifies = await conjecture.verify(context);
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
                const metatheorem = (0, _element.metatheoremFromMetatheoremNode)(metatheoremNode, context), metatheoremVerifies = await metatheorem.verify(context);
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
                const variableDeclaration = (0, _element.variableDeclarationFromVariableDeclarationNode)(variableDeclarationNode, context), variableDeclarationVerifies = await variableDeclaration.verify(context);
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
                const simpleTypeDeclaration = (0, _element.simpleTypeDeclarationFromSimpleTypeDeclarationNode)(simpleTypeDeclarationNode, context), simpleTypeDeclarationVerifies = await simpleTypeDeclaration.verify(context);
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
                const typePrefixDeclaration = (0, _element.typePrefixDeclarationFromTypePrefixDeclarationNode)(typePrefixDeclarationNode, context), typePrefixDeclarationVerifies = await typePrefixDeclaration.verify(context);
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
                const combinatorDeclaration = (0, _element.combinatorDeclarationFromCombinatorDeclarationNode)(combinatorDeclarationNode, context), combinatorDeclarationVerifies = await combinatorDeclaration.verify(context);
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
                const constructorDeclaration = (0, _element.constructorDeclarationFromConstructorDeclarationNode)(constructorDeclarationNode, context), constructorDeclarationVerifies = await constructorDeclaration.verify(context);
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
                const complexTypeDeclaration = (0, _element.complexTypeDeclarationFromComplexTypeDeclarationNode)(complexTypeDeclarationNode, context), complexTypeDeclarationVerifies = await complexTypeDeclaration.verify(context);
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
                const metavariableDeclaration = (0, _element.metavariableDeclarationFromMetavariableDeclarationNode)(metavariableDeclarationNode, context), metavariableDeclarationVerifies = await metavariableDeclaration.verify(context);
                if (metavariableDeclarationVerifies) {
                    success = true;
                }
                return success;
            }
        }
    ];
}
const topLevelPass = new TopLevelPass();
async function verifyFile(fileNode, context) {
    let fileVerifies = false;
    const node = fileNode, sucess = await topLevelPass.run(node, context);
    if (sucess) {
        fileVerifies = true;
    }
    return fileVerifies;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZlcmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQXN5bmNQYXNzLCBxdWVyeVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIlxuXG5pbXBvcnQgeyBydWxlRnJvbVJ1bGVOb2RlLFxuICAgICAgICAgZXJyb3JGcm9tRXJyb3JOb2RlLFxuICAgICAgICAgYXhpb21Gcm9tQXhpb21Ob2RlLFxuICAgICAgICAgbGVtbWFGcm9tTGVtbWFOb2RlLFxuICAgICAgICAgc2VjdGlvbkZyb21TZWN0aW9uTm9kZSxcbiAgICAgICAgIHRoZW9yZW1Gcm9tVGhlb3JlbU5vZGUsXG4gICAgICAgICBtZXRhTGVtbWFGcm9tTWV0YUxlbW1hTm9kZSxcbiAgICAgICAgIGNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUsXG4gICAgICAgICBtZXRhdGhlb3JlbUZyb21NZXRhdGhlb3JlbU5vZGUsXG4gICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLFxuICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsXG4gICAgICAgICB0eXBlUHJlZml4RGVjbGFyYXRpb25Gcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSxcbiAgICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbkZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLFxuICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbkZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSxcbiAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25Gcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsXG4gICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbkZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuY29uc3QgeyBub2RlUXVlcnkgfSA9IHF1ZXJ5VXRpbGl0aWVzO1xuXG5jb25zdCBydWxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGVcIiksXG4gICAgICBlcnJvck5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcnJvclwiKSxcbiAgICAgIGF4aW9tTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2F4aW9tXCIpLFxuICAgICAgbGVtbWFOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbGVtbWFcIiksXG4gICAgICBzZWN0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NlY3Rpb25cIiksXG4gICAgICB0aGVvcmVtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3RoZW9yZW1cIiksXG4gICAgICBtZXRhTGVtbWFOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YUxlbW1hXCIpLFxuICAgICAgY29uamVjdHVyZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25qZWN0dXJlXCIpLFxuICAgICAgbWV0YXRoZW9yZW1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXRoZW9yZW1cIiksXG4gICAgICB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlRGVjbGFyYXRpb25cIiksXG4gICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tYmluYXRvckRlY2xhcmF0aW9uXCIpLFxuICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3NpbXBsZVR5cGVEZWNsYXJhdGlvblwiKSxcbiAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlUHJlZml4RGVjbGFyYXRpb25cIiksXG4gICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnN0cnVjdG9yRGVjbGFyYXRpb25cIiksXG4gICAgICBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbXBsZXhUeXBlRGVjbGFyYXRpb25cIiksXG4gICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvblwiKTtcblxuY2xhc3MgVG9wTGV2ZWxQYXNzIGV4dGVuZHMgQXN5bmNQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBlcnJvck5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKGVycm9yTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGVycm9yID0gZXJyb3JGcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGVycm9yVmVyaWZpZXMgPSBhd2FpdCBlcnJvci52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGVycm9yVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBydWxlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAocnVsZU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBydWxlID0gcnVsZUZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHJ1bGVWZXJpZmllcyA9IGF3YWl0IHJ1bGUudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChydWxlVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBheGlvbU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKGF4aW9tTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGF4aW9tID0gYXhpb21Gcm9tQXhpb21Ob2RlKGF4aW9tTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGF4aW9tVmVyaWZpZXMgPSBhd2FpdCBheGlvbS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGF4aW9tVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBsZW1tYU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKGxlbW1hTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGxlbW1hID0gbGVtbWFGcm9tTGVtbWFOb2RlKGxlbW1hTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGxlbW1hVmVyaWZpZXMgPSBhd2FpdCBsZW1tYS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGxlbW1hVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBzZWN0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoc2VjdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBzZWN0aW9uID0gc2VjdGlvbkZyb21TZWN0aW9uTm9kZShzZWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHNlY3Rpb25WZXJpZmllcyA9IGF3YWl0IHNlY3Rpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzZWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0aGVvcmVtTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAodGhlb3JlbU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0aGVvcmVtID0gdGhlb3JlbUZyb21UaGVvcmVtTm9kZSh0aGVvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRoZW9yZW1WZXJpZmllcyA9IGF3YWl0IHRoZW9yZW0udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0aGVvcmVtVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhTGVtbWFOb2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jIChtZXRhTGVtbWFOb2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YUxlbW1hID0gbWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUobWV0YUxlbW1hTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGFMZW1tYVZlcmlmaWVzID0gYXdhaXQgbWV0YUxlbW1hLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICBpZiAobWV0YUxlbW1hVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb25qZWN0dXJlTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoY29uamVjdHVyZU5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjb25qZWN0dXJlID0gY29uamVjdHVyZUZyb21Db25qZWN0dXJlTm9kZShjb25qZWN0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGNvbmplY3R1cmVWZXJpZmllcyA9IGF3YWl0IGNvbmplY3R1cmUudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb25qZWN0dXJlVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhdGhlb3JlbU5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKG1ldGF0aGVvcmVtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1Gcm9tTWV0YXRoZW9yZW1Ob2RlKG1ldGF0aGVvcmVtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGF0aGVvcmVtVmVyaWZpZXMgPSBhd2FpdCBtZXRhdGhlb3JlbS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG1ldGF0aGVvcmVtVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB2YXJpYWJsZURlY2xhcmF0aW9uID0gdmFyaWFibGVEZWNsYXJhdGlvbkZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllcyA9IGF3YWl0IHZhcmlhYmxlRGVjbGFyYXRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jIChzaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc2ltcGxlVHlwZURlY2xhcmF0aW9uID0gc2ltcGxlVHlwZURlY2xhcmF0aW9uRnJvbVNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUoc2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvblZlcmlmaWVzID0gYXdhaXQgc2ltcGxlVHlwZURlY2xhcmF0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICBpZiAoc2ltcGxlVHlwZURlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jICh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdHlwZVByZWZpeERlY2xhcmF0aW9uID0gdHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvblZlcmlmaWVzID0gYXdhaXQgdHlwZVByZWZpeERlY2xhcmF0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICBpZiAodHlwZVByZWZpeERlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46IGFzeW5jIChjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgY29tYmluYXRvckRlY2xhcmF0aW9uID0gY29tYmluYXRvckRlY2xhcmF0aW9uRnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvblZlcmlmaWVzID0gYXdhaXQgY29tYmluYXRvckRlY2xhcmF0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICBpZiAoY29tYmluYXRvckRlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbkZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllcyA9IGF3YWl0IGNvbnN0cnVjdG9yRGVjbGFyYXRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvckRlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5LFxuICAgICAgcnVuOiBhc3luYyAoY29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBjb21wbGV4VHlwZURlY2xhcmF0aW9uID0gY29tcGxleFR5cGVEZWNsYXJhdGlvbkZyb21Db21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZShjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGNvbXBsZXhUeXBlRGVjbGFyYXRpb25WZXJpZmllcyA9IGF3YWl0IGNvbXBsZXhUeXBlRGVjbGFyYXRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb21wbGV4VHlwZURlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogYXN5bmMgKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Gcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXMgPSBhd2FpdCBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgdG9wTGV2ZWxQYXNzID0gbmV3IFRvcExldmVsUGFzcygpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5RmlsZShmaWxlTm9kZSwgY29udGV4dCkge1xuICBsZXQgZmlsZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZSA9IGZpbGVOb2RlLCAvLy9cbiAgICAgICAgc3VjZXNzID0gYXdhaXQgdG9wTGV2ZWxQYXNzLnJ1bihub2RlLCBjb250ZXh0KTtcblxuICBpZiAoc3VjZXNzKSB7XG4gICAgZmlsZVZlcmlmaWVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmaWxlVmVyaWZpZXM7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RmlsZSIsIm5vZGVRdWVyeSIsInF1ZXJ5VXRpbGl0aWVzIiwicnVsZU5vZGVRdWVyeSIsImVycm9yTm9kZVF1ZXJ5IiwiYXhpb21Ob2RlUXVlcnkiLCJsZW1tYU5vZGVRdWVyeSIsInNlY3Rpb25Ob2RlUXVlcnkiLCJ0aGVvcmVtTm9kZVF1ZXJ5IiwibWV0YUxlbW1hTm9kZVF1ZXJ5IiwiY29uamVjdHVyZU5vZGVRdWVyeSIsIm1ldGF0aGVvcmVtTm9kZVF1ZXJ5IiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGVRdWVyeSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGVRdWVyeSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJUb3BMZXZlbFBhc3MiLCJBc3luY1Bhc3MiLCJtYXBzIiwicnVuIiwiZXJyb3JOb2RlIiwiY29udGV4dCIsInN1Y2Nlc3MiLCJlcnJvciIsImVycm9yRnJvbUVycm9yTm9kZSIsImVycm9yVmVyaWZpZXMiLCJ2ZXJpZnkiLCJydWxlTm9kZSIsInJ1bGUiLCJydWxlRnJvbVJ1bGVOb2RlIiwicnVsZVZlcmlmaWVzIiwiYXhpb21Ob2RlIiwiYXhpb20iLCJheGlvbUZyb21BeGlvbU5vZGUiLCJheGlvbVZlcmlmaWVzIiwibGVtbWFOb2RlIiwibGVtbWEiLCJsZW1tYUZyb21MZW1tYU5vZGUiLCJsZW1tYVZlcmlmaWVzIiwic2VjdGlvbk5vZGUiLCJzZWN0aW9uIiwic2VjdGlvbkZyb21TZWN0aW9uTm9kZSIsInNlY3Rpb25WZXJpZmllcyIsInRoZW9yZW1Ob2RlIiwidGhlb3JlbSIsInRoZW9yZW1Gcm9tVGhlb3JlbU5vZGUiLCJ0aGVvcmVtVmVyaWZpZXMiLCJtZXRhTGVtbWFOb2RlIiwibWV0YUxlbW1hIiwibWV0YUxlbW1hRnJvbU1ldGFMZW1tYU5vZGUiLCJtZXRhTGVtbWFWZXJpZmllcyIsImNvbmplY3R1cmVOb2RlIiwiY29uamVjdHVyZSIsImNvbmplY3R1cmVGcm9tQ29uamVjdHVyZU5vZGUiLCJjb25qZWN0dXJlVmVyaWZpZXMiLCJtZXRhdGhlb3JlbU5vZGUiLCJtZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtRnJvbU1ldGF0aGVvcmVtTm9kZSIsIm1ldGF0aGVvcmVtVmVyaWZpZXMiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJ2YXJpYWJsZURlY2xhcmF0aW9uRnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVzIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbkZyb21TaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uVmVyaWZpZXMiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeERlY2xhcmF0aW9uIiwidHlwZVByZWZpeERlY2xhcmF0aW9uRnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25WZXJpZmllcyIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb24iLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Gcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvblZlcmlmaWVzIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbkZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25WZXJpZmllcyIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlIiwiY29tcGxleFR5cGVEZWNsYXJhdGlvbiIsImNvbXBsZXhUeXBlRGVjbGFyYXRpb25Gcm9tQ29tcGxleFR5cGVEZWNsYXJhdGlvbk5vZGUiLCJjb21wbGV4VHlwZURlY2xhcmF0aW9uVmVyaWZpZXMiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZXMiLCJ0b3BMZXZlbFBhc3MiLCJmaWxlTm9kZSIsImZpbGVWZXJpZmllcyIsIm5vZGUiLCJzdWNlc3MiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStSc0JBOzs7ZUFBQUE7OztnQ0E3Um9CO3lCQWlCNkI7QUFFdkUsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsOEJBQWM7QUFFcEMsTUFBTUMsZ0JBQWdCRixVQUFVLFVBQzFCRyxpQkFBaUJILFVBQVUsV0FDM0JJLGlCQUFpQkosVUFBVSxXQUMzQkssaUJBQWlCTCxVQUFVLFdBQzNCTSxtQkFBbUJOLFVBQVUsYUFDN0JPLG1CQUFtQlAsVUFBVSxhQUM3QlEscUJBQXFCUixVQUFVLGVBQy9CUyxzQkFBc0JULFVBQVUsZ0JBQ2hDVSx1QkFBdUJWLFVBQVUsaUJBQ2pDVywrQkFBK0JYLFVBQVUseUJBQ3pDWSxpQ0FBaUNaLFVBQVUsMkJBQzNDYSxp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