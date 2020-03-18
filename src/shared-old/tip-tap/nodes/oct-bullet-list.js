import { BulletList } from "tiptap-extensions";

export class OctBulletList extends BulletList {
  get schema() {
    return {
      content: "list_item+",
      group: "block",
      parseDOM: [{ tag: "ul", class: "oct-ul" }],
      toDOM: () => ["ul", { class: "oct-ul" }, 0]
    };
  }
}
