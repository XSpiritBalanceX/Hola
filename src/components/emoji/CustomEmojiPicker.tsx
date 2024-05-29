import EmojiPicker, { EmojiClickData, Categories } from "emoji-picker-react";
import { translate } from "@i18n";

interface ICustomEmojiPickerProps {
  cbHandleAddEmoji: (emoji: string) => void;
  classNamePicker: string;
}

const CustomEmojiPicker = ({
  cbHandleAddEmoji,
  classNamePicker,
}: ICustomEmojiPickerProps) => {
  const { t } = translate("translate", { keyPrefix: "emojiPicker" });

  const customCategoriesEmoji = [
    {
      category: Categories.SUGGESTED,
      name: t("lastUsedEmoji"),
    },
    {
      category: Categories.SMILEYS_PEOPLE,
      name: t("smileysAndFacesEmoji"),
    },
    {
      category: Categories.ANIMALS_NATURE,
      name: t("animalAndNatureEmoji"),
    },
    {
      category: Categories.FOOD_DRINK,
      name: t("foodAndDrinkEmoji"),
    },
    {
      category: Categories.TRAVEL_PLACES,
      name: t("travelAndPlacesEmoji"),
    },
    {
      category: Categories.ACTIVITIES,
      name: t("activitiesEmoji"),
    },
    {
      category: Categories.OBJECTS,
      name: t("objectEmoji"),
    },
    {
      category: Categories.SYMBOLS,
      name: t("symbolsEmoji"),
    },
    {
      category: Categories.FLAGS,
      name: t("flagsEmoji"),
    },
  ];

  const handleAddEmoji = (emoji: EmojiClickData) => {
    cbHandleAddEmoji(emoji.emoji);
  };

  return (
    <EmojiPicker
      className={classNamePicker}
      onEmojiClick={handleAddEmoji}
      searchDisabled
      skinTonesDisabled
      previewConfig={{ showPreview: false }}
      categories={customCategoriesEmoji}
    />
  );
};

export default CustomEmojiPicker;
