"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Metatheorem;
    }
});
var _metaLemmaMetatheorem = /*#__PURE__*/ _interop_require_default(require("./metaLemmaMetatheorem"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var Metatheorem = /*#__PURE__*/ function(MetaLemmaMetatheorem) {
    _inherits(Metatheorem, MetaLemmaMetatheorem);
    var _super = _create_super(Metatheorem);
    function Metatheorem() {
        _class_call_check(this, Metatheorem);
        return _super.apply(this, arguments);
    }
    _create_class(Metatheorem, null, [
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                return _metaLemmaMetatheorem.default.fromJSONAndFileContext(Metatheorem, json, fileContext);
            }
        },
        {
            key: "fromLabelsMetaSuppositionsMetaConsequentAndFileContext",
            value: function fromLabelsMetaSuppositionsMetaConsequentAndFileContext(labels, suppositions, consequent, fileContext) {
                return _metaLemmaMetatheorem.default.fromLabelsMetaSuppositionsMetaConsequentAndFileContext(Metatheorem, labels, suppositions, consequent, fileContext);
            }
        }
    ]);
    return Metatheorem;
}(_metaLemmaMetatheorem.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1ldGFMZW1tYU1ldGF0aGVvcmVtIGZyb20gXCIuL21ldGFMZW1tYU1ldGF0aGVvcmVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGF0aGVvcmVtIGV4dGVuZHMgTWV0YUxlbW1hTWV0YXRoZW9yZW0ge1xuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkgeyByZXR1cm4gTWV0YUxlbW1hTWV0YXRoZW9yZW0uZnJvbUpTT05BbmRGaWxlQ29udGV4dChNZXRhdGhlb3JlbSwganNvbiwgZmlsZUNvbnRleHQpOyB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNNZXRhU3VwcG9zaXRpb25zTWV0YUNvbnNlcXVlbnRBbmRGaWxlQ29udGV4dChsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgZmlsZUNvbnRleHQpIHsgcmV0dXJuIE1ldGFMZW1tYU1ldGF0aGVvcmVtLmZyb21MYWJlbHNNZXRhU3VwcG9zaXRpb25zTWV0YUNvbnNlcXVlbnRBbmRGaWxlQ29udGV4dChNZXRhdGhlb3JlbSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIGZpbGVDb250ZXh0KTsgfVxufVxuIl0sIm5hbWVzIjpbIk1ldGF0aGVvcmVtIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImpzb24iLCJmaWxlQ29udGV4dCIsIk1ldGFMZW1tYU1ldGF0aGVvcmVtIiwiZnJvbUxhYmVsc01ldGFTdXBwb3NpdGlvbnNNZXRhQ29uc2VxdWVudEFuZEZpbGVDb250ZXh0IiwibGFiZWxzIiwic3VwcG9zaXRpb25zIiwiY29uc2VxdWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkVBRlk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNQSw0QkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ1pDLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkMsSUFBSSxFQUFFQyxXQUFXO2dCQUFJLE9BQU9DLDZCQUFvQixDQUFDSCxzQkFBc0IsQ0FEbEZELGFBQ2dHRSxNQUFNQztZQUFjOzs7WUFFaElFLEtBQUFBO21CQUFQLFNBQU9BLHVEQUF1REMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLFVBQVUsRUFBRUwsV0FBVztnQkFBSSxPQUFPQyw2QkFBb0IsQ0FBQ0Msc0RBQXNELENBSDlLTCxhQUc0TE0sUUFBUUMsY0FBY0MsWUFBWUw7WUFBYzs7O1dBSDVPSDtFQUFvQkksNkJBQW9CIn0=