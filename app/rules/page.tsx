export default function Rules(): JSX.Element {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1 className='text-4xl font-bold'>The Rule Book</h1>
      <section className='flex z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex'>
        <h2 className='text-2xl font-bold m-4'>Introduction</h2>
      </section>
      <div className='max-w-3xl rounded-lg bg-teal p-8'>
        <h1 className='text-4xl font-bold mb-6 text-white'>The System</h1>
        <div className='bg-gunmetal rounded-lg p-6 mb-8'>
          <section>
            <h2 className='text-2xl font-bold mb-2'>The Deck</h2>
            <p>
              For this system, you will need a standard 52-card deck. In this
              deck, the Ace is considered low and equals 1.
            </p>
          </section>
        </div>
        <div className='bg-gunmetal rounded-lg p-6 mb-8'>
          <section>
            <h2 className='text-2xl font-bold mb-2'>Mechanics</h2>
            <ul>
              <li className='mt-4'>
                <h4 className=' text-1xl font-bold mb-2'>Contested Flips:</h4>{' '}
                When two characters are in direct opposition, such as in a
                competition or conflict, each player flips a card from the deck.
                The player with the higher value wins the contest. In the case
                of a tie, the player who initiated the contest wins.
              </li>
              <li className='mt-4'>
                <h4 className=' text-1xl font-bold mb-2'>Target Flips:</h4> For
                tasks that involve overcoming a set difficulty or target number,
                the player flips a card and compares it to the Target Number. If
                the value on the card is equal to or higher than the Target
                Number, the task is successful.
              </li>
            </ul>
          </section>
        </div>
        <div className='bg-gunmetal rounded-lg p-6 mb-8'>
          <section>
            <h2 className='text-2xl font-bold mb-2'>Modifiers</h2>
            <p>
              Modifiers can affect the outcome of a flip. There are positive and
              negative modifiers that adjust the number of cards flipped and how
              they are chosen.
            </p>
            <ul>
              <li className='mt-4'>
                <h4 className=' text-1xl font-bold mb-2'>
                  Positive Modifiers (Buffs):
                </h4>
                When a positive modifier is in effect, the player adds an
                additional card to their flip and gets to choose which card they
                use for the outcome.
              </li>
              <li className='mt-4'>
                <h4 className=' text-1xl font-bold mb-2'>
                  Negative Modifiers (Debuffs):
                </h4>
                When a negative modifier is in play, the player adds an extra
                card to their flip and must pick the lowest value card to
                determine the outcome.
              </li>
            </ul>
          </section>
        </div>
        <div className='bg-gunmetal rounded-lg p-6 mb-8'>
          <section>
            <h2 className='text-2xl font-bold mb-2'>Example with Modifiers</h2>
            <p>
              Let's walk through an example to illustrate how modifiers work:
            </p>
            <p className='mt-3'>
              Scenario: A skilled Thief is attempting to crack a safe located in
              a dark crypt. The safe is well manufactured, but the Thief has
              master-crafted lock picks. Additionally, the Thief has found the
              first half of the code previously, and he has all the time he
              needs since he stole the whole safe and brought it to his crypt.
            </p>
            <section>
              <h3 className='text-xl font-bold mt-4'>Modifiers</h3>
              <ul className='list-disc ml-6 mt-2'>
                <li className='mt-2'>It's dark: Negative modifier (-1)</li>
                <li className='mt-2'>
                  Well manufactured safe: Negative modifier (-1)
                </li>
                <li className='mt-2'>
                  Master crafted lock picks: Positive modifier (+1)
                </li>
                <li className='mt-2'>
                  Found first half of the code: Positive modifier (+1)
                </li>
                <li className='mt-2'>Ample time: Positive modifier (+1)</li>
              </ul>
            </section>
            <p className='mt-4'>Calculating the Flip:</p>
            <p className='mt-3'>
              Starting with the base flip of 1 card (0), we add the negative
              modifiers: -1 + -1 = -2, resulting in 3 cards flipped, with the
              lowest value chosen.
            </p>
            <p className='mt-3'>
              Next, we add the positive modifiers: +1 + +1 + +1 = +3, giving us
              2 cards to choose from, with the highest value selected.
            </p>
            <p className='mt-3'>
              By incorporating all the modifiers, the final flip consists of 2
              cards (pick the highest).
            </p>
            <p className='mt-3'>
              This system allows for a dynamic range of outcomes, with the
              modifiers providing a narrative context and strategic
              decision-making for the players.
            </p>
          </section>
        </div>
        <div className='bg-gunmetal rounded-lg p-6 mb-8'>
          <section>
            <h2 className='text-2xl font-bold mb-2'>Combat and Health</h2>
            <p>In combat, the following mechanics apply:</p>

            <section>
              <h3 className='text-xl font-bold mt-4'>Initiative</h3>
              <p>
                Flip your initiative skill to determine the order of action. The
                player with the highest card value goes first. This initiative
                order remains the same for the entire combat encounter, setting
                the rhythm and flow of battle.
              </p>
            </section>

            <section>
              <h3 className='text-xl font-bold mt-4'>Turns</h3>
              <p>
                Combatants take turns to act, showcasing their skills and
                strategies. Each turn is comprised of two components:
              </p>
              <ul className='list-disc ml-6 mt-2'>
                <li>
                  Instant Action: Something that can be done in a very short
                  time or a power with a time taken equal to instant. These
                  quick actions allow characters to react swiftly to the
                  changing tides of battle.
                </li>
                <li>
                  Basic Action: Choose from a range of options such as Move,
                  Attack, Operate, Skill Check, or Power. These actions shape
                  the narrative and outcome of combat, influencing the destiny
                  of your character.
                </li>
              </ul>
            </section>

            <section>
              <h3 className='text-xl font-bold mt-4'>Attack Action</h3>
              <p>
                Engage in intense combat with the attack action. Take aim at
                your target and flip against their defense skill, which includes
                block, parry, or dodge maneuvers. If your flip value matches or
                exceeds the target's defense value, your attack lands true,
                striking your foe with precision.
              </p>
              <p>
                Once the attack connects, flip once more to determine the damage
                inflicted. The result of this flip holds the key to the severity
                of the wound inflicted upon your adversary:
              </p>
              <ul className='list-disc ml-6 mt-2'>
                <li>
                  Ace to 5: Inflicts 1 wound, leaving a mark on your opponent's
                  resilience.
                </li>
                <li>
                  6 to 10: Inflicts 2 wounds, a substantial blow that shakes the
                  very foundations of their strength.
                </li>
                <li>
                  11 and above: Inflicts 3 wounds, a devastating strike that
                  sends shockwaves through their entire being.
                </li>
              </ul>
            </section>
          </section>
        </div>
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
