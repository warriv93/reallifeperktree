# reallifeperktree

NextJS - A fallout influenced Perktree to keep track of personal real life attribute progress

Gamify life
— Personal real life attribute tracker

- In a video game looking up your characters stats, traits and skills is simple, just click on a button and there it is a beautiful screen listing everything intuetively for you.
- IRL it is complicated, but here it’s simple, click the trait, learn, progress.
  <img align="right" width="200" height="183" src="https://raw.githubusercontent.com/warriv93/reallifeperktree/master/screenshots/perktree.png">
  <img align="left" width="200" height="183" src="https://raw.githubusercontent.com/warriv93/reallifeperktree/master/screenshots/1.png">

  <img align="right" width="200" height="183" src="https://raw.githubusercontent.com/warriv93/reallifeperktree/master/screenshots/pricing.png">
  <img align="left" width="200" height="183" src="https://raw.githubusercontent.com/warriv93/reallifeperktree/master/screenshots/login.png">
  <img align="left" width="200" height="183" src="https://raw.githubusercontent.com/warriv93/reallifeperktree/master/screenshots/profile.png">

## Build

Testing out NextJS serverside rendering framework

Typescript

React hooks

reactjs-localstorage

Docker

### To run

yarn

yarn dev

(Test user: test / test)

### LIVE DEPLOYMENT

(API NOT YET LIVE)

LIVE at: https://reallifeperktree.warriv93.now.sh/

### Server API

NodeJS with Express

Authentication with Passport

#### Endpoints

##### /

returns "ok" if everything is ok

##### /user

###### POST /login

Check if user exists in database with given username and password.

returns User or {error: ""}

###### GET /logout

Destroy express session, logout Passport, redirect -> /

###### GET /all

get all users

###### POST /new

Saves the new user in database

if username is already taken -> error

###### PUT /update/:username

update User fields {} based on req.params.username

###### DELETE /delete/:id

###### GET /find/:username

Find and return User based on username

###### GET /ping

Returns status 200 if everything is ok

#### MongoDB

https://cloud.mongodb.com/v2/5dfb6613d5ec134c41316aa6#metrics/replicaSet/5e9d67ea9ec61f4aeafceb93/explorer/perktree/users/find

## Project description

Gamify life
— Personal real life attribute tracker

- In a video game looking up your characters stats, traits and skills is simple, just click on a button and there it is a beautiful screen listing everything intuetively for you.
- IRL it is complicated, but here it’s simple, click the trait, learn, progress.

### Pages

(Login / Create user)

(Profile)

- Shows profilepic, username, password,
- can edit, logout etc

(LIST of perks) (The perktree)

- Why isn't it this easy in real life? Ever wondered who you really are, what your stats, traits and skills are? Wouldn’t it be great to have a intuitive screen listing everything for you.

(INFO for each perk )

- Want to increase your charisma, well simply scroll to that trait and click it, displayed will be tons of information on how you can learn and increase your charisma.

(INPUT data for perk)

- A formula where the user adds there level of each perk.

### Features

#### Profile and login pages (User related)

Login, logout, create user, update user, delete user

(Profile page) If not logged in -> Login

#### INFO on perk

Display tips on how to increase your perk level

- resources for the user to become stronger

If not logged in -> Login

#### (LIST of Perks)

Display the level of each perk, and when clicked -> INFO for that perk

If not logged in -> Login

#### Questions for page - (INPUT data for Perk) A formula where the user adds there level of each perk.

If not logged in -> Login

##### Strength

"The state or quality of being strong; physical power or have a capacity to resist strain or stress; durability."

- skala, inputfält
- Physical raw strength - bänkpress max vikt klarat att lyfta
- MEASURE HIS OWN WEIGHT / by how much he can lift \* 5
- Bmi = längd, vikt —https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmi-m.htm
- Cm runt biseps
- Axelbredd
- Cm runt nacken

##### Endurance

"The act, quality, or power of withstanding hardship or stress."

- skala, sällan - ofta
- Uthållighet,
  — hur långt kan du jogga?
  — hur ofta tränar du?
- Hålla andan, tränar du på att hålla andan tex undervattnet ofta?
- Tränar du på gym eller joggar?
- Tränar du någon sport?
- Hälsa - hur bra mår du?

Category, Mental health

- Läser du ofta spännande böcker?
- Kollar du ofta på film eller liknande?
- Spelar du datorspel eller pusselliknandespel?
- Reser du iväg ibland och upplever nya kulturer och träffar nya människor?

Category, Diet

- Äter du frukost, lunch o middag varje dag?
  — äter du hemmalagad mat?
  — äter du färdigmat?
- Blodcirkulation (blodtryck) har du normalt blodtryck? - mål 130/80 mmHg (source https://xn--kollahjrtat-r8a.se/blodtryck/)
- ??cancer I släkten?, Sjukdomar, allergier, diabetes

##### Agility

"The state or quality of being agile; nimbleness."

- skala,1-10
- Vighet, kan du böja dig huvudstupa och nå ner till 1 knäna - 10 dina tår?
- Versatile, balance (hinderbana, hoppa på pinnar) hur ofta tränar du balansövningar tex yoga?
- Hur ofta är du ute och joggar?
- Snabbhet i rörelser - tränar du ofta någon kampsport?
- yoga, etc- har du tränat något som yoga, kampsporter etc?- skala, sällan - ofta

##### Charisma

"Personal magnetism or charm."

- skala 1-10
- Hur bra jag är på att tal, Formulering, tala inför grupp
- gillar generellt människor i min omgivning mig?
- Frågar du ofta öppna frågor i konversationer?
- Använder du mycket kroppsspråk för att förstärka dina poänger i konversationer?
- Håller du ögonkontakt med den du pratar med?
- Self-Esteem rate - hur bra självförtroende har du?
- Är du ofta optimistic?
- Är du ofta fullt närvarande i sociala situationer?
- Tränar du meditation, medveten närvaro ofta?

---

- ??Traits = stubborness, psychic, kind,
- ?? The big five: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism

##### Intelligence

"The ability to acquire, understand, and use knowledge."

- skala 1-10
- Förmåga att lär sig - är du öppen för att lära dig ny spännande information i nya områden?
- Brukar du lära dig ny information relativt snabbt?
- Hur ofta tar du in ny information genom att läsa böcker eller på annat sätt?
- Utmanar du dig själv ofta i områden? tex köra utan GPS?
- Hur ofta networkar du och lär dig nya saker genom att konversera med nya människor?
- Gillar du att lösa problem som uppstår i jobbet eller i vardagen?
- Gör du ofta aktiv meditation/ funderar djupt på områden?
- Hur ofta använder du eller studerar ett andra språk?
- World awareness - är du intresserad av vad som händer i världen?

---

- Kognitivt tänkande
- Logiskt tänkande
- Förmåga att anpassa sig
- IQ
- (Source https://blogs.scientificamerican.com/guest-blog/you-can-increase-your-intelligence-5-ways-to-maximize-your-cognitive-potential/)

---

### Future work

Integrate Life Values Self-Assessment Tests

#### Track:

- workplace and financial accomplishments ?
- Moral, alignment - right/wrong
- Reputation

#### Job suggestion

Average ** ex strength for a ** ex construction worker

## Resources:

Ranks of special
https://fallout.fandom.com/wiki/Fallout:_New_Vegas_SPECIAL
