import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig(({ mode }) => {
    const isProduction = mode === 'production'
    return {
        plugins: [
            svelte({
                hot: !isProduction,
                emitCss: true
            })
        ]
    }
})
