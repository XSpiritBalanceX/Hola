export type TStory = {
  url: string;
  header: { heading: string; subheading: string; profileImage: string };
};

export interface IUserStoriesProps {
  stories: TStory[];
  cbHandleOpenUserStory: () => void;
  cbHandleAddUserPhoto: (file: File | null) => void;
}

export interface IUserStoryProps {
  cbHandleCloseUserStory: () => void;
  userStory: TStory | null;
  userSelectedPhoto: string | File;
}

export interface IUserNewStoryProps {
  userSelectedPhoto: string | File;
  cbHandleCloseUserStory: () => void;
}
