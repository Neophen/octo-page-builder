import { Paragraph } from "tiptap";

export class OctParagraph extends Paragraph {
  get schema() {
    return {
      content: "inline*",
      group: "block",
      draggable: false,
      parseDOM: [
        {
          tag: "p"
        }
      ],
      toDOM: () => [
        "p",
        {
          class: "oct-p"
        },
        0
      ]
    };
  }
}
