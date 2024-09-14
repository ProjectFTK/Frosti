import { IAuthor } from "./user";

export default interface IRepo {
  id: string;
  name: string;
  state: string;
  description: string | null;
  owner: IAuthor;
  gradeLevel: string;
  filterBy: string;
  webModeAllowance: number;
  contentFilter: string | null | undefined;
  teachersNotes: string | null | undefined;

  originalRepoId: string | null;
  originalAuthorId: string | null;
  tags: string[] | null;
  stars: number | null;
  forks: number | null;
  views: number | null;
  fileCount: number;
  extractedTextCount: number;
  lastModified: Date | string;
  createTime: Date | string;
}