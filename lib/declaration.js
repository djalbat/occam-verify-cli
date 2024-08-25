"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Declaration;
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
var Declaration = /*#__PURE__*/ function() {
    function Declaration(metavariable, metastatementNode) {
        _class_call_check(this, Declaration);
        this.metavariable = metavariable;
        this.metastatementNode = metastatementNode;
    }
    _create_class(Declaration, [
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "getMetastatementNode",
            value: function getMetastatementNode() {
                return this.metastatementNode;
            }
        }
    ], [
        {
            key: "fromMetavariableAndMetastatementNode",
            value: function fromMetavariableAndMetastatementNode(metavariable, metastatementNode) {
                var declaration = new Declaration(metavariable, metastatementNode);
                return declaration;
            }
        }
    ]);
    return Declaration;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGUsIG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGFzdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVBbmRNZXRhc3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGUsIG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb24gPSBuZXcgRGVjbGFyYXRpb24obWV0YXZhcmlhYmxlLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZSIsIm1ldGFzdGF0ZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXN0YXRlbWVudE5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlQW5kTWV0YXN0YXRlbWVudE5vZGUiLCJkZWNsYXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSw0QkFBRCxBQUFMO2FBQU1BLFlBQ1BDLFlBQVksRUFBRUMsaUJBQWlCO2dDQUR4QkY7UUFFakIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBOztrQkFIUkY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGlCQUFpQjtZQUMvQjs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxxQ0FBcUNKLFlBQVksRUFBRUMsaUJBQWlCO2dCQUN6RSxJQUFNSSxjQUFjLElBZkhOLFlBZW1CQyxjQUFjQztnQkFFbEQsT0FBT0k7WUFDVDs7O1dBbEJtQk4ifQ==