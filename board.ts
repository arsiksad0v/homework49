const drawBoard = (): void => {
    const size = 8; 
    const white = "██";
    const black = "  ";
  
    for (let row = 0; row < size; row++) {
      let line = "";
      for (let col = 0; col < size; col++) {
        line += (row + col) % 2 === 0 ? white : black;
      }
      console.log(line);
    }
  };
  
  drawBoard();