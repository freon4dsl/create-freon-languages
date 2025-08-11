import {setCustomComponents} from "@freon4dsl/core-svelte";
import DatePicker from "./DatePicker.svelte";
import ShowAnimatedGif from "./ShowAnimatedGif.svelte";
import FB_Accordion from "./FB_Accordion.svelte";
import FB_Card_Component from "./FB_Card_Component.svelte";
import FB_Dialog from "./FB_Dialog.svelte";

/**
 * Configure the external components used, so Freon can find them.
 */
export function configureExternals() {
    setCustomComponents([
        { component: ShowAnimatedGif, knownAs: "AnimatedGif" },
        { component: FB_Card_Component, knownAs: "ExternalCard" },
        { component: FB_Accordion, knownAs: "ExternalAccordion" },
        { component: FB_Dialog, knownAs: "ExternalDialog" },
        { component: DatePicker, knownAs: "DatePicker" }
    ]);

}

