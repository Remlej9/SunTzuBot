require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const schedule = require('node-schedule');

var quotes = [
'*"Appear weak when you are strong, and strong when you are weak"*',
'*"The supreme art of war is to subdue the enemy without fighting"*',
'*"If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle"*',
'*"Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt"*',
'*"Supreme excellence consists of breaking the enemys resistance without fighting"*',
'*"All warfare is based on deception. Hence, when we are able to attack, we must seem unable; when using our forces, we must appear inactive; when we are near, we must make the enemy believe we are far away; when far away, we must make him believe we are near"*',
'*"In the midst of chaos, there is also opportunity"*',
'*"Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win"*',
'*"If your enemy is secure at all points, be prepared for him. If he is in superior strength, evade him. If your opponent is temperamental, seek to irritate him. Pretend to be weak, that he may grow arrogant. If he is taking his ease, give him no rest. If his forces are united, separate them. If sovereign and subject are in accord, put division between them. Attack him where he is unprepared, appear where you are not expected"*',
'*"The greatest victory is that which requires no battle"*',
'*"To know your Enemy, you must become your Enemy"*',
'*"Engage people with what they expect; it is what they are able to discern and confirms their projections. It settles them into predictable patterns of response, occupying their minds while you wait for the extraordinary moment — that which they cannot anticipate"*',
'*"There is no instance of a nation benefitting from prolonged warfare"*',
'*"Treat your men as you would your own beloved sons. And they will follow you into the deepest valley"*',
'*"Even the finest sword plunged into salt water will eventually rust"*',
'*"Move swift as the Wind and closely-formed as the Wood. Attack like the Fire and be still as the Mountain"*',
'*"When you surround an army, leave an outlet free. Do not press a desperate foe too hard"*',
'*"Opportunities multiply as they are seized"*',
'*"There are not more than five musical notes, yet the combinations of these five give rise to more melodies than can ever be heard"*',
'*"There are not more than five primary colours, yet in combination they produce more hues than can ever been seen"*',
'*"There are not more than five cardinal tastes, yet combinations of them yield more flavours than can ever be tasted"*',
'*"The art of war is of vital importance to the State. It is a matter of life and death, a road either to safety or to ruin. Hence it is a subject of inquiry which can on no account be neglected"*',
'*"When the enemy is relaxed, make them toil. When full, starve them. When settled, make them move"*',
'*"Who wishes to fight must first count the cost"*',
'*"If you wait by the river long enough, the bodies of your enemies will float by"*',
'*"Know yourself and you will win all battles"*',
'*"To win one hundred victories in one hundred battles is not the acme of skill. To subdue the enemy without fighting is the acme of skill"*',
'*"So in war, the way is to avoid what is strong, and strike at what is weak"*',
'*"Be extremely subtle even to the point of formlessness. Be extremely mysterious even to the point of soundlessness. Thereby you can be the director of the opponents fate"*',
'*"When strong, avoid them. If of high morale, depress them. Seem humble to fill them with conceit. If at ease, exhaust them. If united, separate them. Attack their weaknesses. Emerge to their surprise"*',
'*"Build your opponent a golden bridge to retreat across"*',
'*"What the ancients called a clever fighter is one who not only wins, but excels in winning with ease"*',
'*"The wise warrior avoids the battle"*',
'*"The whole secret lies in confusing the enemy, so that he cannot fathom our real intent"*',
'*"Rouse him, and learn the principle of his activity or inactivity. Force him to reveal himself, so as to find out his vulnerable spots"*',
'*"One may know how to conquer without being able to do it"*',
'*"One mark of a great soldier is that he fights on his own terms or fights not at all"*',
'*"You have to believe in yourself"*',
'*"If you know the enemy and know yourself, your victory will not stand in doubt; if you know Heaven and know Earth, you may make your victory complete"*',
'*"If the mind is willing, the flesh could go on and on without many things"*',
'*"He who is prudent and lies in wait for an enemy who is not, will be victorious"*',
'*"If your opponent is of choleric temper,  seek to irritate him.  Pretend to be weak, that he may grow arrogant"*',
'*"Thus the expert in battle moves the enemy, and is not moved by him"*',
'*"Attack is the secret of defense; defense is the planning of an attack"*',
'*"Anger may in time change to gladness; vexation may be succeeded by content. But a kingdom that has once been destroyed can never come again into being; nor can the dead ever be brought back to life"*',
'*"There are roads which must not be followed, armies which must not be attacked, towns which must not be besieged, positions which must not be contested, commands of the sovereign which must not be obeyed"*',
'*"When one treats people with benevolence, justice, and righteoousness, and reposes confidence in them, the army will be united in mind and all will be happy to serve their leaders"*',
'*"Great results, can be achieved with small forces"*',
'*"Attack him where he is unprepared, appear where you are not expected"*',
'*"Pretend inferiority and encourage his arrogance"*',
'*"Convince your enemy that he will gain very little by attacking you; this will diminish his enthusiasm"*',
'*"If quick, I survive. If not quick, I am lost. This is death"*',
'*"Ponder and deliberate before you make a move"*',
'*"If soldiers are punished before they have grown attached to you, they will not prove submissive; and, unless submissive, then will be practically useless. If, when the soldiers have become attached to you, punishments are not enforced, they will still be unless"*',
'*"Ultimate excellence lies not in winning every battle, but in defeating the enemy without ever fighting"*',
'*"Knowing the enemy enables you to take the offensive, knowing yourself enables you to stand on the defensive"*',
'*"He will win who knows when to fight and when not to fight"*',
'*"To secure ourselves against defeat lies in our own hands, but the opportunity of defeating the enemy is provided by the enemy himself"*',
'*"Bravery without forethought, causes a man to fight blindly and desperately like a mad bull.  Such an opponent, must not be encountered with brute force, but may be lured into an ambush and slain"*',
'*"If ignorant both of your enemy and yourself, you are certain to be in peril"*',
'*"The general who advances without coveting fame and retreats without fearing disgrace, whose only thought is to protect his country and do good service for his sovereign, is the jewel of the kingdom"*',
'*"mystify, mislead, and surprise the enemy"*',
'*"Wheels of justice gind slow but grind fine"*',
'*"Move not unless you see an advantage; use not your troops unless there is something to be gained; fight not unless the position is critical"*',
'*"It is easy to love your friend, but sometimes the hardest lesson to learn is to love your enemy"*',
'*"He will win who, prepared himself, waits to take the enemy unprepared"*',
'*"The skillful tactician may be likened to the shuai-jan. Now the shuai-jan is a snake that is found in the Chang mountains. Strike at its head, and you will be attacked by its tail; strike at its tail, and you will be attacked by its head; strike at its middle, and you will be attacked by head and tail both"*',
'*"Never venture, never win!"*',
'*"Water shapes its course according to the nature of the ground over which it flows; the soldier works out his victory in relatio to the foe whom he is facing"*',
'*"If his forces are united, separate them"*',
'*"Every battle is won before it’s ever fought"*',
'*"If he sends reinforcements everywhere, he will everywhere be weak"*',
'*"Begin by seizing something which your opponent holds dear; then he will be amenable to your will"*',
'*"Rewards for good service should not be deferred a single day"*',
'*"Be where your enemy is not"*',
'*"There are five dangerous faults which may affect a general:\\n(1) Recklessness, which leads to destruction;\\n(2) cowardice, which leads to capture;\\n(3) a hasty temper, which can be provoked by insults;\\n(4) a delicacy of honor which is sensitive to shame;\\n(5) over-solicitude for his men, which exposes him to worry and trouble"*',
'*"Disorder came from order, fear came from courage, weakness came from strength"*',
'*"But a kingdom that has once been destroyed can never come again into being; nor can the dead ever be brought back to life"*',
'*"Plan for what it is difficult while it is easy, do what is great while it is small"*',
'*"If words of command are not clear and distinct, if orders are not thoroughly understood, then the general is to blame. But, if orders are clear and the soldiers nevertheless disobey, then it is the fault of their oficers"*',
'*"Know your enemy and know yourself and you can fight a hundred battles without disaster"*',
'*"To fight and conquer in all your battles is not supreme excellence; supreme excellence consists in breaking the enemys resistance without fighting"*',
'*"It is only the enlightened ruler and the wise general who will use the highest intelligence of the army for the purposes of spying, and thereby they achieve great results"*',
'*"who does not know the evils of war cannot appreciate its benefits"*',
'*"the opportunity of defeating the enemy is provided by the enemy himself"*',
'*"Hence a commander who advances without any thought of winning personal fame and withdraws in spite of certain punishment, whose only concern is to protect his people and promote the interests of his ruler, is the nations treasure. Because he fusses over his men as if they were infants, they will accompany him into the deepest valleys; because he fusses over his men as if they were his own beloved sons, they will die by his side. If he is generous with them and yet they do not do as he tells them, if he loves them and yet they do not obey his commands, if he is so undisciplined with them that he cannot bring them into proper order, they will be like spoiled children who can be put to no good use at all"*',
'*"When your army has crossed the border, you should burn your boats and bridges, in order to make it clear to everybody that you have no hankering after home"*',
'*"Conform to the enemys tactics until a favorable opportunity offers; then come forth and engage in a battle that shall prove decisive"*',
'*"If you know yourself but not the enemy, for every victory gained you will also suffer a defeat"*',
'*"In battle, there are not more than two methods of attack--the direct and the indirect; yet these two in combination give rise to an endless series of maneuvers"*',
'*"Energy may be likened to the bending of a crossbow; decision, to the releasing of a trigger"*',
'*"Therefore, just as water retains no constant shape, so in warfare there are no constant conditions"*',
'*"Those skilled at making the enemy move do so by creating a situation to which he must conform; they entice him with something he is certain to take, and with lures of ostensible profit they await him in strength"*',
'*"Hence to fight and conquer in all your battles is not supreme excellence; supreme excellence consists in breaking the enemys resistance without fighting"*',
'*"He who advances without seeking fame, Who retreats without escaping blame, He whose one aim is to protect his people and serve his lord, The man is a jewel of the Realm"*',
'*"Hence that general is skilful in attack whose opponent does not know what to defend; and he is skilful in defense whose opponent does not know what to attack"*',
'*"If there is disturbance in the camp, the generals authority is weak. "*',
'*"the worst calamities that befall an army arise from hesitation"*',
'*"Foreknowledge cannot be gotten from ghosts and spirits, cannot be had by analogy, cannot be found out by calculation. It must be obtained from people, people who know the conditions of the enemy"*',
'*"Know thy self, know thy enemy. A thousand battles, a thousand victories"*',
'*"if you fight with all your might,  there is a chance of life; where as death is certain if you cling to your corner"*',
'*"do many calculations lead to victory, and few calculations to defeat"*',
'*"Success in warfare is gained by carefully accommodating ourselves to the enemys purpose"*',
'*"Do not swallow bait offered by the enemy. Do not interfere with an army that is returning home"*',
'*"Conceal your dispositions, and your condition will remain secret, which leads to victory;  show your dispositions, and your condition will become patent, which leads to defeat"*',
'*"The end and aim of spying in all its five varieties is knowledge of the enemy; and this knowledge can only be derived, in the first instance, from the converted spy. Hence it is essential that the converted spy be treated with the utmost liberality"*',
'*"If those who are sent to draw water begin by drinking themselves, the army is suffering from thirst. [One may know the condition of a whole army from the behavior of a single man"*',
'*"Deep knowledge is to be aware of disturbance before disturbance, to be aware of danger before danger, to be aware of destruction before destruction, to be aware of calamity before calamity. Strong action is training the body without being burdened by the body, exercising the mind without being used by the mind, working in the world without being affected by the world, carrying out tasks without being obstructed by tasks"*',
'*"You can ensure the safety of your defense if you only hold positions that cannot be attacked"*',
'*"Whether in an advantageous position or a disadvantageous one, the opposite state should be always present to your mind"*',
'*"When the outlook is bright, bring it before their eyes; but tell them nothing when the situation is gloomy"*',
'*"The Art of War is self-explanatory"*',
'*"The spot where we intend to fight must not be made known; for then the enemy will have to prepare against a possible attack at several different points;"*',
'*"Invincibility lies in the defence; the possibility of victory in the attack"*',
'*"By reinforcing every part, he weakens every part"*',
'*"We cannot enter into alliances until we are acquainted with the designs of our neighbors"*',
'*"The control of a large force is the same principle as the control of a few men: it is merely a question of dividing up their numbers"*',
'*"It is the unemotional, reserved, calm, detached warrior who wins, not the hothead seeking vengeance and not the ambitious seeker of fortune"*',
'*"There are not more than five primary colors  (blue, yellow,  red, white, and black), yet in combination they produce more hues than can ever been seen"*',
'*"In war, then, let your great object be victory, not lengthy campaigns"*',
'*"Whoever is first in the field and awaits the coming of the enemy, will be fresh for the fight; whoever is second in the field and has to hasten to battle will arrive exhausted"*',
'*"It is the rule in war, if our forces are ten to the enemys one, to surround him; if five to one, to attack him; if twice as numerous, to divide our army into two"*',
'*"Order or disorder depends on organisation; courage or cowardice on circumstances; strength or weakness on dispositions"*',
'*"The good fighters of old first put themselves beyond the possibility of defeat, and then waited for an opportunity of defeating the enemy"*',
'*"No ruler should put troops into the field merely to gratify his own spleen; no general should fight a battle simply out of pique. If it is to your advantage, make a forward move; if not, stay where you are. Anger may in time change to gladness; vexation may be succeeded by content. But a kingdom that has once been destroyed can never come again into being; nor can the dead ever be brought back to life"*',
'*"Confront them with annihilation, and they will then survive; plunge them into a deadly situation, and they will then live. When people fall into danger, they are then able to strive for victory"*',
'*"The general who does not advance to seek glory, or does not withdraw to avoid punishment, but cares for only the peoples security and promotes the peoples interests, is the nations treasure"*',
'*"When the common soldiers are too strong and their officers too weak, the result is INSUBORDINATION"*',
'*"To lift an autumn hair is no sign of great strength; to see the sun and moon is no sign of sharp sight; to hear the noise of thunder is no sign of a quick ear"*',
'*"O divine art of subtlety and secrecy! Through you we learn to be invisible, through you inaudible, and hence we can hold the enemys fate in our hands"*',
'*"Unhappy is the fate of one who tries to win his battles and succeed in his attacks without cultivating the spirit of enterprise;  for the result is waste of time and   general stagnation"*',
'*"When the general is weak and without authority; when his orders are not clear and distinct; when there are no fixed duties assigned to officers and men, and the ranks are formed in a slovenly haphazard manner, the result is utter disorganization"*',
'*"It is only one who is thoroughly acquainted with the evils of war that can thoroughly understand the profitable way of carrying it on"*',
'*"For the wise man delights in establishing his merit, the brave man likes to show his courage in action, the covetous man is quick at seizing advantages, and the stupid man has no fear of death"*',
'*"When the officers are too strong and the common soldiers too weak, the result is COLLAPSE"*',
'*"It is best to keep one’s own state intact; to crush the enemy’s state is only second best"*',
'*"Like the sun and moon, they end but to begin anew; like the four seasons, they pass away to return once more"*',
'*"No ruler should put troops into the field merely to gratify his own spleen; no general should fight a battle simply out of pique"*',
'*"All men can see the tactics whereby I conquer, but what none can see is the strategy out of which victory is evolved"*',
'*"The principle on which to manage an army is to set up one standard of courage which all must reach"*',
'*"Danger has a bracing effect"*',
'*"One hundred victories in one hundred battles is not the most skillful, subduing the others military without battle is the most skillful"*',
'*"Standing on the defensive indicates insufficient strength; attacking, a superabundance of strength"*',
'*"Supreme importance in war is to attack the enemy’s strategy"*',
'*"Hold out baits to entice the enemy. Feign disorder, and crush him"*',
'*"He who relies solely on warlike measures shall be exterminated; he who relies solely on peaceful measures shall perish"*',
'*"If you are near the enemy, make him believe you are far from him. If you are far from the enemy, make him believe you are now"*',
'*"In the practical art of war, the best thing of all is to take the enemys country whole and intact; to shatter and destroy it is not so good. So, too, it is better to recapture an army entire than to destroy it, to capture a regiment, a detachment or a company entire than to destroy them"*',
'*"Know the enemy and know yourself; in a hundred battles you will never be in peril. When you are ignorant of the enemy, but know yourself, your chances of winning or losing are equal. If ignorant both of your enemy and yourself, you are certain in every battle to be in peril"*',
'*"There are five dangerous faults which may affect a general: (1) Recklessness, which leads to destruction; (2) cowardice, which leads to capture; (3) a hasty temper, which can be provoked by insults; (4) a delicacy of honor which is sensitive to shame; (5) over-solicitude for his men, which exposes him to worry and trouble"*',
'*"Through you we learn to be invisible, through you inaudible; and hence we can hold the enemys fate in our hands"*',
'*"If I determine the enemys disposition of forces while I have no perceptible form, I can concentrate my forces while the enemy is fragmented. The pinnacle of military deployment approaches the formless: if it is formless, then even the deepest spy cannot discern it nor the wise make plans against it"*',
'*"If we wish to wrest an advantage from the enemy, we must not fix our minds on that alone, but allow for the possibility of the enemy also doing some harm to us, and let this enter as a factor into our calculations"*',
'*"So long as victory can be attained,  stupid haste is preferable to clever dilatoriness"*',
'*"Regard your soldiers as your children, and they will follow you into the deepest valleys; look on them as your own beloved sons"*',
'*"If you do not take opportunity   to   advance and reward   the   deserving,   your subordinates will not carry out your commands, and disaster will ensue"*',
'*"The art of war, then, is governed by five constant factors, to be taken into account in ones deliberations, when seeking to determine the conditions obtaining in the field"*',
'*"You can be sure of succeeding in your attacks if you only attack places which are undefended.You can ensure the safety of your defense if you only hold positions that cannot be attacked"*',
'*"Thus it is that in war the victorious strategist only seeks battle after the victory is won, whereas he who is destined to defeat first fights and afterwards looks for victory"*',
'*"We are not fit to lead an army on the march unless we are familiar with the face of the country -- its mountains and forests, its pitfalls and precipices, its marshes and swamps"*',
'*"When we are near, we must make the enemy believe we are far away."*',
'*"The art of war is of vital importance to the State"*',
'*"The skillful employer of men will employ the wise man, the brave man, the covetous man, and the stupid man. For the wise man delights in establishing his merit, the brave man likes to show his courage in action, the covetous man is quick at seizing advantages, and the stupid man has no fear of death"*',
'*"The good fighters of old first put themselves beyond the possibility of defeat, and then waited for an opportunity of defeating the enemy"*',
'*"Therefore the skillful leader subdues the enemys troops without any fighting; he captures their cities without laying siege to them; he overthrows their kingdom without lengthy operations in the field"*',
'*"Pretend to be weak, that he may grow arrogant"*',
'*"He will win who knows how to handle both superior and inferior forces"*',
'*"If you know the enemy and know yourself, you need not fear the result of a hundred battles"*',
'*"first lay plans which will ensure victory, and then lead your army to battle;  if you will not begin with stratagem but rely on brute strength alone, victory will no longer be assured"*',
'*"In making tactical dispositions, the highest pitch you can attain is to conceal them"*',
'*"To begin by bluster, but afterwards to take fright at the enemys numbers, shows a supreme lack of intelligence"*',
'*"These military devices, leading to victory, must not be divulged beforehand"*',
'*"Regard your soldiers as your children, and they will follow you into the deepest valleys; look upon them as your own beloved sons, and they will stand by you even unto death"*',
'*"He wins his battles by making no mistakes. Making no mistakes is what establishes the certainty of victory, for it means conquering an enemy that is already defeated"*'
];

var count = Math.floor(Math.random() * 174);

client.on("ready", () => {
	console.log("Ready for some lit quotes?");
	console.log("08:00:00 Every day!");
	console.log("Be there!");
	client.user.setActivity('great quotes', { type: 'WATCHING' })
	client.channels.cache.get('910244563703193621').send("Just to get you started, here is the first quote:\n" + quotes[count] + "  -  **Sun Tzu, The Art Of War**")
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
});

/*
client.on('message', (message) => {
	if (message.mentions.users.has(client.user.id) && !message.author.bot) {
	message.reply(`Hype!!!`)
	return
	};
});
*/


//45 45 17 * * *
const job = schedule.scheduleJob('00 00 06 * * *', function(){
	count = Math.floor(Math.random() * 174);
	client.channels.cache.get('910244563703193621').send(quotes[count] + "  -  **Sun Tzu, The Art Of War**")
	.then(message => console.log(`Sent quote`))
	.catch(console.error);
});

client.login(process.env.BOT_TOKEN);
