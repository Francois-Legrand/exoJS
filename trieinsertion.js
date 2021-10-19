let result = (tab) => {
    let longueur = tab.length;       
    let val;
    let i;
    let j;             
    
    for(i = 1; i < longueur; i++) {
      val = tab[i]
      j = i - 1
      while (j >= 0 && tab[j] > val) {
        tab[j+1] = tab[j]
        j--
      }
      tab[j+1] = val
    }
    return tab.join("-")
  }
 let tab = [5, 8, 11, 6, 1, 9, 3];
  console.log(result(tab)); 