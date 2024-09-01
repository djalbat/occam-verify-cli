"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FrameAssertion;
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
var FrameAssertion = /*#__PURE__*/ function() {
    function FrameAssertion(node, frame, metavariableNode) {
        _class_call_check(this, FrameAssertion);
        this.node = node;
        this.frame = frame;
        this.metavariableNode = metavariableNode;
    }
    _create_class(FrameAssertion, [
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
                var matchesMetavariableNode = this.metavariableNode.match(metavariableNode);
                return matchesMetavariableNode;
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
            key: "fromFrameAssertionNodeFrameAndMetavariableNode",
            value: function fromFrameAssertionNodeFrameAndMetavariableNode(frameAssertionNode, frame, metavariableNode) {
                var node = frameAssertionNode, frameAssertion = new FrameAssertion(node, frame, metavariableNode);
                return frameAssertion;
            }
        }
    ]);
    return FrameAssertion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFtZUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWVBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBmcmFtZSwgbWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHsgcmV0dXJuIHRoaXMuZnJhbWUuZ2V0RGVjbGFyYXRpb25zKCk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1hdGNoZXNNZXRhdmFyaWFibGVOb2RlID0gdGhpcy5tZXRhdmFyaWFibGVOb2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNNZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgbWF0Y2hNZXRhTGVtbWFPck1ldGFUaGVvcmVtKG1ldGFMZW1tYU1ldGF0aGVvcmVtKSB7IHJldHVybiB0aGlzLmZyYW1lLm1hdGNoTWV0YUxlbW1hT3JNZXRhVGhlb3JlbShtZXRhTGVtbWFNZXRhdGhlb3JlbSk7IH1cblxuICBzdGF0aWMgZnJvbUZyYW1lQXNzZXJ0aW9uTm9kZUZyYW1lQW5kTWV0YXZhcmlhYmxlTm9kZShmcmFtZUFzc2VydGlvbk5vZGUsIGZyYW1lLCBtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGZyYW1lQXNzZXJ0aW9uTm9kZSxcbiAgICAgICAgICBmcmFtZUFzc2VydGlvbiA9IG5ldyBGcmFtZUFzc2VydGlvbihub2RlLCBmcmFtZSwgbWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gZnJhbWVBc3NlcnRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGcmFtZUFzc2VydGlvbiIsIm5vZGUiLCJmcmFtZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXROb2RlIiwiZ2V0RnJhbWUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZ2V0RGVjbGFyYXRpb25zIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaCIsIm1hdGNoTWV0YUxlbW1hT3JNZXRhVGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwiZnJvbUZyYW1lQXNzZXJ0aW9uTm9kZUZyYW1lQW5kTWV0YXZhcmlhYmxlTm9kZSIsImZyYW1lQXNzZXJ0aW9uTm9kZSIsImZyYW1lQXNzZXJ0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLCtCQUFELEFBQUw7YUFBTUEsZUFDUEMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLGdCQUFnQjtnQ0FEdEJIO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBOztrQkFKUEg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILEtBQUs7WUFDbkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGdCQUFnQjtZQUM5Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBb0IsT0FBTyxJQUFJLENBQUNMLEtBQUssQ0FBQ0ssZUFBZTtZQUFJOzs7WUFFekRDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JMLGdCQUFnQjtnQkFDcEMsSUFBTU0sMEJBQTBCLElBQUksQ0FBQ04sZ0JBQWdCLENBQUNPLEtBQUssQ0FBQ1A7Z0JBRTVELE9BQU9NO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCQyxvQkFBb0I7Z0JBQUksT0FBTyxJQUFJLENBQUNWLEtBQUssQ0FBQ1MsMkJBQTJCLENBQUNDO1lBQXVCOzs7O1lBRWxIQyxLQUFBQTttQkFBUCxTQUFPQSwrQ0FBK0NDLGtCQUFrQixFQUFFWixLQUFLLEVBQUVDLGdCQUFnQjtnQkFDL0YsSUFBTUYsT0FBT2Esb0JBQ1BDLGlCQUFpQixJQS9CTmYsZUErQnlCQyxNQUFNQyxPQUFPQztnQkFFdkQsT0FBT1k7WUFDVDs7O1dBbENtQmYifQ==