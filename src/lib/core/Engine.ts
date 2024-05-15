
export class Engine {
  static back() {
    window.history.back();
  }

	static async navigateTo(page: string) {
		const route = page;
		window.location.href = `${route}?v=${new Date().getTime()}`;
	}

	static reload() {
		window.location.reload();
	}
}