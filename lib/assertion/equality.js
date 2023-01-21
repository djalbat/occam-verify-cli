"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EqualityAssertion;
    }
});
var _query = require("../utilities/query");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var leftTermNodeQuery = (0, _query.nodeQuery)("/statement/term[0]"), rightTermNodeQuery = (0, _query.nodeQuery)("/statement/term[1]");
var EqualityAssertion = /*#__PURE__*/ function() {
    function EqualityAssertion(leftTermNode, rightTermNode) {
        _classCallCheck(this, EqualityAssertion);
        this.leftTermNode = leftTermNode;
        this.rightTermNode = rightTermNode;
    }
    _createClass(EqualityAssertion, [
        {
            key: "getLdftTermNode",
            value: function getLdftTermNode() {
                return this.leftTermNode;
            }
        },
        {
            key: "getRightTermNode",
            value: function getRightTermNode() {
                return this.rightTermNode;
            }
        },
        {
            key: "assert",
            value: function assert(proofContext) {
                debugger;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var leftTermNode = leftTermNodeQuery(statementNode), rightTermNode = rightTermNodeQuery(statementNode), equalityAssertion = new EqualityAssertion(leftTermNode, rightTermNode);
                return equalityAssertion;
            }
        }
    ]);
    return EqualityAssertion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vZXF1YWxpdHkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgbGVmdFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3Rlcm1bMF1cIiksXG4gICAgICByaWdodFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3Rlcm1bMV1cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVxdWFsaXR5QXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKSB7XG4gICAgdGhpcy5sZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGU7XG4gICAgdGhpcy5yaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldExkZnRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0VGVybU5vZGU7XG4gIH1cblxuICBnZXRSaWdodFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybU5vZGU7XG4gIH1cblxuICBhc3NlcnQocHJvb2ZDb250ZXh0KSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBlcXVhbGl0eUFzc2VydGlvbiA9IG5ldyBFcXVhbGl0eUFzc2VydGlvbihsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5QXNzZXJ0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkVxdWFsaXR5QXNzZXJ0aW9uIiwibGVmdFRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJyaWdodFRlcm1Ob2RlUXVlcnkiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0TGRmdFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsImFzc2VydCIsInByb29mQ29udGV4dCIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImVxdWFsaXR5QXNzZXJ0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OztxQkFMSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLHVCQUM5QkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLElBQUEsQUFBTUYsa0NBQU47YUFBTUEsa0JBQ1BJLFlBQVksRUFBRUMsYUFBYTs4QkFEcEJMO1FBRWpCLElBQUksQ0FBQ0ksWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2lCQUhKTDs7WUFNbkJNLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQjtnQkFDakIsT0FBTyxJQUFJLENBQUNGLGFBQWE7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsWUFBWSxFQUFFO2dCQUNuQixRQUFRO1lBQ1Y7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhLEVBQUU7Z0JBQ3RDLElBQU1QLGVBQWVILGtCQUFrQlUsZ0JBQ2pDTixnQkFBZ0JGLG1CQUFtQlEsZ0JBQ25DQyxvQkFBb0IsSUFyQlRaLGtCQXFCK0JJLGNBQWNDO2dCQUU5RCxPQUFPTztZQUNUOzs7V0F4Qm1CWiJ9