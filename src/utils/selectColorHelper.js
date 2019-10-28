const getDefaultColour = (arrToFind, num) => {
    let longestArr = 0;
    let maxObj = 0;
    for (let i in arrToFind) {
      if (
        arrToFind[i].length > longestArr &&
        arrToFind[i].includes(num)
      ) {
        longestArr = arrToFind[i].length;
        maxObj = i;
      }
    }
    return maxObj;
  };
  
  export default getDefaultColour;
