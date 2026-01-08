ServerEvents.recipes(event => {
    // Heat Generator
    event.remove({ output: 'mekanismgenerators:heat_generator' })
    event.shaped('mekanismgenerators:heat_generator', [
        'IFI',
        'OSO',
        'CRC'
    ], {
        I: 'minecraft:iron_ingot',
        F: 'minecraft:furnace',
        O: 'mekanism:ingot_osmium',
        C: 'create:fluid_tank',
        R: 'minecraft:redstone',
        S: 'create:steam_engine'
    })

    // Bio Generator
    event.remove({ output: 'mekanismgenerators:bio_generator' })
    event.shaped('mekanismgenerators:bio_generator', [
        'CSC',
        'SPS',
        'CSC'
    ], {
        C: 'mekanism:basic_control_circuit',
        S: 'mekanism:steel_casing',
        P: '#c:fuels/bio'
    })

    // Wind Generator
    event.remove({ output: 'mekanismgenerators:wind_generator' })
    event.shaped('mekanismgenerators:wind_generator', [
        'CSC',
        'EGE',
        'CSC'
    ], {
        C: 'mekanism:basic_control_circuit',
        S: 'mekanism:steel_casing',
        G: 'createaddition:brass_rod',
        E: 'mekanism:energy_tablet'
    })

    // Solar Panel
    event.remove({ output: 'mekanismgenerators:solar_panel' })
    event.shaped('mekanismgenerators:solar_panel', [
        'CGC',
        'GIG',
        'CSC'
    ], {
        C: 'mekanism:basic_control_circuit',
        S: 'mekanism:steel_casing',
        I: 'create:industrial_iron_block',
        G: '#c:glass_panes'
    })
})