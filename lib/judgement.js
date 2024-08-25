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
    function Judgement(node, frame, metavariable) {
        _class_call_check(this, Judgement);
        this.node = node;
        this.frame = frame;
        this.metavariable = metavariable;
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
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        }
    ], [
        {
            key: "fromJudgementNodeFrameAndMetavariable",
            value: function fromJudgementNodeFrameAndMetavariable(judgementNode, frame, metavariable) {
                var node = judgementNode, judgement = new Judgement(node, frame, metavariable);
                return judgement;
            }
        }
    ]);
    return Judgement;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qdWRnZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEp1ZGdlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGZyYW1lLCBtZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSnVkZ2VtZW50Tm9kZUZyYW1lQW5kTWV0YXZhcmlhYmxlKGp1ZGdlbWVudE5vZGUsIGZyYW1lLCBtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBub2RlID0ganVkZ2VtZW50Tm9kZSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBuZXcgSnVkZ2VtZW50KG5vZGUsIGZyYW1lLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkp1ZGdlbWVudCIsIm5vZGUiLCJmcmFtZSIsIm1ldGF2YXJpYWJsZSIsImdldE5vZGUiLCJnZXRGcmFtZSIsImdldE1ldGF2YXJpYWJsZSIsImZyb21KdWRnZW1lbnROb2RlRnJhbWVBbmRNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLDBCQUFELEFBQUw7YUFBTUEsVUFDUEMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFlBQVk7Z0NBRGxCSDtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFlBQVksR0FBR0E7O2tCQUpISDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsS0FBSztZQUNuQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsWUFBWTtZQUMxQjs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxzQ0FBc0NDLGFBQWEsRUFBRU4sS0FBSyxFQUFFQyxZQUFZO2dCQUM3RSxJQUFNRixPQUFPTyxlQUNQQyxZQUFZLElBckJEVCxVQXFCZUMsTUFBTUMsT0FBT0M7Z0JBRTdDLE9BQU9NO1lBQ1Q7OztXQXhCbUJUIn0=