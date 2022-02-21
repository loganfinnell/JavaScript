# Finnell Logan Final Project
[Marky Mark](https://creativecodingart2210fall2019section2.github.io/Finnell_Logan_ART2210/Projects/Final/Final.html)

# CONTROLS
 ↔ Moves ball side to side but also reduces speed/velocity

↓  Moves the ball downwards faster 

Every time a wall clears the screen you will gain 2 points, and every time you hit one you will lose points

Difficulty increases as you gain points

The yellow jump pads can boost the ball up or remove all of its speed

![moodboard](https://github.com/creativeCodingART2210Fall2019Section2/Finnell_Logan_ART2210/blob/master/Projects/Final/assets/gameref.png)

# DESIGNER STATEMENT 12/04/19

My reason for choosing to make a game again is simple. It is what I want to do with my degree, so the more practice the better! My last game was something less traditional. In my opinion, it was less of a game and more of a puzzle. So this time I wanted to overcome the challenges that prevented me from making a standard game last time.

My initial idea was a simple runner game. You move side to side, jump, duck, and avoid obstacles. This did not feel original to me. So I decided to make the character more difficult to control, but have it still feel good to control once you figure it out. I made the player control a bouncing ball. The balls bounce speed and height can be increased by controlling how fast it plummets to the ground. After this, another problem presented itself. Once you started bouncing, it took a long time to slow down. I decided to make left and right movement reduce velocity. This gives the player speed control and also makes them choose between speed or horizontal movement.

The other roadblock I hit was how to generate the obstacles and their collisions. Turns out I forgot a single number and spent 2 hours looking for it. Once I had it where the game could register if the ball came in contact with the walls or not, I had to make another decision. I decided to not make the game just abruptly end once the ball hit a wall. Since the gaps and the wall thickness are somewhat randomized, some combinations are very difficult to slip through. It seemed unfair to force the player to begin anew over something they never had a chance to win against. So I implemented a score system. Every time a wall clears the screen 2 points are awarded. When you make contact with a wall points are reduced. The more time you spend inside a wall the more points you will lose. This encourages the player to make their best attempt at getting through the gaps. As the players score hits certain milestones the walls spawn in closer together increasing difficulty. If they lose points the difficulty scales back down.

I went with an 80's retro feel for the design. I think the design of geometry dash had a hand in influencing that decision. The balls name is Marky Mark.