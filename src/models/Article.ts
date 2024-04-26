import { string } from "yup";

export interface IArticle {
  title: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
  thumbnailUrl: string;

  content: IArticleContent[][];
}

export interface IArticleContent {
  type: string;
  paragraph?: IParagraph[];
  imageUrl?: string;
  level?: number;
}

export interface IParagraph {
  text: string;
  bold?: boolean;
}

export const ArticleInitial: IArticle = {
  content: [],
  createdAt: new Date(),
  id: 0,
  thumbnailUrl: "",
  title: "",
  updatedAt: new Date(),
};
