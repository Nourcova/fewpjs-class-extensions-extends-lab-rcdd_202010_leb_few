// Your code here
class Polygon{
  constructor(arr){
    this.arr=arr;
  }
  
  get countSides(){
    return  arr.reduce((acc,cur,ind)=>ind+1,0)
  }
}