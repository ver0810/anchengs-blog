import type { CollectionEntry } from "astro:content";

const getSortedNotes = (notes: CollectionEntry<"notes">[]) => {
  return notes
    .filter(note => !note.data.draft)
    .sort((a, b) => {
      if (a.data.pinned && !b.data.pinned) return -1;
      if (!a.data.pinned && b.data.pinned) return 1;

      const aTime = new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime();
      const bTime = new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime();
      return bTime - aTime;
    });
};

export default getSortedNotes;
