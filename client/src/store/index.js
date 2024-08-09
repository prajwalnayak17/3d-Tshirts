import { proxy } from 'valtio'

const state = proxy({
    current: 'home',
    // model: null,
    intro:true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
    generatedImageUrl: null
//     intro: true,
//   color: '#EFBD48',
//   isLogoTexture: true,
//   isFullTexture: false,
//   logoDecal: './threejs.png',
//   fullDecal: './threejs.png',
});

export default state;