
export class Engine {
  static back() {
    window.history.back();
  }

	static async navigateTo(page: string) {
		const route = page;
		window.location.href = `${route}`;
	}

	static reload() {
		window.location.reload();
	}
}