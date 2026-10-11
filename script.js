/* =========================================================
   GULLIVER'S ESCAPE ROOM
   MAIN GAME SCRIPT
========================================================= */


/* =========================================================
   GAME DATA
========================================================= */

const parts = {

    1: {
        name: "A VOYAGE TO LILLIPUT",
        shortName: "LILLIPUT",

        chapters: [

            {
                title: "Gulliver Arrives in Lilliput",
                image: "images/Part 1 Chapter 1.jpg",

                text: `
                Gulliver had always been interested in traveling by sea and discovering
                unfamiliar lands. During one of his voyages, however, his peaceful journey
                suddenly became dangerous. A terrible storm appeared, and the wind became
                stronger and stronger. The waves rose high above the ship, making it difficult
                for the sailors to control their vessel. Despite their efforts, the ship was
                badly damaged and eventually destroyed.

                Gulliver survived the disaster by swimming away from the wreck. He had no
                idea where he was going, but he continued swimming until he finally felt land
                beneath him. Exhausted from the long struggle, he crawled onto a shore and
                searched for a safe place to rest. He was so tired that he could barely keep
                his eyes open. Eventually, he lay down on the grass and fell into a deep sleep.

                When Gulliver woke up, he immediately realized that something was wrong.
                He tried to move his arms and legs, but he could not. Thin ropes had been
                tied around his body, holding him firmly against the ground. He struggled to
                break free, but there were too many ropes.

                As he looked around, Gulliver noticed hundreds of extremely small people
                standing near him. They carried tiny weapons and appeared frightened but
                curious. Gulliver could hardly believe what he was seeing. The people were
                much smaller than ordinary human beings.

                Gulliver had unknowingly arrived in the strange country of Lilliput, where
                the inhabitants were tiny compared with him.
                `
            },

            {
                title: "Gulliver Meets the Lilliputians",
                image: "images/Part 1 Chapter 2.jpg",

                text: `
                After discovering the tiny people surrounding him, Gulliver remained still
                because he did not want to frighten them. The Lilliputians were amazed by
                his enormous size. To them, Gulliver looked like a giant creature unlike
                anything they had ever seen.

                The people carefully examined him from a distance. Some were brave enough
                to approach him, while others stayed farther away. Gulliver soon realized
                that the Lilliputians were organized and intelligent. They worked together
                to communicate with one another and to decide what should be done with him.

                Gulliver was eventually given food and drink because the people understood
                that he was hungry after his long journey. They prepared large quantities
                of their own food, although their portions seemed very small to Gulliver.
                Because he was enormous compared with them, he needed much more food than
                an ordinary Lilliputian.

                The Lilliputians also moved Gulliver carefully and began making plans for
                where he would stay. Gulliver learned that their emperor was extremely
                powerful and that the emperor wanted to see this unusual stranger.

                Although Gulliver was still a prisoner, the Lilliputians did not immediately
                treat him as an enemy. Their curiosity slowly replaced some of their fear.
                Gulliver, meanwhile, became curious about their country, their government,
                and their unusual way of life.

                His first meeting with the Lilliputians was the beginning of his remarkable
                experience in a world where everything was smaller than he was.
                `
            },

            {
                title: "Gulliver Gains the Emperor's Trust",
                image: "images/Part 1 Chapter 3.jpg",

                text: `
                Gulliver understood that his safety depended on gaining the trust of the
                Lilliputians. Although he was much stronger than them, he did not want to
                use his strength to hurt anyone. Instead, he behaved peacefully and showed
                that he had no intention of attacking the people.

                The emperor and his officials carefully observed Gulliver. They wanted to
                know whether he could be trusted. Gulliver answered their questions as best
                as he could and tried to communicate with them. Because their languages
                were different, communication was difficult at first, but Gulliver slowly
                began learning their language.

                The emperor eventually became more comfortable with Gulliver. However,
                Gulliver was not simply allowed to travel freely. Rules and conditions were
                created to control his movements. The Lilliputians wanted to make sure that
                such a powerful stranger would not suddenly become dangerous.

                Gulliver agreed to follow their rules because he understood that cooperation
                would help him remain safe. He also learned that the emperor expected loyalty
                from those who lived under his authority.

                As time passed, the people became less frightened of Gulliver. His peaceful
                behavior helped him earn the emperor's confidence. Gulliver's enormous size
                could have made him a terrifying enemy, but his decision to behave calmly
                showed that physical strength was not the only thing that mattered.

                By gaining the emperor's trust, Gulliver received greater freedom and began
                learning more about the strange society of Lilliput.
                `
            },

            {
                title: "Gulliver Learns About Lilliput",
                image: "images/Part 1 Chapter 4.jpg",

                text: `
                As Gulliver spent more time in Lilliput, he became increasingly interested
                in the country's government and customs. He discovered that the Lilliputians
                took politics very seriously. Their society had complicated rules, traditions,
                and disagreements between different groups.

                Gulliver learned about the long conflict between Lilliput and a neighboring
                country called Blefuscu. The two countries had been enemies for a long time.
                Their conflict had become connected to disagreements over customs and political
                beliefs. Although these issues seemed important to the Lilliputians, Gulliver
                sometimes found them surprisingly small and complicated.

                He also observed how officials gained positions of power. The emperor and
                his government rewarded people who pleased them, and political competition
                could become dangerous. Gulliver began to understand that the tiny size of
                the Lilliputians did not mean that their political problems were small.

                The emperor eventually told Gulliver more about the danger posed by Blefuscu.
                Gulliver listened carefully because he wanted to understand his new country's
                problems before deciding whether he should become involved.

                Gulliver's experiences in Lilliput taught him that a society can have complex
                conflicts regardless of the physical size of its people. He also began seeing
                that political disagreements could influence the lives of ordinary citizens.

                His growing knowledge of Lilliput would soon lead him to take a much more
                active role in the country's conflict with Blefuscu.
                `
            },

            {
                title: "Gulliver Helps Lilliput",
                image: "images/Part 1 Chapter 5.jpg",

                text: `
                The conflict between Lilliput and Blefuscu eventually became an opportunity
                for Gulliver to prove his loyalty. Because Gulliver was enormous compared
                with the Lilliputians, the emperor believed that he could use Gulliver's
                strength to help protect the country.

                Gulliver agreed to assist the Lilliputians. He carefully considered how he
                could help without causing unnecessary harm. Eventually, he discovered a
                way to capture enemy ships belonging to Blefuscu. Using his great strength,
                he carried out the plan and brought the ships back toward Lilliput.

                The Lilliputians celebrated Gulliver's success. They believed that his action
                could give them a major advantage in their conflict with Blefuscu. The emperor
                was pleased because Gulliver had demonstrated that he could be extremely
                useful to the country.

                However, Gulliver did not want to destroy Blefuscu completely. He believed
                that helping Lilliput did not mean that he should cause unnecessary suffering.
                His decision would later become important because some powerful officials
                expected him to do more than he was willing to do.

                Gulliver's victory showed the Lilliputians that their enormous new visitor
                could become a powerful defender. At the same time, his growing influence
                began to make some officials jealous and suspicious.

                Gulliver had helped Lilliput, but his success also placed him in a dangerous
                political position.
                `
            },

            {
                title: "Gulliver Observes Lilliputian Society",
                image: "images/Part 1 Chapter 6.jpg",

                text: `
                While living among the Lilliputians, Gulliver continued studying their society.
                He became interested in their laws, education, families, and everyday customs.
                Although their world was unfamiliar, Gulliver noticed that the Lilliputians
                had developed an organized society with rules that guided almost every part
                of life.

                Gulliver learned that children were often educated according to the needs
                and expectations of society. Families and social position were important,
                and people were expected to follow certain behaviors.

                He also discovered that the Lilliputians had unusual methods for judging
                people's character and rewarding their citizens. Political loyalty could
                influence a person's position, and people who gained the favor of powerful
                officials could receive important opportunities.

                Gulliver found many of these customs interesting because they were different
                from what he knew in England. However, he also began noticing that some
                practices were unfair. People could be affected by political decisions,
                personal rivalries, and the opinions of powerful individuals.

                The more Gulliver observed Lilliputian society, the more he realized that
                their small physical size did not make their society simple. They experienced
                ambition, jealousy, competition, friendship, and conflict just as larger
                human societies did.

                Gulliver's observations allowed him to compare Lilliputian society with his
                own country and to think more carefully about the strengths and weaknesses
                of different societies.
                `
            },

            {
                title: "Gulliver Is Accused",
                image: "images/Part 1 Chapter 7.jpg",

                text: `
                Gulliver's relationship with the Lilliputian government eventually began to
                change. Some officials became jealous of his influence and worried that he
                was becoming too powerful. Although Gulliver had helped the country, political
                enemies began searching for ways to turn the emperor against him.

                Gulliver discovered that several accusations had been made against him.
                Some officials claimed that he had committed serious offenses. They also
                accused him of failing to completely follow the emperor's wishes.

                One important accusation involved Gulliver's refusal to destroy Blefuscu.
                Gulliver had captured the enemy ships, but he had refused to help completely
                destroy the neighboring country. He believed that such an action would be
                cruel and unnecessary.

                Other officials used this decision against him. They argued that Gulliver
                had not shown enough loyalty to Lilliput. The accusations placed Gulliver
                in great danger because the emperor and government had the power to punish
                him.

                Gulliver realized that his position was no longer safe. Even though he had
                previously been celebrated as a hero, political opinions could change very
                quickly.

                Instead of waiting for the government to punish him, Gulliver began thinking
                carefully about how he could escape. His experience taught him an important
                lesson: being useful to people does not always protect someone from jealousy,
                fear, or political conflict.
                `
            },

            {
                title: "Gulliver Leaves Lilliput",
                image: "images/Part 1 Chapter 8.jpg",

                text: `
                After realizing that he was in serious danger, Gulliver decided that he
                needed to leave Lilliput. He traveled toward Blefuscu, where he hoped to find
                a way to escape the conflict that had placed his life at risk.

                During his search, Gulliver discovered a boat. The boat was far too small
                for an ordinary person, but compared with Gulliver's enormous size, it was
                still something he could use. He carefully examined it and realized that
                it could possibly carry him across the sea.

                Gulliver repaired the boat and prepared it for a long journey. He gathered
                supplies and made the necessary adjustments so that the vessel would be safe
                enough for him to use.

                The Lilliputians were surprised by Gulliver's decision to leave. Although
                some people were thankful for what he had done, Gulliver understood that he
                could no longer remain in a country where powerful officials wanted him
                punished.

                Eventually, Gulliver sailed away from the land of the tiny people. He had
                arrived in Lilliput after a terrible shipwreck, and he now left the country
                in a small boat of his own.

                His journey through Lilliput had taught him about friendship, politics,
                loyalty, jealousy, and the importance of making careful decisions. Yet
                Gulliver's adventures were far from over. Another voyage would soon take
                him to a land where the people were enormous compared with him.
                `
            }
        ],

        quiz: [
            {
                question: "What happened to Gulliver when he first arrived in Lilliput?",
                answers: [
                    "He became the emperor",
                    "He was tied to the ground",
                    "He immediately found a boat",
                    "He returned to England"
                ],
                correct: 1
            },
            {
                question: "Why did Gulliver help the Lilliputians against Blefuscu?",
                answers: [
                    "He wanted to become their king",
                    "He wanted to destroy every Lilliputian",
                    "He wanted to help protect Lilliput",
                    "He wanted to steal their food"
                ],
                correct: 2
            },
            {
                question: "How did Gulliver eventually leave the land of Lilliput?",
                answers: [
                    "He flew away",
                    "He was carried by birds",
                    "He found and repaired a boat",
                    "He was taken back by the emperor"
                ],
                correct: 2
            }
        ]
    },


    /* =====================================================
       PART 2
    ====================================================== */

    2: {
        name: "A VOYAGE TO BROBDINGNAG",
        shortName: "BROBDINGNAG",

        chapters: [

            {
                title: "Gulliver Arrives in Brobdingnag",
                image: "images/Part 2 Chapter 1.jpg",

                text: `
                Gulliver's next voyage began after another journey across the sea. Once again,
                circumstances separated him from the people around him, and he eventually
                found himself in an unfamiliar land.

                This time, Gulliver discovered something completely different from Lilliput.
                Instead of being surrounded by people who were smaller than him, he noticed
                enormous human beings. The people of this country were giants compared with
                Gulliver.

                Gulliver was frightened because he suddenly became the tiny person. The
                difference between his size and theirs made ordinary objects seem enormous.
                Plants were huge, animals were frightening, and even the landscape seemed
                dangerous.

                A farmer eventually discovered Gulliver. The farmer was surprised to find
                such a tiny human being in his land. Instead of immediately harming Gulliver,
                he decided to take care of him and show him to other people.

                Gulliver soon became a curiosity. People wanted to see the tiny stranger
                because they had never encountered anyone like him. The farmer realized that
                Gulliver could attract attention and possibly earn money.

                Gulliver's situation was uncomfortable, but he understood that he needed to
                cooperate with the farmer. His experiences in Lilliput had taught him that
                size alone did not determine who had power. In Brobdingnag, he was the tiny
                one, and the world around him suddenly felt enormous.
                `
            },

            {
                title: "Glumdalclitch Cares for Gulliver",
                image: "images/Part 2 Chapter 2.jpg",

                text: `
                The farmer's daughter, Glumdalclitch, became one of the most important people
                in Gulliver's life in Brobdingnag. Unlike some of the people who simply wanted
                to see him as a curiosity, she treated him with kindness and care.

                Glumdalclitch was responsible for looking after Gulliver. Because everything
                in Brobdingnag was enormous, Gulliver needed special protection. Ordinary
                objects that would have been harmless in his own country could become dangerous
                to him.

                The farmer began displaying Gulliver to visitors. People came to see the
                tiny human being and were amazed by his ability to speak, walk, and behave
                like an ordinary person. Gulliver sometimes found these displays embarrassing,
                but they also allowed him to survive.

                Glumdalclitch helped protect him during these experiences. She also made sure
                that Gulliver had suitable clothing and a safe place to sleep.

                Although Gulliver was far from home, Glumdalclitch's kindness made his life
                easier. Their relationship became an example of how compassion can exist even
                when people are separated by great differences in size and background.

                Gulliver also began realizing how frightening it must have been for the
                Lilliputians when they first saw him. In Lilliput, he had been the enormous
                stranger. In Brobdingnag, he finally understood what it felt like to be the
                small and vulnerable outsider.
                `
            },

            {
                title: "Gulliver Meets the King and Queen",
                image: "images/Part 2 Chapter 3.jpg",

                text: `
                Gulliver's unusual situation eventually attracted the attention of the royal
                family. The king and queen of Brobdingnag wanted to see the tiny visitor for
                themselves.

                When Gulliver was brought before them, they were amazed by his appearance
                and his ability to speak. They asked questions about where he came from and
                how such a tiny human being could have traveled so far.

                The queen became especially interested in Gulliver. Eventually, she arranged
                for him to remain at the palace. Gulliver was grateful because life at the
                palace offered greater protection than being displayed by the farmer.

                Glumdalclitch was also allowed to remain with him, which made Gulliver feel
                safer. She continued caring for him and protecting him from the dangers of
                the enormous palace environment.

                However, living in the palace did not mean that Gulliver was completely safe.
                The great size of the people, animals, and objects around him created many
                unexpected dangers. Even small creatures could become frightening when they
                were enormous compared with him.

                Gulliver learned that being close to royalty did not remove the problems
                caused by his small size. He had to remain alert and depend on the people
                who cared for him.

                His life at the palace gave him a chance to observe Brobdingnag more closely
                and to learn about the values and ideas of its king.
                `
            },

            {
                title: "Gulliver Explores the Giant Land",
                image: "images/Part 2 Chapter 4.jpg",

                text: `
                While staying in Brobdingnag, Gulliver had opportunities to observe the
                enormous country around him. Everything appeared larger than anything he had
                previously known.

                Trees were enormous, fields seemed endless, and animals looked frightening
                because of their size. Even ordinary insects could become unpleasant and
                dangerous from Gulliver's perspective.

                Gulliver began comparing Brobdingnag with his own country. In England,
                Gulliver had considered himself an ordinary-sized person. Here, however, he
                was smaller than almost everyone and everything.

                The experience changed the way Gulliver thought about physical appearance.
                Things that looked beautiful from far away could appear very different when
                examined closely. Because of his small size, Gulliver noticed details that
                he might normally have ignored.

                Gulliver also learned that Brobdingnag was not simply a land of giants. It
                was a functioning society with its own laws, government, customs, and values.
                The people had their own understanding of what was right and wrong.

                His experiences encouraged him to look at his own country from a different
                perspective. He began to understand that people often assume their own way
                of life is normal simply because they are familiar with it.

                Brobdingnag therefore became more than a strange land of giants. It became
                a place where Gulliver could compare societies and question some of the
                beliefs he had previously accepted without thinking.
                `
            },

            {
                title: "Gulliver Faces Giant Dangers",
                image: "images/Part 2 Chapter 5.jpg",

                text: `
                Gulliver's small size made everyday life dangerous in Brobdingnag. Even when
                the people around him were friendly, the enormous environment could suddenly
                place him in danger.

                On one occasion, Gulliver was given a large container that could be used like
                a boat. Although it was enormous compared with ordinary objects from his own
                world, it was suitable for Gulliver because of his tiny size.

                Gulliver enjoyed the experience, but another dangerous event soon occurred.
                A large monkey discovered him and grabbed him. To the monkey, Gulliver may
                have appeared like a small and unusual object.

                The monkey carried Gulliver away and climbed toward a high place. Gulliver
                was terrified because he had no control over what was happening. He was
                eventually taken high above the ground, where a fall could have killed him.

                The people of Brobdingnag searched for Gulliver and eventually rescued him.
                Although the experience was frightening, Gulliver survived.

                The incident reminded him that his intelligence and experience could not
                completely protect him from physical dangers. In Lilliput, his great size
                had made him powerful. In Brobdingnag, his small size made him vulnerable.

                Gulliver's experiences with the giant world continued teaching him that
                perspective can completely change how a person understands strength,
                weakness, safety, and danger.
                `
            },

            {
                title: "Gulliver Describes England",
                image: "images/Part 2 Chapter 6.jpg",

                text: `
                Gulliver eventually had several conversations with the King of Brobdingnag.
                The king was interested in learning about England, including its government,
                laws, military, religion, and society.

                Gulliver proudly described his homeland. He explained how England was
                governed, how political leaders competed for power, and how the country
                maintained a powerful military. He also talked about wars and the weapons
                used by European countries.

                Gulliver expected the king to be impressed by England's achievements.
                Instead, the king listened carefully and began asking difficult questions.

                The king was particularly concerned about the violence and political
                conflicts Gulliver described. He could not understand why people would
                create weapons capable of causing enormous destruction or why governments
                would repeatedly fight one another.

                Gulliver's conversation with the king forced him to look at England from
                the perspective of an outsider. Things that Gulliver considered normal began
                to sound strange when explained to someone who did not share the same
                traditions.

                The king eventually became critical of English society. He believed that
                many of its political and military practices were harmful rather than
                admirable.

                Gulliver was surprised by this response, but the conversation encouraged
                him to think more deeply about his own country and the values that shaped it.
                `
            },

            {
                title: "Gulliver Talks About Gunpowder",
                image: "images/Part 2 Chapter 7.jpg",

                text: `
                During another conversation with the King of Brobdingnag, Gulliver described
                the military technology used in Europe. He explained that European countries
                possessed powerful weapons and that gunpowder allowed armies to create
                tremendous destruction.

                Gulliver believed that the king might consider this technology impressive.
                He explained how weapons could be used in battles and how governments could
                use military power against their enemies.

                The king, however, reacted very differently. He was shocked by the idea that
                human beings would intentionally create tools capable of killing large numbers
                of people.

                The king could not understand why a society would celebrate technological
                achievements if those achievements could be used to destroy lives and cities.
                From his perspective, the ability to cause destruction was not something
                that should make a nation proud.

                Gulliver began realizing that his descriptions of England did not always
                make his country look as advanced as he had imagined. Instead, some of the
                things he considered signs of progress sounded cruel or dangerous to the king.

                The king refused to accept the idea that such destructive weapons were
                necessary for a civilized society.

                This conversation became an important lesson for Gulliver because it showed
                him that technological power does not automatically mean moral wisdom.
                `
            },

            {
                title: "Gulliver Leaves Brobdingnag",
                image: "images/Part 2 Chapter 8.jpg",

                text: `
                Gulliver's time in Brobdingnag eventually came to an end. Although he had
                experienced many frightening situations, he had also learned valuable lessons
                from the people and the society he encountered.

                Gulliver was traveling with his belongings when an unexpected event separated
                him from the people around him. His small traveling container was carried away
                and eventually reached the sea.

                While Gulliver was inside, a large eagle noticed the container and grabbed it.
                The eagle carried Gulliver through the air before eventually dropping the
                container into the ocean.

                Gulliver was once again alone at sea. He did not know what would happen next,
                but he managed to survive inside the container until he was eventually found
                by sailors.

                Being rescued meant that Gulliver could finally return to a world where he
                was once again an ordinary-sized human being. However, his experiences in
                Brobdingnag had changed him.

                He had learned what it was like to be physically powerless and dependent on
                others. He had also learned to question the political and military practices
                of his own country.

                Gulliver returned from Brobdingnag with memories of the giants, the kindness
                of Glumdalclitch, and the critical wisdom of the king. Yet another strange
                voyage awaited him, and his next destination would take him into a world of
                floating islands, unusual science, and impossible ideas.
                `
            }
        ],

        quiz: [
            {
                question: "Who cared for Gulliver after the farmer found him?",
                answers: [
                    "The emperor",
                    "Glumdalclitch",
                    "A sailor",
                    "A soldier"
                ],
                correct: 1
            },
            {
                question: "How were the people of Brobdingnag different from Gulliver?",
                answers: [
                    "They were much smaller",
                    "They could not speak",
                    "They were much larger",
                    "They lived underwater"
                ],
                correct: 2
            },
            {
                question: "Why did the King of Brobdingnag criticize England?",
                answers: [
                    "Because England had no schools",
                    "Because Gulliver described violence and destructive weapons",
                    "Because England had no ships",
                    "Because Gulliver refused to speak"
                ],
                correct: 1
            }
        ]
    },


    /* =========================================================
       PART 3
    ========================================================== */

    3: {
        name: "LAPUTA & BEYOND",
        shortName: "LAPUTA & BEYOND",

        chapters: [

            {
                title: "Gulliver Encounters Laputa",
                image: "images/Part 3 Chapter 1.jpg",

                text: `
                Gulliver's third major voyage began after he once again found himself far
                from the ordinary world. During his journey, pirates attacked and separated
                him from his companions.

                Gulliver eventually found himself alone in a small boat. He had limited
                supplies and did not know where he would find safety. As he traveled, he
                noticed something extraordinary above him.

                A strange island appeared to be floating in the sky. Gulliver soon learned
                that this was Laputa, a remarkable island that could move through the air.

                The people of Laputa were unlike the ordinary people Gulliver had met during
                his previous voyages. They were deeply interested in mathematics, music,
                astronomy, and scientific ideas.

                Gulliver was amazed by the floating island and wanted to understand how it
                could remain in the sky. The people explained their knowledge and showed him
                unusual things about their society.

                However, Gulliver quickly noticed that the inhabitants of Laputa were often
                distracted. Their minds were so focused on complicated ideas that they could
                sometimes ignore the people and events around them.

                Gulliver's visit to Laputa introduced him to a society fascinated by
                intellectual knowledge but sometimes disconnected from practical life.

                His journey was about to become even stranger as he explored the places
                connected to the floating island.
                `
            },

            {
                title: "Gulliver Explores Laputa",
                image: "images/Part 3 Chapter 2.jpg",

                text: `
                While staying on Laputa, Gulliver became interested in the unusual interests
                of its inhabitants. The people spent much of their time thinking about
                mathematics, music, astronomy, and scientific problems.

                Gulliver noticed that the Laputans were highly educated in certain subjects,
                but their knowledge did not always make their daily lives easier. They could
                spend enormous amounts of time thinking about abstract ideas while ignoring
                simple practical concerns.

                Music was especially important to them. Their understanding of mathematical
                patterns influenced the way they thought about musical harmony and other
                artistic ideas.

                Gulliver also observed their interest in astronomy. They studied the heavens
                and were fascinated by the movement of planets and other objects in the sky.

                Although Gulliver admired their intelligence, he also found their behavior
                unusual. Conversations could become difficult because people sometimes
                became so focused on their thoughts that they failed to pay attention to
                what was happening around them.

                Gulliver's experiences on Laputa made him think about the difference between
                knowledge and practical wisdom. A person may know many complicated things,
                but that knowledge is not always useful if it cannot be applied wisely.

                Gulliver continued exploring because he wanted to understand what kind of
                society could be created when intellectual interests became more important
                than ordinary practical life.
                `
            },

            {
                title: "Life in Laputa",
                image: "images/Part 3 Chapter 3.jpg",

                text: `
                Gulliver spent more time observing the daily life of the Laputans. Their
                society was strongly influenced by their fascination with mathematics and
                abstract ideas.

                Many people seemed distracted during conversations. When someone became too
                focused on thinking, servants sometimes had to bring the person back to the
                conversation. Gulliver found this behavior strange because he was accustomed
                to people paying attention when others were speaking.

                The Laputans also spent a great deal of time thinking about unusual plans.
                Some of their ideas were complicated but not very practical. Gulliver began
                to notice that intelligence without common sense could create problems.

                Their way of life demonstrated an important contrast. Knowledge can help
                people understand the world, but knowledge must also be connected to real
                needs and responsible decisions.

                Gulliver was interested in the Laputans because they were intelligent, but he
                also recognized their weaknesses. They sometimes became so fascinated by
                complicated theories that they forgot simple responsibilities.

                As Gulliver continued his journey, he became more curious about what happened
                on the lands below Laputa. He wanted to discover whether the ideas developed
                on the floating island actually helped ordinary people.

                His next destination would allow him to see the practical consequences of
                strange scientific experiments.
                `
            },

            {
                title: "Gulliver Visits Balnibarbi",
                image: "images/Part 3 Chapter 4.jpg",

                text: `
                Gulliver eventually traveled to Balnibarbi, a land connected to the people
                of Laputa. He expected to find a prosperous country influenced by advanced
                knowledge.

                Instead, he noticed that many areas appeared poorly managed. Some people had
                adopted unusual ideas and experiments without considering whether those ideas
                actually worked.

                Gulliver learned about scientists and project leaders who were attempting
                strange experiments. Their goal was often to improve agriculture, construction,
                manufacturing, or other parts of daily life.

                However, many of the projects were impractical. Some experiments required
                enormous amounts of time and resources while producing little useful results.

                Gulliver was surprised because the people conducting these experiments
                considered themselves intelligent and innovative. Yet their projects often
                created more problems than solutions.

                Through these experiences, Gulliver saw another example of the difference
                between having an interesting idea and knowing how to apply it effectively.

                He also began thinking about the relationship between science and society.
                Scientific knowledge can improve people's lives, but only when it is used
                responsibly and connected to real needs.

                Balnibarbi therefore became an important part of Gulliver's education. He
                learned that progress should not simply mean creating something new. True
                progress should also make life better for people.
                `
            },

            {
                title: "Gulliver Visits Glubbdubdrib",
                image: "images/Part 3 Chapter 5.jpg",

                text: `
                Gulliver continued his travels and eventually reached Glubbdubdrib, a
                remarkable place where unusual powers were said to exist.

                The ruler of Glubbdubdrib possessed the ability to communicate with people
                from the past. Gulliver was fascinated because he could now meet famous
                historical figures and learn about events directly from them.

                Gulliver had always learned about history through books and stories. He
                expected the famous people of the past to appear exactly as history described
                them.

                However, speaking with people from earlier times gave Gulliver a different
                perspective. He discovered that history can sometimes be influenced by the
                opinions, interests, and mistakes of those who record it.

                Gulliver asked questions about important events and people. These conversations
                encouraged him to think more critically about the stories societies tell
                about their own past.

                Instead of simply accepting historical reputations, Gulliver began considering
                how truth can become mixed with exaggeration, political interests, and personal
                opinions.

                His visit to Glubbdubdrib was therefore not only a strange supernatural
                experience. It was also an opportunity to examine history and question whether
                everything people believe about the past is completely accurate.

                Gulliver left with a deeper appreciation for the importance of examining
                information carefully rather than accepting every story without question.
                `
            },

            {
                title: "The Struldbrugs of Luggnagg",
                image: "images/Part 3 Chapter 6.png",

                text: `
                Gulliver traveled to Luggnagg, where he learned about the Struldbrugs,
                people who were born with the ability to live forever.

                At first, Gulliver thought that living forever would be wonderful. He
                imagined that an immortal person could gain unlimited knowledge, experience
                many generations, and enjoy life for an extremely long time. He became
                excited by the possibility of never having to die.

                However, Gulliver's understanding changed when he learned more about the
                Struldbrugs. Their immortality did not mean that they remained young and
                healthy. Instead, they continued to grow old.

                As the Struldbrugs aged, they experienced the difficulties associated with
                old age. Their bodies became weaker, their memories could become less reliable,
                and they gradually became separated from the younger generations around them.

                Gulliver realized that living forever was not the same as living forever in
                perfect health and happiness. The Struldbrugs had to continue experiencing
                the difficulties of aging without receiving the release that death would
                normally provide.

                This discovery completely changed Gulliver's opinion. He had originally
                believed that immortality was one of the greatest gifts a person could have.
                After seeing the reality of the Struldbrugs, he understood that an endless
                life could also become a great burden.

                Gulliver left Luggnagg with a new understanding of life, aging, and the
                importance of appreciating the life a person actually has.
                `
            },

            {
                title: "Gulliver Travels Through Japan",
                image: "images/Part 3 Chapter 7.png",

                text: `
                After his experiences in Luggnagg, Gulliver continued his journey toward
                Japan. He had traveled through several strange countries and had encountered
                societies with completely different customs.

                In Japan, Gulliver met the Emperor of Japan. He needed permission to continue
                his journey because traveling through foreign territories required cooperation
                from local authorities.

                Gulliver explained his situation and eventually received permission to
                continue traveling. He was grateful because this allowed him to move closer
                to his goal of returning home.

                His journey through Japan marked another stage in his long travels. Gulliver
                had now experienced floating islands, unusual scientific experiments, strange
                historical encounters, and the mysterious Struldbrugs.

                Each experience had changed the way he understood the world. He had learned
                that intelligence does not always lead to wisdom, scientific progress can
                have weaknesses, history should be examined carefully, and immortality is
                not necessarily a blessing.

                Gulliver eventually found a way to continue his journey and return to England.
                Although he was finally going home, his adventures were not finished.

                His next voyage would take him to a land where he would encounter intelligent
                horses and creatures that looked strangely similar to human beings.
                `
            }
        ],

        quiz: [
            {
                question: "What was unusual about Laputa?",
                answers: [
                    "It was an underwater city",
                    "It was a floating island",
                    "It was a giant ship",
                    "It was a desert kingdom"
                ],
                correct: 1
            },
            {
                question: "What subjects interested the people of Laputa?",
                answers: [
                    "Mathematics, music, and science",
                    "Cooking and farming only",
                    "Sports and dancing",
                    "Fishing and hunting"
                ],
                correct: 0
            },
            {
                question: "What was unusual about the Struldbrugs?",
                answers: [
                    "They could fly",
                    "They were invisible",
                    "They could live forever but continued to age",
                    "They were giant horses"
                ],
                correct: 2
            }
        ]
    },


    /* =========================================================
       PART 4
    ========================================================== */

    4: {
        name: "THE HOUYHNHNMS",
        shortName: "HOUYHNHNMS",

        chapters: [

            {
                title: "Gulliver Meets the Houyhnhnms",
                image: "images/Part 4 Chapter 1.jpg",

                text: `
                Gulliver's final major voyage brought him to a land unlike any place he had
                visited before. After another difficult journey, he encountered strange
                creatures that completely changed his understanding of intelligence and
                civilization.

                The first creatures Gulliver noticed were Yahoos. They looked somewhat
                similar to human beings, but they behaved in ways that Gulliver found
                unpleasant. They were wild, aggressive, dirty, and often greedy.

                Gulliver soon discovered another group of creatures. These were horses,
                but they were unlike ordinary horses. The Houyhnhnms could speak, think
                rationally, and organize their society.

                Gulliver was amazed. Throughout his life, he had considered humans to be
                the most intelligent creatures. Now he had discovered a society where
                intelligent horses lived peacefully while creatures that resembled humans
                behaved violently.

                The Houyhnhnms were curious about Gulliver. They wanted to understand where
                he came from and why he was different from the Yahoos.

                Gulliver quickly became fascinated by their society. Their calm behavior,
                honesty, and peaceful way of living were very different from the political
                conflicts and violence he had witnessed in other countries.

                His final voyage would force Gulliver to compare human civilization with a
                society based on reason and honesty.
                `
            },

            {
                title: "Gulliver Learns from the Houyhnhnms",
                image: "images/Part 4 Chapter 2.jpg",

                text: `
                Gulliver spent more time living among the Houyhnhnms and learning about their
                way of life. Their society was based strongly on reason, honesty, and peaceful
                cooperation.

                The Houyhnhnms did not seem to understand why someone would intentionally lie
                or deceive another person. They valued truth because they believed that reason
                should guide decisions.

                Gulliver admired many aspects of their society. There were no political
                struggles like the ones he had witnessed in Lilliput. The Houyhnhnms did not
                seem interested in gaining power through manipulation or deception.

                They also avoided many forms of unnecessary violence. Their communities were
                organized around cooperation and responsibility.

                Gulliver began comparing their peaceful society with the human societies he
                knew. He remembered wars, political arguments, greed, jealousy, and competition.
                The comparison made him increasingly critical of human behavior.

                However, the Houyhnhnms did not consider themselves perfect. They simply
                followed the principles of reason as naturally as they could.

                Gulliver admired their way of thinking so much that he began spending more
                time with them than with the Yahoos.

                His growing admiration would eventually influence how he viewed his own
                species and his place in the world.
                `
            },

            {
                title: "Gulliver Describes Europe",
                image: "images/Part 4 Chapter 3.jpg",

                text: `
                The Houyhnhnms became curious about Gulliver's homeland. They wanted to know
                about the strange creatures he came from and the society where humans lived.

                Gulliver described Europe in detail. He explained the political systems,
                governments, wars, social classes, money, and competition that existed among
                human beings.

                He described how countries fought against one another and how governments
                sometimes sent people into war. He also explained how individuals competed
                for wealth and social position.

                The Houyhnhnms listened carefully but had difficulty understanding why people
                would behave in such ways. From their perspective, it seemed unreasonable
                that intelligent beings would willingly create conflict and suffering.

                Gulliver continued describing human society, but he gradually became
                uncomfortable with his own words. The more he explained European customs,
                the more clearly he saw their weaknesses.

                He remembered the political struggles of Lilliput, the destructive weapons
                discussed in Brobdingnag, and the strange experiments he had seen during his
                third voyage.

                Gulliver began to understand that his travels had given him the opportunity
                to look at humanity from the outside.

                The Houyhnhnms' questions encouraged Gulliver to think deeply about whether
                humans truly deserved to consider themselves rational and civilized.
                `
            },

            {
                title: "The Yahoos",
                image: "images/Part 4 Chapter 4.jpg",

                text: `
                Gulliver became increasingly interested in the Yahoos. Although they looked
                surprisingly similar to human beings, their behavior was extremely different
                from the calm and reasonable behavior of the Houyhnhnms.

                The Yahoos were greedy and often fought over food and objects they wanted.
                They could become violent when competing with one another. Their behavior
                seemed uncontrolled and selfish.

                Gulliver was disturbed because he could recognize similarities between the
                Yahoos and humans. The comparison made him uncomfortable.

                He remembered how human beings could become greedy for money, power, land,
                and possessions. He remembered political conflicts and wars in which people
                harmed others to gain advantages.

                The more Gulliver studied the Yahoos, the more he questioned the belief that
                humans were naturally superior to other creatures.

                At the same time, the Houyhnhnms treated the Yahoos as animals rather than
                members of a civilized society. Their relationship showed Gulliver how
                different societies can judge intelligence and worth.

                Gulliver's reaction to the Yahoos became increasingly emotional. He admired
                the Houyhnhnms so strongly that he began rejecting many things connected to
                humanity.

                This experience would eventually make returning to human society extremely
                difficult for Gulliver.
                `
            },

            {
                title: "The Peaceful Houyhnhnm Society",
                image: "images/Part 4 Chapter 5.jpg",

                text: `
                Gulliver continued studying the society of the Houyhnhnms. He noticed that
                their communities were organized around cooperation, reason, and honesty.

                The Houyhnhnms did not appear to have the same political struggles that
                Gulliver had witnessed in human societies. They did not constantly compete
                for wealth or power.

                Their daily lives were simple compared with the complicated societies Gulliver
                had visited. They valued useful work and peaceful relationships.

                Gulliver was impressed by the way the Houyhnhnms communicated. They generally
                spoke honestly because deception did not have the same role in their society
                that it did among humans.

                Gulliver began thinking that many human problems might come from uncontrolled
                desires. People often wanted more wealth, more power, or more possessions,
                even when they already had enough.

                The Houyhnhnm society gave Gulliver an example of a community where reason
                could guide decisions.

                However, Gulliver's admiration became so strong that he began seeing almost
                everything human beings did in a negative way.

                His experiences had taught him many valuable lessons, but his extreme
                reaction to the Houyhnhnms would make it difficult for him to return to his
                former life.
                `
            },

            {
                title: "Gulliver Talks About War and Government",
                image: "images/Part 4 Chapter 6.jpg",

                text: `
                Gulliver continued explaining human society to the Houyhnhnms. They were
                especially interested in learning why human beings fought wars.

                Gulliver described how governments could disagree with one another over
                territory, power, wealth, political interests, and other issues.

                He explained that governments could spend enormous amounts of resources
                preparing for war. Soldiers were trained to fight, weapons were developed,
                and entire populations could be affected by political decisions.

                The Houyhnhnms found these ideas difficult to understand. They believed that
                reason should be used to solve problems rather than violence.

                Gulliver also explained that people sometimes fought because leaders wanted
                greater power. He described how political competition could influence the
                lives of ordinary people.

                As he spoke, Gulliver realized that his own descriptions made human society
                sound deeply unreasonable.

                The conversation reminded him of his earlier experiences in Lilliput, where
                political disagreements had nearly destroyed his relationship with the
                government. He also remembered the King's criticism of war in Brobdingnag.

                Gulliver began to see a pattern throughout his travels: many societies
                struggled because people allowed ambition, pride, fear, or greed to control
                their decisions.
                `
            },

            {
                title: "Gulliver Is Ordered to Leave",
                image: "images/Part 4 Chapter 7.jpg",

                text: `
                Gulliver had become deeply attached to the Houyhnhnms and had begun thinking
                of their society as a model of reason and peace.

                However, the Houyhnhnms eventually decided that Gulliver could not remain
                among them permanently. Although they recognized that Gulliver was different
                from the wild Yahoos, they still considered him part of the same general
                species.

                Gulliver was devastated by the decision. He had come to admire the
                Houyhnhnms so deeply that returning to human society seemed unbearable.

                Nevertheless, Gulliver understood that he had no choice. He needed to prepare
                for another journey.

                He used his knowledge and skills to build a small boat. Building the vessel
                required patience and careful work because Gulliver knew that he might have
                to travel across a great distance.

                Before leaving, Gulliver spent as much time as possible with the Houyhnhnms.
                He was grateful for everything he had learned from them.

                His departure was painful because he believed that he was leaving behind
                the most rational society he had ever encountered.

                Gulliver finally sailed away, knowing that he would have to return to the
                world of human beings even though he no longer felt comfortable calling it
                home.
                `
            },

            {
                title: "Gulliver Returns to England",
                image: "images/Part 4 Chapter 8.jpg",

                text: `
                Gulliver eventually reached England after his long and extraordinary voyages.
                He had traveled through lands of tiny people, giants, floating islands,
                strange societies, and intelligent horses.

                Although he was finally home, Gulliver did not feel completely comfortable.
                His experiences among the Houyhnhnms had changed the way he viewed human
                beings.

                He found it difficult to accept ordinary human behavior. Everyday arguments,
                selfishness, greed, and dishonesty reminded him of the weaknesses he had
                observed throughout his travels.

                Gulliver especially disliked being around people for long periods of time.
                He preferred spending time with horses because they reminded him of the
                Houyhnhnms he admired.

                His family and other people around him could not completely understand why
                he had changed so much.

                Gulliver's journeys had taught him that every society has strengths and
                weaknesses. Lilliput taught him about political conflict and ambition.
                Brobdingnag taught him to question violence and power. Laputa and the lands
                beyond it taught him about the difference between knowledge and practical
                wisdom. The Houyhnhnms taught him about reason, honesty, and peaceful living.

                Gulliver's adventures therefore became more than a series of strange
                journeys. They changed the way he understood himself, humanity, and the
                world around him.

                His journey had finally ended, but the lessons from his travels would remain
                with him for the rest of his life.
                `
            }
        ],

        quiz: [
            {
                question: "What were the Houyhnhnms?",
                answers: [
                    "Tiny humans",
                    "Intelligent horses",
                    "Giant birds",
                    "Floating creatures"
                ],
                correct: 1
            },
            {
                question: "How were the Yahoos described?",
                answers: [
                    "Peaceful and perfectly honest",
                    "Greedy, dirty, and violent",
                    "Intelligent and musical",
                    "Small and friendly"
                ],
                correct: 1
            },
            {
                question: "What happened to Gulliver at the end of his fourth voyage?",
                answers: [
                    "He became a Houyhnhnm",
                    "He stayed permanently in Laputa",
                    "He returned to England",
                    "He became emperor of Lilliput"
                ],
                correct: 2
            }
        ]
    }
};


