export class Masks {
  static braziliamPhoneNumber(value: string): string {
    if(value.length > 15) return value.slice(0, 15);
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(\d{4})(\d)/, '$1$2');
  }

  static zipCode(value: string): string {
    if(value.length > 9) return value.slice(0, 9);
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(\d{3})(\d)/, '$1$2');
  }
}