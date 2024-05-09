const appContainer = document.getElementById("content");
function renderHomePage() {
  appContainer.innerHTML = `
    <div class="w-full  rounded-lg overflow-hidden pt-20">
              
              <div class='w-full' id="video">
              <video autoplay controls loop class='w-[90%] m-auto h-[40vh] object-cover rounded-md'>
              <source src="../../src/assets/vids/smoketree.mp4" type="video/mp4">
              </video>
              </div>
              
              <div class='flex items-center justify-between w-[75%] m-auto'>
              <button onclick="switchPrev()" class=" px-1 rounded-sm text-text2 text-xl">⨞</button>
              <button onclick="switchVid()" class=" px-1 rounded-sm text-text2 text-xl rotate-180">⨞</button>
              </div>
              <p
                class="text-center text-text2 font-bold font-mono tracking-widest py-4"
              >
                Shalom saint!! Welcome to His Voice
              </p>
              <hr class='bg-background2 w-[90%] m-auto my-2'/>
              <!-- dividers dividers -->
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div class="relative mb-12 px-3 lg:mb-0">
                  <div class="mb-2 flex justify-center">
                    <span class="text-primary">
                      <img
                        src="../../src/assets/icons//books.png"
                        class="h-14 w-14 z-10"
                      />
                    </span>
                  </div>
                  <h6
                    class="mb-0 font-normal text-center text-text2 text-[.9rem]"
                  >
                    New Birth
                  </h6>
                  <p class='text-blu absolute right-0 top-0 text-[3rem] '>⇢</p>
                </div>
                <div class="relative mb-12 px-3 lg:mb-0">
                  <div class="mb-2 flex justify-center">
                    <span class="text-primary">
                      <img src="../../src/assets/icons/books.png" class="h-14 w-14 z-10" />
                    </span>
                  </div>
                  <h6
                    class="mb-0 font-normal text-center text-text2 text-[.9rem]"
                  >
                    Outpouring
                  </h6>
                  <p class='text-blu absolute right-0 top-0 text-[3rem] '>⇢</p>
                </div>
                <div class="relative mb-12 px-3 lg:mb-0">
                  <div class="mb-2 flex justify-center">
                    <span class="text-primary">
                      <img src="../../src/assets/icons/books.png" class="h-14 w-14" />
                    </span>
                  </div>
                  <h6
                    class="mb-0 text-center text-text2 font-normal text-[.9rem]"
                  >
                    Change of Body
                  </h6>
                  <p class='text-blu absolute right-0 top-0 text-[3rem] '>⇢</p>
                </div>
                <div class="relative mb-12 px-3 lg:mb-0">
                  <div class="mb-2 flex justify-center">
                    <span class="text-primary">
                      <img src="../../src/assets/icons/books.png" class="h-14 w-14" />
                    </span>
                  </div>
                  <h6
                    class="mb-0 text-center text-text2 font-normal text-[.9rem]"
                  >
                    Back to Eden
                  </h6>
                </div>
              </div>
             
            </div>
    `;
}

function switchVid() {
  const vidHold = document.getElementById("video");
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<video autoplay controls loop class='w-[90%] m-auto h-[40vh] object-cover rounded-md'>
      <source src="../../src/assets/vids/smoketree.mp4" type="video/mp4">
      </video>`;
  vidHold.innerHTML = "";
  vidHold.appendChild(newDiv);
}

function switchPrev() {
  const vidHold = document.getElementById("video");
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<video autoplay controls loop class='w-[90%] m-auto h-[40vh] object-cover rounded-md'>
      <source src="../../src/assets/vids/treeturn.mp4" type="video/mp4">
      </video>`;
  vidHold.innerHTML = "";
  vidHold.appendChild(newDiv);
}