/* =========================================================
   GAME STATE
========================================================= */

let playerName = "";

let currentPart = 1;
let currentChapter = 0;
let currentQuizQuestion = 0;

let hearts = 3;
let totalScore = 0;

let voyageScores = {
    1: 0,
    2: 0,
    3: 0,
    4: 0
};

let completedParts = {
    1: false,
    2: false,
    3: false,
    4: false
};

let quizCorrect = 0;
let quizWrong = 0;

let answerHistory = [];

let voyageStartedScore = 0;


/* =========================================================
   START GAME
========================================================= */

function showNameScreen() {

    playSound("click");

    showScreen("name-screen");

    setTimeout(() => {

        const input = document.getElementById("player-name");

        if (input) {
            input.focus();
        }

    }, 100);
}


function enterAdventure() {

    const input = document.getElementById("player-name");
    const error = document.getElementById("name-error");

    if (!input) return;

    const name = input.value.trim();

    if (name === "") {

        if (error) {
            error.textContent = "Please enter your name first.";
        }

        playSound("wrong");
        return;
    }

    playerName = name;

    if (error) {
        error.textContent = "";
    }

    const mapName = document.getElementById("map-player-name");

    if (mapName) {
        mapName.textContent = playerName;
    }

    playSound("success");

    updateMap();

    showScreen("map-screen");
}


