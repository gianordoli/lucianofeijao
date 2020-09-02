import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, c as claim_element, b as children, f as claim_space, g as claim_text, h as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as set_data_dev, o as noop, p as validate_each_argument, q as empty, r as transition_in, u as transition_out, w as group_outros, x as check_outros, y as destroy_each, z as assign, A as create_component, B as claim_component, C as mount_component, D as destroy_component, E as get_spread_update, F as get_spread_object, G as query_selector_all } from './client.fd606de2.js';

var about = [
	{
		type: "text",
		value: "Luciano Feijão is an educator, artist and illustrator born in Vitória, Brazil. His latest exhibits examine racial-ethnic themes, portraying the black population in opposition to the processes of stigmatization and annihilation it has been subjected to."
	},
	{
		type: "text",
		value: "His work is characterized by its gestural expressiveness, the density of its shapes and the use of alternative drawing tools."
	},
	{
		type: "text",
		value: "His recent field of research, titled Antianatomy, explores the racist biases in pseudo-scientific policies."
	},
	{
		type: "text-pt",
		value: "Luciano Feijão nasceu em Vitória, no Espírito Santo, e é professor, artista visual e ilustrador. Suas três últimas exposições foram dedicadas aos temas étnico-raciais, evidenciando a população negra em contraponto à estigmatização e às formas de aniquilamento.  Seu trabalho tem como principal característica a forte expressividade gestual, a densidade das formas e as experiências com ferramentas alternativas. Sua pesquisa atual, intitulada Antianatomia, pretende discutir, pela via do desenho, as práticas racistas aliadas a políticas cientificistas."
	},
	{
		type: "image",
		value: {
			slug: "luciano-feijao.jpg",
			caption: "",
			src: "images/luciano-feijao.jpg"
		}
	}
];
var work = [
	{
		type: "image",
		value: {
			slug: "torcoes-1.jpg",
			caption: "Torções, 2020",
			src: "images/torcoes-1-1050.jpg",
			srcset: "images/torcoes-1-180.jpg 180w, images/torcoes-1-180_x2.jpg 360w,images/torcoes-1-300.jpg 300w, images/torcoes-1-300_x2.jpg 600w,images/torcoes-1-460.jpg 460w, images/torcoes-1-460_x2.jpg 920w,images/torcoes-1-720.jpg 720w, images/torcoes-1-720_x2.jpg 1440w,images/torcoes-1-1050.jpg 1050w, images/torcoes-1-1050_x2.jpg 2100w,images/torcoes-1-1440.jpg 1440w, images/torcoes-1-1440_x2.jpg 2880w,images/torcoes-1-2000.jpg 2000w, images/torcoes-1-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "torcoes-2.jpg",
			caption: "Torções, 2020",
			src: "images/torcoes-2-1050.jpg",
			srcset: "images/torcoes-2-180.jpg 180w, images/torcoes-2-180_x2.jpg 360w,images/torcoes-2-300.jpg 300w, images/torcoes-2-300_x2.jpg 600w,images/torcoes-2-460.jpg 460w, images/torcoes-2-460_x2.jpg 920w,images/torcoes-2-720.jpg 720w, images/torcoes-2-720_x2.jpg 1440w,images/torcoes-2-1050.jpg 1050w, images/torcoes-2-1050_x2.jpg 2100w,images/torcoes-2-1440.jpg 1440w, images/torcoes-2-1440_x2.jpg 2880w,images/torcoes-2-2000.jpg 2000w, images/torcoes-2-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "torcoes-3.jpg",
			caption: "Torções, 2020",
			src: "images/torcoes-3-1050.jpg",
			srcset: "images/torcoes-3-180.jpg 180w, images/torcoes-3-180_x2.jpg 360w,images/torcoes-3-300.jpg 300w, images/torcoes-3-300_x2.jpg 600w,images/torcoes-3-460.jpg 460w, images/torcoes-3-460_x2.jpg 920w,images/torcoes-3-720.jpg 720w, images/torcoes-3-720_x2.jpg 1440w,images/torcoes-3-1050.jpg 1050w, images/torcoes-3-1050_x2.jpg 2100w,images/torcoes-3-1440.jpg 1440w, images/torcoes-3-1440_x2.jpg 2880w,images/torcoes-3-2000.jpg 2000w, images/torcoes-3-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "torcoes-7.jpg",
			caption: "Torções, 2020",
			src: "images/torcoes-7-1050.jpg",
			srcset: "images/torcoes-7-180.jpg 180w, images/torcoes-7-180_x2.jpg 360w,images/torcoes-7-300.jpg 300w, images/torcoes-7-300_x2.jpg 600w,images/torcoes-7-460.jpg 460w, images/torcoes-7-460_x2.jpg 920w,images/torcoes-7-720.jpg 720w, images/torcoes-7-720_x2.jpg 1440w,images/torcoes-7-1050.jpg 1050w, images/torcoes-7-1050_x2.jpg 2100w,images/torcoes-7-1440.jpg 1440w, images/torcoes-7-1440_x2.jpg 2880w,images/torcoes-7-2000.jpg 2000w, images/torcoes-7-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "torcoes-9.jpg",
			caption: "Torções, 2020",
			src: "images/torcoes-9-1050.jpg",
			srcset: "images/torcoes-9-180.jpg 180w, images/torcoes-9-180_x2.jpg 360w,images/torcoes-9-300.jpg 300w, images/torcoes-9-300_x2.jpg 600w,images/torcoes-9-460.jpg 460w, images/torcoes-9-460_x2.jpg 920w,images/torcoes-9-720.jpg 720w, images/torcoes-9-720_x2.jpg 1440w,images/torcoes-9-1050.jpg 1050w, images/torcoes-9-1050_x2.jpg 2100w,images/torcoes-9-1440.jpg 1440w, images/torcoes-9-1440_x2.jpg 2880w,images/torcoes-9-2000.jpg 2000w, images/torcoes-9-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "torcoes-10.jpg",
			caption: "Torções, 2020",
			src: "images/torcoes-10-1050.jpg",
			srcset: "images/torcoes-10-180.jpg 180w, images/torcoes-10-180_x2.jpg 360w,images/torcoes-10-300.jpg 300w, images/torcoes-10-300_x2.jpg 600w,images/torcoes-10-460.jpg 460w, images/torcoes-10-460_x2.jpg 920w,images/torcoes-10-720.jpg 720w, images/torcoes-10-720_x2.jpg 1440w,images/torcoes-10-1050.jpg 1050w, images/torcoes-10-1050_x2.jpg 2100w,images/torcoes-10-1440.jpg 1440w, images/torcoes-10-1440_x2.jpg 2880w,images/torcoes-10-2000.jpg 2000w, images/torcoes-10-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "torcoes-11.jpg",
			caption: "Torções, 2020",
			src: "images/torcoes-11-1050.jpg",
			srcset: "images/torcoes-11-180.jpg 180w, images/torcoes-11-180_x2.jpg 360w,images/torcoes-11-300.jpg 300w, images/torcoes-11-300_x2.jpg 600w,images/torcoes-11-460.jpg 460w, images/torcoes-11-460_x2.jpg 920w,images/torcoes-11-720.jpg 720w, images/torcoes-11-720_x2.jpg 1440w,images/torcoes-11-1050.jpg 1050w, images/torcoes-11-1050_x2.jpg 2100w,images/torcoes-11-1440.jpg 1440w, images/torcoes-11-1440_x2.jpg 2880w,images/torcoes-11-2000.jpg 2000w, images/torcoes-11-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "a-morte-de-ivan-illitch-1.jpg",
			caption: "Illustration for the book “The Death of Ivan Illitch,” by Leo Tolstoy, published by Antofágica, 2020",
			src: "images/a-morte-de-ivan-illitch-1-1050.jpg",
			srcset: "images/a-morte-de-ivan-illitch-1-180.jpg 180w, images/a-morte-de-ivan-illitch-1-180_x2.jpg 360w,images/a-morte-de-ivan-illitch-1-300.jpg 300w, images/a-morte-de-ivan-illitch-1-300_x2.jpg 600w,images/a-morte-de-ivan-illitch-1-460.jpg 460w, images/a-morte-de-ivan-illitch-1-460_x2.jpg 920w,images/a-morte-de-ivan-illitch-1-720.jpg 720w, images/a-morte-de-ivan-illitch-1-720_x2.jpg 1440w,images/a-morte-de-ivan-illitch-1-1050.jpg 1050w, images/a-morte-de-ivan-illitch-1-1050_x2.jpg 2100w,images/a-morte-de-ivan-illitch-1-1440.jpg 1440w, images/a-morte-de-ivan-illitch-1-1440_x2.jpg 2880w,images/a-morte-de-ivan-illitch-1-2000.jpg 2000w, images/a-morte-de-ivan-illitch-1-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "a-morte-de-ivan-illitch-4.jpg",
			caption: "Illustration for the book “The Death of Ivan Illitch,” by Leo Tolstoy, published by Antofágica, 2020",
			src: "images/a-morte-de-ivan-illitch-4-1050.jpg",
			srcset: "images/a-morte-de-ivan-illitch-4-180.jpg 180w, images/a-morte-de-ivan-illitch-4-180_x2.jpg 360w,images/a-morte-de-ivan-illitch-4-300.jpg 300w, images/a-morte-de-ivan-illitch-4-300_x2.jpg 600w,images/a-morte-de-ivan-illitch-4-460.jpg 460w, images/a-morte-de-ivan-illitch-4-460_x2.jpg 920w,images/a-morte-de-ivan-illitch-4-720.jpg 720w, images/a-morte-de-ivan-illitch-4-720_x2.jpg 1440w,images/a-morte-de-ivan-illitch-4-1050.jpg 1050w, images/a-morte-de-ivan-illitch-4-1050_x2.jpg 2100w,images/a-morte-de-ivan-illitch-4-1440.jpg 1440w, images/a-morte-de-ivan-illitch-4-1440_x2.jpg 2880w,images/a-morte-de-ivan-illitch-4-2000.jpg 2000w, images/a-morte-de-ivan-illitch-4-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "a-morte-de-ivan-illitch-6.jpg",
			caption: "Illustration for the book “The Death of Ivan Illitch,” by Leo Tolstoy, published by Antofágica, 2020",
			src: "images/a-morte-de-ivan-illitch-6-1050.jpg",
			srcset: "images/a-morte-de-ivan-illitch-6-180.jpg 180w, images/a-morte-de-ivan-illitch-6-180_x2.jpg 360w,images/a-morte-de-ivan-illitch-6-300.jpg 300w, images/a-morte-de-ivan-illitch-6-300_x2.jpg 600w,images/a-morte-de-ivan-illitch-6-460.jpg 460w, images/a-morte-de-ivan-illitch-6-460_x2.jpg 920w,images/a-morte-de-ivan-illitch-6-720.jpg 720w, images/a-morte-de-ivan-illitch-6-720_x2.jpg 1440w,images/a-morte-de-ivan-illitch-6-1050.jpg 1050w, images/a-morte-de-ivan-illitch-6-1050_x2.jpg 2100w,images/a-morte-de-ivan-illitch-6-1440.jpg 1440w, images/a-morte-de-ivan-illitch-6-1440_x2.jpg 2880w,images/a-morte-de-ivan-illitch-6-2000.jpg 2000w, images/a-morte-de-ivan-illitch-6-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "amas-1.jpg",
			caption: "Amas, 2019",
			src: "images/amas-1-1050.jpg",
			srcset: "images/amas-1-180.jpg 180w, images/amas-1-180_x2.jpg 360w,images/amas-1-300.jpg 300w, images/amas-1-300_x2.jpg 600w,images/amas-1-460.jpg 460w, images/amas-1-460_x2.jpg 920w,images/amas-1-720.jpg 720w, images/amas-1-720_x2.jpg 1440w,images/amas-1-1050.jpg 1050w, images/amas-1-1050_x2.jpg 2100w,images/amas-1-1440.jpg 1440w, images/amas-1-1440_x2.jpg 2880w,images/amas-1-2000.jpg 2000w, images/amas-1-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "amas-2.jpg",
			caption: "Amas, 2019",
			src: "images/amas-2-1050.jpg",
			srcset: "images/amas-2-180.jpg 180w, images/amas-2-180_x2.jpg 360w,images/amas-2-300.jpg 300w, images/amas-2-300_x2.jpg 600w,images/amas-2-460.jpg 460w, images/amas-2-460_x2.jpg 920w,images/amas-2-720.jpg 720w, images/amas-2-720_x2.jpg 1440w,images/amas-2-1050.jpg 1050w, images/amas-2-1050_x2.jpg 2100w,images/amas-2-1440.jpg 1440w, images/amas-2-1440_x2.jpg 2880w,images/amas-2-2000.jpg 2000w, images/amas-2-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "amas-3.jpg",
			caption: "Amas, 2019",
			src: "images/amas-3-1050.jpg",
			srcset: "images/amas-3-180.jpg 180w, images/amas-3-180_x2.jpg 360w,images/amas-3-300.jpg 300w, images/amas-3-300_x2.jpg 600w,images/amas-3-460.jpg 460w, images/amas-3-460_x2.jpg 920w,images/amas-3-720.jpg 720w, images/amas-3-720_x2.jpg 1440w,images/amas-3-1050.jpg 1050w, images/amas-3-1050_x2.jpg 2100w,images/amas-3-1440.jpg 1440w, images/amas-3-1440_x2.jpg 2880w,images/amas-3-2000.jpg 2000w, images/amas-3-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "amas-5.jpg",
			caption: "Amas, 2019",
			src: "images/amas-5-1050.jpg",
			srcset: "images/amas-5-180.jpg 180w, images/amas-5-180_x2.jpg 360w,images/amas-5-300.jpg 300w, images/amas-5-300_x2.jpg 600w,images/amas-5-460.jpg 460w, images/amas-5-460_x2.jpg 920w,images/amas-5-720.jpg 720w, images/amas-5-720_x2.jpg 1440w,images/amas-5-1050.jpg 1050w, images/amas-5-1050_x2.jpg 2100w,images/amas-5-1440.jpg 1440w, images/amas-5-1440_x2.jpg 2880w,images/amas-5-2000.jpg 2000w, images/amas-5-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "amas-9.jpg",
			caption: "Amas, 2019",
			src: "images/amas-9-1050.jpg",
			srcset: "images/amas-9-180.jpg 180w, images/amas-9-180_x2.jpg 360w,images/amas-9-300.jpg 300w, images/amas-9-300_x2.jpg 600w,images/amas-9-460.jpg 460w, images/amas-9-460_x2.jpg 920w,images/amas-9-720.jpg 720w, images/amas-9-720_x2.jpg 1440w,images/amas-9-1050.jpg 1050w, images/amas-9-1050_x2.jpg 2100w,images/amas-9-1440.jpg 1440w, images/amas-9-1440_x2.jpg 2880w,images/amas-9-2000.jpg 2000w, images/amas-9-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "amas-11.jpg",
			caption: "Amas, 2019",
			src: "images/amas-11-1050.jpg",
			srcset: "images/amas-11-180.jpg 180w, images/amas-11-180_x2.jpg 360w,images/amas-11-300.jpg 300w, images/amas-11-300_x2.jpg 600w,images/amas-11-460.jpg 460w, images/amas-11-460_x2.jpg 920w,images/amas-11-720.jpg 720w, images/amas-11-720_x2.jpg 1440w,images/amas-11-1050.jpg 1050w, images/amas-11-1050_x2.jpg 2100w,images/amas-11-1440.jpg 1440w, images/amas-11-1440_x2.jpg 2880w,images/amas-11-2000.jpg 2000w, images/amas-11-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "antianatomia-2.jpg",
			caption: "Antianatomia, 2019",
			src: "images/antianatomia-2-1050.jpg",
			srcset: "images/antianatomia-2-180.jpg 180w, images/antianatomia-2-180_x2.jpg 360w,images/antianatomia-2-300.jpg 300w, images/antianatomia-2-300_x2.jpg 600w,images/antianatomia-2-460.jpg 460w, images/antianatomia-2-460_x2.jpg 920w,images/antianatomia-2-720.jpg 720w, images/antianatomia-2-720_x2.jpg 1440w,images/antianatomia-2-1050.jpg 1050w, images/antianatomia-2-1050_x2.jpg 2100w,images/antianatomia-2-1440.jpg 1440w, images/antianatomia-2-1440_x2.jpg 2880w,images/antianatomia-2-2000.jpg 2000w, images/antianatomia-2-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "antianatomia-12.jpg",
			caption: "Antianatomia, 2019",
			src: "images/antianatomia-12-1050.jpg",
			srcset: "images/antianatomia-12-180.jpg 180w, images/antianatomia-12-180_x2.jpg 360w,images/antianatomia-12-300.jpg 300w, images/antianatomia-12-300_x2.jpg 600w,images/antianatomia-12-460.jpg 460w, images/antianatomia-12-460_x2.jpg 920w,images/antianatomia-12-720.jpg 720w, images/antianatomia-12-720_x2.jpg 1440w,images/antianatomia-12-1050.jpg 1050w, images/antianatomia-12-1050_x2.jpg 2100w,images/antianatomia-12-1440.jpg 1440w, images/antianatomia-12-1440_x2.jpg 2880w,images/antianatomia-12-2000.jpg 2000w, images/antianatomia-12-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "antianatomia-14.jpg",
			caption: "Antianatomia, 2019",
			src: "images/antianatomia-14-1050.jpg",
			srcset: "images/antianatomia-14-180.jpg 180w, images/antianatomia-14-180_x2.jpg 360w,images/antianatomia-14-300.jpg 300w, images/antianatomia-14-300_x2.jpg 600w,images/antianatomia-14-460.jpg 460w, images/antianatomia-14-460_x2.jpg 920w,images/antianatomia-14-720.jpg 720w, images/antianatomia-14-720_x2.jpg 1440w,images/antianatomia-14-1050.jpg 1050w, images/antianatomia-14-1050_x2.jpg 2100w,images/antianatomia-14-1440.jpg 1440w, images/antianatomia-14-1440_x2.jpg 2880w,images/antianatomia-14-2000.jpg 2000w, images/antianatomia-14-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "diario-do-hospicio-1.jpg",
			caption: "Illustration for the book “Diário do hospício,” by Lima Barreto, published by Borda Editorial, 2020",
			src: "images/diario-do-hospicio-1-1050.jpg",
			srcset: "images/diario-do-hospicio-1-180.jpg 180w, images/diario-do-hospicio-1-180_x2.jpg 360w,images/diario-do-hospicio-1-300.jpg 300w, images/diario-do-hospicio-1-300_x2.jpg 600w,images/diario-do-hospicio-1-460.jpg 460w, images/diario-do-hospicio-1-460_x2.jpg 920w,images/diario-do-hospicio-1-720.jpg 720w, images/diario-do-hospicio-1-720_x2.jpg 1440w,images/diario-do-hospicio-1-1050.jpg 1050w, images/diario-do-hospicio-1-1050_x2.jpg 2100w,images/diario-do-hospicio-1-1440.jpg 1440w, images/diario-do-hospicio-1-1440_x2.jpg 2880w,images/diario-do-hospicio-1-2000.jpg 2000w, images/diario-do-hospicio-1-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "diario-do-hospicio-2.jpg",
			caption: "Illustration for the book “Diário do hospício,” by Lima Barreto, published by Borda Editorial, 2020",
			src: "images/diario-do-hospicio-2-1050.jpg",
			srcset: "images/diario-do-hospicio-2-180.jpg 180w, images/diario-do-hospicio-2-180_x2.jpg 360w,images/diario-do-hospicio-2-300.jpg 300w, images/diario-do-hospicio-2-300_x2.jpg 600w,images/diario-do-hospicio-2-460.jpg 460w, images/diario-do-hospicio-2-460_x2.jpg 920w,images/diario-do-hospicio-2-720.jpg 720w, images/diario-do-hospicio-2-720_x2.jpg 1440w,images/diario-do-hospicio-2-1050.jpg 1050w, images/diario-do-hospicio-2-1050_x2.jpg 2100w,images/diario-do-hospicio-2-1440.jpg 1440w, images/diario-do-hospicio-2-1440_x2.jpg 2880w,images/diario-do-hospicio-2-2000.jpg 2000w, images/diario-do-hospicio-2-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "diario-do-hospicio-3.jpg",
			caption: "Illustration for the book “Diário do hospício,” by Lima Barreto, published by Borda Editorial, 2020",
			src: "images/diario-do-hospicio-3-1050.jpg",
			srcset: "images/diario-do-hospicio-3-180.jpg 180w, images/diario-do-hospicio-3-180_x2.jpg 360w,images/diario-do-hospicio-3-300.jpg 300w, images/diario-do-hospicio-3-300_x2.jpg 600w,images/diario-do-hospicio-3-460.jpg 460w, images/diario-do-hospicio-3-460_x2.jpg 920w,images/diario-do-hospicio-3-720.jpg 720w, images/diario-do-hospicio-3-720_x2.jpg 1440w,images/diario-do-hospicio-3-1050.jpg 1050w, images/diario-do-hospicio-3-1050_x2.jpg 2100w,images/diario-do-hospicio-3-1440.jpg 1440w, images/diario-do-hospicio-3-1440_x2.jpg 2880w,images/diario-do-hospicio-3-2000.jpg 2000w, images/diario-do-hospicio-3-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "diario-do-hospicio-4.jpg",
			caption: "Illustration for the book “Diário do hospício,” by Lima Barreto, published by Borda Editorial, 2020",
			src: "images/diario-do-hospicio-4-1050.jpg",
			srcset: "images/diario-do-hospicio-4-180.jpg 180w, images/diario-do-hospicio-4-180_x2.jpg 360w,images/diario-do-hospicio-4-300.jpg 300w, images/diario-do-hospicio-4-300_x2.jpg 600w,images/diario-do-hospicio-4-460.jpg 460w, images/diario-do-hospicio-4-460_x2.jpg 920w,images/diario-do-hospicio-4-720.jpg 720w, images/diario-do-hospicio-4-720_x2.jpg 1440w,images/diario-do-hospicio-4-1050.jpg 1050w, images/diario-do-hospicio-4-1050_x2.jpg 2100w,images/diario-do-hospicio-4-1440.jpg 1440w, images/diario-do-hospicio-4-1440_x2.jpg 2880w,images/diario-do-hospicio-4-2000.jpg 2000w, images/diario-do-hospicio-4-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "diario-do-hospicio-5.jpg",
			caption: "Illustration for the book “Diário do hospício,” by Lima Barreto, published by Borda Editorial, 2020",
			src: "images/diario-do-hospicio-5-1050.jpg",
			srcset: "images/diario-do-hospicio-5-180.jpg 180w, images/diario-do-hospicio-5-180_x2.jpg 360w,images/diario-do-hospicio-5-300.jpg 300w, images/diario-do-hospicio-5-300_x2.jpg 600w,images/diario-do-hospicio-5-460.jpg 460w, images/diario-do-hospicio-5-460_x2.jpg 920w,images/diario-do-hospicio-5-720.jpg 720w, images/diario-do-hospicio-5-720_x2.jpg 1440w,images/diario-do-hospicio-5-1050.jpg 1050w, images/diario-do-hospicio-5-1050_x2.jpg 2100w,images/diario-do-hospicio-5-1440.jpg 1440w, images/diario-do-hospicio-5-1440_x2.jpg 2880w,images/diario-do-hospicio-5-2000.jpg 2000w, images/diario-do-hospicio-5-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "diario-do-hospicio-6.jpg",
			caption: "Illustration for the book “Diário do hospício,” by Lima Barreto, published by Borda Editorial, 2020",
			src: "images/diario-do-hospicio-6-1050.jpg",
			srcset: "images/diario-do-hospicio-6-180.jpg 180w, images/diario-do-hospicio-6-180_x2.jpg 360w,images/diario-do-hospicio-6-300.jpg 300w, images/diario-do-hospicio-6-300_x2.jpg 600w,images/diario-do-hospicio-6-460.jpg 460w, images/diario-do-hospicio-6-460_x2.jpg 920w,images/diario-do-hospicio-6-720.jpg 720w, images/diario-do-hospicio-6-720_x2.jpg 1440w,images/diario-do-hospicio-6-1050.jpg 1050w, images/diario-do-hospicio-6-1050_x2.jpg 2100w,images/diario-do-hospicio-6-1440.jpg 1440w, images/diario-do-hospicio-6-1440_x2.jpg 2880w,images/diario-do-hospicio-6-2000.jpg 2000w, images/diario-do-hospicio-6-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "diario-do-hospicio-9.jpg",
			caption: "Illustration for the book “Diário do hospício,” by Lima Barreto, published by Borda Editorial, 2020",
			src: "images/diario-do-hospicio-9-1050.jpg",
			srcset: "images/diario-do-hospicio-9-180.jpg 180w, images/diario-do-hospicio-9-180_x2.jpg 360w,images/diario-do-hospicio-9-300.jpg 300w, images/diario-do-hospicio-9-300_x2.jpg 600w,images/diario-do-hospicio-9-460.jpg 460w, images/diario-do-hospicio-9-460_x2.jpg 920w,images/diario-do-hospicio-9-720.jpg 720w, images/diario-do-hospicio-9-720_x2.jpg 1440w,images/diario-do-hospicio-9-1050.jpg 1050w, images/diario-do-hospicio-9-1050_x2.jpg 2100w,images/diario-do-hospicio-9-1440.jpg 1440w, images/diario-do-hospicio-9-1440_x2.jpg 2880w,images/diario-do-hospicio-9-2000.jpg 2000w, images/diario-do-hospicio-9-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "folha-de-sao-paulo-1.jpg",
			caption: "Illustration for the newspaper Folha de São Paulo, 2010",
			"caption-pt": "Ilustração para Folha de São Paulo, 2010",
			src: "images/folha-de-sao-paulo-1-1050.jpg",
			srcset: "images/folha-de-sao-paulo-1-180.jpg 180w, images/folha-de-sao-paulo-1-180_x2.jpg 360w,images/folha-de-sao-paulo-1-300.jpg 300w, images/folha-de-sao-paulo-1-300_x2.jpg 600w,images/folha-de-sao-paulo-1-460.jpg 460w, images/folha-de-sao-paulo-1-460_x2.jpg 920w,images/folha-de-sao-paulo-1-720.jpg 720w, images/folha-de-sao-paulo-1-720_x2.jpg 1440w,images/folha-de-sao-paulo-1-1050.jpg 1050w, images/folha-de-sao-paulo-1-1050_x2.jpg 2100w,images/folha-de-sao-paulo-1-1440.jpg 1440w, images/folha-de-sao-paulo-1-1440_x2.jpg 2880w,images/folha-de-sao-paulo-1-2000.jpg 2000w, images/folha-de-sao-paulo-1-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "outros-projetos-4.jpg",
			caption: "Cover for the book “Canções de um Sonhador Morto & Grimscribe,” by Thomas Ligotti, published by Companhia das Letras, 2018. Not published",
			"caption-pt": "Capa para o livro “Canções de um Sonhador Morto & Grimscribe”, do escritor americano de terror Thomas Ligotti, publicado pela editora Companhia das Letras, 2018. Não publicado",
			src: "images/outros-projetos-4-1050.jpg",
			srcset: "images/outros-projetos-4-180.jpg 180w, images/outros-projetos-4-180_x2.jpg 360w,images/outros-projetos-4-300.jpg 300w, images/outros-projetos-4-300_x2.jpg 600w,images/outros-projetos-4-460.jpg 460w, images/outros-projetos-4-460_x2.jpg 920w,images/outros-projetos-4-720.jpg 720w, images/outros-projetos-4-720_x2.jpg 1440w,images/outros-projetos-4-1050.jpg 1050w, images/outros-projetos-4-1050_x2.jpg 2100w,images/outros-projetos-4-1440.jpg 1440w, images/outros-projetos-4-1440_x2.jpg 2880w,images/outros-projetos-4-2000.jpg 2000w, images/outros-projetos-4-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "outros-projetos-5.jpg",
			caption: "Torções, 2012",
			src: "images/outros-projetos-5-1050.jpg",
			srcset: "images/outros-projetos-5-180.jpg 180w, images/outros-projetos-5-180_x2.jpg 360w,images/outros-projetos-5-300.jpg 300w, images/outros-projetos-5-300_x2.jpg 600w,images/outros-projetos-5-460.jpg 460w, images/outros-projetos-5-460_x2.jpg 920w,images/outros-projetos-5-720.jpg 720w, images/outros-projetos-5-720_x2.jpg 1440w,images/outros-projetos-5-1050.jpg 1050w, images/outros-projetos-5-1050_x2.jpg 2100w,images/outros-projetos-5-1440.jpg 1440w, images/outros-projetos-5-1440_x2.jpg 2880w,images/outros-projetos-5-2000.jpg 2000w, images/outros-projetos-5-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "outros-projetos-6.jpg",
			caption: "Deserto Gráfico, 2012",
			"caption-pt": "Exposição Deserto Gráfico, Galeria Homero Massena, Vitória, 2012",
			src: "images/outros-projetos-6-1050.jpg",
			srcset: "images/outros-projetos-6-180.jpg 180w, images/outros-projetos-6-180_x2.jpg 360w,images/outros-projetos-6-300.jpg 300w, images/outros-projetos-6-300_x2.jpg 600w,images/outros-projetos-6-460.jpg 460w, images/outros-projetos-6-460_x2.jpg 920w,images/outros-projetos-6-720.jpg 720w, images/outros-projetos-6-720_x2.jpg 1440w,images/outros-projetos-6-1050.jpg 1050w, images/outros-projetos-6-1050_x2.jpg 2100w,images/outros-projetos-6-1440.jpg 1440w, images/outros-projetos-6-1440_x2.jpg 2880w,images/outros-projetos-6-2000.jpg 2000w, images/outros-projetos-6-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "outros-projetos-10.jpg",
			caption: "Illustration for the book “O Orangotango Marxista”, by Marcelo Rubens Paiva, published by Companhia das Letras, 2018",
			"caption-pt": "Ilustração para a capa do livro “O Orangotango Marxista”, de Marcelo Rubens Paiva, publicado pela editora Companhia das Letras, 2018",
			src: "images/outros-projetos-10-1050.jpg",
			srcset: "images/outros-projetos-10-180.jpg 180w, images/outros-projetos-10-180_x2.jpg 360w,images/outros-projetos-10-300.jpg 300w, images/outros-projetos-10-300_x2.jpg 600w,images/outros-projetos-10-460.jpg 460w, images/outros-projetos-10-460_x2.jpg 920w,images/outros-projetos-10-720.jpg 720w, images/outros-projetos-10-720_x2.jpg 1440w,images/outros-projetos-10-1050.jpg 1050w, images/outros-projetos-10-1050_x2.jpg 2100w,images/outros-projetos-10-1440.jpg 1440w, images/outros-projetos-10-1440_x2.jpg 2880w,images/outros-projetos-10-2000.jpg 2000w, images/outros-projetos-10-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "outros-projetos-13.jpg",
			caption: "Illustration for the movie poster of “A Mulher e o Rio,” directed by Bernard Lessa, 2018",
			"caption-pt": "Ilustração para o cartaz do filme “A Mulher e o Rio”, dirigido por Bernard Lessa, 2018",
			src: "images/outros-projetos-13-1050.jpg",
			srcset: "images/outros-projetos-13-180.jpg 180w, images/outros-projetos-13-180_x2.jpg 360w,images/outros-projetos-13-300.jpg 300w, images/outros-projetos-13-300_x2.jpg 600w,images/outros-projetos-13-460.jpg 460w, images/outros-projetos-13-460_x2.jpg 920w,images/outros-projetos-13-720.jpg 720w, images/outros-projetos-13-720_x2.jpg 1440w,images/outros-projetos-13-1050.jpg 1050w, images/outros-projetos-13-1050_x2.jpg 2100w,images/outros-projetos-13-1440.jpg 1440w, images/outros-projetos-13-1440_x2.jpg 2880w,images/outros-projetos-13-2000.jpg 2000w, images/outros-projetos-13-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "outros-projetos-16.jpg",
			caption: "Black man’s face, personal project, 2018",
			"caption-pt": "Rosto de homem negro, projeto pessoal, 2018",
			src: "images/outros-projetos-16-1050.jpg",
			srcset: "images/outros-projetos-16-180.jpg 180w, images/outros-projetos-16-180_x2.jpg 360w,images/outros-projetos-16-300.jpg 300w, images/outros-projetos-16-300_x2.jpg 600w,images/outros-projetos-16-460.jpg 460w, images/outros-projetos-16-460_x2.jpg 920w,images/outros-projetos-16-720.jpg 720w, images/outros-projetos-16-720_x2.jpg 1440w,images/outros-projetos-16-1050.jpg 1050w, images/outros-projetos-16-1050_x2.jpg 2100w,images/outros-projetos-16-1440.jpg 1440w, images/outros-projetos-16-1440_x2.jpg 2880w,images/outros-projetos-16-2000.jpg 2000w, images/outros-projetos-16-2000_x2.jpg 4000w"
		}
	},
	{
		type: "image",
		value: {
			slug: "outros-projetos-21.jpg",
			caption: "Illustration study for “A Morte de Ivan Ilitch”, by Leo Tolstoy, published by Antofágica, 2020",
			"caption-pt": "Estudo para ilustração do livro “A Morte de Ivan Ilitch”, de Liev Tolstói, publicado pela Editora Antofágica, 2020",
			src: "images/outros-projetos-21-1050.jpg",
			srcset: "images/outros-projetos-21-180.jpg 180w, images/outros-projetos-21-180_x2.jpg 360w,images/outros-projetos-21-300.jpg 300w, images/outros-projetos-21-300_x2.jpg 600w,images/outros-projetos-21-460.jpg 460w, images/outros-projetos-21-460_x2.jpg 920w,images/outros-projetos-21-720.jpg 720w, images/outros-projetos-21-720_x2.jpg 1440w,images/outros-projetos-21-1050.jpg 1050w, images/outros-projetos-21-1050_x2.jpg 2100w,images/outros-projetos-21-1440.jpg 1440w, images/outros-projetos-21-1440_x2.jpg 2880w,images/outros-projetos-21-2000.jpg 2000w, images/outros-projetos-21-2000_x2.jpg 4000w"
		}
	}
];
var transformedDoc = {
	about: about,
	work: work
};

