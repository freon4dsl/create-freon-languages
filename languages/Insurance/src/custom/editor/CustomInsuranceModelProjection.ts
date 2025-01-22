// Generated by the Freon Language Generator.
import {
    FreNode,
    Box,
    FreProjection,
    FreTableDefinition,
    createDefaultExpressionBox,
    BoxFactory,
    BoxUtil, NumberDisplay, SvgBox
} from "@freon4dsl/core";
import {EuroLiteral} from "../language/gen/index.js";

/**
 * Original:
 * <svg
 * class="svg-icon"
 * style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
 * viewBox="0 0 1024 1024"
 * version="1.1"
 * xmlns="http://www.w3.org/2000/svg">
 * <path d="M640 789.333333c-106.88 0-199.68-60.586667-245.973333-149.333333H640v-85.333333H366.293333c-2.133333-13.866667-3.626667-28.16-3.626666-42.666667s1.493333-28.8 3.626666-42.666667H640v-85.333333H394.026667c46.293333-88.746667 138.88-149.333333 245.973333-149.333333 68.906667 0 131.84 25.173333 180.266667 66.773333L896 226.133333A382.72 382.72 0 0 0 640 128c-167.04 0-308.906667 106.88-361.6 256H128v85.333333h130.56c-1.706667 14.08-2.56 28.16-2.56 42.666667 0 14.506667 0.853333 28.586667 2.56 42.666667H128v85.333333h150.4c52.693333 149.12 194.56 256 361.6 256 98.346667 0 188.16-37.333333 256-98.133333l-75.733333-75.52A275.818667 275.818667 0 0 1 640 789.333333z"  />
 * </svg>
 */
const euroIcon = "M640 789.333333c-106.88 0-199.68-60.586667-245.973333-149.333333H640v-85.333333H366.293333c-2.133333-13.866667-3.626667-28.16-3.626666-42.666667s1.493333-28.8 3.626666-42.666667H640v-85.333333H394.026667c46.293333-88.746667 138.88-149.333333 245.973333-149.333333 68.906667 0 131.84 25.173333 180.266667 66.773333L896 226.133333A382.72 382.72 0 0 0 640 128c-167.04 0-308.906667 106.88-361.6 256H128v85.333333h130.56c-1.706667 14.08-2.56 28.16-2.56 42.666667 0 14.506667 0.853333 28.586667 2.56 42.666667H128v85.333333h150.4c52.693333 149.12 194.56 256 361.6 256 98.346667 0 188.16-37.333333 256-98.133333l-75.733333-75.52A275.818667 275.818667 0 0 1 640 789.333333z"

/**
 * Class CustomInsuranceModelProjection provides an entry point for the language engineer to
 * define custom build additions to the editor.
 * These are merged with the custom build additions and other definition-based editor parts
 * in a three-way manner. For each modelelement,
 * (1) if a custom build creator/behavior is present, this is used,
 * (2) if a creator/behavior based on one of the editor definition is present, this is used,
 * (3) if neither (1) nor (2) yields a result, the default is used.
 */
export class CustomInsuranceModelProjection implements FreProjection {
    name: string = "Euro-symbol";
    nodeTypeToBoxMethod: Map<string, (node: FreNode) => Box> = new Map<string, (node: FreNode) => Box>([
        // register your custom box methods here
        ['EuroLiteral', this.EuroLiteralWithSVG],
    ]);
    nodeTypeToTableDefinition: Map<string, () => FreTableDefinition> = new Map<string, () => FreTableDefinition>([
        // register your custom table definition methods here
        // ['NAME_OF_CONCEPT', this.TABLE_DEFINITION_FOR_CONCEPT],
    ]);

    // add your custom methods here

    // BOX_FOR_CONCEPT(node: NAME_OF_CONCEPT) : Box { ... }
    EuroLiteralWithSVG(node: EuroLiteral): Box {
        return createDefaultExpressionBox(
            node,
            [
                BoxFactory.horizontalLayout(
                    node,
                    "EuroLiteral-hlist-line-0",
                    "",
                    [
                        new SvgBox(node, "euro-icon", euroIcon, {
                            viewPortWidth: 20,
                            viewPortHeight: 20,
                            viewBoxWidth: 1024,
                            viewBoxHeight: 1024,
                            selectable: false
                        }),
                        BoxUtil.numberBox(node, "euros", NumberDisplay.SELECT),
                        BoxUtil.labelBox(node, ",", "top-1-line-0-item-2"),
                        BoxUtil.numberBox(node, "cents", NumberDisplay.SELECT),
                    ],
                    { selectable: false },
                ),
            ],
            { selectable: false },
        );
    }

    // TABLE_DEFINITION_FOR_CONCEPT() : FreTableDefinition { ... }
}
