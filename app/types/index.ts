export type Specification = {
  material: string;
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

export type Inquiry = {
  name: string,
  mail: string,
  message: string,
  material:string,
  quantity: number
}