/* =========================================================
   SCREEN CONTROL
========================================================= */

function showScreen(screenId) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const screen = document.getElementById(screenId);

    if (screen) {
        screen.classList.add("active");
        if (screenId === "map-screen") {
            screen.scrollTop = 0;
            const world = screen.querySelector(".ocean-world");
            if (world) world.scrollTop = 0;
        }
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   MAP
========================================================= */

function updateMap() {

    const mapName = document.getElementById("map-player-name");
    const mapScore = document.getElementById("map-score");

    if (mapName) {
        mapName.textContent = playerName;
    }

    if (mapScore) {
        mapScore.textContent = totalScore;
    }
    updateStarDisplays();

    for (let i = 1; i <= 4; i++) {

        const voyage = document.getElementById(`voyage-${i}`);

        if (!voyage) continue;

        const lockStatus = voyage.querySelector(".lock-status");

        if (completedParts[i]) {

            voyage.classList.remove("locked");
            voyage.classList.add("completed");

            voyage.disabled = false;

            if (lockStatus) {
                lockStatus.textContent = "COMPLETED";
            }
            voyage.dataset.status = "COMPLETED";

        } else if (i === 1 || completedParts[i - 1]) {

            voyage.classList.remove("locked");
            voyage.classList.add("unlocked");

            voyage.disabled = false;

            if (lockStatus) {
                lockStatus.textContent = "UNLOCKED";
            }
            voyage.dataset.status = "UNLOCKED";

        } else {

            voyage.classList.remove("unlocked");
            voyage.classList.add("locked");

            /* A locked voyage must not be clickable. */
            voyage.disabled = true;

            if (lockStatus) {
                lockStatus.textContent = "LOCKED";
            }
            voyage.dataset.status = "LOCKED";
        }
    }

    // Visible status labels are printed over the map's own destination banners.
    for (let i = 1; i <= 4; i++) {
        const badge = document.getElementById(`map-voyage-status-${i}`);
        const voyage = document.getElementById(`voyage-${i}`);
        if (!badge || !voyage) continue;
        const status = completedParts[i] ? "COMPLETED" : (i === 1 || completedParts[i - 1] ? "UNLOCKED" : "LOCKED");
        badge.textContent = status;
        badge.classList.toggle("completed", status === "COMPLETED");
        badge.classList.toggle("unlocked", status === "UNLOCKED");
        badge.classList.toggle("locked", status === "LOCKED");
    }
}


/* =========================================================
   OPEN VOYAGE
========================================================= */

function openPart(partNumber) {

    /* Never allow a locked voyage to open. */

    if (partNumber > 1 && !completedParts[partNumber - 1]) {

        playSound("wrong");

        const previous =
            partNumber - 1;

        alert(
            `🔒 VOYAGE LOCKED!

` +
            `You must completely finish Voyage ${previous} before you can enter Voyage ${partNumber}.`
        );

        return;
    }

    /* A completed voyage may be reviewed again. */

    currentPart = partNumber;
    currentChapter = 0;

    voyageStartedScore = totalScore;

    hearts = 3;

    updateHearts();

    showChapter();

    playSound("click");

    showScreen("story-screen");
}


/* =========================================================
   SHOW CHAPTER
========================================================= */

function showChapter() {

    const part = parts[currentPart];

    if (!part) return;

    const chapter = part.chapters[currentChapter];

    if (!chapter) return;


    const partLabel =
        document.getElementById("part-label");

    const counter =
        document.getElementById("chapter-counter");

    const title =
        document.getElementById("chapter-title");

    const innerTitle =
        document.getElementById("chapter-title-inner");

    const image =
        document.getElementById("chapter-image");

    const text =
        document.getElementById("chapter-text");

    const nextButton =
        document.getElementById("next-chapter-button");

    const quizButton =
        document.getElementById("quiz-button");


    if (partLabel) {
        partLabel.textContent =
            `PART ${currentPart} — ${part.shortName}`;
    }

    if (counter) {
        counter.textContent =
            `${currentChapter + 1} / ${part.chapters.length}`;
    }

    if (title) {
        title.textContent =
            chapter.title;
    }

    if (innerTitle) {
        innerTitle.textContent =
            chapter.title;
    }

    if (image) {
        image.src =
            chapter.image;

        image.alt =
            chapter.title;
    }

    if (text) {
        text.innerHTML =
            formatStoryText(chapter.text);
    }


    if (currentChapter === part.chapters.length - 1) {

        if (nextButton) {
            nextButton.style.display = "none";
        }

        if (quizButton) {
            quizButton.style.display = "inline-block";
            quizButton.textContent =
                "TAKE THE VOYAGE QUIZ";
        }

    } else {

        if (nextButton) {
            nextButton.style.display = "inline-block";
            nextButton.textContent =
                "NEXT CHAPTER →";
        }

        if (quizButton) {
            quizButton.style.display = "none";
        }
    }
}


/* =========================================================
   FORMAT STORY
========================================================= */

function formatStoryText(text) {

    return text
        .trim()
        .split(/\n\s*\n/)
        .map(paragraph => `<p>${paragraph.trim()}</p>`)
        .join("");
}


/* =========================================================
   NEXT CHAPTER
========================================================= */

function nextChapter() {

    const part = parts[currentPart];

    if (currentChapter < part.chapters.length - 1) {

        currentChapter++;

        playSound("click");

        showChapter();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


/* =========================================================
   START QUIZ
========================================================= */

function startQuiz() {

    currentQuizQuestion = 0;

    hearts = 3;

    quizCorrect = 0;
    quizWrong = 0;

    voyageStartedScore = totalScore;

    updateQuizHeader();

    showQuizQuestion();

    playSound("click");

    showScreen("quiz-screen");
}


/* =========================================================
   SHOW QUIZ QUESTION
========================================================= */

function showQuizQuestion() {

    const part = parts[currentPart];

    const question =
        part.quiz[currentQuizQuestion];

    if (!question) return;


    const label =
        document.getElementById("quiz-voyage-label");

    const questionElement =
        document.getElementById("quiz-question");

    const buttons =
        document.getElementById("answer-buttons");

    const feedback =
        document.getElementById("quiz-feedback");


    if (label) {

        label.textContent =
            `VOYAGE ${currentPart} — ${part.shortName}`;
    }


    if (questionElement) {

        questionElement.textContent =
            question.question;
    }


    if (feedback) {

        feedback.textContent = "";
        feedback.className =
            "quiz-feedback";
    }


    if (buttons) {

        buttons.innerHTML = "";

        question.answers.forEach((answer, index) => {

            const button =
                document.createElement("button");

            button.className =
                "answer-button";

            button.textContent =
                `${String.fromCharCode(65 + index)}. ${answer}`;

            button.onclick = () =>
                answerQuestion(index);

            buttons.appendChild(button);
        });
    }

    updateQuizHeader();
}


/* =========================================================
   ANSWER QUESTION
========================================================= */


/* COLLECTIBLE REWARDS: stars are awarded once per correctly answered question. */
let goldenStars = 0;
const earnedBadges = new Set();
const badgeDefinitions = [
  {id:'first-voyage', name:'First Voyage Completed', icon:'🧭', description:'Complete Voyage I.'},
  {id:'vocabulary-explorer', name:'Vocabulary Explorer', icon:'📚', description:'Discover at least 5 vocabulary words.'},
  {id:'careful-reader', name:'Careful Reader', icon:'🔎', description:'Answer 10 questions correctly.'},
  {id:'perfect-score', name:'Perfect Score', icon:'🏆', description:'Answer every question in a voyage quiz correctly.'},
  {id:'master-traveler', name:'Master Traveler', icon:'👑', description:'Complete all four voyages.'}
];
function grantBadge(id){
  if(earnedBadges.has(id)) return;
  earnedBadges.add(id);
  const badge=badgeDefinitions.find(b=>b.id===id);
  if(badge && typeof showFeedback==='function') showFeedback('correct', `🏅 BADGE EARNED: ${badge.name}!`);
  renderAchievements();
}
function updateStarDisplays(){
  const a=document.getElementById('map-stars'); if(a) a.textContent=goldenStars;
  const b=document.getElementById('achievement-star-total'); if(b) b.textContent=goldenStars;
}
function renderAchievements(){
  const grid=document.getElementById('achievement-grid');
  if(!grid) return;
  grid.innerHTML=badgeDefinitions.map(b=>`<article class="achievement-card ${earnedBadges.has(b.id)?'earned':'not-earned'}"><div class="achievement-icon">${b.icon}</div><h3>${b.name}</h3><p>${b.description}</p><span>${earnedBadges.has(b.id)?'BADGE EARNED':'NOT YET EARNED'}</span></article>`).join('');
  updateStarDisplays();
}
function openAchievements(){renderAchievements();showScreen('achievements-screen');playSound('click');}

function answerQuestion(selectedIndex) {

    const part = parts[currentPart];

    const question =
        part.quiz[currentQuizQuestion];

    const buttons =
        document.querySelectorAll(".answer-button");

    buttons.forEach(button => {
        button.disabled = true;
    });


    const correctIndex =
        question.correct;

    const isCorrect =
        selectedIndex === correctIndex;


    if (isCorrect) {

        goldenStars += 1;
        updateStarDisplays();
        totalScore += 10;

        voyageScores[currentPart] += 10;

        quizCorrect++;

        buttons[selectedIndex].classList.add("correct");

        showFeedback(
            "correct",
            "🎉 CORRECT! +10 points!"
        );

        playSound("correct");

        answerHistory.push({

            voyage: `Voyage ${currentPart} — ${part.shortName}`,

            question: question.question,

            studentAnswer:
                selectedIndex >= 0 ? question.answers[selectedIndex] : "No answer (time expired)",

            correctAnswer:
                question.answers[correctIndex],

            result: "Correct",

            points: "+10"

        });

    } else {

        totalScore -= 2;

        voyageScores[currentPart] -= 2;

        quizWrong++;

        hearts--;

        if (buttons[selectedIndex]) {
            buttons[selectedIndex].classList.add("wrong");
        }

        if (buttons[correctIndex]) {
            buttons[correctIndex].classList.add("correct");
        }

        showFeedback(
            "wrong",
            `❌ OOPS! -2 points. Correct answer: ${question.answers[correctIndex]}`
        );

        playSound("wrong");

        answerHistory.push({

            voyage: `Voyage ${currentPart} — ${part.shortName}`,

            question: question.question,

            studentAnswer:
                selectedIndex >= 0 ? question.answers[selectedIndex] : "No answer (time expired)",

            correctAnswer:
                question.answers[correctIndex],

            result: "Incorrect",

            points: "-2"

        });
    }


    updateQuizHeader();


    setTimeout(() => {

        if (hearts <= 0) {

            failVoyage();

            return;
        }


        currentQuizQuestion++;


        if (
            currentQuizQuestion >=
            part.quiz.length
        ) {

            // A learner completes the voyage if at least one heart remains.
            // The Perfect Score badge is still reserved for zero wrong answers.
            if (hearts <= 0) {
                failVoyage();
            } else {
                completeVoyage();
            }

        } else {

            showQuizQuestion();
        }

    }, 2200);
}


/* =========================================================
   QUIZ FEEDBACK
========================================================= */

function showFeedback(type, message) {

    const feedback =
        document.getElementById("quiz-feedback");

    if (!feedback) return;

    feedback.textContent =
        message;

    feedback.className =
        `quiz-feedback ${type}`;
}


/* =========================================================
   QUIZ HEADER
========================================================= */

function updateQuizHeader() {

    const heartsElement =
        document.getElementById("quiz-current-hearts");

    const scoreElement =
        document.getElementById("quiz-current-score");


    if (heartsElement) {

        heartsElement.textContent =
            hearts;
    }


    if (scoreElement) {

        scoreElement.textContent =
            totalScore;
    }
}


/* =========================================================
   MAP HEARTS
========================================================= */

function updateHearts() {

    const mapHearts =
        document.getElementById("map-hearts");

    if (!mapHearts) return;

    mapHearts.textContent =
        "❤️".repeat(hearts) +
        "🖤".repeat(3 - hearts);
}


/* =========================================================
   COMPLETE VOYAGE
========================================================= */

function completeVoyage() {

    completedParts[currentPart] = true;
    if(currentPart===1) grantBadge('first-voyage');
    if(quizCorrect>=10) grantBadge('careful-reader');
    if(quizWrong===0) grantBadge('perfect-score');
    if(currentPart===4) grantBadge('master-traveler');

    playSound("complete");

    const message =
        document.getElementById("success-message");

    const score =
        document.getElementById("voyage-final-score");


    if (message) {

        if (currentPart < 4) {

            message.textContent =
                `Excellent work, ${playerName}! ` +
                `You completed ${parts[currentPart].shortName}. ` +
                `Your next voyage is now unlocked!`;

        } else {

            message.textContent =
                `Amazing work, ${playerName}! ` +
                `You have completed Gulliver's entire journey!`;
        }
    }


    if (score) {

        score.textContent =
            voyageScores[currentPart];
    }


    updateMap();

    createConfetti(
        "confetti-container"
    );

    setTimeout(() => {

        showScreen("success-screen");

    }, 300);
}


/* =========================================================
   RETURN TO MAP
========================================================= */

function returnToMap() {

    updateMap();

    showScreen("map-screen");

    playSound("click");
}


/* =========================================================
   FAIL VOYAGE
========================================================= */

function failVoyage() {

    const failedScore =
        document.getElementById("failed-score-value");

    if (failedScore) {

        failedScore.textContent =
            totalScore;
    }

    playSound("fail");

    showScreen("failed-screen");
}


/* =========================================================
   RETRY VOYAGE
========================================================= */

function retryVoyage() {

    hearts = 3;

    currentQuizQuestion = 0;

    quizCorrect = 0;
    quizWrong = 0;

    startQuiz();
}


/* =========================================================
   REVIEW THE JOURNEY
========================================================= */

function openReview() {

    const container =
        document.getElementById("review-content");

    if (!container) return;

    container.innerHTML = "";


    for (let partNumber = 1; partNumber <= 4; partNumber++) {

        const part =
            parts[partNumber];


        const partSection =
            document.createElement("div");

        partSection.className =
            "review-part";


        const heading =
            document.createElement("h2");

        heading.textContent =
            `PART ${partNumber} — ${part.name}`;

        partSection.appendChild(heading);


        part.chapters.forEach((chapter, index) => {

            const chapterBox =
                document.createElement("div");

            chapterBox.className =
                "review-chapter";


            const chapterTitle =
                document.createElement("h3");

            chapterTitle.textContent =
                `Chapter ${index + 1} — ${chapter.title}`;


            const bulletList =
                document.createElement("ul");


            const paragraphs =
                chapter.text
                    .trim()
                    .split(/\n\s*\n/);


            /*
               Take important phrases from the chapter
               and turn them into short review points.
            */

            paragraphs.slice(0, 5).forEach(paragraph => {

                const words =
                    paragraph.trim().split(" ");


                let shortPoint =
                    words.slice(0, 14).join(" ");


                if (words.length > 14) {
                    shortPoint += "...";
                }


                const li =
                    document.createElement("li");

                li.textContent =
                    shortPoint;

                bulletList.appendChild(li);
            });


            chapterBox.appendChild(
                chapterTitle
            );

            chapterBox.appendChild(
                bulletList
            );

            partSection.appendChild(
                chapterBox
            );

        });


        container.appendChild(
            partSection
        );
    }


    showScreen("review-screen");

    playSound("click");
}


/* =========================================================
   ANSWER HISTORY
========================================================= */

function openAnswerHistory() {

    const container =
        document.getElementById("answer-history");

    if (!container) return;


    container.innerHTML = "";


    if (answerHistory.length === 0) {

        container.innerHTML =
            `<p>No answers have been recorded yet.</p>`;

        showScreen("answer-history-screen");

        return;
    }


    answerHistory.forEach((item, index) => {

        const box =
            document.createElement("div");

        box.className =
            "history-item";


        box.innerHTML = `

            <h3>
                Question ${index + 1}
            </h3>

            <p>
                <strong>Voyage:</strong>
                ${item.voyage}
            </p>

            <p>
                <strong>Question:</strong>
                ${item.question}
            </p>

            <p>
                <strong>Your Answer:</strong>
                ${item.studentAnswer}
            </p>

            <p>
                <strong>Correct Answer:</strong>
                ${item.correctAnswer}
            </p>

            <p>
                <strong>Result:</strong>
                ${item.result}
            </p>

            <p>
                <strong>Points:</strong>
                ${item.points}
            </p>
        `;


        container.appendChild(box);
    });


    showScreen("answer-history-screen");

    playSound("click");
}


/* =========================================================
   FINAL SCORE
========================================================= */

function showFinalScreen() {

    const player =
        document.getElementById("final-player-name");

    const cardName =
        document.getElementById("score-card-name");

    const total =
        document.getElementById("final-total-score");

    const correct =
        document.getElementById("final-correct");

    const wrong =
        document.getElementById("final-wrong");

    const questions =
        document.getElementById("final-questions");


    if (player) {
        player.textContent =
            playerName;
    }

    if (cardName) {
        cardName.textContent =
            playerName;
    }

    if (total) {
        total.textContent =
            totalScore;
    }

    if (correct) {
        correct.textContent =
            quizCorrectTotal();
    }

    if (wrong) {
        wrong.textContent =
            quizWrongTotal();
    }

    if (questions) {
        questions.textContent =
            answerHistory.length;
    }


    for (let i = 1; i <= 4; i++) {

        const element =
            document.getElementById(
                `final-voyage-${i}-score`
            );

        if (element) {
            element.textContent =
                voyageScores[i];
        }
    }


    createConfetti(
        "final-confetti"
    );

    playSound("victory");

    showScreen("final-screen");
}


function quizCorrectTotal() {

    return answerHistory.filter(
        item => item.result === "Correct"
    ).length;
}


function quizWrongTotal() {

    return answerHistory.filter(
        item => item.result === "Incorrect"
    ).length;
}


/* =========================================================
   COMPLETED MAP
========================================================= */

function goToCompletedMap() {

    updateMap();

    showScreen("map-screen");

    playSound("click");
}


/* =========================================================
   RESTART
========================================================= */

function restartAdventure() {

    const confirmed =
        confirm(
            "Start the adventure again? Your current progress and score will be reset."
        );

    if (!confirmed) return;


    playerName = "";

    currentPart = 1;
    currentChapter = 0;
    currentQuizQuestion = 0;

    hearts = 3;
    totalScore = 0;

    voyageScores = {
        1: 0,
        2: 0,
        3: 0,
        4: 0
    };

    completedParts = {
        1: false,
        2: false,
        3: false,
        4: false
    };

    quizCorrect = 0;
    quizWrong = 0;

    answerHistory = [];

    const input =
        document.getElementById("player-name");

    if (input) {
        input.value = "";
    }


    updateMap();

    showScreen("cover-screen");

    playSound("click");
}


/* =========================================================
   CONFETTI
========================================================= */

function createConfetti(containerId) {

    const container =
        document.getElementById(containerId);

    if (!container) return;


    container.innerHTML = "";


    for (let i = 0; i < 70; i++) {

        const piece =
            document.createElement("span");

        piece.className =
            "confetti-piece";


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.animationDelay =
            Math.random() * 2 + "s";


        piece.style.animationDuration =
            2 + Math.random() * 3 + "s";


        piece.textContent =
            ["✦", "★", "◆", "●"][Math.floor(
                Math.random() * 4
            )];


        container.appendChild(
            piece
        );
    }
}


/* =========================================================
   SOUND EFFECTS
   Uses Web Audio API.
   No sound files are required.
========================================================= */

let audioContext = null;


function getAudioContext() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();
    }

    return audioContext;
}


function playSound(type) {

    try {

        const ctx =
            getAudioContext();


        if (ctx.state === "suspended") {
            ctx.resume();
        }


        const oscillator =
            ctx.createOscillator();

        const gain =
            ctx.createGain();


        oscillator.connect(gain);

        gain.connect(ctx.destination);


        let frequency = 440;
        let duration = 0.12;


        if (type === "click") {

            frequency = 520;
            duration = 0.08;

        } else if (type === "correct") {

            frequency = 720;
            duration = 0.22;

        } else if (type === "wrong") {

            frequency = 180;
            duration = 0.25;

        } else if (type === "complete") {

            frequency = 850;
            duration = 0.4;

        } else if (type === "victory") {

            frequency = 1000;
            duration = 0.7;

        } else if (type === "fail") {

            frequency = 140;
            duration = 0.45;
        }


        oscillator.frequency.value =
            frequency;

        oscillator.type =
            "sine";


        gain.gain.setValueAtTime(
            0.0001,
            ctx.currentTime
        );


        gain.gain.exponentialRampToValueAtTime(
            0.18,
            ctx.currentTime + 0.02
        );


        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            ctx.currentTime + duration
        );


        oscillator.start();

        oscillator.stop(
            ctx.currentTime + duration
        );


    } catch (error) {

        console.log(
            "Audio unavailable."
        );
    }
}


