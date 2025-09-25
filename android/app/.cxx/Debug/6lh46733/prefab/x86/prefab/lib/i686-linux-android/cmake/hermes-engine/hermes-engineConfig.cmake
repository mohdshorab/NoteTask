if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/Mohd.x.Shorab/.gradle/caches/8.14.3/transforms/1ca38a40fef0ea5b6707c39c387996b1/transformed/hermes-android-0.81.4-debug/prefab/modules/libhermes/libs/android.x86/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/Mohd.x.Shorab/.gradle/caches/8.14.3/transforms/1ca38a40fef0ea5b6707c39c387996b1/transformed/hermes-android-0.81.4-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

