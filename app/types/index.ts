export type Specification = {
  material: MaterialType;
  color: string;
  height: string;
  pattern: string;
  density: number;
  quantity: number;
  wall: number;
  nozzle: string;
  explaination: string;
  name: string;
  mail: string;
};
export type Color = {
  name: string;
  class: string;
};

export type MaterialType = {
  name: string;
  colors: Color[];
};
