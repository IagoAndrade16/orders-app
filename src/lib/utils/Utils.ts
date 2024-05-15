export class Utils {
  static formatNumberToBrl(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }

  static isSameDay(date1: Date, date2: Date): boolean {
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
  }

  static formatBrlDateToUsDate(date: string): string {
    return date.split(' ')[0].split('/').reverse().join('-');
  }

  static getDateFromFullDate(date: string): string {
    return date.split(' ')[0];
  }
}