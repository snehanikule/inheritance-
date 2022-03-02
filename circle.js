var Shape=require('./shape');
class circle extends Shape{
     constructor(name){
         super(name);
     }
     calculateArea(radius){
         return Math.PI*Math.pow(radius,2);
     }
}
module.exports=circle;