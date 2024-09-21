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
        }
    ], [
        {
            key: "fromJudgementNodeFrameAndDeclaration",
            value: // matchMetavariableNode(metavariableNode) {
            //   const metavariableNodeMatches = this.metavariableNode.match(metavariableNode);
            //
            //   return metavariableNodeMatches;
            // }
            // unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem) { return this.frame.unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem); }
            function fromJudgementNodeFrameAndDeclaration(judgementNode, frame, declaration) {
                var node = judgementNode, judgement = new Judgement(node, frame, declaration);
                return judgement;
            }
        }
    ]);
    return Judgement;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qdWRnZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEp1ZGdlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGZyYW1lLCBkZWNsYXJhdGlvbikge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMuZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbjtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb247XG4gIH1cblxuICAvLyBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAvLyAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tZXRhdmFyaWFibGVOb2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuICAvL1xuICAvLyAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgLy8gfVxuXG4gIC8vIHVuaWZ5TWV0YUxlbW1hT3JNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSkgeyByZXR1cm4gdGhpcy5mcmFtZS51bmlmeU1ldGFMZW1tYU9yTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0pOyB9XG5cbiAgc3RhdGljIGZyb21KdWRnZW1lbnROb2RlRnJhbWVBbmREZWNsYXJhdGlvbihqdWRnZW1lbnROb2RlLCBmcmFtZSwgZGVjbGFyYXRpb24pIHtcbiAgICBjb25zdCBub2RlID0ganVkZ2VtZW50Tm9kZSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBuZXcgSnVkZ2VtZW50KG5vZGUsIGZyYW1lLCBkZWNsYXJhdGlvbik7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSnVkZ2VtZW50Iiwibm9kZSIsImZyYW1lIiwiZGVjbGFyYXRpb24iLCJnZXROb2RlIiwiZ2V0RnJhbWUiLCJnZXREZWNsYXJhdGlvbiIsImZyb21KdWRnZW1lbnROb2RlRnJhbWVBbmREZWNsYXJhdGlvbiIsImp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsMEJBQU47YUFBTUEsVUFDUEMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFdBQVc7Z0NBRGpCSDtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFdBQVcsR0FBR0E7O2tCQUpGSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsS0FBSztZQUNuQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7OztZQVVPSSxLQUFBQTttQkFBUCxBQVJBLDRDQUE0QztZQUM1QyxtRkFBbUY7WUFDbkYsRUFBRTtZQUNGLG9DQUFvQztZQUNwQyxJQUFJO1lBRUosNkhBQTZIO1lBRTdILFNBQU9BLHFDQUFxQ0MsYUFBYSxFQUFFTixLQUFLLEVBQUVDLFdBQVc7Z0JBQzNFLElBQU1GLE9BQU9PLGVBQ1BDLFlBQVksSUE3QkRULFVBNkJlQyxNQUFNQyxPQUFPQztnQkFFN0MsT0FBT007WUFDVDs7O1dBaENtQlQifQ==