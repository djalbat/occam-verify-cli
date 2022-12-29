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
    front: function() {
        return front;
    },
    first: function() {
        return first;
    },
    second: function() {
        return second;
    },
    third: function() {
        return third;
    },
    last: function() {
        return last;
    },
    push: function() {
        return push;
    },
    prune: function() {
        return prune;
    },
    filter: function() {
        return filter;
    },
    someSubArray: function() {
        return someSubArray;
    },
    leftDifference: function() {
        return leftDifference;
    },
    rightDifference: function() {
        return rightDifference;
    }
});
var _necessary = require("necessary");
var _permutationsMatrix = /*#__PURE__*/ _interopRequireDefault(require("../permutationsMatrix"));
var _constants = require("../constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var front = _necessary.arrayUtilities.front, first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, third = _necessary.arrayUtilities.third, last = _necessary.arrayUtilities.last, push = _necessary.arrayUtilities.push, prune = _necessary.arrayUtilities.prune, filter = _necessary.arrayUtilities.filter;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgcGVybXV0YXRpb25zTWF0cml4IGZyb20gXCIuLi9wZXJtdXRhdGlvbnNNYXRyaXhcIjtcblxuaW1wb3J0IHsgTUFYSU1VTV9JTkRFWEVTX0xFTkdUSCwgTUFYSU1VTV9QRVJNVVRBVElPTl9MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCB7IGZyb250LCBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgbGFzdCwgcHVzaCwgcHJ1bmUsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBzb21lU3ViQXJyYXkoYXJyYXksIHN1YkFycmF5TGVuZ3RoLCBjYWxsYmFjaykge1xuICBsZXQgZm91bmQgPSBmYWxzZTtcblxuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgICAgaW5kZXhlc0xlbmd0aCA9IGFycmF5TGVuZ3RoLCAvLy9cbiAgICAgICAgcGVybXV0YXRpb25MZW5ndGggPSBzdWJBcnJheUxlbmd0aDsgLy8vXG5cbiAgaWYgKHBlcm11dGF0aW9uTGVuZ3RoIDw9IE1BWElNVU1fUEVSTVVUQVRJT05fTEVOR1RIKSB7XG4gICAgbGV0IG9mZnNldCxcbiAgICAgICAgcGVybXV0YXRpb25zO1xuXG4gICAgaWYgKGluZGV4ZXNMZW5ndGggPiBNQVhJTVVNX0lOREVYRVNfTEVOR1RIKSB7XG4gICAgICBvZmZzZXQgPSBpbmRleGVzTGVuZ3RoIC0gTUFYSU1VTV9JTkRFWEVTX0xFTkdUSDtcblxuICAgICAgcGVybXV0YXRpb25zID0gcGVybXV0YXRpb25zTWF0cml4W01BWElNVU1fSU5ERVhFU19MRU5HVEhdW3Blcm11dGF0aW9uTGVuZ3RoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2Zmc2V0ID0gMDtcblxuICAgICAgcGVybXV0YXRpb25zID0gcGVybXV0YXRpb25zTWF0cml4W2luZGV4ZXNMZW5ndGhdW3Blcm11dGF0aW9uTGVuZ3RoXTtcbiAgICB9XG5cbiAgICBpZiAocGVybXV0YXRpb25zICE9PSBudWxsKSB7XG4gICAgICBmb3VuZCA9IHBlcm11dGF0aW9ucy5zb21lKChwZXJtdXRhdGlvbikgPT4ge1xuICAgICAgICBpZiAocGVybXV0YXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdWJBcnJheSA9IFtdO1xuXG4gICAgICAgICAgZm9yIChsZXQgcG9zaXRpb24gPSAwOyBwb3NpdGlvbiA8IHBlcm11dGF0aW9uTGVuZ3RoOyBwb3NpdGlvbisrKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBlcm11dGF0aW9uW3Bvc2l0aW9uXSArIG9mZnNldCxcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICAgICAgICAgIHN1YkFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcGFzc2VkID0gY2FsbGJhY2soc3ViQXJyYXkpO1xuXG4gICAgICAgICAgaWYgKHBhc3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0RGlmZmVyZW5jZShhcnJheUEsIGFycmF5Qikge1xuICBmaWx0ZXIoYXJyYXlBLCAoZWxlbWVudEEpID0+IHtcbiAgICBjb25zdCBhcnJheUJJbmNsdWRlc0VsZW1lbnRBID0gYXJyYXlCLmluY2x1ZGVzKGVsZW1lbnRBKTtcblxuICAgIGlmICghYXJyYXlCSW5jbHVkZXNFbGVtZW50QSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0RGlmZmVyZW5jZShhcnJheUEsIGFycmF5Qikge1xuICBmaWx0ZXIoYXJyYXlCLCAoZWxlbWVudEIpID0+IHtcbiAgICBjb25zdCBhcnJheUFJbmNsdWRlc0VsZW1lbnRCID0gYXJyYXlBLmluY2x1ZGVzKGVsZW1lbnRCKTtcblxuICAgIGlmICghYXJyYXlBSW5jbHVkZXNFbGVtZW50Qikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJmcm9udCIsImZpcnN0Iiwic2Vjb25kIiwidGhpcmQiLCJsYXN0IiwicHVzaCIsInBydW5lIiwiZmlsdGVyIiwic29tZVN1YkFycmF5IiwibGVmdERpZmZlcmVuY2UiLCJyaWdodERpZmZlcmVuY2UiLCJhcnJheVV0aWxpdGllcyIsImFycmF5Iiwic3ViQXJyYXlMZW5ndGgiLCJjYWxsYmFjayIsImZvdW5kIiwiYXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJpbmRleGVzTGVuZ3RoIiwicGVybXV0YXRpb25MZW5ndGgiLCJNQVhJTVVNX1BFUk1VVEFUSU9OX0xFTkdUSCIsIm9mZnNldCIsInBlcm11dGF0aW9ucyIsIk1BWElNVU1fSU5ERVhFU19MRU5HVEgiLCJwZXJtdXRhdGlvbnNNYXRyaXgiLCJzb21lIiwicGVybXV0YXRpb24iLCJzdWJBcnJheSIsInBvc2l0aW9uIiwiaW5kZXgiLCJlbGVtZW50IiwicGFzc2VkIiwiYXJyYXlBIiwiYXJyYXlCIiwiZWxlbWVudEEiLCJhcnJheUJJbmNsdWRlc0VsZW1lbnRBIiwiaW5jbHVkZXMiLCJlbGVtZW50QiIsImFycmF5QUluY2x1ZGVzRWxlbWVudEIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVFlQSxLQUFLO2VBQUxBOztJQUFPQyxLQUFLO2VBQUxBOztJQUFPQyxNQUFNO2VBQU5BOztJQUFRQyxLQUFLO2VBQUxBOztJQUFPQyxJQUFJO2VBQUpBOztJQUFNQyxJQUFJO2VBQUpBOztJQUFNQyxLQUFLO2VBQUxBOztJQUFPQyxNQUFNO2VBQU5BOztJQUUvQ0MsWUFBWTtlQUFaQTs7SUE4Q0FDLGNBQWM7ZUFBZEE7O0lBVUFDLGVBQWU7ZUFBZkE7Ozt5QkFoRWU7dUVBRUE7eUJBRW9DOzs7Ozs7QUFFNUQsSUFBUVYsUUFBMkRXLHlCQUFjLENBQXpFWCxPQUFPQyxRQUFvRFUseUJBQWMsQ0FBbEVWLE9BQU9DLFNBQTZDUyx5QkFBYyxDQUEzRFQsUUFBUUMsUUFBcUNRLHlCQUFjLENBQW5EUixPQUFPQyxPQUE4Qk8seUJBQWMsQ0FBNUNQLE1BQU1DLE9BQXdCTSx5QkFBYyxDQUF0Q04sTUFBTUMsUUFBa0JLLHlCQUFjLENBQWhDTCxPQUFPQyxTQUFXSSx5QkFBYyxDQUF6Qko7QUFFeEQsU0FBU0MsYUFBYUksS0FBSyxFQUFFQyxjQUFjLEVBQUVDLFFBQVEsRUFBRTtJQUM1RCxJQUFJQyxRQUFRLEtBQUs7SUFFakIsSUFBTUMsY0FBY0osTUFBTUssTUFBTSxFQUMxQkMsZ0JBQWdCRixhQUNoQkcsb0JBQW9CTixnQkFBZ0IsR0FBRztJQUU3QyxJQUFJTSxxQkFBcUJDLHFDQUEwQixFQUFFO1FBQ25ELElBQUlDLFFBQ0FDO1FBRUosSUFBSUosZ0JBQWdCSyxpQ0FBc0IsRUFBRTtZQUMxQ0YsU0FBU0gsZ0JBQWdCSyxpQ0FBc0I7WUFFL0NELGVBQWVFLDJCQUFrQixDQUFDRCxpQ0FBc0IsQ0FBQyxDQUFDSixrQkFBa0I7UUFDOUUsT0FBTztZQUNMRSxTQUFTO1lBRVRDLGVBQWVFLDJCQUFrQixDQUFDTixjQUFjLENBQUNDLGtCQUFrQjtRQUNyRSxDQUFDO1FBRUQsSUFBSUcsaUJBQWlCLElBQUksRUFBRTtZQUN6QlAsUUFBUU8sYUFBYUcsSUFBSSxDQUFDLFNBQUNDLGFBQWdCO2dCQUN6QyxJQUFJQSxnQkFBZ0IsSUFBSSxFQUFFO29CQUN4QixJQUFNQyxXQUFXLEVBQUU7b0JBRW5CLElBQUssSUFBSUMsV0FBVyxHQUFHQSxXQUFXVCxtQkFBbUJTLFdBQVk7d0JBQy9ELElBQU1DLFFBQVFILFdBQVcsQ0FBQ0UsU0FBUyxHQUFHUCxRQUNoQ1MsVUFBVWxCLEtBQUssQ0FBQ2lCLE1BQU07d0JBRTVCRixTQUFTdEIsSUFBSSxDQUFDeUI7b0JBQ2hCO29CQUVBLElBQU1DLFNBQVNqQixTQUFTYTtvQkFFeEIsSUFBSUksUUFBUTt3QkFDVixPQUFPLElBQUk7b0JBQ2IsQ0FBQztnQkFDSCxDQUFDO1lBQ0g7UUFDRixDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU9oQjtBQUNUO0FBRU8sU0FBU04sZUFBZXVCLE1BQU0sRUFBRUMsTUFBTSxFQUFFO0lBQzdDMUIsT0FBT3lCLFFBQVEsU0FBQ0UsVUFBYTtRQUMzQixJQUFNQyx5QkFBeUJGLE9BQU9HLFFBQVEsQ0FBQ0Y7UUFFL0MsSUFBSSxDQUFDQyx3QkFBd0I7WUFDM0IsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0FBQ0Y7QUFFTyxTQUFTekIsZ0JBQWdCc0IsTUFBTSxFQUFFQyxNQUFNLEVBQUU7SUFDOUMxQixPQUFPMEIsUUFBUSxTQUFDSSxVQUFhO1FBQzNCLElBQU1DLHlCQUF5Qk4sT0FBT0ksUUFBUSxDQUFDQztRQUUvQyxJQUFJLENBQUNDLHdCQUF3QjtZQUMzQixPQUFPLElBQUk7UUFDYixDQUFDO0lBQ0g7QUFDRiJ9