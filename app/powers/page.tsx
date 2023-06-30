export default function Powers(): JSX.Element {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1 className='text-4xl font-bold'>Powers</h1>
      <section className='flex z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex'>
        <h2 className='text-2xl font-bold m-4'>Build A Power</h2>
        <h4 className='text-2xl font-bold m-4'>
          Step 0: Create a small story paragraph explaining the effect
        </h4>
        <h4 className='text-2xl font-bold m-4'>
          Step 1: Pick a range for the power to be used at. Either touch, short,
          or long.
        </h4>
      </section>
      <section className='flex z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex'>
        <h2 className='text-2xl font-bold m-4'>Example Powers</h2>
      </section>
    </main>
  )
}
// Transcendence powers - 5xp plus build cost to a minimum of 5xp.
// Spend a point and flip. Pass is power triggers.

// Build a power
// Step 0: Create a small story paragraph explaining the effect
// Step 1: Pick a range target can be at
// Step 2: Pick amount of targets or area of effect.
// Step 3: Pick the amount of turns it takes to activate.
// Step 4: Pick damage if it does any
// Step 5: Add each effect/catalyst/origin
// Step 6: choose how long the power lasts. Can include a in combat and out of combat length if required. A power is permanent until completion criteria is met if completion criteria is chosen.
// Step 7: decide on a flip target. Remember if you don’t flip cards for powers you can’t Crit to regain transient transcendence points.
// Step 8: present to gm/group for approval

// Range
// Touch - 3xp
// Short - 9xp
// Long - 18xp

// Amount of targets
// Self - 3xp
// 1 - 3xp
// 2 - 6xp
// 3 - 12xp
// 4 - 24xp
// 5 - 48xp ……..

// Area of effect from point of origin
// Metres squared
// 1m - 6xp
// 2m - 12xp
// 3m - 24xp
// 4m - 48xp

// Damage
// 3 card pick lowest - 3xp
// 2 card pick lowest - 9xp
// 1 card - 15xp
// 2 card pick highest - 24xp
// 3 card pick highest - 48xp
// Can inverse damage to be on yourself to get a discount on powers

// Time taken
// Instant 15xp
// 1 turn 6xp
// 2 turns 3xp
// 3+ turns no diff

// Lasting Effects
// Per turn - 3xp
// Non combat per minute - 6xp
// Completion criteria permanent- 21xp

// Effects/origin/catalysts
// Conjure a Element - 9 xp
// Manipulate existing element - 6xp
// Require a consumable - minus 6xp
// Mundane Effect - 3xp
// Debuff/Buff 1 skill - 6xp
// Debuff/Buff 1 attribute - 18xp
// Buff skill only applies against 1 target minus 3xp
// Buff attribute only applies against 1 target minus 9xp
// Can Debuff yourself or buff an enemy for a minus to xp cost.
// Grant small super natural ability - 18xp
// Grant major super natural ability - 48xp

// Target number
// 11+ - minus 48xp
// 9+ - minus 36xp
// 7+ - minus 21xp
// 5+ - minus 6xp
// 3+ - minus 3xp
// 2+ - minus 1xp
// Spend transcendence only - No xp diff

// Example Power
// Forked Transcendence
// You swell with the forces of the paths, at a fork you can pull more power than ever before.
// Base 5xp
// Range touch 3xp
// Target self 3xp
// Time to activate: instant 15xp
// Buff attribute: Transcendence 18xp
// Completion Criteria: Has used transcendence buff free transient points 2 times or this was activated with a buffed transcendence transient point (ie this is not chain activated to infinite loop)(21xp)
// Flip: none
// 60xp

// Counter
// You block a transcendent path by sheer will.
// Base 5xp
// Range long 18xp
// Target 1 3xp
// Time to activate: instant 15xp
// Debuff attribute: Transcendence 18xp
// Completion Criteria: Targeted character spends one transcendent transient point to shake off the counter. This transient point spend is not blocked by the Debuff. (21xp)
// Flip: none
// 80xp

