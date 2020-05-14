export interface IJob {
  id?: number;
  source?: string;
  text?: string;
  url?: string;
}

export const defaultValue: Readonly<IJob> = {};
