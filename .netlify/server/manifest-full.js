export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["carousel/carousel1.jpeg","carousel/carousel2.jpeg","carousel/carousel3.jpeg","favicon.jpeg","icons/box-arrow.svg","icons/cart.svg","imagem-pizza1.jpeg","imagem-pizza2.jpeg","robots.txt"]),
	mimeTypes: {".jpeg":"image/jpeg",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.COBB11fd.js","app":"_app/immutable/entry/app.enbB8saP.js","imports":["_app/immutable/entry/start.COBB11fd.js","_app/immutable/chunks/entry.Ckz1BFuy.js","_app/immutable/chunks/scheduler.3MUWL8w9.js","_app/immutable/entry/app.enbB8saP.js","_app/immutable/chunks/scheduler.3MUWL8w9.js","_app/immutable/chunks/index.Zbaz7vx_.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/criar-conta",
				pattern: /^\/criar-conta\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/gerencial/pedidos",
				pattern: /^\/gerencial\/pedidos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/gerencial/pedidos/detalhes",
				pattern: /^\/gerencial\/pedidos\/detalhes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/gerencial/produtos",
				pattern: /^\/gerencial\/produtos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/gerencial/produtos/adicionar",
				pattern: /^\/gerencial\/produtos\/adicionar\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/gerencial/produtos/editar",
				pattern: /^\/gerencial\/produtos\/editar\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/gerencial/produtos/relatorio",
				pattern: /^\/gerencial\/produtos\/relatorio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/pedidos",
				pattern: /^\/pedidos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/pedidos/checkout",
				pattern: /^\/pedidos\/checkout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/pedidos/endereco",
				pattern: /^\/pedidos\/endereco\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/pedidos/finalizado",
				pattern: /^\/pedidos\/finalizado\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/produtos",
				pattern: /^\/produtos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/produto",
				pattern: /^\/produto\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
