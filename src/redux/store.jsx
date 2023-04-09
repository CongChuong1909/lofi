import { configureStore } from "@reduxjs/toolkit";
import modeSlices from "./Slices/ModeSlices"
import MusicSlices from "./Slices/MusicSlices";
import NoiseSlices from "./Slices/NoiseSlices";
import ScenesSlices from "./Slices/ScenesSlices";
import HiddenSlices from "./Slices/HiddenSlices";
const store = configureStore({
    reducer:{
        mode: modeSlices,
        music: MusicSlices,
        noise: NoiseSlices,
        scenes: ScenesSlices,
        hidden: HiddenSlices,
    }
})
export default store;