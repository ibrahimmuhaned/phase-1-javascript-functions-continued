function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  };
  
  function wrapAdjective(flair = '*') {
    return function(adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  console.log(saturdayFun());
  console.log(saturdayFun('play soccer')); 
  console.log(mondayWork()); 
  console.log(mondayWork('read a book'));
  const highlightStar = wrapAdjective('*');
  console.log(highlightStar('awesome'));
  const highlightPipe = wrapAdjective('||');
  console.log(highlightPipe('fantastic')); 