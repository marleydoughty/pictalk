insert into "users" ( "username", "hashedPassword")
values ('data','$argon2i$v=19$m=4096,t=3,p=1$dgdfgdfhhsgsgrebtrhr');

insert into "folders" ("userId", "name")
values ('1','default'), ('1','self-help'),('1','food'), ('1','people'), ('1','feelings'),('1','toys'), ('1','animals'), ('1','shapes'), ('1','clothes'), ('1', 'places');

insert into "icons" ("folderId", "name",  "url")
values ('1','I','/icons/I.png'),('1','want','/icons/want.png'),('1','help','/icons/help.png'),
      ('1','more','/icons/more.png'),('1','please','/icons/please.png'),('1','thanks','/icons/thanks.png'),
      ('1','give','/icons/give.png'),('1','eat','/icons/eat.png'),('1','food','/icons/food.png'),
      ('1','no','/icons/no.png'),('1','yes', '/icons/yes.png'), ('1','go','/icons/go.png'),
      ('1','toys','/icons/toys.png'),('1','you','/icons/you.png'), ('1','feel','/icons/feel.png'),
      ('2','potty','/icons/potty.png'),('2','wash-hands','/icons/wash-hands.png'),('2','shower','/icons/shower.png'),
      ('3','burrito','/icons/burrito.png'),('3','cheese','/icons/cheese.png'),('3', 'chicken nuggets','/icons/chicken-nuggets.png'),
      ('3','chips','/icons/chips.png'),('3','cookie','/icons/cookie.png'), ('3','crackers','/icons/crackers.png'),
      ('3','grilled cheese','/icons/grilled-cheese.png'), ('3','hamburger','/icons/hamburger.png'),('3','ice-cream','/icons/ice-cream.png'),
      ('3','juice','/icons/juice.png'),('3','milk', '/icons/milk.png'), ('3','orange juice', '/icons/orange-juice.png'),('3','pizza','/icons/pizza.png'),
      ('3','sandwhich','/icons/sandwhich.png'), ('3','soda','/icons/soda.png'),('3','spaghetti','/icons/spaghetti.png'),('3','tacos','/icons/tacos.png'),
      ('4','brother','/icons/brother.png'),('4','dad','/icons/dad.png'),('4','mom','/icons/mom.png'),('4','grandma','/icons/grandma.png'),
      ('4','grandpa','/icons/grandpa.png'),('4','teacher','/icons/teacher.png'),
      ('5','bad','/icons/bad.png'),('5','good','/icons/good.png'),('5','happy','/icons/happy.png'),('5','mad','/icons/mad.png'),
      ('5','sad','/icons/sad.png'),('5','tired','/icons/tired.png'),
      ('6','blocks','/icons/blocks.png'),('6','bubbles','/icons/bubbles.png'),('6','color','/icons/color.png'),('6','legos','/icons/legos.png'),
      ('6','paint','/icons/paint.png'),('6','puzzle','/icons/puzzle.png'),('6','teddy bear','/icons/teddy-bear.png'),
      ('7','bird','/icons/bird.png'),('7','dog','/icons/dog.png'),('7','lizard','/icons/lizard.png'),('7','cat','/icons/cat.png'),
      ('8','cirlce','/icons/cirlce.png'),('8','heart','/icons/heart.png'),('8','rectangle','/icons/rectangle.png'),('8','square','/icons/square.png'),
      ('8','star','/icons/star.png'),('8','triangle','/icons/triangle.png'),('8','oval','/icons/oval.png'),
      ('9','hat','/icons/hat.png'), ('9','beanie','/icons/beanie.png'), ('9','shirt','/icons/shirt.png'),('9','pants','/icons/pants.png'),
      ('9','dress','/icons/dress.png'), ('9','jacket','/icons/jacket.png'), ('9','shoes','/icons/shoes.png'),('9','socks','/icons/socks.png'),
      ('10', 'bathroom','/icons/bathroom.png'),('10', 'bedroom','/icons/bedroom.png'),('10', 'kitchen','/icons/kitchen.png'),('10','living room','/icons/living-room.png'),
      ('10', 'park','/icons/park.png'),('10', 'school','/icons/school.png');
