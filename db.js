var db = [
  [new Date('2020-03-01'), 23, 5,],
  [new Date('2020-03-02'), 23, 6,],
  [new Date('2020-03-03'), 24, 6,],
  [new Date('2020-03-04'), 24, 6,],
  [new Date('2020-03-05'), 27, 6,],
  [new Date('2020-03-06'), 30, 6,],
  [new Date('2020-03-07'), 28, 6,],
  [new Date('2020-03-08'), 27, 6,],
  [new Date('2020-03-09'), 33, 7,],
  [new Date('2020-03-10'), 31, 9,],
  [new Date('2020-03-11'), 26, 12,],
  [new Date('2020-03-12'), 29, 15,],
  [new Date('2020-03-13'), 32, 19,],
  [new Date('2020-03-14'), 35, 21,],
  [new Date('2020-03-15'), 36, 22,],
  [new Date('2020-03-16'), 41, 24,],
  [new Date('2020-03-17'), 46, 28,],
  [new Date('2020-03-18'), 46, 29,],
  [new Date('2020-03-19'), 49, 31,],
  [new Date('2020-03-20'), 50, 33,],
  [new Date('2020-03-21'), 55, 35,],
  [new Date('2020-03-22'), 57, 36,],
  [new Date('2020-03-23'), 54, 41,],
  [new Date('2020-03-24'), 55, 42,],
  [new Date('2020-03-25'), 57, 43,],
  [new Date('2020-03-26'), 56, 45,],
  [new Date('2020-03-27'), 56, 46,],
  [new Date('2020-03-28'), 60, 49,],
  [new Date('2020-03-29'), 59, 52,],
  [new Date('2020-03-30'), 59, 54,],
  [new Date('2020-03-31'), 59, 56,],
  [new Date('2020-04-01'), 60, 57,],
  [new Date('2020-04-02'), 62, 60,],
  [new Date('2020-04-03'), 64, 63,],
  [new Date('2020-04-04'), 69, 69,],
  [new Date('2020-04-05'), 70, 70,],
  [new Date('2020-04-06'), 79, 73,],
  [new Date('2020-04-07'), 80, 80,],
  [new Date('2020-04-08'), 99, 81,],
  [new Date('2020-04-09'), 109, 85,],
  [new Date('2020-04-10'), 117, 88,],
  [new Date('2020-04-11'), 122, 94,],
  [new Date('2020-04-12'), 129, 98,],
  [new Date('2020-04-13'), 135, 102,],
]
var ventilator = [
  [0, "全国", 15415, 75451, 35578, 126444, 18322],
  [1, "北海道", 577, 3052, 1656, 5285, 706],
  [2, "青森県", 137, 714, 412, 1263, 306],
  [3, "岩手県", 140, 697, 403, 1240, 331],
  [4, "宮城県", 276, 1396, 643, 2315, 222],
  [5, "秋田県", 98, 526, 357, 981, 228],
  [6, "山形県", 127, 605, 358, 1090, 316],
  [7, "福島県", 216, 1072, 576, 1864, 251],
  [8, "茨城県", 349, 1696, 833, 2878, 386],
  [9, "栃木県", 240, 1160, 546, 1946, 144],
  [10, "群馬県", 237, 1141, 574, 1952, 323],
  [11, "埼玉県", 891, 4505, 1934, 7330, 974],
  [12, "千葉県", 748, 3785, 1721, 6254, 974],
  [13, "東京都", 1550, 9084, 3189, 13823, 2557],
  [14, "神奈川県", 1111, 5761, 2305, 9177, 656],
  [15, "新潟県", 260, 1270, 716, 2246, 389],
  [16, "富山県", 122, 593, 336, 1051, 110],
  [17, "石川県", 143, 667, 334, 1144, 90],
  [18, "福井県", 99, 441, 234, 774, 152],
  [19, "山梨県", 97, 473, 248, 818, 190],
  [20, "長野県", 255, 1158, 651, 2064, 181],
  [21, "岐阜県", 253, 1148, 595, 1996, 311],
  [22, "静岡県", 456, 2122, 1081, 3659, 455],
  [23, "愛知県", 1002, 4659, 1875, 7536, 844],
  [24, "三重県", 222, 1042, 527, 1791, 208],
  [25, "滋賀県", 197, 852, 363, 1412, 150],
  [26, "京都府", 304, 1539, 749, 2592, 376],
  [27, "大阪府", 1056, 5336, 2420, 8812, 764],
  [28, "兵庫県", 683, 3224, 1577, 5484, 507],
  [29, "奈良県", 160, 765, 413, 1338, 303],
  [30, "和歌山県", 109, 520, 306, 935, 164],
  [31, "鳥取県", 71, 313, 177, 561, 160],
  [32, "島根県", 84, 366, 231, 681, 219],
  [33, "岡山県", 240, 1087, 571, 1898, 454],
  [34, "広島県", 364, 1636, 817, 2817, 543],
  [35, "山口県", 161, 745, 465, 1371, 393],
  [36, "徳島県", 83, 410, 243, 736, 118],
  [37, "香川県", 119, 540, 303, 962, 278],
  [38, "愛媛県", 162, 749, 441, 1352, 216],
  [39, "高知県", 79, 382, 245, 706, 129],
  [40, "福岡県", 674, 3026, 1408, 5108, 417],
  [41, "佐賀県", 112, 464, 244, 820, 169],
  [42, "長崎県", 171, 741, 429, 1341, 239],
  [43, "熊本県", 235, 985, 537, 1757, 339],
  [44, "大分県", 141, 632, 371, 1144, 211],
  [45, "宮崎県", 145, 594, 342, 1081, 251],
  [46, "鹿児島県", 215, 893, 506, 1614, 286],
  [47, "沖縄県", 247, 888, 313, 1448, 332],
]
ventilator.forEach(e => {
  e.push(Math.round(e[6]/e[5]*100)/10)
  e.push(Math.round(e[6]/e[4]*100)/10)
  e.push(Math.round(e[6]/(e[3]+e[4])*100)/10)
})
var url = 'https://www.mhlw.go.jp/stf/newpage_10829.html'
