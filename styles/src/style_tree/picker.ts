import { ColorScheme } from "../theme/color_scheme"
import { withOpacity } from "../theme/color"
import { background, border, text } from "./components"
import { interactive, toggleable } from "../element"

export default function picker(colorScheme: ColorScheme): any {
    const layer = colorScheme.lowest
    const container = {
        background: background(layer),
        border: border(layer),
        shadow: colorScheme.modalShadow,
        corner_radius: 12,
        padding: {
            bottom: 4,
        },
    }
    const inputEditor = {
        placeholderText: text(layer, "sans", "on", "disabled"),
        selection: colorScheme.players[0],
        text: text(layer, "mono", "on"),
        border: border(layer, { bottom: true }),
        padding: {
            bottom: 8,
            left: 16,
            right: 16,
            top: 8,
        },
        margin: {
            bottom: 4,
        },
    }
    const emptyInputEditor: any = { ...inputEditor }
    delete emptyInputEditor.border
    delete emptyInputEditor.margin

    return {
        ...container,
        emptyContainer: {
            ...container,
            padding: {},
        },
        item: toggleable({
            base: interactive({
                base: {
                    padding: {
                        bottom: 4,
                        left: 12,
                        right: 12,
                        top: 4,
                    },
                    margin: {
                        top: 1,
                        left: 4,
                        right: 4,
                    },
                    corner_radius: 8,
                    text: text(layer, "sans", "variant"),
                    highlightText: text(layer, "sans", "accent", {
                        weight: "bold",
                    }),
                },
                state: {
                    hovered: {
                        background: withOpacity(
                            background(layer, "hovered"),
                            0.5
                        ),
                    },
                    clicked: {
                        background: withOpacity(
                            background(layer, "pressed"),
                            0.5
                        ),
                    },
                },
            }),
            state: {
                active: {
                    default: {
                        background: withOpacity(
                            background(layer, "base", "active"),
                            0.5
                        ),
                    },
                    hovered: {
                        background: withOpacity(
                            background(layer, "hovered"),
                            0.5
                        ),
                    },
                    clicked: {
                        background: withOpacity(
                            background(layer, "pressed"),
                            0.5
                        ),
                    },
                },
            },
        }),

        inputEditor,
        emptyInputEditor,
        noMatches: {
            text: text(layer, "sans", "variant"),
            padding: {
                bottom: 8,
                left: 16,
                right: 16,
                top: 8,
            },
        },
    }
}
