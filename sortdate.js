const convertDate = (date) => {
    const [month, day, year] = date.split('/');
    return `${year}${month}${day}`
  }
  
  convertDate('12/31/2014')
  