import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            exports: 'named',
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
        },
    ],
    external: ['react', 'react-dom'], // <-- IMPORTANT
    plugins: [
        url({
            include: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
            limit: 8192, // Inline files < 8kb, copy others
            emitFiles: true,
            fileName: '[dirname][hash][extname]', // or use `[name][extname]`
            destDir: 'dist/assets', // destination folder for copied assets
        }),
        babel({
            presets: ['@babel/preset-env', '@babel/preset-react'],
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
        }),
        resolve(),
        commonjs(),
        postcss({
            modules: false,
        }),
    ],
};
