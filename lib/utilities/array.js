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
    separate: function() {
        return separate;
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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, last = _necessary.arrayUtilities.last, push = _necessary.arrayUtilities.push, prune = _necessary.arrayUtilities.prune, match = _necessary.arrayUtilities.match, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress, separate = _necessary.arrayUtilities.separate;
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
        if (subArrayLength === 1) {
            permutations = [
                [
                    2
                ]
            ];
        }
        if (subArrayLength === 5) {
            permutations = [
                [
                    0,
                    3,
                    4,
                    5,
                    1
                ]
            ];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgcGVybXV0YXRpb25zTWF0cml4IGZyb20gXCIuLi9wZXJtdXRhdGlvbnNNYXRyaXhcIjtcblxuaW1wb3J0IHsgTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCwgTUFYSU1VTV9QRVJNVVRBVElPTl9MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCB7IGZpcnN0LCBzZWNvbmQsIGxhc3QsIHB1c2gsIHBydW5lLCBtYXRjaCwgZmlsdGVyLCBjb21wcmVzcywgc2VwYXJhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gc29tZVN1YkFycmF5KGFycmF5LCBzdWJBcnJheUxlbmd0aCwgY2FsbGJhY2spIHtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICAgIGluZGV4ZXNMZW5ndGggPSBhcnJheUxlbmd0aCwgLy8vXG4gICAgICAgIHBlcm11dGF0aW9uTGVuZ3RoID0gc3ViQXJyYXlMZW5ndGg7IC8vL1xuXG4gIGlmIChwZXJtdXRhdGlvbkxlbmd0aCA8PSBNQVhJTVVNX1BFUk1VVEFUSU9OX0xFTkdUSCkge1xuICAgIGxldCBvZmZzZXQsXG4gICAgICAgIHBlcm11dGF0aW9ucztcblxuICAgIGlmIChpbmRleGVzTGVuZ3RoID4gTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCkge1xuICAgICAgb2Zmc2V0ID0gaW5kZXhlc0xlbmd0aCAtIE1BWElNVU1fSU5ERVhFU19MRU5HVEg7XG5cbiAgICAgIHBlcm11dGF0aW9ucyA9IHBlcm11dGF0aW9uc01hdHJpeFtNQVhJTVVNX0lOREVYRVNfTEVOR1RIXVtwZXJtdXRhdGlvbkxlbmd0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldCA9IDA7XG5cbiAgICAgIHBlcm11dGF0aW9ucyA9IHBlcm11dGF0aW9uc01hdHJpeFtpbmRleGVzTGVuZ3RoXVtwZXJtdXRhdGlvbkxlbmd0aF07XG4gICAgfVxuXG4gICAgaWYgKHN1YkFycmF5TGVuZ3RoID09PSAxKSB7XG4gICAgICBwZXJtdXRhdGlvbnMgPSBbXG4gICAgICAgIFsgMiBdXG4gICAgICBdO1xuICAgIH1cblxuICAgIGlmIChzdWJBcnJheUxlbmd0aCA9PT0gNSkge1xuICAgICAgcGVybXV0YXRpb25zID0gW1xuICAgICAgICBbIDAsIDMsIDQsIDUsIDEgXVxuICAgICAgXTtcbiAgICB9XG5cbiAgICBpZiAocGVybXV0YXRpb25zICE9PSBudWxsKSB7XG4gICAgICBmb3VuZCA9IHBlcm11dGF0aW9ucy5zb21lKChwZXJtdXRhdGlvbikgPT4ge1xuICAgICAgICBpZiAocGVybXV0YXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdWJBcnJheSA9IFtdO1xuXG4gICAgICAgICAgZm9yIChsZXQgcG9zaXRpb24gPSAwOyBwb3NpdGlvbiA8IHBlcm11dGF0aW9uTGVuZ3RoOyBwb3NpdGlvbisrKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBlcm11dGF0aW9uW3Bvc2l0aW9uXSArIG9mZnNldCxcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICAgICAgICAgIHN1YkFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soc3ViQXJyYXkpO1xuXG4gICAgICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0RGlmZmVyZW5jZShhcnJheUEsIGFycmF5Qikge1xuICBmaWx0ZXIoYXJyYXlBLCAoZWxlbWVudEEpID0+IHtcbiAgICBjb25zdCBhcnJheUJJbmNsdWRlc0VsZW1lbnRBID0gYXJyYXlCLmluY2x1ZGVzKGVsZW1lbnRBKTtcblxuICAgIGlmICghYXJyYXlCSW5jbHVkZXNFbGVtZW50QSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0RGlmZmVyZW5jZShhcnJheUEsIGFycmF5Qikge1xuICBmaWx0ZXIoYXJyYXlCLCAoZWxlbWVudEIpID0+IHtcbiAgICBjb25zdCBhcnJheUFJbmNsdWRlc0VsZW1lbnRCID0gYXJyYXlBLmluY2x1ZGVzKGVsZW1lbnRCKTtcblxuICAgIGlmICghYXJyYXlBSW5jbHVkZXNFbGVtZW50Qikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjb21wcmVzcyIsImZpbHRlciIsImZpcnN0IiwibGFzdCIsImxlZnREaWZmZXJlbmNlIiwibWF0Y2giLCJwcnVuZSIsInB1c2giLCJyaWdodERpZmZlcmVuY2UiLCJzZWNvbmQiLCJzZXBhcmF0ZSIsInNvbWVTdWJBcnJheSIsImFycmF5VXRpbGl0aWVzIiwiYXJyYXkiLCJzdWJBcnJheUxlbmd0aCIsImNhbGxiYWNrIiwiZm91bmQiLCJhcnJheUxlbmd0aCIsImxlbmd0aCIsImluZGV4ZXNMZW5ndGgiLCJwZXJtdXRhdGlvbkxlbmd0aCIsIk1BWElNVU1fUEVSTVVUQVRJT05fTEVOR1RIIiwib2Zmc2V0IiwicGVybXV0YXRpb25zIiwiTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCIsInBlcm11dGF0aW9uc01hdHJpeCIsInNvbWUiLCJwZXJtdXRhdGlvbiIsInN1YkFycmF5IiwicG9zaXRpb24iLCJpbmRleCIsImVsZW1lbnQiLCJwYXNzZWQiLCJhcnJheUEiLCJhcnJheUIiLCJlbGVtZW50QSIsImFycmF5QkluY2x1ZGVzRWxlbWVudEEiLCJpbmNsdWRlcyIsImVsZW1lbnRCIiwiYXJyYXlBSW5jbHVkZXNFbGVtZW50QiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBUWdFQSxRQUFRO2VBQVJBOztJQUFSQyxNQUFNO2VBQU5BOztJQUF6Q0MsS0FBSztlQUFMQTs7SUFBZUMsSUFBSTtlQUFKQTs7SUE0RGRDLGNBQWM7ZUFBZEE7O0lBNURpQ0MsS0FBSztlQUFMQTs7SUFBUEMsS0FBSztlQUFMQTs7SUFBTkMsSUFBSTtlQUFKQTs7SUFzRXBCQyxlQUFlO2VBQWZBOztJQXRFTUMsTUFBTTtlQUFOQTs7SUFBb0RDLFFBQVE7ZUFBUkE7O0lBRTFEQyxZQUFZO2VBQVpBOzs7eUJBUmU7eUVBRUE7eUJBRW9DOzs7Ozs7QUFFNUQsSUFBUVQsUUFBd0VVLHlCQUFjLENBQXRGVixPQUFPTyxTQUFpRUcseUJBQWMsQ0FBL0VILFFBQVFOLE9BQXlEUyx5QkFBYyxDQUF2RVQsTUFBTUksT0FBbURLLHlCQUFjLENBQWpFTCxNQUFNRCxRQUE2Q00seUJBQWMsQ0FBM0ROLE9BQU9ELFFBQXNDTyx5QkFBYyxDQUFwRFAsT0FBT0osU0FBK0JXLHlCQUFjLENBQTdDWCxRQUFRRCxXQUF1QlkseUJBQWMsQ0FBckNaLFVBQVVVLFdBQWFFLHlCQUFjLENBQTNCRjtBQUVuRSxTQUFTQyxhQUFhRSxLQUFLLEVBQUVDLGNBQWMsRUFBRUMsUUFBUTtJQUMxRCxJQUFJQyxRQUFRO0lBRVosSUFBTUMsY0FBY0osTUFBTUssTUFBTSxFQUMxQkMsZ0JBQWdCRixhQUNoQkcsb0JBQW9CTixnQkFBZ0IsR0FBRztJQUU3QyxJQUFJTSxxQkFBcUJDLHFDQUEwQixFQUFFO1FBQ25ELElBQUlDLFFBQ0FDO1FBRUosSUFBSUosZ0JBQWdCSyxpQ0FBc0IsRUFBRTtZQUMxQ0YsU0FBU0gsZ0JBQWdCSyxpQ0FBc0I7WUFFL0NELGVBQWVFLDJCQUFrQixDQUFDRCxpQ0FBc0IsQ0FBQyxDQUFDSixrQkFBa0I7UUFDOUUsT0FBTztZQUNMRSxTQUFTO1lBRVRDLGVBQWVFLDJCQUFrQixDQUFDTixjQUFjLENBQUNDLGtCQUFrQjtRQUNyRTtRQUVBLElBQUlOLG1CQUFtQixHQUFHO1lBQ3hCUyxlQUFlO2dCQUNiO29CQUFFO2lCQUFHO2FBQ047UUFDSDtRQUVBLElBQUlULG1CQUFtQixHQUFHO1lBQ3hCUyxlQUFlO2dCQUNiO29CQUFFO29CQUFHO29CQUFHO29CQUFHO29CQUFHO2lCQUFHO2FBQ2xCO1FBQ0g7UUFFQSxJQUFJQSxpQkFBaUIsTUFBTTtZQUN6QlAsUUFBUU8sYUFBYUcsSUFBSSxDQUFDLFNBQUNDO2dCQUN6QixJQUFJQSxnQkFBZ0IsTUFBTTtvQkFDeEIsSUFBTUMsV0FBVyxFQUFFO29CQUVuQixJQUFLLElBQUlDLFdBQVcsR0FBR0EsV0FBV1QsbUJBQW1CUyxXQUFZO3dCQUMvRCxJQUFNQyxRQUFRSCxXQUFXLENBQUNFLFNBQVMsR0FBR1AsUUFDaENTLFVBQVVsQixLQUFLLENBQUNpQixNQUFNO3dCQUU1QkYsU0FBU3JCLElBQUksQ0FBQ3dCO29CQUNoQjtvQkFFQSxJQUFNQyxTQUFTakIsU0FBU2E7b0JBRXhCLElBQUlJLFFBQVE7d0JBQ1YsT0FBTztvQkFDVDtnQkFDRjtZQUNGO1FBQ0Y7SUFDRjtJQUVBLE9BQU9oQjtBQUNUO0FBRU8sU0FBU1osZUFBZTZCLE1BQU0sRUFBRUMsTUFBTTtJQUMzQ2pDLE9BQU9nQyxRQUFRLFNBQUNFO1FBQ2QsSUFBTUMseUJBQXlCRixPQUFPRyxRQUFRLENBQUNGO1FBRS9DLElBQUksQ0FBQ0Msd0JBQXdCO1lBQzNCLE9BQU87UUFDVDtJQUNGO0FBQ0Y7QUFFTyxTQUFTNUIsZ0JBQWdCeUIsTUFBTSxFQUFFQyxNQUFNO0lBQzVDakMsT0FBT2lDLFFBQVEsU0FBQ0k7UUFDZCxJQUFNQyx5QkFBeUJOLE9BQU9JLFFBQVEsQ0FBQ0M7UUFFL0MsSUFBSSxDQUFDQyx3QkFBd0I7WUFDM0IsT0FBTztRQUNUO0lBQ0Y7QUFDRiJ9