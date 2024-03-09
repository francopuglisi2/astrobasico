import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://francopuglis2.github.io',/* aqui colocarias el nombre de tu cuenta*/
    base: '/astrobasico',/* aqui colocarias el nombre de tu repositorio*/
    build: {
        assets: 'astro' /// muy importante
    }
});
