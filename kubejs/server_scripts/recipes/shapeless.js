// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//

/**
 * @file Shapeless recipe additions for Valhelsia 6.
 * @copyright Valhelsia Inc 2023
 * @see shaped.js
 */

/**
 * Shapeless Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'valhelsia:crafting/';

  // Minecraft
  event.shapeless('minecraft:yellow_dye', 'forbidden_arcanus:yellow_orchid').id(`${ID_PREFIX}yellow_dye_from_yellow_orchid`);

  // Biomes 'o' Plenty
  event.shapeless('2x biomesoplenty:orange_sand', ['minecraft:sand', 'minecraft:red_sand']).id(`${ID_PREFIX}orange_sand`);

  // Minecraft
  event.shapeless('9x minecraft:copper_ingot', 'minecraft:copper_block').id(`${ID_PREFIX}copper_ingot`);

  // Create
  //event.shapeless('create:brass_sheet', ['#forge:ingots/brass', 'immersiveengineering:hammer']).id(`${ID_PREFIX}brass_sheet_hammering`);
  
  // Darker Depths
  //event.shapeless('darkerdepths:mossy_grimestone', ['darkerdepths:grimestone', 'darkerdepths:glowspire']).id(`${ID_PREFIX}mossy_grimestone`);

  // Ecologics
  //event.shapeless('4x ecologics:surface_moss', 'minecraft:moss_block').id(`${ID_PREFIX}surface_moss`);  

  // Farmer's Delight
  event.shapeless('farmersdelight:organic_compost', [
    'minecraft:dirt', 
    'farmersdelight:straw',
    'farmersdelight:straw',
    'minecraft:bone_meal',
    'minecraft:bone_meal',
    '#forge:dusts/wood',
    '#forge:dusts/wood',
    '#forge:dusts/wood',
    '#forge:dusts/wood'
  ]).id(`${ID_PREFIX}compost_from_sawdust`);


  // Quark
  //event.shapeless('2x quark:myalite', ['minecraft:cobblestone', 'minecraft:amethyst_block', 'quark:myalite_crystal']).id(`${ID_PREFIX}myalite`);
  //event.shapeless('quark:dusky_myalite', ['ars_nouveau:sourcestone', 'quark:myalite_crystal']).id(`${ID_PREFIX}dusky_myalite`);

});
