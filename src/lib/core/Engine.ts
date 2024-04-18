
export class Engine {
  static back() {
    window.history.back();
  }

	static async navigateTo(page: string) {
		console.log('Engine.navigateTo: ', page);

		const tParam = `t=${+new Date()}`;
		const route = page.includes('?') ? `${page}&${tParam}` : `${page}?${tParam}`;

		window.location.href = route;
	}
}