"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Judgement;
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
var Judgement = /*#__PURE__*/ function() {
    function Judgement(node, frame, declaration) {
        _class_call_check(this, Judgement);
        this.node = node;
        this.frame = frame;
        this.declaration = declaration;
    }
    _create_class(Judgement, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getFrame",
            value: function getFrame() {
                return this.frame;
            }
        },
        {
            key: "getDeclaration",
            value: function getDeclaration() {
                return this.declaration;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.frame.getMetavariable();
            }
        },
        {
            key: "unifyMetaLemmaOrMetatheorem",
            value: function unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem) {
                return this.frame.unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem);
            }
        }
    ], [
        {
            key: "fromJudgementNodeFrameAndDeclaration",
            value: function fromJudgementNodeFrameAndDeclaration(judgementNode, frame, declaration) {
                var node = judgementNode, judgement = new Judgement(node, frame, declaration);
                return judgement;
            }
        }
    ]);
    return Judgement;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qdWRnZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEp1ZGdlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGZyYW1lLCBkZWNsYXJhdGlvbikge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMuZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbjtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7IHJldHVybiB0aGlzLmZyYW1lLmdldE1ldGF2YXJpYWJsZSgpOyB9XG5cbiAgdW5pZnlNZXRhTGVtbWFPck1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSB7IHJldHVybiB0aGlzLmZyYW1lLnVuaWZ5TWV0YUxlbW1hT3JNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSk7IH1cblxuICBzdGF0aWMgZnJvbUp1ZGdlbWVudE5vZGVGcmFtZUFuZERlY2xhcmF0aW9uKGp1ZGdlbWVudE5vZGUsIGZyYW1lLCBkZWNsYXJhdGlvbikge1xuICAgIGNvbnN0IG5vZGUgPSBqdWRnZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnQgPSBuZXcgSnVkZ2VtZW50KG5vZGUsIGZyYW1lLCBkZWNsYXJhdGlvbik7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSnVkZ2VtZW50Iiwibm9kZSIsImZyYW1lIiwiZGVjbGFyYXRpb24iLCJnZXROb2RlIiwiZ2V0RnJhbWUiLCJnZXREZWNsYXJhdGlvbiIsImdldE1ldGF2YXJpYWJsZSIsInVuaWZ5TWV0YUxlbW1hT3JNZXRhdGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwiZnJvbUp1ZGdlbWVudE5vZGVGcmFtZUFuZERlY2xhcmF0aW9uIiwianVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSwwQkFBTjthQUFNQSxVQUNQQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsV0FBVztnQ0FEakJIO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7a0JBSkZIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxLQUFLO1lBQ25COzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxXQUFXO1lBQ3pCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFvQixPQUFPLElBQUksQ0FBQ0wsS0FBSyxDQUFDSyxlQUFlO1lBQUk7OztZQUV6REMsS0FBQUE7bUJBQUFBLFNBQUFBLDRCQUE0QkMsb0JBQW9CO2dCQUFJLE9BQU8sSUFBSSxDQUFDUCxLQUFLLENBQUNNLDJCQUEyQixDQUFDQztZQUF1Qjs7OztZQUVsSEMsS0FBQUE7bUJBQVAsU0FBT0EscUNBQXFDQyxhQUFhLEVBQUVULEtBQUssRUFBRUMsV0FBVztnQkFDM0UsSUFBTUYsT0FBT1UsZUFDUEMsWUFBWSxJQXpCRFosVUF5QmVDLE1BQU1DLE9BQU9DO2dCQUU3QyxPQUFPUztZQUNUOzs7V0E1Qm1CWiJ9