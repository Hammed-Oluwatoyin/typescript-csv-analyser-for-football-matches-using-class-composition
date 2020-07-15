export const convertDateStringToDate = (dateString: string) => {

 const dateParts = dateString.split('/')
 .map((value : string)  : number => {
     return parseInt(value);
 })

 return new Date( dateParts[2], dateParts[1]-1, dateParts[0]) ;

}