function renderNewSongPage() {
  appContainer.innerHTML = `
      <div class='py-14 text-[3rem] font-mono text-text1  text-center'>
      BROKEN FELLOWSHIP
October 21, 1964 PM. New York, NY
Robert Lee. Lambert
Let us remain standing just a moment, please for a word of prayer before we bring the
message. Let us bow our heads.
Opening Prayer: Brother Lambert
Almighty God, we are so grateful to be here. Lord, to fellowship around the name of
Jesus Christ, through the blood of the Lamb. We’re thankful, Heavenly Father, for these songs
that were sang, Lord, from the bottom of your saints' hearts, Lord. We’re so thankful, Father
that we can sit here and meditate and listen upon these things and to know that we’re looking,
Lord for thy soon coming, Father and to be taken out of this cesspool of iniquity, Lord. To be
taken out of this hatred and malice and envy and strife and “dog eat dog” life around us,
Lord. To be carried up into the presence of our savior where we will be with Him at the
marriage supper of the Lamb. And then to come back upon earth, Heavenly Father, and rule
and reign with Jesus Christ, our Savior, for a thousand years. My God, we have something to
praise you for, tonight God. We have something to thank you for, Heavenly Father. We thank
you for these great things, Father. And now, in the name of Jesus Christ, I take authority,
power and dominion over every spirit in here. I take it under the name of Jesus Christ and
under our control, tonight.
Heavenly Father, we rebuke the devil in the name of Jesus Christ, and break the power
of Satan over these people, God that they may be set free for the deliverance of your word, in
the name of Jesus Christ. Father, have mercy upon me, tonight. Make me an able minister
tonight, Lord by the faithfulness of the Holy Ghost. May he come, Lord that the Gospel may
be preached under the anointing and the power of the Holy Ghost, in Jesus name. Bless our
Brother from Jamaica, Brother Brown. Lift him up tonight, God, and encourage him and set
him on fire for thee. In Jesus name, we ask it.
I am so thankful... You may be seated, forgive me. I am so thankful for the name of
Jesus and for the power of the Holy Ghost. Lord God, we have so much to be thankful
for. And I’m also thankful, tonight to see my precious Brother Brown, even though I do feel
like repenting to him tonight. You forgive me Brother Brown, for not writing. I have been so
worried about facing him. I thought, "Oh Lord, have mercy upon me and help me be more
faithful to write." I don't know... I need prayer along this line and Joe and them know, I don't
write them either. But if you pray, I’m going to feel guilty more after seeing Brother Brown,
why I’ll try to be more faithful, Brother Brown, in writing, cause you know how sometimes
we... Being overseas there and being surrounded by hostile forces to this truth that we’re
preaching and not having too much ministerial fellowship, well then, I think we should all
Broken Fellowship
October 21, 1964 PM.
2
remember that we need to write Brother Brown and realize how we might feel if we were in
his shoes, also.
But I tell you, I’d like to preach tonight on a little message called “Broken
Fellowship.” And I think that the Lord has so chosen it that way because we… our minds are
upon fellowship tonight because our Brother Brown, our precious Brother, is laboring in this
message which is very persecuted and we are anxious to fellowship around the word, Is that
right? And around the Blood of Jesus. So much has been said, tonight, about fellowship. You
know, I didn’t… I just felt that Brother Brown was going to be here today because I had a
message on fellowship. And I asked Brother Hunt, when we got out in the car. I said, "Isn't
Brother Brown here yet?" And he said, "No, no, he’s not here yet." I said, "Oh my!" So, when
we got there, we found out that he’d just arrived. So, I certainly am thankful for that, that
Brother Brown is with us tonight.
Now if you’ll open your Bibles, we’ll hurriedly go right into the word and read from
the fifteenth chapter of John and the seventh verse. How many feel victory in your life
because of this overcoming prayer we have been persevering in? Can you say, Amen? Did
you feel like the service was lifted up to a little bit higher realm tonight, wasn't it? I see we’re
reaping the benefit of our overcoming evil nature. Is that right? Can you say, Amen one more
time? Amen. Do you feel like there has been a change in you the last week? Can you say,
Amen? I tell you there has been a change in me, too. Now reading from the fifteenth chapter
and the seventh verse.
John 15:7-Ad lib Scripture Reading:
Jesus said, “if ye abide in me, and my Words abide in you, ye shall ask what ye will, and it
shall be done unto you.” Amen.
I think this Scripture points to a wonderful fellowship. “If ye abide in Me and My
Words abide in you, ye shall ask what ye will and it shall be done” Is that right? “ unto you” I
think this is a wonderful fellowship, when we can abide in such a fellowship as this with the
Lord Jesus Christ. So, whatever we ask in his name, Jesus, it shall be done. Not "maybe so"
but it shall be done. The entire plan of redemption points to the wonderful word,
“fellowship.” For what would redemption and a new creation mean if God had no fellowship
with His children? Is that right? The reason why believers are unable to get into the word and
enjoy the fruits and privileges in Christ, is because their fellowship is either broken or they
have a very low type of fellowship. The happiness of the home... Which, you know about
fellowship in the home, the fellowship in the home between the members of that
household. There would never be a divorce case if the fellowship between the husband and
the wife continued on. Is that right? It is only when that fellowship of husband and wife is
broken that there comes a divorce. Right?
Now when one is born again and becomes a new creation, the highest joy of
fellowship that spirit of the individual can receive comes from his perfect fellowship with his
Lord and Savior when he is first born again and falls madly in love with Jesus. He has a
beautiful fellowship with the Lord Jesus Christ. He has fallen in love with the Savior,
God. Amen. That’s real fellowship.
Now there is many things that would break this fellowship with the Lord Jesus Christ
and we’re gonna dwell on a few of those things. One thing that breaks the fellowship in the
Broken Fellowship
October 21, 1964 PM.
3
home, just getting in the home, now, is the thoughtless act that you commit against one
another. The unkind word or the hateful look that you give your wife or your children. Is that
right? This wound’s the heart and bruises the spiritual nature, thereby breaking fellowship in
the home. When the fellowship is broken in the home of the believers, it leaves the home open
to all sorts of manifestations of evil power. Is that right? And when the fellowship of the home
is broken, we bring that Broken Fellowship into the body of the Lord Jesus Christ and thereby
try to break up the whole fellowship around the name of Jesus and the Power of God. Can you
say, Amen?
Now, fellowship is not a mental thing, it’s a spiritual thing. The mind comes in
harmony with the spirit and enriches the fellowship that you have. When you have perfect
harmony in the mind toward the word of God, toward the saints of God, toward your Savior in
accordance with the word, then you have harmony in your fellowship with your Savior, Is that
right? With your family, with your brothers and sisters in Christ Jesus.
Now when this fellowship is broken with the Lord, the Bible becomes a closed Book.
Is that right? The Bible becomes a closed Book for the simple reason that the same Bible that
once blessed you, now, because that you have broken fellowship with the Lord Jesus Christ, it
comes to condemn you. So therefore, you cannot open it because everything in the Bible
condemns you. So then, if you have no positive fellowship with the Lord Jesus Christ and you
have a broken fellowship with the Lord Jesus Christ, you have no hunger for the word of
God. Henceforth, it becomes a closed book and... as you heard the old song "Dust Upon the
Bible." Dust begins to settle upon the Bible because of broken fellowship. But when that
believer is in a perfect fellowship with the Lord Jesus Christ, the word of God gives that
person nothing but joy. Then when this fellowship is broken, no desire to read the word, you
have no desire to pray either. The best that you can do is, through terrible condemnation, you
fall down upon your knees at night and say a little prayer about two or three minutes long,
"Lord thank you for this day, and jump in the bed and you know that God never heard you. So
therefore, you never had any overcoming prayer because you knew that your fellowship with
your Jesus was broken. No appetite for the word of God. No desire to pray any longer. Is that
right?
Now, another reason for Broken Fellowship could be, as John put it in I John
1:3... How would you like to read I John 1:3? I’ll read it and you can just note this to save
time. John telling us about fellowship goes like this.
1 John 1:3-Scripture Reading;
3 That which we have seen and heard declare we unto you, that ye also may have fellowship
with us: and truly our fellowship is with the Father, and with his Son Jesus Christ.
We’re not gathered here, tonight, to fellowship around any other thing but the Lord
Jesus Christ and his word. That’s all. Then, by this, we have a perfect fellowship with one
another. Can you say, Amen? Now, you take... Happiness and joy are things that you reap
from a perfect fellowship with Christ. Is that right? Now there is a difference between
happiness and joy. Happiness comes from the right association. Is that right? But Joy comes
from a perfect fellowship with your Heavenly Father and through his word. This gives you
joy. It is a wonderful experience to have, that you are able through this perfect fellowship with
the Lord Jesus Christ, you are able to say, “In the name of Jesus, I cast you out, evil
Broken Fellowship
October 21, 1964 PM.
4
spirits.” “In the Name of Jesus, I take dominion and power over all the authority of the
devil." This creates joy. Is that right? You can bring this kind of joy to the heart of your
Heavenly Father, and joy to your own heart because your Heavenly Father receives joy when
the devil's works are stopped in his tracks. And the works of the devil can only be stopped
when, through a perfect fellowship with Jesus Christ, you are able to stop him because of that
perfect fellowship. Because you have confidence in your heart that whatsoever you asked in
his name, he shall do it because you please him. Amen.
We have a three-fold fellowship: first, a fellowship with the Father. Is that right? A
fellowship with his word, a fellowship with one another. This is a perfect fellowship in the
Assembly. Any other kind of fellowship that we may have comes not... doesn’t amount to
very much. But if we can fellowship in this three-fold fellowship, first with the Father, then
with his word, then with one another, then we’re “walking in the Light as he’s in the light,
having fellowship one with another. And the Blood of Jesus Christ, His Son cleanseth us from
all sin,” through this type of fellowship.
Oh, what a fellowship, oh what a joy divine, leaning on the Everlasting Arm. I want to
teach this instead of preaching it because I think you’ll get it better. We really need this. Now,
one of the greatest reasons, just one, I said, that I know of to break fellowship with your
Heavenly Father is this: one of the greatest, and that is to fail to love your brother or
sister. Failure to love your brother and sister because of their outward appearance, or failure to
love them because they didn't do something you like, failure to love them because they don't
come over and fellowship with you enough, or whatever reason you may find. When you don't
love your brother or sister, then you have a broken fellowship with Jesus Christ and you are
open for all the power of the devil then. This is one thing that’s holding the Bride of Jesus
Christ back. Open your Bibles real quick to
1 John 2:9-Scripture Reading;
9 He that saith he is in the light, and hateth his brother, is in darkness even until now.
I don't care if you say that you’re sitting at the feet of a prophet. If you say that you
believe every bit of the message, but if you don't have perfect love towards your brother and
sister, you are walking in darkness, my friend, and you have a broken fellowship with Jesus
Christ. You broke your fellowship right then. That is what John said. Now, read on down.
1 John 2:10-11-Scripture Reading;
10 He that loveth his brother abideth in the light, and there is none occasion of stumbling in
him.
11 But he that hateth his brother is in darkness, and walketh in darkness, and knoweth not
whither he goeth, because that darkness hath blinded his eyes.
John said that, that brother who didn't love his brother with a perfect love, though he
said he was in the truth, John said, I don't care what you say, you’re walking in darkness. And
you cannot be led by the Spirit of God because you have got a broken fellowship the first time
that you didn't love your brother. You broke fellowship with Jesus and Jesus is not leading
you by His Spirit. So therefore, Brother, you are walking in darkness. Glory to God! Walking
in darkness because you don't love your brother and sister like you should. You can't be led by
Broken Fellowship
October 21, 1964 PM.
5
the Holy Spirit. Thereby, because you have broken fellowship, because you talked about your
brother and you didn't love him, you broke fellowship with Jesus Christ and you’re not led by
the Spirit any longer. And when you are not led by the Spirit, you fulfill the lust of the flesh. I
tell you, a fellowship with Jesus means something. Glory to God!
I John 3:9-Reading
Whosoever is born of God doth not commit sin; for His Seed remaineth in him, and he cannot
sin, because he is born of God.
But we ain't going to stop there. You get a wrong impression of that Scripture if you
don't read any further. You say, "Well, we are predestinated and we can dislike a brother, we
can do anything we want to because we’re predestinated before the foundation of the world."
That is wallowing around in that evil nature again, but that evil nature has been
severed by Jesus Christ and by the Power of the Holy Ghost and you cannot sin because you
are walking in the righteousness of Jesus Christ doing His Will after the Spirit of God. Can
you say, Amen? “In this the children of God are manifested.” Said, in this right here, the
children of God are manifested from the children of the devil.
1 John 3:10-Reference quote:
10 In this the children of God are manifest, and the children of the devil: whosoever doeth not
righteousness is not of God, neither he that loveth not his brother.
YOU CAN BE A CHILD OF THE DEVIL AND STILL BE BELIEVING IN
NINETY-NINE PERCENT OF THE WORD OF GOD, BUT IF YOU DON'T LOVE YOUR
BROTHER, MY GOD! YOU’RE WALKING IN DARKNESS. HALLELUJAH! AND THE
SPIRIT OF GOD CAN'T LEAD YOU OR GUIDE YOU. I tell you that, tonight. That’s what
the Bible said. John said, "Brother, you’re walking in darkness and you don't know where
you’re going." Glory to God. That’s the truth. I feel that one! My! John said, "Herein," said,
"Herein was the children of God made manifested and the children of darkness." John said,
"We know that if you walk in love, if you walk in love, but if you walk in the walk of the
believer, you say you are a believer and believe all the truth in the message in the hour, and
don't love your Brother, you’re walking in darkness and don't know it. John said, "You don't
even know what you’re doing, brother." You don't even know where you’re going. You can
say you’re led by the Spirit but you’re not.
Now, I John... I want to read that a little bit.
1 John 3:11-12-Scripture Reading;
11 For this is the message that ye heard from the beginning, that we should love one another.
12 Not as Cain, who was of that wicked one, and slew his brother. And wherefore slew he him?
Because his own works were evil, and his brother's righteous.
You take a person that has got in their heart anything against a brother or sister, right
away he breaks fellowship with Jesus Christ, right away. And then if he continues to do that…
Is, that right? He is open for all the demon force, that the devil has. Is, that right? And then
Broken Fellowship
October 21, 1964 PM.
6
when that brother... He is still walking though, but he don't know it but his path is in
darkness. His path is darkness, he don't know which way he is going, so therefore he makes
all kinds...
I know what I'm talking about, I have reached this right here, Brother. I have reached
this right here. I’m not... maybe on that point right there, but another point. I broke fellowship
with Jesus Christ by another point. And I know why... I am able to preach this message
tonight because I have experienced it. When you break fellowship with Jesus Christ, you’re
open for everything the devil's got for ya. Can you say, Amen? You can't be led by the Spirit
any longer. Amen. And then you don't want to be around your spiritual brothers any more
that is walking in the Light because the very life that they live, condemns your false works. So
therefore, you break fellowship with them, too. Can you say, Amen? Because the life that they
live condemns you and shows you that you are not walking in the Spirit. Glory to God! John
knew something about fellowship, Friend, same reason.
We don't love our brother, usually, because we either got some personal thing against
him or you take a brother that brother is being used of God. And if that brother is being used
of God and the power of God is upon him, another brother will get in his heart a little bit of
jealousy. Right then that brother broke fellowship with Jesus Christ and his path becomes
darkness. And then he begins to hate that brother and finds everything wrong with him he can
and begins to accuse him. He made himself just like Cain who slew his Brother because his
own works was unrighteous. Brother, there is a lot of slaying going on, today. There sure are a
lot of natures of Cain around today. Brother, if you got a Cain nature tonight, repent of that
thing and take on the Nature of Jesus Christ.
John said, "Whosoever hateth his brother is a murderer." Brother, you can talk about
the front pages on the magazines, you can talk about the papers that come out, this one
murdered or that one, but I tell you, if you talk about your brother, if you talk about your
sister, if you’re not in subjection to your pastor and to your elders and to your deacons,
brother you're just as big a murderer as Cain ever was. You put yourself under the law, you’re
disfellowshipped from the Body of Jesus Christ and from the fellowship of the Lamb. Glory
to God! Repent and get under the Blood. Yes, amen! That’s amen, it’s the Word anyway. I
John 4:20. Course if you’re in broken fellowship, you can't say, Amen! You know, it will
condemn you. John said...
1 John 4:20-Scripture quote:
If a man say I love God, and hateth his Brother, he is a liar. But he that loveth not his Brother
whom he hath seen, how can he love God whom he hath not seen?
I tell you that makes sense to me because Jesus Christ is dwelling in your brother. So,
if you speak one word against your brother, you’re speaking against Jesus Christ and you
broke your fellowship. Oh, I tell you, that word will sure hem us up. Might as well repent and
make it right. Only one way out for us, is repent. So, glad there is room for repentance. You
heard that song: "There's Room at the Cross." There is room, yes sir. John said, "If you say, if
you hate your brother and you are walking in the light," said, "You are a liar. I tell you that,
that might seem uncouth for some of us today. But I tell you those Apostles didn't hold back,
they would not... I am so glad that my God is not a respecter of persons. And the same word
that I have to turn to, I don't care who you are, you got to come to the same word because God
Broken Fellowship
October 21, 1964 PM.
7
is no respecter of persons. He don't care if you’re yellow, black or white, green or purple. God
is no respecter of persons. All you have to do is obey the word of God and God is going to
vindicate you; God is going to bless you; God is going to pour out His spirit upon you,
overcome your life... Hallelujah! Glory to God!
God said, "Cain if you didn't do well," said "won't God bless you? He said, "Cain if
you do well, won't God bless you?" He told Cain, said "I am not a respecter of persons,
Cain. You come on and get right with Me and I’ll bless ya." Then if God is blessing
somebody else, I’m not gonna get jealous because, when I get jealous I make myself a
Canaanite. All you Canaanites, tonight, repent and get under the Blood of Jesus Christ. Get
that old evilness out of your heart. Start loving one another. Hallelujah!
One more reason... I tell you, the Word of God will thin this thing down where there
ain't going to be no room for sin, brother. The devil ain't going to have no room to work in
here. The only way he can work is work outside somewhere. Amen. One more great reason I
know, and it’s a big one, too, to break fellowship with the Lord Jesus Christ. John said if we
love the world... Is that right? He said, "Love not the world neither the things that are in the
world, if any man say that he... If any man love the world, the love of the Father is not even in
that man." I don't care if he says he has got the Baptism of the Holy Ghost; I don't care if he
says he’s listening to the Truth; I don't care if he says he sits right at the feet of a prophet. My
Brother, if you’re in love or Sister with the things of the world, then the Love of God don't
even dwell in you. You have got a broken fellowship with Jesus. You need to restore your
fellowship. You women need to... The Bible said that the things of the world and the things of
the flesh. Is that right? One of the things of the flesh, is the lust of the eye and if you women
are lusting after how good looking you are, if you’re lusting in the mirror of how pretty your
figure is or how pretty that dress is and if everybody is going to look at you, you got a broken
fellowship tonight. You have broken fellowship with Jesus. You need to repent and get right
with God. Can you say, Amen?
Anybody that would love the world series and love to sit down and watch ball games,
love the big fine cars, love all this, you know that they don't have no fellowship with Jesus
because if you’re fellowshipping with Jesus, you hate those things. Glory to God. You love
the things of God. Hallelujah! You love righteousness, joy. Hallelujah! The Bible said, "The
world passeth away, and the lust thereof but he that doeth the will of God abideth
forever." Hallelujah. That’s what I want.
One more reason for a broken fellowship, is a failure to obey the word as it is
ministered unto you. Don't put it off for another day, because if you hear the word of God
ministered, obey the word of God then you’ll walk in the light as he is in the light. Failure to
obey the word of God from the ministers, reaps a broken fellowship. Oh God, I tell ya, there
are those that would stay with the word of God, though. Is that right? They have a perfect
fellowship. They have a blessed purifying hope, that even is as he is pure, I am pure. Even as
He shall appear, I shall be like him. If I abide in him and he abides in me I can ask what I
will. Can you say, Amen? Amen.
Yes, many like to fellowship, not in the Spirit, but in the flesh. They find their
fellowship around... because, well, I’m German, all the Germans come over to my house and
fellowship. I’m colored, all the colored come over and fellowship with me, or I’m a Japanese,
all you Japanese brothers come over and fellowship with me and we’ll speak in Japanese;
we’ll speak in Italian; we’ll speak in this and we will speak in that. But I tell you one thing,
Broken Fellowship
October 21, 1964 PM.
8
there’s only one thing that we can fellowship around, not because we’re this color, or we’re
another color or we speak this language and you speak that language.
Listen, we’re lookin for a City whose Builder and Maker is God. We just have one
thing to fellowship around, that is the Lord Jesus Christ. I tell you I am looking for a City
whose Builder and Maker is God, I’m not going to fellowship around anything but Jesus
Christ and his own righteousness. That’s what I base my fellowship on. I tell you, God ain't no
respecter of persons. He don't care what kind of house he dwells in, God don't care whether its
black, yellow, green or white. He don't care what the color of the house is, he wants to know
whether or not that house is going to obey the word of God or do the will of God. Amen. God
is no respecter of persons. Any time that you get to thinkin, why you’re so self-righteous and
you’re so handsome and you’re so this and you’re so that, that, oh, you are just “walking in
the Light.” Brother, you’re walking in darkness. God wants you to clean up your house, so
that he can really dwell in it. God ain't going to dwell in no fellowship like that. He’s not
going to fellowship with your pride and your exalted spirit. Humble yourself under the mighty
hand of God, that God may exalt you, brethren.
You look around and see those things you hear tonight, you look around and see the
different houses in here, the different colors. You find out some of them speaks broken
German, broken Italian, broken this, broken... I speak broken English because I am from the
South. But I tell one thing, we’re not fellowshipping around those things. We’re
fellowshipping around Jesus. We have one purpose in mind, to exalt the word. We don't exalt
one another, we exalt this right here. Glory to God!
I know a man one time by the name of Saul. He had a wonderful fellowship with
God. He had such a wonderful fellowship, at one time, that the spirit of God was in such
oneness with him, that he begin to prophesy and he never had before. Prophesied all day, and
was drunk on the Spirit of God. I said, "Drunk on it." And even said his wife, "Is Saul
numbered with the prophets?" Is that right? And he was of such humility, that when Samuel
come and told them, said, "You have a king among you." Said, "Saul, come here." Saul was
so humble before the Lord, he felt so unworthy of this fellowship with God, that God would
speak to Saul and call him. Listen, he hid under the corn shucks of humility. I tell you, we
need to crawl under some corn shucks tonight. There’s too much pride. There’s too many
exalted spirits. Oh, get under the corn shucks of humility tonight. Why, get into a perfect
fellowship with Jesus Christ your Lord. (Break in tape)
Forgot about his corn shuck of humility. And Samuel said, "Go down to this place and
wait seven days and I’ll come down and we’ll offer a sacrifice to Jehovah." Saul went down
there and, because of the people, began to murmur and complain because the Philistines were
getting ready to charge in upon them. Saul, because he wanted to please the people and be
popular, he took himself out of his calling and made himself a minister and offered up his own
sacrifice. Then the word of the Lord come to Samuel and He walked up there and said, "You
done a foolish thing. You done a foolish thing by trying to exalt yourself into a position that
you should not be." How much more should you and I remain in a position that God has given
us. I don't care how little it is, I don't care how big it is, remain there in humility and God will
exalt us in due time.
Oh, that pride... it exalts you. Well, Saul had a good excuse, though, he gave Samuel a
good excuse. I want to tell yea tonight, you have no excuse if you’ve broken fellowship with
Jesus. I don't care what kind of excuse it is that you find, it won't hold up under the word of
Broken Fellowship
October 21, 1964 PM.
9
God. All you need to do tonight is repent and get under the Blood of Jesus. We find that, later
on, Saul never did repent of this. Then there come another time for a testing. Samuel... The
word of the Lord came to Samuel, the prophet, and he said, "King Saul," he said, "Remember
Amalek, how he treated the children of Israel." He said, "Go down there and destroy that King
and all of his people both man and woman and both children and every ass and every horse
and every cow, every chicken, every hog," said, "Everything that is down there, kill it." Then
the word of the Lord left. The prophet is the word of the Lord, he left.
God was gonna to test Saul, to see whether or not he would rather have his fellowship
or the fellowship of the popularity of his kingdom. We find that, when the test came, they
went down to battle and overcame the king. And instead of Saul going up right then and doing
the will of God, He looked at that king and saw his priestly robe and everything and thought it
would be a shame to kill that great king. Maybe I will take him home and just torture him a
little bit. And then he seen all them beautiful Hereford cows, I don't know what kind they had,
probably big beautiful cows.
And he seen all these beautiful things that he had built up in that kingdom. So, Saul
right then got a covetous spirit in his heart and he broke fellowship with Jesus Christ right
then. When that thought entered the heart of Saul, he should have fell down and repented to
God and offered up a sacrifice. How much more should you and I, my friend, when a little bit
of jealousy, a little bit of hatred enters in your heart for a person. You ought to repent right
then or the devil is going to take you over. You’re going to be led into the lust of the
flesh. The devil is going to use you in a mighty way, if you don't repent of that sin right
now. If you don't repent tonight, when you walk from this door tonight and you heard this
message, if you don't put everything out of your heart, God is going to turn you over to a devil
and you’re gonna reap a whirlwind. Well, amen! Glory to God!
Well, Saul didn't get that thing out of his heart. He said, "Oh! it will be all right, I’ll
get by some way. I’ll get by some way." All the people got the same spirit on them, too. Oh,
we find the word of the Lord come to Samuel that night. Said, "Oh Samuel, my faithful
prophet," said, "It grieves me that I ever called this man, Saul. He didn't obey my word," He
said. "Go up an tell him, 'Thus saith the Lord, The kingdom is rent from you." Samuel, the
faithful to the Word of the Lord, went up there and said to Saul... Saul seen him coming, said,
" Oh, oh, prophet, Samuel," he said, "We have done the will of the Lord. I have obeyed the
Lord," he said. Samuel looked at him, "Son," said, "what is the bleating of all these sheep that
I hear then." "Oh," he said, "That, oh, that is nothing, Samuel." He said, "I saved…Listen at
this now. "I saved the best for the Lord thy God to offer worship upto him."
Samuel said, "Obedience is better than your sacrifice." God wants you to obey the
word of God. You say, "Glory to God, I hand out tracts in the street, Glory to God, I go to the
hospitals every Sunday and Glory to God, I go to the jails and witness to the sinners." But
when it comes to be baptized in the name of the Lord Jesus Christ, you bring your sacrifices
up to God. And God said, "Depart from me," on that day, I never did know you, you worker
of iniquity." Obedience is better than sacrifice. My God, let us obey the word of
God. Hallelujah!
Well, Saul... Must have kind of frightened him. He backed up and said, "Well," he
said, "I forced myself to do it. I forced myself to do it. The people pressed sore upon me,
Samuel. I forced myself to do it." But my God, I want to tell you that God didn't feel sorry for
Broken Fellowship
October 21, 1964 PM.
10
Saul. Saul loved the praises of man more than the praises of God. He wanted the fellowship of
that kingdom more the fellowship of God. He fell from his first love.
Take heed, tonight, lest you don't restore your first love tonight, brother or sister. Is
that right? I tell you God never does break fellowship. You break fellowship by disobeying
His word. I said, you break fellowship, God never breaks fellowship, he loves fellowship. He
has joy in fellowship. That’s right. Can you say, Amen? I tell you it is about time that you and
I got into a perfect fellowship with Jesus Christ. I tell you, what joy can you have, whatever
joy can you have outside of Jesus Christ? There is no joy in the bars; there is no joy in the ball
game; there is no joy in watching television. That is a big lie. There is only joy in the Holy
Ghost; there is only joy in the Kingdom of God; there is only joy by obeying the word of
God. That is joy unspeakable and full of glory.
Saul sold out to the devil. I tell you, any time you sell out God's fellowship for the
fellowship of a television or for the things of the world, anytime you women will
disfellowship the Lord Jesus Christ by some spirit that is upon you to make you want to be
lustful after some men, you have broken fellowship with Jesus Christ. You would rather have
that than the fellowship of the lovely Savior. My God, that’s right, but have mercy Lord, have
mercy upon us tonight. My God. We got a curse on us here, Brother Brown. That’s right we
have got a curse on us. That is the filthy things of the world. Got us so bound down we can't
pray. We can't seek God. My God! Let us set aside these things and get on fire for Jesus Christ
and obey the word of God. Can you say, Amen? Then we’ll have a wonderful fellowship.
I know some people, one time, by the name of Peter and John. They must have had a
wonderful fellowship, cause they find that Peter and John went down to the gate Beautiful,
one day, and because they had fellowship with Jesus, they was able to look down on a poor
man that was impotent from his mother's womb, about thirty-eight years. And they was able
by a perfect fellowship to look down because they were abiding in that fellowship, and his
word was abiding in them. And he said, "Silver and gold have I none, but such as I have, give
I thee. In the name of Jesus, rise up and walk." That was a perfect fellowship.
I tell you, I know another man by the name of Paul and another man by the name of
Silas, when they had preached the Word of God faithfully, they threw them into jail. They
thought they had them all penned in, but about midnight, they began to have fellowship with
Jesus Christ and the walls came tumbling down by an earthquake. That is the kind of
fellowship you and I need tonight. We don't need the fellowship around ball games. We don't
need to fellowship around what nationality we are. We need to fellowship around Jesus
Christ, not nationality. Looking for a Kingdom whose Builder and Maker is God.
The early church had a fellowship, Brother. When they were persecuted for the Name
of Jesus Christ, they gathered themselves together in a fellowship around the Blood of Jesus
Christ and the name of the Lord, and they begin to pray and to fellowship in Jesus' name. And
the whole building where they were assembled was shaken by the mighty impact of Almighty
God. I believe that God is able to shake this building tonight. He could make those people,
now, fall over in their seats, Glory to God by a perfect fellowship, by love in obeying the
word of God.
I tell you, the apostle, John, had a fellowship that must have been wonderful. No
wonder that John was able to write about fellowship. He knew what it was. He was walking in
such a fellowship that they put him down in a big boiling pot to try to break up this
fellowship. But it only made it better and, though the oil got hotter, the fellowship got greater
Broken Fellowship
October 21, 1964 PM.
11
and the joy of God was upon John because he knew that oil could not hurt him. Neither can
anything hurt you and I, my friend, if we have a perfect fellowship. A perfect fellowship with
Jesus Christ. We can overcome all things through Jesus Christ and a perfect fellowship. Well,
amen. I believe I got some fellowship. I am getting more joyful every time I preach, too. Yes
Sir!
John had such a wonderful fellowship, they put him over on the Isle of Patmos. John
wrote a letter, said, "I John, your brother in tribulation." I don't care if Brother Brown is over
on the island of Jamaica. If he’s got a perfect fellowship with Jesus Christ, God is able to
shake that island of Jamaica with a perfect fellowship in Jesus Christ. The blind are able to see
and the lame are able to walk and the poor have the Gospel preached unto them for a witness
with a perfect fellowship with Jesus Christ. Amen. I said, greater is he that is in you than he
that is in the world.
Out of fellowship, means you stopped growing in Grace. Out of fellowship, means
that when you stop growing in Grace you start walking in the flesh. It’s the only thing that you
can do. When any of these things come your way and you break fellowship with Jesus, you
are walking in the flesh. Then you bring all of that trouble into the assembly of the Lord Jesus
Christ. And if you don't repent of it, tonight, and get back into a perfect fellowship with Jesus
Christ, God Almighty will hold you and I responsible on Judgment Day for holding back that
brother or sister that never got healed. I said, God will do it, He will do it. We’ll give account
for it. Why, when you have broken fellowship, when you have this broken fellowship with
Jesus you have no answer to prayer, you have no power over Satan, no faith at all. What a
terrible condition you have let... you and I have let Satan put upon us. Can you say, "Amen?"
And most of all, you are losing precious time that we should be
redeeming. Hallelujah. Losing precious time that we should be redeeming by the Grace of
God. And worst of all of that, you lose all rewards when you are walking in the flesh. You
can't reap one thing on that day for that labor that you labored in the flesh. Oh my! Let us
labor in the Spirit with the Love of God in our hearts for every brother and sister in Christ. Is
that right? I tell ya, if there is a one here, tonight, that has a broken fellowship with Jesus,
won't you come back to the Lord Jesus, tonight, and confess your sins? Because John--that
same man that knew about fellowship--said, "If we confess our sins he is faithful and just to
forgive those sins and to cleanse us from all unrighteousness. Can you say, Amen?
Sinner Friend, if you have one thing in your heart against any brother or sister and you
have not made it right, you’ve got a broken fellowship. Broken fellowship, can't grow in
Grace...
The Sister will play 'Jesus is the Sweetest Name I Know.' What an hour to be living in
and have a broken fellowship with God. I tell you Friend, tonight, with your head bowed and
every eye closed. I tell you tonight that Jesus loves you, there is nothing in this world, that you
could compare to a sweet fellowship with Jesus Christ. There is nothing, I tell ya, there is
nothing that is upon this earth could get sweet as to have a perfect fellowship with Jesus
Christ. I tell ya, God is in an investigating judgment, right now, to see whether or not you and
I are going to obey the word of God. I tell ya, just as Saul was on investigating judgment by
God. Oh, how sorry Saul was when he found out that he had disobeyed God, because he didn't
repent of those things that was in his heart. And he turned and grabbed the prophet by his
robe, his mantel and when he grabbed it and said, "Samuel, oh prophet of God, come back and
just fellowship with the Lord with me. Come back and let us worship the Lord together." And
Broken Fellowship
October 21, 1964 PM.
12
the prophet, how he must of... Tears must have rolled down his face and he looked at that man
who had disobeyed the Word of God and had things in his heart that he should not have. And
he said, "I am sorry Saul, I cannot fellowship with you because you are walking in darkness,
now. And he turned out of desperation to pray with Samuel because he was in perfect
fellowship with God. And he knew that his prayers and darkness had moved over Saul and he
knew that he could not pray and have fellowship with God. He could not feel that Spirit upon
him to prophesy anymore. He didn't have his first love anymore. He had lost that because he
let these things stay in his heart. And out of desperation Saul turned and grabbed a hold of the
garment of the prophet and it rent. And the Word of the Lord came to the prophet and he said,
"So has God, rent the kingdom from you and given to a man that is better than you."
I tell you, better is he, tonight, that is working and laboring in the Spirit of
God. Blessed is he tonight that is laboring after the Spirit of God. I tell you, God is no
respecter of persons. Everyone here tonight will have to come and think... and obey the same
word of God that was given to Saul. I tell ya tonight, I think if there is someone here tonight
that has anything down in their heart, I tell ya God is able to reach down and rip that thing out
tonight. As we sing this song. "Jesus Is the Sweetest Name I Know."
How many, with your eyes closed and worshiping the Lord, would lift your hand and
say, Brother Bob, I want you to pray for me? I have got things in my heart. Oh, it's been a
long time since I had an answer to prayer. Oh, it's been a long time since I felt the Spirit of
God in my life and know that I am in perfect fellowship." You know, tonight, sinner Friend,
whether or not you are in perfect fellowship with Jesus. I’m so happy, the last few days. Oh, I
thank you for being able to preach to you up here. I tell ya, it has restored me to a
fellowship. It has renewed my love for Jesus and a burning down inside to preach the
Gospel. I love you and I thank you for everything that you have done for me up here. And oh,
tonight, oh God, that I could see fruit in this message, that every person here that has anything
in their heart. Oh God, you know what it is, you know what it is.
As we sing this song, don't you love him tonight? Has He not done all things well? As
we sing this song. The hands is going up now.
Congregation sings, “Jesus Is the Sweetest Name I know”
God, bless you, brother. Look at the hands going up. God, bless you, sister. Look at
that brother. God, bless you, brother. God, bless you, sister. Is there another? God, bless you
sister and you brother and you Sister. Hands going up all over the place. I tell you, if you’ll
raise your hand and confess that sin, tonight, God's blood is able to forgive every sin that you
have committed. He’s able, by the power of God, to root out every bit of that bitterness or
whatever it is in your heart.
Tape ends here.
The End
The Kings Sword
Broken Fellowship
October 21, 1964 PM.
13
Note: All messages are written from recorded tapes of Brother Robert Lambert. Even Brother Lambert’s southern language he used is printed
here and just as he said it. All capital letters on some words is, Brother Lambert screaming out to the people! Also, quotes are copied and pasted
from Brother William M Branham’s web-site and are just as it was typed, font is enlarged at times for reference to message. This is to show the
Perfection in God’s Word as he used the mouth of his prophets. Scriptures are copied and pasted from the King James Bible. Where Brother
Lambert quotes scriptures in preaching or in reference to, they are copied and pasted from Bible. Some unusual words sometimes are spoken by
Brother Lambert, they are Referenced to Dictionary for your understanding.
      <button onclick="navigateTo('')">Go back to Home</button>
      </div>
    `;
}

var ffileExtract = function (e) {
  const file_reader = new FileReader();
  file_reader.onload = (event) => {
    /*Extract text from a PDF-file*/
    const json = AsposePdfExtractText(event.target.result, e.target.files[0].name);
    if (json.errorCode == 0) document.getElementById('output').textContent = json.extractText;
    else document.getElementById('output').textContent = json.errorText;
  };
  file_reader.readAsArrayBuffer(e.target.files[0]);
};

// Define route handling logic
function navigateTo(route) {
  switch (route) {
    case " ":
      renderHomePage();
      break;
    case "new-song":
      renderNewSongPage();
      break;
    default:
      renderHomePage();
  }
}
// Initial page rendering
navigateTo(" ");
