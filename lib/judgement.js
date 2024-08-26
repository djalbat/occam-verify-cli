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
    function Judgement(node, frame, metavariableNode) {
        _class_call_check(this, Judgement);
        this.node = node;
        this.frame = frame;
        this.metavariableNode = metavariableNode;
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
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                return this.metavariableNode;
            }
        },
        {
            key: "getDeclarations",
            value: function getDeclarations() {
                return this.frame.getDeclarations();
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var metavariableNodeMatches = this.metavariableNode.match(metavariableNode);
                return metavariableNodeMatches;
            }
        },
        {
            key: "matchMetaLemmaOrMetaTheorem",
            value: function matchMetaLemmaOrMetaTheorem(metaLemmaMetatheorem) {
                return this.frame.matchMetaLemmaOrMetaTheorem(metaLemmaMetatheorem);
            }
        }
    ], [
        {
            key: "fromJudgementNodeFrameAndMetavariableNode",
            value: function fromJudgementNodeFrameAndMetavariableNode(judgementNode, frame, metavariableNode) {
                var node = judgementNode, judgement = new Judgement(node, frame, metavariableNode);
                return judgement;
            }
        }
    ]);
    return Judgement;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qdWRnZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEp1ZGdlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGZyYW1lLCBtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkgeyByZXR1cm4gdGhpcy5mcmFtZS5nZXREZWNsYXJhdGlvbnMoKTsgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1ldGF2YXJpYWJsZU5vZGUubWF0Y2gobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFMZW1tYU9yTWV0YVRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0pIHsgcmV0dXJuIHRoaXMuZnJhbWUubWF0Y2hNZXRhTGVtbWFPck1ldGFUaGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtKTsgfVxuXG4gIHN0YXRpYyBmcm9tSnVkZ2VtZW50Tm9kZUZyYW1lQW5kTWV0YXZhcmlhYmxlTm9kZShqdWRnZW1lbnROb2RlLCBmcmFtZSwgbWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBqdWRnZW1lbnROb2RlLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IG5ldyBKdWRnZW1lbnQobm9kZSwgZnJhbWUsIG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkp1ZGdlbWVudCIsIm5vZGUiLCJmcmFtZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwiZ2V0RnJhbWUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0RGVjbGFyYXRpb25zIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaCIsIm1hdGNoTWV0YUxlbW1hT3JNZXRhVGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwiZnJvbUp1ZGdlbWVudE5vZGVGcmFtZUFuZE1ldGF2YXJpYWJsZU5vZGUiLCJqdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLDBCQUFELEFBQUw7YUFBTUEsVUFDUEMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLGdCQUFnQjtnQ0FEdEJIO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBOztrQkFKUEg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILEtBQUs7WUFDbkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGdCQUFnQjtZQUM5Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBb0IsT0FBTyxJQUFJLENBQUNMLEtBQUssQ0FBQ0ssZUFBZTtZQUFJOzs7WUFFekRDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JMLGdCQUFnQjtnQkFDcEMsSUFBTU0sMEJBQTBCLElBQUksQ0FBQ04sZ0JBQWdCLENBQUNPLEtBQUssQ0FBQ1A7Z0JBRTVELE9BQU9NO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCQyxvQkFBb0I7Z0JBQUksT0FBTyxJQUFJLENBQUNWLEtBQUssQ0FBQ1MsMkJBQTJCLENBQUNDO1lBQXVCOzs7O1lBRWxIQyxLQUFBQTttQkFBUCxTQUFPQSwwQ0FBMENDLGFBQWEsRUFBRVosS0FBSyxFQUFFQyxnQkFBZ0I7Z0JBQ3JGLElBQU1GLE9BQU9hLGVBQ1BDLFlBQVksSUEvQkRmLFVBK0JlQyxNQUFNQyxPQUFPQztnQkFFN0MsT0FBT1k7WUFDVDs7O1dBbENtQmYifQ==