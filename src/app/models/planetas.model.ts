export interface Planeta {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: any[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface RetornoListaPlanetas {
  count: number;
  next: string;
  previous?: any;
  results: Planeta[]
}





