"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TypeNode;
    }
});
const _occamlanguages = require("occam-languages");
class TypeNode extends _occamlanguages.NonTerminalNode {
    isPrefixed() {
        const multiplicity = this.getMultiplicity(), prefixed = multiplicity > 1;
        return prefixed;
    }
    getTypeName() {
        let typeName;
        const prefixed = this.isPrefixed(), nameIndex = prefixed ? 2 : 0;
        this.someChildNode((childNode, index)=>{
            if (index === nameIndex) {
                const typeTerminalNode = childNode, content = typeTerminalNode.getContent();
                typeName = content; ///
                return true;
            }
        });
        return typeName;
    }
    getTypePrefixName() {
        let typePrefixName = null;
        const prefixed = this.isPrefixed();
        if (prefixed) {
            const prefixIndex = 0;
            this.someChildNode((childNode, index)=>{
                if (index === prefixIndex) {
                    const typeTerminalNode = childNode, content = typeTerminalNode.getContent();
                    typePrefixName = content; ///
                    return true;
                }
            });
        }
        return typePrefixName;
    }
    getNominalTypeName() {
        let nominalTypeName;
        const prefixed = this.isPrefixed(), typeName = this.getTypeName();
        if (prefixed) {
            const typePrefixName = this.getTypePrefixName();
            nominalTypeName = `${typePrefixName}${typeName}`;
        } else {
            nominalTypeName = typeName; ///
        }
        return nominalTypeName;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _occamlanguages.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TypeNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHlwZU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBpc1ByZWZpeGVkKCkge1xuICAgIGNvbnN0IG11bHRpcGxpY2l0eSA9IHRoaXMuZ2V0TXVsdGlwbGljaXR5KCksXG4gICAgICAgICAgcHJlZml4ZWQgPSAobXVsdGlwbGljaXR5ID4gMSk7XG5cbiAgICByZXR1cm4gcHJlZml4ZWQ7XG4gIH1cblxuICBnZXRUeXBlTmFtZSgpIHtcbiAgICBsZXQgdHlwZU5hbWU7XG5cbiAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpLFxuICAgICAgICAgIG5hbWVJbmRleCA9IHByZWZpeGVkID8gMiA6IDA7XG5cbiAgICB0aGlzLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gbmFtZUluZGV4KSB7XG4gICAgICAgIGNvbnN0IHR5cGVUZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICBjb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgICAgdHlwZU5hbWUgPSBjb250ZW50OyAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0eXBlTmFtZTtcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXhOYW1lKCkge1xuICAgIGxldCB0eXBlUHJlZml4TmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCBwcmVmaXhlZCA9IHRoaXMuaXNQcmVmaXhlZCgpO1xuXG4gICAgaWYgKHByZWZpeGVkKSB7XG4gICAgICBjb25zdCBwcmVmaXhJbmRleCA9IDA7XG5cbiAgICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPT09IHByZWZpeEluZGV4KSB7XG4gICAgICAgICAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IGNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgY29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSBjb250ZW50OyAvLy9cblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeE5hbWU7XG4gIH1cblxuICBnZXROb21pbmFsVHlwZU5hbWUoKSB7XG4gICAgbGV0IG5vbWluYWxUeXBlTmFtZTtcblxuICAgIGNvbnN0IHByZWZpeGVkID0gdGhpcy5pc1ByZWZpeGVkKCksXG4gICAgICAgICAgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKCk7XG5cbiAgICBpZiAocHJlZml4ZWQpIHtcbiAgICAgIGNvbnN0IHR5cGVQcmVmaXhOYW1lID0gdGhpcy5nZXRUeXBlUHJlZml4TmFtZSgpO1xuXG4gICAgICBub21pbmFsVHlwZU5hbWUgPSBgJHt0eXBlUHJlZml4TmFtZX0ke3R5cGVOYW1lfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOYW1lOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoVHlwZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlR5cGVOb2RlIiwiTm9uVGVybWluYWxOb2RlIiwiaXNQcmVmaXhlZCIsIm11bHRpcGxpY2l0eSIsImdldE11bHRpcGxpY2l0eSIsInByZWZpeGVkIiwiZ2V0VHlwZU5hbWUiLCJ0eXBlTmFtZSIsIm5hbWVJbmRleCIsInNvbWVDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJpbmRleCIsInR5cGVUZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImdldFR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJwcmVmaXhJbmRleCIsImdldE5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7O2dDQUZXO0FBRWpCLE1BQU1BLGlCQUFpQkMsK0JBQWU7SUFDbkRDLGFBQWE7UUFDWCxNQUFNQyxlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQ0MsV0FBWUYsZUFBZTtRQUVqQyxPQUFPRTtJQUNUO0lBRUFDLGNBQWM7UUFDWixJQUFJQztRQUVKLE1BQU1GLFdBQVcsSUFBSSxDQUFDSCxVQUFVLElBQzFCTSxZQUFZSCxXQUFXLElBQUk7UUFFakMsSUFBSSxDQUFDSSxhQUFhLENBQUMsQ0FBQ0MsV0FBV0M7WUFDN0IsSUFBSUEsVUFBVUgsV0FBVztnQkFDdkIsTUFBTUksbUJBQW1CRixXQUNuQkcsVUFBVUQsaUJBQWlCRSxVQUFVO2dCQUUzQ1AsV0FBV00sU0FBUyxHQUFHO2dCQUV2QixPQUFPO1lBQ1Q7UUFDRjtRQUVBLE9BQU9OO0lBQ1Q7SUFFQVEsb0JBQW9CO1FBQ2xCLElBQUlDLGlCQUFpQjtRQUVyQixNQUFNWCxXQUFXLElBQUksQ0FBQ0gsVUFBVTtRQUVoQyxJQUFJRyxVQUFVO1lBQ1osTUFBTVksY0FBYztZQUVwQixJQUFJLENBQUNSLGFBQWEsQ0FBQyxDQUFDQyxXQUFXQztnQkFDN0IsSUFBSUEsVUFBVU0sYUFBYTtvQkFDekIsTUFBTUwsbUJBQW1CRixXQUNuQkcsVUFBVUQsaUJBQWlCRSxVQUFVO29CQUUzQ0UsaUJBQWlCSCxTQUFTLEdBQUc7b0JBRTdCLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO1FBRUEsT0FBT0c7SUFDVDtJQUVBRSxxQkFBcUI7UUFDbkIsSUFBSUM7UUFFSixNQUFNZCxXQUFXLElBQUksQ0FBQ0gsVUFBVSxJQUMxQkssV0FBVyxJQUFJLENBQUNELFdBQVc7UUFFakMsSUFBSUQsVUFBVTtZQUNaLE1BQU1XLGlCQUFpQixJQUFJLENBQUNELGlCQUFpQjtZQUU3Q0ksa0JBQWtCLEdBQUdILGlCQUFpQlQsVUFBVTtRQUNsRCxPQUFPO1lBQ0xZLGtCQUFrQlosVUFBVyxHQUFHO1FBQ2xDO1FBRUEsT0FBT1k7SUFDVDtJQUVBLE9BQU9DLDJDQUEyQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBT3ZCLCtCQUFlLENBQUNtQiwwQ0FBMEMsQ0FBQ3BCLFVBQVVxQixVQUFVQyxZQUFZQyxTQUFTQztJQUFhO0FBQ3pOIn0=