// Firewall (natural)
// Calling on the elements you conjure a roaring flame wall. The fire burns up all around if not contained or extinguished.
// Base 5xp
// Range long 18xp
// Time taken: 3 turns 0xp
// Area of effect: 2m^2 12xp
// Conjure element: Fire 9xp
// Completion criteria: burns out or is extinguished (21xp)
// Flip: transcendence only
// 65xp

// Witch fire wall
// You mouth spray a vial of witch brew towards the intended area. If the cast works a green witch fire wall springs into existence burning the souls of your enemies if they pass through.
// Base 5xp
// Range long 18xp
// Area of effect 2m^2 12xp
// Time taken 1 turn 6xp
// Duration: 3 turns (9xp)
// Damage: 1 card 15xp
// Consumable: vial of coffee gizzard brew minus 6xp
// Flip: 7+ minus 21xp
// 38xp

// Monstrous form
// Your skin stretches and mutates, you grow large teeth and brutal claws.
// Base 5xp
// Range: touch 3xp
// Target: self 3xp
// Time taken: 1 turn 6xp
// Completion Criteria: Takes a turn to transform back (21xp)
// Ability: Buff body 18xp
// Ability: Debuff Soul - minus 18xp
// Flip: transcendence only
// 38xp

// Mark Prey
// The quarry is in sight. The hunt has begun.
// Base: 5xp
// Range: Long 18xp
// Target: 1 3xp
// Time taken: instant 15xp
// Completion Criteria: The target moves more than 2 kilometres away or the hunter casts this again on a different target (21xp)
// Ability: you know the direction of the target and the approximate distance to closest 100m (grant minor supernatural ability 18xp)
// Ability: tracking, shadowing, perception skill is buffed when used on target (skill buff against 1 target (3 of) 9xp)
// Ability: body attribute is buffed when used on target (attribute buffed against 1 target 9xp)
// Flip: just transcendence no xp diff
// Total: 98xp

// Wither
// The bones twist as the muscles tense and tear. The joints cease and the breath grows shallow.
// Base cost 5 xp
// Range: Long 18xp
// Target: 1 3xp
// Damage: 2 card pick lowest 9xp
// Lasting Effects: 3 turns 9xp
// Effect: Debuff body attribute 18xp
// Flip: 7+ minus 21xp
// Total cost = 41xp

// Devils Contract
// You create a contract that is sealed by the laws of the darkness. Binding and forbidden to be broken or else feel the effects of the curse.
// Contracts must stipulate how to lift a curse if broken for a the devil is in the details.
// Base cost 5xp
// Range: touch 3xp
// Targets: 1 3xp
// Targets: self 3xp
// Completion Criteria: Contract fulfilled or broken. All contracts must stipulate how to lift the curse. 21xp
// Ability: Cursed - the contract breaker becomes cursed. All flips start Debuffed until the curse is lifted. Also other parties of the contract know the breakers location until curse is lifted. (Grant major super natural ability 48xp)
// Flip: none transcendence only 0xp
// Total - 83xp

// Nocturnal
// You become a native of the dark, treating darkness as if it were daylight.
// Base: 5xp
// Range: touch 3xp
// Target: self 3xp
// Lasting effect: non combat 1 minute 6xp
// Lasting effect: combat 3 turns 9xp
// Ability: use senses in the dark as if it was daylight. (Grant minor supernatural effect 18xp)
// Flip: none transcendence only
// Total - 44xp

// Dehydration
// Leech the moisture from a living creature and it shall not live for long.
// Base: 5 xp
// Target: 1 3xp
// Range: short 9xp
// Damage: 1 card 15xp
// Catalyst: must be a living creature with blood. (Manipulate existing element 6xp)
// Flip: 9+ minus 36xp
// Total 5xp

// Harvest moisture
// Leech the moisture from a living water based organism to quench thirst and hydrate.
// Base: 5 xp
// Target: 1 3xp
// Range: touch 3xp
// Time taken: 3 turns 0xp
// Catalyst: must be a living organism with water content. (Manipulate existing element 6xp)
// Mundane Effect: you have had a drink of water, dehydration is now not a risk for another period of time. 3xp
// Flip: 7+ minus 21xp
// Total 5xp */
