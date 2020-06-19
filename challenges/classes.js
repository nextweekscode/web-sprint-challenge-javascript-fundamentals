// 1. Copy and paste your prototype in here and refactor into class syntax.

class CubiodMaker{
    constructor(attri){
    this.length = attri.length;
    this.width = attri.width;
    this.height = attri.height;
  }
  volume = function(){
    return this.length*this.width*this.height
  }
  surfaceArea = function(){
    return ((this.length * this.width) + (this.length * this.height) + (this.width * this.height))
  }
}

class CubeMaker extends CubiodMaker{
    constructor(attri){
        super(attri)
    }
    cubeVolume = function(){
      return  this.length*this.width*this.height
    }
    cubeSurArea = function(){
      return  (this.length*this.width*this.height)* 6
    }
}

const cubeOne = new CubiodMaker(4, 5, 5);
const cubeTwo = new CubeMaker(4, 4, 4);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cubeOne.volume()); // 100
console.log(cubeOne.surfaceArea()); // 130
console.log(cubeTwo.cubeVolume());
console.log(cubeTwo.cubeSurArea());
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.