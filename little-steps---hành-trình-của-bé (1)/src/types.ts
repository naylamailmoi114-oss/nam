export interface Photo {
  url: string;
  caption?: string;
}

export interface Milestone {
  id: string;
  date: string;
  title: string;
  description: string;
  photos: Photo[];
}

export interface BabyInfo {
  name: string;
  birthDate: string;
  birthWeight: string;
  birthHeight: string;
  currentAge: string;
}
