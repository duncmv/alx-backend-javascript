import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(newRange) {
    if (typeof newRange !== 'string') {
      throw TypeError('Range must be a number');
    }
    this._range = newRange;
  }
  cloneCar() {
    const Species = super.constructor[Symbol.species];
    return new Species();
  }  
}
