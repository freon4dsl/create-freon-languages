// For DocuProject:
import { setCustomComponents } from "@freon4dsl/core-svelte"
import DatePicker from "../externalComponents/DatePicker.svelte";
import ShowAnimatedGif from "../externalComponents/ShowAnimatedGif.svelte";
import SMUI_Accordion from "../externalComponents/SMUI_Accordion.svelte";
import SMUI_Card_Component from "../externalComponents/SMUI_Card_Component.svelte";
import SMUI_Dialog from "../externalComponents/SMUI_Dialog.svelte";

/**
 * Configure the external components used, so Freon can find them.
 */
export function configureExternals() {
    /**
     * Make the external components known to Freon before starting the app!
     */
    setCustomComponents([
        { component: ShowAnimatedGif, knownAs: "AnimatedGif" },
        { component: SMUI_Card_Component, knownAs: "SMUI_Card" },
        { component: SMUI_Accordion, knownAs: "SMUI_Accordion" },
        { component: SMUI_Dialog, knownAs: "SMUI_Dialog" },
        { component: DatePicker, knownAs: "DatePicker" }
    ]);


}

