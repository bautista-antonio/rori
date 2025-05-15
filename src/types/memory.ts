export interface Memory {
  id: string;
  userId: string;
  title: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;

  recipeId?: string;
  moodTags?: string[];

  imageUrls?: string[];
  voiceNoteUrls?: string[];

  location?: Location;
}

export type MemoryCardProps = Pick<Memory, "id" | "title" | "createdAt">;