/* =========================================================
   FINAL VOYAGE CHECK
========================================================= */

function checkForFinalCompletion() {

    if (
        completedParts[1] &&
        completedParts[2] &&
        completedParts[3] &&
        completedParts[4]
    ) {

        setTimeout(() => {
            showFinalScreen();
        }, 800);

        return true;
    }

    return false;
}


/* =========================================================
   PATCH COMPLETE VOYAGE
========================================================= */

const originalCompleteVoyage =
    completeVoyage;


/*
   Replace the normal completion behavior with
   final-screen behavior after Voyage IV.
*/

completeVoyage = function() {

    completedParts[currentPart] = true;

    playSound("complete");


    const message =
        document.getElementById("success-message");

    const score =
        document.getElementById("voyage-final-score");


    if (message) {

        if (currentPart < 4) {

            message.textContent =
                `Excellent work, ${playerName}! ` +
                `You completed ${parts[currentPart].shortName}. ` +
                `Your next voyage is now unlocked!`;

        } else {

            message.textContent =
                `Amazing work, ${playerName}! ` +
                `You have completed Gulliver's entire journey!`;
        }
    }


    if (score) {

        score.textContent =
            voyageScores[currentPart];
    }


    updateMap();

    createConfetti(
        "confetti-container"
    );


    setTimeout(() => {

        if (currentPart === 4) {

            showFinalScreen();

        } else {

            showScreen("success-screen");
        }

    }, 500);
};


