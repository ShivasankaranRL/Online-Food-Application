import {Food} from './app/shared/models/food';
import { Tag } from './app/shared/models/Tag';
export const  sample_foods:Food[]=[
    {id:'1',name:'Vegetable Pizza',price:11,cookTime:['40-50'],favorite:false,origins:['italy'],stars:4.0,imageUrl:'assets/Food_image-1.jfif',tags:['FastFood','Pizza','Lunch'],},
    {id:'2',name:'Chicken biriyani',price:100,cookTime:['50-60'],favorite:true,origins:['India'],stars:5.0,imageUrl:'assets/food-2.jfif',tags:['South Indian','Lunch']},
    {id:'3',name:'Dosa',price:100,cookTime:['50-60 min'],favorite:false,origins:['India'],stars:5.0,imageUrl:'assets/Dosa.jpg',tags:['South Indian','Lunch']},
    {id:'4',name:'Chicken Grill',price:150,cookTime:['60-70 min'],favorite:true,origins:['India'],stars:5.0,imageUrl:'assets/grill.jfif',tags:['South Indian','Dinner']},
]
export const sample_tags:Tag[]=[
    {name:'All',count:6},
    {name:'Dosa',count:2},
    {name:'Vegetable Pizza',count:2},
    {name:'Chicken Grill',count:3},
    {name:'Chicken biriyani',count:4},
]