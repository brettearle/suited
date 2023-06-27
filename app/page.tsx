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
Attribute new rating times 45xp */
