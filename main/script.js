// script.js
const letterContainer = document.getElementById('letter');
const nextBtn = document.getElementById('next-btn');

const letter = `
Hey pratikshya, very very very happy birthdayyyy!!!!!!🎉🎂🥳💐🎁🎈
God bless you, always be a good person, and have all the luck with you all the time.
Now, thats too much of an old man talk.
How are you doing lately? I hope you are great.

BTW yaar, its a long time since I am talking or like talking through this letter.
I am really missing you.
Before you think of anything, I want to make it clear that I didn't stop talking just because of you but rather because I Don't Want to Interfere in your life
You see, in 9th grade, after all those exams, like half-yearly, PT, and final, all those exams after we met, I performed graciously down NO! not because of you; instead, I was researching something, and so I thought if I was pulling you back from your real strength, I told you everything as much as I could.
Now you were on the right path, so I thought it'd be better if I stepped out of your life.

Hey, don't you be emotional, or I will kill your dil.
Now see towards the future; both of us have a very bright path, and we have to go on.

Now, now, thats all, IG?
I really have a loooottt of things to talk about, but this is not the right time.

Oh, oh, I have some new songs; do check them out.
1. Alone by Connor Price(That tells my feelings)
For something soothing and relaxing
2. Comfort Chain by Insteupendo
3. Snøwfall

So later, soon enough, we will be together again.
Until then, see you, bye.
And don't forget to love you too, of course because I love you too much, also I didn't left, I am still there looking at you right now, through my heart, so here are two ending lines💕
~tumhari jindagi se hogaya tha dafa
~tumhari jindagi se hogaya tha dafa
~krupya karke hona mujhe na khafa

one more, one more left
~oh my sweetie, you are such a cutie, I can't sleep thinking about your beauty😘
`;

// add event listener to next button
nextBtn.addEventListener('click', () => {
    // redirect to next HTML page
    window.location.href = 'next/next.html';
});

// add letter to letter container
letterContainer.textContent = letter;