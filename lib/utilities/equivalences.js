"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    areTermNodesEqual: function() {
        return areTermNodesEqual;
    },
    findEquivalenceByTerm: function() {
        return findEquivalenceByTerm;
    },
    findEquivalenceByType: function() {
        return findEquivalenceByType;
    },
    mergeEquivalences: function() {
        return mergeEquivalences;
    }
});
var _array = require("../utilities/array");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function areTermNodesEqual(leftTermNode, rightTermNode, equivalences) {
    var termNodesEqual;
    var leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode);
    if (leftTermNodeMatchesRightTermNode) {
        termNodesEqual = true;
    } else {
        var termNodes = [
            leftTermNode,
            rightTermNode
        ], equivalence = findEquivalenceByTermNodes(equivalences, termNodes);
        termNodesEqual = equivalence !== null;
    }
    return termNodesEqual;
}
function mergeEquivalences(equivalencesA, equivalencesB, localContext) {
    var typesA = typesFromEquivalences(equivalencesA, localContext), typesB = typesFromEquivalences(equivalencesB, localContext), types = _to_consumable_array(typesA).concat(_to_consumable_array(typesB));
    (0, _array.compress)(types, function(typeA, typeB) {
        if (typeA === typeB) {
            return true;
        }
    });
    var equivalences = types.map(function(type) {
        var equivalence;
        var equivalenceA = findEquivalenceByType(equivalencesA, type, localContext), equivalenceB = findEquivalenceByType(equivalencesB, type, localContext);
        if (equivalenceA !== null && equivalenceB !== null) {
            equivalence = Equivalence.fromEquivalences(equivalenceA, equivalenceB);
        } else if (equivalenceA !== null) {
            equivalence = equivalenceA; ///
        } else if (equivalenceB !== null) {
            equivalence = equivalenceB; ///
        }
        return equivalence;
    });
    return equivalences;
}
function findEquivalenceByType(equivalences, type, localContext) {
    var equivalence = equivalences.find(function(equivalence) {
        var equivalenceMatchesType = equivalence.matchType(type, localContext);
        if (equivalenceMatchesType) {
            return true;
        }
    }) || null;
    return equivalence;
}
function findEquivalenceByTerm(equivalences, term) {
    var equivalence = equivalences.find(function(equivalence) {
        var equivalenceMatchesTerm = equivalence.matchTerm(term);
        if (equivalenceMatchesTerm) {
            return true;
        }
    }) || null;
    return equivalence;
}
function findEquivalenceByTermNodes(equivalences, termNodes) {
    var equivalence = equivalences.find(function(equivalence) {
        var equivalenceMatchesTerms = equivalence.matchTermNodes(termNodes);
        if (equivalenceMatchesTerms) {
            return true;
        }
    }) || null;
    return equivalence;
}
function typesFromEquivalences(equivalences, localContext) {
    var types = equivalences.map(function(equivalence) {
        var type = equivalence.getType(localContext);
        return type;
    });
    return types;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZXF1aXZhbGVuY2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21wcmVzcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFyZVRlcm1Ob2Rlc0VxdWFsKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgZXF1aXZhbGVuY2VzKSB7XG4gIGxldCB0ZXJtTm9kZXNFcXVhbDtcblxuICBjb25zdCBsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZS5tYXRjaChyaWdodFRlcm1Ob2RlKTtcblxuICBpZiAobGVmdFRlcm1Ob2RlTWF0Y2hlc1JpZ2h0VGVybU5vZGUpIHtcbiAgICB0ZXJtTm9kZXNFcXVhbCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdGVybU5vZGVzID0gW1xuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgZXF1aXZhbGVuY2UgPSBmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2RlcyhlcXVpdmFsZW5jZXMsIHRlcm1Ob2Rlcyk7XG5cbiAgICB0ZXJtTm9kZXNFcXVhbCA9IChlcXVpdmFsZW5jZSAhPT0gbnVsbCk7XG4gIH1cblxuICByZXR1cm4gdGVybU5vZGVzRXF1YWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNBLCBlcXVpdmFsZW5jZXNCLCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgdHlwZXNBID0gdHlwZXNGcm9tRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlc0EsIGxvY2FsQ29udGV4dCksXG4gICAgICAgIHR5cGVzQiA9IHR5cGVzRnJvbUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNCLCBsb2NhbENvbnRleHQpLFxuICAgICAgICB0eXBlcyA9IFtcbiAgICAgICAgICAuLi50eXBlc0EsXG4gICAgICAgICAgLi4udHlwZXNCXG4gICAgICAgIF07XG5cbiAgY29tcHJlc3ModHlwZXMsICh0eXBlQSwgdHlwZUIpID0+IHtcbiAgICBpZiAodHlwZUEgPT09IHR5cGVCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGVxdWl2YWxlbmNlcyA9IHR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgIGxldCBlcXVpdmFsZW5jZTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlQSA9IGZpbmRFcXVpdmFsZW5jZUJ5VHlwZShlcXVpdmFsZW5jZXNBLCB0eXBlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlQiA9IGZpbmRFcXVpdmFsZW5jZUJ5VHlwZShlcXVpdmFsZW5jZXNCLCB0eXBlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKChlcXVpdmFsZW5jZUEgIT09IG51bGwpICYmIChlcXVpdmFsZW5jZUIgIT09IG51bGwpKSB7XG4gICAgICBlcXVpdmFsZW5jZSA9IEVxdWl2YWxlbmNlLmZyb21FcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VBLCBlcXVpdmFsZW5jZUIpO1xuICAgIH0gZWxzZSBpZiAoZXF1aXZhbGVuY2VBICE9PSBudWxsKSB7XG4gICAgICBlcXVpdmFsZW5jZSA9IGVxdWl2YWxlbmNlQTsgLy8vXG4gICAgfSBlbHNlIGlmIChlcXVpdmFsZW5jZUIgIT09IG51bGwpIHtcbiAgICAgIGVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VCOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2U7XG4gIH0pO1xuXG4gIHJldHVybiBlcXVpdmFsZW5jZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRXF1aXZhbGVuY2VCeVR5cGUoZXF1aXZhbGVuY2VzLCB0eXBlLCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZXMuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZU1hdGNoZXNUeXBlID0gZXF1aXZhbGVuY2UubWF0Y2hUeXBlKHR5cGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVHlwZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIHJldHVybiBlcXVpdmFsZW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRFcXVpdmFsZW5jZUJ5VGVybShlcXVpdmFsZW5jZXMsIHRlcm0pIHtcbiAgY29uc3QgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZXMuZmluZCgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZU1hdGNoZXNUZXJtID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtKHRlcm0pO1xuXG4gICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICByZXR1cm4gZXF1aXZhbGVuY2U7XG59XG5cbmZ1bmN0aW9uIGZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzKGVxdWl2YWxlbmNlcywgdGVybU5vZGVzKSB7XG4gIGNvbnN0IGVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VzLmZpbmQoKGVxdWl2YWxlbmNlKSA9PiB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VNYXRjaGVzVGVybXMgPSBlcXVpdmFsZW5jZS5tYXRjaFRlcm1Ob2Rlcyh0ZXJtTm9kZXMpO1xuXG4gICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1zKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgcmV0dXJuIGVxdWl2YWxlbmNlO1xufVxuXG5mdW5jdGlvbiB0eXBlc0Zyb21FcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgdHlwZXMgPSBlcXVpdmFsZW5jZXMubWFwKChlcXVpdmFsZW5jZSkgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSBlcXVpdmFsZW5jZS5nZXRUeXBlKGxvY2FsQ29udGV4dCk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzO1xufVxuIl0sIm5hbWVzIjpbImFyZVRlcm1Ob2Rlc0VxdWFsIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwiZmluZEVxdWl2YWxlbmNlQnlUeXBlIiwibWVyZ2VFcXVpdmFsZW5jZXMiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZXF1aXZhbGVuY2VzIiwidGVybU5vZGVzRXF1YWwiLCJsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSIsIm1hdGNoIiwidGVybU5vZGVzIiwiZXF1aXZhbGVuY2UiLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2RlcyIsImVxdWl2YWxlbmNlc0EiLCJlcXVpdmFsZW5jZXNCIiwibG9jYWxDb250ZXh0IiwidHlwZXNBIiwidHlwZXNGcm9tRXF1aXZhbGVuY2VzIiwidHlwZXNCIiwidHlwZXMiLCJjb21wcmVzcyIsInR5cGVBIiwidHlwZUIiLCJtYXAiLCJ0eXBlIiwiZXF1aXZhbGVuY2VBIiwiZXF1aXZhbGVuY2VCIiwiRXF1aXZhbGVuY2UiLCJmcm9tRXF1aXZhbGVuY2VzIiwiZmluZCIsImVxdWl2YWxlbmNlTWF0Y2hlc1R5cGUiLCJtYXRjaFR5cGUiLCJ0ZXJtIiwiZXF1aXZhbGVuY2VNYXRjaGVzVGVybSIsIm1hdGNoVGVybSIsImVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1zIiwibWF0Y2hUZXJtTm9kZXMiLCJnZXRUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJZ0JBLGlCQUFpQjtlQUFqQkE7O0lBa0VBQyxxQkFBcUI7ZUFBckJBOztJQVpBQyxxQkFBcUI7ZUFBckJBOztJQWxDQUMsaUJBQWlCO2VBQWpCQTs7O3FCQXRCUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsU0FBU0gs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