'use strict';
// let bmi=function calcBMI(height,weight){
//    // let n =2;
//    return Math.floor(weight/((height/100)**2)*Math.pow(10,2))/Math.pow(10,2);
// };
// let calcBMI=function(height,weight){
//    return Math.floor(weight/((height/100)**2)*Math.pow(10,2))/Math.pow(10,2);
// };

// calcBMI(170,50);{
//    if (calcBMI()<18.5){
//    console.log('スリムですね。')
// }else if(calcBMI>=18.5&&calcBMI<25){
//    console.log('ちょうどいいですね。')
// }else if(calcBMI>=25&&calcBMI<30){
//    console.log('運動を始めましょう。')
// }else{
//    console.log('生活を見直しましょう。')
// }
// }


// function calcBMI2(height,weight){
//    if(Math.floor(weight/((height/100)**2)*Math.pow(10,2))/Math.pow(10,2)<18.5){
//       return 'スリムですね';
//    }else if(Math.floor(weight/((height/100)**2)*Math.pow(10,2))/Math.pow(10,2)>=18.5&&Math.floor(weight/((height/100)**2)*Math.pow(10,2))/Math.pow(10,2)<25){
//       return 'ちょうどいいですね。';
//    }else if(Math.floor(weight/((height/100)**2)*Math.pow(10,2))/Math.pow(10,2)>=25&&Math.floor(weight/((height/100)**2)*Math.pow(10,2))/Math.pow(10,2)<30){
//       return '運動を始めましょう。';
//    }else{
//       return '生活を見直しましょう。';
//    }
// }



// console.log(`身長 170 cm , 体重 50 kg のBMIは ${calcBMI(170,50)} です。 `);
// console.log(calcBMI2(170,50));
// console.log(`身長 160 cm , 体重 50 kg のBMIは ${calcBMI(160,50)} です。 `);
// console.log(calcBMI2(160,50));
// console.log(`身長 140 cm , 体重 50 kg のBMIは ${calcBMI(140,50)} です。 `);
// console.log(calcBMI2(140,50));
// console.log(`身長 120 cm , 体重 50 kg のBMIは ${calcBMI(120,50)} です。 `);
// console.log(calcBMI2(120,50));


function calcBMI(height,weight){
   let bmi=weight/((height/100)**2);
   console.log(`身長 ${height} cm , 体重 ${weight} kg のBMIは ${bmi.toFixed(2)} です。`);
   if(bmi<18.5){
      console.log('スリムですね。');
   }else if(bmi<25){
      console.log('ちょうどいいですね。');
   }else if(bmi<30){
      console.log('運動を始めましょう。');
   }else{
      console.log('生活を見直しましょう。')
   }
}

calcBMI(170,50);
calcBMI(160,50);
calcBMI(140,50);
calcBMI(120,50);