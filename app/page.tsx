export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <h1>Suited</h1>
      </div>
    </main>
  )
}
/*52 card deck
Ace low = ace equals 1
Base mechanics
Contested - flip vs flip. High wins. Draw player wins
Target - flip vs Target Number. Equal to or Higher than wins.
Positive mod/Buff is add additional card to flip and flipper picks.
Negative mod/Debuff is add an additional card to flip and pick lowest.
Example flip with mods
Thief with lock pick skill is trying to crack a safe in a crypt which is a safe location but is not well lit.
Identify mods
It’s dark - neg
It’s a well manufactured safe - neg
Thief has master crafted picks - positive
Thief found first half of code previously - positive
Thief has all the time in the world since he stole the whole safe and bought it to his crypt - positive
So the flip equals
Base flat 1 card (0) + 2 negatives (-2) = 3 cards pick lowest
-2 + 3 positives(+3) = 2 cards pick highest

Quick NPC
Transient pool - 3-15 drives powers and ca. be spent on flips.
Body skills- 0-3
Mind skills- 0-3
Soul skills- 0-3
Powers
Health

Combat and health
Flip initiative skill. High card goes first. Initiative order is set for entire combat
Characters take turns.
⁃ a turn is made up of 2 components
⁃ Instant action, something that can be done in a very short time, or a power with time taken equal to instant
⁃ Basic action either move/attack/operate/skill check/power

Attack action
⁃ flip against targets defence skill (block/parry/dodge)
⁃ If equal to or greater than defence the attack hits
⁃ Flip damage
⁃ * ace to 5 = 1 wound * 6 - 10 = 2 wounds * 11+ = 3 wounds


4 attributes
If an attribute is buffed it can use transient points without deducting any from the pool.
GM Note - transcendence buffing powers should be very limited, see example power forked transcendence for a guide. this one power should be enough to allow power centric characters without over powering them.
GM note - transcendence Debuff powers should be very limited, see example power Counter for guide. This one power should allow enough power defence without crippling power centric characters.
If an attribute suffers Debuff it cannot spend its transient points or regain transient points.

Spades - Body - Physical capability
Clubs - Mind - Intellectual capability
Hearts - Soul - Social capability

Diamonds - Transcendence - Super capability

Each attribute has transient points to spend to add a card to a flip. Refreshes on a Crit.
A full nights rest resets body, mind and soul transient points to full.

Transcendence transient points can be regained by walking the path in game. Each character has a path which is made up of a current quest, a code of conduct, and a higher purpose. Transient points are awarded when the character role plays to the path, this is a great down time thing to do for characters to refuel themselves.
A current quest is to do with this characters drive, and what the next step is along that path. Should be a large mission that has many small steps to take.
A code is a list of at least 3 but preferably 5 dot points that highlight your characters values, roleplaying to these should reward transient transcendence points.
Higher purpose is something the character belongs to outside himself, whether that be a religion, group or a organisation, lady/lord, country, gang, crew, etc. Whenever the character sacrifices himself for the higher purpose or helps further the higher purposes goals a point should be rewarded.


Skills attached to suits for associated attribute.
Skill flip turns up associated suit it’s a critical.
If the flip is a critical and a fail something complicated the scene.
If the flip is a critical and a pass something adds to the scene.
On a critical pass or fail you refresh a transient point to associated attribute.

+ skill rating to flips

Xp
Average should be between 10-15xp awarded per session
Skills new rating times 15xp
Attribute new rating times 45xp

Transcendence powers - 5xp plus build cost to a minimum of 5xp.
Spend a point and flip. Pass is power triggers.

Build a power
Step 0: Create a small story paragraph explaining the effect
Step 1: Pick a range target can be at
Step 2: Pick amount of targets or area of effect.
Step 3: Pick the amount of turns it takes to activate.
Step 4: Pick damage if it does any
Step 5: Add each effect/catalyst/origin
Step 6: choose how long the power lasts. Can include a in combat and out of combat length if required. A power is permanent until completion criteria is met if completion criteria is chosen.
Step 7: decide on a flip target. Remember if you don’t flip cards for powers you can’t Crit to regain transient transcendence points.
Step 8: present to gm/group for approval

Range
Touch - 3xp
Short - 9xp
Long - 18xp

Amount of targets
Self - 3xp
1 - 3xp
2 - 6xp
3 - 12xp
4 - 24xp
5 - 48xp ……..

Area of effect from point of origin
Metres squared
1m - 6xp
2m - 12xp
3m - 24xp
4m - 48xp

Damage
3 card pick lowest - 3xp
2 card pick lowest - 9xp
1 card - 15xp
2 card pick highest - 24xp
3 card pick highest - 48xp
Can inverse damage to be on yourself to get a discount on powers

Time taken
Instant 15xp
1 turn 6xp
2 turns 3xp
3+ turns no diff

Lasting Effects
Per turn - 3xp
Non combat per minute - 6xp
Completion criteria permanent- 21xp

Effects/origin/catalysts
Conjure a Element - 9 xp
Manipulate existing element - 6xp
Require a consumable - minus 6xp
Mundane Effect - 3xp
Debuff/Buff 1 skill - 6xp
Debuff/Buff 1 attribute - 18xp
Buff skill only applies against 1 target minus 3xp
Buff attribute only applies against 1 target minus 9xp
Can Debuff yourself or buff an enemy for a minus to xp cost.
Grant small super natural ability - 18xp
Grant major super natural ability - 48xp

Target number
11+ - minus 48xp
9+ - minus 36xp
7+ - minus 21xp
5+ - minus 6xp
3+ - minus 3xp
2+ - minus 1xp
Spend transcendence only - No xp diff

Example Power
Forked Transcendence
You swell with the forces of the paths, at a fork you can pull more power than ever before.
Base 5xp
Range touch 3xp
Target self 3xp
Time to activate: instant 15xp
Buff attribute: Transcendence 18xp
Completion Criteria: Has used transcendence buff free transient points 2 times or this was activated with a buffed transcendence transient point (ie this is not chain activated to infinite loop)(21xp)
Flip: none
60xp

Counter
You block a transcendent path by sheer will.
Base 5xp
Range long 18xp
Target 1 3xp
Time to activate: instant 15xp
Debuff attribute: Transcendence 18xp
Completion Criteria: Targeted character spends one transcendent transient point to shake off the counter. This transient point spend is not blocked by the Debuff. (21xp)
Flip: none
80xp


Firewall (natural)
Calling on the elements you conjure a roaring flame wall. The fire burns up all around if not contained or extinguished.
Base 5xp
Range long 18xp
Time taken: 3 turns 0xp
Area of effect: 2m^2 12xp
Conjure element: Fire 9xp
Completion criteria: burns out or is extinguished (21xp)
Flip: transcendence only
65xp

Witch fire wall
You mouth spray a vial of witch brew towards the intended area. If the cast works a green witch fire wall springs into existence burning the souls of your enemies if they pass through.
Base 5xp
Range long 18xp
Area of effect 2m^2 12xp
Time taken 1 turn 6xp
Duration: 3 turns (9xp)
Damage: 1 card 15xp
Consumable: vial of coffee gizzard brew minus 6xp
Flip: 7+ minus 21xp
38xp

Monstrous form
Your skin stretches and mutates, you grow large teeth and brutal claws.
Base 5xp
Range: touch 3xp
Target: self 3xp
Time taken: 1 turn 6xp
Completion Criteria: Takes a turn to transform back (21xp)
Ability: Buff body 18xp
Ability: Debuff Soul - minus 18xp
Flip: transcendence only
38xp

Mark Prey
The quarry is in sight. The hunt has begun.
Base: 5xp
Range: Long 18xp
Target: 1 3xp
Time taken: instant 15xp
Completion Criteria: The target moves more than 2 kilometres away or the hunter casts this again on a different target (21xp)
Ability: you know the direction of the target and the approximate distance to closest 100m (grant minor supernatural ability 18xp)
Ability: tracking, shadowing, perception skill is buffed when used on target (skill buff against 1 target (3 of) 9xp)
Ability: body attribute is buffed when used on target (attribute buffed against 1 target 9xp)
Flip: just transcendence no xp diff
Total: 98xp

Wither
The bones twist as the muscles tense and tear. The joints cease and the breath grows shallow.
Base cost 5 xp
Range: Long 18xp
Target: 1 3xp
Damage: 2 card pick lowest 9xp
Lasting Effects: 3 turns 9xp
Effect: Debuff body attribute 18xp
Flip: 7+ minus 21xp
Total cost = 41xp

Devils Contract
You create a contract that is sealed by the laws of the darkness. Binding and forbidden to be broken or else feel the effects of the curse.
Contracts must stipulate how to lift a curse if broken for a the devil is in the details.
Base cost 5xp
Range: touch 3xp
Targets: 1 3xp
Targets: self 3xp
Completion Criteria: Contract fulfilled or broken. All contracts must stipulate how to lift the curse. 21xp
Ability: Cursed - the contract breaker becomes cursed. All flips start Debuffed until the curse is lifted. Also other parties of the contract know the breakers location until curse is lifted. (Grant major super natural ability 48xp)
Flip: none transcendence only 0xp
Total - 83xp

Nocturnal
You become a native of the dark, treating darkness as if it were daylight.
Base: 5xp
Range: touch 3xp
Target: self 3xp
Lasting effect: non combat 1 minute 6xp
Lasting effect: combat 3 turns 9xp
Ability: use senses in the dark as if it was daylight. (Grant minor supernatural effect 18xp)
Flip: none transcendence only
Total - 44xp

Dehydration
Leech the moisture from a living creature and it shall not live for long.
Base: 5 xp
Target: 1 3xp
Range: short 9xp
Damage: 1 card 15xp
Catalyst: must be a living creature with blood. (Manipulate existing element 6xp)
Flip: 9+ minus 36xp
Total 5xp

Harvest moisture
Leech the moisture from a living water based organism to quench thirst and hydrate.
Base: 5 xp
Target: 1 3xp
Range: touch 3xp
Time taken: 3 turns 0xp
Catalyst: must be a living organism with water content. (Manipulate existing element 6xp)
Mundane Effect: you have had a drink of water, dehydration is now not a risk for another period of time. 3xp
Flip: 7+ minus 21xp
Total 5xp */
