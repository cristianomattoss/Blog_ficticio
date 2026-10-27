type PostData = {
  title: string;
  body: string;
  userId: number;
  id: number;
};

type UpdatePostData = {
  title: string;
  body: string;
  userId: number;
};

export type { PostData, UpdatePostData };
