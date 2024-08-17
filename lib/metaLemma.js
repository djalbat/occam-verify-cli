"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaLemma;
    }
});
var _metalemmaMetatheorem = /*#__PURE__*/ _interop_require_default(require("./metalemmaMetatheorem"));
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
var MetaLemma = /*#__PURE__*/ function(MetalemmaMetatheorem) {
    _inherits(MetaLemma, MetalemmaMetatheorem);
    var _super = _create_super(MetaLemma);
    function MetaLemma() {
        _class_call_check(this, MetaLemma);
        return _super.apply(this, arguments);
    }
    _create_class(MetaLemma, null, [
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                return _metalemmaMetatheorem.default.fromJSONAndFileContext(MetaLemma, json, fileContext);
            }
        },
        {
            key: "fromLabelsMetaSuppositionsMetaConsequentAndLocalMetaContext",
            value: function fromLabelsMetaSuppositionsMetaConsequentAndLocalMetaContext(labels, suppositions, consequent, localMetaContext) {
                return _metalemmaMetatheorem.default.fromLabelsMetaSuppositionsMetaConsequentAndLocalMetaContext(MetaLemma, labels, suppositions, consequent, localMetaContext);
            }
        }
    ]);
    return MetaLemma;
}(_metalemmaMetatheorem.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhTGVtbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNZXRhbGVtbWFNZXRhdGhlb3JlbSBmcm9tIFwiLi9tZXRhbGVtbWFNZXRhdGhlb3JlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhTGVtbWEgZXh0ZW5kcyBNZXRhbGVtbWFNZXRhdGhlb3JlbSB7XG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7IHJldHVybiBNZXRhbGVtbWFNZXRhdGhlb3JlbS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KE1ldGFMZW1tYSwganNvbiwgZmlsZUNvbnRleHQpOyB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNNZXRhU3VwcG9zaXRpb25zTWV0YUNvbnNlcXVlbnRBbmRMb2NhbE1ldGFDb250ZXh0KGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBsb2NhbE1ldGFDb250ZXh0KSB7IHJldHVybiBNZXRhbGVtbWFNZXRhdGhlb3JlbS5mcm9tTGFiZWxzTWV0YVN1cHBvc2l0aW9uc01ldGFDb25zZXF1ZW50QW5kTG9jYWxNZXRhQ29udGV4dChNZXRhTGVtbWEsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBsb2NhbE1ldGFDb250ZXh0KTsgfVxufVxuIl0sIm5hbWVzIjpbIk1ldGFMZW1tYSIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJqc29uIiwiZmlsZUNvbnRleHQiLCJNZXRhbGVtbWFNZXRhdGhlb3JlbSIsImZyb21MYWJlbHNNZXRhU3VwcG9zaXRpb25zTWV0YUNvbnNlcXVlbnRBbmRMb2NhbE1ldGFDb250ZXh0IiwibGFiZWxzIiwic3VwcG9zaXRpb25zIiwiY29uc2VxdWVudCIsImxvY2FsTWV0YUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzJFQUZZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLElBQUEsQUFBTUEsMEJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJDLElBQUksRUFBRUMsV0FBVztnQkFBSSxPQUFPQyw2QkFBb0IsQ0FBQ0gsc0JBQXNCLENBRGxGRCxXQUM4RkUsTUFBTUM7WUFBYzs7O1lBRTlIRSxLQUFBQTttQkFBUCxTQUFPQSw0REFBNERDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxVQUFVLEVBQUVDLGdCQUFnQjtnQkFBSSxPQUFPTCw2QkFBb0IsQ0FBQ0MsMkRBQTJELENBSDdMTCxXQUd5TU0sUUFBUUMsY0FBY0MsWUFBWUM7WUFBbUI7OztXQUg5UFQ7RUFBa0JJLDZCQUFvQiJ9