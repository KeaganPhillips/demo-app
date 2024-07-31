import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    input: ['app/components/web-components/_rollup.ts'],
    output: {
        file: 'public/js/web-components.js',
        format: 'iife'
    },
    plugins: [
        resolve(),
        babel({
            extensions: ['.js', '.ts'],
            "presets": ["@babel/preset-typescript"],
            "plugins": [
                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                "@babel/plugin-proposal-class-properties"
            ]
        })
    ]
};