var transformedDoc$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  about: about,
  work: work,
  'default': transformedDoc
});

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var lazysizes = createCommonjsModule(function (module) {
(function(window, factory) {
	var lazySizes = factory(window, window.document, Date);
	window.lazySizes = lazySizes;
	if( module.exports){
		module.exports = lazySizes;
	}
}(typeof window != 'undefined' ?
      window : {}, function l(window, document, Date) { // Pass in the windoe Date function also for SSR because the Date class can be lost
	/*jshint eqnull:true */

	var lazysizes, lazySizesCfg;

	(function(){
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2,
			loadHidden: true,
			ricTimeout: 0,
			throttleDelay: 125,
		};

		lazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};

		for(prop in lazySizesDefaults){
			if(!(prop in lazySizesCfg)){
				lazySizesCfg[prop] = lazySizesDefaults[prop];
			}
		}
	})();

	if (!document || !document.getElementsByClassName) {
		return {
			init: function () {},
			cfg: lazySizesCfg,
			noSupport: true,
		};
	}

	var docElem = document.documentElement;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	/**
	 * Update to bind to window because 'this' becomes null during SSR
	 * builds.
	 */
	var addEventListener = window[_addEventListener].bind(window);

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	var hasClass = function(ele, cls) {
		if(!regClassCache[cls]){
			regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	var addClass = function(ele, cls) {
		if (!hasClass(ele, cls)){
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	var removeClass = function(ele, cls) {
		var reg;
		if ((reg = hasClass(ele,cls))) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function(dom, fn, add){
		var action = add ? _addEventListener : 'removeEventListener';
		if(add){
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function(evt){
			dom[action](evt, fn);
		});
	};

	var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
		var event = document.createEvent('Event');

		if(!detail){
			detail = {};
		}

		detail.instance = lazysizes;

		event.initEvent(name, !noBubbles, !noCancelable);

		event.detail = detail;

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function (el, full){
		var polyfill;
		if( !supportPicture && ( polyfill = (window.picturefill || lazySizesCfg.pf) ) ){
			if(full && full.src && !el[_getAttribute]('srcset')){
				el.setAttribute('srcset', full.src);
			}
			polyfill({reevaluate: true, elements: [el]});
		} else if(full && full.src){
			el.src = full.src;
		}
	};

	var getCSS = function (elem, style){
		return (getComputedStyle(elem, null) || {})[style];
	};

	var getWidth = function(elem, parent, width){
		width = width || elem.offsetWidth;

		while(width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth){
			width =  parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = (function(){
		var running, waiting;
		var firstFns = [];
		var secondFns = [];
		var fns = firstFns;

		var run = function(){
			var runFns = fns;

			fns = firstFns.length ? secondFns : firstFns;

			running = true;
			waiting = false;

			while(runFns.length){
				runFns.shift()();
			}

			running = false;
		};

		var rafBatch = function(fn, queue){
			if(running && !queue){
				fn.apply(this, arguments);
			} else {
				fns.push(fn);

				if(!waiting){
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	})();

	var rAFIt = function(fn, simple){
		return simple ?
			function() {
				rAF(fn);
			} :
			function(){
				var that = this;
				var args = arguments;
				rAF(function(){
					fn.apply(that, args);
				});
			}
		;
	};

	var throttle = function(fn){
		var running;
		var lastTime = 0;
		var gDelay = lazySizesCfg.throttleDelay;
		var rICTimeout = lazySizesCfg.ricTimeout;
		var run = function(){
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback && rICTimeout > 49 ?
			function(){
				requestIdleCallback(run, {timeout: rICTimeout});

				if(rICTimeout !== lazySizesCfg.ricTimeout){
					rICTimeout = lazySizesCfg.ricTimeout;
				}
			} :
			rAFIt(function(){
				setTimeout(run);
			}, true)
		;

		return function(isPriority){
			var delay;

			if((isPriority = isPriority === true)){
				rICTimeout = 33;
			}

			if(running){
				return;
			}

			running =  true;

			delay = gDelay - (Date.now() - lastTime);

			if(delay < 0){
				delay = 0;
			}

			if(isPriority || delay < 9){
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function(){
			timeout = null;
			func();
		};
		var later = function() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function() {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	var loader = (function(){
		var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = ('onscroll' in window) && !(/(gle|ing)bot/.test(navigator.userAgent));

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function(e){
			isLoading--;
			if(!e || isLoading < 0 || !e.target){
				isLoading = 0;
			}
		};

		var isVisible = function (elem) {
			if (isBodyHidden == null) {
				isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
			}

			return isBodyHidden || !(getCSS(elem.parentNode, 'visibility') == 'hidden' && getCSS(elem, 'visibility') == 'hidden');
		};

		var isNestedVisible = function(elem, elemExpand){
			var outerRect;
			var parent = elem;
			var visible = isVisible(elem);

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
				visible = ((getCSS(parent, 'opacity') || 1) > 0);

				if(visible && getCSS(parent, 'overflow') != 'visible'){
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left &&
						eLleft < outerRect.right &&
						eLbottom > outerRect.top - 1 &&
						eLtop < outerRect.bottom + 1
					;
				}
			}

			return visible;
		};

		var checkElements = function() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal,
				beforeExpandVal, defaultExpand, preloadExpand, hFac;
			var lazyloadElems = lazysizes.elements;

			if((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

				i = 0;

				lowRuns++;

				for(; i < eLlen; i++){

					if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

					if(!supportScroll || (lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i]))){unveilElement(lazyloadElems[i]);continue;}

					if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
						elemExpand = currentExpand;
					}

					if (!defaultExpand) {
						defaultExpand = (!lazySizesCfg.expand || lazySizesCfg.expand < 1) ?
							docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 :
							lazySizesCfg.expand;

						lazysizes._defEx = defaultExpand;

						preloadExpand = defaultExpand * lazySizesCfg.expFactor;
						hFac = lazySizesCfg.hFac;
						isBodyHidden = null;

						if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){
							currentExpand = preloadExpand;
							lowRuns = 0;
						} else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){
							currentExpand = defaultExpand;
						} else {
							currentExpand = shrinkExpand;
						}
					}

					if(beforeExpandVal !== elemExpand){
						eLvW = innerWidth + (elemExpand * hFac);
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
						(eLtop = rect.top) <= elvH &&
						(eLright = rect.right) >= elemNegativeExpand * hFac &&
						(eLleft = rect.left) <= eLvW &&
						(eLbottom || eLright || eLleft || eLtop) &&
						(lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) &&
						((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if(isLoading > 9){break;}
					} else if(!loadedSomething && isCompleted && !autoLoadElem &&
						isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
						(preloadElems[0] || lazySizesCfg.preloadAfterLoad) &&
						(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != 'auto')))){
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if(autoLoadElem && !loadedSomething){
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function(e){
			var elem = e.target;

			if (elem._lazyCache) {
				delete elem._lazyCache;
				return;
			}

			resetPreloading(e);
			addClass(elem, lazySizesCfg.loadedClass);
			removeClass(elem, lazySizesCfg.loadingClass);
			addRemoveLoadEvents(elem, rafSwitchLoadingClass);
			triggerEvent(elem, 'lazyloaded');
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function(e){
			rafedSwitchLoadingClass({target: e.target});
		};

		var changeIframeSrc = function(elem, src){
			try {
				elem.contentWindow.location.replace(src);
			} catch(e){
				elem.src = src;
			}
		};

		var handleSources = function(source){
			var customMedia;

			var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);

			if( (customMedia = lazySizesCfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
				source.setAttribute('media', customMedia);
			}

			if(sourceSrcset){
				source.setAttribute('srcset', sourceSrcset);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){
			var src, srcset, parent, isPicture, event, firesLoad;

			if(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){

				if(sizes){
					if(isAuto){
						addClass(elem, lazySizesCfg.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
				src = elem[_getAttribute](lazySizesCfg.srcAttr);

				if(isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

				event = {target: elem};

				addClass(elem, lazySizesCfg.loadingClass);

				if(firesLoad){
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if(isPicture){
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if(srcset){
					elem.setAttribute('srcset', srcset);
				} else if(src && !isPicture){
					if(regIframe.test(elem.nodeName)){
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if(isImg && (srcset || isPicture)){
					updatePolyfill(elem, {src: src});
				}
			}

			if(elem._lazyRace){
				delete elem._lazyRace;
			}
			removeClass(elem, lazySizesCfg.lazyClass);

			rAF(function(){
				// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
				var isLoaded = elem.complete && elem.naturalWidth > 1;

				if( !firesLoad || isLoaded){
					if (isLoaded) {
						addClass(elem, 'ls-is-cached');
					}
					switchLoadingClass(event);
					elem._lazyCache = true;
					setTimeout(function(){
						if ('_lazyCache' in elem) {
							delete elem._lazyCache;
						}
					}, 9);
				}
				if (elem.loading == 'lazy') {
					isLoading--;
				}
			}, true);
		});

		var unveilElement = function (elem){
			if (elem._lazyRace) {return;}
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)){return;}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if(isAuto){
				 autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var afterScroll = debounce(function(){
			lazySizesCfg.loadMode = 3;
			throttledCheckElements();
		});

		var altLoadmodeScrollListner = function(){
			if(lazySizesCfg.loadMode == 3){
				lazySizesCfg.loadMode = 2;
			}
			afterScroll();
		};

		var onload = function(){
			if(isCompleted){return;}
			if(Date.now() - started < 999){
				setTimeout(onload, 999);
				return;
			}


			isCompleted = true;

			lazySizesCfg.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', altLoadmodeScrollListner, true);
		};

		return {
			_: function(){
				started = Date.now();

				lazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + ' ' + lazySizesCfg.preloadClass);

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				addEventListener('pageshow', function (e) {
					if (e.persisted) {
						var loadingElements = document.querySelectorAll('.' + lazySizesCfg.loadingClass);

						if (loadingElements.length && loadingElements.forEach) {
							requestAnimationFrame(function () {
								loadingElements.forEach( function (img) {
									if (img.complete) {
										unveilElement(img);
									}
								});
							});
						}
					}
				});

				if(window.MutationObserver){
					new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function(name){
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if((/d$|^c/.test(document.readyState))){
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if(lazysizes.elements.length){
					checkElements();
					rAF._lsFlush();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement,
			_aLSL: altLoadmodeScrollListner,
		};
	})();


	var autoSizer = (function(){
		var autosizesElems;

		var sizeElement = rAFIt(function(elem, parent, event, width){
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if(regPicture.test(parent.nodeName || '')){
				sources = parent.getElementsByTagName('source');
				for(i = 0, len = sources.length; i < len; i++){
					sources[i].setAttribute('sizes', width);
				}
			}

			if(!event.detail.dataAttr){
				updatePolyfill(elem, event.detail);
			}
		});
		var getSizeElement = function (elem, dataAttr, width){
			var event;
			var parent = elem.parentNode;

			if(parent){
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});

				if(!event.defaultPrevented){
					width = event.detail.width;

					if(width && width !== elem._lazysizesWidth){
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function(){
			var i;
			var len = autosizesElems.length;
			if(len){
				i = 0;

				for(; i < len; i++){
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function(){
				autosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	})();

	var init = function(){
		if(!init.i && document.getElementsByClassName){
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	setTimeout(function(){
		if(lazySizesCfg.init){
			init();
		}
	});

	lazysizes = {
		cfg: lazySizesCfg,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF,
	};

	return lazysizes;
}
));
});

/* src/components/Image.svelte generated by Svelte v3.23.2 */
const file = "src/components/Image.svelte";

function create_fragment(ctx) {
	let div;
	let img;
	let t0;
	let p;
	let t1;

	const block = {
		c: function create() {
			div = element("div");
			img = element("img");
			t0 = space();
			p = element("p");
			t1 = text(/*caption*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			img = claim_element(div_nodes, "IMG", {
				alt: true,
				"data-sizes": true,
				"data-src": true,
				"data-srcset": true,
				class: true
			});

			t0 = claim_space(div_nodes);
			p = claim_element(div_nodes, "P", {});
			var p_nodes = children(p);
			t1 = claim_text(p_nodes, /*caption*/ ctx[2]);
			p_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "alt", "");
			attr_dev(img, "data-sizes", "auto");
			attr_dev(img, "data-src", /*src*/ ctx[0]);
			attr_dev(img, "data-srcset", /*srcset*/ ctx[1]);
			attr_dev(img, "class", "lazyload");
			add_location(img, file, 9, 2, 144);
			add_location(p, file, 10, 2, 236);
			attr_dev(div, "class", "image-container big svelte-10bemum");
			add_location(div, file, 8, 0, 108);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, img);
			append_dev(div, t0);
			append_dev(div, p);
			append_dev(p, t1);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*src*/ 1) {
				attr_dev(img, "data-src", /*src*/ ctx[0]);
			}

			if (dirty & /*srcset*/ 2) {
				attr_dev(img, "data-srcset", /*srcset*/ ctx[1]);
			}

			if (dirty & /*caption*/ 4) set_data_dev(t1, /*caption*/ ctx[2]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { src } = $$props;
	let { srcset } = $$props;
	let { caption } = $$props;
	const writable_props = ["src", "srcset", "caption"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Image> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Image", $$slots, []);

	$$self.$set = $$props => {
		if ("src" in $$props) $$invalidate(0, src = $$props.src);
		if ("srcset" in $$props) $$invalidate(1, srcset = $$props.srcset);
		if ("caption" in $$props) $$invalidate(2, caption = $$props.caption);
	};

	$$self.$capture_state = () => ({ src, srcset, caption });

	$$self.$inject_state = $$props => {
		if ("src" in $$props) $$invalidate(0, src = $$props.src);
		if ("srcset" in $$props) $$invalidate(1, srcset = $$props.srcset);
		if ("caption" in $$props) $$invalidate(2, caption = $$props.caption);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [src, srcset, caption];
}

class Image extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { src: 0, srcset: 1, caption: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Image",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*src*/ ctx[0] === undefined && !("src" in props)) {
			console.warn("<Image> was created without expected prop 'src'");
		}

		if (/*srcset*/ ctx[1] === undefined && !("srcset" in props)) {
			console.warn("<Image> was created without expected prop 'srcset'");
		}

		if (/*caption*/ ctx[2] === undefined && !("caption" in props)) {
			console.warn("<Image> was created without expected prop 'caption'");
		}
	}

	get src() {
		throw new Error("<Image>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set src(value) {
		throw new Error("<Image>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get srcset() {
		throw new Error("<Image>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set srcset(value) {
		throw new Error("<Image>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get caption() {
		throw new Error("<Image>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set caption(value) {
		throw new Error("<Image>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/Text.svelte generated by Svelte v3.23.2 */

const file$1 = "src/components/Text.svelte";

function create_fragment$1(ctx) {
	let p;
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text(/*value*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t = claim_text(p_nodes, /*value*/ ctx[0]);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(p, file$1, 4, 0, 40);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*value*/ 1) set_data_dev(t, /*value*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { value } = $$props;
	const writable_props = ["value"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Text> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Text", $$slots, []);

	$$self.$set = $$props => {
		if ("value" in $$props) $$invalidate(0, value = $$props.value);
	};

	$$self.$capture_state = () => ({ value });

	$$self.$inject_state = $$props => {
		if ("value" in $$props) $$invalidate(0, value = $$props.value);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [value];
}

class Text extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { value: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Text",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*value*/ ctx[0] === undefined && !("value" in props)) {
			console.warn("<Text> was created without expected prop 'value'");
		}
	}

	get value() {
		throw new Error("<Text>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set value(value) {
		throw new Error("<Text>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/Body.svelte generated by Svelte v3.23.2 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i].type;
	child_ctx[3] = list[i].value;
	return child_ctx;
}

// (13:28) 
function create_if_block_1(ctx) {
	let text_1;
	let current;

	text_1 = new Text({
			props: { value: /*value*/ ctx[3] },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(text_1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(text_1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(text_1, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(text_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(text_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(text_1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(13:28) ",
		ctx
	});

	return block;
}

// (11:2) {#if type === 'image'}
function create_if_block(ctx) {
	let image;
	let current;
	const image_spread_levels = [/*value*/ ctx[3]];
	let image_props = {};

	for (let i = 0; i < image_spread_levels.length; i += 1) {
		image_props = assign(image_props, image_spread_levels[i]);
	}

	image = new Image({ props: image_props, $$inline: true });

	const block = {
		c: function create() {
			create_component(image.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(image.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(image, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const image_changes = (dirty & /*page*/ 1)
			? get_spread_update(image_spread_levels, [get_spread_object(/*value*/ ctx[3])])
			: {};

			image.$set(image_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(image.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(image.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(image, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(11:2) {#if type === 'image'}",
		ctx
	});

	return block;
}

// (10:0) {#each page as {type, value}}
function create_each_block(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_if_block_1];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*type*/ ctx[2] === "image") return 0;
		if (/*type*/ ctx[2] === "text") return 1;
		return -1;
	}

	if (~(current_block_type_index = select_block_type(ctx))) {
		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	}

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (~current_block_type_index) {
				if_blocks[current_block_type_index].m(target, anchor);
			}

			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (if_block) if_block.p(ctx, dirty);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (~current_block_type_index) {
				if_blocks[current_block_type_index].d(detaching);
			}

			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(10:0) {#each page as {type, value}}",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let each_1_anchor;
	let current;
	let each_value = /*page*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*page*/ 1) {
				each_value = /*page*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	let { pageName } = $$props;
	const page = transformedDoc$1[pageName];
	const writable_props = ["pageName"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Body> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Body", $$slots, []);

	$$self.$set = $$props => {
		if ("pageName" in $$props) $$invalidate(1, pageName = $$props.pageName);
	};

	$$self.$capture_state = () => ({
		transformedDoc: transformedDoc$1,
		Image,
		Text,
		pageName,
		page
	});

	$$self.$inject_state = $$props => {
		if ("pageName" in $$props) $$invalidate(1, pageName = $$props.pageName);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [page, pageName];
}

class Body extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, { pageName: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Body",
			options,
			id: create_fragment$2.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*pageName*/ ctx[1] === undefined && !("pageName" in props)) {
			console.warn("<Body> was created without expected prop 'pageName'");
		}
	}

	get pageName() {
		throw new Error("<Body>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set pageName(value) {
		throw new Error("<Body>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/index.svelte generated by Svelte v3.23.2 */
const file$2 = "src/routes/index.svelte";

function create_fragment$3(ctx) {
	let t;
	let div;
	let body;
	let current;

	body = new Body({
			props: { pageName: "work" },
			$$inline: true
		});

	const block = {
		c: function create() {
			t = space();
			div = element("div");
			create_component(body.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-mqpxkj\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(body.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Luciano Feijão";
			attr_dev(div, "class", "grid svelte-17yb1c9");
			add_location(div, file$2, 8, 0, 128);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, div, anchor);
			mount_component(body, div, null);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(body.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(body.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(div);
			destroy_component(body);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$3.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$3($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	$$self.$capture_state = () => ({ Body });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$3.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY2RhOTA0ZmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9sYXp5c2l6ZXMvbGF6eXNpemVzLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvSW1hZ2Uuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVGV4dC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Cb2R5LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbih3aW5kb3csIGZhY3RvcnkpIHtcblx0dmFyIGxhenlTaXplcyA9IGZhY3Rvcnkod2luZG93LCB3aW5kb3cuZG9jdW1lbnQsIERhdGUpO1xuXHR3aW5kb3cubGF6eVNpemVzID0gbGF6eVNpemVzO1xuXHRpZih0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKXtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGxhenlTaXplcztcblx0fVxufSh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnID9cbiAgICAgIHdpbmRvdyA6IHt9LCBmdW5jdGlvbiBsKHdpbmRvdywgZG9jdW1lbnQsIERhdGUpIHsgLy8gUGFzcyBpbiB0aGUgd2luZG9lIERhdGUgZnVuY3Rpb24gYWxzbyBmb3IgU1NSIGJlY2F1c2UgdGhlIERhdGUgY2xhc3MgY2FuIGJlIGxvc3Rcblx0J3VzZSBzdHJpY3QnO1xuXHQvKmpzaGludCBlcW51bGw6dHJ1ZSAqL1xuXG5cdHZhciBsYXp5c2l6ZXMsIGxhenlTaXplc0NmZztcblxuXHQoZnVuY3Rpb24oKXtcblx0XHR2YXIgcHJvcDtcblxuXHRcdHZhciBsYXp5U2l6ZXNEZWZhdWx0cyA9IHtcblx0XHRcdGxhenlDbGFzczogJ2xhenlsb2FkJyxcblx0XHRcdGxvYWRlZENsYXNzOiAnbGF6eWxvYWRlZCcsXG5cdFx0XHRsb2FkaW5nQ2xhc3M6ICdsYXp5bG9hZGluZycsXG5cdFx0XHRwcmVsb2FkQ2xhc3M6ICdsYXp5cHJlbG9hZCcsXG5cdFx0XHRlcnJvckNsYXNzOiAnbGF6eWVycm9yJyxcblx0XHRcdC8vc3RyaWN0Q2xhc3M6ICdsYXp5c3RyaWN0Jyxcblx0XHRcdGF1dG9zaXplc0NsYXNzOiAnbGF6eWF1dG9zaXplcycsXG5cdFx0XHRzcmNBdHRyOiAnZGF0YS1zcmMnLFxuXHRcdFx0c3Jjc2V0QXR0cjogJ2RhdGEtc3Jjc2V0Jyxcblx0XHRcdHNpemVzQXR0cjogJ2RhdGEtc2l6ZXMnLFxuXHRcdFx0Ly9wcmVsb2FkQWZ0ZXJMb2FkOiBmYWxzZSxcblx0XHRcdG1pblNpemU6IDQwLFxuXHRcdFx0Y3VzdG9tTWVkaWE6IHt9LFxuXHRcdFx0aW5pdDogdHJ1ZSxcblx0XHRcdGV4cEZhY3RvcjogMS41LFxuXHRcdFx0aEZhYzogMC44LFxuXHRcdFx0bG9hZE1vZGU6IDIsXG5cdFx0XHRsb2FkSGlkZGVuOiB0cnVlLFxuXHRcdFx0cmljVGltZW91dDogMCxcblx0XHRcdHRocm90dGxlRGVsYXk6IDEyNSxcblx0XHR9O1xuXG5cdFx0bGF6eVNpemVzQ2ZnID0gd2luZG93LmxhenlTaXplc0NvbmZpZyB8fCB3aW5kb3cubGF6eXNpemVzQ29uZmlnIHx8IHt9O1xuXG5cdFx0Zm9yKHByb3AgaW4gbGF6eVNpemVzRGVmYXVsdHMpe1xuXHRcdFx0aWYoIShwcm9wIGluIGxhenlTaXplc0NmZykpe1xuXHRcdFx0XHRsYXp5U2l6ZXNDZmdbcHJvcF0gPSBsYXp5U2l6ZXNEZWZhdWx0c1twcm9wXTtcblx0XHRcdH1cblx0XHR9XG5cdH0pKCk7XG5cblx0aWYgKCFkb2N1bWVudCB8fCAhZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpbml0OiBmdW5jdGlvbiAoKSB7fSxcblx0XHRcdGNmZzogbGF6eVNpemVzQ2ZnLFxuXHRcdFx0bm9TdXBwb3J0OiB0cnVlLFxuXHRcdH07XG5cdH1cblxuXHR2YXIgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXHR2YXIgc3VwcG9ydFBpY3R1cmUgPSB3aW5kb3cuSFRNTFBpY3R1cmVFbGVtZW50O1xuXG5cdHZhciBfYWRkRXZlbnRMaXN0ZW5lciA9ICdhZGRFdmVudExpc3RlbmVyJztcblxuXHR2YXIgX2dldEF0dHJpYnV0ZSA9ICdnZXRBdHRyaWJ1dGUnO1xuXG5cdC8qKlxuXHQgKiBVcGRhdGUgdG8gYmluZCB0byB3aW5kb3cgYmVjYXVzZSAndGhpcycgYmVjb21lcyBudWxsIGR1cmluZyBTU1Jcblx0ICogYnVpbGRzLlxuXHQgKi9cblx0dmFyIGFkZEV2ZW50TGlzdGVuZXIgPSB3aW5kb3dbX2FkZEV2ZW50TGlzdGVuZXJdLmJpbmQod2luZG93KTtcblxuXHR2YXIgc2V0VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0O1xuXG5cdHZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQ7XG5cblx0dmFyIHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjaztcblxuXHR2YXIgcmVnUGljdHVyZSA9IC9ecGljdHVyZSQvaTtcblxuXHR2YXIgbG9hZEV2ZW50cyA9IFsnbG9hZCcsICdlcnJvcicsICdsYXp5aW5jbHVkZWQnLCAnX2xhenlsb2FkZWQnXTtcblxuXHR2YXIgcmVnQ2xhc3NDYWNoZSA9IHt9O1xuXG5cdHZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG5cblx0dmFyIGhhc0NsYXNzID0gZnVuY3Rpb24oZWxlLCBjbHMpIHtcblx0XHRpZighcmVnQ2xhc3NDYWNoZVtjbHNdKXtcblx0XHRcdHJlZ0NsYXNzQ2FjaGVbY2xzXSA9IG5ldyBSZWdFeHAoJyhcXFxcc3xeKScrY2xzKycoXFxcXHN8JCknKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlZ0NsYXNzQ2FjaGVbY2xzXS50ZXN0KGVsZVtfZ2V0QXR0cmlidXRlXSgnY2xhc3MnKSB8fCAnJykgJiYgcmVnQ2xhc3NDYWNoZVtjbHNdO1xuXHR9O1xuXG5cdHZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uKGVsZSwgY2xzKSB7XG5cdFx0aWYgKCFoYXNDbGFzcyhlbGUsIGNscykpe1xuXHRcdFx0ZWxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlW19nZXRBdHRyaWJ1dGVdKCdjbGFzcycpIHx8ICcnKS50cmltKCkgKyAnICcgKyBjbHMpO1xuXHRcdH1cblx0fTtcblxuXHR2YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbGUsIGNscykge1xuXHRcdHZhciByZWc7XG5cdFx0aWYgKChyZWcgPSBoYXNDbGFzcyhlbGUsY2xzKSkpIHtcblx0XHRcdGVsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGVsZVtfZ2V0QXR0cmlidXRlXSgnY2xhc3MnKSB8fCAnJykucmVwbGFjZShyZWcsICcgJykpO1xuXHRcdH1cblx0fTtcblxuXHR2YXIgYWRkUmVtb3ZlTG9hZEV2ZW50cyA9IGZ1bmN0aW9uKGRvbSwgZm4sIGFkZCl7XG5cdFx0dmFyIGFjdGlvbiA9IGFkZCA/IF9hZGRFdmVudExpc3RlbmVyIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuXHRcdGlmKGFkZCl7XG5cdFx0XHRhZGRSZW1vdmVMb2FkRXZlbnRzKGRvbSwgZm4pO1xuXHRcdH1cblx0XHRsb2FkRXZlbnRzLmZvckVhY2goZnVuY3Rpb24oZXZ0KXtcblx0XHRcdGRvbVthY3Rpb25dKGV2dCwgZm4pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHZhciB0cmlnZ2VyRXZlbnQgPSBmdW5jdGlvbihlbGVtLCBuYW1lLCBkZXRhaWwsIG5vQnViYmxlcywgbm9DYW5jZWxhYmxlKXtcblx0XHR2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcblxuXHRcdGlmKCFkZXRhaWwpe1xuXHRcdFx0ZGV0YWlsID0ge307XG5cdFx0fVxuXG5cdFx0ZGV0YWlsLmluc3RhbmNlID0gbGF6eXNpemVzO1xuXG5cdFx0ZXZlbnQuaW5pdEV2ZW50KG5hbWUsICFub0J1YmJsZXMsICFub0NhbmNlbGFibGUpO1xuXG5cdFx0ZXZlbnQuZGV0YWlsID0gZGV0YWlsO1xuXG5cdFx0ZWxlbS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblx0XHRyZXR1cm4gZXZlbnQ7XG5cdH07XG5cblx0dmFyIHVwZGF0ZVBvbHlmaWxsID0gZnVuY3Rpb24gKGVsLCBmdWxsKXtcblx0XHR2YXIgcG9seWZpbGw7XG5cdFx0aWYoICFzdXBwb3J0UGljdHVyZSAmJiAoIHBvbHlmaWxsID0gKHdpbmRvdy5waWN0dXJlZmlsbCB8fCBsYXp5U2l6ZXNDZmcucGYpICkgKXtcblx0XHRcdGlmKGZ1bGwgJiYgZnVsbC5zcmMgJiYgIWVsW19nZXRBdHRyaWJ1dGVdKCdzcmNzZXQnKSl7XG5cdFx0XHRcdGVsLnNldEF0dHJpYnV0ZSgnc3Jjc2V0JywgZnVsbC5zcmMpO1xuXHRcdFx0fVxuXHRcdFx0cG9seWZpbGwoe3JlZXZhbHVhdGU6IHRydWUsIGVsZW1lbnRzOiBbZWxdfSk7XG5cdFx0fSBlbHNlIGlmKGZ1bGwgJiYgZnVsbC5zcmMpe1xuXHRcdFx0ZWwuc3JjID0gZnVsbC5zcmM7XG5cdFx0fVxuXHR9O1xuXG5cdHZhciBnZXRDU1MgPSBmdW5jdGlvbiAoZWxlbSwgc3R5bGUpe1xuXHRcdHJldHVybiAoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtLCBudWxsKSB8fCB7fSlbc3R5bGVdO1xuXHR9O1xuXG5cdHZhciBnZXRXaWR0aCA9IGZ1bmN0aW9uKGVsZW0sIHBhcmVudCwgd2lkdGgpe1xuXHRcdHdpZHRoID0gd2lkdGggfHwgZWxlbS5vZmZzZXRXaWR0aDtcblxuXHRcdHdoaWxlKHdpZHRoIDwgbGF6eVNpemVzQ2ZnLm1pblNpemUgJiYgcGFyZW50ICYmICFlbGVtLl9sYXp5c2l6ZXNXaWR0aCl7XG5cdFx0XHR3aWR0aCA9ICBwYXJlbnQub2Zmc2V0V2lkdGg7XG5cdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gd2lkdGg7XG5cdH07XG5cblx0dmFyIHJBRiA9IChmdW5jdGlvbigpe1xuXHRcdHZhciBydW5uaW5nLCB3YWl0aW5nO1xuXHRcdHZhciBmaXJzdEZucyA9IFtdO1xuXHRcdHZhciBzZWNvbmRGbnMgPSBbXTtcblx0XHR2YXIgZm5zID0gZmlyc3RGbnM7XG5cblx0XHR2YXIgcnVuID0gZnVuY3Rpb24oKXtcblx0XHRcdHZhciBydW5GbnMgPSBmbnM7XG5cblx0XHRcdGZucyA9IGZpcnN0Rm5zLmxlbmd0aCA/IHNlY29uZEZucyA6IGZpcnN0Rm5zO1xuXG5cdFx0XHRydW5uaW5nID0gdHJ1ZTtcblx0XHRcdHdhaXRpbmcgPSBmYWxzZTtcblxuXHRcdFx0d2hpbGUocnVuRm5zLmxlbmd0aCl7XG5cdFx0XHRcdHJ1bkZucy5zaGlmdCgpKCk7XG5cdFx0XHR9XG5cblx0XHRcdHJ1bm5pbmcgPSBmYWxzZTtcblx0XHR9O1xuXG5cdFx0dmFyIHJhZkJhdGNoID0gZnVuY3Rpb24oZm4sIHF1ZXVlKXtcblx0XHRcdGlmKHJ1bm5pbmcgJiYgIXF1ZXVlKXtcblx0XHRcdFx0Zm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZucy5wdXNoKGZuKTtcblxuXHRcdFx0XHRpZighd2FpdGluZyl7XG5cdFx0XHRcdFx0d2FpdGluZyA9IHRydWU7XG5cdFx0XHRcdFx0KGRvY3VtZW50LmhpZGRlbiA/IHNldFRpbWVvdXQgOiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUpKHJ1bik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0cmFmQmF0Y2guX2xzRmx1c2ggPSBydW47XG5cblx0XHRyZXR1cm4gcmFmQmF0Y2g7XG5cdH0pKCk7XG5cblx0dmFyIHJBRkl0ID0gZnVuY3Rpb24oZm4sIHNpbXBsZSl7XG5cdFx0cmV0dXJuIHNpbXBsZSA/XG5cdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0ckFGKGZuKTtcblx0XHRcdH0gOlxuXHRcdFx0ZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xuXHRcdFx0XHR2YXIgYXJncyA9IGFyZ3VtZW50cztcblx0XHRcdFx0ckFGKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0Zm4uYXBwbHkodGhhdCwgYXJncyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdDtcblx0fTtcblxuXHR2YXIgdGhyb3R0bGUgPSBmdW5jdGlvbihmbil7XG5cdFx0dmFyIHJ1bm5pbmc7XG5cdFx0dmFyIGxhc3RUaW1lID0gMDtcblx0XHR2YXIgZ0RlbGF5ID0gbGF6eVNpemVzQ2ZnLnRocm90dGxlRGVsYXk7XG5cdFx0dmFyIHJJQ1RpbWVvdXQgPSBsYXp5U2l6ZXNDZmcucmljVGltZW91dDtcblx0XHR2YXIgcnVuID0gZnVuY3Rpb24oKXtcblx0XHRcdHJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcblx0XHRcdGZuKCk7XG5cdFx0fTtcblx0XHR2YXIgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjayAmJiBySUNUaW1lb3V0ID4gNDkgP1xuXHRcdFx0ZnVuY3Rpb24oKXtcblx0XHRcdFx0cmVxdWVzdElkbGVDYWxsYmFjayhydW4sIHt0aW1lb3V0OiBySUNUaW1lb3V0fSk7XG5cblx0XHRcdFx0aWYocklDVGltZW91dCAhPT0gbGF6eVNpemVzQ2ZnLnJpY1RpbWVvdXQpe1xuXHRcdFx0XHRcdHJJQ1RpbWVvdXQgPSBsYXp5U2l6ZXNDZmcucmljVGltZW91dDtcblx0XHRcdFx0fVxuXHRcdFx0fSA6XG5cdFx0XHRyQUZJdChmdW5jdGlvbigpe1xuXHRcdFx0XHRzZXRUaW1lb3V0KHJ1bik7XG5cdFx0XHR9LCB0cnVlKVxuXHRcdDtcblxuXHRcdHJldHVybiBmdW5jdGlvbihpc1ByaW9yaXR5KXtcblx0XHRcdHZhciBkZWxheTtcblxuXHRcdFx0aWYoKGlzUHJpb3JpdHkgPSBpc1ByaW9yaXR5ID09PSB0cnVlKSl7XG5cdFx0XHRcdHJJQ1RpbWVvdXQgPSAzMztcblx0XHRcdH1cblxuXHRcdFx0aWYocnVubmluZyl7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0cnVubmluZyA9ICB0cnVlO1xuXG5cdFx0XHRkZWxheSA9IGdEZWxheSAtIChEYXRlLm5vdygpIC0gbGFzdFRpbWUpO1xuXG5cdFx0XHRpZihkZWxheSA8IDApe1xuXHRcdFx0XHRkZWxheSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmKGlzUHJpb3JpdHkgfHwgZGVsYXkgPCA5KXtcblx0XHRcdFx0aWRsZUNhbGxiYWNrKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGlkbGVDYWxsYmFjaywgZGVsYXkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cblx0Ly9iYXNlZCBvbiBodHRwOi8vbW9kZXJuamF2YXNjcmlwdC5ibG9nc3BvdC5kZS8yMDEzLzA4L2J1aWxkaW5nLWJldHRlci1kZWJvdW5jZS5odG1sXG5cdHZhciBkZWJvdW5jZSA9IGZ1bmN0aW9uKGZ1bmMpIHtcblx0XHR2YXIgdGltZW91dCwgdGltZXN0YW1wO1xuXHRcdHZhciB3YWl0ID0gOTk7XG5cdFx0dmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG5cdFx0XHR0aW1lb3V0ID0gbnVsbDtcblx0XHRcdGZ1bmMoKTtcblx0XHR9O1xuXHRcdHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGxhc3QgPSBEYXRlLm5vdygpIC0gdGltZXN0YW1wO1xuXG5cdFx0XHRpZiAobGFzdCA8IHdhaXQpIHtcblx0XHRcdFx0c2V0VGltZW91dChsYXRlciwgd2FpdCAtIGxhc3QpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0KHJlcXVlc3RJZGxlQ2FsbGJhY2sgfHwgcnVuKShydW4pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHR0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuXG5cdFx0XHRpZiAoIXRpbWVvdXQpIHtcblx0XHRcdFx0dGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cblx0dmFyIGxvYWRlciA9IChmdW5jdGlvbigpe1xuXHRcdHZhciBwcmVsb2FkRWxlbXMsIGlzQ29tcGxldGVkLCByZXNldFByZWxvYWRpbmdUaW1lciwgbG9hZE1vZGUsIHN0YXJ0ZWQ7XG5cblx0XHR2YXIgZUx2VywgZWx2SCwgZUx0b3AsIGVMbGVmdCwgZUxyaWdodCwgZUxib3R0b20sIGlzQm9keUhpZGRlbjtcblxuXHRcdHZhciByZWdJbWcgPSAvXmltZyQvaTtcblx0XHR2YXIgcmVnSWZyYW1lID0gL15pZnJhbWUkL2k7XG5cblx0XHR2YXIgc3VwcG9ydFNjcm9sbCA9ICgnb25zY3JvbGwnIGluIHdpbmRvdykgJiYgISgvKGdsZXxpbmcpYm90Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKTtcblxuXHRcdHZhciBzaHJpbmtFeHBhbmQgPSAwO1xuXHRcdHZhciBjdXJyZW50RXhwYW5kID0gMDtcblxuXHRcdHZhciBpc0xvYWRpbmcgPSAwO1xuXHRcdHZhciBsb3dSdW5zID0gLTE7XG5cblx0XHR2YXIgcmVzZXRQcmVsb2FkaW5nID0gZnVuY3Rpb24oZSl7XG5cdFx0XHRpc0xvYWRpbmctLTtcblx0XHRcdGlmKCFlIHx8IGlzTG9hZGluZyA8IDAgfHwgIWUudGFyZ2V0KXtcblx0XHRcdFx0aXNMb2FkaW5nID0gMDtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGlzVmlzaWJsZSA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRpZiAoaXNCb2R5SGlkZGVuID09IG51bGwpIHtcblx0XHRcdFx0aXNCb2R5SGlkZGVuID0gZ2V0Q1NTKGRvY3VtZW50LmJvZHksICd2aXNpYmlsaXR5JykgPT0gJ2hpZGRlbic7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBpc0JvZHlIaWRkZW4gfHwgIShnZXRDU1MoZWxlbS5wYXJlbnROb2RlLCAndmlzaWJpbGl0eScpID09ICdoaWRkZW4nICYmIGdldENTUyhlbGVtLCAndmlzaWJpbGl0eScpID09ICdoaWRkZW4nKTtcblx0XHR9O1xuXG5cdFx0dmFyIGlzTmVzdGVkVmlzaWJsZSA9IGZ1bmN0aW9uKGVsZW0sIGVsZW1FeHBhbmQpe1xuXHRcdFx0dmFyIG91dGVyUmVjdDtcblx0XHRcdHZhciBwYXJlbnQgPSBlbGVtO1xuXHRcdFx0dmFyIHZpc2libGUgPSBpc1Zpc2libGUoZWxlbSk7XG5cblx0XHRcdGVMdG9wIC09IGVsZW1FeHBhbmQ7XG5cdFx0XHRlTGJvdHRvbSArPSBlbGVtRXhwYW5kO1xuXHRcdFx0ZUxsZWZ0IC09IGVsZW1FeHBhbmQ7XG5cdFx0XHRlTHJpZ2h0ICs9IGVsZW1FeHBhbmQ7XG5cblx0XHRcdHdoaWxlKHZpc2libGUgJiYgKHBhcmVudCA9IHBhcmVudC5vZmZzZXRQYXJlbnQpICYmIHBhcmVudCAhPSBkb2N1bWVudC5ib2R5ICYmIHBhcmVudCAhPSBkb2NFbGVtKXtcblx0XHRcdFx0dmlzaWJsZSA9ICgoZ2V0Q1NTKHBhcmVudCwgJ29wYWNpdHknKSB8fCAxKSA+IDApO1xuXG5cdFx0XHRcdGlmKHZpc2libGUgJiYgZ2V0Q1NTKHBhcmVudCwgJ292ZXJmbG93JykgIT0gJ3Zpc2libGUnKXtcblx0XHRcdFx0XHRvdXRlclJlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdFx0dmlzaWJsZSA9IGVMcmlnaHQgPiBvdXRlclJlY3QubGVmdCAmJlxuXHRcdFx0XHRcdFx0ZUxsZWZ0IDwgb3V0ZXJSZWN0LnJpZ2h0ICYmXG5cdFx0XHRcdFx0XHRlTGJvdHRvbSA+IG91dGVyUmVjdC50b3AgLSAxICYmXG5cdFx0XHRcdFx0XHRlTHRvcCA8IG91dGVyUmVjdC5ib3R0b20gKyAxXG5cdFx0XHRcdFx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB2aXNpYmxlO1xuXHRcdH07XG5cblx0XHR2YXIgY2hlY2tFbGVtZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGVMbGVuLCBpLCByZWN0LCBhdXRvTG9hZEVsZW0sIGxvYWRlZFNvbWV0aGluZywgZWxlbUV4cGFuZCwgZWxlbU5lZ2F0aXZlRXhwYW5kLCBlbGVtRXhwYW5kVmFsLFxuXHRcdFx0XHRiZWZvcmVFeHBhbmRWYWwsIGRlZmF1bHRFeHBhbmQsIHByZWxvYWRFeHBhbmQsIGhGYWM7XG5cdFx0XHR2YXIgbGF6eWxvYWRFbGVtcyA9IGxhenlzaXplcy5lbGVtZW50cztcblxuXHRcdFx0aWYoKGxvYWRNb2RlID0gbGF6eVNpemVzQ2ZnLmxvYWRNb2RlKSAmJiBpc0xvYWRpbmcgPCA4ICYmIChlTGxlbiA9IGxhenlsb2FkRWxlbXMubGVuZ3RoKSl7XG5cblx0XHRcdFx0aSA9IDA7XG5cblx0XHRcdFx0bG93UnVucysrO1xuXG5cdFx0XHRcdGZvcig7IGkgPCBlTGxlbjsgaSsrKXtcblxuXHRcdFx0XHRcdGlmKCFsYXp5bG9hZEVsZW1zW2ldIHx8IGxhenlsb2FkRWxlbXNbaV0uX2xhenlSYWNlKXtjb250aW51ZTt9XG5cblx0XHRcdFx0XHRpZighc3VwcG9ydFNjcm9sbCB8fCAobGF6eXNpemVzLnByZW1hdHVyZVVudmVpbCAmJiBsYXp5c2l6ZXMucHJlbWF0dXJlVW52ZWlsKGxhenlsb2FkRWxlbXNbaV0pKSl7dW52ZWlsRWxlbWVudChsYXp5bG9hZEVsZW1zW2ldKTtjb250aW51ZTt9XG5cblx0XHRcdFx0XHRpZighKGVsZW1FeHBhbmRWYWwgPSBsYXp5bG9hZEVsZW1zW2ldW19nZXRBdHRyaWJ1dGVdKCdkYXRhLWV4cGFuZCcpKSB8fCAhKGVsZW1FeHBhbmQgPSBlbGVtRXhwYW5kVmFsICogMSkpe1xuXHRcdFx0XHRcdFx0ZWxlbUV4cGFuZCA9IGN1cnJlbnRFeHBhbmQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFkZWZhdWx0RXhwYW5kKSB7XG5cdFx0XHRcdFx0XHRkZWZhdWx0RXhwYW5kID0gKCFsYXp5U2l6ZXNDZmcuZXhwYW5kIHx8IGxhenlTaXplc0NmZy5leHBhbmQgPCAxKSA/XG5cdFx0XHRcdFx0XHRcdGRvY0VsZW0uY2xpZW50SGVpZ2h0ID4gNTAwICYmIGRvY0VsZW0uY2xpZW50V2lkdGggPiA1MDAgPyA1MDAgOiAzNzAgOlxuXHRcdFx0XHRcdFx0XHRsYXp5U2l6ZXNDZmcuZXhwYW5kO1xuXG5cdFx0XHRcdFx0XHRsYXp5c2l6ZXMuX2RlZkV4ID0gZGVmYXVsdEV4cGFuZDtcblxuXHRcdFx0XHRcdFx0cHJlbG9hZEV4cGFuZCA9IGRlZmF1bHRFeHBhbmQgKiBsYXp5U2l6ZXNDZmcuZXhwRmFjdG9yO1xuXHRcdFx0XHRcdFx0aEZhYyA9IGxhenlTaXplc0NmZy5oRmFjO1xuXHRcdFx0XHRcdFx0aXNCb2R5SGlkZGVuID0gbnVsbDtcblxuXHRcdFx0XHRcdFx0aWYoY3VycmVudEV4cGFuZCA8IHByZWxvYWRFeHBhbmQgJiYgaXNMb2FkaW5nIDwgMSAmJiBsb3dSdW5zID4gMiAmJiBsb2FkTW9kZSA+IDIgJiYgIWRvY3VtZW50LmhpZGRlbil7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRFeHBhbmQgPSBwcmVsb2FkRXhwYW5kO1xuXHRcdFx0XHRcdFx0XHRsb3dSdW5zID0gMDtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZihsb2FkTW9kZSA+IDEgJiYgbG93UnVucyA+IDEgJiYgaXNMb2FkaW5nIDwgNil7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRFeHBhbmQgPSBkZWZhdWx0RXhwYW5kO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudEV4cGFuZCA9IHNocmlua0V4cGFuZDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZihiZWZvcmVFeHBhbmRWYWwgIT09IGVsZW1FeHBhbmQpe1xuXHRcdFx0XHRcdFx0ZUx2VyA9IGlubmVyV2lkdGggKyAoZWxlbUV4cGFuZCAqIGhGYWMpO1xuXHRcdFx0XHRcdFx0ZWx2SCA9IGlubmVySGVpZ2h0ICsgZWxlbUV4cGFuZDtcblx0XHRcdFx0XHRcdGVsZW1OZWdhdGl2ZUV4cGFuZCA9IGVsZW1FeHBhbmQgKiAtMTtcblx0XHRcdFx0XHRcdGJlZm9yZUV4cGFuZFZhbCA9IGVsZW1FeHBhbmQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmVjdCA9IGxhenlsb2FkRWxlbXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHRcdFx0XHRpZiAoKGVMYm90dG9tID0gcmVjdC5ib3R0b20pID49IGVsZW1OZWdhdGl2ZUV4cGFuZCAmJlxuXHRcdFx0XHRcdFx0KGVMdG9wID0gcmVjdC50b3ApIDw9IGVsdkggJiZcblx0XHRcdFx0XHRcdChlTHJpZ2h0ID0gcmVjdC5yaWdodCkgPj0gZWxlbU5lZ2F0aXZlRXhwYW5kICogaEZhYyAmJlxuXHRcdFx0XHRcdFx0KGVMbGVmdCA9IHJlY3QubGVmdCkgPD0gZUx2VyAmJlxuXHRcdFx0XHRcdFx0KGVMYm90dG9tIHx8IGVMcmlnaHQgfHwgZUxsZWZ0IHx8IGVMdG9wKSAmJlxuXHRcdFx0XHRcdFx0KGxhenlTaXplc0NmZy5sb2FkSGlkZGVuIHx8IGlzVmlzaWJsZShsYXp5bG9hZEVsZW1zW2ldKSkgJiZcblx0XHRcdFx0XHRcdCgoaXNDb21wbGV0ZWQgJiYgaXNMb2FkaW5nIDwgMyAmJiAhZWxlbUV4cGFuZFZhbCAmJiAobG9hZE1vZGUgPCAzIHx8IGxvd1J1bnMgPCA0KSkgfHwgaXNOZXN0ZWRWaXNpYmxlKGxhenlsb2FkRWxlbXNbaV0sIGVsZW1FeHBhbmQpKSl7XG5cdFx0XHRcdFx0XHR1bnZlaWxFbGVtZW50KGxhenlsb2FkRWxlbXNbaV0pO1xuXHRcdFx0XHRcdFx0bG9hZGVkU29tZXRoaW5nID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGlmKGlzTG9hZGluZyA+IDkpe2JyZWFrO31cblx0XHRcdFx0XHR9IGVsc2UgaWYoIWxvYWRlZFNvbWV0aGluZyAmJiBpc0NvbXBsZXRlZCAmJiAhYXV0b0xvYWRFbGVtICYmXG5cdFx0XHRcdFx0XHRpc0xvYWRpbmcgPCA0ICYmIGxvd1J1bnMgPCA0ICYmIGxvYWRNb2RlID4gMiAmJlxuXHRcdFx0XHRcdFx0KHByZWxvYWRFbGVtc1swXSB8fCBsYXp5U2l6ZXNDZmcucHJlbG9hZEFmdGVyTG9hZCkgJiZcblx0XHRcdFx0XHRcdChwcmVsb2FkRWxlbXNbMF0gfHwgKCFlbGVtRXhwYW5kVmFsICYmICgoZUxib3R0b20gfHwgZUxyaWdodCB8fCBlTGxlZnQgfHwgZUx0b3ApIHx8IGxhenlsb2FkRWxlbXNbaV1bX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ2ZnLnNpemVzQXR0cikgIT0gJ2F1dG8nKSkpKXtcblx0XHRcdFx0XHRcdGF1dG9Mb2FkRWxlbSA9IHByZWxvYWRFbGVtc1swXSB8fCBsYXp5bG9hZEVsZW1zW2ldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGF1dG9Mb2FkRWxlbSAmJiAhbG9hZGVkU29tZXRoaW5nKXtcblx0XHRcdFx0XHR1bnZlaWxFbGVtZW50KGF1dG9Mb2FkRWxlbSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIHRocm90dGxlZENoZWNrRWxlbWVudHMgPSB0aHJvdHRsZShjaGVja0VsZW1lbnRzKTtcblxuXHRcdHZhciBzd2l0Y2hMb2FkaW5nQ2xhc3MgPSBmdW5jdGlvbihlKXtcblx0XHRcdHZhciBlbGVtID0gZS50YXJnZXQ7XG5cblx0XHRcdGlmIChlbGVtLl9sYXp5Q2FjaGUpIHtcblx0XHRcdFx0ZGVsZXRlIGVsZW0uX2xhenlDYWNoZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXNldFByZWxvYWRpbmcoZSk7XG5cdFx0XHRhZGRDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcubG9hZGVkQ2xhc3MpO1xuXHRcdFx0cmVtb3ZlQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ2ZnLmxvYWRpbmdDbGFzcyk7XG5cdFx0XHRhZGRSZW1vdmVMb2FkRXZlbnRzKGVsZW0sIHJhZlN3aXRjaExvYWRpbmdDbGFzcyk7XG5cdFx0XHR0cmlnZ2VyRXZlbnQoZWxlbSwgJ2xhenlsb2FkZWQnKTtcblx0XHR9O1xuXHRcdHZhciByYWZlZFN3aXRjaExvYWRpbmdDbGFzcyA9IHJBRkl0KHN3aXRjaExvYWRpbmdDbGFzcyk7XG5cdFx0dmFyIHJhZlN3aXRjaExvYWRpbmdDbGFzcyA9IGZ1bmN0aW9uKGUpe1xuXHRcdFx0cmFmZWRTd2l0Y2hMb2FkaW5nQ2xhc3Moe3RhcmdldDogZS50YXJnZXR9KTtcblx0XHR9O1xuXG5cdFx0dmFyIGNoYW5nZUlmcmFtZVNyYyA9IGZ1bmN0aW9uKGVsZW0sIHNyYyl7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRlbGVtLmNvbnRlbnRXaW5kb3cubG9jYXRpb24ucmVwbGFjZShzcmMpO1xuXHRcdFx0fSBjYXRjaChlKXtcblx0XHRcdFx0ZWxlbS5zcmMgPSBzcmM7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciBoYW5kbGVTb3VyY2VzID0gZnVuY3Rpb24oc291cmNlKXtcblx0XHRcdHZhciBjdXN0b21NZWRpYTtcblxuXHRcdFx0dmFyIHNvdXJjZVNyY3NldCA9IHNvdXJjZVtfZ2V0QXR0cmlidXRlXShsYXp5U2l6ZXNDZmcuc3Jjc2V0QXR0cik7XG5cblx0XHRcdGlmKCAoY3VzdG9tTWVkaWEgPSBsYXp5U2l6ZXNDZmcuY3VzdG9tTWVkaWFbc291cmNlW19nZXRBdHRyaWJ1dGVdKCdkYXRhLW1lZGlhJykgfHwgc291cmNlW19nZXRBdHRyaWJ1dGVdKCdtZWRpYScpXSkgKXtcblx0XHRcdFx0c291cmNlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBjdXN0b21NZWRpYSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHNvdXJjZVNyY3NldCl7XG5cdFx0XHRcdHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ3NyY3NldCcsIHNvdXJjZVNyY3NldCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciBsYXp5VW52ZWlsID0gckFGSXQoZnVuY3Rpb24gKGVsZW0sIGRldGFpbCwgaXNBdXRvLCBzaXplcywgaXNJbWcpe1xuXHRcdFx0dmFyIHNyYywgc3Jjc2V0LCBwYXJlbnQsIGlzUGljdHVyZSwgZXZlbnQsIGZpcmVzTG9hZDtcblxuXHRcdFx0aWYoIShldmVudCA9IHRyaWdnZXJFdmVudChlbGVtLCAnbGF6eWJlZm9yZXVudmVpbCcsIGRldGFpbCkpLmRlZmF1bHRQcmV2ZW50ZWQpe1xuXG5cdFx0XHRcdGlmKHNpemVzKXtcblx0XHRcdFx0XHRpZihpc0F1dG8pe1xuXHRcdFx0XHRcdFx0YWRkQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ2ZnLmF1dG9zaXplc0NsYXNzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoJ3NpemVzJywgc2l6ZXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNyY3NldCA9IGVsZW1bX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ2ZnLnNyY3NldEF0dHIpO1xuXHRcdFx0XHRzcmMgPSBlbGVtW19nZXRBdHRyaWJ1dGVdKGxhenlTaXplc0NmZy5zcmNBdHRyKTtcblxuXHRcdFx0XHRpZihpc0ltZykge1xuXHRcdFx0XHRcdHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblx0XHRcdFx0XHRpc1BpY3R1cmUgPSBwYXJlbnQgJiYgcmVnUGljdHVyZS50ZXN0KHBhcmVudC5ub2RlTmFtZSB8fCAnJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmaXJlc0xvYWQgPSBkZXRhaWwuZmlyZXNMb2FkIHx8ICgoJ3NyYycgaW4gZWxlbSkgJiYgKHNyY3NldCB8fCBzcmMgfHwgaXNQaWN0dXJlKSk7XG5cblx0XHRcdFx0ZXZlbnQgPSB7dGFyZ2V0OiBlbGVtfTtcblxuXHRcdFx0XHRhZGRDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcubG9hZGluZ0NsYXNzKTtcblxuXHRcdFx0XHRpZihmaXJlc0xvYWQpe1xuXHRcdFx0XHRcdGNsZWFyVGltZW91dChyZXNldFByZWxvYWRpbmdUaW1lcik7XG5cdFx0XHRcdFx0cmVzZXRQcmVsb2FkaW5nVGltZXIgPSBzZXRUaW1lb3V0KHJlc2V0UHJlbG9hZGluZywgMjUwMCk7XG5cdFx0XHRcdFx0YWRkUmVtb3ZlTG9hZEV2ZW50cyhlbGVtLCByYWZTd2l0Y2hMb2FkaW5nQ2xhc3MsIHRydWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoaXNQaWN0dXJlKXtcblx0XHRcdFx0XHRmb3JFYWNoLmNhbGwocGFyZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzb3VyY2UnKSwgaGFuZGxlU291cmNlcyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihzcmNzZXQpe1xuXHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBzcmNzZXQpO1xuXHRcdFx0XHR9IGVsc2UgaWYoc3JjICYmICFpc1BpY3R1cmUpe1xuXHRcdFx0XHRcdGlmKHJlZ0lmcmFtZS50ZXN0KGVsZW0ubm9kZU5hbWUpKXtcblx0XHRcdFx0XHRcdGNoYW5nZUlmcmFtZVNyYyhlbGVtLCBzcmMpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRlbGVtLnNyYyA9IHNyYztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihpc0ltZyAmJiAoc3Jjc2V0IHx8IGlzUGljdHVyZSkpe1xuXHRcdFx0XHRcdHVwZGF0ZVBvbHlmaWxsKGVsZW0sIHtzcmM6IHNyY30pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKGVsZW0uX2xhenlSYWNlKXtcblx0XHRcdFx0ZGVsZXRlIGVsZW0uX2xhenlSYWNlO1xuXHRcdFx0fVxuXHRcdFx0cmVtb3ZlQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ2ZnLmxhenlDbGFzcyk7XG5cblx0XHRcdHJBRihmdW5jdGlvbigpe1xuXHRcdFx0XHQvLyBQYXJ0IG9mIHRoaXMgY2FuIGJlIHJlbW92ZWQgYXMgc29vbiBhcyB0aGlzIGZpeCBpcyBvbGRlcjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NzczMSAoMjAxNSlcblx0XHRcdFx0dmFyIGlzTG9hZGVkID0gZWxlbS5jb21wbGV0ZSAmJiBlbGVtLm5hdHVyYWxXaWR0aCA+IDE7XG5cblx0XHRcdFx0aWYoICFmaXJlc0xvYWQgfHwgaXNMb2FkZWQpe1xuXHRcdFx0XHRcdGlmIChpc0xvYWRlZCkge1xuXHRcdFx0XHRcdFx0YWRkQ2xhc3MoZWxlbSwgJ2xzLWlzLWNhY2hlZCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzd2l0Y2hMb2FkaW5nQ2xhc3MoZXZlbnQpO1xuXHRcdFx0XHRcdGVsZW0uX2xhenlDYWNoZSA9IHRydWU7XG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0aWYgKCdfbGF6eUNhY2hlJyBpbiBlbGVtKSB7XG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBlbGVtLl9sYXp5Q2FjaGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgOSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVsZW0ubG9hZGluZyA9PSAnbGF6eScpIHtcblx0XHRcdFx0XHRpc0xvYWRpbmctLTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdHJ1ZSk7XG5cdFx0fSk7XG5cblx0XHR2YXIgdW52ZWlsRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtKXtcblx0XHRcdGlmIChlbGVtLl9sYXp5UmFjZSkge3JldHVybjt9XG5cdFx0XHR2YXIgZGV0YWlsO1xuXG5cdFx0XHR2YXIgaXNJbWcgPSByZWdJbWcudGVzdChlbGVtLm5vZGVOYW1lKTtcblxuXHRcdFx0Ly9hbGxvdyB1c2luZyBzaXplcz1cImF1dG9cIiwgYnV0IGRvbid0IHVzZS4gaXQncyBpbnZhbGlkLiBVc2UgZGF0YS1zaXplcz1cImF1dG9cIiBvciBhIHZhbGlkIHZhbHVlIGZvciBzaXplcyBpbnN0ZWFkIChpLmUuOiBzaXplcz1cIjgwdndcIilcblx0XHRcdHZhciBzaXplcyA9IGlzSW1nICYmIChlbGVtW19nZXRBdHRyaWJ1dGVdKGxhenlTaXplc0NmZy5zaXplc0F0dHIpIHx8IGVsZW1bX2dldEF0dHJpYnV0ZV0oJ3NpemVzJykpO1xuXHRcdFx0dmFyIGlzQXV0byA9IHNpemVzID09ICdhdXRvJztcblxuXHRcdFx0aWYoIChpc0F1dG8gfHwgIWlzQ29tcGxldGVkKSAmJiBpc0ltZyAmJiAoZWxlbVtfZ2V0QXR0cmlidXRlXSgnc3JjJykgfHwgZWxlbS5zcmNzZXQpICYmICFlbGVtLmNvbXBsZXRlICYmICFoYXNDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcuZXJyb3JDbGFzcykgJiYgaGFzQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ2ZnLmxhenlDbGFzcykpe3JldHVybjt9XG5cblx0XHRcdGRldGFpbCA9IHRyaWdnZXJFdmVudChlbGVtLCAnbGF6eXVudmVpbHJlYWQnKS5kZXRhaWw7XG5cblx0XHRcdGlmKGlzQXV0byl7XG5cdFx0XHRcdCBhdXRvU2l6ZXIudXBkYXRlRWxlbShlbGVtLCB0cnVlLCBlbGVtLm9mZnNldFdpZHRoKTtcblx0XHRcdH1cblxuXHRcdFx0ZWxlbS5fbGF6eVJhY2UgPSB0cnVlO1xuXHRcdFx0aXNMb2FkaW5nKys7XG5cblx0XHRcdGxhenlVbnZlaWwoZWxlbSwgZGV0YWlsLCBpc0F1dG8sIHNpemVzLCBpc0ltZyk7XG5cdFx0fTtcblxuXHRcdHZhciBhZnRlclNjcm9sbCA9IGRlYm91bmNlKGZ1bmN0aW9uKCl7XG5cdFx0XHRsYXp5U2l6ZXNDZmcubG9hZE1vZGUgPSAzO1xuXHRcdFx0dGhyb3R0bGVkQ2hlY2tFbGVtZW50cygpO1xuXHRcdH0pO1xuXG5cdFx0dmFyIGFsdExvYWRtb2RlU2Nyb2xsTGlzdG5lciA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRpZihsYXp5U2l6ZXNDZmcubG9hZE1vZGUgPT0gMyl7XG5cdFx0XHRcdGxhenlTaXplc0NmZy5sb2FkTW9kZSA9IDI7XG5cdFx0XHR9XG5cdFx0XHRhZnRlclNjcm9sbCgpO1xuXHRcdH07XG5cblx0XHR2YXIgb25sb2FkID0gZnVuY3Rpb24oKXtcblx0XHRcdGlmKGlzQ29tcGxldGVkKXtyZXR1cm47fVxuXHRcdFx0aWYoRGF0ZS5ub3coKSAtIHN0YXJ0ZWQgPCA5OTkpe1xuXHRcdFx0XHRzZXRUaW1lb3V0KG9ubG9hZCwgOTk5KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cblx0XHRcdGlzQ29tcGxldGVkID0gdHJ1ZTtcblxuXHRcdFx0bGF6eVNpemVzQ2ZnLmxvYWRNb2RlID0gMztcblxuXHRcdFx0dGhyb3R0bGVkQ2hlY2tFbGVtZW50cygpO1xuXG5cdFx0XHRhZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBhbHRMb2FkbW9kZVNjcm9sbExpc3RuZXIsIHRydWUpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0XzogZnVuY3Rpb24oKXtcblx0XHRcdFx0c3RhcnRlZCA9IERhdGUubm93KCk7XG5cblx0XHRcdFx0bGF6eXNpemVzLmVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShsYXp5U2l6ZXNDZmcubGF6eUNsYXNzKTtcblx0XHRcdFx0cHJlbG9hZEVsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShsYXp5U2l6ZXNDZmcubGF6eUNsYXNzICsgJyAnICsgbGF6eVNpemVzQ2ZnLnByZWxvYWRDbGFzcyk7XG5cblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcigncGFnZXNob3cnLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdGlmIChlLnBlcnNpc3RlZCkge1xuXHRcdFx0XHRcdFx0dmFyIGxvYWRpbmdFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgbGF6eVNpemVzQ2ZnLmxvYWRpbmdDbGFzcyk7XG5cblx0XHRcdFx0XHRcdGlmIChsb2FkaW5nRWxlbWVudHMubGVuZ3RoICYmIGxvYWRpbmdFbGVtZW50cy5mb3JFYWNoKSB7XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdFx0bG9hZGluZ0VsZW1lbnRzLmZvckVhY2goIGZ1bmN0aW9uIChpbWcpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChpbWcuY29tcGxldGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW52ZWlsRWxlbWVudChpbWcpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmKHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyKXtcblx0XHRcdFx0XHRuZXcgTXV0YXRpb25PYnNlcnZlciggdGhyb3R0bGVkQ2hlY2tFbGVtZW50cyApLm9ic2VydmUoIGRvY0VsZW0sIHtjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUsIGF0dHJpYnV0ZXM6IHRydWV9ICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZG9jRWxlbVtfYWRkRXZlbnRMaXN0ZW5lcl0oJ0RPTU5vZGVJbnNlcnRlZCcsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXHRcdFx0XHRcdGRvY0VsZW1bX2FkZEV2ZW50TGlzdGVuZXJdKCdET01BdHRyTW9kaWZpZWQnLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcblx0XHRcdFx0XHRzZXRJbnRlcnZhbCh0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCA5OTkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXG5cdFx0XHRcdC8vLCAnZnVsbHNjcmVlbmNoYW5nZSdcblx0XHRcdFx0Wydmb2N1cycsICdtb3VzZW92ZXInLCAnY2xpY2snLCAnbG9hZCcsICd0cmFuc2l0aW9uZW5kJywgJ2FuaW1hdGlvbmVuZCddLmZvckVhY2goZnVuY3Rpb24obmFtZSl7XG5cdFx0XHRcdFx0ZG9jdW1lbnRbX2FkZEV2ZW50TGlzdGVuZXJdKG5hbWUsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZigoL2QkfF5jLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpKSl7XG5cdFx0XHRcdFx0b25sb2FkKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9ubG9hZCk7XG5cdFx0XHRcdFx0ZG9jdW1lbnRbX2FkZEV2ZW50TGlzdGVuZXJdKCdET01Db250ZW50TG9hZGVkJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cyk7XG5cdFx0XHRcdFx0c2V0VGltZW91dChvbmxvYWQsIDIwMDAwKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGxhenlzaXplcy5lbGVtZW50cy5sZW5ndGgpe1xuXHRcdFx0XHRcdGNoZWNrRWxlbWVudHMoKTtcblx0XHRcdFx0XHRyQUYuX2xzRmx1c2goKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aHJvdHRsZWRDaGVja0VsZW1lbnRzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRjaGVja0VsZW1zOiB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLFxuXHRcdFx0dW52ZWlsOiB1bnZlaWxFbGVtZW50LFxuXHRcdFx0X2FMU0w6IGFsdExvYWRtb2RlU2Nyb2xsTGlzdG5lcixcblx0XHR9O1xuXHR9KSgpO1xuXG5cblx0dmFyIGF1dG9TaXplciA9IChmdW5jdGlvbigpe1xuXHRcdHZhciBhdXRvc2l6ZXNFbGVtcztcblxuXHRcdHZhciBzaXplRWxlbWVudCA9IHJBRkl0KGZ1bmN0aW9uKGVsZW0sIHBhcmVudCwgZXZlbnQsIHdpZHRoKXtcblx0XHRcdHZhciBzb3VyY2VzLCBpLCBsZW47XG5cdFx0XHRlbGVtLl9sYXp5c2l6ZXNXaWR0aCA9IHdpZHRoO1xuXHRcdFx0d2lkdGggKz0gJ3B4JztcblxuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoJ3NpemVzJywgd2lkdGgpO1xuXG5cdFx0XHRpZihyZWdQaWN0dXJlLnRlc3QocGFyZW50Lm5vZGVOYW1lIHx8ICcnKSl7XG5cdFx0XHRcdHNvdXJjZXMgPSBwYXJlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NvdXJjZScpO1xuXHRcdFx0XHRmb3IoaSA9IDAsIGxlbiA9IHNvdXJjZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspe1xuXHRcdFx0XHRcdHNvdXJjZXNbaV0uc2V0QXR0cmlidXRlKCdzaXplcycsIHdpZHRoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZighZXZlbnQuZGV0YWlsLmRhdGFBdHRyKXtcblx0XHRcdFx0dXBkYXRlUG9seWZpbGwoZWxlbSwgZXZlbnQuZGV0YWlsKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR2YXIgZ2V0U2l6ZUVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbSwgZGF0YUF0dHIsIHdpZHRoKXtcblx0XHRcdHZhciBldmVudDtcblx0XHRcdHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cblx0XHRcdGlmKHBhcmVudCl7XG5cdFx0XHRcdHdpZHRoID0gZ2V0V2lkdGgoZWxlbSwgcGFyZW50LCB3aWR0aCk7XG5cdFx0XHRcdGV2ZW50ID0gdHJpZ2dlckV2ZW50KGVsZW0sICdsYXp5YmVmb3Jlc2l6ZXMnLCB7d2lkdGg6IHdpZHRoLCBkYXRhQXR0cjogISFkYXRhQXR0cn0pO1xuXG5cdFx0XHRcdGlmKCFldmVudC5kZWZhdWx0UHJldmVudGVkKXtcblx0XHRcdFx0XHR3aWR0aCA9IGV2ZW50LmRldGFpbC53aWR0aDtcblxuXHRcdFx0XHRcdGlmKHdpZHRoICYmIHdpZHRoICE9PSBlbGVtLl9sYXp5c2l6ZXNXaWR0aCl7XG5cdFx0XHRcdFx0XHRzaXplRWxlbWVudChlbGVtLCBwYXJlbnQsIGV2ZW50LCB3aWR0aCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciB1cGRhdGVFbGVtZW50c1NpemVzID0gZnVuY3Rpb24oKXtcblx0XHRcdHZhciBpO1xuXHRcdFx0dmFyIGxlbiA9IGF1dG9zaXplc0VsZW1zLmxlbmd0aDtcblx0XHRcdGlmKGxlbil7XG5cdFx0XHRcdGkgPSAwO1xuXG5cdFx0XHRcdGZvcig7IGkgPCBsZW47IGkrKyl7XG5cdFx0XHRcdFx0Z2V0U2l6ZUVsZW1lbnQoYXV0b3NpemVzRWxlbXNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHZhciBkZWJvdW5jZWRVcGRhdGVFbGVtZW50c1NpemVzID0gZGVib3VuY2UodXBkYXRlRWxlbWVudHNTaXplcyk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0XzogZnVuY3Rpb24oKXtcblx0XHRcdFx0YXV0b3NpemVzRWxlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGxhenlTaXplc0NmZy5hdXRvc2l6ZXNDbGFzcyk7XG5cdFx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlZFVwZGF0ZUVsZW1lbnRzU2l6ZXMpO1xuXHRcdFx0fSxcblx0XHRcdGNoZWNrRWxlbXM6IGRlYm91bmNlZFVwZGF0ZUVsZW1lbnRzU2l6ZXMsXG5cdFx0XHR1cGRhdGVFbGVtOiBnZXRTaXplRWxlbWVudFxuXHRcdH07XG5cdH0pKCk7XG5cblx0dmFyIGluaXQgPSBmdW5jdGlvbigpe1xuXHRcdGlmKCFpbml0LmkgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSl7XG5cdFx0XHRpbml0LmkgPSB0cnVlO1xuXHRcdFx0YXV0b1NpemVyLl8oKTtcblx0XHRcdGxvYWRlci5fKCk7XG5cdFx0fVxuXHR9O1xuXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRpZihsYXp5U2l6ZXNDZmcuaW5pdCl7XG5cdFx0XHRpbml0KCk7XG5cdFx0fVxuXHR9KTtcblxuXHRsYXp5c2l6ZXMgPSB7XG5cdFx0Y2ZnOiBsYXp5U2l6ZXNDZmcsXG5cdFx0YXV0b1NpemVyOiBhdXRvU2l6ZXIsXG5cdFx0bG9hZGVyOiBsb2FkZXIsXG5cdFx0aW5pdDogaW5pdCxcblx0XHR1UDogdXBkYXRlUG9seWZpbGwsXG5cdFx0YUM6IGFkZENsYXNzLFxuXHRcdHJDOiByZW1vdmVDbGFzcyxcblx0XHRoQzogaGFzQ2xhc3MsXG5cdFx0ZmlyZTogdHJpZ2dlckV2ZW50LFxuXHRcdGdXOiBnZXRXaWR0aCxcblx0XHRyQUY6IHJBRixcblx0fTtcblxuXHRyZXR1cm4gbGF6eXNpemVzO1xufVxuKSk7XG4iLCI8c2NyaXB0PlxuICBpbXBvcnQgJ2xhenlzaXplcyc7ICBcbiAgXG4gIGV4cG9ydCBsZXQgc3JjO1xuICBleHBvcnQgbGV0IHNyY3NldDtcbiAgZXhwb3J0IGxldCBjYXB0aW9uO1xuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXIgYmlnXCI+XG4gIDxpbWcgYWx0PVwiXCIgZGF0YS1zaXplcz1cImF1dG9cIiBkYXRhLXNyYz1cIntzcmN9XCIgZGF0YS1zcmNzZXQ9XCJ7c3Jjc2V0fVwiIGNsYXNzPVwibGF6eWxvYWRcIiAvPlxuICA8cD57Y2FwdGlvbn08L3A+XG48L2Rpdj5cblxuPHN0eWxlPlxuXHQuaW1hZ2UtY29udGFpbmVyIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHQvKiBtYXgtd2lkdGg6IDQwMHB4OyAqL1xuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xuXHR9XG5cblx0LmltYWdlLWNvbnRhaW5lci5iaWcge1xuXHRcdGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuXHRcdGdyaWQtY29sdW1uLWVuZDogc3BhbiA1O1xuXHR9XG5cblx0LmltYWdlLWNvbnRhaW5lci5iaWc6bnRoLWNoaWxkKGV2ZW4pIHtcblx0XHRncmlkLWNvbHVtbi1zdGFydDogNjtcblx0fVx0ICBcbjwvc3R5bGU+XG4iLCI8c2NyaXB0PlxuICBleHBvcnQgbGV0IHZhbHVlO1xuPC9zY3JpcHQ+XG5cbjxwPnt2YWx1ZX08L3A+XG5cbjxzdHlsZT5cblxuPC9zdHlsZT4iLCI8c2NyaXB0PlxuICBpbXBvcnQgKiBhcyB0cmFuc2Zvcm1lZERvYyBmcm9tICcuLi8uLi9kYXRhL3RyYW5zZm9ybWVkLWRvYy5qc29uJzsgIFxuICBpbXBvcnQgSW1hZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9JbWFnZS5zdmVsdGUnO1xuICBpbXBvcnQgVGV4dCBmcm9tICcuLi9jb21wb25lbnRzL1RleHQuc3ZlbHRlJ1xuICBcbiAgZXhwb3J0IGxldCBwYWdlTmFtZTtcbiAgY29uc3QgcGFnZSA9IHRyYW5zZm9ybWVkRG9jW3BhZ2VOYW1lXTtcbjwvc2NyaXB0PlxuXG57I2VhY2ggcGFnZSBhcyB7dHlwZSwgdmFsdWV9fVxuICB7I2lmIHR5cGUgPT09ICdpbWFnZSd9XG4gICAgPEltYWdlIHsuLi52YWx1ZX0gLz5cbiAgezplbHNlIGlmIHR5cGUgPT09ICd0ZXh0J31cbiAgICA8VGV4dCB7dmFsdWV9IC8+XG4gIHsvaWZ9XG57L2VhY2h9XG5cbjxzdHlsZT5cblxuPC9zdHlsZT5cbiIsIjxzY3JpcHQ+XG4gIGltcG9ydCBCb2R5IGZyb20gJy4uL2NvbXBvbmVudHMvQm9keS5zdmVsdGUnXG48L3NjcmlwdD5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+THVjaWFubyBGZWlqw6NvPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxkaXYgY2xhc3M9XCJncmlkXCI+XG4gIDxCb2R5IHBhZ2VOYW1lPXsnd29yayd9IC8+XG48L2Rpdj5cblxuPHN0eWxlPlxuXHRcblx0LmdyaWQge1xuXHRcdGRpc3BsYXk6IGdyaWQ7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XG5cdFx0Z3JpZC1nYXA6IDIwcHg7XG5cdH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbInRyYW5zZm9ybWVkRG9jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
