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
function verifyRelease(releaseName, dependentName, dependentReleased, releaseContextMap) {
    var releaseVerified = false;
    var releaseContext = releaseContextMap[releaseName];
    if (releaseContext !== null) {
        var released = releaseContext.isReleased();
        if (released) {
            releaseVerified = true;
        } else {
            if (dependentReleased) {
                releaseContext.warning("The '".concat(releaseName, "' project cannot be verified because its '").concat(dependentName, "' dependent is a package."));
            } else {
                var _$dependentName = releaseName, _$dependentReleased = released, dependencyReleasesVVerified = verifyDependencyReleases(releaseContext, _$dependentName, _$dependentReleased, releaseContextMap);
                if (dependencyReleasesVVerified) {
                    var verified = releaseContext.isVerified();
                    if (verified) {
                        releaseVerified = true;
                    } else {
                        releaseContext.info("Verifying the '".concat(releaseName, "' project..."));
                        var releaseFilesVerified = verifyReleaseFiles(releaseContext);
                        if (releaseFilesVerified) {
                            var verified1 = true;
                            releaseContext.setVerified(verified1);
                            releaseVerified = verified1; ///
                        }
                        if (releaseVerified) {
                            releaseContext.info("...verified the '".concat(releaseName, "' project."));
                        }
                    }
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
function verifyDependencyReleases(releaseContext, dependentName, dependentReleased, releaseContextMap) {
    var dependencies = releaseContext.getDependencies(), dependencyReleasesVVerified = dependencies.everyDependency(function(dependency) {
        var name = dependency.getName(), releaseName = name, releaseVerified = verifyRelease(releaseName, dependentName, dependentReleased, releaseContextMap);
        if (releaseVerified) {
            return true;
        }
    });
    return dependencyReleasesVVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeUZpbGVzIGZyb20gXCIuLi92ZXJpZnkvZmlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UmVsZWFzZShyZWxlYXNlTmFtZSwgZGVwZW5kZW50TmFtZSwgZGVwZW5kZW50UmVsZWFzZWQsIHJlbGVhc2VDb250ZXh0TWFwKSB7XG4gIGxldCByZWxlYXNlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0TWFwW3JlbGVhc2VOYW1lXTtcblxuICBpZiAocmVsZWFzZUNvbnRleHQgIT09IG51bGwpIHtcbiAgICBjb25zdCByZWxlYXNlZCA9IHJlbGVhc2VDb250ZXh0LmlzUmVsZWFzZWQoKTtcblxuICAgIGlmIChyZWxlYXNlZCkge1xuICAgICAgcmVsZWFzZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRlcGVuZGVudFJlbGVhc2VkKSB7XG4gICAgICAgIHJlbGVhc2VDb250ZXh0Lndhcm5pbmcoYFRoZSAnJHtyZWxlYXNlTmFtZX0nIHByb2plY3QgY2Fubm90IGJlIHZlcmlmaWVkIGJlY2F1c2UgaXRzICcke2RlcGVuZGVudE5hbWV9JyBkZXBlbmRlbnQgaXMgYSBwYWNrYWdlLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGVwZW5kZW50TmFtZSA9IHJlbGVhc2VOYW1lLCAgLy8vXG4gICAgICAgICAgICAgIGRlcGVuZGVudFJlbGVhc2VkID0gcmVsZWFzZWQsIC8vL1xuICAgICAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZXNWVmVyaWZpZWQgPSB2ZXJpZnlEZXBlbmRlbmN5UmVsZWFzZXMocmVsZWFzZUNvbnRleHQsIGRlcGVuZGVudE5hbWUsIGRlcGVuZGVudFJlbGVhc2VkLCByZWxlYXNlQ29udGV4dE1hcCk7XG5cbiAgICAgICAgaWYgKGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHZlcmlmaWVkID0gcmVsZWFzZUNvbnRleHQuaXNWZXJpZmllZCgpO1xuXG4gICAgICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZWxlYXNlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWxlYXNlQ29udGV4dC5pbmZvKGBWZXJpZnlpbmcgdGhlICcke3JlbGVhc2VOYW1lfScgcHJvamVjdC4uLmApO1xuXG4gICAgICAgICAgICBjb25zdCByZWxlYXNlRmlsZXNWZXJpZmllZCA9IHZlcmlmeVJlbGVhc2VGaWxlcyhyZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChyZWxlYXNlRmlsZXNWZXJpZmllZCkge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHQuc2V0VmVyaWZpZWQodmVyaWZpZWQpO1xuXG4gICAgICAgICAgICAgIHJlbGVhc2VWZXJpZmllZCA9IHZlcmlmaWVkOyAvLy9cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlbGVhc2VWZXJpZmllZCkge1xuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dC5pbmZvKGAuLi52ZXJpZmllZCB0aGUgJyR7cmVsZWFzZU5hbWV9JyBwcm9qZWN0LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWxlYXNlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVJlbGVhc2VGaWxlcyhyZWxlYXNlQ29udGV4dCkge1xuICBjb25zdCBmaWxlc1ZlcmlmaWVkID0gdmVyaWZ5RmlsZXMocmVsZWFzZUNvbnRleHQpLFxuICAgICAgICByZWxlYXNlRmlsZXNWZXJpZmllZCA9IGZpbGVzVmVyaWZpZWQ7IC8vL1xuXG4gIHJldHVybiByZWxlYXNlRmlsZXNWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVwZW5kZW5jeVJlbGVhc2VzKHJlbGVhc2VDb250ZXh0LCBkZXBlbmRlbnROYW1lLCBkZXBlbmRlbnRSZWxlYXNlZCwgcmVsZWFzZUNvbnRleHRNYXApIHtcbiAgY29uc3QgZGVwZW5kZW5jaWVzID0gcmVsZWFzZUNvbnRleHQuZ2V0RGVwZW5kZW5jaWVzKCksXG4gICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlc1ZWZXJpZmllZCA9IGRlcGVuZGVuY2llcy5ldmVyeURlcGVuZGVuY3koKGRlcGVuZGVuY3kpID0+IHtcbiAgICAgICAgICBjb25zdCBuYW1lID0gZGVwZW5kZW5jeS5nZXROYW1lKCksXG4gICAgICAgICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgICAgICAgICByZWxlYXNlVmVyaWZpZWQgPSB2ZXJpZnlSZWxlYXNlKHJlbGVhc2VOYW1lLCBkZXBlbmRlbnROYW1lLCBkZXBlbmRlbnRSZWxlYXNlZCwgcmVsZWFzZUNvbnRleHRNYXApO1xuXG4gICAgICAgICAgaWYgKHJlbGVhc2VWZXJpZmllZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVJlbGVhc2UiLCJyZWxlYXNlTmFtZSIsImRlcGVuZGVudE5hbWUiLCJkZXBlbmRlbnRSZWxlYXNlZCIsInJlbGVhc2VDb250ZXh0TWFwIiwicmVsZWFzZVZlcmlmaWVkIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlZCIsImlzUmVsZWFzZWQiLCJ3YXJuaW5nIiwiZGVwZW5kZW5jeVJlbGVhc2VzVlZlcmlmaWVkIiwidmVyaWZ5RGVwZW5kZW5jeVJlbGVhc2VzIiwidmVyaWZpZWQiLCJpc1ZlcmlmaWVkIiwiaW5mbyIsInJlbGVhc2VGaWxlc1ZlcmlmaWVkIiwidmVyaWZ5UmVsZWFzZUZpbGVzIiwic2V0VmVyaWZpZWQiLCJmaWxlc1ZlcmlmaWVkIiwidmVyaWZ5RmlsZXMiLCJkZXBlbmRlbmNpZXMiLCJnZXREZXBlbmRlbmNpZXMiLCJldmVyeURlcGVuZGVuY3kiLCJkZXBlbmRlbmN5IiwibmFtZSIsImdldE5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7NERBRkE7Ozs7OztBQUVULFNBQVNBLGNBQWNDLFdBQVcsRUFBRUMsYUFBYSxFQUFFQyxpQkFBaUIsRUFBRUMsaUJBQWlCO0lBQ3BHLElBQUlDLGtCQUFrQjtJQUV0QixJQUFNQyxpQkFBaUJGLGlCQUFpQixDQUFDSCxZQUFZO0lBRXJELElBQUlLLG1CQUFtQixNQUFNO1FBQzNCLElBQU1DLFdBQVdELGVBQWVFLFVBQVU7UUFFMUMsSUFBSUQsVUFBVTtZQUNaRixrQkFBa0I7UUFDcEIsT0FBTztZQUNMLElBQUlGLG1CQUFtQjtnQkFDckJHLGVBQWVHLE9BQU8sQ0FBQyxBQUFDLFFBQStEUCxPQUF4REQsYUFBWSw4Q0FBMEQsT0FBZEMsZUFBYztZQUN2RyxPQUFPO2dCQUNMLElBQU1BLGtCQUFnQkQsYUFDaEJFLHNCQUFvQkksVUFDcEJHLDhCQUE4QkMseUJBQXlCTCxnQkFBZ0JKLGlCQUFlQyxxQkFBbUJDO2dCQUUvRyxJQUFJTSw2QkFBNkI7b0JBQy9CLElBQU1FLFdBQVdOLGVBQWVPLFVBQVU7b0JBRTFDLElBQUlELFVBQVU7d0JBQ1pQLGtCQUFrQjtvQkFDcEIsT0FBTzt3QkFDTEMsZUFBZVEsSUFBSSxDQUFDLEFBQUMsa0JBQTZCLE9BQVpiLGFBQVk7d0JBRWxELElBQU1jLHVCQUF1QkMsbUJBQW1CVjt3QkFFaEQsSUFBSVMsc0JBQXNCOzRCQUN4QixJQUFNSCxZQUFXOzRCQUVqQk4sZUFBZVcsV0FBVyxDQUFDTDs0QkFFM0JQLGtCQUFrQk8sV0FBVSxHQUFHO3dCQUNqQzt3QkFFQSxJQUFJUCxpQkFBaUI7NEJBQ25CQyxlQUFlUSxJQUFJLENBQUMsQUFBQyxvQkFBK0IsT0FBWmIsYUFBWTt3QkFDdEQ7b0JBQ0Y7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPSTtBQUNUO0FBRUEsU0FBU1csbUJBQW1CVixjQUFjO0lBQ3hDLElBQU1ZLGdCQUFnQkMsSUFBQUEsY0FBVyxFQUFDYixpQkFDNUJTLHVCQUF1QkcsZUFBZSxHQUFHO0lBRS9DLE9BQU9IO0FBQ1Q7QUFFQSxTQUFTSix5QkFBeUJMLGNBQWMsRUFBRUosYUFBYSxFQUFFQyxpQkFBaUIsRUFBRUMsaUJBQWlCO0lBQ25HLElBQU1nQixlQUFlZCxlQUFlZSxlQUFlLElBQzdDWCw4QkFBOEJVLGFBQWFFLGVBQWUsQ0FBQyxTQUFDQztRQUMxRCxJQUFNQyxPQUFPRCxXQUFXRSxPQUFPLElBQ3pCeEIsY0FBY3VCLE1BQ2RuQixrQkFBa0JMLGNBQWNDLGFBQWFDLGVBQWVDLG1CQUFtQkM7UUFFckYsSUFBSUMsaUJBQWlCO1lBQ25CLE9BQU87UUFDVDtJQUNGO0lBRU4sT0FBT0s7QUFDVCJ9