/* =========================================================
   INITIAL GAME STATE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
           VERY IMPORTANT:
           Every voyage starts LOCKED except Voyage I.
           Nothing is marked completed at the beginning.
        */

        completedParts = {
            1: false,
            2: false,
            3: false,
            4: false
        };


        totalScore = 0;


        voyageScores = {
            1: 0,
            2: 0,
            3: 0,
            4: 0
        };


        answerHistory = [];


        updateMap();

        /* Allow Enter to submit the name. */
        const nameInput = document.getElementById("player-name");

        if (nameInput) {
            nameInput.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    enterAdventure();
                }
            });
        }

    }
);

/* =========================================================
   FINAL BUILD ENHANCEMENTS
========================================================= */

const FINAL_TEACHER_BIO = `Regina Kemberly E. Pagatpat, MAEd, LPT, is an accomplished educator, academic researcher, and creative mentor based in Cebu, Philippines. She holds a Master of Arts in Education (MAEd) and is a Licensed Professional Teacher (LPT), dedicating her career to fostering academic excellence, data-driven inquiry, and holistic student development. As a dedicated research adviser, she guides students through complex academic studies, particularly under tracks focusing on Leadership, Policy, and Community Engagement, where she has successfully mentored vital student-led socio-environmental and sustainability projects. Beyond traditional academics, Professor Pagatpat extends her leadership to the arts, serving as a creative adviser and theater director. Notably, she has spearheaded student-led initiatives like Sinag Production, directing impactful cultural stage plays including "Bahaghari" and an adaptation of Dante’s "The Divine Comedy". Through this unique blend of research mentorship and cultural direction, she continues to inspire the next generation of Filipino leaders to become socially conscious, creative, and proactive citizens.`;

