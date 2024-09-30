"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Proof;
    }
});
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Proof = /*#__PURE__*/ function() {
    function Proof(node) {
        _class_call_check(this, Proof);
        this.node = node;
    }
    _create_class(Proof, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, conclusion, localContext) {
                debugger;
            }
        }
    ], [
        {
            key: "fromProofNode",
            value: function fromProofNode(proofNode, fileContext) {
                var proof = null;
                if (proofNode !== null) {
                    var node = proofNode;
                    proof = new Proof(node);
                }
                return proof;
            }
        }
    ]);
    return Proof;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvb2Yge1xuICBjb25zdHJ1Y3Rvcihub2RlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBjb25jbHVzaW9uLCBsb2NhbENvbnRleHQpIHtcbiAgICBkZWJ1Z2dlclxuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBwcm9vZiA9IG51bGw7XG5cbiAgICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gcHJvb2ZOb2RlO1xuXG4gICAgICBwcm9vZiA9IG5ldyBQcm9vZihub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2Y7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcm9vZiIsIm5vZGUiLCJnZXROb2RlIiwidmVyaWZ5Iiwic3Vic3RpdHV0aW9ucyIsImNvbmNsdXNpb24iLCJsb2NhbENvbnRleHQiLCJmcm9tUHJvb2ZOb2RlIiwicHJvb2ZOb2RlIiwiZmlsZUNvbnRleHQiLCJwcm9vZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSxzQkFBTjthQUFNQSxNQUNQQyxJQUFJO2dDQURHRDtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7O2tCQUZLRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsSUFBSTtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxhQUFhLEVBQUVDLFVBQVUsRUFBRUMsWUFBWTtnQkFDNUMsUUFBUTtZQUNWOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRUMsV0FBVztnQkFDekMsSUFBSUMsUUFBUTtnQkFFWixJQUFJRixjQUFjLE1BQU07b0JBQ3RCLElBQU1QLE9BQU9PO29CQUViRSxRQUFRLElBbkJPVixNQW1CR0M7Z0JBQ3BCO2dCQUVBLE9BQU9TO1lBQ1Q7OztXQXZCbUJWIn0=