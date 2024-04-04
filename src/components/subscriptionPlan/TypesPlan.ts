export interface IAvailablePlanProps {
  id: number;
  type: string;
  price_per_month: string;
}

export type TPlansInformation = {
  free: Array<string>;
  premium: Array<string>;
  "premium student": Array<string>;
};

export interface ISelectablePlanProps {
  id: number;
  type: string;
  price_per_month: string;
  isSelectable: boolean;
}

export type TPlansInformationSelectable = {
  free: { list: Array<string>; logo: string };
  premium: { list: Array<string>; logo: string };
  "premium student": { list: Array<string>; logo: string };
};

export type TColors = {
  free: { background: string; text: string };
  premium: { background: string; text: string };
  "premium student": { background: string; text: string };
};