const openingDialogue = [
    "Welcome, traveler! I am Jonathan Swift, your guide to the extraordinary world of Gulliver’s Travels.",
    "Four voyages await you, filled with strange lands, curious societies, and hidden truths about human nature.",
    "Are you ready to uncover their secrets and overcome the challenges ahead?",
    "Then let your adventure begin!"
];
let openingIndex = 0;
let openingTimer = null;
let quizTimer = null;
let quizSeconds = 10;
let musicEnabled = true;
let effectsEnabled = true;
let musicVolume = 0.22;
let effectsVolume = 0.55;

const vocabByChapter = {
  "1-0": {
    "storm": [
      "a violent disturbance with strong wind and rain",
      "Gulliver's voyage is suddenly threatened by a storm."
    ],
    "ropes": [
      "strong cords used for tying or securing something",
      "Gulliver wakes to find ropes holding him to the ground."
    ]
  },
  "1-1": {
    "portions": [
      "amounts of food served to someone",
      "The Lilliputians prepare small portions for Gulliver."
    ],
    "prisoner": [
      "a person who is kept under guard or prevented from leaving",
      "Gulliver is treated as a prisoner at first."
    ]
  },
  "1-2": {
    "cooperation": [
      "working together toward the same goal",
      "Gulliver gains trust through cooperation with the Lilliputians."
    ],
    "strength": [
      "physical or mental power to do something",
      "Gulliver's strength makes him useful to the emperor."
    ]
  },
  "1-3": {
    "political": [
      "related to government or the way a country is governed",
      "Gulliver learns about political disagreements in Lilliput."
    ],
    "disagreements": [
      "differences of opinion or conflict between people",
      "The country has serious disagreements between groups."
    ]
  },
  "1-4": {
    "capture": [
      "the act of taking control of someone or something",
      "Gulliver helps capture the enemy ships."
    ],
    "success": [
      "the achievement of a desired result",
      "His success makes some officials jealous."
    ]
  },
  "1-5": {
    "customs": [
      "traditional practices of a group or society",
      "Gulliver studies the customs of Lilliputian families."
    ],
    "position": [
      "a place, role, or rank held by someone",
      "A person's position can affect life in Lilliput."
    ]
  },
  "1-6": {
    "officials": [
      "people who hold positions of authority in government",
      "Officials begin planning against Gulliver."
    ],
    "destroy": [
      "to damage something so badly that it cannot continue or remain",
      "Some officials want to destroy Gulliver's reputation."
    ]
  },
  "1-7": {
    "escape": [
      "the act of getting free from danger or confinement",
      "Gulliver plans his escape from Lilliput."
    ],
    "repaired": [
      "fixed something that was damaged or broken",
      "He repaired the boat before sailing away."
    ]
  },
  "2-0": {
    "farmer": [
      "a person who works on a farm",
      "A farmer discovers Gulliver in the giant country."
    ],
    "landscape": [
      "the visible features of an area of land",
      "The landscape seems enormous to Gulliver."
    ]
  },
  "2-1": {
    "kindness": [
      "friendly and caring behavior toward another person",
      "Glumdalclitch shows kindness to Gulliver."
    ],
    "ordinary": [
      "normal or usual",
      "An ordinary object can look huge in Brobdingnag."
    ]
  },
  "2-2": {
    "palace": [
      "the official home of a king or queen",
      "Gulliver is brought to the royal palace."
    ],
    "dangers": [
      "things that can cause harm or risk",
      "The palace contains unexpected dangers for Gulliver."
    ]
  },
  "2-3": {
    "previously": [
      "at an earlier time",
      "Gulliver compares the giant land with places he visited previously."
    ],
    "giants": [
      "very large people or beings",
      "The giants make Gulliver feel extremely small."
    ]
  },
  "2-4": {
    "monkey": [
      "a primate with hands and feet suited for climbing",
      "A giant monkey creates a dangerous situation for Gulliver."
    ],
    "dangerous": [
      "likely to cause harm or injury",
      "Even ordinary objects become dangerous at giant scale."
    ]
  },
  "2-5": {
    "military": [
      "related to soldiers, armies, or war",
      "Gulliver describes England's military to the King."
    ],
    "conversation": [
      "a spoken exchange between people",
      "Their conversation leads the King to question England."
    ]
  },
  "2-6": {
    "technology": [
      "the use of knowledge and tools to solve problems or create things",
      "Gulliver discusses military technology."
    ],
    "destruction": [
      "the act of causing severe damage or ruin",
      "The King worries about the destruction weapons can cause."
    ]
  },
  "2-7": {
    "container": [
      "an object used for holding or carrying something",
      "Gulliver is inside a traveling container."
    ],
    "carried": [
      "transported from one place to another",
      "An eagle carried the box away."
    ]
  },
  "3-0": {
    "floating": [
      "remaining on or moving through a surface without sinking",
      "Laputa is a floating island."
    ],
    "knowledge": [
      "information and understanding gained through learning or experience",
      "Gulliver encounters unusual knowledge on Laputa."
    ]
  },
  "3-1": {
    "astronomy": [
      "the study of stars, planets, and other objects in space",
      "Laputans are interested in astronomy."
    ],
    "interests": [
      "subjects or activities that attract someone's attention",
      "The islanders have unusual interests."
    ]
  },
  "3-2": {
    "complicated": [
      "difficult to understand because of many connected parts",
      "Life in Laputa can seem complicated."
    ],
    "distracted": [
      "unable to give full attention to something",
      "The Laputans are often distracted by their thoughts."
    ]
  },
  "3-3": {
    "experiments": [
      "tests carried out to discover or prove something",
      "Balnibarbi is filled with strange experiments."
    ],
    "progress": [
      "movement toward improvement or a goal",
      "Some projects are supposed to create progress."
    ]
  },
  "3-4": {
    "historical": [
      "connected with events or people from the past",
      "Gulliver hears historical stories from famous people."
    ],
    "opinions": [
      "beliefs or judgments about something",
      "Gulliver questions the opinions he hears."
    ]
  },
  "3-5": {
    "forever": [
      "for all time; without an end",
      "Gulliver first thinks living forever would be wonderful."
    ],
    "generations": [
      "groups of people born and living at different times",
      "The Struldbrugs witness many generations pass."
    ]
  },
  "3-6": {
    "permission": [
      "approval that allows someone to do something",
      "Gulliver receives permission to continue his journey."
    ],
    "scientific": [
      "related to science or systematic study",
      "Gulliver encounters scientific interests during his travels."
    ]
  },
  "4-0": {
    "creatures": [
      "living beings, especially animals or unusual beings",
      "Gulliver encounters strange creatures in the new land."
    ],
    "honesty": [
      "the quality of being truthful and sincere",
      "Gulliver notices the Houyhnhnms value honesty."
    ]
  },
  "4-1": {
    "reason": [
      "the ability to think logically and make sensible judgments",
      "The Houyhnhnms value reason."
    ],
    "peaceful": [
      "calm and free from violence or conflict",
      "Their society appears peaceful to Gulliver."
    ]
  },
  "4-2": {
    "social": [
      "related to people living together in a community",
      "Gulliver describes social life in Europe."
    ],
    "described": [
      "explained or represented with words",
      "Gulliver described European customs to the Houyhnhnms."
    ]
  },
  "4-3": {
    "behavior": [
      "the way a person or creature acts",
      "The Yahoos show troubling behavior."
    ],
    "greedy": [
      "wanting more than one needs or deserves",
      "The Yahoos are portrayed as greedy."
    ]
  },
  "4-4": {
    "wealth": [
      "valuable possessions or money",
      "The Houyhnhnms do not organize life around wealth."
    ],
    "valued": [
      "considered important or worthy",
      "They valued honesty and cooperation."
    ]
  },
  "4-5": {
    "decisions": [
      "choices made after thinking about what to do",
      "Gulliver discusses political decisions."
    ],
    "governments": [
      "organized systems that manage countries or communities",
      "He explains different European governments."
    ]
  },
  "4-6": {
    "devastated": [
      "extremely upset or heartbroken",
      "Gulliver is devastated when he must leave."
    ],
    "leaving": [
      "going away from a place",
      "Gulliver begins preparing for leaving the land."
    ]
  },
  "4-7": {
    "reminded": [
      "caused someone to remember something",
      "The Houyhnhnms reminded Gulliver of the society he had left."
    ],
    "changed": [
      "made different from how something was before",
      "His voyages changed how he viewed humanity."
    ]
  }
};

