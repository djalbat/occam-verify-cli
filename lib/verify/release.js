"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyRelease;
    }
});
var _files = /*#__PURE__*/ _interop_require_default(require("../verify/files"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyRelease(releaseName, releaseContextMap) {
    var releaseVerified = false;
    var releaseContext = releaseContextMap[releaseName];
    if (releaseContext !== null) {
        var dependencyReleasesVVerified = verifyDependencyReleases(releaseContext, releaseContextMap);
        if (dependencyReleasesVVerified) {
            var verified = releaseContext.isVerified();
            if (verified) {
                releaseVerified = true;
            } else {
                releaseContext.debug("Verifying '".concat(releaseName, "'..."));
                var releaseFilesVerified = verifyReleaseFiles(releaseContext);
                if (releaseFilesVerified) {
                    var verified1 = true;
                    releaseContext.setVerified(verified1);
                    releaseVerified = verified1; ///
                }
                if (releaseVerified) {
                    releaseContext.info("Verified  '".concat(releaseName, "'."));
                }
            }
        }
    }
    return releaseVerified;
}
function verifyReleaseFiles(releaseContext) {
    var filesVerified = (0, _files.default)(releaseContext), releaseFilesVerified = filesVerified; ///
    return releaseFilesVerified;
}
function verifyDependencyReleases(releaseContext, releaseContextMap) {
    var dependencies = releaseContext.getDependencies(), dependencyReleasesVVerified = dependencies.everyDependency(function(dependency) {
        var name = dependency.getName(), releaseName = name, releaseVerified = verifyRelease(releaseName, releaseContextMap);
        if (releaseVerified) {
            return true;
        }
    });
    return dependencyReleasesVVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeUZpbGVzIGZyb20gXCIuLi92ZXJpZnkvZmlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgbGV0IHJlbGVhc2VWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRNYXBbcmVsZWFzZU5hbWVdO1xuXG4gIGlmIChyZWxlYXNlQ29udGV4dCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCA9IHZlcmlmeURlcGVuZGVuY3lSZWxlYXNlcyhyZWxlYXNlQ29udGV4dCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgaWYgKGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCkge1xuICAgICAgY29uc3QgdmVyaWZpZWQgPSByZWxlYXNlQ29udGV4dC5pc1ZlcmlmaWVkKCk7XG5cbiAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICByZWxlYXNlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVsZWFzZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyAnJHtyZWxlYXNlTmFtZX0nLi4uYCk7XG5cbiAgICAgICAgY29uc3QgcmVsZWFzZUZpbGVzVmVyaWZpZWQgPSB2ZXJpZnlSZWxlYXNlRmlsZXMocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZWxlYXNlRmlsZXNWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHZlcmlmaWVkID0gdHJ1ZTtcblxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0LnNldFZlcmlmaWVkKHZlcmlmaWVkKTtcblxuICAgICAgICAgIHJlbGVhc2VWZXJpZmllZCA9IHZlcmlmaWVkOyAvLy9cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZWxlYXNlVmVyaWZpZWQpIHtcbiAgICAgICAgICByZWxlYXNlQ29udGV4dC5pbmZvKGBWZXJpZmllZCAgJyR7cmVsZWFzZU5hbWV9Jy5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVJlbGVhc2VGaWxlcyhyZWxlYXNlQ29udGV4dCkge1xuICBjb25zdCBmaWxlc1ZlcmlmaWVkID0gdmVyaWZ5RmlsZXMocmVsZWFzZUNvbnRleHQpLFxuICAgICAgICByZWxlYXNlRmlsZXNWZXJpZmllZCA9IGZpbGVzVmVyaWZpZWQ7IC8vL1xuXG4gIHJldHVybiByZWxlYXNlRmlsZXNWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVwZW5kZW5jeVJlbGVhc2VzKHJlbGVhc2VDb250ZXh0LCByZWxlYXNlQ29udGV4dE1hcCkge1xuICBjb25zdCBkZXBlbmRlbmNpZXMgPSByZWxlYXNlQ29udGV4dC5nZXREZXBlbmRlbmNpZXMoKSxcbiAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVkID0gZGVwZW5kZW5jaWVzLmV2ZXJ5RGVwZW5kZW5jeSgoZGVwZW5kZW5jeSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5hbWUgPSBkZXBlbmRlbmN5LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICByZWxlYXNlTmFtZSA9IG5hbWUsIC8vL1xuICAgICAgICAgICAgICAgIHJlbGVhc2VWZXJpZmllZCA9IHZlcmlmeVJlbGVhc2UocmVsZWFzZU5hbWUsIHJlbGVhc2VDb250ZXh0TWFwKTtcblxuICAgICAgICAgIGlmIChyZWxlYXNlVmVyaWZpZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlSZWxlYXNlIiwicmVsZWFzZU5hbWUiLCJyZWxlYXNlQ29udGV4dE1hcCIsInJlbGVhc2VWZXJpZmllZCIsInJlbGVhc2VDb250ZXh0IiwiZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVkIiwidmVyaWZ5RGVwZW5kZW5jeVJlbGVhc2VzIiwidmVyaWZpZWQiLCJpc1ZlcmlmaWVkIiwiZGVidWciLCJyZWxlYXNlRmlsZXNWZXJpZmllZCIsInZlcmlmeVJlbGVhc2VGaWxlcyIsInNldFZlcmlmaWVkIiwiaW5mbyIsImZpbGVzVmVyaWZpZWQiLCJ2ZXJpZnlGaWxlcyIsImRlcGVuZGVuY2llcyIsImdldERlcGVuZGVuY2llcyIsImV2ZXJ5RGVwZW5kZW5jeSIsImRlcGVuZGVuY3kiLCJuYW1lIiwiZ2V0TmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUF3QkE7Ozs0REFGQTs7Ozs7O0FBRVQsU0FBU0EsY0FBY0MsV0FBVyxFQUFFQyxpQkFBaUI7SUFDbEUsSUFBSUMsa0JBQWtCO0lBRXRCLElBQU1DLGlCQUFpQkYsaUJBQWlCLENBQUNELFlBQVk7SUFFckQsSUFBSUcsbUJBQW1CLE1BQU07UUFDM0IsSUFBTUMsOEJBQThCQyx5QkFBeUJGLGdCQUFnQkY7UUFFN0UsSUFBSUcsNkJBQTZCO1lBQy9CLElBQU1FLFdBQVdILGVBQWVJO1lBRWhDLElBQUlELFVBQVU7Z0JBQ1pKLGtCQUFrQjtZQUNwQixPQUFPO2dCQUNMQyxlQUFlSyxNQUFNLEFBQUMsY0FBeUIsT0FBWlIsYUFBWTtnQkFFL0MsSUFBTVMsdUJBQXVCQyxtQkFBbUJQO2dCQUVoRCxJQUFJTSxzQkFBc0I7b0JBQ3hCLElBQU1ILFlBQVc7b0JBRWpCSCxlQUFlUSxZQUFZTDtvQkFFM0JKLGtCQUFrQkksV0FBVSxHQUFHO2dCQUNqQztnQkFFQSxJQUFJSixpQkFBaUI7b0JBQ25CQyxlQUFlUyxLQUFLLEFBQUMsY0FBeUIsT0FBWlosYUFBWTtnQkFDaEQ7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPRTtBQUNUO0FBRUEsU0FBU1EsbUJBQW1CUCxjQUFjO0lBQ3hDLElBQU1VLGdCQUFnQkMsSUFBQUEsZ0JBQVlYLGlCQUM1Qk0sdUJBQXVCSSxlQUFlLEdBQUc7SUFFL0MsT0FBT0o7QUFDVDtBQUVBLFNBQVNKLHlCQUF5QkYsY0FBYyxFQUFFRixpQkFBaUI7SUFDakUsSUFBTWMsZUFBZVosZUFBZWEsbUJBQzlCWiw4QkFBOEJXLGFBQWFFLGdCQUFnQixTQUFDQztRQUMxRCxJQUFNQyxPQUFPRCxXQUFXRSxXQUNsQnBCLGNBQWNtQixNQUNkakIsa0JBQWtCSCxjQUFjQyxhQUFhQztRQUVuRCxJQUFJQyxpQkFBaUI7WUFDbkIsT0FBTztRQUNUO0lBQ0Y7SUFFTixPQUFPRTtBQUNUIn0=