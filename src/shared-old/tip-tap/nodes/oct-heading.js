import { Heading } from "tiptap-extensions";

export class OctHeading extends Heading {
  get schema() {
    return {
      attrs: {
        level: {
          default: 1
        }
      },
      content: "inline*",
      group: "block",
      defining: true,
      draggable: false,
      parseDOM: this.options.levels.map(level => ({
        tag: `h${level}`,
        attrs: { level }
      })),
      toDOM: node => [
        `h${node.attrs.level}`,
        {
          class: `oct-h${node.attrs.level}`
        },
        0
      ]
    };
  }
}
