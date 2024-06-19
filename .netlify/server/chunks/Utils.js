class Utils {
  static formatNumberToBrl(value) {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
  }
  static isSameDay(date1, date2) {
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
  }
  static formatBrlDateToUsDate(date) {
    return date.split(" ")[0].split("/").reverse().join("-");
  }
  static getDateFromFullDate(date) {
    return date.split(" ")[0];
  }
}
export {
  Utils as U
};
