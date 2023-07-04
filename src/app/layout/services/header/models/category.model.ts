export interface CategoryModel {
  categoryId: string;
  name: string;
  link: string;
  previewUri: string;
  children: ChildrenCategory[];
}

interface ChildrenCategory {
  categoryId: string;
  name: string;
  link: string;
}
