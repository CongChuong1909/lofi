import { configureStore } from "@reduxjs/toolkit";
import modeSlices from "./Slices/ModeSlices"
import MusicSlices from "./Slices/MusicSlices";
import NoiseSlices from "./Slices/NoiseSlices";
const store = configureStore({
    reducer:{
        mode: modeSlices,
        music: MusicSlices,
        noise: NoiseSlices,
    }
})
export default store;