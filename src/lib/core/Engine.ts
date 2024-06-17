import { goto } from "$app/navigation";

export class Engine {
  static back() {
    window.history.back();
  }

	static async navigateTo(page: string) {
		await goto(page, { replaceState: true});
		location.reload();
	}

	static reload() {
		window.location.reload();
	}
}