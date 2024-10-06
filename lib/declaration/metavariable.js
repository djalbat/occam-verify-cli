"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetavariableDeclaration;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("../metavariable"));
var _query = require("../utilities/query");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var metaTypeNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration/metaType");
var MetavariableDeclaration = /*#__PURE__*/ function() {
    function MetavariableDeclaration(fileContext, string, metavariable) {
        _class_call_check(this, MetavariableDeclaration);
        this.fileContext = fileContext;
        this.string = string;
        this.metavariable = metavariable;
    }
    _create_class(MetavariableDeclaration, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified;
                var metavariableDeclarationString = this.string; ///
                this.fileContext.trace("Verifying the '".concat(metavariableDeclarationString, "' metavariable declaration..."));
                var metavariableVerifiedAtTopLevel = this.metavariable.verifyAtTopLevel(this.fileContext);
                if (metavariableVerifiedAtTopLevel) {
                    this.fileContext.addMetavariable(this.metavariable);
                    verified = true;
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(metavariableDeclarationString, "' metavariable declaration."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromMetavariableDeclarationNode",
            value: function fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
                var MetaType = _shim.default.MetaType, metaTypeNode = metaTypeNodeQuery(metavariableDeclarationNode), metaType = MetaType.fromMetaTypeNode(metaTypeNode, fileContext), metavariable = _metavariable.default.fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext), string = stringFromMetavariableAndMetaType(metavariable, metaType), metavariableDeclaration = new MetavariableDeclaration(fileContext, string, metavariable);
                return metavariableDeclaration;
            }
        }
    ]);
    return MetavariableDeclaration;
}();
function stringFromMetavariableAndMetaType(metavariable, metaType) {
    var string;
    var metavariableString = metavariable.getString();
    if (metaType === null) {
        string = metavariableString; ///
    } else {
        var metaTypeString = metaType.getString();
        string = "".concat(metavariableString, ":").concat(metaTypeString);
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNsYXJhdGlvbi9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgTWV0YXZhcmlhYmxlIGZyb20gXCIuLi9tZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBtZXRhVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGVEZWNsYXJhdGlvbi9tZXRhVHlwZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgc3RyaW5nLCBtZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5tZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZWRBdFRvcExldmVsID0gdGhpcy5tZXRhdmFyaWFibGUudmVyaWZ5QXRUb3BMZXZlbCh0aGlzLmZpbGVDb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkTWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlKTtcblxuICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IE1ldGFUeXBlIH0gPSBzaGltLFxuICAgICAgICAgIG1ldGFUeXBlTm9kZSA9IG1ldGFUeXBlTm9kZVF1ZXJ5KG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgbWV0YVR5cGUgPSBNZXRhVHlwZS5mcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21NZXRhdmFyaWFibGVBbmRNZXRhVHlwZShtZXRhdmFyaWFibGUsIG1ldGFUeXBlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbihmaWxlQ29udGV4dCwgc3RyaW5nLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21NZXRhdmFyaWFibGVBbmRNZXRhVHlwZShtZXRhdmFyaWFibGUsIG1ldGFUeXBlKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gIGlmIChtZXRhVHlwZSA9PT0gbnVsbCkge1xuICAgIHN0cmluZyA9IG1ldGF2YXJpYWJsZVN0cmluZzsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHN0cmluZyA9IGAke21ldGF2YXJpYWJsZVN0cmluZ306JHttZXRhVHlwZVN0cmluZ31gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsIm1ldGFUeXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJtZXRhdmFyaWFibGUiLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsImdldE1ldGF2YXJpYWJsZSIsInZlcmlmeSIsInZlcmlmaWVkIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkQXRUb3BMZXZlbCIsInZlcmlmeUF0VG9wTGV2ZWwiLCJhZGRNZXRhdmFyaWFibGUiLCJkZWJ1ZyIsImZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhVHlwZSIsInNoaW0iLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZSIsImZyb21NZXRhVHlwZU5vZGUiLCJNZXRhdmFyaWFibGUiLCJzdHJpbmdGcm9tTWV0YXZhcmlhYmxlQW5kTWV0YVR5cGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGFUeXBlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsyREFQSjttRUFDUTtxQkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFckIsSUFBQSxBQUFNRix3Q0FBTjthQUFNQSx3QkFDUEcsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFlBQVk7Z0NBRDFCTDtRQUVqQixJQUFJLENBQUNHLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxZQUFZLEdBQUdBOztrQkFKSEw7O1lBT25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFlBQVk7WUFDMUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTUMsZ0NBQWdDLElBQUksQ0FBQ1AsTUFBTSxFQUFFLEdBQUc7Z0JBRXRELElBQUksQ0FBQ0QsV0FBVyxDQUFDUyxLQUFLLENBQUMsQUFBQyxrQkFBK0MsT0FBOUJELCtCQUE4QjtnQkFFdkUsSUFBTUUsaUNBQWlDLElBQUksQ0FBQ1IsWUFBWSxDQUFDUyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUNYLFdBQVc7Z0JBRTFGLElBQUlVLGdDQUFnQztvQkFDbEMsSUFBSSxDQUFDVixXQUFXLENBQUNZLGVBQWUsQ0FBQyxJQUFJLENBQUNWLFlBQVk7b0JBRWxESyxXQUFXO2dCQUNiO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1osSUFBSSxDQUFDUCxXQUFXLENBQUNhLEtBQUssQ0FBQyxBQUFDLG9CQUFpRCxPQUE5QkwsK0JBQThCO2dCQUMzRTtnQkFFQSxPQUFPRDtZQUNUOzs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLGdDQUFnQ0MsMkJBQTJCLEVBQUVmLFdBQVc7Z0JBQzdFLElBQU0sQUFBRWdCLFdBQWFDLGFBQUksQ0FBakJELFVBQ0ZFLGVBQWVwQixrQkFBa0JpQiw4QkFDakNJLFdBQVdILFNBQVNJLGdCQUFnQixDQUFDRixjQUFjbEIsY0FDbkRFLGVBQWVtQixxQkFBWSxDQUFDUCwrQkFBK0IsQ0FBQ0MsNkJBQTZCZixjQUN6RkMsU0FBU3FCLGtDQUFrQ3BCLGNBQWNpQixXQUN6REksMEJBQTBCLElBL0NmMUIsd0JBK0MyQ0csYUFBYUMsUUFBUUM7Z0JBRWpGLE9BQU9xQjtZQUNUOzs7V0FsRG1CMUI7O0FBcURyQixTQUFTeUIsa0NBQWtDcEIsWUFBWSxFQUFFaUIsUUFBUTtJQUMvRCxJQUFJbEI7SUFFSixJQUFNdUIscUJBQXFCdEIsYUFBYUUsU0FBUztJQUVqRCxJQUFJZSxhQUFhLE1BQU07UUFDckJsQixTQUFTdUIsb0JBQW9CLEdBQUc7SUFDbEMsT0FBTztRQUNMLElBQU1DLGlCQUFpQk4sU0FBU2YsU0FBUztRQUV6Q0gsU0FBUyxBQUFDLEdBQXdCd0IsT0FBdEJELG9CQUFtQixLQUFrQixPQUFmQztJQUNwQztJQUVBLE9BQU94QjtBQUNUIn0=