function escapeHtml(s){return String(s).replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[c]));}
function formatStoryWithVocab(text, part, chapter){
    let html = formatStoryText(text);
    const dict = vocabByChapter[`${part}-${chapter}`] || {};
    Object.entries(dict).forEach(([word,data])=>{
        const re = new RegExp(`\\b(${word})\\b`, 'gi');
        let highlighted=false; html = html.replace(re, (match)=>{ if(highlighted) return match; highlighted=true; return `<button type="button" class="vocab-word" data-word="${escapeHtml(word)}" data-meaning="${escapeHtml(data[0])}" data-note="${escapeHtml(data[1])}">${match}</button>`; });
    });
    return html;
}

function showVocabPopup(button){
    // Count distinct vocabulary terms, not repeated clicks on the same word.
    if(typeof grantBadge==='function' && !earnedBadges.has('vocabulary-explorer')) {
      if (!(window.vocabularyDiscoveries instanceof Set)) window.vocabularyDiscoveries = new Set();
      window.vocabularyDiscoveries.add(button.dataset.word || '');
      if(window.vocabularyDiscoveries.size>=5) grantBadge('vocabulary-explorer');
    }
    document.querySelectorAll('.vocab-popover').forEach(x=>x.remove());
    const pop=document.createElement('div');
    pop.className='vocab-popover';
    pop.innerHTML=`<button class="vocab-close" type="button">×</button><strong>${escapeHtml(button.dataset.word)}</strong><span>${escapeHtml(button.dataset.meaning)}</span><small>${escapeHtml(button.dataset.note)}</small>`;
    document.body.appendChild(pop);
    const r=button.getBoundingClientRect();
    pop.style.left=Math.min(window.innerWidth-300,Math.max(12,r.left))+'px';
    pop.style.top=Math.min(window.innerHeight-180,Math.max(12,r.bottom+10))+'px';
    pop.querySelector('.vocab-close').onclick=()=>pop.remove();
}

document.addEventListener('click',e=>{
    const v=e.target.closest('.vocab-word');
    if(v){e.preventDefault();showVocabPopup(v);return;}
    if(!e.target.closest('.vocab-popover')) document.querySelectorAll('.vocab-popover').forEach(x=>x.remove());
});

function startOpening(){
    playSound('click');
    showScreen('opening-screen');
    const video=document.getElementById('opening-video');
    const begin=document.getElementById('begin-quest-button');
    const skip=document.getElementById('skip-opening');
    if(begin) begin.style.display='none';
    if(skip) skip.style.display='inline-block';
    openingIndex=0;
    setDialogue();
    clearInterval(openingTimer);
    openingTimer=setInterval(()=>{
        if(openingIndex < openingDialogue.length-1){openingIndex++;setDialogue();}
        else clearInterval(openingTimer);
    },5200);
    if(video){video.currentTime=0; const p=video.play(); if(p&&p.catch)p.catch(()=>{}); video.onended=()=>finishOpening();}
}
function setDialogue(){const t=document.getElementById('dialogue-text');if(t)t.textContent=openingDialogue[openingIndex]||'';}
function finishOpening(){
    clearInterval(openingTimer);
    const video=document.getElementById('opening-video'); if(video) video.pause();
    const skip=document.getElementById('skip-opening'); const begin=document.getElementById('begin-quest-button');
    if(skip)skip.style.display='none'; if(begin){begin.style.display='inline-block';begin.textContent='BEGIN THE QUEST';}
    const t=document.getElementById('dialogue-text'); if(t)t.textContent=openingDialogue[openingDialogue.length-1];
}
function beginQuest(){playSound('success');showScreen('name-screen'); setTimeout(()=>document.getElementById('first-name')?.focus(),100);}

// Override name flow for full name entry.
showNameScreen = function(){ playSound('click'); showScreen('name-screen'); setTimeout(()=>document.getElementById('first-name')?.focus(),100); };
enterAdventure = function(){
    const f=document.getElementById('first-name'),m=document.getElementById('middle-name'),s=document.getElementById('surname'),err=document.getElementById('name-error');
    const first=f?.value.trim()||'', middle=m?.value.trim()||'', sur=s?.value.trim()||'';
    if(!first||!sur){if(err)err.textContent='Please enter your first name and surname.';playSound('wrong');return;}
    playerName=[first,middle,sur].filter(Boolean).join(' ');
    if(err)err.textContent='';
    document.getElementById('map-player-name').textContent=playerName;
    playSound('success'); updateMap(); startMusic(); showScreen('map-screen');
};

// Override chapter rendering with clickable vocabulary.
const _finalShowChapter=showChapter;
showChapter=function(){
    _finalShowChapter();
    const chapter=parts[currentPart]?.chapters[currentChapter];
    const text=document.getElementById('chapter-text');
    if(chapter&&text) text.innerHTML=formatStoryWithVocab(chapter.text,currentPart,currentChapter); createStoryInteractives();
};

function stopQuizTimer(){if(quizTimer){clearInterval(quizTimer);quizTimer=null;}}
function startQuizTimer(){
    stopQuizTimer(); quizSeconds=10; updateTimer();
    quizTimer=setInterval(()=>{quizSeconds--;updateTimer();if(quizSeconds<=0){stopQuizTimer();answerQuestion(-1,true);}},1000);
}
function updateTimer(){const el=document.getElementById('quiz-timer');if(el){el.textContent=quizSeconds;el.classList.toggle('danger',quizSeconds<=3);}}

const _finalStartQuiz=startQuiz;
startQuiz=function(){_finalStartQuiz();startQuizTimer();};
const _finalShowQuizQuestion=showQuizQuestion;
showQuizQuestion=function(){_finalShowQuizQuestion();startQuizTimer();};
const _finalAnswerQuestion=answerQuestion;
answerQuestion=function(index,timedOut=false){
    stopQuizTimer();
    if(timedOut){showFeedback('wrong','⏰ TIME IS UP! -2 points. Correct answer will be shown.');}
    _finalAnswerQuestion(index);
};

// Audio controls.
function startMusic(){
    const a=document.getElementById('background-music'); if(!a||!musicEnabled)return;
    a.volume=musicVolume; const p=a.play(); if(p&&p.catch)p.catch(()=>{});
}
function stopMusic(){const a=document.getElementById('background-music');if(a)a.pause();}
function setAudioControls(){
    const music=document.getElementById('background-music'); if(music)music.volume=musicVolume;
    const mt=document.getElementById('music-toggle'),et=document.getElementById('effects-toggle');
    mt?.addEventListener('click',()=>{musicEnabled=!musicEnabled;mt.textContent=musicEnabled?'ON':'OFF';musicEnabled?startMusic():stopMusic();});
    et?.addEventListener('click',()=>{effectsEnabled=!effectsEnabled;et.textContent=effectsEnabled?'ON':'OFF';});
    document.getElementById('music-volume')?.addEventListener('input',e=>{musicVolume=+e.target.value;if(music)music.volume=musicVolume;});
    document.getElementById('effects-volume')?.addEventListener('input',e=>{effectsVolume=+e.target.value;});
}
const _oldPlaySound=playSound;
playSound=function(type){if(effectsEnabled)_oldPlaySound(type);};

// Floating bubble pop game.
function createGlobalAnimatedElements(){
    const box=document.getElementById('global-ocean');
    if(!box || box.dataset.richReady) return;
    box.dataset.richReady='1';
    const items=[
      ['🐟','bg-fish f1'],['🐠','bg-fish f2'],['🐟','bg-fish f3'],['🪼','bg-jelly j1'],['🪼','bg-jelly j2'],
      ['🫧','bg-bubble b1'],['🫧','bg-bubble b2'],['🫧','bg-bubble b3'],['🪸','bg-coral c1'],['🌿','bg-seaweed s1'],
      ['🐚','bg-shell sh1'],['⭐','bg-starfish st1'],['🐢','bg-turtle t1'],['🕊️','bg-bird bird1'],['☁️','bg-mini-cloud mc1']
    ];
    items.forEach(([emoji,cls])=>{const e=document.createElement('div');e.className='bg-creature '+cls;e.textContent=emoji;box.appendChild(e);});
}

function createFloatingBubbles(){
    const box=document.getElementById('floating-bubbles');if(!box)return;
    for(let i=0;i<14;i++){const b=document.createElement('button');b.className='floating-bubble';b.type='button';b.textContent='';b.style.left=(Math.random()*96)+'%';b.style.animationDelay=(Math.random()*8)+'s';b.style.animationDuration=(7+Math.random()*8)+'s';b.onclick=()=>{b.classList.add('popped');playSound('pop');setTimeout(()=>b.remove(),250);};box.appendChild(b);}
}

// Memory Match.
const memoryPairs=[['Gulliver','Traveler'],['Lilliput','Tiny people'],['Brobdingnag','Giants'],['Laputa','Floating island'],['Houyhnhnms','Horses'],['Yahoos','Wild humans'],['Struldbrugs','Immortality'],['Blefuscu','Enemy country']];
let memoryDeck=[],memoryFirst=null,memoryLock=false,memoryMoves=0,memoryMatches=0;
function setupMemoryGame(){
    memoryDeck=[];memoryPairs.forEach((p,i)=>p.forEach((v,j)=>memoryDeck.push({id:i,label:v,pair:i,type:j})));
    memoryDeck.sort(()=>Math.random()-.5);memoryFirst=null;memoryLock=false;memoryMoves=0;memoryMatches=0;
    document.getElementById('memory-moves').textContent='0';document.getElementById('memory-matches').textContent='0';document.getElementById('memory-message').textContent='';
    const grid=document.getElementById('memory-grid');grid.innerHTML='';
    memoryDeck.forEach((card,index)=>{const b=document.createElement('button');b.className='memory-card';b.dataset.index=index;b.innerHTML='<span>?</span><strong></strong>';b.onclick=()=>flipMemoryCard(index,b);grid.appendChild(b);});
}
function flipMemoryCard(index,button){
    if(memoryLock||button.classList.contains('flipped')||button.classList.contains('matched'))return;
    const card=memoryDeck[index];button.classList.add('flipped');button.querySelector('strong').textContent=card.label;playSound('click');
    if(memoryFirst===null){memoryFirst={index,button,card};return;}
    memoryMoves++;document.getElementById('memory-moves').textContent=memoryMoves;
    const first=memoryFirst;memoryFirst=null;
    if(first.card.pair===card.pair){first.button.classList.add('matched');button.classList.add('matched');memoryMatches++;document.getElementById('memory-matches').textContent=memoryMatches;playSound('correct');if(memoryMatches===8){document.getElementById('memory-message').textContent='🎉 Perfect match! You found every pair!';createConfetti('memory-grid');}}
    else{memoryLock=true;playSound('wrong');setTimeout(()=>{first.button.classList.remove('flipped');button.classList.remove('flipped');first.button.querySelector('strong').textContent='';button.querySelector('strong').textContent='';memoryLock=false;},750);}
}
function openBonusGame(){showScreen('bonus-screen');setupMemoryGame();playSound('click');}

function openCertificate(){
    document.getElementById('certificate-name').textContent=playerName||'Explorer';
    document.getElementById('certificate-score').textContent=totalScore;
    showScreen('certificate-screen');
}
function printCertificate(){window.print();}
function openAboutProject(){document.getElementById('teacher-bio').textContent=FINAL_TEACHER_BIO;showScreen('about-screen');}

// The printed destination banners on the map image itself are the clickable targets.
// No cards, visible hotspots, or invisible overlay buttons are used.
document.addEventListener('DOMContentLoaded', () => {
    const map = document.querySelector('.adventure-map.final-adventure-map');
    if (!map || map.dataset.mapClickReady === 'true') return;
    map.dataset.mapClickReady = 'true';
    const regions = [
        { part: 1, x1: 0.12, x2: 0.43, y1: 0.42, y2: 0.53 }, // 1. Lilliput
        { part: 2, x1: 0.58, x2: 0.89, y1: 0.41, y2: 0.53 }, // 2. Brobdingnag
        { part: 3, x1: 0.19, x2: 0.49, y1: 0.74, y2: 0.85 }, // 3. Laputa and Others
        { part: 4, x1: 0.57, x2: 0.89, y1: 0.73, y2: 0.85 }  // 4. Houyhnhnms
    ];
    function regionAt(event) {
        const rect = map.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        return regions.find(r => x >= r.x1 && x <= r.x2 && y >= r.y1 && y <= r.y2);
    }
    map.addEventListener('click', event => {
        const region = regionAt(event);
        if (!region) return;
        event.preventDefault();
        event.stopPropagation();
        openPart(region.part);
    });
    map.addEventListener('mousemove', event => {
        map.style.cursor = regionAt(event) ? 'pointer' : 'default';
    });
    map.addEventListener('mouseleave', () => { map.style.cursor = 'default'; });
});


