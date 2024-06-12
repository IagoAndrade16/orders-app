import { goto } from "$app/navigation";

export class Engine {
  static back() {
    window.history.back();
  }

	static async navigateTo(page: string) {
		goto(page);
	}

	static reload() {
		window.location.reload();
	}
}