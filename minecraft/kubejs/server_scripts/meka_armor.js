ServerEvents.recipes(event  => {
    
    event.remove({ output: 'mekanism:mekasuit_helmet' })

    event.recipes.createMechanicalCrafting(
        'mekanism:mekasuit_helmet',
        [
            "HHPHH",
            "HLNLH",
            "PUAUP",
            "HLNLH",
            "HHPHH"
        ],
        {
            H: 'mekanism:hdpe_sheet',
            P: 'mekanism:pellet_polonium',
            L: 'mekanism:pellet_plutonium',
            N: 'minecraft:netherite_block',
            U: 'mekanism:ultimate_control_circuit',
            A: 'create:netherite_diving_helmet'
        }
    )

    event.remove({ output: 'mekanism:mekasuit_bodyarmor' })

    event.recipes.createMechanicalCrafting(
        'mekanism:mekasuit_bodyarmor',
        [
            "HHPHH",
            "HLNLH",
            "PUAUP",
            "HLNLH",
            "HHPHH"
        ],
        {
            H: 'mekanism:hdpe_sheet',
            P: 'mekanism:pellet_polonium',
            L: 'mekanism:pellet_plutonium',
            N: 'minecraft:netherite_block',
            U: 'mekanism:ultimate_control_circuit',
            A: 'create:netherite_backtank'
        }
    )

    event.remove({ output: 'mekanism:mekasuit_pants' })

    event.recipes.createMechanicalCrafting(
        'mekanism:mekasuit_pants',
        [
            "HHPHH",
            "HLNLH",
            "PUAUP",
            "HLNLH",
            "HHPHH"
        ],
        {
            H: 'mekanism:hdpe_sheet',
            P: 'mekanism:pellet_polonium',
            L: 'mekanism:pellet_plutonium',
            N: 'minecraft:netherite_block',
            U: 'mekanism:ultimate_control_circuit',
            A: 'minecraft:netherite_leggings'
        }
    )

    event.remove({ output: 'mekanism:mekasuit_boots' })

    event.recipes.createMechanicalCrafting(
        'mekanism:mekasuit_boots',
        [
            "HHPHH",
            "HLNLH",
            "PUAUP",
            "HLNLH",
            "HHPHH"
        ],
        {
            H: 'mekanism:hdpe_sheet',
            P: 'mekanism:pellet_polonium',
            L: 'mekanism:pellet_plutonium',
            N: 'minecraft:netherite_block',
            U: 'mekanism:ultimate_control_circuit',
            A: 'create:netherite_diving_boots'
        }
    )
})