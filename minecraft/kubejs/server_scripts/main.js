ServerEvents.recipes(event => {
    event.remove({output: 'mekanism:digital_miner'})
    
    // Steel Casing
    event.remove({ id: 'mekanism:steel_casing' })
    event.recipes.create.mechanical_crafting('3x mekanism:steel_casing', [
        'SSSSS',
        'S E S',
        'SEIES',
        'S E S',
        'SSSSS'
    ], {
        S: 'mekanism:ingot_steel',
        E: 'createaddition:iron_rod',
        I: 'create:industrial_iron_block'
    })

    // Enrichment Chamber
    event.remove({ id: 'mekanism:enrichment_chamber' })
    event.shaped('mekanism:enrichment_chamber', [
        'COC',
        'CSC',
        'CIC'
    ], {
        C: 'mekanism:basic_control_circuit',
        O: 'mekanism:block_osmium',
        S: 'mekanism:steel_casing',
        I: 'create:industrial_iron_block'
    })

    // Crusher
    event.remove({ id: 'mekanism:crusher' })
    event.shaped('mekanism:crusher', [
        'CGC',
        'CSC',
        'CGC'
    ], {
        C: 'mekanism:basic_control_circuit',
        G: 'createaddition:brass_rod',
        S: 'mekanism:steel_casing'
    })

    // Metallurgic Infuser
    event.remove({ id: 'mekanism:metallurgic_infuser' })
    event.shaped('mekanism:metallurgic_infuser', [
        'IFI',
        'IOI',
        'RCR'
    ], {
        I: 'minecraft:iron_ingot',
        F: 'minecraft:furnace',
        O: 'create:industrial_iron_block',
        C: 'create:precision_mechanism',
        R: 'minecraft:redstone'
    })

    // Atomic Disassembler
    event.remove({ id: 'mekanism:atomic_disassembler' })
    event.shaped('mekanism:atomic_disassembler', [
        'NAN',
        'AUA',
        ' P '
    ], {
        N: 'minecraft:netherite_ingot',
        A: 'mekanism:alloy_atomic',
        U: 'mekanism:ultimate_control_circuit',
        P: 'create:precision_mechanism'
    })

    // Energy Tablet
    event.remove({ id: 'mekanism:energy_tablet' })
    event.shaped('mekanism:energy_tablet', [
        'GCG',
        'RIR',
        'GCG'
    ], {
        G: 'minecraft:gold_ingot',
        C: 'mekanism:basic_control_circuit',
        R: 'minecraft:redstone',
        I: 'create:industrial_iron_block'
    })
})