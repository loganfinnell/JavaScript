function setup() {
   createCanvas(1920, 1080)
   
   }


function draw() {

let lb = '#147AD2'
let db = '#4823E6'
let pr = '#931DC5'
let bk = '#000000'
let wh = '#FFFFFF'
let yl = '#F2CC31'
let or = '#E76F00'
let rd = '#D70006'
let gy = '#0F0F0F';

background(bk);
strokeWeight(0);
   for (var y = 0; y <= height; y += 40) {
   for (var x = 0; x <= width; x += 40) {
   fill(gy);
   square(x, y, 20);
   }
   }
   
   for (var y = 0; y <= height; y += 40) {
   for (var x = 0; x <= width; x += 40) {
   fill(gy);
   square(x + 20, y + 20, 20);
   }
   }

fill(yl);
strokeWeight(4);
stroke(rd);
beginShape();
//forehead
vertex(1031, 425);
vertex(1034, 421);
vertex(1031, 414);
vertex(1032, 395);
vertex(1037, 381);
vertex(886, 204);
vertex(714, 226);
vertex(701, 445);
vertex(828, 425);
vertex(890, 430);
vertex(955, 444);
vertex(998, 428);
endShape(CLOSE);

fill(or);
strokeWeight(2);
stroke(rd);
beginShape();
//forehead shade
vertex(864, 365);
vertex(890, 365);
vertex(930, 378);
vertex(943, 365);
vertex(1004, 365);
vertex(946, 286);
vertex(862, 246);
vertex(837, 262);
vertex(881, 296);
endShape();

strokeWeight(4);
beginShape();
//eyebrow shade
vertex(1012, 370);
vertex(1037, 381);
vertex(1032, 395);
vertex(1031, 414);
vertex(1034, 421);
vertex(960, 437);
vertex(1018, 397);
endShape();

fill(wh);
strokeWeight(8);
stroke(bk);
beginShape();
// glassesrightsidebar
vertex(1084, 457);
vertex(1084, 450);
vertex(1077, 437);
vertex(1028, 444);
vertex(1028, 453);
vertex(1058, 457);
endShape(CLOSE);

fill(yl);
strokeWeight(0);
beginShape();
//left face fill
vertex(982, 387);
vertex(684, 415);
vertex(740, 620);
vertex(882, 754);
vertex(970, 681);
endShape(CLOSE);

fill(or);
strokeWeight(0);
beginShape();
//right face fill
vertex(1031, 657);
vertex(988, 727);
vertex(908, 707);
vertex(923, 689);
vertex(912, 677);
vertex(910, 660);
vertex(917, 660);
vertex(915, 649);
vertex(921, 593);
vertex(947, 577);
vertex(942, 558);
vertex(952, 554);
vertex(963, 542);
vertex(954, 524);
vertex(937, 490);
vertex(930, 462);
vertex(953, 442);
vertex(992, 428);
vertex(1032, 425);
vertex(1033, 428);
vertex(1028, 436);
vertex(1029, 471);
vertex(1035, 507);
vertex(1032, 514);
vertex(1039, 520);
vertex(1043, 535);
endShape();

beginShape();
//rightfaceoutline
strokeWeight(4);
stroke(rd);
noFill();
vertex(1033, 428);
vertex(1028, 436);
vertex(1029, 471);
vertex(1035, 507);
vertex(1032, 514);
endShape();

beginShape();
//rightfaceoutline
vertex(1039, 520);
vertex(1043, 535);
endShape();

beginShape();
fill(yl);
strokeWeight(0);
//rightfacegalssesfill
vertex(1032, 514);
vertex(1039, 520);
vertex(1028, 521);
vertex(1006, 521);
vertex(997, 513);
vertex(1024, 516);
endShape(CLOSE);

beginShape();
strokeWeight(2);
stroke(rd);
noFill();
//rightfacegalssesoutline
vertex(1032, 514);
vertex(1039, 520);
endShape();

beginShape();
strokeWeight(2);
stroke(rd);
noFill();
//nose dark lines
vertex(957, 470);
vertex(952, 506);
vertex(968, 526);
vertex(980, 537);
vertex(985, 540);
vertex(990, 554);
vertex(985, 569);
vertex(981, 575);
vertex(962, 578);
vertex(947, 577);
endShape();

beginShape();
//nose dark lines
vertex(990, 554);
vertex(968, 555);
vertex(960, 564);
endShape();

beginShape();
//nose dark lines
vertex(930, 462);
vertex(937, 490);
vertex(954, 524);
endShape();

beginShape();
//nose dark lines
vertex(927, 467);
vertex(919, 497);
vertex(905, 527);
vertex(899, 546);
vertex(894, 560);
vertex(896, 570);
vertex(911, 571);
endShape();

beginShape();
//nose dark lines
vertex(897, 551);
vertex(905, 546);
vertex(918, 546);
endShape();

fill(or);
beginShape();
//nose hole left
vertex(911, 571);
vertex(906, 565);
vertex(912, 561);
vertex(930, 562);
vertex(927, 568);
vertex(920, 567);
endShape();

fill(lb);
strokeWeight(2);
stroke(pr);
beginShape();
//right eye
vertex(961, 460);
vertex(971, 434);
vertex(1006, 431);
vertex(1018, 439);
vertex(1022, 453);
vertex(1010, 460);
vertex(997, 464);
vertex(974, 463);
endShape();

beginShape();
vertex(989, 434);
vertex(1000, 441);
endShape();

fill(db);
beginShape();
//right eye
vertex(1000, 441);
vertex(1007, 444);
vertex(1006, 453);
vertex(997, 455);
vertex(986, 452);
vertex(985, 446);
vertex(991, 442);
endShape(CLOSE);

noFill();
strokeWeight(2);
stroke(rd);
beginShape();
//right eye line
vertex(965, 471);
vertex(978, 478);
vertex(1000, 485);
endShape();

fill(or);
strokeWeight(0);
beginShape();
//rightface shade
vertex(927, 467);
vertex(919, 497);
vertex(905, 527);
vertex(899, 546);
vertex(894, 560);
vertex(896, 570);
vertex(911, 571);
vertex(920, 567);
vertex(916, 575);
vertex(930, 584);
vertex(920, 584);
vertex(902, 593);
vertex(874, 596);
vertex(860, 609);
vertex(870, 547);
vertex(853, 535);
vertex(833, 533);
vertex(801, 526);
vertex(779, 511);
vertex(771, 494);
vertex(767, 476);
vertex(776, 476);
vertex(779, 495);
vertex(789, 512);
vertex(813, 523);
vertex(848, 525);
vertex(850, 506);
vertex(857, 502);
vertex(853, 494);
vertex(855, 478);
vertex(831, 476);
vertex(801, 466);
vertex(776, 463);
vertex(776, 433);
vertex(828, 425);
vertex(890, 430);
vertex(930, 444);
endShape();

fill(lb);
beginShape();
//left eye
vertex(878, 452);
vertex(866, 441);
vertex(845, 441);
vertex(815, 450);
vertex(815, 459);
vertex(837, 469);
vertex(854, 471);
vertex(875, 464);
endShape();

fill(db);
strokeWeight(2);
stroke(pr);
beginShape();
//left eye pupil
vertex(861, 441);
vertex(863, 454);
vertex(855, 462);
vertex(845, 463);
vertex(839, 458);
vertex(836, 447);
vertex(823, 456);
vertex(845, 441);
endShape();

noFill();
strokeWeight(2);
stroke(pr);
beginShape();
//left eye line
vertex(805, 467);
vertex(828, 465);
endShape();

beginShape();
//left eye
vertex(878, 452);
vertex(866, 441);
vertex(845, 441);
vertex(815, 450);
vertex(815, 459);
vertex(837, 469);
vertex(854, 471);
endShape();

noFill();
strokeWeight(2);
stroke(rd);
beginShape();
//left eye line
vertex(883, 431);
vertex(894, 448);
vertex(894, 468);
vertex(882, 486);
vertex(850, 506);
endShape();

beginShape();
//left undereye line
vertex(889, 467);
vertex(862, 478);
vertex(831, 476);
vertex(801, 466);
vertex(776, 463);
vertex(792, 473);
vertex(805, 476);
endShape();

beginShape();
//left face line
vertex(853, 535);
vertex(870, 547);
vertex(860, 609);
endShape();

fill(or);
strokeWeight(2);
stroke(rd);
beginShape();
//upperlip
vertex(871, 624);
vertex(880, 623);
vertex(898, 618);
vertex(915, 612);
vertex(928, 614);
vertex(942, 614);
vertex(956, 609);
vertex(970, 616);
vertex(992, 624);
vertex(985, 627);
vertex(962, 626);
vertex(957, 629);
vertex(942, 627);
vertex(935, 630);
vertex(924, 627);
vertex(911, 631);
vertex(865, 629);
endShape();

beginShape();
//bottom lip left dark
vertex(906, 631);
vertex(911, 631);
vertex(924, 627);
vertex(935, 630);
vertex(932, 636);
vertex(932, 647);
vertex(910, 649);
vertex(912, 635);
vertex(908, 632);
endShape();

fill(yl);
beginShape();
//bottom lip right light
vertex(956, 632);
vertex(951, 636);
vertex(950, 650);
vertex(932, 647);
vertex(932, 636);
vertex(935, 630);
vertex(942, 627);
vertex(957, 629);
endShape();

noFill();
beginShape();
//bottom lip left light
vertex(876, 630);
vertex(877, 634);
vertex(896, 641);
vertex(910, 649);
vertex(912, 635);
vertex(908, 632);
endShape();

beginShape();
//bottom lip right dark
vertex(987, 626);
vertex(981, 637);
vertex(975, 638);
vertex(967, 646);
vertex(950, 650);
endShape();

beginShape();
strokeWeight(4);
fill(or);
//right arm
vertex(1424, 1080);
vertex(1371, 985);
vertex(1325, 1080);
endShape();

fill(wh);
strokeWeight(0);
beginShape();
//shirt
vertex(1325, 1080);
vertex(1387, 1020);
vertex(1419, 963);
vertex(1323, 861);
vertex(1235, 792);
vertex(1204, 783);
vertex(1127, 750);
vertex(1091, 748);
vertex(1036, 723);
vertex(1022, 713);
vertex(720, 706);
vertex(673, 715);
vertex(635, 715);
vertex(613, 731);
vertex(538, 768);
vertex(431, 801);
vertex(380, 826);
vertex(376, 847);
vertex(322, 903);
vertex(219, 1080);
endShape();

fill(or);
strokeWeight(2);
beginShape();
//neck dark
vertex(727, 700);
vertex(713, 712);
vertex(691, 719);
vertex(647, 742);
vertex(628, 757);
vertex(625, 768);
vertex(628, 787);
vertex(684, 854);
vertex(768, 903);
vertex(830, 910);
vertex(897, 892);
vertex(966, 850);
vertex(1000, 812);
vertex(1010, 772);
vertex(1004, 736);
endShape();

fill(yl);
strokeWeight(0);
beginShape();
//neck light left
vertex(723, 610);
vertex(729, 746);
vertex(707, 765);
vertex(697, 794);
vertex(658, 763);
vertex(648, 766);
vertex(645, 775);
vertex(692, 843);
vertex(775, 904);
vertex(830, 910);
vertex(836, 908);
vertex(822, 868);
vertex(794, 789);
vertex(815, 804);
vertex(839, 855);
vertex(861, 813);
vertex(877, 807);
vertex(882, 780);
vertex(726, 599);
endShape();

strokeWeight(2);
beginShape();
//neck light right
vertex(857, 902);
vertex(882, 855);
vertex(898, 848);
vertex(929, 797);
vertex(948, 816);
vertex(928, 844);
vertex(925, 875);
vertex(897, 892);
endShape();

noFill();
strokeWeight(2);
beginShape();
//neck lines
vertex(723, 610);
vertex(729, 746);
endShape();

beginShape();
vertex(658, 736);
vertex(645, 775);
endShape();

beginShape();
vertex(697, 794);
vertex(658, 763);
vertex(648, 766);
vertex(645, 775);
vertex(692, 843);
vertex(775, 904);
vertex(830, 910);
vertex(836, 908);
vertex(822, 868);
endShape();

beginShape();
vertex(794, 789);
vertex(815, 804);
vertex(839, 855);
vertex(861, 813);
vertex(877, 807);
vertex(882, 780);
endShape();

beginShape();
vertex(877, 807);
vertex(875, 816);
vertex(882, 855);
endShape();

   fill(lb);
   strokeWeight(2);
   stroke(pr);
   beginShape();
   //beard topright
   vertex(1043, 535);
   vertex(1027, 581);
   vertex(1024, 599);
   vertex(1041, 590);
   vertex(1046, 552);
   endShape(CLOSE);

   beginShape();
   //beard top right
   vertex(1011, 648);
   vertex(1006, 659);
   vertex(1010, 685);
   vertex(1000, 688);
   vertex(1017, 691);
   endShape(CLOSE);

   beginShape();
   //beard top mid
   vertex(992, 690);
   vertex(986, 692);
   vertex(969, 703);
   vertex(935, 709);
   vertex(896, 699);
   vertex(853, 704);
   vertex(861, 670);
   vertex(842, 660);
   vertex(801, 673);
   vertex(796, 670);
   vertex(782, 686);
   vertex(874, 768);
   vertex(974, 762);
   endShape(CLOSE);

   beginShape();
   strokeWeight(0);
   //beard top left color
   vertex(715, 458);
   vertex(708, 458);
   vertex(690, 538);
   vertex(719, 572);
   vertex(753, 665);
   vertex(794, 664);
   vertex(798, 643);
   vertex(756, 613);
   vertex(755, 584);
   vertex(742, 574);
   vertex(742, 553);
   vertex(727, 542);
   vertex(721, 523);
   vertex(717, 476);
   endShape(CLOSE);

   beginShape();
   strokeWeight(2);
   noFill();
   //beard top left outline
   vertex(794, 664);
   vertex(798, 643);
   vertex(756, 613);
   vertex(755, 584);
   vertex(742, 574);
   vertex(742, 553);
   vertex(727, 542);
   vertex(721, 523);
   vertex(717, 476);
   endShape();

   fill(db);
   strokeWeight(2);
   stroke(pr);
   beginShape();
   //moustache left
   vertex(855, 614);
   vertex(874, 596);
   vertex(902, 593);
   vertex(920, 584);
   vertex(938, 583);
   vertex(943, 579);
   vertex(943, 602);
   vertex(930, 608);
   vertex(924, 613);
   vertex(915, 612);
   vertex(898, 618);
   vertex(880, 623);
   endShape();

   fill(lb);
   strokeWeight(2);
   stroke(pr);
   beginShape();
   //moustache light left
   vertex(902, 593);
   vertex(920, 584);
   vertex(938, 583);
   vertex(943, 579);
   vertex(943, 602);
   vertex(930, 608);
   vertex(924, 613);
   vertex(915, 612);
   vertex(906, 599);
   endShape();

   fill(db);
   strokeWeight(2);
   stroke(pr);
   beginShape();
   //moustache right
   vertex(1007, 609);
   vertex(997, 593);
   vertex(984, 595);
   vertex(976, 586);
   vertex(968, 586);
   vertex(963, 578);
   vertex(962, 578);
   vertex(945, 577);
   vertex(943, 579);
   vertex(943, 602);
   vertex(954, 610);
   vertex(956, 609);
   vertex(970, 616);
   vertex(992, 624);
   endShape();

   fill(db);
   strokeWeight(3);
   stroke(pr);
   beginShape();
   //beard bottom
   vertex(707, 551);
   vertex(727, 555);
   vertex(733, 596);
   vertex(745, 599);
   vertex(744, 636);
   vertex(759, 634);
   vertex(774, 661);
   vertex(797, 664);
   vertex(794, 683);
   vertex(833, 695);
   vertex(838, 723);
   vertex(857, 716);
   vertex(865, 739);
   vertex(890, 736);
   vertex(901, 746);
   vertex(923, 739);
   vertex(932, 723);
   vertex(953, 741);
   vertex(974, 737);
   vertex(980, 704);
   vertex(994, 687);
   vertex(1017, 691);
   vertex(1011, 648);
   vertex(1021, 626);
   vertex(1024, 599);
   vertex(1041, 590);
   vertex(1046, 552);
   vertex(1047, 560);
   vertex(1049, 588);
   vertex(1041, 604);
   vertex(1042, 634);
   vertex(1038, 665);
   vertex(1024, 672);
   vertex(1024, 714);
   vertex(1013, 712);
   vertex(1009, 736);
   vertex(999, 736);
   vertex(992, 771);
   vertex(969, 774);
   vertex(954, 789);
   vertex(924, 782);
   vertex(891, 783);
   vertex(857, 772);
   vertex(820, 751);
   vertex(813, 735);
   vertex(779, 719);
   vertex(772, 698);
   vertex(748, 676);
   vertex(731, 640);
   vertex(734, 622);
   vertex(713, 598);
   vertex(715, 577);
   vertex(701, 565);
   vertex(696, 554);
   endShape();

   fill(yl);
   strokeWeight(3);
   stroke(rd);
   beginShape();
   //ear
   vertex(699, 522);
   vertex(709, 526);
   vertex(708, 458);
   vertex(684, 451);
   vertex(685, 455);
   vertex(671, 440);
   vertex(655, 439);
   vertex(647, 444);
   vertex(645, 482);
   vertex(658, 509);
   vertex(664, 526);
   vertex(677, 546);
   vertex(686, 561);
   vertex(695, 567);
   vertex(703, 564);
   vertex(701, 555);
   vertex(707, 555);
   vertex(708, 540);
   vertex(709, 534);
   vertex(698, 530);
   endShape();

   strokeWeight(0);
   fill(or);
   beginShape();
   //inner ear top
   vertex(661, 469);
   vertex(663, 492);
   vertex(656, 492);
   vertex(650, 479);
   vertex(653, 452);
   vertex(661, 454);
   endShape();

   noFill();
   strokeWeight(2);
   beginShape();
   //ear
   vertex(657, 506);
   vertex(663, 497);
   vertex(661, 469);
   endShape();

   strokeWeight(2);
   beginShape();
   //ear side
   vertex(690, 518);
   vertex(699, 522);
   endShape();

   strokeWeight(2);
   beginShape();
   //ear side
   vertex(692, 527);
   vertex(698, 530);
   endShape();

   strokeWeight(2);
   beginShape();
   //ear bottom
   vertex(703, 543);
   vertex(709, 540);
   endShape();

   strokeWeight(2);
   beginShape();
   //inner ear top
   vertex(661, 469);
   vertex(663, 492);
   vertex(656, 492);
   vertex(650, 479);
   vertex(653, 452);
   vertex(669, 457);
   vertex(694, 488);
   endShape();

   strokeWeight(2);
   fill(or);
   beginShape();
   //inner ear bottom
   vertex(694, 488);
   vertex(692, 485);
   vertex(674, 485);
   vertex(667, 494);
   vertex(671, 520);
   vertex(680, 526);
   vertex(690, 522);
   vertex(689, 510);
   vertex(696, 500);
   endShape();

   noFill();
   strokeWeight(3);
   stroke(pr);
   beginShape();
   //ear hair
   vertex(709, 555);
   vertex(701, 555);
   vertex(703, 564);
   endShape();

   beginShape();
   //side ear hair
   vertex(699, 522);
   vertex(709, 526);
   vertex(708, 458);
   endShape();

   fill(lb);
   strokeWeight(4);
   stroke(pr);
   beginShape();
   //hair outline
   vertex(703, 204);
   vertex(728, 170);
   vertex(765, 148);
   vertex(822, 136);
   vertex(861, 141);
   vertex(899, 138);
   vertex(923, 157);
   vertex(960, 180);
   vertex(1000, 206);
   vertex(1014, 238);
   vertex(1035, 269);
   vertex(1040, 300);
   vertex(1047, 320);
   vertex(1042, 342);
   vertex(1059, 391);
   vertex(1009, 368);
   vertex(940, 321);
   vertex(897, 271);
   vertex(855, 269);
   vertex(805, 250);
   vertex(788, 243);
   vertex(738, 227);
   vertex(714, 218);
   endShape(CLOSE);

      strokeWeight(2);
      fill(db);
      beginShape();
      //bottom hair dark
      vertex(866, 263);
      vertex(946, 263);
      vertex(1005, 284);
      vertex(1015, 309);
      vertex(1042, 342);
      vertex(1059, 391);
      vertex(1009, 368);
      vertex(940, 321);
      vertex(897, 271);
      vertex(855, 269);
      endShape();

      fill(db);
      beginShape();
      //top hair dark
      vertex(703, 204);
      vertex(728, 170);
      vertex(765, 148);
      vertex(822, 136);
      vertex(861, 141);
      vertex(899, 138);
      vertex(923, 157);
      vertex(887, 160);
      vertex(865, 154);
      vertex(797, 158);
      vertex(762, 180);
      endShape(CLOSE);

      noFill();
      beginShape();
      //hair line
      vertex(711, 213);
      vertex(745, 201);
      vertex(781, 177);
      vertex(807, 172);
      endShape();

      noFill();
      beginShape();
      //hair line
      vertex(714, 218);
      vertex(757, 210);
      vertex(793, 192);
      vertex(859, 176);
      vertex(943, 180);
      endShape();

      noFill();
      beginShape();
      //hairline
      vertex(1037, 284);
      vertex(1002, 263);
      vertex(966, 263);
      vertex(916, 254);
      endShape();

      fill(db);
      beginShape();
      //hair mid dark
      vertex(906, 222);
      vertex(929, 229);
      vertex(973, 229);
      vertex(1008, 241);
      vertex(1017, 242);
      vertex(1008, 225);
      vertex(976, 206);
      vertex(955, 208);
      vertex(925, 204);
      vertex(902, 210);
      vertex(875, 210);
      vertex(845, 218);
      vertex(813, 241);
      endShape();

   fill(db);
   strokeWeight(4);
   beginShape();
   //side hair dark
   vertex(709, 212);
   vertex(714, 218);
   vertex(753, 232);
   vertex(733, 235);
   vertex(707, 260);
   vertex(687, 300);
   vertex(675, 387);
   vertex(668, 342);
   vertex(668, 280);
   vertex(686, 236);
   endShape(CLOSE);

   fill(lb);
   strokeWeight(2);
   beginShape();
   //side hair light
   vertex(753, 232);
   vertex(733, 235);
   vertex(707, 260);
   vertex(687, 300);
   vertex(675, 387);
   vertex(684, 439);
   vertex(684, 442);
   vertex(692, 437);
   vertex(721, 434);
   vertex(721, 396);
   vertex(729, 384);
   vertex(743, 381);
   vertex(721, 342);
   vertex(721, 311);
   vertex(736, 269);
   vertex(753, 258);
   vertex(780, 265);
   vertex(768, 246);
   vertex(798, 247);
   vertex(788, 243);
   endShape(CLOSE);

   fill(db);
   strokeWeight(4);
   beginShape();
   //left eyebrow
   vertex(898, 428);
   vertex(911, 424);
   vertex(916, 415);
   vertex(905, 406);
   vertex(885, 407);
   vertex(845, 402);
   vertex(827, 401);
   vertex(810, 408);
   vertex(782, 427);
   endShape();
   
   fill(db);
   strokeWeight(4);
   beginShape();
   //right eyebrow
   vertex(940, 436);
   vertex(960, 422);
   vertex(973, 410);
   vertex(992, 406);
   vertex(1013, 396);
   vertex(1027, 394);
   vertex(1036, 397);
   vertex(1043, 404);
   vertex(1042, 410);
   vertex(1035, 415);
   vertex(1020, 411);
   vertex(994, 416);
   vertex(974, 431);
   vertex(959, 436);
   endShape();
   
   strokeWeight(4);
   stroke(wh);
   fill(wh);
   beginShape();
   //glasses
   vertex(684, 442);
   vertex(692, 437);
   vertex(721, 434);
   vertex(768, 428);
   vertex(831, 422);
   vertex(892, 427);
   vertex(935, 436);
   vertex(959, 436);
   vertex(993, 425);
   vertex(1039, 421);
   vertex(1088, 426);
   vertex(1096, 432);
   vertex(1095, 455);
   vertex(1089, 462);
   vertex(1088, 470);
   vertex(1084, 473);
   vertex(1084, 450);
   vertex(1077, 437);
   vertex(1061, 430);
   vertex(1029, 428);
   vertex(992, 432);
   vertex(971, 442);
   vertex(963, 450);
   vertex(965, 476);
   vertex(960, 478);
   vertex(957, 470);
   vertex(949, 457);
   vertex(939, 456);
   vertex(930, 462);
   vertex(920, 478);
   vertex(920, 449);
   vertex(911, 439);
   vertex(888, 432);
   vertex(830, 429);
   vertex(794, 434);
   vertex(782, 441);
   vertex(776, 456);
   vertex(776, 476);
   vertex(767, 476);
   vertex(765, 466);
   vertex(755, 460);
   vertex(708, 458);
   vertex(684, 451);
   endShape(CLOSE);

   fill('#F2CC31');
   strokeWeight(1);
   stroke(wh);
   beginShape();
   // glassesleftnosepiece
   vertex(920, 478);
   vertex(920, 464);
   vertex(916, 465);
   vertex(901, 503);
   vertex(906, 506);
   endShape(CLOSE);

   noFill();
   strokeWeight(1);
   beginShape();
   // glassesleftlense
   vertex(767, 476);
   vertex(771, 494);
   vertex(779, 511);
   endShape();

   noFill();
   strokeWeight(1);
   beginShape();
   // glassesleftlense
   vertex(776, 476);
   vertex(779, 495);
   vertex(789, 512);
   vertex(813, 523);
   vertex(853, 526);
   vertex(890, 521);
   vertex(906, 506);
   vertex(920, 478);
   vertex(925, 460);
   endShape();

   noFill();
   strokeWeight(1);
   beginShape();
   // glassesrightlense
   vertex(997, 513);
   vertex(1024, 516);
   vertex(1051, 510);
   vertex(1070, 504);
   vertex(1081, 489);
   vertex(1084, 473);
   vertex(1088, 470);
   vertex(1086, 489);
   vertex(1080, 502);
   vertex(1071, 511);
   vertex(1055, 517);
   vertex(1028, 521);
   endShape();

   noFill();
   strokeWeight(1);
   beginShape();
   // glassesrightlense
   vertex(965, 476);
   vertex(967, 492);
   vertex(975, 507);
   endShape();








   }