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
            key: "getMetavariableName",
            value: function getMetavariableName() {
                return this.frame.getMetavariableName();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qdWRnZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEp1ZGdlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGZyYW1lLCBkZWNsYXJhdGlvbikge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMuZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbjtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb247XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkgeyByZXR1cm4gdGhpcy5mcmFtZS5nZXRNZXRhdmFyaWFibGVOYW1lKCk7IH1cblxuICB1bmlmeU1ldGFMZW1tYU9yTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0pIHsgcmV0dXJuIHRoaXMuZnJhbWUudW5pZnlNZXRhTGVtbWFPck1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtKTsgfVxuXG4gIHN0YXRpYyBmcm9tSnVkZ2VtZW50Tm9kZUZyYW1lQW5kRGVjbGFyYXRpb24oanVkZ2VtZW50Tm9kZSwgZnJhbWUsIGRlY2xhcmF0aW9uKSB7XG4gICAgY29uc3Qgbm9kZSA9IGp1ZGdlbWVudE5vZGUsXG4gICAgICAgICAganVkZ2VtZW50ID0gbmV3IEp1ZGdlbWVudChub2RlLCBmcmFtZSwgZGVjbGFyYXRpb24pO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkp1ZGdlbWVudCIsIm5vZGUiLCJmcmFtZSIsImRlY2xhcmF0aW9uIiwiZ2V0Tm9kZSIsImdldEZyYW1lIiwiZ2V0RGVjbGFyYXRpb24iLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwidW5pZnlNZXRhTGVtbWFPck1ldGF0aGVvcmVtIiwibWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJmcm9tSnVkZ2VtZW50Tm9kZUZyYW1lQW5kRGVjbGFyYXRpb24iLCJqdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLDBCQUFOO2FBQU1BLFVBQ1BDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxXQUFXO2dDQURqQkg7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztrQkFKRkg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILEtBQUs7WUFDbkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQXdCLE9BQU8sSUFBSSxDQUFDTCxLQUFLLENBQUNLLG1CQUFtQjtZQUFJOzs7WUFFakVDLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJDLG9CQUFvQjtnQkFBSSxPQUFPLElBQUksQ0FBQ1AsS0FBSyxDQUFDTSwyQkFBMkIsQ0FBQ0M7WUFBdUI7Ozs7WUFFbEhDLEtBQUFBO21CQUFQLFNBQU9BLHFDQUFxQ0MsYUFBYSxFQUFFVCxLQUFLLEVBQUVDLFdBQVc7Z0JBQzNFLElBQU1GLE9BQU9VLGVBQ1BDLFlBQVksSUF6QkRaLFVBeUJlQyxNQUFNQyxPQUFPQztnQkFFN0MsT0FBT1M7WUFDVDs7O1dBNUJtQloifQ==