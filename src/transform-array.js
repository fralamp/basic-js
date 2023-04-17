const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
    if(!Array.isArray(arr)){
        throw Error("'arr' parameter must be an instance of the Array!");
    }else {
        const changedArr = arr.filter((el, index) => {
          if(el === '--discard-next'){
              delete arr[index + 1];
              return;
          };

          if(el === '--discard-prev'){
                el =  arr[index - 1];
                return false;
          };

          return el;
      });

      const finalArr = changedArr.map((el, index) => {
        if(el === '--double-next'){
            el =  arr[index + 1];
        };

        if(el === '--double-prev'){
          el = arr[index - 1];

        };

        return el;
      });

      return finalArr;
    };
};

module.exports = {
  transform
};


// if(!Array.isArray(arr)){
//   throw Error("'arr' parameter must be an instance of the Array!");
// }else {
//   const changedArr = arr.map((el, index,array) => {
//       if(el === '--discard-prev'){
//           console.log('убрать пред.')
//           delete array[index - 2];
//           // delete arr[index];s
//           return;
//       };
      
//       if(el === '--discard-next'){
//           console.log('убрать след.')
//           delete arr[index + 1];
//           return;
//       };

//       if(el === '--double-next'){
//           console.log('дубль след.', arr[index + 1])
          
//           return arr[index + 1];
//       };

//       if(el === '--double-prev'){
//           console.log('дубль пред.')
//           return arr[index - 1];
//       };

//       return el;
//   });

//   // console.log(changedArr)

//   const resultArr = changedArr.filter((el, index) => {
//       // return el !== undefined;
//       if(el !== undefined){
//           return el;
//           // console.log(changedArr[index - 1])

//       }else {
//           delete changedArr[index - 1];
//           console.log(changedArr)
//           return false
//       };
//   });

//   return resultArr;
// };