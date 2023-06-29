import { ColorScheme } from "../theme/color_scheme"
import { background, border, text } from "./components"
import { interactive } from "../element"

export default function feedback(colorScheme: ColorScheme): any {
    const layer = colorScheme.highest

    return {
        submit_button: interactive({
            base: {
                ...text(layer, "mono", "on"),
                background: background(layer, "on"),
                corner_radius: 6,
                border: border(layer, "on"),
                margin: {
                    right: 4,
                },
                padding: {
                    bottom: 2,
                    left: 10,
                    right: 10,
                    top: 2,
                },
            },
            state: {
                clicked: {
                    ...text(layer, "mono", "on", "pressed"),
                    background: background(layer, "on", "pressed"),
                    border: border(layer, "on", "pressed"),
                },
                hovered: {
                    ...text(layer, "mono", "on", "hovered"),
                    background: background(layer, "on", "hovered"),
                    border: border(layer, "on", "hovered"),
                },
            },
        }),
        button_margin: 8,
        info_text_default: text(layer, "sans", "default", { size: "xs" }),
        link_text_default: text(layer, "sans", "default", {
            size: "xs",
            underline: true,
        }),
        link_text_hover: text(layer, "sans", "hovered", {
            size: "xs",
            underline: true,
        }),
    }
}
