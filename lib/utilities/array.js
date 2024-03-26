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
    compress: function() {
        return compress;
    },
    filter: function() {
        return filter;
    },
    first: function() {
        return first;
    },
    last: function() {
        return last;
    },
    leftDifference: function() {
        return leftDifference;
    },
    match: function() {
        return match;
    },
    prune: function() {
        return prune;
    },
    push: function() {
        return push;
    },
    rightDifference: function() {
        return rightDifference;
    },
    second: function() {
        return second;
    },
    someSubArray: function() {
        return someSubArray;
    }
});
var _necessary = require("necessary");
var _permutationsMatrix = /*#__PURE__*/ _interop_require_default(require("../permutationsMatrix"));
var _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, last = _necessary.arrayUtilities.last, push = _necessary.arrayUtilities.push, prune = _necessary.arrayUtilities.prune, match = _necessary.arrayUtilities.match, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress;
function someSubArray(array, subArrayLength, callback) {
    var found = false;
    var arrayLength = array.length, indexesLength = arrayLength, permutationLength = subArrayLength; ///
    if (permutationLength <= _constants.MAXIMUM_PERMUTATION_LENGTH) {
        var offset, permutations;
        if (indexesLength > _constants.MAXIMUM_INDEXES_LENGTH) {
            offset = indexesLength - _constants.MAXIMUM_INDEXES_LENGTH;
            permutations = _permutationsMatrix.default[_constants.MAXIMUM_INDEXES_LENGTH][permutationLength];
        } else {
            offset = 0;
            permutations = _permutationsMatrix.default[indexesLength][permutationLength];
        }
        if (permutations !== null) {
            found = permutations.some(function(permutation) {
                if (permutation !== null) {
                    var subArray = [];
                    for(var position = 0; position < permutationLength; position++){
                        var index = permutation[position] + offset, element = array[index];
                        subArray.push(element);
                    }
                    var passed = callback(subArray);
                    if (passed) {
                        return true;
                    }
                }
            });
        }
    }
    return found;
}
function leftDifference(arrayA, arrayB) {
    filter(arrayA, function(elementA) {
        var arrayBIncludesElementA = arrayB.includes(elementA);
        if (!arrayBIncludesElementA) {
            return true;
        }
    });
}
function rightDifference(arrayA, arrayB) {
    filter(arrayB, function(elementB) {
        var arrayAIncludesElementB = arrayA.includes(elementB);
        if (!arrayAIncludesElementB) {
            return true;
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgcGVybXV0YXRpb25zTWF0cml4IGZyb20gXCIuLi9wZXJtdXRhdGlvbnNNYXRyaXhcIjtcblxuaW1wb3J0IHsgTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCwgTUFYSU1VTV9QRVJNVVRBVElPTl9MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QsIHB1c2gsIHBydW5lLCBtYXRjaCwgZmlsdGVyLCBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBzb21lU3ViQXJyYXkoYXJyYXksIHN1YkFycmF5TGVuZ3RoLCBjYWxsYmFjaykge1xuICBsZXQgZm91bmQgPSBmYWxzZTtcblxuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgICAgaW5kZXhlc0xlbmd0aCA9IGFycmF5TGVuZ3RoLCAvLy9cbiAgICAgICAgcGVybXV0YXRpb25MZW5ndGggPSBzdWJBcnJheUxlbmd0aDsgLy8vXG5cbiAgaWYgKHBlcm11dGF0aW9uTGVuZ3RoIDw9IE1BWElNVU1fUEVSTVVUQVRJT05fTEVOR1RIKSB7XG4gICAgbGV0IG9mZnNldCxcbiAgICAgICAgcGVybXV0YXRpb25zO1xuXG4gICAgaWYgKGluZGV4ZXNMZW5ndGggPiBNQVhJTVVNX0lOREVYRVNfTEVOR1RIKSB7XG4gICAgICBvZmZzZXQgPSBpbmRleGVzTGVuZ3RoIC0gTUFYSU1VTV9JTkRFWEVTX0xFTkdUSDtcblxuICAgICAgcGVybXV0YXRpb25zID0gcGVybXV0YXRpb25zTWF0cml4W01BWElNVU1fSU5ERVhFU19MRU5HVEhdW3Blcm11dGF0aW9uTGVuZ3RoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2Zmc2V0ID0gMDtcblxuICAgICAgcGVybXV0YXRpb25zID0gcGVybXV0YXRpb25zTWF0cml4W2luZGV4ZXNMZW5ndGhdW3Blcm11dGF0aW9uTGVuZ3RoXTtcbiAgICB9XG5cbiAgICBpZiAocGVybXV0YXRpb25zICE9PSBudWxsKSB7XG4gICAgICBmb3VuZCA9IHBlcm11dGF0aW9ucy5zb21lKChwZXJtdXRhdGlvbikgPT4ge1xuICAgICAgICBpZiAocGVybXV0YXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdWJBcnJheSA9IFtdO1xuXG4gICAgICAgICAgZm9yIChsZXQgcG9zaXRpb24gPSAwOyBwb3NpdGlvbiA8IHBlcm11dGF0aW9uTGVuZ3RoOyBwb3NpdGlvbisrKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBlcm11dGF0aW9uW3Bvc2l0aW9uXSArIG9mZnNldCxcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICAgICAgICAgIHN1YkFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soc3ViQXJyYXkpO1xuXG4gICAgICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0RGlmZmVyZW5jZShhcnJheUEsIGFycmF5Qikge1xuICBmaWx0ZXIoYXJyYXlBLCAoZWxlbWVudEEpID0+IHtcbiAgICBjb25zdCBhcnJheUJJbmNsdWRlc0VsZW1lbnRBID0gYXJyYXlCLmluY2x1ZGVzKGVsZW1lbnRBKTtcblxuICAgIGlmICghYXJyYXlCSW5jbHVkZXNFbGVtZW50QSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0RGlmZmVyZW5jZShhcnJheUEsIGFycmF5Qikge1xuICBmaWx0ZXIoYXJyYXlCLCAoZWxlbWVudEIpID0+IHtcbiAgICBjb25zdCBhcnJheUFJbmNsdWRlc0VsZW1lbnRCID0gYXJyYXlBLmluY2x1ZGVzKGVsZW1lbnRCKTtcblxuICAgIGlmICghYXJyYXlBSW5jbHVkZXNFbGVtZW50Qikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjb21wcmVzcyIsImZpbHRlciIsImZpcnN0IiwibGFzdCIsImxlZnREaWZmZXJlbmNlIiwibWF0Y2giLCJwcnVuZSIsInB1c2giLCJyaWdodERpZmZlcmVuY2UiLCJzZWNvbmQiLCJzb21lU3ViQXJyYXkiLCJhcnJheVV0aWxpdGllcyIsImFycmF5Iiwic3ViQXJyYXlMZW5ndGgiLCJjYWxsYmFjayIsImZvdW5kIiwiYXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJpbmRleGVzTGVuZ3RoIiwicGVybXV0YXRpb25MZW5ndGgiLCJNQVhJTVVNX1BFUk1VVEFUSU9OX0xFTkdUSCIsIm9mZnNldCIsInBlcm11dGF0aW9ucyIsIk1BWElNVU1fSU5ERVhFU19MRU5HVEgiLCJwZXJtdXRhdGlvbnNNYXRyaXgiLCJzb21lIiwicGVybXV0YXRpb24iLCJzdWJBcnJheSIsInBvc2l0aW9uIiwiaW5kZXgiLCJlbGVtZW50IiwicGFzc2VkIiwiYXJyYXlBIiwiYXJyYXlCIiwiZWxlbWVudEEiLCJhcnJheUJJbmNsdWRlc0VsZW1lbnRBIiwiaW5jbHVkZXMiLCJlbGVtZW50QiIsImFycmF5QUluY2x1ZGVzRWxlbWVudEIiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFRZ0VBLFFBQVE7ZUFBUkE7O0lBQVJDLE1BQU07ZUFBTkE7O0lBQXpDQyxLQUFLO2VBQUxBOztJQUFlQyxJQUFJO2VBQUpBOztJQWdEZEMsY0FBYztlQUFkQTs7SUFoRGlDQyxLQUFLO2VBQUxBOztJQUFQQyxLQUFLO2VBQUxBOztJQUFOQyxJQUFJO2VBQUpBOztJQTBEcEJDLGVBQWU7ZUFBZkE7O0lBMURNQyxNQUFNO2VBQU5BOztJQUVOQyxZQUFZO2VBQVpBOzs7eUJBUmU7eUVBRUE7eUJBRW9DOzs7Ozs7QUFFNUQsSUFBUVIsUUFBOERTLHlCQUFjLENBQTVFVCxPQUFPTyxTQUF1REUseUJBQWMsQ0FBckVGLFFBQVFOLE9BQStDUSx5QkFBYyxDQUE3RFIsTUFBTUksT0FBeUNJLHlCQUFjLENBQXZESixNQUFNRCxRQUFtQ0sseUJBQWMsQ0FBakRMLE9BQU9ELFFBQTRCTSx5QkFBYyxDQUExQ04sT0FBT0osU0FBcUJVLHlCQUFjLENBQW5DVixRQUFRRCxXQUFhVyx5QkFBYyxDQUEzQlg7QUFFekQsU0FBU1UsYUFBYUUsS0FBSyxFQUFFQyxjQUFjLEVBQUVDLFFBQVE7SUFDMUQsSUFBSUMsUUFBUTtJQUVaLElBQU1DLGNBQWNKLE1BQU1LLE1BQU0sRUFDMUJDLGdCQUFnQkYsYUFDaEJHLG9CQUFvQk4sZ0JBQWdCLEdBQUc7SUFFN0MsSUFBSU0scUJBQXFCQyxxQ0FBMEIsRUFBRTtRQUNuRCxJQUFJQyxRQUNBQztRQUVKLElBQUlKLGdCQUFnQkssaUNBQXNCLEVBQUU7WUFDMUNGLFNBQVNILGdCQUFnQkssaUNBQXNCO1lBRS9DRCxlQUFlRSwyQkFBa0IsQ0FBQ0QsaUNBQXNCLENBQUMsQ0FBQ0osa0JBQWtCO1FBQzlFLE9BQU87WUFDTEUsU0FBUztZQUVUQyxlQUFlRSwyQkFBa0IsQ0FBQ04sY0FBYyxDQUFDQyxrQkFBa0I7UUFDckU7UUFFQSxJQUFJRyxpQkFBaUIsTUFBTTtZQUN6QlAsUUFBUU8sYUFBYUcsSUFBSSxDQUFDLFNBQUNDO2dCQUN6QixJQUFJQSxnQkFBZ0IsTUFBTTtvQkFDeEIsSUFBTUMsV0FBVyxFQUFFO29CQUVuQixJQUFLLElBQUlDLFdBQVcsR0FBR0EsV0FBV1QsbUJBQW1CUyxXQUFZO3dCQUMvRCxJQUFNQyxRQUFRSCxXQUFXLENBQUNFLFNBQVMsR0FBR1AsUUFDaENTLFVBQVVsQixLQUFLLENBQUNpQixNQUFNO3dCQUU1QkYsU0FBU3BCLElBQUksQ0FBQ3VCO29CQUNoQjtvQkFFQSxJQUFNQyxTQUFTakIsU0FBU2E7b0JBRXhCLElBQUlJLFFBQVE7d0JBQ1YsT0FBTztvQkFDVDtnQkFDRjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLE9BQU9oQjtBQUNUO0FBRU8sU0FBU1gsZUFBZTRCLE1BQU0sRUFBRUMsTUFBTTtJQUMzQ2hDLE9BQU8rQixRQUFRLFNBQUNFO1FBQ2QsSUFBTUMseUJBQXlCRixPQUFPRyxRQUFRLENBQUNGO1FBRS9DLElBQUksQ0FBQ0Msd0JBQXdCO1lBQzNCLE9BQU87UUFDVDtJQUNGO0FBQ0Y7QUFFTyxTQUFTM0IsZ0JBQWdCd0IsTUFBTSxFQUFFQyxNQUFNO0lBQzVDaEMsT0FBT2dDLFFBQVEsU0FBQ0k7UUFDZCxJQUFNQyx5QkFBeUJOLE9BQU9JLFFBQVEsQ0FBQ0M7UUFFL0MsSUFBSSxDQUFDQyx3QkFBd0I7WUFDM0IsT0FBTztRQUNUO0lBQ0Y7QUFDRiJ9