/* eslint-disable @typescript-eslint/no-explicit-any */
export class Validations {
  static isBrazilianPhone(phone: string): boolean {
    return /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(phone);
  }

  static isValidZipCode(zipCode: string): boolean {
    return /^\d{5}-\d{3}$/.test(zipCode);
  }

  static async validateYupSchema(schema: any, data: object): Promise<object | null> {
		try {
			// `abortEarly: false` to get all the errors
			await schema.validate(data, { abortEarly: false });
			// alert(JSON.stringify(values, null, 2));
			return null;
		} catch (err: any) {
			return err.inner.reduce((acc: any, err: any) => {
				return { ...acc, [err.path]: err.message };
			}, {});
		}
  }
}