export interface Meal {
  id: number;
  name: string;
  desc: string;
  diet: boolean;
  date?: Date;
  user_id: number;
}
