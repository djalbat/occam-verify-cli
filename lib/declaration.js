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
var _brackets = require("./utilities/brackets");
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
    function Declaration(reference, statement) {
        _class_call_check(this, Declaration);
        this.reference = reference;
        this.statement = statement;
    }
    _create_class(Declaration, [
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        }
    ]);
    return Declaration;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihyZWZlcmVuY2UsIHN0YXRlbWVudCkge1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICAvLyBnZXRNZXRhdmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy5yZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpOyB9XG4gIC8vXG4gIC8vIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUpIHtcbiAgLy8gICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7IC8vL1xuICAvL1xuICAvLyAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5zdGF0ZW1lbnROb2RlLm1hdGNoKHN0YXRlbWVudE5vZGUpLFxuICAvLyAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdGF0ZW1lbnROb2RlTWF0Y2hlczsgIC8vL1xuICAvL1xuICAvLyAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICAvLyB9XG4gIC8vXG4gIC8vIHVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAvLyAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAvLyAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAvLyAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUpLFxuICAvLyAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZWQgPSB0aGlzLnVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAvLyAgICAgICAgIHN1YnN0aXR1dGlvblVuaWZpZWQgPSAobWV0YXZhcmlhYmxlVW5pZmllZCAmJiBzdGF0ZW1lbnRVbmlmaWVkKTtcbiAgLy9cbiAgLy8gICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllZDtcbiAgLy8gfVxuICAvL1xuICAvLyB1bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgLy8gICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMucmVmZXJlbmNlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGUpO1xuICAvL1xuICAvLyAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgLy8gfVxuICAvL1xuICAvLyB1bmlmeU1ldGFMZW1tYU9yTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YXRoZW9yZW0pIHtcbiAgLy8gICBjb25zdCBjb25zZXF1ZW50ID0gbWV0YUxlbW1hTWV0YXRoZW9yZW0uZ2V0Q29uc2VxdWVudCgpLFxuICAvLyAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBjb25zZXF1ZW50LmdldFN0YXRlbWVudE5vZGUoKSxcbiAgLy8gICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMuc3RhdGVtZW50Tm9kZS5tYXRjaChzdGF0ZW1lbnROb2RlKSxcbiAgLy8gICAgICAgICBtZXRhTGVtbWFPck1ldGFUaGVvcmVtVW5pZmllZCA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG4gIC8vXG4gIC8vICAgcmV0dXJuIG1ldGFMZW1tYU9yTWV0YVRoZW9yZW1VbmlmaWVkO1xuICAvLyB9XG4gIC8vXG4gIC8vIHN0YXRpYyBmcm9tUmVmZXJlbmNlQW5kU3RhdGVtZW50Tm9kZShyZWZlcmVuY2UsIHN0YXRlbWVudE5vZGUpIHtcbiAgLy8gICBzdGF0ZW1lbnROb2RlID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSk7IC8vL1xuICAvL1xuICAvLyAgIGNvbnN0IGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKHJlZmVyZW5jZSwgc3RhdGVtZW50Tm9kZSk7XG4gIC8vXG4gIC8vICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAvLyB9XG59XG4iXSwibmFtZXMiOlsiRGVjbGFyYXRpb24iLCJyZWZlcmVuY2UiLCJzdGF0ZW1lbnQiLCJnZXRSZWZlcmVuY2UiLCJnZXRTdGF0ZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3dCQUZzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBQSxBQUFNQSw0QkFBTjthQUFNQSxZQUNQQyxTQUFTLEVBQUVDLFNBQVM7Z0NBRGJGO1FBRWpCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUhBRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1dBWm1CRiJ9