const frequency = (article) => {
    let frequence = 0;
    article.split(' ').forEach((word) => {
      if (word === 'AppZone')
      frequence++;
    });
    return frequence;
  }
  
  frequency('AppZone, is a company that AppZone s');
  