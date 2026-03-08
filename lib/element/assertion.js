"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Assertion;
    }
});
const _occamlanguages = require("occam-languages");
class Assertion extends _occamlanguages.Element {
    getAssertionNode() {
        const node = this.getNode(), assertionNode = node; ///
        return assertionNode;
    }
    matchAssertionNode(assertionNode) {
        const node = assertionNode, nodeMatches = this.matchNode(node), assertionNodeMatches = nodeMatches; ///
        return assertionNodeMatches;
    }
    findValidAssertion(context) {
        const assertionNode = this.getAssertionNode(), assertion = context.findAssertionByAssertionNode(assertionNode), validAssertion = assertion; ///
        return validAssertion;
    }
    isEqualTo(assertion) {
        const assertionNode = assertion.getNode(), assertionNodeMatches = this.matchAssertionNode(assertionNode), equalTo = assertionNodeMatches; ///
        return equalTo;
    }
    toJSON() {
        const { name } = this.constructor, string = this.getString(), json = {
            name,
            string
        };
        return json;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXJ0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldEFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGFzc2VydGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBhc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgbWF0Y2hBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gYXNzZXJ0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBhc3NlcnRpb25Ob2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBhc3NlcnRpb25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYWxpZEFzc2VydGlvbihjb250ZXh0KSB7XG4gICAgY29uc3QgYXNzZXJ0aW9uTm9kZSA9IHRoaXMuZ2V0QXNzZXJ0aW9uTm9kZSgpLFxuICAgICAgICAgIGFzc2VydGlvbiA9IGNvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB2YWxpZEFzc2VydGlvbiA9IGFzc2VydGlvbjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkQXNzZXJ0aW9uO1xuICB9XG5cbiAgaXNFcXVhbFRvKGFzc2VydGlvbikge1xuICAgIGNvbnN0IGFzc2VydGlvbk5vZGUgPSBhc3NlcnRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIGFzc2VydGlvbk5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IGFzc2VydGlvbk5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkFzc2VydGlvbiIsIkVsZW1lbnQiLCJnZXRBc3NlcnRpb25Ob2RlIiwibm9kZSIsImdldE5vZGUiLCJhc3NlcnRpb25Ob2RlIiwibWF0Y2hBc3NlcnRpb25Ob2RlIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJhc3NlcnRpb25Ob2RlTWF0Y2hlcyIsImZpbmRWYWxpZEFzc2VydGlvbiIsImNvbnRleHQiLCJhc3NlcnRpb24iLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwidmFsaWRBc3NlcnRpb24iLCJpc0VxdWFsVG8iLCJlcXVhbFRvIiwidG9KU09OIiwibmFtZSIsInN0cmluZyIsImdldFN0cmluZyIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7Z0NBRkc7QUFFVCxNQUFNQSxrQkFBa0JDLHVCQUFPO0lBQzVDQyxtQkFBbUI7UUFDakIsTUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLGdCQUFnQkYsTUFBTSxHQUFHO1FBRS9CLE9BQU9FO0lBQ1Q7SUFFQUMsbUJBQW1CRCxhQUFhLEVBQUU7UUFDaEMsTUFBTUYsT0FBT0UsZUFDUEUsY0FBYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0wsT0FDN0JNLHVCQUF1QkYsYUFBYSxHQUFHO1FBRTdDLE9BQU9FO0lBQ1Q7SUFFQUMsbUJBQW1CQyxPQUFPLEVBQUU7UUFDMUIsTUFBTU4sZ0JBQWdCLElBQUksQ0FBQ0gsZ0JBQWdCLElBQ3JDVSxZQUFZRCxRQUFRRSw0QkFBNEIsQ0FBQ1IsZ0JBQ2pEUyxpQkFBaUJGLFdBQVksR0FBRztRQUV0QyxPQUFPRTtJQUNUO0lBRUFDLFVBQVVILFNBQVMsRUFBRTtRQUNuQixNQUFNUCxnQkFBZ0JPLFVBQVVSLE9BQU8sSUFDakNLLHVCQUF1QixJQUFJLENBQUNILGtCQUFrQixDQUFDRCxnQkFDL0NXLFVBQVVQLHNCQUF1QixHQUFHO1FBRTFDLE9BQU9PO0lBQ1Q7SUFFQUMsU0FBUztRQUNQLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFDM0JDLFNBQVMsSUFBSSxDQUFDQyxTQUFTLElBQ3ZCQyxPQUFPO1lBQ0xIO1lBQ0FDO1FBQ0Y7UUFFTixPQUFPRTtJQUNUO0FBQ0YifQ==