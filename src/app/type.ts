export type Pokemon = {
  id: number;
  name: string;
  sprite: string;
  artwork?: string;
  types: string[];
  description?: string;
  surname?: string;
  evolutionChain?: number;
};

export type PokemonBasic = {
  name: string;
  url: string;
};
