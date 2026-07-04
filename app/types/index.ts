export type Specification = {
  material: MaterialType;
  color: "";
  height: string;
  pattern: string;
  density: number;
  quantity: number;
  wall: number;
  explaination: string;
};
export type Color = {
    name: string,
    class: string
}

export type MaterialType = {
  name: string,
  colors: Color []
}