// Rich interactive environment with many clickable voyage-specific objects.
const voyageInteractiveSets = {
  "1": [
    [
      "🧍",
      "Hi! I'm a tiny Lilliputian. Welcome to Lilliput!"
    ],
    [
      "🏰",
      "Hi! The tiny palace is buzzing with activity!"
    ],
    [
      "🚩",
      "Hi! The Lilliputian flag is waving hello!"
    ],
    [
      "🐦",
      "Hi! A little bird is flying over Lilliput!"
    ],
    [
      "🛶",
      "Hi! This tiny boat is sailing toward Blefuscu!"
    ],
    [
      "🍎",
      "Hi! This giant apple could feed many tiny people!"
    ],
    [
      "⚔️",
      "Hi! The tiny soldiers are on guard!"
    ],
    [
      "🪙",
      "Hi! You found a shiny Lilliputian coin!"
    ]
  ],
  "2": [
    [
      "👨‍🌾",
      "Hi! I'm the farmer who discovered tiny Gulliver!"
    ],
    [
      "👧",
      "Hi! I'm Glumdalclitch. I'll take care of Gulliver!"
    ],
    [
      "🐒",
      "Hi! I'm a giant monkey. Everything here is huge!"
    ],
    [
      "🪣",
      "Hi! Even a simple container looks gigantic here!"
    ],
    [
      "👑",
      "Hi! The royal court welcomes you to Brobdingnag!"
    ],
    [
      "🍽️",
      "Hi! Would you like a giant-sized dinner?"
    ],
    [
      "🪶",
      "Hi! A giant feather is floating by!"
    ],
    [
      "🧺",
      "Hi! This basket is big enough for tiny Gulliver!"
    ]
  ],
  "3": [
    [
      "☁️",
      "Hi! I'm a cloud beneath the floating island of Laputa!"
    ],
    [
      "🎵",
      "Hi! Laputa loves music and harmony!"
    ],
    [
      "🔭",
      "Hi! I'm watching a strange experiment!"
    ],
    [
      "⚙️",
      "Hi! This strange machine is turning!"
    ],
    [
      "🧪",
      "Hi! The scientists are testing another unusual idea!"
    ],
    [
      "📐",
      "Hi! Mathematical patterns are everywhere!"
    ],
    [
      "🎻",
      "Hi! Listen to this curious Laputan tune!"
    ],
    [
      "🎈",
      "Hi! I'm a little floating invention!"
    ]
  ],
  "4": [
    [
      "🐴",
      "Hi! I'm a Houyhnhnm. Welcome to our peaceful land!"
    ],
    [
      "🐎",
      "Hi! We are watching Gulliver with curiosity!"
    ],
    [
      "🌾",
      "Hi! The peaceful fields are waving in the breeze!"
    ],
    [
      "🏡",
      "Hi! Welcome to a quiet Houyhnhnm home!"
    ],
    [
      "🌳",
      "Hi! The trees are gently waving hello!"
    ],
    [
      "🪶",
      "Hi! A feather is drifting across the pasture!"
    ],
    [
      "🥕",
      "Hi! You found a peaceful grazing spot!"
    ],
    [
      "👣",
      "Hi! Follow the hoofprints toward the hills!"
    ]
  ]
};

function showInteractionToast(message){document.querySelectorAll('.interaction-toast').forEach(x=>x.remove());const t=document.createElement('div');t.className='interaction-toast';t.textContent=message;document.body.appendChild(t);setTimeout(()=>t.remove(),2200)}
function makeInteractiveButton(cls,emoji,message,extraClass=''){const b=document.createElement('button');b.type='button';b.className=`${cls} ${extraClass}`;b.textContent=emoji;b.setAttribute('aria-label',message);b.title=message;b.addEventListener('click',()=>{b.classList.remove('decor-pop');void b.offsetWidth;b.classList.add('decor-pop');showInteractionToast(message);playSound('pop')});return b}
function createInteractiveMapElements(){const map=document.querySelector('.adventure-map');if(!map||map.dataset.interactiveReady)return;map.dataset.interactiveReady='1';const common=[['🐠','Hi! A colorful fish is swimming by!','14%','72%','swim'],['🐟','Hi! A silver fish is swimming through the route!','76%','74%','swim'],['🪼','Hi! The jellyfish is floating beneath the waves!','30%','72%','bob'],['🪼','Hi! A glowing jellyfish is drifting upward!','82%','56%','bob'],['🐚','Hi! You found a seashell!','14%','88%','bob'],['⭐','Hi! The starfish is sparkling hello!','89%','87%','spin'],['💎','Hi! A mysterious pearl is glittering underwater!','54%','83%','bob'],['🫧','Hi! Pop the bubble!','62%','18%','bob'],['☁️','Hi! The cloud is drifting over the voyage route!','46%','6%','bob'],['🦀','Hi! A tiny crab is scurrying sideways!','37%','91%','swim'],['🐢','Hi! A sea turtle is swimming by!','69%','89%','swim'],['🧭','Hi! The compass points toward the next voyage!','49%','27%','spin']];common.forEach(([e,m,l,t,a])=>{const b=makeInteractiveButton('interactive-decor',e,m,a);b.style.left=l;b.style.top=t;map.appendChild(b)})}
function createStoryInteractives(){const box=document.getElementById('story-interactives');if(!box)return;box.innerHTML='';const set=voyageInteractiveSets[currentPart]||voyageInteractiveSets[1];const positions=[[4,14],[92,18],[7,55],[90,58],[4,82],[94,82],[50,7],[50,91]];set.forEach((item,i)=>{const b=makeInteractiveButton('story-interactive',item[0],item[1],i%2?'swim':'bob');b.style.left=positions[i][0]+'%';b.style.top=positions[i][1]+'%';box.appendChild(b)})}

// Initialize final enhancements after the original initialization.
document.addEventListener('DOMContentLoaded',()=>{
    setAudioControls();createFloatingBubbles();createGlobalAnimatedElements();createInteractiveMapElements();
    const v=document.getElementById('opening-video');
    if(v)v.addEventListener('timeupdate',()=>{if(!v.paused && openingDialogue.length){const idx=Math.min(openingDialogue.length-1,Math.floor((v.currentTime/Math.max(v.duration||40,1))*openingDialogue.length));if(idx!==openingIndex){openingIndex=idx;setDialogue();}}});
});


// Final reset and effect-volume controls.
restartAdventure = function(){
    stopQuizTimer();
    playerName=''; currentPart=1; currentChapter=0; currentQuizQuestion=0; hearts=3; totalScore=0; quizCorrect=0; quizWrong=0; answerHistory=[];
    voyageScores={1:0,2:0,3:0,4:0}; completedParts={1:false,2:false,3:false,4:false};
    ['first-name','middle-name','surname'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
    updateMap(); showScreen('cover-screen'); playSound('click');
};

playSound = function(type){
    if(!effectsEnabled)return;
    try{
        const ctx=getAudioContext();
        if(ctx.state==='suspended')ctx.resume();
        const osc=ctx.createOscillator(), gain=ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        const now=ctx.currentTime;
        const settings={click:[520,.08],correct:[720,.22],wrong:[180,.25],complete:[850,.4],victory:[1000,.7],fail:[140,.45],pop:[620,.06],success:[780,.18]};
        const [freq,dur]=settings[type]||[440,.12];
        osc.frequency.value=freq; osc.type='sine';
        gain.gain.setValueAtTime(.0001,now); gain.gain.exponentialRampToValueAtTime(Math.max(.0002,effectsVolume*.16),now+.015); gain.gain.exponentialRampToValueAtTime(.0001,now+dur);
        osc.start(now); osc.stop(now+dur+.02);
        if(type==='correct'||type==='complete'||type==='victory'||type==='success'){
            setTimeout(()=>{ if(effectsEnabled){const c=getAudioContext(),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.frequency.value=freq*1.25;g.gain.setValueAtTime(.0001,c.currentTime);g.gain.exponentialRampToValueAtTime(Math.max(.0002,effectsVolume*.12),c.currentTime+.01);g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+dur*.8);o.start();o.stop(c.currentTime+dur);}},60);
        }
    }catch(e){}
};

/* =========================================================
   FINAL V4 INTERACTIVE REBUILD — ILLUSTRATED, NON-EMOJI OBJECTS
========================================================= */
function makeIllustratedInteractive(cls, message, artClass, extraClass='') {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = `${cls} ${extraClass}`;
    b.setAttribute('aria-label', message);
    b.dataset.message = message;
    b.innerHTML = `<span class="interactive-art ${artClass}" aria-hidden="true"></span><span class="interactive-hi">HI!</span>`;
    b.addEventListener('click', () => {
        b.classList.remove('active');
        void b.offsetWidth;
        b.classList.add('active');
        playSound('pop');
        setTimeout(() => b.classList.remove('active'), 2200);
    });
    return b;
}

createStoryInteractives = function(){
    const box=document.getElementById('story-interactives');
    if(!box) return;
    box.innerHTML='';
    const set=voyageInteractiveSets[currentPart]||voyageInteractiveSets[1];
    const artByPart={
      1:['art-tiny-person','art-tiny-house','art-flag','art-bird','art-boat','art-apple','art-soldier','art-coin'],
      2:['art-farmer','art-girl','art-monkey','art-bucket','art-crown','art-food','art-feather','art-basket'],
      3:['art-cloud','art-music','art-telescope','art-machine','art-flask','art-math','art-instrument','art-balloon'],
      4:['art-horse','art-horse2','art-grass','art-house','art-tree','art-feather2','art-carrot','art-hoof']
    };
    const arts=artByPart[currentPart]||artByPart[1];
    const positions=[[1.5,12],[92,13],[1.5,43],[92,44],[1.5,73],[92,74],[5,26],[86,27]];
    set.forEach((item,i)=>{
      const b=makeIllustratedInteractive('story-interactive',item[1],arts[i]||arts[0],i%2?'swim':'bob');
      b.style.left=positions[i][0]+'%'; b.style.top=positions[i][1]+'%';
      box.appendChild(b);
    });
};

createInteractiveMapElements = function(){
    document.querySelectorAll('.map-interactive').forEach(el=>{
      el.addEventListener('click',()=>{
        el.classList.remove('active'); void el.offsetWidth; el.classList.add('active'); playSound('pop');
        setTimeout(()=>el.classList.remove('active'),2200);
      });
    });
};

// Remove the old emoji-based interactive objects if an earlier initializer created them.
document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.adventure-map .interactive-decor').forEach(el=>el.remove());
    document.querySelectorAll('.story-interactives .story-interactive').forEach(el=>el.remove());
    createInteractiveMapElements();
});

/* =========================================================
   CONSOLIDATED GAMEPLAY SAFEGUARDS
   Keep the existing game and all its screens; improve cumulative
   achievement tracking and make sure a full restart clears rewards.
========================================================= */
let lifetimeCorrectAnswers = 0;
const _answerQuestionWithCumulativeBadge = answerQuestion;
answerQuestion = function(selectedIndex, timedOut = false) {
    const q = parts[currentPart]?.quiz?.[currentQuizQuestion];
    const earnedCorrect = Boolean(q && selectedIndex === q.correct && !timedOut);
    _answerQuestionWithCumulativeBadge(selectedIndex, timedOut);
    if (earnedCorrect) {
        lifetimeCorrectAnswers += 1;
        if (lifetimeCorrectAnswers >= 10) grantBadge('careful-reader');
    }
};

const _completeVoyageWithBadgeCheck = completeVoyage;
completeVoyage = function() {
    _completeVoyageWithBadgeCheck();
    if (lifetimeCorrectAnswers >= 10) grantBadge('careful-reader');
    renderAchievements();
};

const _restartAdventureWithRewardReset = restartAdventure;
restartAdventure = function() {
    _restartAdventureWithRewardReset();
    goldenStars = 0;
    lifetimeCorrectAnswers = 0;
    earnedBadges.clear();
    updateStarDisplays();
    renderAchievements();
};

/* Keep status labels synchronized whenever the map is refreshed. */
const _updateMapWithVisibleStatuses = updateMap;
updateMap = function() {
    _updateMapWithVisibleStatuses();
    for (let i = 1; i <= 4; i++) {
        const badge = document.getElementById(`map-voyage-status-${i}`);
        if (!badge) continue;
        const status = completedParts[i] ? 'COMPLETED' : (i === 1 || completedParts[i - 1] ? 'UNLOCKED' : 'LOCKED');
        badge.textContent = status;
        badge.classList.toggle('completed', status === 'COMPLETED');
        badge.classList.toggle('unlocked', status === 'UNLOCKED');
        badge.classList.toggle('locked', status === 'LOCKED');
    }
};
