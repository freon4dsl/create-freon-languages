import {setCustomComponents} from "@freon4dsl/core-svelte";
import PersonIcon from "./PersonIcon.svelte";
import Schedule from "./Schedule.svelte";
/**
 * Configure the external components used, so Freon can find them.
 */
export function configureExternals() {
    setCustomComponents([
        { component: PersonIcon, knownAs: "PersonIcon" },
        { component: Schedule, knownAs: "Schedule" },
    ]);

}

