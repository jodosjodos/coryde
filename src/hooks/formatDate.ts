export const convertTime=(time:string)=>{
  
    const date = new Date(time);
    
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true
    }).format(date);
    
    return formattedDate
  }